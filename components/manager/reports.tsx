"use client"

import { useState } from "react"
import type { useOrders, useProducts } from "@/lib/hooks"

interface ReportsProps {
  orders: ReturnType<typeof useOrders>
  products: ReturnType<typeof useProducts>
}

export default function Reports({ orders, products }: ReportsProps) {
  const [reportType, setReportType] = useState<"daily" | "weekly" | "monthly" | "payment" | "inventory">("daily")
  const [dateRange, setDateRange] = useState({ start: "2025-11-01", end: "2025-11-11" })

  const todayOrders = orders.orders.filter((o) => o.timestamp.startsWith("2025-11-11"))
  const todaysSales = todayOrders.reduce((sum, o) => sum + o.total, 0)
  const todaysItemsSold = todayOrders.reduce(
    (sum, o) => sum + o.items.reduce((itemSum, i) => itemSum + i.quantity, 0),
    0,
  )

  const generateReport = () => {
    const reportData = {
      daily: {
        title: "Daily Sales Report",
        date: "2025-11-11",
        totalSales: todaysSales,
        totalOrders: todayOrders.length,
        itemsSold: todaysItemsSold,
        paymentMethods: {
          cash: todayOrders.filter((o) => o.paymentMethod === "cash").reduce((sum, o) => sum + o.total, 0),
          gcash: todayOrders.filter((o) => o.paymentMethod === "gcash").reduce((sum, o) => sum + o.total, 0),
          card: todayOrders.filter((o) => o.paymentMethod === "card").reduce((sum, o) => sum + o.total, 0),
          ewallet: todayOrders.filter((o) => o.paymentMethod === "ewallet").reduce((sum, o) => sum + o.total, 0),
        },
      },
      inventory: {
        title: "Inventory Report",
        totalProducts: products.products.length,
        inStock: products.products.filter((p) => p.stock > p.minThreshold).length,
        lowStock: products.products.filter((p) => p.stock <= p.minThreshold).length,
        outOfStock: products.products.filter((p) => p.stock === 0).length,
      },
    }

    return reportData[reportType] || reportData.daily
  }

  const report = generateReport()

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-8">Reports</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { id: "daily", label: "Daily Sales Report" },
          { id: "weekly", label: "Weekly Sales Report" },
          { id: "monthly", label: "Monthly Sales Report" },
          { id: "payment", label: "Payment Summary" },
          { id: "inventory", label: "Inventory Report" },
        ].map((report) => (
          <button
            key={report.id}
            onClick={() => setReportType(report.id as any)}
            className={`p-6 border rounded-lg hover:bg-accent transition-colors text-left ${
              reportType === report.id ? "border-primary bg-primary/10" : "border-border"
            }`}
          >
            <h3 className="font-bold mb-2">{report.label}</h3>
            <p className="text-sm text-muted-foreground">Generate and view report</p>
          </button>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">{(report as any).title}</h3>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Export PDF
          </button>
        </div>

        {reportType === "daily" && (
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-muted-foreground">Total Sales</p>
              <p className="text-3xl font-bold text-blue-600">₱{(report as any).totalSales.toFixed(2)}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-muted-foreground">Total Orders</p>
              <p className="text-3xl font-bold text-green-600">{(report as any).totalOrders}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-muted-foreground">Items Sold</p>
              <p className="text-3xl font-bold text-purple-600">{(report as any).itemsSold}</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-sm text-muted-foreground">Avg Transaction</p>
              <p className="text-3xl font-bold text-orange-600">
                ₱{((report as any).totalSales / ((report as any).totalOrders || 1)).toFixed(2)}
              </p>
            </div>

            <div className="col-span-2 mt-6">
              <h4 className="font-bold mb-4">Payment Method Breakdown</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries((report as any).paymentMethods).map(([method, amount]) => (
                  <div key={method} className="p-3 bg-accent rounded">
                    <p className="text-sm text-muted-foreground capitalize">{method}</p>
                    <p className="text-xl font-bold">₱{(amount as number).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {reportType === "inventory" && (
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-muted-foreground">Total Products</p>
              <p className="text-3xl font-bold text-blue-600">{(report as any).totalProducts}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-muted-foreground">In Stock</p>
              <p className="text-3xl font-bold text-green-600">{(report as any).inStock}</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-muted-foreground">Low Stock</p>
              <p className="text-3xl font-bold text-yellow-600">{(report as any).lowStock}</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-muted-foreground">Out of Stock</p>
              <p className="text-3xl font-bold text-red-600">{(report as any).outOfStock}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
