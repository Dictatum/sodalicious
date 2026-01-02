import { sql } from "../lib/db";

async function run() {
    try {
        console.log("Starting DB Recipe Fix...");

        // 1. Ingredients
        const ings = [
            ['Espresso Beans', 'g'], ['Milk', 'ml'], ['Caramel Syrup', 'ml'], ['Chocolate Syrup', 'ml'],
            ['Vanilla Syrup', 'ml'], ['Soda Water', 'ml'], ['Cola Syrup', 'ml'], ['Lemon Syrup', 'ml'],
            ['Strawberry Syrup', 'ml'], ['Mango Puree', 'ml'], ['Berry Mix', 'ml'], ['Matcha Powder', 'g'],
            ['Taro Powder', 'g'], ['Tapioca Pearls', 'g'], ['Tea Leaves', 'g'], ['Pistachio Paste', 'g'],
            ['Waffle Batter', 'ml'], ['Ice Cream', 'scoop'], ['Coffee Jelly', 'g'], ['Whipped Cream', 'ml'],
            ['Cookie Crumbs', 'g'], ['Green Apple Syrup', 'ml'], ['Lychee Syrup', 'ml'], ['Yakult', 'ml'],
            ['Orange Juice', 'ml'], ['Pineapple Juice', 'ml'], ['Watermelon Juice', 'ml'],
            ['Croissant', 'pcs'], ['Chocolate Cake', 'pcs'], ['Blueberry Muffin', 'pcs'], ['Cheese Danish', 'pcs'], ['Almond Cookie', 'pcs']
        ];

        for (const [name, unit] of ings) {
            await sql`INSERT IGNORE INTO ingredients (name, unit, stock_quantity, reorder_level) VALUES (${name}, ${unit}, 5000, 100)`;
        }

        // 2. Clear
        await sql`DELETE FROM product_ingredients`;

        // 3. Populate
        // (Consolidated logic)
        await sql`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Espresso Beans'), 18
      FROM products WHERE category IN ('Hot Coffee', 'Iced Coffee', 'Specialty') AND name NOT LIKE '%Tea%' AND name NOT LIKE '%Soda%'`;

        await sql`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
      FROM products WHERE (category IN ('Hot Coffee', 'Iced Coffee', 'Specialty') OR name LIKE '%Latte%' OR name LIKE '%Matcha%')
      AND name NOT LIKE '%Americano%' AND name NOT LIKE '%Espresso%' AND name NOT LIKE '%Long Black%' AND name NOT LIKE '%Soda%'`;

        await sql`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Soda Water'), 250
      FROM products WHERE category LIKE '%Soda%' OR name LIKE '%Fizz%' OR name LIKE '%Splash%'`;

        const flavors = [
            { key: '%Caramel%', ing: 'Caramel Syrup', amt: 20 },
            { key: '%Mocha%', ing: 'Chocolate Syrup', amt: 20 },
            { key: '%Vanilla%', ing: 'Vanilla Syrup', amt: 20 },
            { key: '%Strawberry%', ing: 'Strawberry Syrup', amt: 40 },
            { key: '%Mango%', ing: 'Mango Puree', amt: 40 },
            { key: '%Berry%', ing: 'Berry Mix', amt: 40 },
            { key: '%Cola%', ing: 'Cola Syrup', amt: 50 }
        ];

        for (const f of flavors) {
            await sql`INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount)
        SELECT p.id, i.id, ${f.amt} FROM products p, ingredients i WHERE p.name LIKE ${f.key} AND i.name = ${f.ing}`;
        }

        await sql`INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT p.id, i.id, 1 FROM products p JOIN ingredients i ON p.name = i.name WHERE p.category = 'Food'`;

        console.log("Recipes Fixed Successfully!");
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

run();
