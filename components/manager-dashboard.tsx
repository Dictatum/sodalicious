"use client"

import { useState } from "react"
import { useProducts, useDatabaseOrders, useUsers, useInventoryLogs } from "@/lib/hooks"
import ProductManagement from "./manager/product-management"
import InventoryManagement from "./manager/inventory-management"
import OrderManagement from "./manager/order-management"
import UserManagement from "./manager/user-management"
import Reports from "./manager/reports"
import Dashboard from "./manager/dashboard"

interface ManagerPanelProps {
  onLogout: () => void
  currentUser?: any
}

export default function ManagerPanel({ onLogout, currentUser }: ManagerPanelProps) {
  const [activeTab, setActiveTab] = useState<
    "dashboard" | "products" | "inventory" | "orders" | "reports" | "users" | "logs"
  >("dashboard")
  const products = useProducts()
  const orders = useDatabaseOrders()
  const users = useUsers()
  const inventoryLogs = useInventoryLogs()

  return (
    <div className="flex h-screen bg-background">
      <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col shadow-lg">
        <div className="p-6 border-b border-sidebar-border bg-sidebar-primary/10">
          <h1 className="text-2xl font-bold text-sidebar-foreground tracking-tight">Sodalicious</h1>
          <p className="text-sm text-sidebar-foreground/70 font-medium">Manager Portal</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: "dashboard", label: "Dashboard", icon: "📊" },
            { id: "products", label: "Products", icon: "📦" },
            { id: "inventory", label: "Inventory", icon: "📦" },
            { id: "orders", label: "Orders", icon: "🛒" },
            { id: "reports", label: "Reports", icon: "📈" },
            { id: "users", label: "Users", icon: "👥" },
            { id: "logs", label: "Activity Logs", icon: "📋" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all font-semibold flex items-center gap-3 ${
                activeTab === tab.id
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
        <button
          onClick={onLogout}
          className="m-4 px-4 py-3 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 font-semibold transition-all shadow-md"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === "dashboard" && <Dashboard products={products} orders={orders} inventoryLogs={inventoryLogs} />}
        {activeTab === "products" && <ProductManagement products={products} />}
        {activeTab === "inventory" && <InventoryManagement products={products} inventoryLogs={inventoryLogs} />}
        {activeTab === "orders" && <OrderManagement orders={orders} />}
        {activeTab === "reports" && <Reports orders={orders} products={products} />}
        {activeTab === "users" && <UserManagement users={users} />}
        {activeTab === "logs" && <ActivityLogs />}
      </div>
    </div>
  )
}

function ActivityLogs() {
  const sampleLogs = [
    {
      id: 1,
      type: "Product",
      action: "Updated",
      details: "Iced Calamansi Soda price changed",
      user: "Admin Manager",
      timestamp: "2025-11-11 15:30",
    },
    {
      id: 2,
      type: "Inventory",
      action: "Adjusted",
      details: "Mango Yakult stock reduced by 5",
      user: "Juan Dela Cruz",
      timestamp: "2025-11-11 14:15",
    },
    {
      id: 3,
      type: "User",
      action: "Created",
      details: "New cashier account created",
      user: "Admin Manager",
      timestamp: "2025-11-11 13:00",
    },
    {
      id: 4,
      type: "Order",
      action: "Cancelled",
      details: "Order ORD00005 cancelled",
      user: "Maria Santos",
      timestamp: "2025-11-11 12:45",
    },
  ]

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Activity Logs</h2>
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <table className="w-full">
          <thead className="bg-primary/5 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left font-bold text-foreground">Type</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Action</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Details</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">User</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sampleLogs.map((log) => (
              <tr key={log.id} className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-4 font-bold text-foreground">{log.type}</td>
                <td className="px-6 py-4 text-foreground">{log.action}</td>
                <td className="px-6 py-4 text-foreground">{log.details}</td>
                <td className="px-6 py-4 text-foreground">{log.user}</td>
                <td className="px-6 py-4 text-muted-foreground">{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
