# Sodalicious.Co — POS & Inventory Management System

A modern, full‑stack Point of Sale (POS) and inventory management system built for **Sodalicious.Co Café**, designed for real-time operations, fast checkout, and complete business insights.

---

## 📌 Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Database Schema](#database-schema)
* [API Endpoints](#api-endpoints)
* [Setup & Installation](#setup--installation)
* [Default Login Credentials](#default-login-credentials)
* [Design System](#design-system)
* [Usage Guide](#usage-guide)
* [Development](#development)
* [Contributing](#contributing)
* [License](#license)
* [Version History](#version-history)

---

## 🚀 Overview

A production-ready POS and inventory management system with dedicated panels for:

* **Cashiers** – Fast order entry & checkout
* **Managers** – Reporting, analytics, administration
* **Inventory Officers** – Stock tracking & adjustments

---

## ⭐ Features

### Cashier Panel

* Fast item selection
* Real-time stock tracking
* Category filtering & search
* Digital receipts
* Multiple payment options

### Manager Dashboard

* Real-time sales metrics
* Top-selling products
* Robust order history
* User & role management
* Sales and inventory reporting

### Inventory Management

* Live stock updates
* Low-stock alerts
* Adjustment logs
* Restock & delivery logs
* Full audit trail

### Product & User Management

* CRUD operations
* Category organization
* Role-based access control
* User activity logging

---

## 🛠 Tech Stack

### Frontend

* React 19.2
* Next.js 16
* TypeScript
* Tailwind CSS 4
* Shadcn/UI
* Recharts

### Backend

* Next.js API Routes
* Neon PostgreSQL
* @neondatabase/serverless

### Development Tools

* ESLint
* TypeScript
* PostCSS

---

## 📁 Project Structure

```bash
# Simplified structure
sodalicious-pos/
├── app/
│   ├── api/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
├── scripts/
├── public/
├── package.json
└── tsconfig.json
```

---

## 🗄 Database Schema

Includes tables for:

* **users**
* **products**
* **orders**
* **order_items**
* **inventory_logs**
* **activity_logs**

See full schema in `scripts/01-init-schema.sql`.

---

## 🔌 API Endpoints

### Authentication

* `POST /api/auth/login`

### Products

* CRUD endpoints: `/api/products`

### Orders

* CRUD endpoints: `/api/orders`

### Inventory

* Logs & adjustments: `/api/inventory`

### Activity Logs

* `/api/activity-logs`

---

## 🧰 Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd sodalicious-pos
npm install
```

### 2️⃣ Environment Setup

Copy and update DB credentials:

```bash
cp .env.example .env.local
```

### 3️⃣ Initialize Database

Run SQL files in Neon:

1. `01-init-schema.sql`
2. `02-seed-data.sql`

### 4️⃣ Start Dev Server

```bash
npm run dev
```

---

## 🔐 Default Login Credentials

| Role              | Email                                                         | Password |
| ----------------- | ------------------------------------------------------------- | -------- |
| Cashier           | [cashier@sodalicious.com](mailto:cashier@sodalicious.com)     | 123456   |
| Manager           | [manager@sodalicious.com](mailto:manager@sodalicious.com)     | 123456   |
| Inventory Officer | [inventory@sodalicious.com](mailto:inventory@sodalicious.com) | 123456   |

---

## 🎨 Design System

### Colors

* Primary: `#D97706`
* Secondary: `#FEF3C7`
* Dark: `#1F2937`
* Neutral: Gray scale

### Typography

* Geist for headings
* Clean sans-serif for body

---

## 🧭 Usage Guide

### Cashiers

* Select items → Edit quantities → Choose payment → Complete sale

### Managers

* View analytics → Manage products/users → Generate reports

### Inventory Officers

* Update stock → Track deliveries → Review logs

---

## 🛠 Development

```bash
npm run dev
npm run build
npm start
npm run lint
```

---

## 🤝 Contributing

1. Create a new branch
2. Commit changes
3. Open a Pull Request

---

## 🔒 License

Private project for **Sodalicious.Co**

---

## 📌 Version History

* **v1.0.0** – Initial release
