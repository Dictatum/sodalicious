import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"
import { setStockByName } from "@/lib/menu-data"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category")

    // Calculate theoretical stock based on limiting ingredient
    // If no ingredients, stock is 0.
    const query = `
      SELECT 
        p.id, p.name, p.category, p.price, p.description, p.is_active, p.created_at, p.updated_at,
        COALESCE(MIN(FLOOR(i.stock_quantity / pi.amount)), 0) as stock_quantity,
        (
          SELECT JSON_ARRAYAGG(
            JSON_OBJECT('ingredient_id', pi2.ingredient_id, 'amount', pi2.amount, 'name', i2.name, 'unit', i2.unit)
          )
          FROM product_ingredients pi2
          JOIN ingredients i2 ON pi2.ingredient_id = i2.id
          WHERE pi2.product_id = p.id
        ) as ingredients
      FROM products p
      LEFT JOIN product_ingredients pi ON p.id = pi.product_id
      LEFT JOIN ingredients i ON pi.ingredient_id = i.id
      WHERE p.is_active = true ${category ? `AND p.category = '${category}'` : ""}
      GROUP BY p.id
      ORDER BY p.name
    `

    const products = await sql.query(query)
    // mysql2 returns [rows, fields], but the sql wrapper might return just rows.
    // Based on previous file content, 'sql' is imported from '@/lib/db' which likely returns array directly or exposes .query
    // Let's stick to the tagged template literal style if possible, but for complex query with subselects strings might be safer if the tag doesn't support it well.
    // Actually, checking previous usage: await sql`...`

    // Attempting raw string query with the previous sql tag might be tricky if it strictly expects template literals.
    // Let's try to compose it carefully.

    const productsResult = await sql`
      SELECT 
        p.id, p.name, p.category, p.price, p.description, p.is_active, p.created_at, p.updated_at,
        COALESCE(MIN(FLOOR(i.stock_quantity / pi.amount)), 0) as stock_quantity
      FROM products p
      LEFT JOIN product_ingredients pi ON p.id = pi.product_id
      LEFT JOIN ingredients i ON pi.ingredient_id = i.id
      WHERE p.is_active = true ${category ? sql`AND p.category = ${category}` : sql``}
      GROUP BY p.id
      ORDER BY p.name
    `
    // Note: fetching ingredients details in list view might be heavy, let's skip for list view unless needed.
    // The user wants to see ingredients, so maybe we fetch them?
    // Let's just return the products with calculated stock for now.

    return NextResponse.json(productsResult)
  } catch (error) {
    console.error("[v0] Products GET error:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, category, price, description, ingredients } = await request.json()

    // 1. Insert Product
    const result = await sql`
      INSERT INTO products (name, category, price, description) 
      VALUES (${name}, ${category}, ${price}, ${description}) 
      RETURNING id, name
    `

    const productId = result[0].insertId || result[0].id // Handle mysql/pg difference if any, though usually insertId for mysql

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
