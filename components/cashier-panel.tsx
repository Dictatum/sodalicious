"use client"

import { useState } from "react"
import { useMenuSync } from "@/lib/hooks"
import { api, type CartItem } from "@/lib/store"

interface CashierPanelProps {
  onLogout: () => void
  currentUser: any
}

export default function CashierPanel({ onLogout, currentUser }: CashierPanelProps) {
  const menuSync = useMenuSync()
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "gcash" | "card" | "e-wallet">("cash")
  const [customerName, setCustomerName] = useState("")
  const [showReceipt, setShowReceipt] = useState(false)
  const [lastOrder, setLastOrder] = useState<any>(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  
  // Size selection modal state
  const [showSizeModal, setShowSizeModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const categories = menuSync.getAllCategories()
  const filteredItems = menuSync.getMenuByCategory(selectedCategory).filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.stock > 0
  )

  const handleItemClick = (item: any) => {
    setSelectedItem(item)
    setShowSizeModal(true)
  }

  const handleSizeSelect = (size: any) => {
    if (selectedItem) {
      const cartItemId = `${selectedItem.id}-${size.size}`
      const existing = cart.find((c) => c.id === cartItemId)
      
      if (existing) {
        setCart(cart.map((c) =>
          c.id === cartItemId ? { ...c, quantity: c.quantity + 1 } : c
        ))
      } else {
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
      setCart(cart.map((c) => (c.id === cartItemId ? { ...c, quantity } : c)))
    }
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  const handleCheckout = async () => {
    if (cart.length === 0) return

    setCheckoutLoading(true)
    try {
      const orderData = {
        cashier_id: currentUser?.id || 1,
        customer_name: customerName || "Walk-in Customer",
        total_amount: total,
        payment_method: paymentMethod,
        items: cart.map((item) => ({
          product_id: item.productId,
          name: `${item.name} (${item.size})`,
          quantity: item.quantity,
          price: item.price,
          subtotal: item.price * item.quantity,
        })),
      }

      const order = await api.createOrder(orderData)

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
      console.error("[POS] Checkout error:", err)
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
            <p className="text-sm mt-2 font-medium">{paymentMethod.toUpperCase()}</p>
          </div>

          <div className="text-left bg-muted p-6 rounded-xl mb-6">
            <p className="font-bold text-center mb-4 text-foreground">RECEIPT</p>
            <p className="text-sm mb-4 border-b border-border pb-4 text-foreground">
              Customer: <span className="font-bold">{lastOrder.customer_name || customerName}</span>
              <br />
              Time: <span className="font-bold">{new Date().toLocaleTimeString()}</span>
            </p>
            <div className="space-y-1 text-sm border-b border-border pb-4 mb-4 text-foreground">
              {lastOrder.items?.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between">
                  <span>
                    {item.quantity}x {item.name} ({item.size})
                  </span>
                  <span className="font-semibold">₱{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1 text-sm font-bold text-foreground">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₱{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>₱{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg border-t border-border pt-2">
                <span>Total:</span>
                <span className="text-primary">₱{total.toFixed(2)}</span>
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
                  <span className="mr-2">{menuSync.getCategoryEmoji(cat)}</span>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto grid grid-cols-4 gap-3">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                disabled={item.stock <= 0}
                className="bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:border-primary/50 transition-all text-left group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="w-full h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-3 flex items-center justify-center border border-primary/20">
                  <span className="text-3xl">{menuSync.getCategoryEmoji(item.category)}</span>
                </div>
                <p className="font-bold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.sizes.length} size{item.sizes.length !== 1 ? "s" : ""}
                </p>
                <p
                  className={`text-xs font-semibold px-2 py-1 rounded-lg mt-2 ${
                    item.stock <= item.minThreshold
                      ? "bg-red-100 text-red-700"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.stock} left
                </p>
              </button>
            ))}
          </div>
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
                <div key={item.id} className="bg-muted border border-border p-3 rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-sm text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.size}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive/80 text-sm font-bold"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 bg-background rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-card rounded text-sm font-bold text-foreground hover:bg-muted transition-colors"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 text-sm font-bold text-foreground">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-card rounded text-sm font-bold text-foreground hover:bg-muted transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold text-sm text-primary">₱{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-4 border-t border-border space-y-3">
            <div className="space-y-1 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal:</span>
                <span>₱{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Tax (8%):</span>
                <span>₱{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-foreground border-t border-border pt-2">
                <span>Total:</span>
                <span className="text-primary">₱{total.toFixed(2)}</span>
              </div>
            </div>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value as any)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="cash">Cash</option>
              <option value="gcash">GCash</option>
              <option value="card">Card</option>
              <option value="e-wallet">E-Wallet</option>
            </select>

            <button
              onClick={handleCheckout}
              disabled={cart.length === 0 || checkoutLoading}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {checkoutLoading ? "Processing..." : `Checkout (₱${total.toFixed(2)})`}
            </button>
          </div>
        </div>
      </div>

      {/* Size Selection Modal */}
      {showSizeModal && selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-2 text-foreground">{selectedItem.name}</h3>
            <p className="text-sm text-muted-foreground mb-6">{selectedItem.description}</p>

            <div className="space-y-2 mb-6">
              {selectedItem.sizes.map((size: any) => (
                <button
                  key={size.size}
                  onClick={() => handleSizeSelect(size)}
                  className="w-full py-3 px-4 bg-muted hover:bg-muted/80 border border-border rounded-lg font-semibold text-foreground transition-all flex justify-between items-center"
                >
                  <span>{size.size}</span>
                  <span className="text-primary font-bold">₱{size.price}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setShowSizeModal(false)
                setSelectedItem(null)
              }}
              className="w-full py-2 px-4 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
