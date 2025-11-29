import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"
import { setStockByName } from "@/lib/menu-data"

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const { name, category, price, description, stock_quantity, reorder_level } = await request.json()

    const result = await sql`
      UPDATE products SET name = ${name}, category = ${category}, price = ${price}, description = ${description}, 
      stock_quantity = ${stock_quantity}, reorder_level = ${reorder_level}, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ${Number.parseInt(id)} RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    // Attempt to sync server in-memory menu-data using the returned name/stock
    try {
      if (result.length > 0) {
        setStockByName(result[0].name, result[0].stock_quantity)
      }
    } catch (e) {
      console.warn("[Products] Failed to sync in-memory menu-data after product update", e)
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("[v0] Product PUT error:", error)
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await sql`UPDATE products SET is_active = false WHERE id = ${Number.parseInt(id)}`
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Product DELETE error:", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
