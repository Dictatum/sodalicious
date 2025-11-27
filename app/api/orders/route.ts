import { sql } from "@/lib/db"
import { deductStock, getProductById } from "@/lib/menu-data"
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
      
      if (!validCashierId) {
        // Get first cashier from database
        const cashiers = await sql`
          SELECT id FROM users WHERE role = 'cashier' LIMIT 1
        `
        if (cashiers.length > 0) {
          validCashierId = cashiers[0].id
          console.log(`[Order] No cashier provided, using default cashier ID: ${validCashierId}`)
        } else {
          console.warn("[Order] No cashiers found in database. Attempting to use ID 1 anyway.")
          validCashierId = 1
        }
      }

      // Insert order into database
      const orderResult = await sql`
        INSERT INTO orders (order_number, cashier_id, customer_name, total_amount, payment_method, order_status) 
        VALUES (${orderNumber}, ${validCashierId}, ${customer_name}, ${total_amount}, ${payment_method}, 'pending') 
        RETURNING *
      `

      const orderId = orderResult[0].id
      console.log(`[DB] Order ${orderNumber} created with ID: ${orderId}`)

      // Insert order items and update product stock in database
      for (const item of items) {
        await sql`
          INSERT INTO order_items (order_id, product_id, quantity, unit_price, subtotal) 
          VALUES (${orderId}, ${item.product_id}, ${item.quantity}, ${item.price}, ${item.subtotal})
        `

        // Update product stock in database
        await sql`
          UPDATE products 
          SET stock_quantity = stock_quantity - ${item.quantity} 
          WHERE id = ${item.product_id}
        `

        console.log(`[DB] Updated stock for product ${item.product_id}: -${item.quantity} units`)
      }

      console.log(`[Order] ✓ Order ${orderNumber} created successfully and database updated`)

      return NextResponse.json(
        {
          id: orderResult[0].id,
          order_number: orderNumber,
          customer_name,
          total_amount,
          payment_method,
          order_status: "pending",
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
