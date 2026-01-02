"use client"

import { useState } from "react"
import type { useProducts } from "@/lib/hooks"
import { useMenuSync as useMenuSyncHook } from "@/lib/hooks"
import type { Product } from "@/lib/store"
import { Plus, Search, Filter, Edit, Trash2, X, Save, AlertCircle } from "lucide-react"

interface ProductManagementProps {
  products: ReturnType<typeof useProducts>
}

export default function ProductManagement({ products }: ProductManagementProps) {
  const menuSync = useMenuSyncHook()
  const [showForm, setShowForm] = useState(false)
  const noRecipeCount = menuSync.menuItems.filter(item => !item.ingredients_list || item.bottleneck_ingredient === 'Recipe Missing').length
  const [editingId, setEditingId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState<any>({
    name: "",
    price: 0,
    category: "Hot Coffee",
    stock: 0,
    minThreshold: 5,
    description: "",
    size: "M",
  })

  const filteredItems = menuSync.menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSubmit = () => {
    if (editingId) {
      products.updateProduct(parseInt(editingId), formData)
      setEditingId(null)
    } else {
      products.addProduct(formData)
    }
    setShowForm(false)
    setFormData({
      name: "",
      price: 0,
      category: "Hot Coffee",
      stock: 0,
      minThreshold: 5,
      description: "",
      size: "M",
    })
  }

  const handleEdit = (product: any) => {
    setFormData(product)
    setEditingId(String(product.id))
    setShowForm(true)
  }

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-muted-foreground">Manage your menu items and stock</p>
            {noRecipeCount > 0 && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 bg-rose-50 text-rose-600 text-[10px] font-black rounded border border-rose-100 animate-pulse">
                <AlertCircle className="w-3 h-3" />
                {noRecipeCount} ITEMS MISSING RECIPES
              </span>
            )}
          </div>
        </div>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({
              name: "",
              price: 0,
              category: "Hot Coffee",
              stock: 0,
              minThreshold: 5,
              description: "",
              size: "M",
            })
          }}
          className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          {showForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          {showForm ? "Cancel" : "Add Product"}
        </button>
      </div>

      {showForm && (
        <div className="bg-card border border-primary/20 rounded-xl p-8 mb-8 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600"></div>
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            {editingId ? <Edit className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-primary" />}
            {editingId ? "Edit Product" : "Add New Product"}
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Product Name</label>
              <input
                type="text"
                placeholder="e.g. Camel Machiarro"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {menuSync.getAllCategories().filter(c => c !== "All").map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Price (₱)</label>
              <input
                type="number"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number.parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Size Variant</label>
              <input
                type="text"
                placeholder="e.g. M, L, Regular"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Initial Stock</label>
              <input
                type="number"
                placeholder="0"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: Number.parseInt(e.target.value) })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Low Stock Alert Threshold</label>
              <input
                type="number"
                placeholder="5"
                value={formData.minThreshold}
                onChange={(e) => setFormData({ ...formData, minThreshold: Number.parseInt(e.target.value) })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="col-span-2 space-y-2">
              <label className="text-sm font-semibold">Description</label>
              <textarea
                placeholder="Product description..."
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[100px]"
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-3 bg-muted text-foreground rounded-lg font-bold hover:bg-muted/80 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <Save className="w-5 h-5" />
              {editingId ? "Update Product" : "Save Product"}
            </button>
          </div>
        </div>
      )}

      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        {/* Table Controls */}
        <div className="p-4 border-b border-border bg-muted/20 flex gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Size</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Price</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Stock</th>
              <th className="px-6 py-4 text-left font-bold text-muted-foreground uppercase tracking-wider">Ingredients</th>
              <th className="px-6 py-4 text-right font-bold text-muted-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredItems.map((item: any) => {
              const firstSize = (item.sizes as any)?.[0]
              const displaySize = firstSize?.size || "—"
              const displayPrice = firstSize?.price || 0
              return (
                <tr key={item.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">{item.name}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-secondary rounded-md text-secondary-foreground text-xs font-medium">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">{displaySize}</td>
                  <td className="px-6 py-4 font-mono font-medium">₱{displayPrice.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${item.stock < 18 ? "bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" : item.stock <= item.minThreshold ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" : "bg-green-500"}`}></div>
                      <span className={item.stock < 18 ? "text-red-600 font-black" : item.stock <= item.minThreshold ? "text-amber-600 font-bold" : "font-medium"}>
                        {item.stock > 0 ? `${item.stock} in stock` : "OUT OF STOCK"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1.5 min-w-[200px]">
                      {item.ingredients_list ? (
                        <div className="flex flex-wrap gap-1">
                          {item.ingredients_list.split(', ').map((ing: string) => (
                            <span key={ing} className="px-2 py-0.5 bg-muted text-[10px] font-bold text-muted-foreground rounded border border-border">
                              {ing}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-[10px] font-black text-rose-500 bg-rose-50 px-2 py-1 rounded border border-rose-100 flex items-center gap-1 w-fit">
                          <AlertCircle className="w-3 h-3 text-rose-500" />
                          ⚠️ NO RECIPE
                        </span>
                      )}

                      {item.stock <= 0 && item.bottleneck_ingredient && item.bottleneck_ingredient !== "Recipe Missing" && (
                        <div className="mt-1 flex items-center gap-1.5 text-[9px] font-black text-rose-700 bg-rose-100 px-2 py-1 rounded-md border border-rose-200 uppercase w-fit animate-bounce">
                          <AlertCircle className="w-2.5 h-2.5" />
                          Critical: Add {item.bottleneck_ingredient}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="inline-flex items-center justify-center p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => products.deleteProduct(parseInt(item.id))}
                      className="inline-flex items-center justify-center p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
