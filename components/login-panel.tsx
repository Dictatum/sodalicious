"use client"

import type React from "react"

import { useState } from "react"
import { CupSoda, Mail, Lock as LockIcon, ArrowRight, ShieldCheck, UserCircle2, AlertCircle } from "lucide-react"

interface LoginPanelProps {
  onLogin: (role: "cashier" | "manager" | "inventory" | string, user: any) => void
}

export default function LoginPanel({ onLogin }: LoginPanelProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const contentType = response.headers.get("content-type")
        let errorMessage = "Login failed"

        if (contentType?.includes("application/json")) {
          try {
            const data = await response.json()
            errorMessage = data.error || errorMessage
          } catch {
            errorMessage = `Server error (${response.status})`
          }
        } else {
          errorMessage = `Server error (${response.status})`
        }

        setError(errorMessage)
        return
      }

      const data = await response.json()

      // Map role names for compatibility
      const roleMap: Record<string, string> = {
        cashier: "cashier",
        manager: "manager",
      }

      onLogin(roleMap[data.user.role] || "cashier", data.user)
      setEmail("")
      setPassword("")
    } catch (err) {
      setError("Network error. Please try again.")
      console.error("[v0] Login error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 bg-[#0a0a0b]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl p-10 overflow-hidden relative">

          {/* Header */}
          <div className="text-center mb-10 relative">
            <div className="inline-flex p-4 rounded-3xl bg-primary/10 mb-6 border border-primary/20 ring-4 ring-primary/5">
              <CupSoda className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl font-black text-white mb-2 tracking-tighter">
              SODALICIOUS<span className="text-primary">.</span>CO
            </h1>
            <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">Premium Point of Sale</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase ml-1 tracking-widest">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  placeholder="name@sodalicious.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-gray-600 transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase ml-1 tracking-widest">Security Code</label>
              <div className="relative group">
                <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-gray-600 transition-all font-medium"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-500 text-xs font-bold flex items-center gap-2 animate-in fade-in slide-in-from-top-1">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full relative group overflow-hidden py-4 bg-primary text-primary-foreground rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary/90 disabled:opacity-50 transition-all shadow-xl shadow-primary/20 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? "Authenticating..." : "Establish Connection"}
                {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </span>
            </button>
          </form>

          {/* Quick Access */}
          <div className="mt-10 pt-8 border-t border-white/5">
            <p className="text-center text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-4">Diagnostic Entry Points</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setEmail("cashier@sodalicious.com")
                  setPassword("123456")
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-white/10 transition-all group"
              >
                <UserCircle2 className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                <span className="text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors">CASHIER</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setEmail("manager@sodalicious.com")
                  setPassword("123456")
                }}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-white/10 transition-all group"
              >
                <ShieldCheck className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                <span className="text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors">MANAGER</span>
              </button>
            </div>
          </div>
        </div>

        <p className="text-center mt-8 text-gray-600 text-[10px] font-medium tracking-widest uppercase">
          &copy; 2026 Sodalicious Advanced Agentic Coding Systems
        </p>
      </div>
    </div>
  )
}
