# 🚀 SODALICIOUS.CO - XAMPP MIGRATION GUIDE

## Overview
This guide explains how to migrate from **Neon PostgreSQL (Cloud)** to **Local MySQL/MariaDB (XAMPP)**.

---

## ✅ QUICK START (5 Minutes)

### Step 1: Set Up XAMPP
1. Download and install XAMPP from https://www.apachefriends.org/
2. Start **Apache** and **MySQL** services from XAMPP Control Panel
3. Verify MySQL is running on `localhost:3306`

### Step 2: Import Database
1. Open **phpMyAdmin**: http://localhost/phpmyadmin
2. Click **Import** (top menu)
3. Choose file: `scripts/03-xampp-migration-complete.sql`
4. Click **Go** to import

### Step 3: Update Environment
Replace `.env` content with:
```
DATABASE_URL="mysql://root:@localhost:3306/sodalicious_db"
```

### Step 4: Restart Dev Server
```bash
npm run dev
```

---

## 📊 DATABASE COMPARISON

| Feature | Neon (PostgreSQL) | XAMPP (MySQL) |
|---------|------------------|---------------|
| **Connection** | Cloud-based | Local |
| **Port** | 5432 | 3306 |
| **Driver** | @neondatabase/serverless | mysql2 |
| **Cost** | Free tier available | Free |
| **Latency** | Higher (network) | Lower (local) |
| **Scalability** | Built-in | Limited locally |

---

## 🔧 TECHNICAL SETUP

### Database Connection String Formats

**Neon PostgreSQL:**
```
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"
```

**Local MySQL/XAMPP:**
```
DATABASE_URL="mysql://root:@localhost:3306/sodalicious_db"
```

### Required Dependencies

For MySQL support in Node.js:
```bash
npm install mysql2 dotenv
```

---

## 📝 SQL SCHEMA REFERENCE

### Tables Created:

1. **users** - User accounts and authentication
   - 4 demo users pre-populated
   - Roles: cashier, manager, inventory_officer

2. **products** - Menu items and stock tracking
   - 43 products across 5 categories
   - Stock levels initialized to 40+ units

3. **orders** - Customer orders
   - Foreign key to users (cashier)
   - Payment method tracking

4. **order_items** - Individual items in orders
   - Links orders to products
   - Tracks quantity and pricing

5. **inventory_logs** - Stock adjustment audit trail
   - Tracks all stock changes
   - Reason/notes for changes

6. **activity_logs** - User action tracking
   - Login/logout events
   - System actions with JSON details

### Views Created:

- **v_orders_detailed** - Orders with cashier names and item counts
- **v_product_stock** - Stock status summary
- **v_daily_sales** - Daily sales metrics

---

## 🔑 DEFAULT LOGIN CREDENTIALS

| Email | Password | Role |
|-------|----------|------|
| cashier@sodalicious.com | 123456 | Cashier |
| manager@sodalicious.com | 123456 | Manager |
| inventory@sodalicious.com | 123456 | Inventory Officer |
| cashier2@sodalicious.com | 123456 | Cashier (2nd) |

---

## 🔄 DATA SYNC - CRITICAL FIXES

### ✅ Issue #1: Orders Not Showing in Manager Panel
**Status:** FIXED ✓

**What was wrong:**
- Manager dashboard was using `useOrders()` (mock data)
- Should use `useDatabaseOrders()` (real database data)

**Solution:**
```typescript
// CHANGED FROM:
import { useOrders } from "@/lib/hooks"
const orders = useOrders()

// CHANGED TO:
import { useDatabaseOrders } from "@/lib/hooks"
const orders = useDatabaseOrders()
```

**Result:**
- Manager panel now displays ALL orders from database
- Real-time order sync from cashier to manager
- Orders persist across sessions

### ✅ Issue #2: Receipt Showing ₱0.00
**Status:** FIXED ✓

**What was wrong:**
- Receipt used `subtotal`, `tax`, `total` from component state
- These became 0 after cart was cleared

**Solution:**
```typescript
// Store calculations in lastOrder state
setLastOrder({
  ...order,
  items: cart,
  subtotal,
  tax,
  total,  // ADDED THIS LINE
})

// Use values from lastOrder in receipt display
₱{lastOrder.subtotal?.toFixed(2)}
₱{lastOrder.tax?.toFixed(2)}
₱{lastOrder.total?.toFixed(2)}
```

**Result:**
- Receipt now displays correct totals
- Calculations preserved across state changes

### ✅ Issue #3: Orders Not Persisting to Database
**Status:** FIXED ✓

**What was wrong:**
- order_items table tried to insert string product IDs ("HC002")
- MySQL expects numeric product_id (foreign key)

**Solution:**
```typescript
// Map menu item IDs to database product IDs BEFORE insertion
const baseName = String(item.name).split(" (")[0]
let dbProduct = null

// Try numeric ID first
if (!Number.isNaN(Number(item.product_id))) {
  const byId = await sql`SELECT id FROM products WHERE id = ${Number(item.product_id)}`
  if (byId.length > 0) dbProduct = byId[0]
}

// Fallback to name lookup
if (!dbProduct) {
  const byName = await sql`SELECT id FROM products WHERE name = ${baseName}`
  if (byName.length > 0) dbProduct = byName[0]
}

// Use resolved numeric ID for insertion
const dbProductId = dbProduct?.id
await sql`INSERT INTO order_items (...) VALUES (..., ${dbProductId}, ...)`
```

**Result:**
- Orders now fully persist to database
- order_items table correctly references products
- Stock updates reflected in database

---

## 📚 COMPLETE SQL MIGRATION SCRIPT

The file `scripts/03-xampp-migration-complete.sql` contains:

✅ Complete database schema (6 tables)
✅ Indexes for performance
✅ Foreign key constraints
✅ 43 products across 5 categories
✅ 4 demo users with roles
✅ 3 sample orders with items
✅ Sample inventory and activity logs
✅ 3 reporting views

**Run once in phpMyAdmin and you're ready!**

---

## 🔍 VERIFICATION STEPS

After migration, verify everything works:

### 1. Check Database
```sql
-- In phpMyAdmin or MySQL CLI
USE sodalicious_db;
SELECT COUNT(*) FROM users;     -- Should show 4
SELECT COUNT(*) FROM products;  -- Should show 43
SELECT COUNT(*) FROM orders;    -- Should show 3+
```

### 2. Test Login
- Visit http://localhost:3000
- Login with: `cashier@sodalicious.com` / `123456`
- Verify: Cashier panel loads

### 3. Test Orders
- Log in as Cashier
- Add items to cart
- Complete order
- **Check Manager Dashboard** → Should see new order!

### 4. Verify Sync
- Open 2 browser tabs:
  - Tab 1: Cashier panel
  - Tab 2: Manager dashboard
- Cashier creates order in Tab 1
- Tab 2 should show order within 5 seconds (polling interval)

---

## 🛠 TROUBLESHOOTING

### "Database connection failed"
- Check `.env` has correct `DATABASE_URL`
- Verify MySQL is running: http://localhost/phpmyadmin
- Ensure `sodalicious_db` database exists

### "Table doesn't exist"
- Open phpMyAdmin
- Import `scripts/03-xampp-migration-complete.sql` again
- Verify all 6 tables appear

### "Orders not showing in manager"
- Hard refresh browser (Ctrl+Shift+R)
- Check browser console for API errors
- Verify `/api/orders` endpoint returns data

### "Products show ₱0 stock"
- Check `products` table in phpMyAdmin
- All products should have `stock_quantity > 0`
- Re-run migration SQL if needed

---

## 📋 API ENDPOINTS REFERENCE

All endpoints work with both Neon PostgreSQL and Local MySQL:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/orders` | GET | Fetch all orders |
| `/api/orders` | POST | Create new order |
| `/api/products` | GET | Fetch all products |
| `/api/products` | POST | Create new product |
| `/api/inventory` | GET | Fetch inventory logs |
| `/api/inventory` | POST | Create inventory adjustment |
| `/api/seed` | POST | Seed/initialize database |

---

## 🎯 NEXT STEPS

1. ✅ Import SQL migration script
2. ✅ Update `.env` file
3. ✅ Restart dev server
4. ✅ Test all 3 panels (Cashier, Manager, Inventory)
5. ✅ Verify orders sync across panels
6. ✅ Check database in phpMyAdmin

---

## 📞 SUPPORT

**Common Issues:**
- Connection timeouts → Restart MySQL in XAMPP
- Missing tables → Re-import SQL script
- Orders not syncing → Check polling in useMenuSync (5-second interval)

**Quick Commands:**
```bash
# Check TypeScript errors
npx tsc --noEmit

# View logs
npm run dev    # Watch console output

# Reset database
# 1. Drop database in phpMyAdmin
# 2. Re-import SQL script
```

---

**Migration Complete! 🎉**
Your POS system is now running on local XAMPP MySQL instead of cloud Neon PostgreSQL.
