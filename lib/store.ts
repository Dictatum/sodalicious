export interface Product {
  id: number
  name: string
  price: number
  category: string
  stock: number
  minThreshold: number
  description?: string
  image?: string
}

export interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
}

export interface Order {
  id: string
  customer: string
  items: OrderItem[]
  subtotal: number
  tax: number
  total: number
  paymentMethod: "cash" | "gcash" | "card" | "ewallet"
  status: "Pending" | "Preparing" | "Completed"
  timestamp: string
  cashierName?: string
}

export interface User {
  id: number
  name: string
  username: string
  password: string
  role: "cashier" | "manager" | "inventory"
  status: "Active" | "Inactive"
  lastLogin?: string
}

export interface InventoryLog {
  id: number
  productId: number
  productName: string
  type: "sale" | "restock" | "damage" | "waste"
  quantity: number
  reason?: string
  timestamp: string
  userId: number
  userName: string
}

export interface ActivityLog {
  id: number
  type: string
  action: string
  details: string
  userId: number
  userName: string
  timestamp: string
}

export type CartItem = {
  product: Product
  quantity: number
}

// Initial mock data
export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Iced Calamansi Soda",
    price: 65,
    category: "Soda",
    stock: 45,
    minThreshold: 10,
    description: "Refreshing iced calamansi flavored soda",
  },
  {
    id: 2,
    name: "Mango Yakult",
    price: 75,
    category: "Yakult",
    stock: 32,
    minThreshold: 15,
    description: "Probiotic mango Yakult drink",
  },
  {
    id: 3,
    name: "Iced Coffee Latte",
    price: 85,
    category: "Coffee",
    stock: 28,
    minThreshold: 10,
    description: "Smooth and creamy iced coffee latte",
  },
  {
    id: 4,
    name: "Strawberry Frappe",
    price: 95,
    category: "Frappes",
    stock: 20,
    minThreshold: 8,
    description: "Blended strawberry frappe with whipped cream",
  },
  {
    id: 5,
    name: "Hot Espresso",
    price: 55,
    category: "Coffee",
    stock: 40,
    minThreshold: 10,
    description: "Classic hot espresso shot",
  },
  {
    id: 6,
    name: "Chocolate Yakult",
    price: 75,
    category: "Yakult",
    stock: 25,
    minThreshold: 12,
    description: "Rich chocolate Yakult",
  },
  {
    id: 7,
    name: "Cheese Fries",
    price: 45,
    category: "Snacks",
    stock: 50,
    minThreshold: 20,
    description: "Crispy cheese-flavored fries",
  },
  {
    id: 8,
    name: "Blueberry Soda",
    price: 70,
    category: "Soda",
    stock: 35,
    minThreshold: 12,
    description: "Tangy blueberry soda",
  },
  {
    id: 9,
    name: "Vanilla Frappuccino",
    price: 90,
    category: "Frappes",
    stock: 18,
    minThreshold: 8,
    description: "Vanilla flavored cold frappe",
  },
  {
    id: 10,
    name: "Hot Chocolate",
    price: 60,
    category: "Coffee",
    stock: 22,
    minThreshold: 10,
    description: "Warm and cozy hot chocolate",
  },
]

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Maria Santos",
    username: "maria",
    password: "password",
    role: "cashier",
    status: "Active",
    lastLogin: "2025-11-11 09:30",
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    username: "juan",
    password: "password",
    role: "inventory",
    status: "Active",
    lastLogin: "2025-11-11 08:00",
  },
  { id: 3, name: "Rosa Reyes", username: "rosa", password: "password", role: "cashier", status: "Inactive" },
  {
    id: 4,
    name: "Admin Manager",
    username: "admin",
    password: "password",
    role: "manager",
    status: "Active",
    lastLogin: "2025-11-11 07:00",
  },
]

export const mockOrders: Order[] = [
  {
    id: "ORD00001",
    customer: "John Doe",
    items: [{ id: 1, name: "Iced Calamansi Soda", price: 65, quantity: 2 }],
    subtotal: 130,
    tax: 10.4,
    total: 140.4,
    paymentMethod: "cash",
    status: "Completed",
    timestamp: "2025-11-11 14:30",
    cashierName: "Maria Santos",
  },
]

// API helper functions for database operations
export const api = {
  async getProducts(category?: string) {
    const url = new URL(
      "/api/products",
      typeof window !== "undefined" ? window.location.origin : "http://localhost:3000",
    )
    if (category) url.searchParams.append("category", category)
    const res = await fetch(url)
    if (!res.ok) throw new Error("Failed to fetch products")
    return res.json()
  },

  async getOrders() {
    const res = await fetch("/api/orders")
    if (!res.ok) throw new Error("Failed to fetch orders")
    return res.json()
  },

  async createOrder(data: any) {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to create order")
    return res.json()
  },

  async createProduct(data: any) {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to create product")
    return res.json()
  },

  async updateProduct(id: number, data: any) {
    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to update product")
    return res.json()
  },

  async deleteProduct(id: number) {
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    })
    if (!res.ok) throw new Error("Failed to delete product")
    return res.json()
  },

  async logInventoryChange(data: any) {
    const res = await fetch("/api/inventory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to log inventory change")
    return res.json()
  },

  async getInventoryLogs() {
    const res = await fetch("/api/inventory")
    if (!res.ok) throw new Error("Failed to fetch inventory logs")
    return res.json()
  },

  async getActivityLogs() {
    const res = await fetch("/api/activity-logs")
    if (!res.ok) throw new Error("Failed to fetch activity logs")
    return res.json()
  },

  async logActivity(data: any) {
    const res = await fetch("/api/activity-logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to log activity")
    return res.json()
  },
}
