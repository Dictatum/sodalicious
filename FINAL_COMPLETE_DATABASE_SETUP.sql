-- ==========================================================
-- FINAL COMPLETE DATABASE SETUP (Integrated Fix)
-- ==========================================================
-- This script replaces ALL previous scripts.
-- 1. Drops and Recreates Database
-- 2. Sets up CORRECT Schema (Products with Stock columns)
-- 3. Populates All Data (Users, Ingredients, Products)
-- 4. Generates All Recipes (Comprehensive)
-- 5. REMOVES conflicting Triggers (No more 'Database Sync Failed')
-- ==========================================================

DROP DATABASE IF EXISTS sodalicious_db;
CREATE DATABASE sodalicious_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sodalicious_db;

-- ==========================================================
-- 1. TABLE DEFINITIONS
-- ==========================================================

-- Users
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

-- Products (Updated with Stock Columns)
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  stock_quantity INT DEFAULT 40,  -- Added Column
  min_threshold INT DEFAULT 10,  -- Added Column
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_category (category),
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Ingredients
CREATE TABLE ingredients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  unit VARCHAR(50) NOT NULL DEFAULT 'units',
  stock_quantity DECIMAL(10,2) DEFAULT 0,
  reorder_level DECIMAL(10,2) DEFAULT 100,
  cost_per_unit DECIMAL(10,2) DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_ing_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Product Ingredients (Recipes)
CREATE TABLE product_ingredients (
  product_id INT,
  ingredient_id INT,
  amount DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (product_id, ingredient_id),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Orders
CREATE TABLE orders (
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

-- Order Items
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

-- Inventory Logs
CREATE TABLE inventory_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ingredient_id INT NOT NULL,
  user_id INT,
  log_type VARCHAR(50) NOT NULL,
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

-- Activity Logs
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


-- ==========================================================
-- 2. INSERT DATA
-- ==========================================================

-- Users
INSERT INTO users (email, name, role, password_hash, is_active) VALUES
('cashier@sodalicious.com', 'Cassandra Silva', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE),
('manager@sodalicious.com', 'Marcus Johnson', 'manager', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE),
('cashier2@sodalicious.com', 'Dante Rodriguez', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE);

-- Ingredients (Consolidated List)
INSERT IGNORE INTO ingredients (name, unit, stock_quantity, reorder_level) VALUES
('Espresso Beans', 'g', 5000, 1000),      
('Milk', 'ml', 10000, 2000),            
('Caramel Syrup', 'ml', 2000, 500),
('Chocolate Syrup', 'ml', 2000, 500),
('Vanilla Syrup', 'ml', 2000, 500),
('Soda Water', 'ml', 24000, 5000),      
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
('Almond Cookie', 'pcs', 25, 10),
('Whipped Cream', 'ml', 2000, 500),
('Cookie Crumbs', 'g', 1000, 200),
('Ice', 'g', 10000, 2000),
('Water', 'ml', 50000, 10000),
('Green Apple Syrup', 'ml', 2000, 500),
('Lychee Syrup', 'ml', 2000, 500),
('Yakult', 'ml', 5000, 1000),
('Orange Juice', 'ml', 3000, 500),
('Pineapple Juice', 'ml', 3000, 500),
('Watermelon Juice', 'ml', 3000, 500),
('Fries (Frozen)', 'g', 5000, 1000),
('Kropek', 'pcs', 50, 10),
('Nachos', 'pcs', 40, 10),
('Cheese', 'g', 2000, 400),
('Siomai', 'pcs', 100, 20),
('Rice', 'g', 5000, 1000),
('Waffle Batter', 'ml', 5000, 1000),
('Ice Cream', 'scoop', 100, 20),
('Coffee Jelly', 'g', 1000, 200);

-- Products (With default stock 40)
INSERT INTO products (name, category, price, description, stock_quantity, min_threshold) VALUES
('Americano', 'Hot Coffee', 55.00, 'Classic Italian espresso with hot water', 40, 10),
('Café Latte', 'Hot Coffee', 65.00, 'Smooth espresso with steamed milk', 40, 10),
('Cappuccino', 'Hot Coffee', 65.00, 'Espresso with equal parts milk and foam', 40, 10),
('Caramel Macchiato', 'Hot Coffee', 70.00, 'Rich espresso with caramel and steamed milk', 40, 10),
('Mocha', 'Hot Coffee', 70.00, 'Espresso, steamed milk, and chocolate', 40, 10),
('Espresso', 'Hot Coffee', 45.00, 'Pure concentrated espresso shots', 40, 10),
('Cortado', 'Hot Coffee', 50.00, 'Balanced espresso and steamed milk', 40, 10),
('Macchiato', 'Hot Coffee', 55.00, 'Espresso marked with a touch of milk foam', 40, 10),
('Flat White', 'Hot Coffee', 70.00, 'Silky smooth espresso with velvety microfoam', 40, 10),
('Long Black', 'Hot Coffee', 55.00, 'Double espresso with hot water', 40, 10),
('Iced Americano', 'Iced Coffee', 55.00, 'Chilled espresso with ice water', 40, 10),
('Iced Latte', 'Iced Coffee', 65.00, 'Cold espresso with iced milk', 40, 10),
('Iced Cappuccino', 'Iced Coffee', 65.00, 'Chilled cappuccino with ice', 40, 10),
('Iced Caramel', 'Iced Coffee', 70.00, 'Caramel macchiato served over ice', 40, 10),
('Iced Mocha', 'Iced Coffee', 70.00, 'Cold chocolate espresso drink', 40, 10),
('Cold Brew', 'Iced Coffee', 60.00, 'Smooth slow-brewed cold coffee', 40, 10),
('Iced Cortado', 'Iced Coffee', 55.00, 'Balanced iced espresso and milk', 40, 10),
('Iced Macchiato', 'Iced Coffee', 60.00, 'Espresso marked with cold milk foam', 40, 10),
('Affogato', 'Iced Coffee', 65.00, 'Vanilla ice cream topped with hot espresso', 40, 10),
('Iced Flat White', 'Iced Coffee', 70.00, 'Silky cold espresso with ice milk', 40, 10),
('Vanilla Cola', 'Sodas', 50.00, 'Classic vanilla flavored cola', 40, 15),
('Strawberry Fizz', 'Sodas', 55.00, 'Refreshing strawberry soda', 40, 15),
('Lemon Splash', 'Sodas', 50.00, 'Tangy lemon carbonated drink', 40, 15),
('Mango Paradise', 'Sodas', 60.00, 'Fresh mango flavored beverage', 40, 15),
('Berry Blast', 'Sodas', 60.00, 'Mixed berry carbonated drink', 40, 15),
('Mango Juice', 'Juices', 65.00, 'Fresh mango juice blend', 40, 15),
('Berry Smoothie', 'Juices', 70.00, 'Mixed berry smoothie', 40, 15),
('Orange Juice', 'Juices', 55.00, 'Fresh squeezed orange juice', 40, 15),
('Pineapple Juice', 'Juices', 60.00, 'Tropical pineapple juice', 40, 15),
('Watermelon Punch', 'Juices', 60.00, 'Refreshing watermelon juice', 40, 15),
('Matcha Latte', 'Specialty', 75.00, 'Green matcha latte', 40, 8),
('Bubble Tea Taro', 'Specialty', 85.00, 'Creamy taro bubble tea', 40, 8),
('Boba Milk Tea', 'Specialty', 80.00, 'Classic milk tea with tapioca pearls', 40, 8),
('Thai Tea', 'Specialty', 75.00, 'Sweet Thai iced tea', 40, 8),
('Pistachio Latte', 'Specialty', 80.00, 'Creamy pistachio espresso drink', 40, 8),
('Croissant', 'Food', 85.00, 'Buttery French croissant', 40, 5),
('Chocolate Cake', 'Food', 120.00, 'Rich chocolate layer cake', 40, 5),
('Blueberry Muffin', 'Food', 90.00, 'Fresh blueberry muffin', 40, 5),
('Cheese Danish', 'Food', 95.00, 'Sweet cheese-filled danish pastry', 40, 5),
('Almond Cookie', 'Food', 60.00, 'Crispy almond butter cookie', 40, 5);


-- ==========================================================
-- 3. GENERATE RECIPES (Comprehensive Logic)
-- ==========================================================

-- >>> HOT COFFEE <<<
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Espresso Beans'), 18
FROM products WHERE category = 'Hot Coffee';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
FROM products WHERE category = 'Hot Coffee' AND name NOT LIKE '%Americano%' AND name NOT LIKE '%Espresso%' AND name NOT LIKE '%Long Black%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Caramel Syrup'), 20
FROM products WHERE category = 'Hot Coffee' AND name LIKE '%Caramel%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Chocolate Syrup'), 20
FROM products WHERE category = 'Hot Coffee' AND name LIKE '%Mocha%';


-- >>> ICED COFFEE <<<
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Espresso Beans'), 18
FROM products WHERE category = 'Iced Coffee';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
FROM products WHERE category = 'Iced Coffee' AND name NOT LIKE '%Americano%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Caramel Syrup'), 30
FROM products WHERE category = 'Iced Coffee' AND name LIKE '%Caramel%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Chocolate Syrup'), 30
FROM products WHERE category = 'Iced Coffee' AND name LIKE '%Mocha%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Vanilla Syrup'), 30
FROM products WHERE category = 'Iced Coffee' AND name LIKE '%Vanilla%';


-- >>> SODA SERIES <<<
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Soda Water'), 250
FROM products WHERE category LIKE '%Soda%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Cola Syrup'), 50
FROM products WHERE category LIKE '%Soda%' AND name LIKE '%Cola%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Strawberry Syrup'), 40
FROM products WHERE category LIKE '%Soda%' AND name LIKE '%Strawberry%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Lemon Syrup'), 40
FROM products WHERE category LIKE '%Soda%' AND name LIKE '%Lemon%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Mango Puree'), 40
FROM products WHERE category LIKE '%Soda%' AND name LIKE '%Mango%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Berry Mix'), 40
FROM products WHERE category LIKE '%Soda%' AND name LIKE '%Berry%';


-- >>> JUICES <<<
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Mango Puree'), 300
FROM products WHERE category = 'Juices' AND name LIKE '%Mango%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Berry Mix'), 300
FROM products WHERE category = 'Juices' AND name LIKE '%Berry%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Orange Juice'), 300
FROM products WHERE category = 'Juices' AND name LIKE '%Orange%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Pineapple Juice'), 300
FROM products WHERE category = 'Juices' AND name LIKE '%Pineapple%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Watermelon Juice'), 300
FROM products WHERE category = 'Juices' AND name LIKE '%Watermelon%';


-- >>> SPECIALTY <<<
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Matcha Powder'), 15
FROM products WHERE category = 'Specialty' AND name LIKE '%Matcha%';
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
FROM products WHERE category = 'Specialty' AND name LIKE '%Matcha%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Taro Powder'), 20
FROM products WHERE name LIKE '%Taro%';
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
FROM products WHERE name LIKE '%Taro%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Tea Leaves'), 10
FROM products WHERE name LIKE '%Thai Tea%';
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 150
FROM products WHERE name LIKE '%Thai Tea%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Tea Leaves'), 5
FROM products WHERE name LIKE '%Boba%';
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
FROM products WHERE name LIKE '%Boba%';
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Tapioca Pearls'), 50
FROM products WHERE name LIKE '%Boba%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Espresso Beans'), 18
FROM products WHERE name LIKE '%Pistachio%';
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
FROM products WHERE name LIKE '%Pistachio%';
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Pistachio Paste'), 30
FROM products WHERE name LIKE '%Pistachio%';


-- >>> FOOD <<<
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT p.id, i.id, 1
FROM products p
JOIN ingredients i ON p.name = i.name
WHERE p.category = 'Food';


-- ==========================================================
-- 4. CREATE VIEWS
-- ==========================================================

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

CREATE VIEW v_low_stock_ingredients AS
SELECT 
  id, name, unit, stock_quantity, reorder_level,
  CASE 
    WHEN stock_quantity < 18 THEN 'LOW' -- Force Global Rule
    WHEN stock_quantity <= reorder_level THEN 'LOW'
    ELSE 'OK'
  END as stock_status
FROM ingredients
WHERE stock_quantity <= reorder_level OR stock_quantity < 18;

CREATE VIEW v_low_stock_products AS
SELECT 
  id, 
  name, 
  category,
  stock_quantity, 
  min_threshold,
  CASE 
    WHEN stock_quantity < 18 THEN 'LOW'
    WHEN stock_quantity <= min_threshold THEN 'LOW'
    ELSE 'OK'
  END as stock_status
FROM products
WHERE stock_quantity <= min_threshold OR stock_quantity < 18;

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

-- ==========================================================
-- SETUP COMPLETE. NO TRIGGERS. NO BUGS.
-- ==========================================================
