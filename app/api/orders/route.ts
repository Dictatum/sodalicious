import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const limit = searchParams.get("limit") || "50"

    const orders = await sql`
      SELECT o.*, u.name as cashier_name FROM orders o 
      LEFT JOIN users u ON o.cashier_id = u.id 
      ORDER BY o.created_at DESC LIMIT ${Number.parseInt(limit)}
    `

    // Fetch items for these orders
    if (orders.length > 0) {
      const orderIds = orders.map((o: any) => o.id)
      const items = await sql`
        SELECT oi.*, p.name 
        FROM order_items oi
        LEFT JOIN products p ON oi.product_id = p.id
        WHERE oi.order_id IN (${orderIds.join(',')})
      `

      // Attach items to orders
      for (const order of orders) {
        (order as any).items = items.filter((i: any) => i.order_id === order.id)
      }
    }

    return NextResponse.json(orders)
  } catch (error) {
    console.error("[API] Orders GET error:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  console.log("[Order API] Incoming POST request")
  try {
    const body = await request.json()
    const { cashier_id, customer_name, total_amount, payment_method, items } = body
    console.log(`[Order API] Processing order with ${items?.length} items`)

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Order must have at least one item" }, { status: 400 })
    }

    const orderNumber = `ORD-${Date.now()}`

    // Create order and decrement stock
    try {
      // Ensure numeric cashierId
      let validCashierId = 1
      if (cashier_id && !isNaN(Number(cashier_id))) {
        validCashierId = Number(cashier_id)
      } else {
        const fallback = await sql`SELECT id FROM users WHERE role = 'cashier' LIMIT 1`
        if (fallback.length > 0) validCashierId = fallback[0].id
      }

      console.log(`[Order API] Using Cashier ID: ${validCashierId}`)

      // Create Order
      const orderResult = await sql`
        INSERT INTO orders (order_number, cashier_id, customer_name, total_amount, payment_method, order_status) 
        VALUES (${orderNumber}, ${validCashierId}, ${customer_name}, ${total_amount}, ${payment_method}, 'completed')
      `

      const inserted = await sql`SELECT id FROM orders WHERE order_number = ${orderNumber} LIMIT 1`
      const orderId = inserted[0]?.id || (orderResult as any).insertId
      console.log(`[Order API] Created DB Order ID: ${orderId}`)

      for (const item of items) {
        const fullName = String(item.name)
        const baseName = fullName.split(" (")[0]
        console.log(`[Order API] Mapping item: "${fullName}" (Base: "${baseName}")`)

        let products = await sql`SELECT id FROM products WHERE name = ${fullName} LIMIT 1`
        if (!products || products.length === 0) {
          products = await sql`SELECT id FROM products WHERE name = ${baseName} LIMIT 1`
        }

        if (products && products.length > 0) {
          const dbProductId = products[0].id
          console.log(`[Order API] Found DB Product: ${fullName} (ID: ${dbProductId})`)

          await sql`
            INSERT INTO order_items (order_id, product_id, quantity, unit_price, subtotal) 
            VALUES (${orderId}, ${dbProductId}, ${item.quantity}, ${item.price}, ${item.subtotal || (Number(item.price) * Number(item.quantity))})
          `

          // Deduct Product Stock in Database
          await sql`
            UPDATE products 
            SET stock_quantity = stock_quantity - ${item.quantity}
            WHERE id = ${dbProductId}
          `
          console.log(`[Order API] Deducted ${item.quantity} from product stock (ID: ${dbProductId})`)

          // Ingredient Deduction Logic
          const recipes = await sql`
            SELECT pi.ingredient_id, pi.amount, i.stock_quantity, i.name as ing_name
            FROM product_ingredients pi
            JOIN ingredients i ON pi.ingredient_id = i.id
            WHERE pi.product_id = ${dbProductId}
          `

          console.log(`[Order API] Found ${recipes.length} ingredients for ${baseName}`)

          for (const recipe of recipes) {
            const deduction = Number(recipe.amount) * Number(item.quantity)
            const prevStock = Number(recipe.stock_quantity)
            const newStock = prevStock - deduction

            console.log(`[Order API] Deducting ${deduction} from ${recipe.ing_name}. Prev: ${prevStock}, New: ${newStock}`)

            await sql`UPDATE ingredients SET stock_quantity = ${newStock} WHERE id = ${recipe.ingredient_id}`

            await sql`
              INSERT INTO inventory_logs (ingredient_id, user_id, log_type, quantity_changed, reason)
              VALUES (${recipe.ingredient_id}, ${validCashierId}, 'sale', ${-deduction}, ${`Order ${orderNumber}`})
            `
          }
        } else {
          console.warn(`[Order API] ⚠️ Could not find product in DB: ${baseName}`)
        }
      }

      console.log(`[Order API] ✓ Order ${orderNumber} fully processed and synced.`)

      return NextResponse.json({
        id: orderId,
        order_number: orderNumber,
        customer_name,
        total_amount,
        payment_method,
        order_status: "completed",
        created_at: new Date().toISOString()
      }, { status: 201 })

    } catch (dbError: any) {
      console.error("[Order API] ❌ Database synchronization failed:", dbError)
      return NextResponse.json({
        order_number: orderNumber,
        order_status: "partial",
        warning: `Database sync failed: ${dbError.message || dbError}`,
        created_at: new Date().toISOString()
      }, { status: 201 })
    }
  } catch (error) {
    console.error("[Order API] ❌ Critical Error:", error)
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 })
  }
}
