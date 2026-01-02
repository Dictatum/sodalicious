"use client"

import { useState, useCallback, useEffect } from "react"
import { useMenuSync, useDatabaseOrders } from "@/lib/hooks"
import { type CartItem } from "@/lib/store"
import { deductStock } from "@/lib/menu-data"
import {
  Search, LogOut, Plus, Minus, X, ShoppingCart,
  CreditCard, Smartphone, Banknote, Receipt,
  Coffee, CupSoda, Utensils, IceCream,
  CheckCircle, ChefHat, GlassWater, LayoutGrid, Trash2,
  Package, History, Clock
} from "lucide-react"

interface CashierPanelProps {
  onLogout: () => void
  currentUser: any
}

// Helper to map category names to Lucide icons
const getCategoryIcon = (category: string) => {
  const normalized = category.toLowerCase()
  if (normalized.includes("soda") || normalized.includes("drink") || normalized.includes("beverage")) return <CupSoda className="w-5 h-5" />
  if (normalized.includes("coffee") || normalized.includes("espresso")) return <Coffee className="w-5 h-5" />
  if (normalized.includes("tea")) return <GlassWater className="w-5 h-5" />
  if (normalized.includes("dessert") || normalized.includes("sweet") || normalized.includes("cake")) return <IceCream className="w-5 h-5" />
  if (normalized.includes("food") || normalized.includes("snack") || normalized.includes("meal")) return <Utensils className="w-5 h-5" />
  return <LayoutGrid className="w-5 h-5" />
}

export default function CashierPanel({ onLogout, currentUser }: CashierPanelProps) {
  const menuSync = useMenuSync()
  const dbOrders = useDatabaseOrders()
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "gcash" | "card">("cash")
  const [customerName, setCustomerName] = useState("")
  const [showReceipt, setShowReceipt] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [lastOrder, setLastOrder] = useState<any>(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  // Size selection modal state
  const [showSizeModal, setShowSizeModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const categories = menuSync.getAllCategories()
  const filteredItems = menuSync.getMenuByCategory(selectedCategory).filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleItemClick = (item: any) => {
    setSelectedItem(item)
    setShowSizeModal(true)
  }

  const handleSizeSelect = (size: any) => {
    if (selectedItem) {
      // Check stock limit before adding
      if (selectedItem.stock <= 0) return

      const cartItemId = `${selectedItem.id}-${size.size}`
      const existing = cart.find((c) => c.id === cartItemId)

      if (existing) {
        if (existing.quantity + 1 > selectedItem.stock) return
        setCart(cart.map((c) =>
          c.id === cartItemId ? { ...c, quantity: c.quantity + 1 } : c
        ))
      } else {
        if (1 > selectedItem.stock) return
        setCart([
          ...cart,
          {
            id: cartItemId,
            productId: selectedItem.id,
            name: selectedItem.name,
            size: size.size,
            price: size.price,
            quantity: 1,
          },
        ])
      }
    }
    setShowSizeModal(false)
    setSelectedItem(null)
  }

  const removeFromCart = (cartItemId: string) => {
    setCart(cart.filter((c) => c.id !== cartItemId))
  }

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId)
    } else {
      // Check stock limit
      const item = cart.find(c => c.id === cartItemId)
      if (item) {
        const product = menuSync.getMenuItemById(String(item.productId))
        if (product && quantity > product.stock) {
          return
        }
      }
      setCart(cart.map((c) => (c.id === cartItemId ? { ...c, quantity } : c)))
    }
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  const handleCheckout = () => {
    if (cart.length === 0) return
    if (paymentMethod === "cash") {
      processOrder()
    } else {
      setShowPaymentModal(true)
    }
  }

  const processOrder = async () => {
    setCheckoutLoading(true)
    try {
      const orderData = {
        customer_name: customerName || "Walk-in",
        items: cart.map(item => ({
          product_id: item.productId,
          name: item.name,
          size: item.size,
          price: item.price,
          quantity: item.quantity,
          subtotal: item.price * item.quantity
        })),
        total_amount: total,
        payment_method: paymentMethod,
        user_id: currentUser.id || 1
      }

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) throw new Error("Failed to process order")

      const order = await response.json()

      // Local stock deduction fallback
      try {
        cart.forEach((item) => {
          if (item.productId) deductStock(item.productId.toString(), item.quantity)
        })
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("menu:update"))
        }
      } catch (e) {
        console.warn("[Menu] Local stock update failed:", e)
      }

      setLastOrder({
        ...order,
        items: cart,
        subtotal,
        tax,
        total,
      })
      setShowReceipt(true)
      setShowPaymentModal(false)
      setCart([])
      setCustomerName("")
    } catch (err) {
      console.error("[POS] Checkout error:", err)
      alert("Failed to complete order. Please try again.")
    } finally {
      setCheckoutLoading(false)
    }
  }

  if (showReceipt && lastOrder) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-2xl animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed</h2>
          <p className="text-slate-500 mb-8 font-medium italic">Transaction processed successfully</p>

          <div id="receipt-content" className="text-left bg-slate-50 border border-slate-100 p-6 rounded-2xl mb-8 font-mono text-sm shadow-inner">
            <div className="text-center border-b border-dashed border-slate-300 pb-4 mb-4">
              <h3 className="text-xl font-black uppercase text-slate-800">Sodalicious</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Order #{lastOrder.order_number || lastOrder.id}</p>
            </div>

            <div className="space-y-3 mb-6">
              {lastOrder.items?.map((item: any) => (
                <div key={item.id} className="flex justify-between items-start text-xs text-slate-600">
                  <span className="flex-1 pr-4">{item.quantity}x {item.name} ({item.size})</span>
                  <span className="font-bold text-slate-900">₱{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed border-slate-300 pt-4 space-y-2">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Subtotal</span>
                <span>₱{lastOrder.subtotal?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Tax (8%)</span>
                <span>₱{lastOrder.tax?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-black text-slate-900 pt-2">
                <span>TOTAL</span>
                <span className="text-primary">₱{lastOrder.total?.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => window.print()}
              className="py-4 bg-slate-100 text-slate-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
            >
              <Receipt className="w-4 h-4" />
              Print
            </button>
            <button
              onClick={() => setShowReceipt(false)}
              className="py-4 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              Next Order
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 pb-12">
      {/* Premium Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-5 flex justify-between items-center sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/90">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
            <CupSoda className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter text-slate-900">SODALICIOUS<span className="text-primary">.CO</span></h1>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Terminal #{currentUser.id}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right flex flex-col items-end">
            <p className="font-black text-sm text-slate-800 uppercase tracking-tight">{currentUser.name}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase">Station Cashier</p>
          </div>
          <button
            onClick={onLogout}
            className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all border border-red-100"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex gap-6 p-6 items-start">
        {/* Left Side: Product Exploration */}
        <section className="flex-1 flex flex-col min-w-0 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 space-y-5">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
              <input
                type="text"
                placeholder="Search premium beverages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-medium text-slate-600 placeholder:text-slate-300 shadow-inner"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={`cat-tab-${cat}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all whitespace-nowrap border-2 ${selectedCategory === cat
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105"
                    : "bg-white border-slate-100 text-slate-400 hover:border-slate-200"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-6 bg-slate-50/10">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                disabled={item.stock <= 0}
                className="group flex flex-col bg-white border border-slate-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:border-primary/40 relative text-left h-72 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-full h-32 bg-slate-50 rounded-xl mb-4 flex items-center justify-center border border-slate-100 group-hover:bg-primary/5 transition-colors shrink-0 relative overflow-hidden">
                  <div className="text-amber-900/20 group-hover:text-primary/30 group-hover:scale-110 transition-all duration-500 scale-[1.3]">
                    {getCategoryIcon(item.category)}
                  </div>

                  <div className={`absolute top-2 right-2 px-2.5 py-1 rounded-lg text-[9px] font-black z-10 shadow-sm ${item.stock < 18 ? "bg-red-600 text-white animate-pulse" : "bg-primary text-white"
                    }`}>
                    {item.stock} LEFT
                  </div>

                  {item.stock <= 0 && (
                    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-20">
                      <span className="bg-red-600 text-white px-3 py-1.5 rounded-xl text-[10px] font-black tracking-widest uppercase -rotate-12 shadow-xl border-2 border-white/20">STAY TUNED</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                  <div className="space-y-1">
                    <h3 className="text-slate-900 font-bold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight truncate">
                      {item.description || "Crafted Experience"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black text-slate-300 uppercase leading-none mb-1">VARIANTS</span>
                      <span className="text-[10px] font-black text-slate-600">{item.sizes.length} Options</span>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-slate-100">
                      <Plus className="w-5 h-5 stroke-[3]" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Right Side: Order Engine - Persistent Sidebar */}
        <section className="w-[450px] flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden sticky top-[108px] h-[calc(100vh-140px)]">
          <div className="p-3 bg-slate-50 border-b border-slate-200 flex gap-2">
            <button
              onClick={() => setShowHistory(false)}
              className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-2xl flex items-center justify-center gap-2 ${!showHistory ? "bg-white text-primary shadow-md shadow-primary/5" : "text-slate-400 hover:text-slate-600"}`}
            >
              <ShoppingCart className="w-4 h-4" /> Cart
            </button>
            <button
              onClick={() => setShowHistory(true)}
              className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-2xl flex items-center justify-center gap-2 ${showHistory ? "bg-white text-primary shadow-md shadow-primary/5" : "text-slate-400 hover:text-slate-600"}`}
            >
              <Clock className="w-4 h-4" /> History
            </button>
          </div>

          {!showHistory ? (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-slate-200">
                    <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                      <Package className="w-12 h-12 opacity-20" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em]">Selection Empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="bg-white border border-slate-100 p-5 rounded-2xl hover:shadow-xl transition-all group flex gap-5 relative">
                      <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-700/40 shrink-0 border border-amber-100">
                        <Coffee className="w-8 h-8" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                          <p className="font-black text-xs text-slate-800 uppercase tracking-tighter truncate">{item.name}</p>
                          <p className="font-black text-primary text-sm">₱{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-[10px] text-slate-400 font-black uppercase">{item.size}</p>
                          <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-2.5 py-1.5 shadow-inner">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-slate-400 hover:text-primary active:scale-90 transition-all"><Minus className="w-3.5 h-3.5" /></button>
                            <span className="text-xs font-black w-4 text-center text-slate-700">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-slate-400 hover:text-primary active:scale-90 transition-all"><Plus className="w-3.5 h-3.5" /></button>
                          </div>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 shadow-xl scale-0 group-hover:scale-100 transition-all border-4 border-white"><X className="w-3 h-3" /></button>
                    </div>
                  ))
                )}
              </div>

              <div className="p-8 border-t border-slate-100 bg-white space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-slate-900">₱{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black text-slate-900 pt-2 border-t border-slate-50">
                    <span>TOTAL</span>
                    <span className="text-primary tracking-tighter">₱{total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "cash", icon: Banknote, label: "Cash", color: "text-green-600", bg: "bg-green-50", bdr: "border-green-200" },
                    { id: "gcash", icon: Smartphone, label: "GCash", color: "text-blue-600", bg: "bg-blue-50", bdr: "border-blue-200" },
                    { id: "card", icon: CreditCard, label: "Card", color: "text-purple-600", bg: "bg-purple-50", bdr: "border-purple-200" }
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id as any)}
                      className={`p-4 rounded-2xl flex flex-col items-center gap-3 transition-all border-2 ${paymentMethod === method.id
                        ? `${method.bg} ${method.bdr} ${method.color} scale-105 shadow-md`
                        : "bg-white border-slate-100 text-slate-300 hover:border-slate-200"
                        }`}
                    >
                      <method.icon className="w-6 h-6" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{method.label}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={cart.length === 0 || checkoutLoading}
                  className="w-full py-5 bg-primary text-white rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-30 disabled:pointer-events-none shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
                >
                  {checkoutLoading ? "Synchronizing..." : <><CheckCircle className="w-5 h-5" /> Execute Order</>}
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-slate-50/50">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-black text-[10px] text-slate-400 uppercase tracking-widest">Transaction History</h3>
                <span className="px-2 py-1 bg-green-100 text-green-600 text-[9px] font-black rounded-full animate-pulse">LIVE</span>
              </div>
              {(dbOrders.orders || []).slice(0, 20).map((order) => (
                <div key={order.id} className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition-all group border-l-4 border-l-primary">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-black text-[10px] text-slate-400 leading-none mb-1">TXN-{order.id}</p>
                      <p className="font-black text-sm text-slate-800 uppercase tracking-tighter">
                        {new Date(order.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-black text-primary">₱{Number(order.total_amount).toFixed(2)}</p>
                      <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{order.payment_method || "CASH"}</p>
                    </div>
                  </div>

                  {/* Order Items List */}
                  {order.items && order.items.length > 0 && (
                    <div className="mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {order.items.map((item: any, idx: number) => (
                        <div key={`${order.id}-item-${idx}`} className="flex justify-between text-[10px] font-bold text-slate-600 mb-1 last:mb-0">
                          <span>{item.quantity}x {item.name}</span>
                          <span className="text-slate-400">({item.size})</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-50">
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-slate-300" />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-tight">Verified & Logged</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Modals outside main flow */}
      {showSizeModal && selectedItem && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl scale-in-95 animate-in duration-300">
            <h3 className="text-2xl font-black text-slate-900 mb-2">{selectedItem.name}</h3>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-tight mb-8">Select Desired Variant</p>

            <div className="space-y-3 mb-8">
              {selectedItem.sizes.map((size: any) => (
                <button
                  key={size.size}
                  onClick={() => handleSizeSelect(size)}
                  className="w-full py-5 px-6 bg-slate-50 hover:bg-primary hover:text-white border border-slate-100 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex justify-between items-center group shadow-sm"
                >
                  <span>{size.size}</span>
                  <span className="font-black text-primary group-hover:text-white">₱{size.price}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => { setShowSizeModal(false); setSelectedItem(null); }}
              className="w-full py-4 text-slate-400 font-black text-xs uppercase tracking-[0.2em] hover:text-slate-600 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-md">
          <div className="bg-white rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                {paymentMethod === 'gcash' ? <Smartphone className="w-8 h-8" /> : <CreditCard className="w-8 h-8" />}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">
                {paymentMethod === "gcash" ? "GCash Checkout" : "Card Checkout"}
              </h3>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Awaiting Confirmation • ₱{total.toFixed(2)}</p>
            </div>

            {paymentMethod === "gcash" && (
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-[2rem] flex flex-col items-center justify-center border border-slate-100 shadow-xl shadow-blue-500/5">
                  <div className="w-48 h-48 bg-[#007DFE] p-4 rounded-3xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <div className="w-full h-full bg-white rounded-xl flex flex-col items-center justify-center p-2 border-4 border-[#007DFE]">
                      <div className="grid grid-cols-5 grid-rows-5 gap-1.5 w-full h-full">
                        {Array.from({ length: 25 }).map((_, i) => (
                          <div key={i} className={`rounded-sm ${(i % 3 === 0 || i % 7 === 1 || i % 13 === 0) ? "bg-[#007DFE]" : "bg-slate-100"}`}></div>
                        ))}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 bg-[#007DFE] rounded-xl flex items-center justify-center shadow-2xl border-2 border-white">
                          <span className="text-white font-black text-[10px]">GC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-300 mt-6 font-black uppercase tracking-[0.3em]">Merchant ID: 1599302</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Reference Number</label>
                  <input
                    type="text"
                    placeholder="Enter receipt # from GCash"
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all font-black text-sm tracking-widest"
                    autoFocus
                  />
                </div>
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                  <div className="flex justify-between mb-12">
                    <div className="w-14 h-10 bg-gradient-to-br from-amber-400 to-amber-200 rounded-lg opacity-90 shadow-lg"></div>
                    <span className="font-black italic text-lg opacity-40">SODAPAY</span>
                  </div>
                  <div className="font-mono text-2xl tracking-[0.2em] mb-6 drop-shadow-lg">•••• •••• •••• ••••</div>
                  <div className="flex justify-between text-[10px] font-black uppercase opacity-40 tracking-widest">
                    <span>Terminal Verified</span>
                    <span>No. {Math.random().toString().slice(2, 6)}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Swipe or Insert Card</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-4 flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <input
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                      autoFocus
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-black text-sm tracking-[0.3em] focus:border-primary focus:bg-white focus:outline-none transition-all placeholder:text-slate-200"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-10">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 py-4 text-slate-400 font-black text-xs uppercase tracking-widest hover:text-slate-600 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={processOrder}
                className="flex-2 px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-xl shadow-primary/20"
              >
                Authorize
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
