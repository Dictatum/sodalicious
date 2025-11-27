import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("[Seed] Starting database seeding...")

    // Seed users (won't duplicate due to ON CONFLICT)
    await sql`
      INSERT INTO users (email, name, role, password_hash, is_active) VALUES
      ('cashier@sodalicious.com', 'Cassandra Silva', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', true),
      ('manager@sodalicious.com', 'Marcus Johnson', 'manager', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', true),
      ('inventory@sodalicious.com', 'Isabella Chen', 'inventory_officer', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', true),
      ('cashier2@sodalicious.com', 'Dante Rodriguez', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', true)
      ON CONFLICT (email) DO NOTHING
    `
    console.log("[Seed] ✓ Users seeded")

    // Get all users to verify
    const users = await sql`SELECT id, email, name, role FROM users`
    console.log(`[Seed] Found ${users.length} users in database`)

    return NextResponse.json(
      {
        success: true,
        message: "Database seeded successfully",
        usersCreated: users.length,
        users: users.map((u: any) => ({ id: u.id, email: u.email, name: u.name, role: u.role })),
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[Seed] Error:", error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Just return current users
    const users = await sql`SELECT id, email, name, role FROM users`
    return NextResponse.json({ users, count: users.length })
  } catch (error) {
    console.error("[Seed] GET error:", error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
