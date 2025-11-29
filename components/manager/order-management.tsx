"use client"

import { useState } from "react"
import type { useDatabaseOrders } from "@/lib/hooks"

interface OrderManagementProps {
  orders: ReturnType<typeof useDatabaseOrders>
}

export default function OrderManagement({ orders }: OrderManagementProps) {
  const [filterStatus, setFilterStatus] = useState<"all" | "Pending" | "Preparing" | "Completed">("all")
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null)

  const filteredOrders = orders.orders.filter((o) => filterStatus === "all" || (((o as any).order_status ?? (o as any).status) === filterStatus))

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
                <td className="px-6 py-4">{(order as any).customer_name ?? (order as any).customer ?? "—"}</td>
                <td className="px-6 py-4">₱{Number((order as any).total_amount ?? (order as any).total ?? 0).toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded text-sm font-bold ${
                    ((order as any).order_status ?? (order as any).status) === "Completed" ? "bg-green-100 text-green-700" :
                    ((order as any).order_status ?? (order as any).status) === "Preparing" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {(order as any).order_status ?? (order as any).status ?? "Pending"}
                  </span>
                </td>
                <td className="px-6 py-4">{(order as any).created_at ?? (order as any).timestamp ?? "-"}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => setExpandedOrderId(expandedOrderId === String(order.id) ? null : String(order.id))}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                  >
                    {expandedOrderId === String(order.id) ? "Hide" : "View"}
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
            const order = orders.orders.find((o) => String(o.id) === expandedOrderId)
            return order ? (
              <div>
                <h3 className="text-xl font-bold mb-4">Order Details: {order.id}</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Customer</p>
                    <p className="font-bold">{(order as any).customer_name ?? (order as any).customer ?? "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Cashier</p>
                    <p className="font-bold">{(order as any).cashier_name ?? (order as any).cashierName ?? "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Payment Method</p>
                    <p className="font-bold capitalize">{(order as any).payment_method ?? (order as any).paymentMethod ?? "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date/Time</p>
                    <p className="font-bold">{(order as any).created_at ?? (order as any).timestamp ?? "-"}</p>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-bold mb-3">Items</h4>
                  <div className="space-y-2">
                    {Array.isArray((order as any).items) && (order as any).items.length > 0 ? (
                      (order as any).items.map((item: any) => (
                        <div key={item.id ?? `${item.name}-${item.quantity}`} className="flex justify-between">
                          <span>
                            {item.quantity ?? item.qty}x {item.name ?? item.product_name}
                          </span>
                          <span>₱{Number((item.price ?? item.unit_price ?? 0) * (item.quantity ?? item.qty ?? 0)).toFixed(2)}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-muted-foreground">No item details available.</div>
                    )}
                  </div>
                  <div className="border-t border-border mt-4 pt-4 space-y-1 font-bold">
                    {(() => {
                      const items = Array.isArray((order as any).items) ? (order as any).items : []
                      const subtotal = items.reduce((s: number, it: any) => s + Number((it.price ?? it.unit_price ?? 0) * (it.quantity ?? it.qty ?? 0)), 0)
                      const displayedSubtotal = subtotal > 0 ? subtotal : Number((order as any).subtotal ?? (order as any).sub_total ?? 0)
                      const tax = Number((order as any).tax ?? (order as any).tax_amount ?? 0)
                      const total = Number((order as any).total_amount ?? (order as any).total ?? displayedSubtotal + tax)

                      return (
                        <>
                          <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>₱{displayedSubtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Tax:</span>
                            <span>₱{tax.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-lg">
                            <span>Total:</span>
                            <span>₱{total.toFixed(2)}</span>
                          </div>
                        </>
                      )
                    })()}
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
