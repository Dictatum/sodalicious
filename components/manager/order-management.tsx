"use client"

import { useState } from "react"
import type { useDatabaseOrders } from "@/lib/hooks"
import { Eye, EyeOff, ClipboardList, CheckCircle } from "lucide-react"

interface OrderManagementProps {
  orders: ReturnType<typeof useDatabaseOrders>
}

export default function OrderManagement({ orders }: OrderManagementProps) {
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null)

  // Filter to show only Completed orders by default if requested to "remove pending/preparing" view
  // Or just filter out pending/preparing from the view.
  const filteredOrders = orders.orders.filter((o: any) => {
    const status = (o.order_status ?? o.status ?? "").toLowerCase()
    return status === "completed"
  })

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Order History</h2>
          <p className="text-muted-foreground mt-1">View past transactions</p>
        </div>
        <div className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg flex items-center gap-2">
          <ClipboardList className="w-5 h-5" />
          {filteredOrders.length} Total Orders
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Total</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-right font-bold text-muted-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-muted/50 transition-colors">
                <td className="px-6 py-4 font-bold font-mono">{order.id}</td>
                <td className="px-6 py-4 font-medium">{(order as any).customer_name ?? (order as any).customer ?? "—"}</td>
                <td className="px-6 py-4 font-bold text-primary">₱{Number((order as any).total_amount ?? (order as any).total ?? 0).toFixed(2)}</td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 capitalize w-fit">
                    <CheckCircle className="w-3 h-3" />
                    {(order as any).order_status ?? (order as any).status ?? "Completed"}
                  </span>
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {(order as any).created_at ? new Date((order as any).created_at).toLocaleString() : "-"}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => setExpandedOrderId(expandedOrderId === String(order.id) ? null : String(order.id))}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg font-medium text-xs transition-colors"
                  >
                    {expandedOrderId === String(order.id) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {expandedOrderId === String(order.id) ? "Hide Details" : "View Details"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {expandedOrderId && (
        <div className="mt-8 bg-card border border-border rounded-xl p-8 shadow-md animate-in fade-in slide-in-from-bottom-4 duration-300">
          {(() => {
            const order = orders.orders.find((o) => String(o.id) === expandedOrderId)
            return order ? (
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    Order Details
                    <span className="text-muted-foreground font-normal">#{order.id}</span>
                  </h3>
                  <div className="text-xs font-mono bg-muted px-3 py-1 rounded">
                    ID: {order.id}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-8 mb-8 p-6 bg-muted/20 rounded-lg border border-border/50">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Customer</p>
                    <p className="font-bold text-lg">{(order as any).customer_name ?? (order as any).customer ?? "—"}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Cashier</p>
                    <p className="font-bold text-lg">{(order as any).cashier_name ?? (order as any).cashierName ?? "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Payment Method</p>
                    <p className="font-bold text-lg capitalize flex items-center gap-2">
                      {(order as any).payment_method ?? (order as any).paymentMethod ?? "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Date Logged</p>
                    <p className="font-bold text-lg">{(order as any).created_at ? new Date((order as any).created_at).toLocaleDateString() : "-"}</p>
                  </div>
                </div>

                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-muted/50 px-6 py-3 border-b border-border font-bold text-sm">Items Purchased</div>
                  <div className="divide-y divide-border">
                    {Array.isArray((order as any).items) && (order as any).items.length > 0 ? (
                      (order as any).items.map((item: any) => (
                        <div key={item.id ?? `${item.name}-${item.quantity}`} className="flex justify-between p-4 hover:bg-muted/20">
                          <span className="font-medium">
                            <span className="font-bold text-primary mr-2">{item.quantity ?? item.qty}x</span>
                            {item.name ?? item.product_name}
                          </span>
                          <span className="font-mono">₱{Number((item.price ?? item.unit_price ?? 0) * (item.quantity ?? item.qty ?? 0)).toFixed(2)}</span>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-sm text-muted-foreground text-center italic">No item details available in history record.</div>
                    )}
                  </div>
                  <div className="bg-muted/20 p-4 border-t border-border space-y-1">
                    {(() => {
                      const items = Array.isArray((order as any).items) ? (order as any).items : []
                      const subtotal = items.reduce((s: number, it: any) => s + Number((it.price ?? it.unit_price ?? 0) * (it.quantity ?? it.qty ?? 0)), 0)
                      const displaysubtotal = subtotal > 0 ? subtotal : Number((order as any).subtotal ?? (order as any).sub_total ?? 0)
                      const tax = Number((order as any).tax ?? (order as any).tax_amount ?? 0)
                      const total = Number((order as any).total_amount ?? (order as any).total ?? displaysubtotal + tax)

                      return (
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex justify-between w-64 text-sm text-muted-foreground">
                            <span>Subtotal</span>
                            <span>₱{displaysubtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between w-64 text-sm text-muted-foreground">
                            <span>Tax (8%)</span>
                            <span>₱{tax.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between w-64 text-xl font-black text-foreground border-t border-border pt-2 mt-2">
                            <span>TOTAL</span>
                            <span>₱{total.toFixed(2)}</span>
                          </div>
                        </div>
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
