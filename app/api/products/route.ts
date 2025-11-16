import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category")

    let query = `SELECT * FROM products WHERE is_active = true`
    const params: (string | undefined)[] = []

    if (category) {
      query += ` AND category = $1`
      params.push(category)
    }

    query += ` ORDER BY name`

    const products = await sql(
      query,
      params.filter((p) => p !== undefined),
    )
    return NextResponse.json(products)
  } catch (error) {
    console.error("[v0] Products GET error:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, category, price, description, stock_quantity, reorder_level } = await request.json()

    const result = await sql(
      `INSERT INTO products (name, category, price, description, stock_quantity, reorder_level) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, category, price, description, stock_quantity, reorder_level],
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("[v0] Products POST error:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
