const mysql = require('mysql2/promise');

async function run() {
  try {
    const conn = await mysql.createConnection("mysql://root:@localhost:3306/sodalicious_db");
    console.log("Connected to DB.");

    // Clear and redo
    await conn.execute("DELETE FROM product_ingredients");
    console.log("Cleared old recipes.");

    // Ensure Ingredients including Food items
    const ings = [
      'Espresso Beans', 'Milk', 'Caramel Syrup', 'Chocolate Syrup', 'Vanilla Syrup',
      'Soda Water', 'Cola Syrup', 'Lemon Syrup', 'Strawberry Syrup', 'Mango Puree',
      'Berry Mix', 'Matcha Powder', 'Taro Powder', 'Tapioca Pearls', 'Tea Leaves',
      'Pistachio Paste', 'Waffle Batter', 'Ice Cream', 'Coffee Jelly', 'Whipped Cream',
      'Cookie Crumbs', 'Green Apple Syrup', 'Lychee Syrup', 'Yakult', 'Orange Juice',
      'Pineapple Juice', 'Watermelon Juice', 'Croissant', 'Chocolate Cake',
      'Blueberry Muffin', 'Cheese Danish', 'Almond Cookie', 'Fries', 'Kropek', 'Nachos', 'Cheese Sticks', 'Siomai Rice', 'Burger', 'Nuggets', 'Hotdog'
    ];

    for (const name of ings) {
      await conn.execute("INSERT IGNORE INTO ingredients (name, unit, stock_quantity) VALUES (?, 'units', 5000)", [name]);
    }

    // Recipes
    // 1. Drinks (Base)
    await conn.execute(`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Espresso Beans'), 18
      FROM products WHERE category IN ('Hot Coffee', 'Iced Coffee')`);

    await conn.execute(`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT p.id, i.id, 250
      FROM products p, ingredients i
      WHERE p.category LIKE 'Soda%' AND i.name = 'Soda Water'`);

    // 2. Food / Category matching (Snacks, Combo Meals)
    // Map by name (e.g. Fries product -> Fries ingredient)
    await conn.execute(`
      INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT p.id, i.id, 1
      FROM products p
      JOIN ingredients i ON p.name LIKE CONCAT('%', i.name, '%')
      WHERE p.category IN ('Snacks', 'Combo Meals')
    `);

    // 3. Catch-all
    await conn.execute(`
      INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT p.id, (SELECT id FROM ingredients LIMIT 1), 1
      FROM products p 
      LEFT JOIN product_ingredients pi ON p.id = pi.product_id
      WHERE pi.product_id IS NULL
    `);

    console.log("Emergency Fix Complete for ALL products including FOOD.");
    await conn.end();
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

run();
