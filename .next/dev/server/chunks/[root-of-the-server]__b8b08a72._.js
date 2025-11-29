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
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sql",
    ()=>sql
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@neondatabase/serverless/index.mjs [app-route] (ecmascript)");
;
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set");
}
const sql = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$neondatabase$2f$serverless$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["neon"])(connectionString);
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/menu-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SODALICIOUS.CO – Complete POS Menu Data
 * Synced across Cashier, Manager, and Inventory panels
 * All prices in PHP, Stock quantities for tracking
 */ __turbopack_context__.s([
    "COMBO_MEALS",
    ()=>COMBO_MEALS,
    "COMPLETE_MENU",
    ()=>COMPLETE_MENU,
    "FRAPPES",
    ()=>FRAPPES,
    "HOT_COFFEE",
    ()=>HOT_COFFEE,
    "ICED_COFFEE",
    ()=>ICED_COFFEE,
    "MATCHA_SERIES",
    ()=>MATCHA_SERIES,
    "MENU_CATEGORIES",
    ()=>MENU_CATEGORIES,
    "SNACKS",
    ()=>SNACKS,
    "SODA_SERIES",
    ()=>SODA_SERIES,
    "YAKULT_SERIES",
    ()=>YAKULT_SERIES,
    "changeStockByName",
    ()=>changeStockByName,
    "deductStock",
    ()=>deductStock,
    "findMenuItemByName",
    ()=>findMenuItemByName,
    "getAllCategories",
    ()=>getAllCategories,
    "getAllProductVariants",
    ()=>getAllProductVariants,
    "getBaseMenuItems",
    ()=>getBaseMenuItems,
    "getMenuByCategory",
    ()=>getMenuByCategory,
    "getProductById",
    ()=>getProductById,
    "getStockLevel",
    ()=>getStockLevel,
    "menuItemToProduct",
    ()=>menuItemToProduct,
    "setStockByName",
    ()=>setStockByName,
    "updateProductStock",
    ()=>updateProductStock
]);
const HOT_COFFEE = [
    {
        id: "HC001",
        name: "Americano",
        category: "Hot Coffee",
        categoryCode: "HC",
        sizes: [
            {
                size: "S",
                price: 45
            },
            {
                size: "M",
                price: 55
            },
            {
                size: "L",
                price: 65
            }
        ],
        description: "Classic Italian espresso with hot water",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "HC002",
        name: "Café Latte",
        category: "Hot Coffee",
        categoryCode: "HC",
        sizes: [
            {
                size: "S",
                price: 55
            },
            {
                size: "M",
                price: 65
            },
            {
                size: "L",
                price: 75
            }
        ],
        description: "Smooth espresso with steamed milk",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "HC003",
        name: "Cappuccino",
        category: "Hot Coffee",
        categoryCode: "HC",
        sizes: [
            {
                size: "S",
                price: 55
            },
            {
                size: "M",
                price: 65
            },
            {
                size: "L",
                price: 75
            }
        ],
        description: "Espresso with equal parts milk and foam",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "HC004",
        name: "Caramel Macchiato",
        category: "Hot Coffee",
        categoryCode: "HC",
        sizes: [
            {
                size: "S",
                price: 60
            },
            {
                size: "M",
                price: 70
            },
            {
                size: "L",
                price: 80
            }
        ],
        description: "Rich espresso with caramel and steamed milk",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "HC005",
        name: "Mocha",
        category: "Hot Coffee",
        categoryCode: "HC",
        sizes: [
            {
                size: "S",
                price: 60
            },
            {
                size: "M",
                price: 70
            },
            {
                size: "L",
                price: 80
            }
        ],
        description: "Espresso, steamed milk, and chocolate",
        stock: 40,
        minThreshold: 8
    }
];
const ICED_COFFEE = [
    {
        id: "IC001",
        name: "Iced Americano",
        category: "Iced Coffee",
        categoryCode: "IC",
        sizes: [
            {
                size: "R",
                price: 55
            },
            {
                size: "L",
                price: 65
            }
        ],
        description: "Cold espresso with ice and water",
        stock: 40,
        minThreshold: 12
    },
    {
        id: "IC002",
        name: "Iced Latte",
        category: "Iced Coffee",
        categoryCode: "IC",
        sizes: [
            {
                size: "R",
                price: 65
            },
            {
                size: "L",
                price: 75
            }
        ],
        description: "Smooth iced espresso with cold milk",
        stock: 40,
        minThreshold: 12
    },
    {
        id: "IC003",
        name: "Iced Caramel",
        category: "Iced Coffee",
        categoryCode: "IC",
        sizes: [
            {
                size: "R",
                price: 70
            },
            {
                size: "L",
                price: 80
            }
        ],
        description: "Iced espresso with caramel and milk",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "IC004",
        name: "Iced Vanilla Brew",
        category: "Iced Coffee",
        categoryCode: "IC",
        sizes: [
            {
                size: "R",
                price: 65
            },
            {
                size: "L",
                price: 75
            }
        ],
        description: "Cold brew with vanilla essence",
        stock: 40,
        minThreshold: 12
    },
    {
        id: "IC005",
        name: "Iced Mocha",
        category: "Iced Coffee",
        categoryCode: "IC",
        sizes: [
            {
                size: "R",
                price: 70
            },
            {
                size: "L",
                price: 80
            }
        ],
        description: "Iced espresso with chocolate and milk",
        stock: 40,
        minThreshold: 10
    }
];
const FRAPPES = [
    {
        id: "FR001",
        name: "Chocolate Frappe",
        category: "Frappes",
        categoryCode: "FR",
        sizes: [
            {
                size: "16oz",
                price: 75
            }
        ],
        description: "Blended chocolate frappe with whipped cream",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "FR002",
        name: "Caramel Frappe",
        category: "Frappes",
        categoryCode: "FR",
        sizes: [
            {
                size: "16oz",
                price: 75
            }
        ],
        description: "Blended caramel frappe with whipped cream",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "FR003",
        name: "Cookies & Cream Frappe",
        category: "Frappes",
        categoryCode: "FR",
        sizes: [
            {
                size: "16oz",
                price: 80
            }
        ],
        description: "Cookies and cream blended frappe",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "FR004",
        name: "Matcha Frappe",
        category: "Frappes",
        categoryCode: "FR",
        sizes: [
            {
                size: "16oz",
                price: 85
            }
        ],
        description: "Blended matcha frappe with whipped cream",
        stock: 40,
        minThreshold: 6
    },
    {
        id: "FR005",
        name: "Coffee Jelly Frappe",
        category: "Frappes",
        categoryCode: "FR",
        sizes: [
            {
                size: "16oz",
                price: 80
            }
        ],
        description: "Coffee frappe with coffee jelly bits",
        stock: 40,
        minThreshold: 8
    }
];
const SODA_SERIES = [
    {
        id: "SS001",
        name: "Blue Lemon Soda",
        category: "Soda Series",
        categoryCode: "SS",
        sizes: [
            {
                size: "R",
                price: 55
            },
            {
                size: "L",
                price: 65
            }
        ],
        description: "Refreshing blue lemon carbonated drink",
        stock: 40,
        minThreshold: 15
    },
    {
        id: "SS002",
        name: "Strawberry Fizz",
        category: "Soda Series",
        categoryCode: "SS",
        sizes: [
            {
                size: "R",
                price: 55
            },
            {
                size: "L",
                price: 65
            }
        ],
        description: "Sweet strawberry flavored soda",
        stock: 40,
        minThreshold: 15
    },
    {
        id: "SS003",
        name: "Green Apple Soda",
        category: "Soda Series",
        categoryCode: "SS",
        sizes: [
            {
                size: "R",
                price: 55
            },
            {
                size: "L",
                price: 65
            }
        ],
        description: "Crisp green apple soda",
        stock: 40,
        minThreshold: 15
    },
    {
        id: "SS004",
        name: "Lychee Pop Soda",
        category: "Soda Series",
        categoryCode: "SS",
        sizes: [
            {
                size: "R",
                price: 60
            },
            {
                size: "L",
                price: 70
            }
        ],
        description: "Tropical lychee flavored soda",
        stock: 40,
        minThreshold: 12
    },
    {
        id: "SS005",
        name: "Mango Burst Soda",
        category: "Soda Series",
        categoryCode: "SS",
        sizes: [
            {
                size: "R",
                price: 60
            },
            {
                size: "L",
                price: 70
            }
        ],
        description: "Tropical mango soda explosion",
        stock: 40,
        minThreshold: 12
    }
];
const YAKULT_SERIES = [
    {
        id: "YK001",
        name: "Blue Yakult",
        category: "Yakult Series",
        categoryCode: "YK",
        sizes: [
            {
                size: "R",
                price: 60
            },
            {
                size: "L",
                price: 70
            }
        ],
        description: "Probiotic blue flavored Yakult",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "YK002",
        name: "Strawberry Yakult",
        category: "Yakult Series",
        categoryCode: "YK",
        sizes: [
            {
                size: "R",
                price: 60
            },
            {
                size: "L",
                price: 70
            }
        ],
        description: "Probiotic strawberry Yakult",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "YK003",
        name: "Green Apple Yakult",
        category: "Yakult Series",
        categoryCode: "YK",
        sizes: [
            {
                size: "R",
                price: 60
            },
            {
                size: "L",
                price: 70
            }
        ],
        description: "Probiotic green apple Yakult",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "YK004",
        name: "Mango Yakult",
        category: "Yakult Series",
        categoryCode: "YK",
        sizes: [
            {
                size: "R",
                price: 60
            },
            {
                size: "L",
                price: 70
            }
        ],
        description: "Probiotic mango Yakult",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "YK005",
        name: "Lychee Yakult",
        category: "Yakult Series",
        categoryCode: "YK",
        sizes: [
            {
                size: "R",
                price: 60
            },
            {
                size: "L",
                price: 70
            }
        ],
        description: "Probiotic lychee Yakult",
        stock: 40,
        minThreshold: 10
    }
];
const MATCHA_SERIES = [
    {
        id: "MC001",
        name: "Classic Matcha",
        category: "Matcha Series",
        categoryCode: "MC",
        sizes: [
            {
                size: "R",
                price: 70
            },
            {
                size: "L",
                price: 80
            }
        ],
        description: "Traditional matcha powder blend",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "MC002",
        name: "Matcha Latte",
        category: "Matcha Series",
        categoryCode: "MC",
        sizes: [
            {
                size: "R",
                price: 75
            },
            {
                size: "L",
                price: 85
            }
        ],
        description: "Matcha with steamed milk",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "MC003",
        name: "Matcha Caramel",
        category: "Matcha Series",
        categoryCode: "MC",
        sizes: [
            {
                size: "R",
                price: 80
            },
            {
                size: "L",
                price: 90
            }
        ],
        description: "Matcha with caramel drizzle",
        stock: 40,
        minThreshold: 6
    },
    {
        id: "MC004",
        name: "Matcha Vanilla",
        category: "Matcha Series",
        categoryCode: "MC",
        sizes: [
            {
                size: "R",
                price: 75
            },
            {
                size: "L",
                price: 85
            }
        ],
        description: "Matcha with vanilla essence",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "MC005",
        name: "Dirty Matcha",
        category: "Matcha Series",
        categoryCode: "MC",
        sizes: [
            {
                size: "R",
                price: 85
            },
            {
                size: "L",
                price: 95
            }
        ],
        description: "Matcha with espresso shot",
        stock: 40,
        minThreshold: 6
    }
];
const COMBO_MEALS = [
    {
        id: "CM001",
        name: "Fries + Soda",
        category: "Combo Meals",
        categoryCode: "CM",
        sizes: [
            {
                size: "Combo",
                price: 99
            }
        ],
        description: "Regular Fries + Regular Soda",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "CM002",
        name: "Siomai Rice + Soda",
        category: "Combo Meals",
        categoryCode: "CM",
        sizes: [
            {
                size: "Combo",
                price: 110
            }
        ],
        description: "Siomai Rice + Regular Soda",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "CM003",
        name: "Burger + Soda",
        category: "Combo Meals",
        categoryCode: "CM",
        sizes: [
            {
                size: "Combo",
                price: 120
            }
        ],
        description: "Cheeseburger + Regular Soda",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "CM004",
        name: "Nuggets + Soda",
        category: "Combo Meals",
        categoryCode: "CM",
        sizes: [
            {
                size: "Combo",
                price: 115
            }
        ],
        description: "6pcs Nuggets + Regular Soda",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "CM005",
        name: "Hotdog + Soda",
        category: "Combo Meals",
        categoryCode: "CM",
        sizes: [
            {
                size: "Combo",
                price: 99
            }
        ],
        description: "Hotdog Sandwich + Regular Soda",
        stock: 40,
        minThreshold: 10
    }
];
const SNACKS = [
    {
        id: "SN001",
        name: "Fries",
        category: "Snacks",
        categoryCode: "SN",
        sizes: [
            {
                size: "Reg",
                price: 45
            },
            {
                size: "Lrg",
                price: 60
            }
        ],
        description: "Crispy golden fries",
        stock: 40,
        minThreshold: 15
    },
    {
        id: "SN002",
        name: "Kropek",
        category: "Snacks",
        categoryCode: "SN",
        sizes: [
            {
                size: "Solo",
                price: 45
            }
        ],
        description: "Crispy prawn cracker",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "SN003",
        name: "Nachos",
        category: "Snacks",
        categoryCode: "SN",
        sizes: [
            {
                size: "Solo",
                price: 60
            }
        ],
        description: "Cheese nachos with dip",
        stock: 40,
        minThreshold: 8
    },
    {
        id: "SN004",
        name: "Cheese Sticks",
        category: "Snacks",
        categoryCode: "SN",
        sizes: [
            {
                size: "6 pcs",
                price: 50
            }
        ],
        description: "Golden fried cheese sticks",
        stock: 40,
        minThreshold: 10
    },
    {
        id: "SN005",
        name: "Siomai Rice",
        category: "Snacks",
        categoryCode: "SN",
        sizes: [
            {
                size: "Solo",
                price: 55
            }
        ],
        description: "Siomai served with rice",
        stock: 40,
        minThreshold: 10
    }
];
const COMPLETE_MENU = [
    ...HOT_COFFEE,
    ...ICED_COFFEE,
    ...FRAPPES,
    ...SODA_SERIES,
    ...YAKULT_SERIES,
    ...MATCHA_SERIES,
    ...COMBO_MEALS,
    ...SNACKS
];
const MENU_CATEGORIES = [
    {
        code: "HC",
        name: "Hot Coffee",
        emoji: "☕"
    },
    {
        code: "IC",
        name: "Iced Coffee",
        emoji: "🧊"
    },
    {
        code: "FR",
        name: "Frappes",
        emoji: "🥤"
    },
    {
        code: "SS",
        name: "Soda Series",
        emoji: "🫧"
    },
    {
        code: "YK",
        name: "Yakult Series",
        emoji: "🧃"
    },
    {
        code: "MC",
        name: "Matcha Series",
        emoji: "🍵"
    },
    {
        code: "CM",
        name: "Combo Meals",
        emoji: "🍱"
    },
    {
        code: "SN",
        name: "Snacks",
        emoji: "🍟"
    }
];
function getMenuByCategory(categoryCode) {
    return COMPLETE_MENU.filter((item)=>item.categoryCode === categoryCode);
}
function getAllCategories() {
    return MENU_CATEGORIES.map((cat)=>cat.name);
}
function menuItemToProduct(item, sizeIndex = 0) {
    const size = item.sizes[sizeIndex];
    return {
        id: item.id,
        name: `${item.name} (${size.size})`,
        price: size.price,
        category: item.category,
        stock: item.stock,
        minThreshold: item.minThreshold,
        description: item.description,
        image: item.image
    };
}
function getAllProductVariants() {
    return COMPLETE_MENU.flatMap((item)=>item.sizes.map((size, index)=>({
                id: `${item.id}-${size.size}`,
                baseId: item.id,
                name: item.name,
                size: size.size,
                price: size.price,
                category: item.category,
                categoryCode: item.categoryCode,
                stock: item.stock,
                minThreshold: item.minThreshold,
                description: item.description,
                image: item.image
            })));
}
function getBaseMenuItems() {
    return COMPLETE_MENU.map((item)=>({
            id: item.id,
            name: item.name,
            category: item.category,
            categoryCode: item.categoryCode,
            sizes: item.sizes,
            description: item.description,
            stock: item.stock,
            minThreshold: item.minThreshold,
            image: item.image
        }));
}
function deductStock(productId, quantity) {
    const item = COMPLETE_MENU.find((i)=>i.id === productId);
    if (!item) return false;
    if (item.stock < quantity) return false;
    item.stock -= quantity;
    return true;
}
function getProductById(productId) {
    return COMPLETE_MENU.find((i)=>i.id === productId);
}
function updateProductStock(productId, newStock) {
    const item = COMPLETE_MENU.find((i)=>i.id === productId);
    if (!item) return false;
    item.stock = Math.max(0, newStock);
    return true;
}
function findMenuItemByName(baseName) {
    return COMPLETE_MENU.find((i)=>i.name === baseName);
}
function changeStockByName(baseName, delta) {
    const item = findMenuItemByName(baseName);
    if (!item) return false;
    item.stock = Math.max(0, item.stock + delta);
    return true;
}
function setStockByName(baseName, newStock) {
    const item = findMenuItemByName(baseName);
    if (!item) return false;
    item.stock = Math.max(0, newStock);
    return true;
}
function getStockLevel(productId) {
    const item = COMPLETE_MENU.find((i)=>i.id === productId);
    return item?.stock || 0;
}
}),
"[project]/app/api/products/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/menu-data.ts [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const category = searchParams.get("category");
        if (category) {
            const products = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`SELECT * FROM products WHERE is_active = true AND category = ${category} ORDER BY name`;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(products);
        } else {
            const products = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`SELECT * FROM products WHERE is_active = true ORDER BY name`;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(products);
        }
    } catch (error) {
        console.error("[v0] Products GET error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch products"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const { name, category, price, description, stock_quantity, reorder_level } = await request.json();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sql"]`
      INSERT INTO products (name, category, price, description, stock_quantity, reorder_level) 
      VALUES (${name}, ${category}, ${price}, ${description}, ${stock_quantity}, ${reorder_level}) 
      RETURNING *
    `;
        // Attempt to sync server in-memory menu-data (best-effort by name)
        try {
            if (result.length > 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setStockByName"])(result[0].name, result[0].stock_quantity);
            }
        } catch (e) {
            console.warn("[Products] Failed to sync in-memory menu-data after product create", e);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result[0], {
            status: 201
        });
    } catch (error) {
        console.error("[v0] Products POST error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to create product"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b8b08a72._.js.map