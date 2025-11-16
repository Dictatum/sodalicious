"use client"

import { useState } from "react"
import type { useOrders } from "@/lib/hooks"

interface OrderManagementProps {
  orders: ReturnType<typeof useOrders>
}

export default function OrderManagement({ orders }: OrderManagementProps) {
  const [filterStatus, setFilterStatus] = useState<"all" | "Pending" | "Preparing" | "Completed">("all")
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null)

  const filteredOrders = orders.orders.filter((o) => filterStatus === "all" || o.status === filterStatus)

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8">Order Management</h2>

      <div className="flex gap-4 mb-8">
        {(["all", "Pending", "Preparing", "Completed"] as const).map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-md transition-colors ${
              filterStatus === status
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-foreground hover:bg-accent/80"
            }`}
          >
            {status === "all" ? "All Orders" : status}
          </button>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-accent">
            <tr>
              <th className="px-6 py-4 text-left font-bold">Order ID</th>
              <th className="px-6 py-4 text-left font-bold">Customer</th>
              <th className="px-6 py-4 text-left font-bold">Total</th>
              <th className="px-6 py-4 text-left font-bold">Status</th>
              <th className="px-6 py-4 text-left font-bold">Date</th>
              <th className="px-6 py-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-accent/50">
                <td className="px-6 py-4 font-bold">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">₱{order.total.toFixed(2)}</td>
                <td className="px-6 py-4">
                  <select
                    value={order.status}
                    onChange={(e) => orders.updateOrderStatus(order.id, e.target.value as any)}
                    className={`px-3 py-1 rounded text-sm font-bold border-0 ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Preparing"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    <option>Pending</option>
                    <option>Preparing</option>
                    <option>Completed</option>
                  </select>
                </td>
                <td className="px-6 py-4">{order.timestamp}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setExpandedOrderId(expandedOrderId === order.id ? null : order.id)}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                  >
                    {expandedOrderId === order.id ? "Hide" : "View"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {expandedOrderId && (
        <div className="mt-8 bg-card border border-border rounded-lg p-6">
          {(() => {
            const order = orders.orders.find((o) => o.id === expandedOrderId)
            return order ? (
              <div>
                <h3 className="text-xl font-bold mb-4">Order Details: {order.id}</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Customer</p>
                    <p className="font-bold">{order.customer}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Cashier</p>
                    <p className="font-bold">{order.cashierName || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Payment Method</p>
                    <p className="font-bold capitalize">{order.paymentMethod}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date/Time</p>
                    <p className="font-bold">{order.timestamp}</p>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-bold mb-3">Items</h4>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>
                          {item.quantity}x {item.name}
                        </span>
                        <span>₱{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border mt-4 pt-4 space-y-1 font-bold">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>₱{order.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax:</span>
                      <span>₱{order.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Total:</span>
                      <span>₱{order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          })()}
        </div>
      )}
    </div>
  )
}
