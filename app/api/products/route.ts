import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"
import { setStockByName } from "@/lib/menu-data"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category")

    if (category) {
      const products = await sql`SELECT * FROM products WHERE is_active = true AND category = ${category} ORDER BY name`
      return NextResponse.json(products)
    } else {
      const products = await sql`SELECT * FROM products WHERE is_active = true ORDER BY name`
      return NextResponse.json(products)
    }
  } catch (error) {
    console.error("[v0] Products GET error:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, category, price, description, stock_quantity, reorder_level } = await request.json()

    const result = await sql`
      INSERT INTO products (name, category, price, description, stock_quantity, reorder_level) 
      VALUES (${name}, ${category}, ${price}, ${description}, ${stock_quantity}, ${reorder_level}) 
      RETURNING *
    `

    // Attempt to sync server in-memory menu-data (best-effort by name)
    try {
      if (result.length > 0) {
        setStockByName(result[0].name, result[0].stock_quantity)
      }
    } catch (e) {
      console.warn("[Products] Failed to sync in-memory menu-data after product create", e)
    }

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("[v0] Products POST error:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
