import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"
import { setStockByName } from "@/lib/menu-data"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const categoryName = searchParams.get("category")

    // Construct query without nested template literals
    const productsResult = await sql`
      SELECT 
        p.id, p.name, p.category, p.price, p.description, p.is_active, p.created_at, p.updated_at,
        p.stock_quantity,
        COALESCE(
          (
            SELECT i2.name 
            FROM product_ingredients pi2 
            JOIN ingredients i2 ON pi2.ingredient_id = i2.id 
            WHERE pi2.product_id = p.id 
            ORDER BY (i2.stock_quantity / pi2.amount) ASC 
            LIMIT 1
          ),
          'Recipe Missing'
        ) as bottleneck_ingredient,
        (
          SELECT GROUP_CONCAT(CONCAT(i3.name, ' (', pi3.amount, i3.unit, ')') SEPARATOR ', ')
          FROM product_ingredients pi3
          JOIN ingredients i3 ON pi3.ingredient_id = i3.id
          WHERE pi3.product_id = p.id
        ) as ingredients_list
      FROM products p
      LEFT JOIN product_ingredients pi ON p.id = pi.product_id
      LEFT JOIN ingredients i ON pi.ingredient_id = i.id
      WHERE p.is_active = true
      GROUP BY p.id
      ORDER BY p.name
    `

    // Manual filtering for category if provided (since nested SQL tags are tricky with our current wrapper)
    let filtered = productsResult
    if (categoryName && categoryName !== "All") {
      filtered = productsResult.filter((p: any) => p.category === categoryName)
    }

    return NextResponse.json(filtered)
  } catch (error) {
    console.error("[Products] GET error:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, category, price, description, stock_quantity, min_threshold, ingredients } = await request.json()

    // 1. Insert Product
    const result = await sql`
      INSERT INTO products (name, category, price, description, stock_quantity, min_threshold) 
      VALUES (${name}, ${category}, ${price}, ${description}, ${stock_quantity || 0}, ${min_threshold || 10}) 
    `

    // For mysql2, result is ResultSetHeader which has insertId property.
    // However, the sql wrapper returns [rows] = await conn.query, so 'result' IS the ResultSetHeader object.
    const productId = (result as any).insertId

    // 2. Insert Ingredients
    if (ingredients && Array.isArray(ingredients) && ingredients.length > 0 && productId) {
      for (const ing of ingredients) {
        await sql`
          INSERT INTO product_ingredients (product_id, ingredient_id, amount)
          VALUES (${productId}, ${ing.ingredient_id}, ${ing.amount})
        `
      }
    }

    return NextResponse.json({ success: true, id: productId }, { status: 201 })
  } catch (error) {
    console.error("[v0] Products POST error:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
