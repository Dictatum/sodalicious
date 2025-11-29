-- ============================================
-- SODALICIOUS.CO - COMPLETE XAMPP MIGRATION
-- MySQL/MariaDB Database Schema & Seed Data
-- ============================================
-- This script creates all tables, indexes, and seeds initial data
-- Run this in phpMyAdmin or MySQL CLI on your XAMPP installation
-- ============================================

-- Create database
CREATE DATABASE IF NOT EXISTS sodalicious_db;
USE sodalicious_db;

-- ============================================
-- TABLE: users
-- ============================================
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role ENUM('cashier', 'manager', 'inventory_officer') NOT NULL DEFAULT 'cashier',
  password_hash VARCHAR(255),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_role (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: products
-- ============================================
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  stock_quantity INT DEFAULT 0,
  reorder_level INT DEFAULT 10,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_category (category),
  INDEX idx_name (name),
  INDEX idx_stock (stock_quantity)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: orders
-- ============================================
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE NOT NULL,
  cashier_id INT NOT NULL,
  customer_name VARCHAR(255),
  total_amount DECIMAL(12, 2) NOT NULL,
  payment_method VARCHAR(50),
  order_status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (cashier_id) REFERENCES users(id) ON DELETE RESTRICT,
  INDEX idx_order_number (order_number),
  INDEX idx_cashier_id (cashier_id),
  INDEX idx_created_at (created_at),
  INDEX idx_order_status (order_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: order_items
-- ============================================
CREATE TABLE IF NOT EXISTS order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  unit_price DECIMAL(10, 2) NOT NULL,
  subtotal DECIMAL(12, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT,
  INDEX idx_order_id (order_id),
  INDEX idx_product_id (product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: inventory_logs
-- ============================================
CREATE TABLE IF NOT EXISTS inventory_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  user_id INT,
  log_type VARCHAR(50) NOT NULL,
  quantity_changed INT NOT NULL,
  previous_quantity INT,
  new_quantity INT,
  reason TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_product_id (product_id),
  INDEX idx_user_id (user_id),
  INDEX idx_log_type (log_type),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- TABLE: activity_logs
-- ============================================
CREATE TABLE IF NOT EXISTS activity_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  action VARCHAR(255) NOT NULL,
  action_type VARCHAR(50),
  entity_type VARCHAR(50),
  entity_id INT,
  details JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_user_id (user_id),
  INDEX idx_action_type (action_type),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- SEED DATA: Users
-- ============================================
INSERT INTO users (email, name, role, password_hash, is_active) VALUES
('cashier@sodalicious.com', 'Cassandra Silva', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE),
('manager@sodalicious.com', 'Marcus Johnson', 'manager', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE),
('inventory@sodalicious.com', 'Isabella Chen', 'inventory_officer', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE),
('cashier2@sodalicious.com', 'Dante Rodriguez', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE);

-- ============================================
-- SEED DATA: Products
-- ============================================
INSERT INTO products (name, category, price, description, stock_quantity, reorder_level) VALUES
-- HOT COFFEE
('Americano', 'Hot Coffee', 55.00, 'Classic Italian espresso with hot water', 40, 10),
('Café Latte', 'Hot Coffee', 65.00, 'Smooth espresso with steamed milk', 40, 10),
('Cappuccino', 'Hot Coffee', 65.00, 'Espresso with equal parts milk and foam', 40, 10),
('Caramel Macchiato', 'Hot Coffee', 70.00, 'Rich espresso with caramel and steamed milk', 40, 8),
('Mocha', 'Hot Coffee', 70.00, 'Espresso, steamed milk, and chocolate', 40, 8),
('Espresso', 'Hot Coffee', 45.00, 'Pure concentrated espresso shots', 40, 10),
('Cortado', 'Hot Coffee', 50.00, 'Balanced espresso and steamed milk', 40, 10),
('Macchiato', 'Hot Coffee', 55.00, 'Espresso marked with a touch of milk foam', 40, 10),
('Flat White', 'Hot Coffee', 70.00, 'Silky smooth espresso with velvety microfoam', 40, 8),
('Long Black', 'Hot Coffee', 55.00, 'Double espresso with hot water', 40, 10),

-- ICED COFFEE
('Iced Americano', 'Iced Coffee', 55.00, 'Chilled espresso with ice water', 40, 10),
('Iced Latte', 'Iced Coffee', 65.00, 'Cold espresso with iced milk', 40, 10),
('Iced Cappuccino', 'Iced Coffee', 65.00, 'Chilled cappuccino with ice', 40, 10),
('Iced Caramel', 'Iced Coffee', 70.00, 'Caramel macchiato served over ice', 40, 8),
('Iced Mocha', 'Iced Coffee', 70.00, 'Cold chocolate espresso drink', 40, 8),
('Cold Brew', 'Iced Coffee', 60.00, 'Smooth slow-brewed cold coffee', 40, 10),
('Iced Cortado', 'Iced Coffee', 55.00, 'Balanced iced espresso and milk', 40, 10),
('Iced Macchiato', 'Iced Coffee', 60.00, 'Espresso marked with cold milk foam', 40, 10),
('Affogato', 'Iced Coffee', 65.00, 'Vanilla ice cream topped with hot espresso', 40, 8),
('Iced Flat White', 'Iced Coffee', 70.00, 'Silky cold espresso with ice milk', 40, 8),

-- SODAS & BEVERAGES
('Vanilla Cola', 'Sodas', 50.00, 'Classic vanilla flavored cola', 45, 15),
('Strawberry Fizz', 'Sodas', 55.00, 'Refreshing strawberry soda', 32, 15),
('Lemon Splash', 'Sodas', 50.00, 'Tangy lemon carbonated drink', 28, 15),
('Mango Paradise', 'Sodas', 60.00, 'Fresh mango flavored beverage', 25, 15),
('Berry Blast', 'Sodas', 60.00, 'Mixed berry carbonated drink', 22, 15),

-- JUICES
('Mango Juice', 'Juices', 65.00, 'Fresh mango juice blend', 18, 10),
('Berry Smoothie', 'Juices', 70.00, 'Mixed berry smoothie', 22, 10),
('Orange Juice', 'Juices', 55.00, 'Fresh squeezed orange juice', 30, 10),
('Pineapple Juice', 'Juices', 60.00, 'Tropical pineapple juice', 25, 10),
('Watermelon Punch', 'Juices', 60.00, 'Refreshing watermelon juice', 20, 10),

-- SPECIALTY DRINKS
('Matcha Latte', 'Specialty', 75.00, 'Green matcha latte', 20, 10),
('Bubble Tea Taro', 'Specialty', 85.00, 'Creamy taro bubble tea', 15, 10),
('Boba Milk Tea', 'Specialty', 80.00, 'Classic milk tea with tapioca pearls', 18, 10),
('Thai Tea', 'Specialty', 75.00, 'Sweet Thai iced tea', 25, 10),
('Pistachio Latte', 'Specialty', 80.00, 'Creamy pistachio espresso drink', 15, 8),

-- PASTRIES & FOOD
('Croissant', 'Food', 85.00, 'Buttery French croissant', 20, 5),
('Chocolate Cake', 'Food', 120.00, 'Rich chocolate layer cake', 10, 3),
('Blueberry Muffin', 'Food', 90.00, 'Fresh blueberry muffin', 15, 5),
('Cheese Danish', 'Food', 95.00, 'Sweet cheese-filled danish pastry', 12, 4),
('Almond Cookie', 'Food', 60.00, 'Crispy almond butter cookie', 25, 10);

-- ============================================
-- SAMPLE DATA: Orders (from recent sessions)
-- ============================================
INSERT INTO orders (order_number, cashier_id, customer_name, total_amount, payment_method, order_status, created_at) VALUES
('ORD-1764441862268', 2, 'aaa', 826.00, 'cash', 'completed', DATE_SUB(NOW(), INTERVAL 2 HOUR)),
('ORD-1764441900000', 1, 'Walk-in Customer', 450.00, 'cash', 'completed', DATE_SUB(NOW(), INTERVAL 1 HOUR)),
('ORD-1764441950000', 1, 'Customer B', 600.00, 'gcash', 'pending', NOW());

-- ============================================
-- SAMPLE DATA: Order Items
-- ============================================
INSERT INTO order_items (order_id, product_id, quantity, unit_price, subtotal) VALUES
-- First order
(1, 2, 8, 65.00, 520.00),    -- Café Latte x8
(1, 4, 1, 70.00, 70.00),     -- Caramel Macchiato x1
(1, 12, 1, 65.00, 65.00),    -- Iced Latte x1
(1, 14, 1, 70.00, 70.00),    -- Iced Caramel x1
-- Second order
(2, 1, 5, 55.00, 275.00),    -- Americano x5
(2, 21, 3, 50.00, 150.00),   -- Vanilla Cola x3
(2, 3, 1, 65.00, 65.00),     -- Cappuccino x1
-- Third order
(3, 5, 2, 70.00, 140.00),    -- Mocha x2
(3, 22, 4, 55.00, 220.00),   -- Strawberry Fizz x4
(3, 29, 2, 65.00, 130.00);   -- Orange Juice x2

-- ============================================
-- SAMPLE DATA: Inventory Logs
-- ============================================
INSERT INTO inventory_logs (product_id, user_id, log_type, quantity_changed, previous_quantity, new_quantity, reason, created_at) VALUES
(2, 3, 'order_deduction', -8, 48, 40, 'Sold in ORD-1764441862268', DATE_SUB(NOW(), INTERVAL 2 HOUR)),
(4, 3, 'order_deduction', -1, 41, 40, 'Sold in ORD-1764441862268', DATE_SUB(NOW(), INTERVAL 2 HOUR)),
(3, 3, 'restock', 10, 35, 45, 'Inventory officer restocked', DATE_SUB(NOW(), INTERVAL 3 HOUR)),
(1, 3, 'restock', 5, 35, 40, 'Inventory officer restocked', DATE_SUB(NOW(), INTERVAL 4 HOUR));

-- ============================================
-- SAMPLE DATA: Activity Logs
-- ============================================
INSERT INTO activity_logs (user_id, action, action_type, entity_type, entity_id, details) VALUES
(1, 'Logged in', 'login', 'user', 1, JSON_OBJECT('ip', '192.168.1.100', 'browser', 'Chrome')),
(2, 'Viewed dashboard', 'view', 'dashboard', NULL, JSON_OBJECT('section', 'sales')),
(3, 'Adjusted inventory for Café Latte', 'update', 'product', 2, JSON_OBJECT('change', 10)),
(1, 'Completed order ORD-1764441862268', 'create', 'order', 1, JSON_OBJECT('total', 826.00));

-- ============================================
-- CREATE VIEWS FOR EASY REPORTING
-- ============================================

-- View: Orders with Cashier Names
CREATE OR REPLACE VIEW v_orders_detailed AS
SELECT 
  o.id,
  o.order_number,
  o.cashier_id,
  u.name as cashier_name,
  o.customer_name,
  o.total_amount,
  o.payment_method,
  o.order_status,
  o.created_at,
  COUNT(oi.id) as item_count,
  SUM(oi.quantity) as total_qty
FROM orders o
LEFT JOIN users u ON o.cashier_id = u.id
LEFT JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.id, o.order_number, o.cashier_id, u.name, o.customer_name, o.total_amount, o.payment_method, o.order_status, o.created_at;

-- View: Product Stock Summary
CREATE OR REPLACE VIEW v_product_stock AS
SELECT 
  p.id,
  p.name,
  p.category,
  p.price,
  p.stock_quantity,
  p.reorder_level,
  CASE 
    WHEN p.stock_quantity <= p.reorder_level THEN 'LOW'
    WHEN p.stock_quantity <= (p.reorder_level * 1.5) THEN 'MEDIUM'
    ELSE 'OK'
  END as stock_status,
  (SELECT COUNT(*) FROM order_items oi JOIN orders o ON oi.order_id = o.id WHERE oi.product_id = p.id AND o.created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)) as sales_last_7_days
FROM products p
WHERE p.is_active = TRUE;

-- View: Daily Sales Summary
CREATE OR REPLACE VIEW v_daily_sales AS
SELECT 
  DATE(o.created_at) as sale_date,
  COUNT(DISTINCT o.id) as order_count,
  SUM(o.total_amount) as total_sales,
  COUNT(DISTINCT oi.product_id) as product_variety,
  SUM(oi.quantity) as total_items_sold,
  ROUND(AVG(o.total_amount), 2) as avg_order_value
FROM orders o
LEFT JOIN order_items oi ON o.id = oi.order_id
WHERE o.order_status = 'completed'
GROUP BY DATE(o.created_at);

-- ============================================
-- FINISH
-- ============================================
-- All tables, data, and views have been created!
-- Database: sodalicious_db
-- Tables: 6 (users, products, orders, order_items, inventory_logs, activity_logs)
-- Views: 3 (v_orders_detailed, v_product_stock, v_daily_sales)
-- ============================================
