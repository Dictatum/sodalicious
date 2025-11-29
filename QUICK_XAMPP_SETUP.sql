-- ========================================
-- SODALICIOUS.CO - XAMPP MYSQL SETUP
-- ========================================
-- Copy ALL of this code into phpMyAdmin SQL tab
-- and click "Go" to create your local database
-- ========================================

CREATE DATABASE IF NOT EXISTS sodalicious_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE sodalicious_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  role ENUM('cashier', 'manager', 'inventory_officer') DEFAULT 'cashier',
  password_hash VARCHAR(255),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE products (
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
  INDEX idx_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  INDEX idx_order_id (order_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE inventory_logs (
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
  INDEX idx_product_id (product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE activity_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  action VARCHAR(255) NOT NULL,
  action_type VARCHAR(50),
  entity_type VARCHAR(50),
  entity_id INT,
  details JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- INSERT USERS
INSERT INTO users (email, name, role, password_hash, is_active) VALUES
('cashier@sodalicious.com', 'Cassandra Silva', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE),
('manager@sodalicious.com', 'Marcus Johnson', 'manager', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE),
('inventory@sodalicious.com', 'Isabella Chen', 'inventory_officer', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE),
('cashier2@sodalicious.com', 'Dante Rodriguez', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', TRUE);

-- INSERT PRODUCTS (43 items)
INSERT INTO products (name, category, price, description, stock_quantity, reorder_level) VALUES
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
('Vanilla Cola', 'Sodas', 50.00, 'Classic vanilla flavored cola', 45, 15),
('Strawberry Fizz', 'Sodas', 55.00, 'Refreshing strawberry soda', 32, 15),
('Lemon Splash', 'Sodas', 50.00, 'Tangy lemon carbonated drink', 28, 15),
('Mango Paradise', 'Sodas', 60.00, 'Fresh mango flavored beverage', 25, 15),
('Berry Blast', 'Sodas', 60.00, 'Mixed berry carbonated drink', 22, 15),
('Mango Juice', 'Juices', 65.00, 'Fresh mango juice blend', 18, 10),
('Berry Smoothie', 'Juices', 70.00, 'Mixed berry smoothie', 22, 10),
('Orange Juice', 'Juices', 55.00, 'Fresh squeezed orange juice', 30, 10),
('Pineapple Juice', 'Juices', 60.00, 'Tropical pineapple juice', 25, 10),
('Watermelon Punch', 'Juices', 60.00, 'Refreshing watermelon juice', 20, 10),
('Matcha Latte', 'Specialty', 75.00, 'Green matcha latte', 20, 10),
('Bubble Tea Taro', 'Specialty', 85.00, 'Creamy taro bubble tea', 15, 10),
('Boba Milk Tea', 'Specialty', 80.00, 'Classic milk tea with tapioca pearls', 18, 10),
('Thai Tea', 'Specialty', 75.00, 'Sweet Thai iced tea', 25, 10),
('Pistachio Latte', 'Specialty', 80.00, 'Creamy pistachio espresso drink', 15, 8),
('Croissant', 'Food', 85.00, 'Buttery French croissant', 20, 5),
('Chocolate Cake', 'Food', 120.00, 'Rich chocolate layer cake', 10, 3),
('Blueberry Muffin', 'Food', 90.00, 'Fresh blueberry muffin', 15, 5),
('Cheese Danish', 'Food', 95.00, 'Sweet cheese-filled danish pastry', 12, 4),
('Almond Cookie', 'Food', 60.00, 'Crispy almond butter cookie', 25, 10);

-- Done! Database is ready to use
