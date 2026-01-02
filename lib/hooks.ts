"use client"

import { useState, useCallback, useEffect } from "react"
import {
  type Product,
  type Order,
  type User,
  type InventoryLog,
  type ActivityLog,
  mockProducts,
  mockOrders,
  mockUsers,
  api,
} from "./store"
import type { Order as DBOrder } from "./db"
import { COMPLETE_MENU, getAllProductVariants, MENU_CATEGORIES, getBaseMenuItems } from "./menu-data"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])

  const addProduct = useCallback(async (product: Omit<Product, "id">) => {
    try {
      await api.createProduct(product)
      if (typeof window !== "undefined") window.dispatchEvent(new Event("menu:update"))
    } catch (e) {
      console.error("Failed to add product", e)
      throw e
    }
  }, [])

  const updateProduct = useCallback(async (id: number, updates: Partial<Product>) => {
    try {
      await api.updateProduct(id, updates)
      if (typeof window !== "undefined") window.dispatchEvent(new Event("menu:update"))
    } catch (e) {
      console.error("Failed to update product", e)
      throw e
    }
  }, [])

  const deleteProduct = useCallback(async (id: number) => {
    try {
      await api.deleteProduct(id)
      if (typeof window !== "undefined") window.dispatchEvent(new Event("menu:update"))
    } catch (e) {
      console.error("Failed to delete product", e)
      throw e
    }
  }, [])

  const getLowStockItems = useCallback(() => {
    return products.filter((p) => p.stock <= p.minThreshold)
  }, [products])

  return { products, addProduct, updateProduct, deleteProduct, getLowStockItems }
}

export function useDatabaseProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      const data = await api.getProducts(category)
      setProducts(data)
      setError(null)
    } catch (err) {
      console.error("[v0] Error fetching products:", err)
      setError(err instanceof Error ? err.message : "Failed to fetch products")
    } finally {
      setLoading(false)
    }
  }, [category])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return { products, loading, error, refetch: fetchProducts }
}

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>(mockOrders)

  const addOrder = useCallback(
    (order: Order) => {
      setOrders([...orders, order])
    },
    [orders],
  )

  const updateOrderStatus = useCallback(
    (orderId: string, status: Order["status"]) => {
      setOrders(orders.map((o) => (o.id === orderId ? { ...o, status } : o)))
    },
    [orders],
  )

  const getTodaysSales = useCallback(() => {
    return orders.filter((o) => o.timestamp.startsWith("2025-11-11")).reduce((sum, o) => sum + o.total, 0)
  }, [orders])

  return { orders, addOrder, updateOrderStatus, getTodaysSales }
}

export function useDatabaseOrders() {
  const [orders, setOrders] = useState<DBOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true)
      const data = await api.getOrders()
      setOrders(data)
      setError(null)
    } catch (err) {
      console.error("[v0] Error fetching orders:", err)
      setError(err instanceof Error ? err.message : "Failed to fetch orders")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchOrders()
    // Poll every 2 seconds for real-time sync
    const interval = setInterval(() => {
      fetchOrders()
    }, 2000)
    return () => clearInterval(interval)
  }, [fetchOrders])

  const createOrder = useCallback(async (data: any) => {
    try {
      const order = await api.createOrder(data)
      setOrders((prev) => [order, ...prev])
      return order
    } catch (err) {
      console.error("[v0] Error creating order:", err)
      throw err
    }
  }, [])

  return { orders, loading, error, createOrder, refetch: fetchOrders }
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch("/api/users")
      if (res.ok) {
        const data = await res.json()
        setUsers(data)
      }
    } catch (e) {
      console.error("Failed to fetch users", e)
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const addUser = useCallback(
    async (user: any) => {
      try {
        const res = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        })
        if (res.ok) fetchUsers()
      } catch (e) {
        console.error(e)
      }
    },
    [fetchUsers],
  )

  const updateUser = useCallback(
    async (id: number, updates: any) => {
      try {
        const res = await fetch(`/api/users/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updates)
        })
        if (res.ok) fetchUsers()
      } catch (e) { console.error(e) }
    },
    [fetchUsers],
  )

  const deleteUser = useCallback(
    async (id: number) => {
      try {
        const res = await fetch(`/api/users/${id}`, { method: "DELETE" })
        if (res.ok) fetchUsers()
      } catch (e) { console.error(e) }
    },
    [fetchUsers],
  )

  return { users, addUser, updateUser, deleteUser }
}

export function useInventoryLogs() {
  const [logs, setLogs] = useState<InventoryLog[]>([])
  const [loading, setLoading] = useState(true)

  const fetchLogs = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/inventory")
      if (!response.ok) throw new Error("Failed to fetch inventory logs")
      const data = await response.json()
      setLogs(data || [])
    } catch (err) {
      console.error("[Inventory] Error fetching logs:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchLogs()
    // Poll every 2 seconds for real-time inventory sync
    const interval = setInterval(() => {
      fetchLogs()
    }, 2000)
    return () => clearInterval(interval)
  }, [fetchLogs])

  const addLog = useCallback(
    (log: Omit<InventoryLog, "id">) => {
      const newLog = { ...log, id: Math.max(...logs.map((l) => l.id), 0) + 1 }
      setLogs([...logs, newLog])
    },
    [logs],
  )

  return { logs, addLog, refetch: fetchLogs, loading }
}

export function useActivityLogs() {
  const [logs, setLogs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchLogs = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/activity-logs")
      if (!response.ok) throw new Error("Failed to fetch activity logs")
      const data = await response.json()
      setLogs(data || [])
    } catch (err) {
      console.error("[ActivityLogs] Error fetching logs:", err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchLogs()
    // Poll every 5 seconds
    const interval = setInterval(fetchLogs, 5000)
    return () => clearInterval(interval)
  }, [fetchLogs])

  const addLog = useCallback(async (log: any) => {
    try {
      await fetch("/api/activity-logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(log)
      })
      fetchLogs()
    } catch (e) {
      console.error(e)
    }
  }, [fetchLogs])

  return { logs, addLog, loading, refetch: fetchLogs }
}

export function useIngredients() {
  const [ingredients, setIngredients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchIngredients = useCallback(async () => {
    try {
      setLoading(true)
      const res = await fetch("/api/ingredients")
      if (!res.ok) throw new Error("Failed to fetch")
      const data = await res.json()
      setIngredients(data || [])
    } catch (e) {
      console.error("[useIngredients] error", e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchIngredients()
    const interval = setInterval(fetchIngredients, 5000)
    return () => clearInterval(interval)
  }, [fetchIngredients])

  return { ingredients, loading, refetch: fetchIngredients }
}

/**
 * Menu Sync Hook
 * Provides synchronized menu data across Cashier, Manager, and Inventory panels
 * Pulls from the central menu-data.ts source
 */

export function useMenuSync() {
  const [menuItems, setMenuItems] = useState(getBaseMenuItems())
  const [categories] = useState(MENU_CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const getMenuByCategory = useCallback(
    (category: string) => {
      if (category === "All") return menuItems
      return menuItems.filter((item) => item.category === category)
    },
    [menuItems],
  )

  const getMenuItemById = useCallback(
    (id: string) => {
      return menuItems.find((item) => item.id === id)
    },
    [menuItems],
  )

  const getAllCategories = useCallback(() => {
    return ["All", ...categories.map((cat) => cat.name)]
  }, [categories])

  const getCategoryEmoji = useCallback(
    (categoryName: string) => {
      const category = categories.find((cat) => cat.name === categoryName)
      return category?.emoji || "📌"
    },
    [categories],
  )

  const getLowStockItems = useCallback(() => {
    return menuItems.filter((item) => item.stock < 18 || item.stock <= item.minThreshold)
  }, [menuItems])

  // Poll /api/products to reflect DB-backed stock changes across multiple clients
  const fetchStock = useCallback(async () => {
    try {
      const res = await fetch(`/api/products?t=${Date.now()}`)
      if (!res.ok) return
      const data = await res.json()
      const dataMap = new Map<string, any>(data.map((p: any) => [p.name, p]))

      setMenuItems((prev) =>
        prev.map((mi) => {
          const dbItem = dataMap.get(mi.name)
          return {
            ...mi,
            // Sync fields from DB if available (Source of Truth)
            id: dbItem ? dbItem.id : mi.id,
            price: dbItem ? Number(dbItem.price) : (mi.sizes?.[0]?.price || 0),
            category: dbItem ? dbItem.category : mi.category,
            description: dbItem ? dbItem.description : mi.description,
            stock: dbItem ? Number(dbItem.stock_quantity) : mi.stock,
            minThreshold: dbItem ? Number(dbItem.min_threshold) : mi.minThreshold,
            bottleneck_ingredient: dbItem?.bottleneck_ingredient,
            ingredients_list: dbItem?.ingredients_list
          }
        })
      )
    } catch (e) {
      console.warn("[useMenuSync] poll error", e)
    }
  }, [])

  // Listen for external updates (other panels / API actions)
  useEffect(() => {
    const onMenuUpdate = () => {
      // Re-fetch stock instead of resetting to hardcoded defaults
      fetchStock()
    }

    if (typeof window !== "undefined") {
      window.addEventListener("menu:update", onMenuUpdate)
    }

    // initial poll
    fetchStock()
    // interval poll
    const id = setInterval(fetchStock, 5000)

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("menu:update", onMenuUpdate)
      }
      clearInterval(id)
    }
  }, [fetchStock])

  return {
    menuItems,
    categories,
    selectedCategory,
    setSelectedCategory,
    getMenuByCategory,
    getMenuItemById,
    getAllCategories,
    getCategoryEmoji,
    getLowStockItems,
    refetch: fetchStock,
    refresh: fetchStock,
  }
}
