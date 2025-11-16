"use client"

import type { useProducts, useOrders } from "@/lib/hooks"

interface ManagerDashboardProps {
  products: ReturnType<typeof useProducts>
  orders: ReturnType<typeof useOrders>
  inventoryLogs: any
}

export default function ManagerDashboard({ products, orders, inventoryLogs }: ManagerDashboardProps) {
  const todaysSales = orders.getTodaysSales()
  const totalOrders = orders.orders.filter((o) => o.timestamp.startsWith("2025-11-11")).length
  const lowStockItems = products.getLowStockItems()

  const topSelling = products.products
    .slice()
    .sort((a, b) => b.stock - a.stock)
    .slice(0, 3)

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Sales" value={`₱${todaysSales.toFixed(2)}`} color="bg-blue-100" />
        <StatCard label="Total Orders" value={totalOrders.toString()} color="bg-green-100" />
        <StatCard label="Low Stock Items" value={lowStockItems.length.toString()} color="bg-yellow-100" />
        <StatCard label="Total Products" value={products.products.length.toString()} color="bg-purple-100" />
      </div>

      {/* Main Cards */}
      <div className="grid grid-cols-2 gap-8">
        {/* Top Selling */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Top Selling Products</h3>
          <div className="space-y-3">
            {topSelling.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center pb-3 border-b border-border last:border-b-0"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">Stock: {item.stock}</p>
                </div>
                <p className="font-bold text-lg">₱{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
          <div className="space-y-3">
            {orders.orders.slice(-3).map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center pb-3 border-b border-border last:border-b-0"
              >
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">₱{order.total.toFixed(2)}</p>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">{order.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Alert */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Low Stock Alert</h3>
          {lowStockItems.length === 0 ? (
            <p className="text-muted-foreground">All items are well-stocked</p>
          ) : (
            <div className="space-y-2">
              {lowStockItems.map((item) => (
                <div key={item.id} className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-yellow-700">
                    Stock: {item.stock} / Threshold: {item.minThreshold}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sales Breakdown */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
          <div className="space-y-2">
            {["Cash", "GCash", "Card", "E-wallet"].map((method) => {
              const count = orders.orders.filter(
                (o) => o.paymentMethod === method.toLowerCase().replace("-", ""),
              ).length
              return (
                <div key={method} className="flex justify-between">
                  <span className="font-medium">{method}</span>
                  <span className="font-bold">{count} transactions</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className={`${color} p-6 rounded-lg`}>
      <p className="text-sm text-gray-700 font-medium">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
    </div>
  )
}
