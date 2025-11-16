"use client"

import { useState } from "react"
import { useProducts } from "@/lib/hooks"
import { api, type CartItem } from "@/lib/store"

interface CashierPanelProps {
  onLogout: () => void
  currentUser: any
}

export default function CashierPanel({ onLogout, currentUser }: CashierPanelProps) {
  const { products, loading: productsLoading } = useProducts()
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "gcash" | "card" | "e-wallet">("cash")
  const [customerName, setCustomerName] = useState("")
  const [showReceipt, setShowReceipt] = useState(false)
  const [lastOrder, setLastOrder] = useState<any>(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  const categories = ["All", ...new Set(products.map((p) => p.category))]

  const filteredItems = products.filter((item) => {
    const matchCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch && item.stock_quantity > 0
  })

  const addToCart = (item: any) => {
    const existing = cart.find((c) => c.product.id === item.id)
    if (existing) {
      setCart(cart.map((c) => (c.product.id === item.id ? { ...c, quantity: c.quantity + 1 } : c)))
    } else {
      setCart([...cart, { product: item, quantity: 1 }])
    }
  }

  const removeFromCart = (itemId: number) => {
    setCart(cart.filter((c) => c.product.id !== itemId))
  }

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
    } else {
      setCart(cart.map((c) => (c.product.id === itemId ? { ...c, quantity } : c)))
    }
  }

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  const handleCheckout = async () => {
    if (cart.length === 0) return

    setCheckoutLoading(true)
    try {
      const orderData = {
        cashier_id: currentUser.id,
        customer_name: customerName || "Walk-in Customer",
        total_amount: total,
        payment_method: paymentMethod,
        items: cart.map((item) => ({
          product_id: item.product.id,
          quantity: item.quantity,
          price: item.product.price,
          subtotal: item.product.price * item.quantity,
        })),
      }

      const order = await api.createOrder(orderData)

      // Log activity
      await api.logActivity({
        user_id: currentUser.id,
        action: `Completed order ${order.order_number}`,
        action_type: "create",
        entity_type: "order",
        entity_id: order.id,
        details: { items: cart.length, total },
      })

      setLastOrder({
        ...order,
        items: cart,
        subtotal,
        tax,
      })
      setShowReceipt(true)
      setCart([])
      setCustomerName("")
      setTimeout(() => setShowReceipt(false), 10000)
    } catch (err) {
      console.error("[v0] Checkout error:", err)
      alert("Failed to complete order. Please try again.")
    } finally {
      setCheckoutLoading(false)
    }
  }

  if (showReceipt && lastOrder) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Order Successful!</h2>
          <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-6 border border-green-200">
            <p className="font-bold text-lg">✓ Payment Received</p>
            <p className="text-sm mt-2 font-medium">{lastOrder.payment_method.toUpperCase()}</p>
          </div>

          <div className="text-left bg-muted p-6 rounded-xl mb-6">
            <p className="font-bold text-center mb-4 text-foreground">RECEIPT</p>
            <p className="text-sm mb-4 border-b border-border pb-4 text-foreground">
              Order: <span className="font-bold">{lastOrder.order_number}</span>
              <br />
              Time: <span className="font-bold">{new Date(lastOrder.created_at).toLocaleTimeString()}</span>
              <br />
              Customer: <span className="font-bold">{lastOrder.customer_name}</span>
            </p>
            <div className="space-y-1 text-sm border-b border-border pb-4 mb-4 text-foreground">
              {lastOrder.items?.map((item: any) => (
                <div key={item.product.id} className="flex justify-between">
                  <span>
                    {item.quantity}x {item.product.name}
                  </span>
                  <span className="font-semibold">₱{(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 text-sm font-bold text-foreground">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₱{lastOrder.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>₱{lastOrder.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg border-t border-border pt-2">
                <span>Total:</span>
                <span className="text-primary">₱{lastOrder.total_amount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowReceipt(false)}
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            New Order
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground border-b border-primary/20 p-4 flex justify-between items-center shadow-md">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Sodalicious.Co</h1>
          <p className="text-sm text-primary-foreground/80 font-medium">POS Terminal</p>
        </div>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all"
        >
          Logout
        </button>
      </div>

      <div className="flex gap-4 p-4 h-[calc(100vh-80px)]">
        <div className="flex-1 flex flex-col">
          <div className="mb-4 space-y-3">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all"
            />
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {productsLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-muted-foreground">Loading products...</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto grid grid-cols-3 gap-3">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => addToCart(item)}
                  disabled={item.stock_quantity === 0}
                  className="bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:border-primary/50 transition-all text-left group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="w-full h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-3 flex items-center justify-center border border-primary/20">
                    <span className="text-2xl">🍹</span>
                  </div>
                  <p className="font-bold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-lg font-bold text-primary">₱{item.price}</p>
                    <p
                      className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                        item.stock_quantity <= item.reorder_level
                          ? "bg-red-100 text-red-700"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.stock_quantity} left
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-80 bg-card border border-border rounded-2xl flex flex-col shadow-lg">
          <div className="p-5 border-b border-border bg-primary text-primary-foreground rounded-t-2xl">
            <h2 className="text-xl font-bold">Cart</h2>
          </div>

          <div className="p-4 border-b border-border">
            <input
              type="text"
              placeholder="Customer name (optional)"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground transition-all"
            />
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {cart.length === 0 ? (
              <p className="text-center text-muted-foreground py-8 font-medium">Cart is empty</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-muted border border-border p-3 rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-sm text-foreground">{item.product.name}</p>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-destructive hover:text-destructive/80 text-sm font-bold"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 bg-background rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 bg-card rounded text-sm font-bold text-foreground hover:bg-muted transition-colors"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 text-sm font-bold text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 bg-card rounded text-sm font-bold text-foreground hover:bg-muted transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold text-sm text-primary">₱{(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-4 border-t border-border space-y-3 bg-muted/30">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal:</span>
                <span className="font-semibold">₱{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax (8%):</span>
                <span className="font-semibold">₱{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-border pt-2 text-foreground">
                <span>Total:</span>
                <span className="text-primary">₱{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border space-y-3">
            <label className="text-sm font-bold text-foreground">Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value as any)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all"
            >
              <option value="cash">Cash</option>
              <option value="gcash">GCash</option>
              <option value="card">Card</option>
              <option value="e-wallet">E-wallet</option>
            </select>
          </div>

          <div className="p-4 space-y-2">
            <button
              onClick={handleCheckout}
              disabled={cart.length === 0 || checkoutLoading}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
            >
              {checkoutLoading ? "Processing..." : "Complete Payment"}
            </button>
            <button
              onClick={() => setCart([])}
              className="w-full py-2 border border-border rounded-lg font-medium hover:bg-muted transition-all text-foreground"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
