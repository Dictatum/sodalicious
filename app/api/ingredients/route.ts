import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Get all ingredients with status
    const ingredients = await sql`
      SELECT 
        id, 
        name, 
        unit, 
        stock_quantity, 
        reorder_level,
        CASE 
          WHEN stock_quantity < 18 THEN 'LOW' 
          WHEN stock_quantity <= 50 THEN 'MEDIUM' 
          ELSE 'OK' 
        END as stock_status
      FROM ingredients 
      ORDER BY name ASC
    `
    return NextResponse.json(ingredients)
  } catch (error) {
    console.error("[Ingredients] GET error:", error)
    return NextResponse.json({ error: "Failed to fetch ingredients" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, unit, stock_quantity, reorder_level } = await request.json()

    const result: any = await sql`
      INSERT INTO ingredients (name, unit, stock_quantity, reorder_level) 
      VALUES (${name}, ${unit}, ${stock_quantity}, ${reorder_level})
    `

    // Attempt to return the new row
    let newId: number = 0;
    if (result && result.insertId) newId = result.insertId;

    return NextResponse.json({ id: newId, name, unit, stock_quantity, reorder_level }, { status: 201 })
  } catch (error) {
    console.error("[Ingredients] POST error:", error)
    return NextResponse.json({ error: "Failed to create ingredient" }, { status: 500 })
  }
}
