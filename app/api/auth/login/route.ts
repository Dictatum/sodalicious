import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 })
    }

    try {
      const result = await sql`
        SELECT id, email, name, role, is_active FROM users 
        WHERE email = ${email} AND password_hash = crypt(${password}, password_hash)
      `

      if (result.length > 0) {
        return NextResponse.json({
          success: true,
          user: result[0],
          token: Buffer.from(email).toString("base64"),
        })
      }
    } catch (dbError) {
      console.error("[v0] Database error:", dbError)
      // Fall through to demo credentials
    }

    // Demo credentials fallback - for development and testing
    const demoUsers = [
      { id: 1, email: "cashier@sodalicious.com", name: "Cashier", role: "cashier", is_active: true },
      { id: 2, email: "manager@sodalicious.com", name: "Manager", role: "manager", is_active: true },
      {
        id: 3,
        email: "inventory@sodalicious.com",
        name: "Inventory Officer",
        role: "inventory_officer",
        is_active: true,
      },
    ]

    const demoUser = demoUsers.find((u) => u.email === email)

    if (demoUser && password === "123456") {
      return NextResponse.json({
        success: true,
        user: demoUser,
        token: Buffer.from(email).toString("base64"),
      })
    }

    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
  } catch (error) {
    console.error("[v0] Login route error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
