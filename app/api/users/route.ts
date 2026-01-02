import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function GET() {
    try {
        const users = await sql`
      SELECT id, name, email as username, role, is_active 
      FROM users 
      ORDER BY id ASC
    `
        // Map database fields to frontend model
        const mappedUsers = users.map((u: any) => ({
            id: u.id,
            name: u.name,
            username: u.username,
            role: u.role,
            status: u.is_active ? "Active" : "Inactive",
            lastLogin: "N/A" // We can query activity_logs for this later if needed
        }))

        return NextResponse.json(mappedUsers)
    } catch (error) {
        console.error("Failed to fetch users:", error)
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, username, password, role, status } = body

        if (!username || !password || !name) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 })
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10)

        const isActive = status === 'Active'

        const result = await sql`
      INSERT INTO users (name, email, password_hash, role, is_active)
      VALUES (${name}, ${username}, ${passwordHash}, ${role}, ${isActive})
    `

        // Return the new user
        const newUser = {
            id: (result as any).insertId,
            name,
            username,
            role,
            status
        }

        return NextResponse.json(newUser, { status: 201 })
    } catch (error) {
        console.error("Failed to create user:", error)
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 })
    }
}
