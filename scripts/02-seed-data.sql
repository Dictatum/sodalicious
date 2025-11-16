-- Seed initial users with password hashes
-- Password: 123456 (hashed using bcrypt format, standard demo hash)
INSERT INTO users (email, name, role, password_hash, is_active) VALUES
('cashier@sodalicious.com', 'Cassandra Silva', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', true),
('manager@sodalicious.com', 'Marcus Johnson', 'manager', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', true),
('inventory@sodalicious.com', 'Isabella Chen', 'inventory_officer', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', true),
('cashier2@sodalicious.com', 'Dante Rodriguez', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', true)
ON CONFLICT (email) DO NOTHING;

-- Seed products
INSERT INTO products (name, category, price, description, stock_quantity, reorder_level) VALUES
('Vanilla Cola', 'sodas', 3.50, 'Classic vanilla flavored cola', 45, 15),
('Strawberry Fizz', 'sodas', 3.75, 'Refreshing strawberry soda', 32, 15),
('Lemon Splash', 'sodas', 3.50, 'Tangy lemon carbonated drink', 28, 15),
('Mango Paradise', 'juices', 4.00, 'Fresh mango juice blend', 18, 10),
('Berry Smoothie', 'juices', 4.25, 'Mixed berry smoothie', 22, 10),
('Iced Coffee', 'coffee', 3.50, 'Cold brewed iced coffee', 40, 20),
('Vanilla Latte', 'coffee', 4.00, 'Smooth vanilla latte', 35, 15),
('Caramel Macchiato', 'coffee', 4.50, 'Rich caramel macchiato', 25, 15),
('Bubble Tea Taro', 'specialty', 4.75, 'Creamy taro bubble tea', 15, 10),
('Matcha Latte', 'specialty', 4.50, 'Green matcha latte', 20, 10)
ON CONFLICT DO NOTHING;
