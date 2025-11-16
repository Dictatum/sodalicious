import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { name, category, price, description, stock_quantity, reorder_level } = await request.json()

    const result = await sql`
      UPDATE products SET name = ${name}, category = ${category}, price = ${price}, description = ${description}, 
      stock_quantity = ${stock_quantity}, reorder_level = ${reorder_level}, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ${Number.parseInt(params.id)} RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("[v0] Product PUT error:", error)
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await sql`UPDATE products SET is_active = false WHERE id = ${Number.parseInt(params.id)}`
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Product DELETE error:", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
