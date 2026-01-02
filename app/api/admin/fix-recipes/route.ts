import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Starting COMPREHENSIVE recipe fix...");

    // 1. Ensure ingredients exist
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

    // 2. Clear existing recipes
    await sql`DELETE FROM product_ingredients`;
    console.log("Cleared existing recipes.");

    // 3. Recipes Logic

    // Coffee Base
    await sql`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Espresso Beans'), 18
      FROM products WHERE category IN ('Hot Coffee', 'Iced Coffee', 'Specialty') AND name NOT LIKE '%Tea%' AND name NOT LIKE '%Soda%'`;

    // Milk Base
    await sql`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
      FROM products WHERE (category IN ('Hot Coffee', 'Iced Coffee', 'Specialty') OR name LIKE '%Latte%' OR name LIKE '%Matcha%')
      AND name NOT LIKE '%Americano%' AND name NOT LIKE '%Espresso%' AND name NOT LIKE '%Long Black%' AND name NOT LIKE '%Soda%'`;

    // Soda Base
    await sql`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Soda Water'), 250
      FROM products WHERE category LIKE '%Soda%' OR name LIKE '%Fizz%' OR name LIKE '%Splash%'`;

    // Yakult Base
    await sql`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Yakult'), 100
      FROM products WHERE category LIKE '%Yakult%' OR name LIKE '%Yakult%'`;

    // Tea Base
    await sql`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Tea Leaves'), 10
      FROM products WHERE name LIKE '%Tea%' OR category = 'Tea';`;

    // SYRUPS / FLAVORS (Pattern Matching)
    const flavors = [
      { key: '%Caramel%', ing: 'Caramel Syrup', amt: 20 },
      { key: '%Mocha%', ing: 'Chocolate Syrup', amt: 20 },
      { key: '%Choco%', ing: 'Chocolate Syrup', amt: 20 },
      { key: '%Vanilla%', ing: 'Vanilla Syrup', amt: 20 },
      { key: '%Strawberry%', ing: 'Strawberry Syrup', amt: 40 },
      { key: '%Mango%', ing: 'Mango Puree', amt: 40 },
      { key: '%Berry%', ing: 'Berry Mix', amt: 40 },
      { key: '%Cola%', ing: 'Cola Syrup', amt: 50 },
      { key: '%Matcha%', ing: 'Matcha Powder', amt: 15 },
      { key: '%Taro%', ing: 'Taro Powder', amt: 20 },
      { key: '%Apple%', ing: 'Green Apple Syrup', amt: 40 },
      { key: '%Lychee%', ing: 'Lychee Syrup', amt: 40 },
      { key: '%Orange%', ing: 'Orange Juice', amt: 300 },
      { key: '%Pineapple%', ing: 'Pineapple Juice', amt: 300 },
      { key: '%Watermelon%', ing: 'Watermelon Juice', amt: 300 }
    ];

    for (const flavor of flavors) {
      await sql`
        INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount)
        SELECT p.id, i.id, ${flavor.amt}
        FROM products p, ingredients i
        WHERE p.name LIKE ${flavor.key} AND i.name = ${flavor.ing}
      `;
    }

    // Food (1-to-1)
    await sql`
      INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT p.id, i.id, 1
      FROM products p
      JOIN ingredients i ON p.name = i.name
      WHERE p.category = 'Food'
    `;

    // Count results
    const [countResult] = await sql`SELECT COUNT(*) as total FROM product_ingredients`;
    const total = (countResult as any).total || 0;

    console.log(`Recipe fix complete. Total links: ${total}`);
    return NextResponse.json({ success: true, count: total });
  } catch (error) {
    console.error("Recipe fix error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
