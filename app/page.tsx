"use client"

import { useState } from "react"
import CashierPanel from "@/components/cashier-panel"
import LoginPanel from "@/components/login-panel"
import ManagerDashboard from "@/components/manager-dashboard"
import InventoryPanel from "@/components/inventory-panel"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userRole, setUserRole] = useState<"cashier" | "manager" | "inventory">("cashier")
  const [currentUser, setCurrentUser] = useState<any>(null)

  const handleLogin = (role: "cashier" | "manager" | "inventory" | string, user: any) => {
    setUserRole(role as "cashier" | "manager" | "inventory")
    setCurrentUser(user)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
  }

  if (!isLoggedIn) {
    return <LoginPanel onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-background">
      {userRole === "cashier" && <CashierPanel onLogout={handleLogout} currentUser={currentUser} />}
      {userRole === "manager" && <ManagerDashboard onLogout={handleLogout} currentUser={currentUser} />}
      {userRole === "inventory" && <InventoryPanel onLogout={handleLogout} currentUser={currentUser} />}
    </div>
  )
}
