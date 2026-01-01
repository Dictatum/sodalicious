-- SODALICIOUS.CO - DATABASE MIGRATION FOR XAMPP (INGREDIENT BASED)
-- Complete SQL Export - Copy all this code directly into phpMyAdmin SQL tab
-- ============================================

-- Create database
CREATE DATABASE IF NOT EXISTS sodalicious_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sodalicious_db;

-- Users table
CREATE TABLE users (
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

-- Products table (Catalogue)
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_category (category),
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Ingredients table (Inventory)
CREATE TABLE ingredients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  unit VARCHAR(50) NOT NULL DEFAULT 'units', -- g, ml, pcs
  stock_quantity DECIMAL(10,2) DEFAULT 0,
  reorder_level DECIMAL(10,2) DEFAULT 100,
  cost_per_unit DECIMAL(10,2) DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_ing_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Product Recipe (Linking Products to Ingredients)
CREATE TABLE product_ingredients (
  product_id INT,
  ingredient_id INT,
  amount DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (product_id, ingredient_id),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Orders table
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_number VARCHAR(50) UNIQUE NOT NULL,
  cashier_id INT NOT NULL,
  customer_name VARCHAR(255),
  total_amount DECIMAL(12, 2) NOT NULL,
  payment_method VARCHAR(50),
  order_status VARCHAR(50) DEFAULT 'pending', -- pending, completed, cancelled
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (cashier_id) REFERENCES users(id) ON DELETE RESTRICT,
  INDEX idx_order_number (order_number),
  INDEX idx_cashier_id (cashier_id),
  INDEX idx_created_at (created_at),
  INDEX idx_order_status (order_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Order items table
CREATE TABLE order_items (
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

-- Inventory logs table (Tracking Ingredient Changes)
CREATE TABLE inventory_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ingredient_id INT NOT NULL,
  user_id INT,
  log_type VARCHAR(50) NOT NULL, -- restock, waste, damage, sale
  quantity_changed DECIMAL(10,2) NOT NULL,
  reason TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE RESTRICT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_ingredient_id (ingredient_id),
  INDEX idx_user_id (user_id),
  INDEX idx_log_type (log_type),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Activity logs table
CREATE TABLE activity_logs (
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
-- TRIGGERS & PROCEDURES
-- ============================================

DELIMITER //

-- Trigger: Deduct Ingredients Stock After Order Item Insert
CREATE TRIGGER trg_deduct_ingredients
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    -- Update ingredients stock based on recipe
    UPDATE ingredients i
    JOIN product_ingredients pi ON i.id = pi.ingredient_id
    SET i.stock_quantity = i.stock_quantity - (pi.amount * NEW.quantity)
    WHERE pi.product_id = NEW.product_id;
END//

-- Trigger: Log Inventory Deduction (Optional, can be heavy but good for tracking)
-- Note: Logging every deduction per item might be too much, but let's keep it simple.
-- We will rely on application level logging for specific manual adjustments, 
-- but databases can implicitly track sales via orders.
-- For now, we trust the stock_quantity calculation.

DELIMITER ;

-- ============================================
-- INSERT DEMO DATA
-- ============================================

INSERT INTO users (email, name, role, password_hash, is_active) VALUES
('cashier@sodalicious.com', 'Cassandra Silva', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE),
('manager@sodalicious.com', 'Marcus Johnson', 'manager', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE),
('cashier2@sodalicious.com', 'Dante Rodriguez', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE);

-- Insert Ingredients
INSERT INTO ingredients (name, unit, stock_quantity, reorder_level) VALUES
('Espresso Beans', 'g', 5000, 1000),      -- 5kg
('Milk', 'ml', 10000, 2000),            -- 10L
('Caramel Syrup', 'ml', 2000, 500),
('Chocolate Syrup', 'ml', 2000, 500),
('Vanilla Syrup', 'ml', 2000, 500),
('Soda Water', 'ml', 24000, 5000),      -- 24L
('Cola Syrup', 'ml', 5000, 1000),
('Lemon Syrup', 'ml', 2000, 500),
('Strawberry Syrup', 'ml', 2000, 500),
('Mango Puree', 'ml', 3000, 500),
('Berry Mix', 'ml', 3000, 500),
('Matcha Powder', 'g', 1000, 200),
('Taro Powder', 'g', 1000, 200),
('Tapioca Pearls', 'g', 2000, 500),
('Tea Leaves', 'g', 1000, 200),
('Pistachio Paste', 'g', 1000, 200),
('Croissant', 'pcs', 20, 5),
('Chocolate Cake', 'pcs', 10, 3),
('Blueberry Muffin', 'pcs', 15, 5),
('Cheese Danish', 'pcs', 12, 4),
('Almond Cookie', 'pcs', 25, 10);

-- Insert Products
INSERT INTO products (name, category, price, description) VALUES
('Americano', 'Hot Coffee', 55.00, 'Classic Italian espresso with hot water'),
('Café Latte', 'Hot Coffee', 65.00, 'Smooth espresso with steamed milk'),
('Cappuccino', 'Hot Coffee', 65.00, 'Espresso with equal parts milk and foam'),
('Caramel Macchiato', 'Hot Coffee', 70.00, 'Rich espresso with caramel and steamed milk'),
('Mocha', 'Hot Coffee', 70.00, 'Espresso, steamed milk, and chocolate'),
('Espresso', 'Hot Coffee', 45.00, 'Pure concentrated espresso shots'),
('Cortado', 'Hot Coffee', 50.00, 'Balanced espresso and steamed milk'),
('Macchiato', 'Hot Coffee', 55.00, 'Espresso marked with a touch of milk foam'),
('Flat White', 'Hot Coffee', 70.00, 'Silky smooth espresso with velvety microfoam'),
('Long Black', 'Hot Coffee', 55.00, 'Double espresso with hot water'),
('Iced Americano', 'Iced Coffee', 55.00, 'Chilled espresso with ice water'),
('Iced Latte', 'Iced Coffee', 65.00, 'Cold espresso with iced milk'),
('Iced Cappuccino', 'Iced Coffee', 65.00, 'Chilled cappuccino with ice'),
('Iced Caramel', 'Iced Coffee', 70.00, 'Caramel macchiato served over ice'),
('Iced Mocha', 'Iced Coffee', 70.00, 'Cold chocolate espresso drink'),
('Cold Brew', 'Iced Coffee', 60.00, 'Smooth slow-brewed cold coffee'),
('Iced Cortado', 'Iced Coffee', 55.00, 'Balanced iced espresso and milk'),
('Iced Macchiato', 'Iced Coffee', 60.00, 'Espresso marked with cold milk foam'),
('Affogato', 'Iced Coffee', 65.00, 'Vanilla ice cream topped with hot espresso'),
('Iced Flat White', 'Iced Coffee', 70.00, 'Silky cold espresso with ice milk'),
('Vanilla Cola', 'Sodas', 50.00, 'Classic vanilla flavored cola'),
('Strawberry Fizz', 'Sodas', 55.00, 'Refreshing strawberry soda'),
('Lemon Splash', 'Sodas', 50.00, 'Tangy lemon carbonated drink'),
('Mango Paradise', 'Sodas', 60.00, 'Fresh mango flavored beverage'),
('Berry Blast', 'Sodas', 60.00, 'Mixed berry carbonated drink'),
('Mango Juice', 'Juices', 65.00, 'Fresh mango juice blend'),
('Berry Smoothie', 'Juices', 70.00, 'Mixed berry smoothie'),
('Orange Juice', 'Juices', 55.00, 'Fresh squeezed orange juice'),
('Pineapple Juice', 'Juices', 60.00, 'Tropical pineapple juice'),
('Watermelon Punch', 'Juices', 60.00, 'Refreshing watermelon juice'),
('Matcha Latte', 'Specialty', 75.00, 'Green matcha latte'),
('Bubble Tea Taro', 'Specialty', 85.00, 'Creamy taro bubble tea'),
('Boba Milk Tea', 'Specialty', 80.00, 'Classic milk tea with tapioca pearls'),
('Thai Tea', 'Specialty', 75.00, 'Sweet Thai iced tea'),
('Pistachio Latte', 'Specialty', 80.00, 'Creamy pistachio espresso drink'),
('Croissant', 'Food', 85.00, 'Buttery French croissant'),
('Chocolate Cake', 'Food', 120.00, 'Rich chocolate layer cake'),
('Blueberry Muffin', 'Food', 90.00, 'Fresh blueberry muffin'),
('Cheese Danish', 'Food', 95.00, 'Sweet cheese-filled danish pastry'),
('Almond Cookie', 'Food', 60.00, 'Crispy almond butter cookie');

-- Link Recipes (Product Ingredients)
-- IDs: Americano=1, Latte=2, etc. Ing: Beans=1, Milk=2...

-- Coffee Default: 18g beans
INSERT INTO product_ingredients (product_id, ingredient_id, amount) VALUES 
(1, 1, 18.00), -- Americano
(2, 1, 18.00), (2, 2, 200.00), -- Latte
(3, 1, 18.00), (3, 2, 150.00), -- Cappuccino
(4, 1, 18.00), (4, 2, 180.00), (4, 3, 20.00), -- Caramel Macch (Beans, Milk, Syrup)
(5, 1, 18.00), (5, 2, 180.00), (5, 4, 20.00), -- Mocha (Beans, Milk, Choc)
(6, 1, 18.00), -- Espresso
(36, 17, 1.00); -- Croissant

-- Map all basic items (simplified for demo)
INSERT INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT id, 1, 18.00 FROM products WHERE category = 'Hot Coffee' AND id > 6;
INSERT INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT id, 1, 18.00 FROM products WHERE category = 'Iced Coffee';

-- Sodas: Soda Water (6) + Syrup
INSERT INTO product_ingredients (product_id, ingredient_id, amount) VALUES
(21, 6, 250.00), (21, 5, 30.00), -- Vanilla Cola
(22, 6, 250.00), (22, 9, 30.00), -- Strawberry Fizz
(23, 6, 250.00), (23, 8, 30.00); -- Lemon Splash

-- Food direct mapping
INSERT INTO product_ingredients (product_id, ingredient_id, amount) VALUES
(37, 18, 1), (38, 19, 1), (39, 20, 1), (40, 21, 1);

-- ============================================
-- CREATE VIEWS
-- ============================================

CREATE VIEW v_orders_detailed AS
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

-- LOW STOCK VIEW based on INGREDIENTS now
CREATE VIEW v_low_stock_ingredients AS
SELECT 
  id, name, unit, stock_quantity, reorder_level,
  CASE 
    WHEN stock_quantity <= reorder_level THEN 'LOW'
    WHEN stock_quantity <= (reorder_level * 1.5) THEN 'MEDIUM'
    ELSE 'OK'
  END as stock_status
FROM ingredients
WHERE stock_quantity <= (reorder_level * 1.2);

CREATE VIEW v_daily_sales AS
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
-- DATABASE READY!
-- ============================================
