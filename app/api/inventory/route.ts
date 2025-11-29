import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"
import { changeStockByName } from "@/lib/menu-data"

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

    // Get current stock + name - try numeric ID first, then name-based lookup
    let productResult: any[] = []
    
    // Try numeric ID lookup
    if (!Number.isNaN(Number(product_id))) {
      const byId = await sql`SELECT id, name, stock_quantity FROM products WHERE id = ${Number(product_id)}`
      if (byId.length > 0) productResult = byId
    }
    
    // Fallback: try string ID as product name (menu items like "Americano")
    if (productResult.length === 0) {
      const byName = await sql`SELECT id, name, stock_quantity FROM products WHERE name = ${String(product_id)} LIMIT 1`
      if (byName.length > 0) productResult = byName
    }
    
    if (productResult.length === 0) {
      console.error(`[Inventory] Product not found with ID/name: ${product_id}`)
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const previousQuantity = productResult[0].stock_quantity
    const newQuantity = previousQuantity + quantity_changed

    // Update stock in DB
    await sql`UPDATE products SET stock_quantity = ${newQuantity} WHERE id = ${productResult[0].id}`

    // Log the change (avoid PostgreSQL-only RETURNING for MySQL compatibility)
    const insertResult: any = await sql`
      INSERT INTO inventory_logs (product_id, user_id, log_type, quantity_changed, reason, previous_quantity, new_quantity) 
      VALUES (${productResult[0].id}, ${user_id}, ${log_type}, ${quantity_changed}, ${reason}, ${previousQuantity}, ${newQuantity})
    `

    // Normalize inserted row for both Postgres (RETURNING rows) and MySQL (result.insertId)
    let logRow: any = null
    if (Array.isArray(insertResult) && insertResult.length > 0) {
      // PostgreSQL (neon) returns inserted rows when RETURNING is used
      logRow = insertResult[0]
    } else if (insertResult && typeof insertResult.insertId === "number") {
      // mysql2 returns an object with insertId — select the inserted row back
      const sel = await sql`SELECT il.*, p.name as product_name, u.name as user_name FROM inventory_logs il LEFT JOIN products p ON il.product_id = p.id LEFT JOIN users u ON il.user_id = u.id WHERE il.id = ${insertResult.insertId} LIMIT 1`
      if (Array.isArray(sel)) logRow = sel[0]
      else logRow = sel
    } else {
      // Fallback: select most recent matching log for this product/user
      const sel = await sql`SELECT il.*, p.name as product_name, u.name as user_name FROM inventory_logs il LEFT JOIN products p ON il.product_id = p.id LEFT JOIN users u ON il.user_id = u.id WHERE il.product_id = ${productResult[0].id} AND il.user_id = ${user_id} ORDER BY il.created_at DESC LIMIT 1`
      if (Array.isArray(sel)) logRow = sel[0]
      else logRow = sel
    }
    // Update server in-memory menu-data (best-effort mapping by product name)
    try {
      const baseName = productResult[0].name
      changeStockByName(baseName, quantity_changed)
    } catch (e) {
      // non-fatal if mapping fails
      console.warn("[Inventory] Failed to sync in-memory menu-data by name:", e)
    }

    return NextResponse.json(logRow, { status: 201 })
  } catch (error) {
    console.error("[v0] Inventory POST error:", error)
    return NextResponse.json({ error: "Failed to log inventory change" }, { status: 500 })
  }
}
