-- ============================================
-- MIGRATION: Add Product Stock Tracking
-- ============================================
-- Run this in phpMyAdmin SQL tab for sodalicious_db

USE sodalicious_db;

-- Add stock_quantity and min_threshold columns to products table
ALTER TABLE products 
ADD COLUMN stock_quantity INT DEFAULT 40 AFTER description,
ADD COLUMN min_threshold INT DEFAULT 10 AFTER stock_quantity;

-- Update existing products with initial stock values
UPDATE products SET stock_quantity = 40, min_threshold = 10;

-- Set specific thresholds for different categories
UPDATE products SET min_threshold = 15 WHERE category IN ('Sodas', 'Juices');
UPDATE products SET min_threshold = 8 WHERE category IN ('Specialty', 'Food');
UPDATE products SET min_threshold = 5 WHERE category = 'Food' AND name LIKE '%Cake%';

-- Create view for low stock products
CREATE OR REPLACE VIEW v_low_stock_products AS
SELECT 
  id, 
  name, 
  category,
  stock_quantity, 
  min_threshold,
  CASE 
    WHEN stock_quantity <= min_threshold THEN 'LOW'
    WHEN stock_quantity <= (min_threshold * 1.5) THEN 'MEDIUM'
    ELSE 'OK'
  END as stock_status
FROM products
WHERE stock_quantity <= (min_threshold * 1.2);

-- ============================================
-- ADD MISSING PRODUCT RECIPES
-- ============================================

-- First, let's add missing ingredients that might be needed
INSERT IGNORE INTO ingredients (name, unit, stock_quantity, reorder_level) VALUES
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
('Rice', 'g', 5000, 1000);

-- Now add recipes for products that are missing them
-- Get ingredient IDs for reference (adjust based on actual IDs in your database)

-- Hot Coffee (IDs 7-10 in products table - Espresso, Cortado, Macchiato, Flat White, Long Black)
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 7, id, 18.00 FROM ingredients WHERE name = 'Espresso Beans' LIMIT 1; -- Cortado

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 7, id, 100.00 FROM ingredients WHERE name = 'Milk' LIMIT 1; -- Cortado milk

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 8, id, 18.00 FROM ingredients WHERE name = 'Espresso Beans' LIMIT 1; -- Macchiato

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 8, id, 30.00 FROM ingredients WHERE name = 'Milk' LIMIT 1; -- Macchiato milk

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 9, id, 18.00 FROM ingredients WHERE name = 'Espresso Beans' LIMIT 1; -- Flat White

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 9, id, 150.00 FROM ingredients WHERE name = 'Milk' LIMIT 1; -- Flat White milk

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 10, id, 36.00 FROM ingredients WHERE name = 'Espresso Beans' LIMIT 1; -- Long Black (double shot)

-- Iced Coffee - add milk where needed
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 12, id, 200.00 FROM ingredients WHERE name = 'Milk' LIMIT 1; -- Iced Latte

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 13, id, 150.00 FROM ingredients WHERE name = 'Milk' LIMIT 1; -- Iced Cappuccino

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 14, id, 180.00 FROM ingredients WHERE name = 'Milk' LIMIT 1; -- Iced Caramel
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 14, id, 20.00 FROM ingredients WHERE name = 'Caramel Syrup' LIMIT 1;

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 15, id, 180.00 FROM ingredients WHERE name = 'Milk' LIMIT 1; -- Iced Mocha
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 15, id, 20.00 FROM ingredients WHERE name = 'Chocolate Syrup' LIMIT 1;

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 16, id, 18.00 FROM ingredients WHERE name = 'Espresso Beans' LIMIT 1; -- Cold Brew

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 17, id, 18.00 FROM ingredients WHERE name = 'Espresso Beans' LIMIT 1; -- Iced Cortado
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 17, id, 100.00 FROM ingredients WHERE name = 'Milk' LIMIT 1;

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 18, id, 18.00 FROM ingredients WHERE name = 'Espresso Beans' LIMIT 1; -- Iced Macchiato
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 18, id, 50.00 FROM ingredients WHERE name = 'Milk' LIMIT 1;

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 19, id, 18.00 FROM ingredients WHERE name = 'Espresso Beans' LIMIT 1; -- Affogato

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 20, id, 18.00 FROM ingredients WHERE name = 'Espresso Beans' LIMIT 1; -- Iced Flat White
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 20, id, 150.00 FROM ingredients WHERE name = 'Milk' LIMIT 1;

-- Sodas (24-25 missing)
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 24, id, 250.00 FROM ingredients WHERE name = 'Soda Water' LIMIT 1; -- Mango Paradise
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 24, id, 50.00 FROM ingredients WHERE name = 'Mango Puree' LIMIT 1;

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 25, id, 250.00 FROM ingredients WHERE name = 'Soda Water' LIMIT 1; -- Berry Blast
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 25, id, 50.00 FROM ingredients WHERE name = 'Berry Mix' LIMIT 1;

-- Juices (26-30)
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 26, id, 300.00 FROM ingredients WHERE name = 'Mango Puree' LIMIT 1; -- Mango Juice

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 27, id, 300.00 FROM ingredients WHERE name = 'Berry Mix' LIMIT 1; -- Berry Smoothie
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 27, id, 100.00 FROM ingredients WHERE name = 'Milk' LIMIT 1;

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 28, id, 300.00 FROM ingredients WHERE name = 'Orange Juice' LIMIT 1; -- Orange Juice

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 29, id, 300.00 FROM ingredients WHERE name = 'Pineapple Juice' LIMIT 1; -- Pineapple Juice

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 30, id, 300.00 FROM ingredients WHERE name = 'Watermelon Juice' LIMIT 1; -- Watermelon Punch

-- Specialty (31-35)
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 31, id, 10.00 FROM ingredients WHERE name = 'Matcha Powder' LIMIT 1; -- Matcha Latte
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 31, id, 200.00 FROM ingredients WHERE name = 'Milk' LIMIT 1;

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 32, id, 15.00 FROM ingredients WHERE name = 'Taro Powder' LIMIT 1; -- Bubble Tea Taro
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 32, id, 200.00 FROM ingredients WHERE name = 'Milk' LIMIT 1;
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 32, id, 50.00 FROM ingredients WHERE name = 'Tapioca Pearls' LIMIT 1;

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 33, id, 5.00 FROM ingredients WHERE name = 'Tea Leaves' LIMIT 1; -- Boba Milk Tea
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 33, id, 200.00 FROM ingredients WHERE name = 'Milk' LIMIT 1;
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 33, id, 50.00 FROM ingredients WHERE name = 'Tapioca Pearls' LIMIT 1;

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 34, id, 5.00 FROM ingredients WHERE name = 'Tea Leaves' LIMIT 1; -- Thai Tea
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 34, id, 150.00 FROM ingredients WHERE name = 'Milk' LIMIT 1;

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 35, id, 18.00 FROM ingredients WHERE name = 'Espresso Beans' LIMIT 1; -- Pistachio Latte
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 35, id, 200.00 FROM ingredients WHERE name = 'Milk' LIMIT 1;
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 35, id, 30.00 FROM ingredients WHERE name = 'Pistachio Paste' LIMIT 1;

-- Food items (39-40 missing)
INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 39, id, 1 FROM ingredients WHERE name = 'Blueberry Muffin' LIMIT 1; -- Blueberry Muffin

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 40, id, 1 FROM ingredients WHERE name = 'Cheese Danish' LIMIT 1; -- Cheese Danish

INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount) 
SELECT 41, id, 1 FROM ingredients WHERE name = 'Almond Cookie' LIMIT 1; -- Almond Cookie

-- ============================================
-- MIGRATION COMPLETE
-- ============================================

SELECT 'Migration completed successfully!' as status;
SELECT COUNT(*) as total_products, 
       SUM(CASE WHEN stock_quantity > 0 THEN 1 ELSE 0 END) as products_with_stock
FROM products;
