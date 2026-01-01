"use client"

import type React from "react"

import { useState } from "react"

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
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl shadow-2xl p-8 w-full max-w-md border border-border">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 tracking-tight">Sodalicious.Co</h1>
          <p className="text-muted-foreground text-sm font-medium">Premium POS System</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 mb-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground transition-all"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground transition-all"
            required
          />

          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 transition-all shadow-md hover:shadow-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="space-y-2 pt-4 border-t border-border">
          <p className="text-center text-xs text-muted-foreground font-medium mb-3">Demo Credentials:</p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p className="font-semibold">Cashier: cashier@sodalicious.com / 123456</p>
            <p className="font-semibold">Manager: manager@sodalicious.com / 123456</p>
          </div>
        </div>
      </div>
    </div>
  )
}
