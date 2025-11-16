# Sodalicious.Co - POS & Inventory Management System

A modern, full-stack Point of Sale (POS) and inventory management system built for Sodalicious.Co café. Features real-time inventory tracking, multi-user role-based access, comprehensive analytics, and complete order history management.

## Overview

This is a production-ready POS system designed for fast-paced café environments with separate interfaces for:
- **Cashiers**: Quick order entry and checkout
- **Managers**: Analytics, reporting, and business intelligence
- **Inventory Officers**: Stock management and tracking

## Features

### Core Functionality

**Cashier Panel**
- Fast product selection with search and filtering
- Category-based product browsing
- Real-time stock availability display
- Shopping cart with quantity adjustments
- Multiple payment methods (Cash, GCash, Card, E-wallet)
- Digital receipt generation
- Customer name input for orders
- Auto-logout for security

**Manager Dashboard**
- Real-time sales analytics and KPIs
- Daily sales, order count, and low-stock tracking
- Top-selling products overview
- Complete order management and tracking
- Order history with payment method breakdown
- User management with role assignment
- Comprehensive reporting (Daily, Weekly, Monthly)
- Sales analysis by payment method
- Inventory reports with stock levels

**Inventory Management**
- Real-time stock tracking
- Low-stock alerts (items below reorder level)
- Stock adjustment with reason logging
- Supplier delivery tracking
- Complete inventory history and audit trail
- Restock log documentation

**Product Management**
- Add/edit/delete products
- Category organization
- Price management
- Description and details
- Stock level configuration
- Reorder level settings

**User Management**
- Role-based access control (Cashier, Manager, Inventory Officer)
- User creation and account management
- Activity tracking per user
- Login/logout logging

**Activity & Audit Trails**
- Complete audit logs of all system actions
- User activity tracking
- Order history with customer details
- Inventory movement logs
- Timestamp tracking for compliance

## Tech Stack

### Frontend
- **React 19.2** - UI framework
- **Next.js 16** - Full-stack framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Shadcn/ui** - Component library
- **Recharts** - Data visualization
- **React Hook Form** - Form management
- **Lucide React** - Icons
- **Sonner** - Toast notifications

### Backend
- **Next.js API Routes** - REST API
- **Neon PostgreSQL** - Database
- **@neondatabase/serverless** - Database client

### Development
- **Tailwind CSS v4** - Utility-first CSS
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **TypeScript** - Type checking

## Project Structure

\`\`\`
sodalicious-pos/
├── app/
│   ├── api/
│   │   ├── auth/login/                 # Authentication endpoint
│   │   ├── products/                   # Product CRUD operations
│   │   ├── orders/                     # Order management
│   │   ├── inventory/                  # Inventory operations
│   │   └── activity-logs/              # Activity logging
│   ├── layout.tsx                      # Root layout
│   ├── page.tsx                        # Main entry point
│   └── globals.css                     # Global styles with design tokens
├── components/
│   ├── login-panel.tsx                 # Login interface
│   ├── cashier-panel.tsx               # Cashier POS interface
│   ├── manager-dashboard.tsx           # Manager main dashboard
│   ├── inventory-panel.tsx             # Inventory management
│   ├── manager/
│   │   ├── dashboard.tsx               # Analytics dashboard
│   │   ├── product-management.tsx      # Product CRUD
│   │   ├── inventory-management.tsx    # Inventory control
│   │   ├── order-management.tsx        # Order tracking
│   │   ├── user-management.tsx         # User admin
│   │   └── reports.tsx                 # Report generation
│   ├── theme-provider.tsx              # Theme context
│   └── ui/                             # Shadcn components
├── lib/
│   ├── db.ts                           # Database connection setup
│   ├── store.ts                        # Data store and utilities
│   ├── hooks.ts                        # Custom React hooks
│   └── utils.ts                        # Utility functions
├── scripts/
│   ├── 01-init-schema.sql              # Database schema creation
│   └── 02-seed-data.sql                # Initial data seeding
├── public/                             # Static assets
├── package.json                        # Dependencies
└── tsconfig.json                       # TypeScript config
\`\`\`

## Database Schema

### Tables

**users**
- `id` (SERIAL PRIMARY KEY)
- `email` (VARCHAR UNIQUE NOT NULL)
- `password_hash` (VARCHAR NOT NULL)
- `name` (VARCHAR NOT NULL)
- `role` (VARCHAR: 'cashier', 'manager', 'inventory_officer')
- `is_active` (BOOLEAN)
- `created_at`, `updated_at` (TIMESTAMP)

**products**
- `id` (SERIAL PRIMARY KEY)
- `name`, `category` (VARCHAR)
- `price` (DECIMAL)
- `description` (TEXT)
- `stock_quantity` (INT)
- `reorder_level` (INT)
- `is_active` (BOOLEAN)
- `created_at`, `updated_at` (TIMESTAMP)

**orders**
- `id` (SERIAL PRIMARY KEY)
- `order_number` (VARCHAR UNIQUE)
- `cashier_id` (INT FOREIGN KEY)
- `customer_name` (VARCHAR)
- `total_amount` (DECIMAL)
- `payment_method` ('cash', 'gcash', 'card', 'e-wallet')
- `order_status` ('pending', 'completed', 'cancelled')
- `created_at`, `updated_at` (TIMESTAMP)

**order_items**
- `id` (SERIAL PRIMARY KEY)
- `order_id` (INT FOREIGN KEY)
- `product_id` (INT FOREIGN KEY)
- `quantity`, `unit_price`, `subtotal` (INT/DECIMAL)
- `created_at` (TIMESTAMP)

**inventory_logs**
- `id` (SERIAL PRIMARY KEY)
- `product_id`, `user_id` (INT FOREIGN KEY)
- `log_type` ('sale', 'restock', 'adjustment', 'delivery')
- `quantity_changed` (INT)
- `reason` (VARCHAR)
- `previous_quantity`, `new_quantity` (INT)
- `created_at` (TIMESTAMP)

**activity_logs**
- `id` (SERIAL PRIMARY KEY)
- `user_id` (INT FOREIGN KEY)
- `action`, `action_type` (VARCHAR)
- `entity_type`, `entity_id` (VARCHAR/INT)
- `details` (JSONB)
- `created_at` (TIMESTAMP)

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `GET /api/products/[id]` - Get product details
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create new order
- `GET /api/orders/[id]` - Get order details
- `PUT /api/orders/[id]` - Update order status

### Inventory
- `GET /api/inventory` - Get inventory logs
- `POST /api/inventory` - Create inventory adjustment
- `GET /api/inventory/low-stock` - Get low-stock alerts

### Activity Logs
- `GET /api/activity-logs` - Get activity history
- `POST /api/activity-logs` - Log activity

## Setup & Installation

### Prerequisites
- Node.js 18+ and npm/pnpm
- Neon PostgreSQL database

### Step 1: Clone & Install
\`\`\`bash
# Clone the repository
git clone <repo-url>
cd sodalicious-pos

# Install dependencies
npm install
# or
pnpm install
\`\`\`

### Step 2: Database Setup
\`\`\`bash
# Copy environment variables
cp .env.example .env.local

# Update DATABASE_URL with your Neon connection string
# Format: postgresql://user:password@host/database
\`\`\`

### Step 3: Initialize Database
1. Go to your Neon project dashboard
2. Open the SQL Editor
3. Run `scripts/01-init-schema.sql` to create tables
4. Run `scripts/02-seed-data.sql` to populate initial data

### Step 4: Run Development Server
\`\`\`bash
npm run dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Default Login Credentials

| Role | Email | Password |
|------|-------|----------|
| Cashier | cashier@sodalicious.com | 123456 |
| Manager | manager@sodalicious.com | 123456 |
| Inventory Officer | inventory@sodalicious.com | 123456 |

> **Note**: Change these passwords in production!

## Design System

### Color Palette
- **Primary**: Warm copper/amber (#D97706)
- **Secondary**: Warm cream (#FEF3C7)
- **Dark**: Deep charcoal (#1F2937)
- **Neutral**: Professional grays (#F3F4F6, #E5E7EB, #9CA3AF)
- **Accent**: Success green (#10B981), Warning red (#EF4444)

### Typography
- **Headings**: Geist family with tracked spacing
- **Body**: Clear, readable sans-serif with 1.5-1.6 line height
- **Font Sizes**: Scale from 12px to 32px following Tailwind standards

### Components
- **Radius**: Extra-large rounded corners (12px) for modern aesthetic
- **Shadows**: Layered shadows for depth
- **Spacing**: Generous padding (16px, 24px, 32px gaps)
- **Transitions**: Smooth hover and interaction states

## Usage Guide

### For Cashiers
1. Login with cashier credentials
2. Search or browse products by category
3. Click products to add to cart
4. Adjust quantities as needed
5. Enter customer name (optional)
6. Select payment method
7. Complete transaction
8. Print/view receipt

### For Managers
1. Login with manager credentials
2. View real-time analytics on dashboard
3. Manage products in Product Management tab
4. Track inventory in Inventory tab
5. Review orders in Order Management tab
6. Generate reports (Daily/Weekly/Monthly)
7. Manage users and roles
8. Monitor activity logs

### For Inventory Officers
1. Login with inventory officer credentials
2. View current stock levels
3. Process stock adjustments with reasons
4. Log supplier deliveries
5. Review low-stock alerts
6. Check inventory movement history

## Development

### Available Scripts

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
\`\`\`

### Adding New Features

1. **New Product Fields**: Update schema in `01-init-schema.sql`, then update product type in `lib/store.ts`
2. **New API Endpoints**: Create route in `app/api/` following existing patterns
3. **New Components**: Add to `components/` and import in relevant panels
4. **Database Migrations**: Create new SQL file in `scripts/` with version number

## Performance

- **Database Indexes**: Optimized queries with strategic indexing
- **Caching**: React component memoization for performance
- **Pagination**: Large datasets paginated for smooth UI
- **Real-time Updates**: Instant inventory and order status updates

## Security

- **Role-Based Access Control**: Separate interfaces per user role
- **Password Hashing**: bcrypt for secure password storage
- **Activity Audit Trail**: Complete logging of all actions
- **Row-Level Security**: Data isolation per user where applicable
- **Input Validation**: Form validation on frontend and backend

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` is correctly set in environment variables
- Check Neon project is active and not paused
- Ensure SQL scripts have been run in correct order

### Login Fails
- Confirm `02-seed-data.sql` has been executed
- Verify password hashes are present in users table
- Check user role is correctly set

### Inventory Sync Issues
- Verify product stock quantities match expected values
- Check for duplicate inventory adjustments
- Review inventory logs for discrepancies

## Contributing

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes and commit: `git commit -am 'Add feature'`
3. Push to branch: `git push origin feature/feature-name`
4. Submit pull request

## License

Private project for Sodalicious.Co

## Support

For issues and questions:
1. Check troubleshooting section above
2. Review database logs for SQL errors
3. Check browser console for client-side errors
4. Contact development team

## Version History

- **v1.0.0** (Current) - Complete POS and inventory system with all core features, Neon PostgreSQL integration, role-based access, comprehensive reporting, and activity logging.

---
#   s o d a l i c i o u s  
 #   s o d a l i c i o u s  
 