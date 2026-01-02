-- ============================================
-- FIX RECIPES FOR ALL PRODUCTS
-- ============================================
USE sodalicious_db;

-- 1. Ensure all ingredients exist
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
('Waffle Batter', 'ml', 5000, 1000),
('Ice Cream', 'scoop', 100, 20),
('Coffee Jelly', 'g', 1000, 200),
('Whipped Cream', 'ml', 2000, 500),
('Cookie Crumbs', 'g', 1000, 200),
('Green Apple Syrup', 'ml', 2000, 500),
('Lychee Syrup', 'ml', 2000, 500),
('Yakult', 'ml', 5000, 1000),
('Orange Juice', 'ml', 3000, 500),
('Pineapple Juice', 'ml', 3000, 500),
('Watermelon Juice', 'ml', 3000, 500);

-- 2. Clear existing recipes for clean slate (optional, but safer to avoid duplicates if we re-insert)
-- TRUNCATE TABLE product_ingredients; -- Dangerous if live, let's use INSERT IGNORE and hope for best or specific deletions.
-- Better approach: Delete recipes for products we are about to fix.
DELETE FROM product_ingredients WHERE product_id IN (SELECT id FROM products);

-- 3. INSERT RECIPES based on Category and Name Pattern

-- >>> HOT COFFEE <<<
-- Base: Espresso Beans (18g)
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Espresso Beans'), 18
FROM products WHERE category = 'Hot Coffee';

-- Milk (200ml) for non-Americano/Espresso
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
FROM products WHERE category = 'Hot Coffee' AND name NOT LIKE '%Americano%' AND name NOT LIKE '%Espresso%' AND name NOT LIKE '%Long Black%';

-- Syrups
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Caramel Syrup'), 20
FROM products WHERE category = 'Hot Coffee' AND name LIKE '%Caramel%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Chocolate Syrup'), 20
FROM products WHERE category = 'Hot Coffee' AND name LIKE '%Mocha%';


-- >>> ICED COFFEE <<<
-- Base: Espresso (18g)
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Espresso Beans'), 18
FROM products WHERE category = 'Iced Coffee';

-- Milk (200ml) for non-Americano 
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
FROM products WHERE category = 'Iced Coffee' AND name NOT LIKE '%Americano%';

-- Syrups
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Caramel Syrup'), 30
FROM products WHERE category = 'Iced Coffee' AND name LIKE '%Caramel%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Chocolate Syrup'), 30
FROM products WHERE category = 'Iced Coffee' AND name LIKE '%Mocha%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Vanilla Syrup'), 30
FROM products WHERE category = 'Iced Coffee' AND name LIKE '%Vanilla%';


-- >>> FRAPPES (Assuming category 'Frappes' or similar) <<<
-- Use generic logic if category names vary, but here we assume standard.
-- Missing Frappes in original migration? Let's check products table via SQL logic.
-- Base mix: mostly Milk + Ice (we added Ice but maybe not using it in recipes yet, stick to main cost drivers)
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 150
FROM products WHERE category = 'Frappes';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Whipped Cream'), 50
FROM products WHERE category = 'Frappes';


-- >>> SODA SERIES <<<
-- Base: Soda Water (250ml)
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Soda Water'), 250
FROM products WHERE category LIKE '%Soda%';

-- Flavors
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

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Green Apple Syrup'), 40
FROM products WHERE category LIKE '%Soda%' AND name LIKE '%Apple%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Lychee Syrup'), 40
FROM products WHERE category LIKE '%Soda%' AND name LIKE '%Lychee%';


-- >>> JUICES <<<
-- Pure Juices
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


-- >>> YAKULT SERIES <<<
-- Base: Yakult (one bottle ~80ml, say 100ml) + Water/Soda?
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Yakult'), 100
FROM products WHERE category LIKE '%Yakult%';

-- Flavors
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Strawberry Syrup'), 30
FROM products WHERE category LIKE '%Yakult%' AND name LIKE '%Strawberry%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Mango Puree'), 30
FROM products WHERE category LIKE '%Yakult%' AND name LIKE '%Mango%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Green Apple Syrup'), 30
FROM products WHERE category LIKE '%Yakult%' AND name LIKE '%Apple%';

INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Lychee Syrup'), 30
FROM products WHERE category LIKE '%Yakult%' AND name LIKE '%Lychee%';


-- >>> SPECIALTY <<<
-- Matcha
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Matcha Powder'), 15
FROM products WHERE category = 'Specialty' AND name LIKE '%Matcha%';
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
FROM products WHERE category = 'Specialty' AND name LIKE '%Matcha%';

-- Taro
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Taro Powder'), 20
FROM products WHERE name LIKE '%Taro%';
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
FROM products WHERE name LIKE '%Taro%';

-- Thai Tea
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Tea Leaves'), 10
FROM products WHERE name LIKE '%Thai Tea%';
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 150
FROM products WHERE name LIKE '%Thai Tea%';


-- >>> FOOD <<<
-- Simple 1-to-1 mapping for food if ingredients exist
-- (Assuming we added placeholders in ingredients table for these items like 'Croissant', 'Chocolate Cake' etc)
-- Try to map by name match
INSERT INTO product_ingredients (product_id, ingredient_id, amount)
SELECT p.id, i.id, 1
FROM products p
JOIN ingredients i ON p.name = i.name
WHERE p.category = 'Food';


SELECT 'Recipes updated!' as message;
