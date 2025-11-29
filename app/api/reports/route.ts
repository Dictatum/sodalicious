import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const type = (url.searchParams.get("type") || "daily").toLowerCase()
    const start = url.searchParams.get("start")
    const end = url.searchParams.get("end")

    let whereClause = "1=1"
    if (type === "daily") {
      whereClause = `DATE(o.created_at) = DATE(NOW())`
    } else if (type === "weekly") {
      whereClause = `o.created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)`
    } else if (type === "monthly") {
      whereClause = `o.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)`
    } else if (start && end) {
      whereClause = `DATE(o.created_at) BETWEEN '${start}' AND '${end}'`
    }

    // Totals
    const totalsQuery = `
      SELECT COUNT(*) AS totalOrders, COALESCE(SUM(total_amount), 0) AS totalSales
      FROM orders
      WHERE ${whereClause}
    `
    const totalsRes: any = await (sql as any)([totalsQuery] as any)
    const totals = Array.isArray(totalsRes) ? totalsRes[0] : totalsRes

    // Top products
    const topQuery = `
      SELECT p.id, p.name, SUM(oi.quantity) AS qty_sold, COALESCE(SUM(oi.subtotal),0) AS revenue
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      JOIN orders o ON oi.order_id = o.id
      WHERE ${whereClause}
      GROUP BY p.id, p.name
      ORDER BY qty_sold DESC
      LIMIT 10
    `
    const topProducts: any[] = await (sql as any)([topQuery] as any)

    // Daily breakdown (for the selected range/type)
    const breakdownQuery = `
      SELECT DATE(o.created_at) AS date, COUNT(*) AS orders_count, COALESCE(SUM(o.total_amount),0) AS total_sales
      FROM orders o
      WHERE ${whereClause}
      GROUP BY DATE(o.created_at)
      ORDER BY DATE(o.created_at) ASC
    `
    const breakdown: any[] = await (sql as any)([breakdownQuery] as any)

    return NextResponse.json({
      totals: {
        totalOrders: Number(totals.totalOrders || 0),
        totalSales: Number(totals.totalSales || 0),
      },
      topProducts: topProducts || [],
      breakdown: breakdown || [],
      meta: { type, start, end },
    })
  } catch (error) {
    console.error("[reports] GET error:", error)
    return NextResponse.json({ error: "Failed to generate report" }, { status: 500 })
  }
}
