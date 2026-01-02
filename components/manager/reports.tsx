"use client"

import { useEffect, useState, useCallback } from "react"
import { useMenuSync as useMenuSyncHook } from "@/lib/hooks"
import { Package, TrendingUp, BarChart3, PieChart, Activity } from "lucide-react"

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
            className={`p-6 border rounded-lg hover:bg-accent transition-colors text-left ${reportType === r.id ? "border-primary bg-primary/10" : "border-border"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Total Sales</p>
                  <p className="text-3xl font-black text-blue-600">₱{Number(apiReport?.totals?.totalSales ?? fallback.totalSales).toFixed(2)}</p>
                  <div className="mt-2 h-1 w-full bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-[70%]"></div>
                  </div>
                </div>
                <div className="p-5 bg-green-50 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-all">
                  <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-1">Total Orders</p>
                  <p className="text-3xl font-black text-green-600">{apiReport?.totals?.totalOrders ?? fallback.totalOrders}</p>
                </div>
                <div className="p-5 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm hover:shadow-md transition-all">
                  <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1">Items Sold</p>
                  <p className="text-3xl font-black text-purple-600">{fallback.itemsSold}</p>
                </div>
                <div className="p-5 bg-orange-50 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
                  <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-1">Avg Ticket</p>
                  <p className="text-3xl font-black text-orange-600">₱{(Number(apiReport?.totals?.totalSales ?? fallback.totalSales) / Math.max(1, Number(apiReport?.totals?.totalOrders ?? fallback.totalOrders))).toFixed(2)}</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Sales Performance Trend
                </h4>
                <div className="space-y-5">
                  {[
                    { label: "Morning Rush (7am - 10am)", value: 45, color: "bg-blue-500" },
                    { label: "Lunch Break (11am - 2pm)", value: 85, color: "bg-orange-500" },
                    { label: "Afternoon Chill (3pm - 6pm)", value: 65, color: "bg-purple-500" },
                    { label: "Evening Peak (7pm - 10pm)", value: 92, color: "bg-green-500" },
                  ].map((t) => (
                    <div key={t.label} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase">
                        <span>{t.label}</span>
                        <span>{t.value}% busy</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
                        <div className={`h-full ${t.color} transition-all duration-1000`} style={{ width: `${t.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <h4 className="font-black text-xs uppercase tracking-widest text-slate-400 mb-6">Popular Products Ranking</h4>
              <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                {(apiReport?.topProducts || []).map((p, idx) => (
                  <div key={p.id} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center font-black text-xs text-slate-400 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-end mb-1">
                        <span className="font-bold text-sm text-slate-700">{p.name}</span>
                        <span className="text-[10px] font-black text-primary uppercase">₱{Number(p.revenue || 0).toFixed(0)}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary/40 group-hover:bg-primary transition-all duration-700"
                          style={{ width: `${Math.min(100, (p.qty_sold / 20) * 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-[9px] text-slate-400 font-bold mt-1 uppercase tracking-tighter">{p.qty_sold} Units Sold This period</p>
                    </div>
                  </div>
                ))}
                {(!apiReport?.topProducts || apiReport.topProducts.length === 0) && (
                  <div className="h-full flex flex-col items-center justify-center text-slate-300 py-20">
                    <Package className="w-12 h-12 mb-3 opacity-20" />
                    <p className="text-xs font-black uppercase tracking-widest">No Sales Data</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {reportType === "inventory" && (
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Total Catalog Items</p>
              <p className="text-4xl font-black text-blue-600">{apiReport?.topProducts?.length ?? 0}</p>
            </div>
            <div className="p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm">
              <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-1">Healthy Stock Level</p>
              <p className="text-4xl font-black text-green-600">80%</p>
            </div>
          </div>
        )}

        {error && <p className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100">{error}</p>}
      </div>
    </div>
  )
}
