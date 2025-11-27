"use client"

import { useState } from "react"
import type { useProducts, useInventoryLogs, useMenuSync } from "@/lib/hooks"
import { useMenuSync as useMenuSyncHook } from "@/lib/hooks"

interface InventoryManagementProps {
  products: ReturnType<typeof useProducts>
  inventoryLogs: ReturnType<typeof useInventoryLogs>
}

export default function InventoryManagement({ products, inventoryLogs }: InventoryManagementProps) {
  const menuSync = useMenuSyncHook()
  const [showAdjustForm, setShowAdjustForm] = useState(false)
  const [adjustingProductId, setAdjustingProductId] = useState<string | null>(null)
  const [adjustmentData, setAdjustmentData] = useState({ quantity: 0, type: "restock", reason: "" })

  const lowStockItems = menuSync.getLowStockItems()

  const handleAdjustment = () => {
    if (adjustingProductId) {
      const product = products.products.find((p) => p.id === adjustingProductId)
      if (product) {
        const newStock =
          product.stock + (adjustmentData.type === "restock" ? adjustmentData.quantity : -adjustmentData.quantity)
        products.updateProduct(adjustingProductId, { stock: Math.max(0, newStock) })

        inventoryLogs.addLog({
          productId: adjustingProductId,
          productName: product.name,
          type: adjustmentData.type as any,
          quantity: adjustmentData.quantity,
          reason: adjustmentData.reason,
          timestamp: new Date().toLocaleString(),
          userId: 1,
          userName: "Current User",
        })

        setAdjustingProductId(null)
        setShowAdjustForm(false)
        setAdjustmentData({ quantity: 0, type: "restock", reason: "" })
      }
    }
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8">Inventory Management</h2>

      {lowStockItems.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-sm font-bold text-yellow-800">⚠ Low Stock Alert</p>
          <p className="text-sm text-yellow-700">{lowStockItems.length} items need restocking</p>
        </div>
      )}

      {showAdjustForm && (
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Adjust Inventory</h3>
          <div className="grid grid-cols-2 gap-4">
            <select
              value={adjustmentData.type}
              onChange={(e) => setAdjustmentData({ ...adjustmentData, type: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background"
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
              className="px-4 py-2 border border-border rounded bg-background"
            />
            <textarea
              placeholder="Reason"
              value={adjustmentData.reason}
              onChange={(e) => setAdjustmentData({ ...adjustmentData, reason: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background col-span-2"
            />
          </div>
          <div className="space-x-2 mt-4">
            <button
              onClick={handleAdjustment}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Apply
            </button>
            <button
              onClick={() => {
                setShowAdjustForm(false)
                setAdjustingProductId(null)
              }}
              className="px-4 py-2 border border-border rounded-md hover:bg-accent"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-accent">
            <tr>
              <th className="px-6 py-4 text-left font-bold">Item</th>
              <th className="px-6 py-4 text-left font-bold">Current Stock</th>
              <th className="px-6 py-4 text-left font-bold">Min Threshold</th>
              <th className="px-6 py-4 text-left font-bold">Status</th>
              <th className="px-6 py-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.products.map((item) => (
              <tr key={item.id} className="hover:bg-accent/50">
                <td className="px-6 py-4 font-medium">{item.name}</td>
                <td className="px-6 py-4">{item.stock}</td>
                <td className="px-6 py-4">{item.minThreshold}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded text-sm font-bold ${
                      item.stock <= item.minThreshold ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.stock <= item.minThreshold ? "Low" : "In Stock"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      setAdjustingProductId(item.id)
                      setShowAdjustForm(true)
                    }}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                  >
                    Adjust
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {inventoryLogs.logs.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Inventory History</h3>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-accent">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Product</th>
                  <th className="px-6 py-4 text-left font-bold">Type</th>
                  <th className="px-6 py-4 text-left font-bold">Quantity</th>
                  <th className="px-6 py-4 text-left font-bold">Reason</th>
                  <th className="px-6 py-4 text-left font-bold">User</th>
                  <th className="px-6 py-4 text-left font-bold">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {inventoryLogs.logs.map((log: any) => (
                  <tr key={log.id} className="hover:bg-accent/50">
                    <td className="px-6 py-4">{log.productName}</td>
                    <td className="px-6 py-4 capitalize">{log.type}</td>
                    <td className="px-6 py-4">{log.quantity}</td>
                    <td className="px-6 py-4">{log.reason || "-"}</td>
                    <td className="px-6 py-4">{log.userName}</td>
                    <td className="px-6 py-4">{log.timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
