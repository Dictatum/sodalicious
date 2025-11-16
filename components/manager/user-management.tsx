"use client"

import { useState } from "react"
import type { useUsers } from "@/lib/hooks"

interface UserManagementProps {
  users: ReturnType<typeof useUsers>
}

export default function UserManagement({ users }: UserManagementProps) {
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", username: "", password: "", role: "cashier", status: "Active" })

  const handleSubmit = () => {
    if (editingId) {
      users.updateUser(editingId, formData as any)
      setEditingId(null)
    } else {
      users.addUser(formData as any)
    }
    setShowForm(false)
    setFormData({ name: "", username: "", password: "", role: "cashier", status: "Active" })
  }

  const handleEdit = (user: any) => {
    setFormData({ name: user.name, username: user.username, password: "", role: user.role, status: user.status })
    setEditingId(user.id)
    setShowForm(true)
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">User Management</h2>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({ name: "", username: "", password: "", role: "cashier", status: "Active" })
          }}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          {showForm ? "Cancel" : "Add User"}
        </button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">{editingId ? "Edit User" : "Add New User"}</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background"
            />
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background"
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background"
            />
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background"
            >
              <option value="cashier">Cashier</option>
              <option value="manager">Manager</option>
              <option value="inventory">Inventory Officer</option>
            </select>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="px-4 py-2 border border-border rounded bg-background col-span-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            {editingId ? "Update User" : "Add User"}
          </button>
        </div>
      )}

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-accent">
            <tr>
              <th className="px-6 py-4 text-left font-bold">Name</th>
              <th className="px-6 py-4 text-left font-bold">Username</th>
              <th className="px-6 py-4 text-left font-bold">Role</th>
              <th className="px-6 py-4 text-left font-bold">Status</th>
              <th className="px-6 py-4 text-left font-bold">Last Login</th>
              <th className="px-6 py-4 text-left font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {users.users.map((user) => (
              <tr key={user.id} className="hover:bg-accent/50">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4 capitalize">{user.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded text-sm font-bold ${user.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">{user.lastLogin || "N/A"}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => users.deleteUser(user.id)}
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
