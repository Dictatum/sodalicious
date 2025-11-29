"use client"

import { useState } from "react"
import { useProducts, useInventoryLogs, useMenuSync } from "@/lib/hooks"
import { updateProductStock } from "@/lib/menu-data"

interface InventoryPanelProps {
  onLogout: () => void
  currentUser?: any
}

export default function InventoryPanel({ onLogout, currentUser }: InventoryPanelProps) {
  const products = useProducts()
  const inventoryLogs = useInventoryLogs()
  const menuSync = useMenuSync()
  const [activeTab, setActiveTab] = useState<"inventory" | "logs">("inventory")

  return (
    <div className="flex h-screen bg-background">
      <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col shadow-lg">
        <div className="p-6 border-b border-sidebar-border bg-sidebar-primary/10">
          <h1 className="text-2xl font-bold text-sidebar-foreground tracking-tight">Sodalicious</h1>
          <p className="text-sm text-sidebar-foreground/70 font-medium">Inventory Officer</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: "inventory", label: "Stock Management", icon: "📦" },
            { id: "logs", label: "Stock History", icon: "📋" },
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
        {activeTab === "inventory" && <InventoryView menuSync={menuSync} inventoryLogs={inventoryLogs} currentUser={currentUser} />}
        {activeTab === "logs" && <StockHistoryView inventoryLogs={inventoryLogs} />}
      </div>
    </div>
  )
}

function InventoryView({
  menuSync,
  inventoryLogs,
  currentUser,
}: { menuSync: ReturnType<typeof useMenuSync>; inventoryLogs: ReturnType<typeof useInventoryLogs>; currentUser?: any }) {
  const [adjustingId, setAdjustingId] = useState<string | null>(null)
  const [adjustmentData, setAdjustmentData] = useState({ quantity: 0, type: "restock", reason: "" })

  const lowStockItems = menuSync.getLowStockItems()

  const handleAdjustment = async () => {
    if (adjustingId) {
      const item = menuSync.getMenuItemById(adjustingId)
      if (item) {
        const change = adjustmentData.type === "restock" ? adjustmentData.quantity : -adjustmentData.quantity
        const newStock = (item.stock || 0) + change

        // Update in-memory menu immediately
        updateProductStock(item.id, newStock)

        // Call API to update SQL and log the inventory change
        try {
          const response = await fetch("/api/inventory", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              product_id: item.name, // Send product name as fallback for database lookup
              user_id: currentUser?.id || 1,
              log_type: adjustmentData.type,
              quantity_changed: change,
              reason: adjustmentData.reason,
            }),
          })

          if (response.ok) {
            console.log("[Inventory] API sync successful")
            // Update inventory log
            inventoryLogs.addLog({
              productId: parseInt(adjustingId),
              productName: item.name,
              type: adjustmentData.type as any,
              quantity: adjustmentData.quantity,
              reason: adjustmentData.reason,
              timestamp: new Date().toLocaleString(),
              userId: currentUser?.id || 1,
              userName: currentUser?.name || "Inventory Officer",
            })
          } else {
            console.error("[Inventory] API sync failed:", await response.text())
          }
        } catch (e) {
          console.error("[Inventory] API error:", e)
        }

        // Dispatch update event so manager and cashier panels refresh
        if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("menu:update"))

        setAdjustingId(null)
        setAdjustmentData({ quantity: 0, type: "restock", reason: "" })
      }
    }
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Stock Management</h2>

      {lowStockItems.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8">
          <p className="text-sm font-bold text-yellow-800">⚠ Low Stock Items: {lowStockItems.length}</p>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
            {lowStockItems.map((item) => (
              <p key={item.id} className="text-sm text-yellow-700 font-medium">
                {item.name} ({item.stock}/{item.minThreshold})
              </p>
            ))}
          </div>
        </div>
      )}

      {adjustingId && (
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-foreground">Adjust Stock</h3>
          <div className="grid grid-cols-2 gap-4">
            <select
              value={adjustmentData.type}
              onChange={(e) => setAdjustmentData({ ...adjustmentData, type: e.target.value })}
              className="px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="restock">Restock</option>
              <option value="damage">Damage</option>
              <option value="waste">Waste</option>
            </select>
            <input
              type="number"
              placeholder="Quantity"
              value={adjustmentData.quantity}
              onChange={(e) => setAdjustmentData({ ...adjustmentData, quantity: Number.parseInt(e.target.value) })}
              className="px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Reason"
              value={adjustmentData.reason}
              onChange={(e) => setAdjustmentData({ ...adjustmentData, reason: e.target.value })}
              className="px-4 py-2 border border-border rounded-lg bg-card text-foreground col-span-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="space-x-2 mt-4">
            <button
              onClick={handleAdjustment}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold transition-all"
            >
              Apply
            </button>
            <button
              onClick={() => setAdjustingId(null)}
              className="px-4 py-2 border border-border rounded-lg hover:bg-muted font-semibold transition-all text-foreground"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <table className="w-full">
          <thead className="bg-primary/5 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left font-bold text-foreground">Product</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Current Stock</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Min Threshold</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Category</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Status</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {menuSync.menuItems.map((item) => (
              <tr key={item.id} className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-4 font-medium text-foreground">{item.name}</td>
                <td className="px-6 py-4 text-foreground">{item.stock}</td>
                <td className="px-6 py-4 text-foreground">{item.minThreshold}</td>
                <td className="px-6 py-4 text-foreground">{item.category}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-lg text-sm font-bold ${
                      item.stock <= item.minThreshold
                        ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                        : "bg-green-100 text-green-700 border border-green-200"
                    }`}
                  >
                    {item.stock <= item.minThreshold ? "Low" : "OK"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setAdjustingId(item.id)}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm hover:bg-primary/20 font-semibold transition-colors border border-primary/20"
                  >
                    Adjust
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function StockHistoryView({ inventoryLogs }: { inventoryLogs: ReturnType<typeof useInventoryLogs> }) {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Stock History</h2>
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
        <table className="w-full">
          <thead className="bg-primary/5 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left font-bold text-foreground">Product</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Type</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Quantity</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Reason</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Officer</th>
              <th className="px-6 py-4 text-left font-bold text-foreground">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {inventoryLogs.logs.map((log) => (
              <tr key={log.id} className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-4 text-foreground">{log.productName}</td>
                <td className="px-6 py-4 capitalize font-semibold text-foreground">{log.type}</td>
                <td className="px-6 py-4 font-bold text-foreground">{log.quantity}</td>
                <td className="px-6 py-4 text-foreground">{log.reason || "-"}</td>
                <td className="px-6 py-4 text-foreground">{log.userName}</td>
                <td className="px-6 py-4 text-muted-foreground text-sm">{log.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
