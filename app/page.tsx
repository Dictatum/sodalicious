"use client"

import { useState } from "react"
import CashierPanel from "@/components/cashier-panel"
import LoginPanel from "@/components/login-panel"
import ManagerDashboard from "@/components/manager-dashboard"
import InventoryPanel from "@/components/inventory-panel"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<"cashier" | "manager" | "inventory">("cashier")

  const handleLogin = (role: "cashier" | "manager" | "inventory") => {
    setUserRole(role)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  if (!isLoggedIn) {
    return <LoginPanel onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-background">
      {userRole === "cashier" && <CashierPanel onLogout={handleLogout} />}
      {userRole === "manager" && <ManagerDashboard onLogout={handleLogout} />}
      {userRole === "inventory" && <InventoryPanel onLogout={handleLogout} />}
    </div>
  )
}
