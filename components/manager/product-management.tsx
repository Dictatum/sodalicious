"use client"

import { useState } from "react"
import type { useProducts } from "@/lib/hooks"
import { useMenuSync as useMenuSyncHook } from "@/lib/hooks"
import type { Product } from "@/lib/store"

interface ProductManagementProps {
  products: ReturnType<typeof useProducts>
}

export default function ProductManagement({ products }: ProductManagementProps) {
  const menuSync = useMenuSyncHook()
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<any>({
    name: "",
    price: 0,
    category: "Hot Coffee",
    stock: 0,
    minThreshold: 5,
    description: "",
    size: "M",
  })

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
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Products</h2>
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
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          {showForm ? "Cancel" : "Add Product"}
        </button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">{editingId ? "Edit Product" : "Add New Product"}</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: Number.parseFloat(e.target.value) })}
              className="px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {menuSync.getAllCategories().map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Size (S/M/L/R)"
              value={formData.size}
              onChange={(e) => setFormData({ ...formData, size: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="number"
              placeholder="Stock"
              value={formData.stock}
              onChange={(e) => setFormData({ ...formData, stock: Number.parseInt(e.target.value) })}
              className="px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="number"
              placeholder="Min Threshold"
              value={formData.minThreshold}
              onChange={(e) => setFormData({ ...formData, minThreshold: Number.parseInt(e.target.value) })}
              className="px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Description"
              value={formData.description || ""}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary col-span-2"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            {editingId ? "Update Product" : "Add Product"}
          </button>
        </div>
      )}

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-accent">
            <tr>
              <th className="px-6 py-4 text-left font-bold">Name</th>
              <th className="px-6 py-4 text-left font-bold">Category</th>
              <th className="px-6 py-4 text-left font-bold">Size</th>
              <th className="px-6 py-4 text-left font-bold">Price</th>
              <th className="px-6 py-4 text-left font-bold">Stock</th>
              <th className="px-6 py-4 text-left font-bold">Min Threshold</th>
              <th className="px-6 py-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {menuSync.menuItems.map((item) => (
              <tr key={item.id} className="hover:bg-accent/50">
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.size || "—"}</td>
                <td className="px-6 py-4">₱{item.price}</td>
                <td className="px-6 py-4">
                  <span className={item.stock <= item.minThreshold ? "text-yellow-600 font-bold" : ""}>
                    {item.stock}
                  </span>
                </td>
                <td className="px-6 py-4">{item.minThreshold}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => products.deleteProduct(parseInt(item.id))}
                    className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
