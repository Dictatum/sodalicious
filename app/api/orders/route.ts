import { sql } from "@/lib/db"
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
    console.error("[v0] Orders GET error:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { cashier_id, customer_name, total_amount, payment_method, items } = await request.json()

    // Generate order number
    const orderNumber = `ORD-${Date.now()}`

    // Insert order
    const orderResult = await sql`
      INSERT INTO orders (order_number, cashier_id, customer_name, total_amount, payment_method) 
      VALUES (${orderNumber}, ${cashier_id}, ${customer_name}, ${total_amount}, ${payment_method}) 
      RETURNING *
    `

    const orderId = orderResult[0].id

    // Insert order items and update stock
    for (const item of items) {
      await sql`
        INSERT INTO order_items (order_id, product_id, quantity, unit_price, subtotal) 
        VALUES (${orderId}, ${item.product_id}, ${item.quantity}, ${item.price}, ${item.subtotal})
      `

      // Update product stock
      await sql`UPDATE products SET stock_quantity = stock_quantity - ${item.quantity} WHERE id = ${item.product_id}`

      // Log inventory change
      const prevStock = await sql`SELECT stock_quantity FROM products WHERE id = ${item.product_id}`
      await sql`
        INSERT INTO inventory_logs (product_id, user_id, log_type, quantity_changed, reason, previous_quantity, new_quantity) 
        VALUES (${item.product_id}, ${cashier_id}, 'sale', ${-item.quantity}, ${`Order ${orderNumber}`}, ${prevStock[0].stock_quantity + item.quantity}, ${prevStock[0].stock_quantity})
      `
    }

    return NextResponse.json(orderResult[0], { status: 201 })
  } catch (error) {
    console.error("[v0] Orders POST error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}
