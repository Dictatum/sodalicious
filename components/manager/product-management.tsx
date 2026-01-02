"use client"

import { useState, useEffect } from "react"
import type { useProducts } from "@/lib/hooks"
import { useMenuSync as useMenuSyncHook, useIngredients } from "@/lib/hooks"
import { Plus, Search, Edit, Trash2, X, Save, AlertCircle, RefreshCw } from "lucide-react"

interface ProductManagementProps {
  products: ReturnType<typeof useProducts>
}

export default function ProductManagement({ products }: ProductManagementProps) {
  const menuSync = useMenuSyncHook()
  const { ingredients } = useIngredients()
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [loadingDetails, setLoadingDetails] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")

  const [formData, setFormData] = useState<{
    name: string
    category: string
    price: number
    description: string
    stock_quantity: number
    min_threshold: number
    size: string
    ingredients: { ingredient_id: number; amount: number; name?: string; unit?: string }[]
  }>({
    name: "",
    category: "Hot Coffee",
    price: 0,
    description: "",
    stock_quantity: 0,
    min_threshold: 10,
    size: "M",
    ingredients: []
  })

  // Derived from database products for display list
  const filteredItems = (products.products || []).filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === "All" || item.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const noRecipeCount = (products.products || []).filter(item => !item.ingredients_list || item.bottleneck_ingredient === 'Recipe Missing').length

  const handleEdit = async (item: any) => {
    setEditingId(String(item.id))
    setLoadingDetails(true)
    setShowForm(true)

    try {
      // Fetch detailed product info including recipes
      console.log("Fetching details for:", item.id)
      const res = await fetch(`/api/products/${item.id}`)
      if (!res.ok) {
        console.error("Fetch failed:", res.status, res.statusText)
        throw new Error("Failed to fetch details")
      }
      const details = await res.json()
      console.log("Details fetched:", details)

      setFormData({
        name: details.name,
        category: details.category,
        price: !isNaN(Number(details.price)) ? Number(details.price) : 0,
        description: details.description || "",
        stock_quantity: details.stock_quantity || 0,
        min_threshold: details.min_threshold || 10,
        size: "M", // Default or extract if stored
        ingredients: details.ingredients || []
      })
    } catch (e) {
      console.error(e)
      alert("Failed to load product details")
      setShowForm(false)
    } finally {
      setLoadingDetails(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await products.deleteProduct(Number(id))
      menuSync.refetch()
    }
  }

  const handleSubmit = async () => {
    try {
      if (editingId) {
        await products.updateProduct(Number(editingId), formData as any)
      } else {
        await products.addProduct(formData as any)
      }
      setShowForm(false)
      menuSync.refetch()
    } catch (e) {
      alert("Failed to save product")
    }
  }

  const addIngredientToRecipe = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { ingredient_id: 0, amount: 0 }]
    }))
  }

  const updateIngredientRow = (index: number, field: string, value: any) => {
    const updated = [...formData.ingredients]
    updated[index] = { ...updated[index], [field]: value }
    setFormData(prev => ({ ...prev, ingredients: updated }))
  }

  const removeIngredientRow = (index: number) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Products</h2>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-muted-foreground">Manage your menu items, stock, and recipes</p>
            {noRecipeCount > 0 && (
              <span className="flex items-center gap-1.5 px-2 py-0.5 bg-rose-50 text-rose-600 text-[10px] font-black rounded border border-rose-100 animate-pulse">
                <AlertCircle className="w-3 h-3" />
                {noRecipeCount} ITEMS MISSING RECIPES
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={async () => {
              if (confirm("This will regenerate all recipes based on standard patterns. Continue?")) {
                try {
                  const res = await fetch("/api/admin/fix-recipes")
                  const data = await res.json()
                  if (data.success) {
                    alert("Recipes repaired successfully!")
                    products.refetch()
                  } else {
                    alert("Failed: " + data.error)
                  }
                } catch (e) {
                  alert("Error repairing recipes")
                }
              }
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20"
          >
            <RefreshCw className="w-5 h-5" />
            Repair Recipes
          </button>
          <button
            onClick={() => {
              setEditingId(null)
              setFormData({
                name: "",
                category: "Hot Coffee",
                price: 0,
                description: "",
                stock_quantity: 0,
                min_threshold: 10,
                size: "M",
                ingredients: []
              })
              setShowForm(true)
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            <Plus className="w-5 h-5" /> Add Product
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10">
              <h3 className="text-xl font-bold flex items-center gap-2">
                {editingId ? <Edit className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-primary" />}
                {editingId ? "Edit Product" : "New Product"}
              </h3>
              <button onClick={() => setShowForm(false)} className="p-2 hover:bg-gray-100 rounded-full"><X className="w-5 h-5" /></button>
            </div>

            <div className="p-8 space-y-8">
              {loadingDetails ? (
                <div className="flex justify-center p-12"><RefreshCw className="w-8 h-8 animate-spin text-primary" /></div>
              ) : (
                <>
                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Product Name</label>
                      <input type="text" className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:bg-white transition-colors" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Category</label>
                      <select className="w-full px-4 py-3 border rounded-lg bg-gray-50" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {menuSync.getAllCategories().filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Price</label>
                      <input type="number" className="w-full px-4 py-3 border rounded-lg bg-gray-50" value={formData.price} onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Description</label>
                      <input type="text" className="w-full px-4 py-3 border rounded-lg bg-gray-50" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                  </div>

                  {/* Stock Management */}
                  <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100">
                    <h4 className="font-bold text-amber-800 mb-4 flex items-center gap-2">📦 Stock Management</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Current Stock</label>
                        <input type="number" className="w-full px-4 py-3 border rounded-lg bg-white" value={formData.stock_quantity} onChange={(e) => setFormData({ ...formData, stock_quantity: Number(e.target.value) })} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Min. Threshold (Alert Level)</label>
                        <input type="number" className="w-full px-4 py-3 border rounded-lg bg-white" value={formData.min_threshold} onChange={(e) => setFormData({ ...formData, min_threshold: Number(e.target.value) })} />
                      </div>
                    </div>
                  </div>

                  {/* Recipe Editor */}
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-blue-800 flex items-center gap-2">🥘 Recipe / Ingredients</h4>
                      <button onClick={addIngredientToRecipe} className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-blue-700">+ Add Ingredient</button>
                    </div>

                    <div className="space-y-3">
                      {formData.ingredients.length === 0 ? (
                        <p className="text-sm text-center text-blue-400 py-4 italic">No ingredients defined. Add one to create a recipe.</p>
                      ) : (
                        formData.ingredients.map((ing, idx) => (
                          <div key={idx} className="flex gap-3 items-center">
                            <select
                              className="flex-1 px-3 py-2 border rounded-lg text-sm"
                              value={ing.ingredient_id || ""}
                              onChange={(e) => updateIngredientRow(idx, "ingredient_id", Number(e.target.value))}
                            >
                              <option value="">Select Ingredient</option>
                              {ingredients.map(i => <option key={i.id} value={i.id}>{i.name} ({i.unit})</option>)}
                            </select>
                            <input
                              type="number"
                              placeholder="Amount"
                              className="w-24 px-3 py-2 border rounded-lg text-sm"
                              value={ing.amount}
                              onChange={(e) => updateIngredientRow(idx, "amount", Number(e.target.value))}
                            />
                            <button onClick={() => removeIngredientRow(idx)} className="text-rose-500 hover:bg-rose-50 p-2 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="p-6 border-t bg-gray-50 rounded-b-2xl flex justify-end gap-3 sticky bottom-0 z-10">
              <button onClick={() => setShowForm(false)} className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-200 rounded-xl transition-colors">Cancel</button>
              <button onClick={handleSubmit} className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:opacity-90 shadow-lg">{editingId ? "Update Product" : "Create Product"}</button>
            </div>
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-2 no-scrollbar">
        {["All", "Hot Coffee", "Iced Coffee", "Frappes", "Soda Series", "Yakult Series", "Matcha Series", "Combo Meals", "Snacks"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-[10px] font-black whitespace-nowrap transition-all border-2 ${activeCategory === cat
                ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
              }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Main List Table */}
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b bg-gray-50/50 flex gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left font-bold text-gray-500 uppercase">Name</th>
              <th className="px-6 py-4 text-left font-bold text-gray-500 uppercase">Information</th>
              <th className="px-6 py-4 text-left font-bold text-gray-500 uppercase">Stock</th>
              <th className="px-6 py-4 text-left font-bold text-gray-500 uppercase">Recipe</th>
              <th className="px-6 py-4 text-right font-bold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredItems.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-800">{item.name}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase">{item.category}</span>
                    <span className="font-mono text-primary font-bold">₱{(!isNaN(Number(item.price)) ? Number(item.price) : 0).toFixed(2)}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.stock < item.minThreshold ? "bg-red-500 animate-pulse" : "bg-green-500"}`}></div>
                    <span className={`font-bold ${item.stock < item.minThreshold ? "text-red-600" : "text-gray-700"}`}>{item.stock} Units</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {item.ingredients_list ? (
                    <div className="flex flex-wrap gap-1 max-w-[250px]">
                      {item.ingredients_list.split(', ').map((ing: string) => (
                        <span key={ing} className="px-1.5 py-0.5 bg-gray-100 text-[10px] font-bold text-gray-500 rounded border">
                          {ing}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-[10px] font-black text-rose-500 bg-rose-50 px-2 py-1 rounded border border-rose-100 flex items-center gap-1 w-fit">
                      <AlertCircle className="w-3 h-3" /> NO RECIPE
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button onClick={() => handleEdit(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
