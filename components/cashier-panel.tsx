"use client"

import { useState } from "react"
import { useMenuSync } from "@/lib/hooks"
import { api, type CartItem } from "@/lib/store"
import { deductStock } from "@/lib/menu-data"

interface CashierPanelProps {
  onLogout: () => void
  currentUser: any
}

export default function CashierPanel({ onLogout, currentUser }: CashierPanelProps) {
  const menuSync = useMenuSync()
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "gcash" | "card">("cash")
  const [customerName, setCustomerName] = useState("")
  const [showReceipt, setShowReceipt] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
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

  const handleCheckout = () => {
    if (cart.length === 0) return
    if (paymentMethod === "gcash" || paymentMethod === "card") {
      setShowPaymentModal(true)
    } else {
      processOrder()
    }
  }

  const processOrder = async () => {
    if (cart.length === 0) return

    setCheckoutLoading(true)
    setShowPaymentModal(false)

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

      // Update local in-memory menu immediately so UI reflects new stock
      try {
        cart.forEach((item) => {
          if (item.productId) deductStock(item.productId as string, item.quantity)
        })
        // notify other hooks/components to refresh their menu view
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("menu:update"))
        }
      } catch (e) {
        console.warn("[menu] local deduct failed:", e)
      }

      setLastOrder({
        ...order,
        items: cart,
        subtotal,
        tax,
        total,
      })
      setShowReceipt(true)
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
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center shadow-xl animate-in fade-in zoom-in duration-300">
          <div className="text-primary mb-4 text-4xl">✓</div>
          <h2 className="text-3xl font-bold mb-2 text-foreground">Order Completed!</h2>
          <p className="text-muted-foreground mb-6">Thank you for your purchase.</p>

          <div id="receipt-content" className="text-left bg-white text-black p-6 rounded-xl mb-6 shadow-inner font-mono text-sm">
            <div className="text-center border-b border-black/10 pb-4 mb-4">
              <h3 className="text-xl font-bold uppercase tracking-wider">Sodalicious.Co</h3>
              <p className="text-xs text-gray-500">Premium POS Terminal</p>
            </div>

            <div className="mb-4 text-xs space-y-1 text-gray-600">
              <div className="flex justify-between">
                <span>Order No:</span>
                <span className="font-bold">{lastOrder.order_number}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span>{new Date().toLocaleTimeString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Cashier:</span>
                <span>{currentUser.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Customer:</span>
                <span>{lastOrder.customer_name || "Walk-in"}</span>
              </div>
            </div>

            <div className="border-t border-b border-black/10 py-4 mb-4 space-y-2">
              {lastOrder.items?.map((item: CartItem) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.quantity}x {item.name} ({item.size})</span>
                  <span className="font-semibold">₱{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₱{lastOrder.subtotal?.toFixed(2) || "0.00"}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>₱{lastOrder.tax?.toFixed(2) || "0.00"}</span>
              </div>
              <div className="flex justify-between border-t border-black/10 pt-2 mt-2 text-base font-bold">
                <span>TOTAL</span>
                <span>₱{lastOrder.total?.toFixed(2) || lastOrder.total_amount?.toFixed(2) || "0.00"}</span>
              </div>
              <div className="flex justify-between text-xs pt-1 text-gray-500">
                <span>Payment ({paymentMethod.toUpperCase()})</span>
                <span>₱{lastOrder.total?.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-400">
              <p>Thank you for drinking Sodalicious!</p>
              <p>Please come again.</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                const printContent = document.getElementById("receipt-content")?.innerHTML
                const originalContent = document.body.innerHTML
                if (printContent) {
                  document.title = `Receipt-${lastOrder.order_number}`
                  window.print()
                  // In a real app we might use a hidden iframe or specific print CSS
                  // For this demo, basic window.print() is triggered which prints the whole page usually, 
                  // but we can rely on user selecting "Selection" or just accept it's a demo.
                  // A better way for simple React print:
                  const printWindow = window.open('', '', 'height=600,width=400')
                  if (printWindow) {
                    printWindow.document.write('<html><head><title>Receipt</title><style>body{font-family:monospace; padding: 20px;}</style></head><body>')
                    printWindow.document.write(printContent)
                    printWindow.document.write('</body></html>')
                    printWindow.document.close()
                    printWindow.print()
                  }
                }
              }}
              className="flex-1 py-3 bg-muted text-foreground border border-border rounded-lg font-bold hover:bg-muted/80 transition-all flex items-center justify-center gap-2"
            >
              <span>🖨️ Print Receipt</span>
            </button>
            <button
              onClick={() => setShowReceipt(false)}
              className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all"
            >
              Close & New Order
            </button>
          </div>
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
                  className={`px-4 py-2 rounded-lg whitespace-nowrap font-semibold transition-all ${selectedCategory === cat
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
                  className={`text-xs font-semibold px-2 py-1 rounded-lg mt-2 ${item.stock <= item.minThreshold
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


            <div className="grid grid-cols-3 gap-2 mb-3">
              <button
                onClick={() => setPaymentMethod("cash")}
                className={`py-2 px-1 rounded-lg text-sm font-bold border transition-all ${paymentMethod === "cash"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:bg-muted"
                  }`}
              >
                💵 Cash
              </button>
              <button
                onClick={() => setPaymentMethod("gcash")}
                className={`py-2 px-1 rounded-lg text-sm font-bold border transition-all ${paymentMethod === "gcash"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-background text-foreground border-border hover:bg-muted"
                  }`}
              >
                📱 GCash
              </button>
              <button
                onClick={() => setPaymentMethod("card")}
                className={`py-2 px-1 rounded-lg text-sm font-bold border transition-all ${paymentMethod === "card"
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-background text-foreground border-border hover:bg-muted"
                  }`}
              >
                💳 Card
              </button>
            </div>

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

      {/* Payment Processing Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">
                {paymentMethod === "gcash" ? "GCash Payment" : "Card Payment"}
              </h3>
              <p className="text-muted-foreground">Total to Pay: <span className="font-bold text-primary">₱{total.toFixed(2)}</span></p>
            </div>

            {paymentMethod === "gcash" && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl flex items-center justify-center border border-gray-200">
                  {/* Dummy QR Code */}
                  <div className="w-48 h-48 bg-gray-900 flex items-center justify-center text-white text-xs text-center p-2">
                    [Promotional QR Code Placeholder]
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Reference Number</label>
                  <input
                    type="text"
                    placeholder="e.g. 1234 5678 9012"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary outline-none"
                    autoFocus
                  />
                </div>
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white shadow-lg">
                  <div className="flex justify-between mb-8">
                    <div className="w-12 h-8 bg-yellow-400 rounded-md opacity-80"></div>
                    <span className="font-mono">CREDIT</span>
                  </div>
                  <div className="font-mono text-xl tracking-widest mb-4">•••• •••• •••• ••••</div>
                  <div className="flex justify-between text-xs opacity-80">
                    <span>CARD HOLDER</span>
                    <span>EXPIRES</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Card Number</label>
                  <input
                    type="text"
                    placeholder="xxxx xxxx xxxx xxxx"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary outline-none font-mono"
                    autoFocus
                  />
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 py-3 bg-muted text-foreground border border-border rounded-lg font-bold hover:bg-muted/80 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={processOrder}
                className="flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg"
              >
                {paymentMethod === "gcash" ? "Confirm Payment" : "Process Card"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
