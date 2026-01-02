import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const { user_id } = await request.json()

        if (user_id) {
            try {
                await sql`INSERT INTO activity_logs (user_id, action, action_type, entity_type, entity_id, details) VALUES (${user_id}, 'Logged out', 'logout', 'User', ${user_id}, ${JSON.stringify({ message: 'User logged out' })})`
            } catch (e) {
                console.error("Failed to log logout", e)
            }
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: "Logout failed" }, { status: 500 })
    }
}
