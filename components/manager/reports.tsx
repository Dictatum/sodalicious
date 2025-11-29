"use client"

import { useEffect, useState, useCallback } from "react"
import { useMenuSync as useMenuSyncHook } from "@/lib/hooks"

type ApiReport = {
  totals: { totalOrders: number; totalSales: number }
  topProducts?: Array<{ id: number; name: string; qty_sold: number; revenue: number }>
  breakdown?: Array<{ date: string; orders_count: number; total_sales: number }>
  meta?: any
}

export default function Reports() {
  const menuSync = useMenuSyncHook()
  const [reportType, setReportType] = useState<"daily" | "weekly" | "monthly" | "payment" | "inventory">("daily")
  const [dateRange, setDateRange] = useState({ start: "", end: "" })
  const [apiReport, setApiReport] = useState<ApiReport | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchReport = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams()
      params.set("type", reportType)
      if (dateRange.start && dateRange.end) {
        params.set("start", dateRange.start)
        params.set("end", dateRange.end)
      }

      const res = await fetch(`/api/reports?${params.toString()}`)
      if (!res.ok) throw new Error(`Status ${res.status}`)
      const json = await res.json()
      // Coerce numeric fields to numbers to avoid toFixed issues
      if (json?.totals) {
        json.totals.totalOrders = Number(json.totals.totalOrders || 0)
        json.totals.totalSales = Number(json.totals.totalSales || 0)
      }
      setApiReport(json)
    } catch (err: any) {
      console.error("[Reports] fetch error", err)
      setError("Failed to fetch report; showing local summary")
      setApiReport(null)
    } finally {
      setLoading(false)
    }
  }, [reportType, dateRange.start, dateRange.end])

  useEffect(() => {
    // initial fetch
    fetchReport()
    // poll every 5 seconds to keep reports in sync with cashier actions
    const id = setInterval(() => {
      fetchReport()
    }, 5000)
    return () => clearInterval(id)
  }, [fetchReport])

  // Local fallback summary when API is unavailable — this keeps UI responsive
  const fallback = {
    title: reportType === "inventory" ? "Inventory Report" : "Daily Sales Report",
    totalSales: apiReport?.totals?.totalSales ?? 0,
    totalOrders: apiReport?.totals?.totalOrders ?? 0,
    itemsSold: apiReport?.breakdown ? apiReport.breakdown.reduce((s: number, b: any) => s + Number(b.orders_count || 0), 0) : 0,
    paymentMethods: {},
  }

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
        ].map((r) => (
          <button
            key={r.id}
            onClick={() => setReportType(r.id as any)}
            className={`p-6 border rounded-lg hover:bg-accent transition-colors text-left ${
              reportType === r.id ? "border-primary bg-primary/10" : "border-border"
            }`}
          >
            <h3 className="font-bold mb-2">{r.label}</h3>
            <p className="text-sm text-muted-foreground">Generate and view report</p>
          </button>
        ))}
      </div>

      <div className="bg-card border border-border rounded-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">{apiReport ? (apiReport.meta?.type || "Report") : fallback.title}</h3>
          <div className="flex items-center gap-2">
            {loading && <span className="text-sm text-muted-foreground">Refreshing...</span>}
            <button onClick={() => fetchReport()} className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              Refresh
            </button>
          </div>
        </div>

        {reportType !== "inventory" && (
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-muted-foreground">Total Sales</p>
              <p className="text-3xl font-bold text-blue-600">₱{Number(apiReport?.totals?.totalSales ?? fallback.totalSales).toFixed(2)}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-muted-foreground">Total Orders</p>
              <p className="text-3xl font-bold text-green-600">{apiReport?.totals?.totalOrders ?? fallback.totalOrders}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-sm text-muted-foreground">Items Sold</p>
              <p className="text-3xl font-bold text-purple-600">{fallback.itemsSold}</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-sm text-muted-foreground">Avg Transaction</p>
              <p className="text-3xl font-bold text-orange-600">₱{(Number(apiReport?.totals?.totalSales ?? fallback.totalSales) / Math.max(1, Number(apiReport?.totals?.totalOrders ?? fallback.totalOrders))).toFixed(2)}</p>
            </div>

            <div className="col-span-2 mt-6">
              <h4 className="font-bold mb-4">Top Products</h4>
              <div className="space-y-2">
                {(apiReport?.topProducts || []).map((p) => (
                  <div key={p.id} className="flex justify-between">
                    <span className="font-medium">{p.name}</span>
                    <span className="text-muted-foreground">{p.qty_sold} — ₱{Number(p.revenue || 0).toFixed(2)}</span>
                  </div>
                ))}
                {(!apiReport?.topProducts || apiReport.topProducts.length === 0) && <div className="text-sm text-muted-foreground">No product data</div>}
              </div>
            </div>
          </div>
        )}

        {reportType === "inventory" && (
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-muted-foreground">Total Products</p>
              <p className="text-3xl font-bold text-blue-600">{apiReport?.topProducts?.length ?? 0}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm text-muted-foreground">In Stock</p>
              <p className="text-3xl font-bold text-green-600">{0}</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-sm text-muted-foreground">Low Stock</p>
              <p className="text-3xl font-bold text-yellow-600">{0}</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-sm text-muted-foreground">Out of Stock</p>
              <p className="text-3xl font-bold text-red-600">{0}</p>
            </div>
          </div>
        )}

        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
      </div>
    </div>
  )
}
