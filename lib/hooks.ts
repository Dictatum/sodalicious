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
  const [products, setProducts] = useState<Product[]>(mockProducts)

  const addProduct = useCallback(
    (product: Omit<Product, "id">) => {
      const newProduct = { ...product, id: Math.max(...products.map((p) => Number(p.id)), 0) + 1 }
      setProducts([...products, newProduct])
      return newProduct
    },
    [products],
  )

  const updateProduct = useCallback(
    (id: number, updates: Partial<Product>) => {
      setProducts(products.map((p) => (p.id === id ? { ...p, ...updates } : p)))
    },
    [products],
  )

  const deleteProduct = useCallback(
    (id: number) => {
      setProducts(products.filter((p) => p.id !== id))
    },
    [products],
  )

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
  const [users, setUsers] = useState<User[]>(mockUsers)

  const addUser = useCallback(
    (user: Omit<User, "id">) => {
      const newUser = { ...user, id: Math.max(...users.map((u) => u.id), 0) + 1 }
      setUsers([...users, newUser])
      return newUser
    },
    [users],
  )

  const updateUser = useCallback(
    (id: number, updates: Partial<User>) => {
      setUsers(users.map((u) => (u.id === id ? { ...u, ...updates } : u)))
    },
    [users],
  )

  const deleteUser = useCallback(
    (id: number) => {
      setUsers(users.filter((u) => u.id !== id))
    },
    [users],
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
  const [logs, setLogs] = useState<ActivityLog[]>([])

  const addLog = useCallback(
    (log: Omit<ActivityLog, "id">) => {
      const newLog = { ...log, id: Math.max(...logs.map((l) => l.id), 0) + 1 }
      setLogs([...logs, newLog])
    },
    [logs],
  )

  return { logs, addLog }
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
    return menuItems.filter((item) => item.stock <= item.minThreshold)
  }, [menuItems])

  // Listen for external updates (other panels / API actions) and poll DB for cross-client sync
  useEffect(() => {
    const onMenuUpdate = () => setMenuItems(getBaseMenuItems())
    if (typeof window !== "undefined") {
      window.addEventListener("menu:update", onMenuUpdate)
    }

    // Poll /api/products to reflect DB-backed stock changes across multiple clients
    let mounted = true
    const poll = async () => {
      try {
        const res = await fetch("/api/products")
        if (!res.ok) return
        const data = await res.json()
        if (!mounted) return
        const stockMap = new Map<string, number>(data.map((p: any) => [p.name, p.stock_quantity]))
        setMenuItems((prev) =>
          prev.map((mi) => ({ ...mi, stock: stockMap.has(mi.name) ? (stockMap.get(mi.name) as number) : mi.stock })),
        )
      } catch (e) {
        console.warn("[useMenuSync] poll error", e)
      }
    }

    // initial poll + interval
    poll()
    const id = setInterval(poll, 5000)

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("menu:update", onMenuUpdate)
      }
      mounted = false
      clearInterval(id)
    }
  }, [])

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
    // allow manual refresh when needed
    refresh: () => setMenuItems(getBaseMenuItems()),
  }
}
