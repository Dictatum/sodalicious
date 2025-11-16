import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const logs = await sql`
      SELECT il.*, p.name as product_name, u.name as user_name 
      FROM inventory_logs il 
      LEFT JOIN products p ON il.product_id = p.id 
      LEFT JOIN users u ON il.user_id = u.id 
      ORDER BY il.created_at DESC LIMIT 100
    `

    return NextResponse.json(logs)
  } catch (error) {
    console.error("[v0] Inventory GET error:", error)
    return NextResponse.json({ error: "Failed to fetch inventory logs" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { product_id, user_id, log_type, quantity_changed, reason } = await request.json()

    // Get current stock
    const productResult = await sql`SELECT stock_quantity FROM products WHERE id = ${product_id}`
    if (productResult.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const previousQuantity = productResult[0].stock_quantity
    const newQuantity = previousQuantity + quantity_changed

    // Update stock
    await sql`UPDATE products SET stock_quantity = ${newQuantity} WHERE id = ${product_id}`

    // Log the change
    const logResult = await sql`
      INSERT INTO inventory_logs (product_id, user_id, log_type, quantity_changed, reason, previous_quantity, new_quantity) 
      VALUES (${product_id}, ${user_id}, ${log_type}, ${quantity_changed}, ${reason}, ${previousQuantity}, ${newQuantity}) 
      RETURNING *
    `

    return NextResponse.json(logResult[0], { status: 201 })
  } catch (error) {
    console.error("[v0] Inventory POST error:", error)
    return NextResponse.json({ error: "Failed to log inventory change" }, { status: 500 })
  }
}
