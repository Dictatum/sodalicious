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
"[project]/sodalicious/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sql",
    ()=>sql
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/mysql2/promise.js [app-route] (ecmascript)");
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
    sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neon"])(connectionString);
} else if (isMysql) {
    // Use mysql2 for MySQL/XAMPP
    const pool = __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$mysql2$2f$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createPool({
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
            const [rows] = await connection.query(query, values);
            return rows;
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
"[project]/sodalicious/app/api/inventory/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        const logs = await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
      SELECT il.*, i.name as ingredient_name, u.name as user_name 
      FROM inventory_logs il 
      LEFT JOIN ingredients i ON il.ingredient_id = i.id 
      LEFT JOIN users u ON il.user_id = u.id 
      ORDER BY il.created_at DESC LIMIT 100
    `;
        return __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(logs);
    } catch (error) {
        console.error("[v0] Inventory GET error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch inventory logs"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const { ingredient_id, user_id, log_type, quantity_changed, reason } = await request.json();
        // 1. Get current stock
        let ingredientResult = [];
        // Try numeric ID lookup
        if (!Number.isNaN(Number(ingredient_id))) {
            const byId = await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`SELECT id, name, stock_quantity FROM ingredients WHERE id = ${Number(ingredient_id)}`;
            if (byId.length > 0) ingredientResult = byId;
        }
        if (ingredientResult.length === 0) {
            // Fallback: name
            const byName = await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`SELECT id, name, stock_quantity FROM ingredients WHERE name = ${String(ingredient_id)} LIMIT 1`;
            if (byName.length > 0) ingredientResult = byName;
        }
        if (ingredientResult.length === 0) {
            console.error(`[Inventory] Ingredient not found with ID/name: ${ingredient_id}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Ingredient not found"
            }, {
                status: 404
            });
        }
        const previousQuantity = ingredientResult[0].stock_quantity;
        const newQuantity = Number(previousQuantity) + Number(quantity_changed);
        // 2. Update stock in DB
        await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`UPDATE ingredients SET stock_quantity = ${newQuantity} WHERE id = ${ingredientResult[0].id}`;
        // 3. Log the change
        const insertResult = await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
      INSERT INTO inventory_logs (ingredient_id, user_id, log_type, quantity_changed, reason, previous_quantity, new_quantity) 
      VALUES (${ingredientResult[0].id}, ${user_id}, ${log_type}, ${quantity_changed}, ${reason}, ${previousQuantity}, ${newQuantity})
    `;
        // Normalize result
        let logRow = null;
        if (insertResult && typeof insertResult.insertId === "number") {
            const sel = await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
         SELECT il.*, i.name as ingredient_name, u.name as user_name 
         FROM inventory_logs il 
         LEFT JOIN ingredients i ON il.ingredient_id = i.id 
         LEFT JOIN users u ON il.user_id = u.id 
         WHERE il.id = ${insertResult.insertId} LIMIT 1
       `;
            if (Array.isArray(sel)) logRow = sel[0];
            else logRow = sel;
        } else {
            // Fallback
            const sel = await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
         SELECT il.*, i.name as ingredient_name, u.name as user_name 
         FROM inventory_logs il 
         LEFT JOIN ingredients i ON il.ingredient_id = i.id 
         LEFT JOIN users u ON il.user_id = u.id 
         WHERE il.ingredient_id = ${ingredientResult[0].id} 
         ORDER BY il.created_at DESC LIMIT 1
       `;
            if (Array.isArray(sel)) logRow = sel[0];
            else logRow = sel;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(logRow, {
            status: 201
        });
    } catch (error) {
        console.error("[Inventory] POST error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to log inventory change"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b8d846ba._.js.map