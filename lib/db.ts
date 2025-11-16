import { neon } from "@neondatabase/serverless"

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set")
}

export const sql = neon(connectionString)

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
