"use client"

import { useState } from "react"
import { useProducts, useDatabaseOrders, useUsers, useInventoryLogs, useActivityLogs } from "@/lib/hooks"
import ProductManagement from "./manager/product-management"
import InventoryManagement from "./manager/inventory-management"
import OrderManagement from "./manager/order-management"
import UserManagement from "./manager/user-management"
import Reports from "./manager/reports"
import Dashboard from "./manager/dashboard"
import {
  LayoutDashboard, Package, ClipboardList, ShoppingBag,
  BarChart3, Users, ScrollText, LogOut, CupSoda
} from "lucide-react"

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
  const activityLogs = useActivityLogs()

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "products", label: "Products", icon: <Package className="w-5 h-5" /> },
    { id: "inventory", label: "Inventory", icon: <ClipboardList className="w-5 h-5" /> },
    { id: "orders", label: "Orders", icon: <ShoppingBag className="w-5 h-5" /> },
    { id: "reports", label: "Reports", icon: <BarChart3 className="w-5 h-5" /> },
    { id: "users", label: "Users", icon: <Users className="w-5 h-5" /> },
    { id: "logs", label: "Activity Logs", icon: <ScrollText className="w-5 h-5" /> },
  ]

  return (
    <div className="flex h-screen bg-background">
      <div className="w-64 bg-card border-r border-border flex flex-col shadow-xl z-20">
        <div className="p-6 border-b border-border bg-primary/5 flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <CupSoda className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Sodalicious</h1>
            <p className="text-xs text-muted-foreground font-medium">Manager Portal</p>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium flex items-center gap-3 ${activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-border">
          <button
            onClick={onLogout}
            className="w-full px-4 py-3 bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-background">
        {activeTab === "dashboard" && <Dashboard products={products} orders={orders} inventoryLogs={inventoryLogs} />}
        {activeTab === "products" && <ProductManagement products={products} />}
        {activeTab === "inventory" && <InventoryManagement products={products} inventoryLogs={inventoryLogs} />}
        {activeTab === "orders" && <OrderManagement orders={orders} />}
        {activeTab === "reports" && <Reports />}
        {activeTab === "users" && <UserManagement users={users} />}
        {activeTab === "logs" && <ActivityLogs logs={activityLogs.logs} />}
      </div>
    </div>
  )
}

function ActivityLogs({ logs }: { logs: any[] }) {
  if (!logs || logs.length === 0) {
    return (
      <div className="p-8 max-w-[1600px] mx-auto flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
          <ScrollText className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-bold">No activity logs found</h3>
        <p className="text-muted-foreground mt-2">Actions like new orders and inventory changes will appear here.</p>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
          <ScrollText className="w-8 h-8 text-primary" />
          Activity Logs
        </h2>
        <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-xs font-bold animate-pulse">
          Monitoring Live Events
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xl">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground text-xs uppercase tracking-widest">Type</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground text-xs uppercase tracking-widest">Action</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground text-xs uppercase tracking-widest">Details</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground text-xs uppercase tracking-widest">User</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground text-xs uppercase tracking-widest">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-foreground capitalize">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-[10px] font-black uppercase">
                    {log.entity_type || "Event"}
                  </span>
                </td>
                <td className="px-6 py-4 text-foreground font-bold text-sm">{log.action_type?.replace('_', ' ') || log.action}</td>
                <td className="px-6 py-4 text-muted-foreground text-xs font-mono max-w-md truncate">
                  {typeof log.details === 'string' ? log.details : JSON.stringify(log.details)}
                </td>
                <td className="px-6 py-4 text-foreground font-medium text-sm">{log.user_name || "System"}</td>
                <td className="px-6 py-4 text-muted-foreground text-sm font-medium">
                  {log.created_at ? new Date(log.created_at).toLocaleString() : "Just now"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
