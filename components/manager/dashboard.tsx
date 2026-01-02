"use client"

import type { useProducts, useDatabaseOrders, useMenuSync } from "@/lib/hooks"
import { useMenuSync as useMenuSyncHook, useIngredients } from "@/lib/hooks"
import {
  DollarSign, ShoppingBag, AlertTriangle, Package,
  TrendingUp, Clock, CreditCard, ArrowUpRight,
  ChevronRight,
  Beer
} from "lucide-react"

interface ManagerDashboardProps {
  products: ReturnType<typeof useProducts>
  orders: ReturnType<typeof useDatabaseOrders>
  inventoryLogs: any
}

export default function ManagerDashboard({ products, orders, inventoryLogs }: ManagerDashboardProps) {
  const menuSync = useMenuSyncHook()
  const { ingredients } = useIngredients()

  // Calculate today's sales from database orders
  const todaysSales = (orders.orders || [])
    .filter((o) => {
      const orderDate = new Date(o.created_at).toDateString()
      const today = new Date().toDateString()
      return orderDate === today
    })
    .reduce((sum, o) => sum + (Number(o.total_amount) || 0), 0)

  const totalOrders = (orders.orders || []).filter((o) => {
    const orderDate = new Date(o.created_at).toDateString()
    const today = new Date().toDateString()
    return orderDate === today
  }).length

  const lowStockMenu = menuSync.getLowStockItems()
  const lowStockIngredients = (ingredients || []).filter(i => Number(i.stock_quantity) < 18 || Number(i.stock_quantity) <= Number(i.reorder_level))
  const totalLowStock = lowStockMenu.length + lowStockIngredients.length

  // Calculate Top Selling based on actual sales
  const productSales = new Map<string, number>()

  if (orders.orders) {
    orders.orders.forEach((order: any) => {
      if (order.items && Array.isArray(order.items)) {
        order.items.forEach((item: any) => {
          // Normalize name to handle variants if needed or just use product_id
          const name = item.name || "Unknown Product"
          const qty = Number(item.quantity) || 0
          productSales.set(name, (productSales.get(name) || 0) + qty)
        })
      }
    })
  }

  const topSelling = Array.from(productSales.entries())
    .map(([name, count]) => {
      // Find product details for image/stock info
      const product = menuSync.menuItems.find(p => p.name === name) || { id: "unknown", name, stock: 0, sizes: [] }
      return { ...product, salesCount: count }
    })
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, 5)

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
          <p className="text-muted-foreground mt-1">Summary of today's performance</p>
        </div>
        <div className="px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Live Updates
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          label="Total Sales"
          value={`₱${Number(todaysSales || 0).toFixed(2)}`}
          icon={<DollarSign className="w-6 h-6 text-blue-600" />}
          className="bg-blue-50 border-blue-100"
        />
        <StatCard
          label="Total Orders"
          value={totalOrders.toString()}
          icon={<ShoppingBag className="w-6 h-6 text-green-600" />}
          className="bg-green-50 border-green-100"
        />
        <StatCard
          label="Low Stock Items"
          value={totalLowStock.toString()}
          icon={<AlertTriangle className="w-6 h-6 text-yellow-600" />}
          className="bg-yellow-50 border-yellow-100"
        />
        <StatCard
          label="Total Products"
          value={menuSync.menuItems.length.toString()}
          icon={<Package className="w-6 h-6 text-purple-600" />}
          className="bg-purple-50 border-purple-100"
        />
      </div>

      {/* Main Cards */}
      <div className="grid grid-cols-2 gap-8">
        {/* Top Selling */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Top Selling Products
          </h3>
          <div className="space-y-4">
            {topSelling.map((item, idx) => (
              <div
                key={item.id}
                className="flex justify-between items-center pb-4 border-b border-border last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                    #{idx + 1}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Stock Remaining: {item.stock}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">{(item as any).salesCount} sold</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Recent Orders
          </h3>
          <div className="space-y-4">
            {(orders.orders || []).slice(0, 3).map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center pb-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors rounded-lg px-2 -mx-2"
              >
                <div>
                  <p className="font-bold text-foreground flex items-center gap-2">
                    {order.order_number}
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">Completed</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{order.customer_name}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-primary">₱{Number(order.total_amount || 0).toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground capitalize">{order.payment_method}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            Low Stock Alert
          </h3>
          {totalLowStock === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground opacity-50 bg-muted/20 rounded-xl border border-dashed">
              <Package className="w-12 h-12 mb-3" />
              <p className="font-bold">All items are well-stocked</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {/* Menu Items */}
              {lowStockMenu.map((item) => (
                <div key={`m-${item.id}`} className="p-4 bg-yellow-50/50 border border-yellow-200/50 rounded-xl flex justify-between items-center group hover:bg-yellow-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 font-bold shrink-0 text-[10px]">
                      PROD
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5 font-medium uppercase tracking-tighter">Stock Level Low</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-white border border-yellow-200 rounded-lg text-xs font-black text-yellow-700 shadow-sm">
                    {item.stock} LEFT
                  </div>
                </div>
              ))}

              {/* Ingredients */}
              {lowStockIngredients.map((item) => (
                <div key={`i-${item.id}`} className="p-4 bg-red-50/50 border border-red-200/50 rounded-xl flex justify-between items-center group hover:bg-red-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0 text-[10px]">
                      INGR
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground">{item.name}</p>
                      <p className="text-[10px] text-muted-foreground mt-0.5 font-medium uppercase tracking-tighter">Critical Resource</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-white border border-red-200 rounded-lg text-xs font-black text-red-700 shadow-sm animate-pulse">
                    {item.stock_quantity} {item.unit}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sales Breakdown */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            Payment Methods
          </h3>
          <div className="space-y-3">
            {["Cash", "GCash", "Card"].map((method) => {
              const count = orders.orders.filter((o) => {
                const pm = ((o as any).payment_method ?? (o as any).paymentMethod ?? "").toString().toLowerCase().replace("-", "")
                return pm === method.toLowerCase().replace("-", "")
              }).length
              return (
                <div key={method} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                      {method === "Cash" && <DollarSign className="w-4 h-4 text-primary" />}
                      {method === "GCash" && <CreditCard className="w-4 h-4 text-blue-500" />}
                      {method === "Card" && <CreditCard className="w-4 h-4 text-purple-500" />}
                    </div>
                    <span className="font-bold text-foreground">{method}</span>
                  </div>
                  <span className="font-medium text-muted-foreground">{count} transactions</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, icon, className }: { label: string; value: string; icon: any, className: string }) {
  return (
    <div className={`p-6 rounded-xl border flex items-start justify-between ${className}`}>
      <div>
        <p className="text-sm font-medium text-foreground/60">{label}</p>
        <p className="text-3xl font-black text-foreground mt-2 tracking-tight">{value}</p>
      </div>
      <div className="p-3 bg-white/50 rounded-xl backdrop-blur-sm">
        {icon}
      </div>
    </div>
  )
}
