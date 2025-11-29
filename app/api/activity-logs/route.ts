import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const logs = await sql`
      SELECT al.*, u.name as user_name 
      FROM activity_logs al 
      LEFT JOIN users u ON al.user_id = u.id 
      ORDER BY al.created_at DESC LIMIT 200
    `

    return NextResponse.json(logs)
  } catch (error) {
    console.error("[v0] Activity logs GET error:", error)
    return NextResponse.json({ error: "Failed to fetch activity logs" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { user_id, action, action_type, entity_type, entity_id, details } = await request.json()

    const result = await sql`
      INSERT INTO activity_logs (user_id, action, action_type, entity_type, entity_id, details) 
      VALUES (${user_id}, ${action}, ${action_type}, ${entity_type}, ${entity_id}, ${JSON.stringify(details)}) RETURNING *
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("[v0] Activity logs POST error:", error)
    return NextResponse.json({ error: "Failed to create activity log" }, { status: 500 })
  }
}
