import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const logs = await sql`
      SELECT al.*, u.name as user_name 
      FROM activity_logs al 
      LEFT JOIN users u ON al.user_id = u.id 
      ORDER BY al.created_at DESC LIMIT 50
    `
    return NextResponse.json(logs)
  } catch (error) {
    console.error("[Activity Logs] GET error:", error)
    return NextResponse.json({ error: "Failed to fetch activity logs" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { user_id, action, action_type, entity_type, entity_id, details } = await request.json()

    await sql`
      INSERT INTO activity_logs (user_id, action, action_type, entity_type, entity_id, details)
      VALUES (${user_id}, ${action}, ${action_type}, ${entity_type}, ${entity_id}, ${JSON.stringify(details)})
    `

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error("[Activity Logs] POST error:", error)
    return NextResponse.json({ error: "Failed to create log" }, { status: 500 })
  }
}
