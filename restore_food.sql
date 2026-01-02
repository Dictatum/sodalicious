USE sodalicious_db;

-- Restore Yakult Series
INSERT IGNORE INTO products (name, category, price, stock_quantity, min_threshold) VALUES
('Blue Yakult', 'Yakult Series', 65.00, 40, 10),
('Strawberry Yakult', 'Yakult Series', 65.00, 40, 10),
('Green Apple Yakult', 'Yakult Series', 65.00, 40, 10),
('Mango Yakult', 'Yakult Series', 65.00, 40, 10),
('Lychee Yakult', 'Yakult Series', 65.00, 40, 10);

-- Restore Matcha Series
INSERT IGNORE INTO products (name, category, price, stock_quantity, min_threshold) VALUES
('Classic Matcha', 'Matcha Series', 75.00, 40, 8),
('Matcha Latte', 'Matcha Series', 80.00, 40, 8),
('Matcha Caramel', 'Matcha Series', 85.00, 40, 6),
('Matcha Vanilla', 'Matcha Series', 80.00, 40, 8),
('Dirty Matcha', 'Matcha Series', 90.00, 40, 6);

-- Restore Combo Meals (The "FOOD" user is looking for)
INSERT IGNORE INTO products (name, category, price, stock_quantity, min_threshold) VALUES
('Fries + Soda', 'Combo Meals', 99.00, 40, 10),
('Siomai Rice + Soda', 'Combo Meals', 110.00, 40, 8),
('Burger + Soda', 'Combo Meals', 120.00, 40, 8),
('Nuggets + Soda', 'Combo Meals', 115.00, 40, 8),
('Hotdog + Soda', 'Combo Meals', 99.00, 40, 10);

-- Restore Snacks (More "FOOD")
INSERT IGNORE INTO products (name, category, price, stock_quantity, min_threshold) VALUES
('Fries', 'Snacks', 50.00, 40, 15),
('Kropek', 'Snacks', 45.00, 40, 10),
('Nachos', 'Snacks', 60.00, 40, 8),
('Cheese Sticks', 'Snacks', 50.00, 40, 10),
('Siomai Rice', 'Snacks', 55.00, 40, 10);

-- Fix Soda Category Name (Ensure match with menu-data.ts)
UPDATE products SET category = 'Soda Series' WHERE category = 'Sodas';
UPDATE products SET category = 'Specialty' WHERE category = 'Specialty Series';

SELECT 'Food and missing products restored!' as message;
