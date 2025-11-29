import { neon } from "@neondatabase/serverless"
import mysql from "mysql2/promise"

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set")
}

// Detect connection type: PostgreSQL (Neon) or MySQL (XAMPP)
const isPostgres = connectionString.startsWith("postgresql://")
const isMysql = connectionString.startsWith("mysql://")

let sql: any

if (isPostgres) {
  // Use Neon for PostgreSQL
  sql = neon(connectionString)
} else if (isMysql) {
  // Use mysql2 for MySQL/XAMPP
  const pool = mysql.createPool({
    uri: connectionString,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })

  // Create a wrapper for mysql2 that mimics neon's API
  sql = async (strings: TemplateStringsArray, ...values: any[]) => {
    const connection = await pool.getConnection()
    try {
      // Build query from template strings
      let query = strings[0]
      for (let i = 0; i < values.length; i++) {
        query += "?" + strings[i + 1]
      }
      const [rows] = await connection.query(query, values)
      return rows
    } finally {
      connection.release()
    }
  }
} else {
  throw new Error(
    `Unsupported database URL format. Use postgresql:// (Neon) or mysql:// (XAMPP). Got: ${connectionString.split("://")[0]}://`
  )
}

export { sql }

// Type definitions for database operations
export interface User {
  id: number
  email: string
  name: string
  role: "cashier" | "manager" | "inventory_officer"
  is_active: boolean
  created_at: string
}

export interface Product {
  id: number
  name: string
  category: string
  price: number
  description: string
  stock_quantity: number
  reorder_level: number
  is_active: boolean
}

export interface Order {
  id: number
  order_number: string
  cashier_id: number
  customer_name: string
  total_amount: number
  payment_method: string
  order_status: string
  created_at: string
}

export interface OrderItem {
  id: number
  order_id: number
  product_id: number
  quantity: number
  unit_price: number
  subtotal: number
}

export interface InventoryLog {
  id: number
  product_id: number
  user_id: number
  log_type: string
  quantity_changed: number
  reason: string
  previous_quantity: number
  new_quantity: number
  created_at: string
}
