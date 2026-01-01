import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"
import { changeStockByName } from "@/lib/menu-data"

export async function GET(request: NextRequest) {
  try {
    const logs = await sql`
      SELECT il.*, i.name as ingredient_name, u.name as user_name 
      FROM inventory_logs il 
      LEFT JOIN ingredients i ON il.ingredient_id = i.id 
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
    const { ingredient_id, user_id, log_type, quantity_changed, reason } = await request.json()

    // 1. Get current stock
    let ingredientResult: any[] = []

    // Try numeric ID lookup
    if (!Number.isNaN(Number(ingredient_id))) {
      const byId = await sql`SELECT id, name, stock_quantity FROM ingredients WHERE id = ${Number(ingredient_id)}`
      if (byId.length > 0) ingredientResult = byId
    }

    if (ingredientResult.length === 0) {
      // Fallback: name
      const byName = await sql`SELECT id, name, stock_quantity FROM ingredients WHERE name = ${String(ingredient_id)} LIMIT 1`
      if (byName.length > 0) ingredientResult = byName
    }

    if (ingredientResult.length === 0) {
      console.error(`[Inventory] Ingredient not found with ID/name: ${ingredient_id}`)
      return NextResponse.json({ error: "Ingredient not found" }, { status: 404 })
    }

    const previousQuantity = ingredientResult[0].stock_quantity
    const newQuantity = Number(previousQuantity) + Number(quantity_changed)

    // 2. Update stock in DB
    await sql`UPDATE ingredients SET stock_quantity = ${newQuantity} WHERE id = ${ingredientResult[0].id}`

    // 3. Log the change
    const insertResult: any = await sql`
      INSERT INTO inventory_logs (ingredient_id, user_id, log_type, quantity_changed, reason, previous_quantity, new_quantity) 
      VALUES (${ingredientResult[0].id}, ${user_id}, ${log_type}, ${quantity_changed}, ${reason}, ${previousQuantity}, ${newQuantity})
    `

    // Normalize result
    let logRow: any = null
    if (insertResult && typeof insertResult.insertId === "number") {
      const sel = await sql`
         SELECT il.*, i.name as ingredient_name, u.name as user_name 
         FROM inventory_logs il 
         LEFT JOIN ingredients i ON il.ingredient_id = i.id 
         LEFT JOIN users u ON il.user_id = u.id 
         WHERE il.id = ${insertResult.insertId} LIMIT 1
       `
      if (Array.isArray(sel)) logRow = sel[0]; else logRow = sel;
    } else {
      // Fallback
      const sel = await sql`
         SELECT il.*, i.name as ingredient_name, u.name as user_name 
         FROM inventory_logs il 
         LEFT JOIN ingredients i ON il.ingredient_id = i.id 
         LEFT JOIN users u ON il.user_id = u.id 
         WHERE il.ingredient_id = ${ingredientResult[0].id} 
         ORDER BY il.created_at DESC LIMIT 1
       `
      if (Array.isArray(sel)) logRow = sel[0]; else logRow = sel;
    }

    return NextResponse.json(logRow, { status: 201 })
  } catch (error) {
    console.error("[Inventory] POST error:", error)
    return NextResponse.json({ error: "Failed to log inventory change" }, { status: 500 })
  }
}
