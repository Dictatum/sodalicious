import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

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
    console.error("[Inventory API] GET error:", error)
    return NextResponse.json({ error: "Failed to fetch inventory logs" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  console.log("[Inventory API] Incoming adjustment request")
  try {
    const body = await request.json()
    const { ingredient_id, user_id, log_type, quantity_changed, reason } = body

    if (!ingredient_id) {
      return NextResponse.json({ error: "Ingredient ID is required" }, { status: 400 })
    }

    // 1. Get current stock
    let ingredient: any = null
    const ingredients = await sql`SELECT id, name, stock_quantity FROM ingredients WHERE id = ${ingredient_id} OR name = ${String(ingredient_id)} LIMIT 1`

    if (ingredients && ingredients.length > 0) {
      ingredient = ingredients[0]
    } else {
      console.error(`[Inventory API] Ingredient not found: ${ingredient_id}`)
      return NextResponse.json({ error: "Ingredient not found" }, { status: 404 })
    }

    const previousQuantity = Number(ingredient.stock_quantity)
    const newQuantity = previousQuantity + Number(quantity_changed)

    // 2. Determine valid user_id (fallback to first available manager/cashier if needed)
    let validUserId = null
    if (user_id && !isNaN(Number(user_id))) {
      const userCheck = await sql`SELECT id FROM users WHERE id = ${Number(user_id)} LIMIT 1`
      if (userCheck.length > 0) validUserId = userCheck[0].id
    }

    if (!validUserId) {
      const fallback = await sql`SELECT id FROM users LIMIT 1`
      if (fallback.length > 0) validUserId = fallback[0].id
    }

    // 3. Update stock in DB
    console.log(`[Inventory API] Updating ${ingredient.name}: ${previousQuantity} -> ${newQuantity}`)
    await sql`UPDATE ingredients SET stock_quantity = ${newQuantity} WHERE id = ${ingredient.id}`

    // 4. Log the change
    await sql`
      INSERT INTO inventory_logs (ingredient_id, user_id, log_type, quantity_changed, reason, previous_quantity, new_quantity) 
      VALUES (${ingredient.id}, ${validUserId}, ${log_type}, ${quantity_changed}, ${reason || 'Manual Adjustment'}, ${previousQuantity}, ${newQuantity})
    `

    console.log(`[Inventory API] ✓ Stock updated and logged.`)
    return NextResponse.json({ success: true, newQuantity }, { status: 201 })
  } catch (error) {
    console.error("[Inventory API] ❌ POST error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
