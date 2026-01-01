import { sql } from "@/lib/db"
import { deductStock, getProductById, setStockByName } from "@/lib/menu-data"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const limit = searchParams.get("limit") || "50"

    const orders = await sql`
      SELECT o.*, u.name as cashier_name FROM orders o 
      LEFT JOIN users u ON o.cashier_id = u.id 
      ORDER BY o.created_at DESC LIMIT ${Number.parseInt(limit)}
    `

    return NextResponse.json(orders)
  } catch (error) {
    console.error("[API] Orders GET error:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { cashier_id, customer_name, total_amount, payment_method, items } = await request.json()

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Order must have at least one item" }, { status: 400 })
    }

    // Generate order number
    const orderNumber = `ORD-${Date.now()}`

    // Validate all items have sufficient stock in menu-data
    for (const item of items) {
      const product = getProductById(item.product_id)
      if (!product || product.stock < item.quantity) {
        return NextResponse.json(
          { error: `Insufficient stock for ${item.name}. Available: ${product?.stock || 0}` },
          { status: 400 }
        )
      }
    }

    // Deduct stock from in-memory menu-data
    for (const item of items) {
      const deducted = deductStock(item.product_id, item.quantity)
      if (!deducted) {
        return NextResponse.json(
          { error: `Failed to deduct stock for product ${item.product_id}` },
          { status: 400 }
        )
      }
      console.log(`[Stock] Deducted ${item.quantity} units of ${item.product_id} from memory. Remaining: ${getProductById(item.product_id)?.stock || 0}`)
    }

    try {
      // First, ensure we have a valid cashier_id by fetching from database
      let validCashierId = cashier_id

      // Always validate the cashier exists in database
      let cashierExists = false
      if (validCashierId) {
        const cashierCheck = await sql`
          SELECT id FROM users WHERE id = ${validCashierId} AND role = 'cashier' LIMIT 1
        `
        cashierExists = cashierCheck.length > 0
      }

      if (!cashierExists) {
        // Get first cashier from database
        const cashiers = await sql`
          SELECT id FROM users WHERE role = 'cashier' LIMIT 1
        `
        if (cashiers.length > 0) {
          validCashierId = cashiers[0].id
          console.log(`[Order] Using valid cashier ID from database: ${validCashierId}`)
        } else {
          console.error("[Order] No cashiers found in database!")
          return NextResponse.json(
            { error: "No cashiers available in database. Database may not be seeded." },
            { status: 500 }
          )
        }
      }

      // Insert order into database
      const orderResult = await sql`
        INSERT INTO orders (order_number, cashier_id, customer_name, total_amount, payment_method, order_status) 
        VALUES (${orderNumber}, ${validCashierId}, ${customer_name}, ${total_amount}, ${payment_method}, 'completed')
      `

      // For MySQL, we need to fetch the inserted record separately
      const insertedOrder = await sql`
        SELECT * FROM orders WHERE order_number = ${orderNumber}
      `

      const orderId = insertedOrder[0]?.id || (orderResult as any).insertId
      console.log(`[DB] Order ${orderNumber} created with ID: ${orderId}`)

      // Insert order items and update product stock in database (best-effort mapping between menu-data and DB)
      for (const item of items) {
        // First, map the menu item ID to database product ID
        const baseName = String(item.name).split(" (")[0]
        let dbProduct: any = null

        try {
          // try numeric id mapping
          if (!Number.isNaN(Number(item.product_id))) {
            const byId = await sql`SELECT id, name, stock_quantity FROM products WHERE id = ${Number(item.product_id)}`
            if (byId.length > 0) dbProduct = byId[0]
          }

          // fallback: try by name
          if (!dbProduct) {
            const byName = await sql`SELECT id, name, stock_quantity FROM products WHERE name = ${baseName} LIMIT 1`
            if (byName.length > 0) dbProduct = byName[0]
          }

          // If we found the product, use its numeric ID for order_items
          let dbProductId = dbProduct?.id

          // If product ID couldn't be resolved, skip order_items insertion to avoid constraint violation
          if (!dbProductId) {
            console.warn(`[DB] Could not map product ID for item: ${baseName} / ${item.product_id}. Skipping order_items insertion.`)
            continue
          }

          await sql`
            INSERT INTO order_items (order_id, product_id, quantity, unit_price, subtotal) 
            VALUES (${orderId}, ${dbProductId}, ${item.quantity}, ${item.price}, ${item.subtotal})
          `

          // Stock deduction is now handled by the trg_deduct_ingredients trigger on order_items insert
          console.log(`[DB] Inserted order item for product ${dbProductId}`)
        } catch (err) {
          console.error("[DB] Error inserting order item", err)
        }
      }

      console.log(`[Order] ✓ Order ${orderNumber} created successfully`)

      // Log activity
      try {
        await sql`INSERT INTO activity_logs (user_id, action, action_type, entity_type, entity_id, details) 
                   VALUES (${validCashierId}, ${`New order ${orderNumber}`}, 'order_created', 'Order', ${orderId}, ${JSON.stringify({ total: total_amount, method: payment_method })})`
      } catch (e) {
        console.error("Failed to log order activity", e)
      }

      return NextResponse.json(
        {
          id: orderResult[0]?.id || orderId,
          order_number: orderNumber,
          customer_name,
          total_amount,
          payment_method,
          order_status: "completed",
          created_at: new Date().toISOString(),
        },
        { status: 201 }
      )
    } catch (dbError) {
      console.error("[DB Error]", dbError)
      // Stock is already deducted from menu-data, but DB failed
      return NextResponse.json(
        {
          id: Date.now(),
          order_number: orderNumber,
          customer_name,
          total_amount,
          payment_method,
          order_status: "pending",
          warning: "Order created and stock reduced in-memory, but database sync may have failed",
          created_at: new Date().toISOString(),
        },
        { status: 201 }
      )
    }
  } catch (error) {
    console.error("[API] Orders POST error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
