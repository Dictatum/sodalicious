import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    console.log("[Product API] Fetching ID:", id)

    // 1. Fetch Product
    const productResult = await sql`SELECT * FROM products WHERE id = ${id}`
    console.log("[Product API] Result count:", productResult.length)

    if (productResult.length === 0) {
      console.log("[Product API] Product not found")
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }
    const product = productResult[0]
    console.log("[Product API] Product found:", product.name, product.price)

    // 2. Fetch Ingredients (Recipe)
    const ingredients = await sql`
      SELECT 
        pi.ingredient_id, 
        i.name, 
        i.unit, 
        pi.amount 
      FROM product_ingredients pi
      JOIN ingredients i ON pi.ingredient_id = i.id
      WHERE pi.product_id = ${id}
    `

    return NextResponse.json({ ...product, ingredients })
  } catch (error) {
    console.error("[Product API] GET error:", error)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { name, category, price, description, stock_quantity, min_threshold, ingredients } = body

    // 1. Update Product
    await sql`
      UPDATE products 
      SET 
        name = ${name}, 
        category = ${category}, 
        price = ${price}, 
        description = ${description},
        stock_quantity = ${stock_quantity}, 
        min_threshold = ${min_threshold}
      WHERE id = ${id}
    `

    // 2. Update Ingredients (Recipe)
    // First, delete existing
    await sql`DELETE FROM product_ingredients WHERE product_id = ${id}`

    // Then insert new if any
    if (ingredients && Array.isArray(ingredients) && ingredients.length > 0) {
      for (const ing of ingredients) {
        if (ing.ingredient_id && ing.amount > 0) {
          await sql`
            INSERT INTO product_ingredients (product_id, ingredient_id, amount)
            VALUES (${id}, ${ing.ingredient_id}, ${ing.amount})
          `
        }
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[Product API] PUT error:", error)
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Cascade delete should handle ingredients, but we can be explicit if needed.
    // Schema says ON DELETE CASCADE, so deleting product is enough.
    await sql`DELETE FROM products WHERE id = ${id}`

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[Product API] DELETE error:", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
