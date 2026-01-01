
"use client"

import { useState } from "react"
import type { useProducts, useInventoryLogs, useMenuSync } from "@/lib/hooks"
import { useIngredients } from "@/lib/hooks"

interface InventoryManagementProps {
  products: ReturnType<typeof useProducts>
  inventoryLogs: ReturnType<typeof useInventoryLogs>
}

export default function InventoryManagement({ products, inventoryLogs }: InventoryManagementProps) {
  const { ingredients, refetch } = useIngredients()
  const [showAdjustForm, setShowAdjustForm] = useState(false)
  const [adjustingId, setAdjustingId] = useState<number | null>(null)
  const [adjustmentData, setAdjustmentData] = useState({ quantity: 0, type: "restock", reason: "" })

  const lowStockItems = ingredients.filter(i => Number(i.stock_quantity) <= Number(i.reorder_level))

  const handleAdjustment = async () => {
    if (adjustingId) {
      const item = ingredients.find((i) => i.id === adjustingId)
      if (item) {
        const change = adjustmentData.type === "restock" ? adjustmentData.quantity : -adjustmentData.quantity

        try {
          const response = await fetch("/api/inventory", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ingredient_id: item.id,
              user_id: 1, // Defaulting to 1 since we don't have user context here easily, typically passed down
              log_type: adjustmentData.type,
              quantity_changed: change,
              reason: adjustmentData.reason,
            }),
          })

          if (response.ok) {
            refetch()
            inventoryLogs.refetch()
          } else {
            console.error("Failed to update inventory")
          }
        } catch (e) {
          console.error(e)
        }

        setAdjustingId(null)
        setShowAdjustForm(false)
        setAdjustmentData({ quantity: 0, type: "restock", reason: "" })
      }
    }
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8">Ingredient Inventory Management</h2>

      {lowStockItems.length > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <p className="text-sm font-bold text-yellow-800">⚠ Low Stock Alert</p>
          <p className="text-sm text-yellow-700">{lowStockItems.length} ingredients need restocking</p>
        </div>
      )}

      {showAdjustForm && (
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Adjust Stock</h3>
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
                setAdjustingId(null)
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
              <th className="px-6 py-4 text-left font-bold">Ingredient</th>
              <th className="px-6 py-4 text-left font-bold">Unit</th>
              <th className="px-6 py-4 text-left font-bold">Current Stock</th>
              <th className="px-6 py-4 text-left font-bold">Reorder Level</th>
              <th className="px-6 py-4 text-left font-bold">Status</th>
              <th className="px-6 py-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {ingredients.map((item) => (
              <tr key={item.id} className="hover:bg-accent/50">
                <td className="px-6 py-4 font-medium">{item.name}</td>
                <td className="px-6 py-4">{item.unit}</td>
                <td className={`px-6 py-4 font-bold ${Number(item.stock_quantity) <= Number(item.reorder_level) ? "text-red-600" : "text-foreground"}`}>
                  {item.stock_quantity}
                </td>
                <td className="px-6 py-4">{item.reorder_level}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded text-sm font-bold ${Number(item.stock_quantity) <= Number(item.reorder_level) ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"
                      }`}
                  >
                    {Number(item.stock_quantity) <= Number(item.reorder_level) ? "Low" : "OK"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      setAdjustingId(item.id)
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

      {
        inventoryLogs.logs.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Inventory History</h3>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-accent">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Ingredient</th>
                    <th className="px-6 py-4 text-left font-bold">Type</th>
                    <th className="px-6 py-4 text-left font-bold">Qty Changed</th>
                    <th className="px-6 py-4 text-left font-bold">Reason</th>
                    <th className="px-6 py-4 text-left font-bold">User</th>
                    <th className="px-6 py-4 text-left font-bold">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {inventoryLogs.logs.map((log: any) => (
                    <tr key={log.id} className="hover:bg-accent/50">
                      <td className="px-6 py-4">{log.ingredient_name || log.productName || "Unknown"}</td>
                      <td className="px-6 py-4 capitalize">{log.log_type || log.type}</td>
                      <td className="px-6 py-4">{log.quantity_changed || log.quantity}</td>
                      <td className="px-6 py-4">{log.reason || "-"}</td>
                      <td className="px-6 py-4">{log.user_name || log.userName}</td>
                      <td className="px-6 py-4">{log.created_at ? new Date(log.created_at).toLocaleString() : log.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      }
    </div >
  )
}
