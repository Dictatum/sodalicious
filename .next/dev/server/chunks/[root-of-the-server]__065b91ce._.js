module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/timers [external] (timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("timers", () => require("timers"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sql",
    ()=>sql
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mysql2/promise.js [app-route] (ecmascript)");
;
;
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set");
}
// Detect connection type: PostgreSQL (Neon) or MySQL (XAMPP)
const isPostgres = connectionString.startsWith("postgresql://");
const isMysql = connectionString.startsWith("mysql://");
let sql;
if (isPostgres) {
    // Use Neon for PostgreSQL
    sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neon"])(connectionString);
} else if (isMysql) {
    // Use mysql2 for MySQL/XAMPP
    const pool = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createPool({
        uri: connectionString,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    // Create a wrapper for mysql2 that mimics neon's API
    sql = async (strings, ...values)=>{
        const connection = await pool.getConnection();
        try {
            // Build query from template strings
            let query = strings[0];
            for(let i = 0; i < values.length; i++){
                query += "?" + strings[i + 1];
            }
            // DEBUG LOGGING
            if ("TURBOPACK compile-time truthy", 1) {
                console.log(`[DB] Query: ${query.trim().replace(/\s+/g, ' ')}`);
                if (values.length > 0) console.log(`[DB] Values:`, values);
            }
            const [rows] = await connection.query(query, values);
            return rows;
        } catch (err) {
            console.error(`[DB ERROR] Query failed:`, err);
            throw err;
        } finally{
            connection.release();
        }
    };
} else {
    throw new Error(`Unsupported database URL format. Use postgresql:// (Neon) or mysql:// (XAMPP). Got: ${connectionString.split("://")[0]}://`);
}
;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/admin/fix-recipes/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        console.log("Starting COMPREHENSIVE recipe fix...");
        // 1. Ensure ingredients exist
        const ings = [
            [
                'Espresso Beans',
                'g'
            ],
            [
                'Milk',
                'ml'
            ],
            [
                'Caramel Syrup',
                'ml'
            ],
            [
                'Chocolate Syrup',
                'ml'
            ],
            [
                'Vanilla Syrup',
                'ml'
            ],
            [
                'Soda Water',
                'ml'
            ],
            [
                'Cola Syrup',
                'ml'
            ],
            [
                'Lemon Syrup',
                'ml'
            ],
            [
                'Strawberry Syrup',
                'ml'
            ],
            [
                'Mango Puree',
                'ml'
            ],
            [
                'Berry Mix',
                'ml'
            ],
            [
                'Matcha Powder',
                'g'
            ],
            [
                'Taro Powder',
                'g'
            ],
            [
                'Tapioca Pearls',
                'g'
            ],
            [
                'Tea Leaves',
                'g'
            ],
            [
                'Pistachio Paste',
                'g'
            ],
            [
                'Waffle Batter',
                'ml'
            ],
            [
                'Ice Cream',
                'scoop'
            ],
            [
                'Coffee Jelly',
                'g'
            ],
            [
                'Whipped Cream',
                'ml'
            ],
            [
                'Cookie Crumbs',
                'g'
            ],
            [
                'Green Apple Syrup',
                'ml'
            ],
            [
                'Lychee Syrup',
                'ml'
            ],
            [
                'Yakult',
                'ml'
            ],
            [
                'Orange Juice',
                'ml'
            ],
            [
                'Pineapple Juice',
                'ml'
            ],
            [
                'Watermelon Juice',
                'ml'
            ],
            [
                'Croissant',
                'pcs'
            ],
            [
                'Chocolate Cake',
                'pcs'
            ],
            [
                'Blueberry Muffin',
                'pcs'
            ],
            [
                'Cheese Danish',
                'pcs'
            ],
            [
                'Almond Cookie',
                'pcs'
            ]
        ];
        for (const [name, unit] of ings){
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`INSERT IGNORE INTO ingredients (name, unit, stock_quantity, reorder_level) VALUES (${name}, ${unit}, 5000, 100)`;
        }
        // 2. Clear existing recipes
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`DELETE FROM product_ingredients`;
        console.log("Cleared existing recipes.");
        // 3. Recipes Logic
        // Coffee Base
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Espresso Beans'), 18
      FROM products WHERE category IN ('Hot Coffee', 'Iced Coffee', 'Specialty') AND name NOT LIKE '%Tea%' AND name NOT LIKE '%Soda%'`;
        // Milk Base
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Milk'), 200
      FROM products WHERE (category IN ('Hot Coffee', 'Iced Coffee', 'Specialty') OR name LIKE '%Latte%' OR name LIKE '%Matcha%')
      AND name NOT LIKE '%Americano%' AND name NOT LIKE '%Espresso%' AND name NOT LIKE '%Long Black%' AND name NOT LIKE '%Soda%'`;
        // Soda Base
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Soda Water'), 250
      FROM products WHERE category LIKE '%Soda%' OR name LIKE '%Fizz%' OR name LIKE '%Splash%'`;
        // Yakult Base
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Yakult'), 100
      FROM products WHERE category LIKE '%Yakult%' OR name LIKE '%Yakult%'`;
        // Tea Base
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`INSERT INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT id, (SELECT id FROM ingredients WHERE name='Tea Leaves'), 10
      FROM products WHERE name LIKE '%Tea%' OR category = 'Tea';`;
        // SYRUPS / FLAVORS (Pattern Matching)
        const flavors = [
            {
                key: '%Caramel%',
                ing: 'Caramel Syrup',
                amt: 20
            },
            {
                key: '%Mocha%',
                ing: 'Chocolate Syrup',
                amt: 20
            },
            {
                key: '%Choco%',
                ing: 'Chocolate Syrup',
                amt: 20
            },
            {
                key: '%Vanilla%',
                ing: 'Vanilla Syrup',
                amt: 20
            },
            {
                key: '%Strawberry%',
                ing: 'Strawberry Syrup',
                amt: 40
            },
            {
                key: '%Mango%',
                ing: 'Mango Puree',
                amt: 40
            },
            {
                key: '%Berry%',
                ing: 'Berry Mix',
                amt: 40
            },
            {
                key: '%Cola%',
                ing: 'Cola Syrup',
                amt: 50
            },
            {
                key: '%Matcha%',
                ing: 'Matcha Powder',
                amt: 15
            },
            {
                key: '%Taro%',
                ing: 'Taro Powder',
                amt: 20
            },
            {
                key: '%Apple%',
                ing: 'Green Apple Syrup',
                amt: 40
            },
            {
                key: '%Lychee%',
                ing: 'Lychee Syrup',
                amt: 40
            },
            {
                key: '%Orange%',
                ing: 'Orange Juice',
                amt: 300
            },
            {
                key: '%Pineapple%',
                ing: 'Pineapple Juice',
                amt: 300
            },
            {
                key: '%Watermelon%',
                ing: 'Watermelon Juice',
                amt: 300
            }
        ];
        for (const flavor of flavors){
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
        INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount)
        SELECT p.id, i.id, ${flavor.amt}
        FROM products p, ingredients i
        WHERE p.name LIKE ${flavor.key} AND i.name = ${flavor.ing}
      `;
        }
        // Food (1-to-1)
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
      INSERT IGNORE INTO product_ingredients (product_id, ingredient_id, amount)
      SELECT p.id, i.id, 1
      FROM products p
      JOIN ingredients i ON p.name = i.name
      WHERE p.category = 'Food'
    `;
        // Count results
        const [countResult] = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`SELECT COUNT(*) as total FROM product_ingredients`;
        const total = countResult.total || 0;
        console.log(`Recipe fix complete. Total links: ${total}`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            count: total
        });
    } catch (error) {
        console.error("Recipe fix error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: String(error)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__065b91ce._.js.map