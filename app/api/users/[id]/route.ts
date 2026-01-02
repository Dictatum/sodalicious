import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params
        const body = await request.json()
        const { name, username, password, role, status } = body

        const isActive = status === 'Active'

        // Build update query dynamically based almost on fields present? 
        // For simplicity, we assume full update or patch

        if (password) {
            const passwordHash = await bcrypt.hash(password, 10)
            await sql`
            UPDATE users 
            SET name=${name}, email=${username}, password_hash=${passwordHash}, role=${role}, is_active=${isActive}
            WHERE id=${id}
        `
        } else {
            await sql`
            UPDATE users 
            SET name=${name}, email=${username}, role=${role}, is_active=${isActive}
            WHERE id=${id}
        `
        }

        return NextResponse.json({ success: true, id })
    } catch (error) {
        console.error("Failed to update user:", error)
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params
        await sql`DELETE FROM users WHERE id=${id}`
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Failed to delete user:", error)
        return NextResponse.json({ error: "Failed to delete user" }, { status: 500 })
    }
}
