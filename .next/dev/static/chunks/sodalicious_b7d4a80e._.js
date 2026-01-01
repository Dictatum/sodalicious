(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sodalicious/lib/menu-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "mockOrders",
    ()=>mockOrders,
    "mockProducts",
    ()=>mockProducts,
    "mockUsers",
    ()=>mockUsers
]);
// Initial mock data - imported from complete menu
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/menu-data.ts [app-client] (ecmascript)");
;
const mockProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllProductVariants"])().map((item)=>({
        id: item.id,
        baseId: item.baseId,
        name: item.name,
        price: item.price,
        size: item.size,
        category: item.category,
        categoryCode: item.categoryCode,
        stock: item.stock,
        minThreshold: item.minThreshold,
        description: item.description,
        image: item.image
    }));
const mockUsers = [
    {
        id: 1,
        name: "Maria Santos",
        username: "maria",
        password: "password",
        role: "cashier",
        status: "Active",
        lastLogin: "2025-11-11 09:30"
    },
    {
        id: 2,
        name: "Juan Dela Cruz",
        username: "juan",
        password: "password",
        role: "inventory",
        status: "Active",
        lastLogin: "2025-11-11 08:00"
    },
    {
        id: 3,
        name: "Rosa Reyes",
        username: "rosa",
        password: "password",
        role: "cashier",
        status: "Inactive"
    },
    {
        id: 4,
        name: "Admin Manager",
        username: "admin",
        password: "password",
        role: "manager",
        status: "Active",
        lastLogin: "2025-11-11 07:00"
    }
];
const mockOrders = [
    {
        id: "ORD00001",
        customer: "John Doe",
        items: [
            {
                id: 1,
                name: "Iced Calamansi Soda",
                price: 65,
                quantity: 2
            }
        ],
        subtotal: 130,
        tax: 10.4,
        total: 140.4,
        paymentMethod: "cash",
        status: "Completed",
        timestamp: "2025-11-11 14:30",
        cashierName: "Maria Santos"
    }
];
const api = {
    async getProducts (category) {
        const url = new URL("/api/products", ("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable");
        if (category) url.searchParams.append("category", category);
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
    },
    async getOrders () {
        const res = await fetch("/api/orders");
        if (!res.ok) throw new Error("Failed to fetch orders");
        return res.json();
    },
    async createOrder (data) {
        const res = await fetch("/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Failed to create order");
        return res.json();
    },
    async createProduct (data) {
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Failed to create product");
        return res.json();
    },
    async updateProduct (id, data) {
        const res = await fetch(`/api/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Failed to update product");
        return res.json();
    },
    async deleteProduct (id) {
        const res = await fetch(`/api/products/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error("Failed to delete product");
        return res.json();
    },
    async logInventoryChange (data) {
        const res = await fetch("/api/inventory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Failed to log inventory change");
        return res.json();
    },
    async getInventoryLogs () {
        const res = await fetch("/api/inventory");
        if (!res.ok) throw new Error("Failed to fetch inventory logs");
        return res.json();
    },
    async getActivityLogs () {
        const res = await fetch("/api/activity-logs");
        if (!res.ok) throw new Error("Failed to fetch activity logs");
        return res.json();
    },
    async logActivity (data) {
        const res = await fetch("/api/activity-logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Failed to log activity");
        return res.json();
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/lib/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActivityLogs",
    ()=>useActivityLogs,
    "useDatabaseOrders",
    ()=>useDatabaseOrders,
    "useDatabaseProducts",
    ()=>useDatabaseProducts,
    "useIngredients",
    ()=>useIngredients,
    "useInventoryLogs",
    ()=>useInventoryLogs,
    "useMenuSync",
    ()=>useMenuSync,
    "useOrders",
    ()=>useOrders,
    "useProducts",
    ()=>useProducts,
    "useUsers",
    ()=>useUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/menu-data.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
"use client";
;
;
;
function useProducts() {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProducts"]);
    const addProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProducts.useCallback[addProduct]": (product)=>{
            const newProduct = {
                ...product,
                id: Math.max(...products.map({
                    "useProducts.useCallback[addProduct]": (p)=>Number(p.id)
                }["useProducts.useCallback[addProduct]"]), 0) + 1
            };
            setProducts([
                ...products,
                newProduct
            ]);
            return newProduct;
        }
    }["useProducts.useCallback[addProduct]"], [
        products
    ]);
    const updateProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProducts.useCallback[updateProduct]": (id, updates)=>{
            setProducts(products.map({
                "useProducts.useCallback[updateProduct]": (p)=>p.id === id ? {
                        ...p,
                        ...updates
                    } : p
            }["useProducts.useCallback[updateProduct]"]));
        }
    }["useProducts.useCallback[updateProduct]"], [
        products
    ]);
    const deleteProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProducts.useCallback[deleteProduct]": (id)=>{
            setProducts(products.filter({
                "useProducts.useCallback[deleteProduct]": (p)=>p.id !== id
            }["useProducts.useCallback[deleteProduct]"]));
        }
    }["useProducts.useCallback[deleteProduct]"], [
        products
    ]);
    const getLowStockItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useProducts.useCallback[getLowStockItems]": ()=>{
            return products.filter({
                "useProducts.useCallback[getLowStockItems]": (p)=>p.stock <= p.minThreshold
            }["useProducts.useCallback[getLowStockItems]"]);
        }
    }["useProducts.useCallback[getLowStockItems]"], [
        products
    ]);
    return {
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        getLowStockItems
    };
}
_s(useProducts, "QRRqE5mzLgSaqjg9qqfHMoKyTgQ=");
function useDatabaseProducts(category) {
    _s1();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDatabaseProducts.useCallback[fetchProducts]": async ()=>{
            try {
                setLoading(true);
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getProducts(category);
                setProducts(data);
                setError(null);
            } catch (err) {
                console.error("[v0] Error fetching products:", err);
                setError(err instanceof Error ? err.message : "Failed to fetch products");
            } finally{
                setLoading(false);
            }
        }
    }["useDatabaseProducts.useCallback[fetchProducts]"], [
        category
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDatabaseProducts.useEffect": ()=>{
            fetchProducts();
        }
    }["useDatabaseProducts.useEffect"], [
        fetchProducts
    ]);
    return {
        products,
        loading,
        error,
        refetch: fetchProducts
    };
}
_s1(useDatabaseProducts, "B0cKykw2W1YWdIApKYQsi4osLNc=");
function useOrders() {
    _s2();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockOrders"]);
    const addOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOrders.useCallback[addOrder]": (order)=>{
            setOrders([
                ...orders,
                order
            ]);
        }
    }["useOrders.useCallback[addOrder]"], [
        orders
    ]);
    const updateOrderStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOrders.useCallback[updateOrderStatus]": (orderId, status)=>{
            setOrders(orders.map({
                "useOrders.useCallback[updateOrderStatus]": (o)=>o.id === orderId ? {
                        ...o,
                        status
                    } : o
            }["useOrders.useCallback[updateOrderStatus]"]));
        }
    }["useOrders.useCallback[updateOrderStatus]"], [
        orders
    ]);
    const getTodaysSales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOrders.useCallback[getTodaysSales]": ()=>{
            return orders.filter({
                "useOrders.useCallback[getTodaysSales]": (o)=>o.timestamp.startsWith("2025-11-11")
            }["useOrders.useCallback[getTodaysSales]"]).reduce({
                "useOrders.useCallback[getTodaysSales]": (sum, o)=>sum + o.total
            }["useOrders.useCallback[getTodaysSales]"], 0);
        }
    }["useOrders.useCallback[getTodaysSales]"], [
        orders
    ]);
    return {
        orders,
        addOrder,
        updateOrderStatus,
        getTodaysSales
    };
}
_s2(useOrders, "29x+Dd9ufQuCvcZ6aDSVB4DCRg8=");
function useDatabaseOrders() {
    _s3();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDatabaseOrders.useCallback[fetchOrders]": async ()=>{
            try {
                setLoading(true);
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getOrders();
                setOrders(data);
                setError(null);
            } catch (err) {
                console.error("[v0] Error fetching orders:", err);
                setError(err instanceof Error ? err.message : "Failed to fetch orders");
            } finally{
                setLoading(false);
            }
        }
    }["useDatabaseOrders.useCallback[fetchOrders]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDatabaseOrders.useEffect": ()=>{
            fetchOrders();
            // Poll every 2 seconds for real-time sync
            const interval = setInterval({
                "useDatabaseOrders.useEffect.interval": ()=>{
                    fetchOrders();
                }
            }["useDatabaseOrders.useEffect.interval"], 2000);
            return ({
                "useDatabaseOrders.useEffect": ()=>clearInterval(interval)
            })["useDatabaseOrders.useEffect"];
        }
    }["useDatabaseOrders.useEffect"], [
        fetchOrders
    ]);
    const createOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDatabaseOrders.useCallback[createOrder]": async (data)=>{
            try {
                const order = await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].createOrder(data);
                setOrders({
                    "useDatabaseOrders.useCallback[createOrder]": (prev)=>[
                            order,
                            ...prev
                        ]
                }["useDatabaseOrders.useCallback[createOrder]"]);
                return order;
            } catch (err) {
                console.error("[v0] Error creating order:", err);
                throw err;
            }
        }
    }["useDatabaseOrders.useCallback[createOrder]"], []);
    return {
        orders,
        loading,
        error,
        createOrder,
        refetch: fetchOrders
    };
}
_s3(useDatabaseOrders, "LVnVWSS0qyMZr0FAiwP6mi71Xf8=");
function useUsers() {
    _s4();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockUsers"]);
    const addUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUsers.useCallback[addUser]": (user)=>{
            const newUser = {
                ...user,
                id: Math.max(...users.map({
                    "useUsers.useCallback[addUser]": (u)=>u.id
                }["useUsers.useCallback[addUser]"]), 0) + 1
            };
            setUsers([
                ...users,
                newUser
            ]);
            return newUser;
        }
    }["useUsers.useCallback[addUser]"], [
        users
    ]);
    const updateUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUsers.useCallback[updateUser]": (id, updates)=>{
            setUsers(users.map({
                "useUsers.useCallback[updateUser]": (u)=>u.id === id ? {
                        ...u,
                        ...updates
                    } : u
            }["useUsers.useCallback[updateUser]"]));
        }
    }["useUsers.useCallback[updateUser]"], [
        users
    ]);
    const deleteUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUsers.useCallback[deleteUser]": (id)=>{
            setUsers(users.filter({
                "useUsers.useCallback[deleteUser]": (u)=>u.id !== id
            }["useUsers.useCallback[deleteUser]"]));
        }
    }["useUsers.useCallback[deleteUser]"], [
        users
    ]);
    return {
        users,
        addUser,
        updateUser,
        deleteUser
    };
}
_s4(useUsers, "sZywwlu9tfKsyPKao5Pg4FB1usY=");
function useInventoryLogs() {
    _s5();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInventoryLogs.useCallback[fetchLogs]": async ()=>{
            try {
                setLoading(true);
                const response = await fetch("/api/inventory");
                if (!response.ok) throw new Error("Failed to fetch inventory logs");
                const data = await response.json();
                setLogs(data || []);
            } catch (err) {
                console.error("[Inventory] Error fetching logs:", err);
            } finally{
                setLoading(false);
            }
        }
    }["useInventoryLogs.useCallback[fetchLogs]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInventoryLogs.useEffect": ()=>{
            fetchLogs();
            // Poll every 2 seconds for real-time inventory sync
            const interval = setInterval({
                "useInventoryLogs.useEffect.interval": ()=>{
                    fetchLogs();
                }
            }["useInventoryLogs.useEffect.interval"], 2000);
            return ({
                "useInventoryLogs.useEffect": ()=>clearInterval(interval)
            })["useInventoryLogs.useEffect"];
        }
    }["useInventoryLogs.useEffect"], [
        fetchLogs
    ]);
    const addLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useInventoryLogs.useCallback[addLog]": (log)=>{
            const newLog = {
                ...log,
                id: Math.max(...logs.map({
                    "useInventoryLogs.useCallback[addLog]": (l)=>l.id
                }["useInventoryLogs.useCallback[addLog]"]), 0) + 1
            };
            setLogs([
                ...logs,
                newLog
            ]);
        }
    }["useInventoryLogs.useCallback[addLog]"], [
        logs
    ]);
    return {
        logs,
        addLog,
        refetch: fetchLogs,
        loading
    };
}
_s5(useInventoryLogs, "+L2zhS7/AE8wsrMkHr0/qcOi9W8=");
function useActivityLogs() {
    _s6();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useActivityLogs.useCallback[fetchLogs]": async ()=>{
            try {
                setLoading(true);
                const response = await fetch("/api/activity-logs");
                if (!response.ok) throw new Error("Failed to fetch activity logs");
                const data = await response.json();
                setLogs(data || []);
            } catch (err) {
                console.error("[ActivityLogs] Error fetching logs:", err);
            } finally{
                setLoading(false);
            }
        }
    }["useActivityLogs.useCallback[fetchLogs]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActivityLogs.useEffect": ()=>{
            fetchLogs();
            // Poll every 5 seconds
            const interval = setInterval(fetchLogs, 5000);
            return ({
                "useActivityLogs.useEffect": ()=>clearInterval(interval)
            })["useActivityLogs.useEffect"];
        }
    }["useActivityLogs.useEffect"], [
        fetchLogs
    ]);
    const addLog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useActivityLogs.useCallback[addLog]": async (log)=>{
            try {
                await fetch("/api/activity-logs", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(log)
                });
                fetchLogs();
            } catch (e) {
                console.error(e);
            }
        }
    }["useActivityLogs.useCallback[addLog]"], [
        fetchLogs
    ]);
    return {
        logs,
        addLog,
        loading,
        refetch: fetchLogs
    };
}
_s6(useActivityLogs, "+L2zhS7/AE8wsrMkHr0/qcOi9W8=");
function useIngredients() {
    _s7();
    const [ingredients, setIngredients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fetchIngredients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useIngredients.useCallback[fetchIngredients]": async ()=>{
            try {
                setLoading(true);
                const res = await fetch("/api/ingredients");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setIngredients(data || []);
            } catch (e) {
                console.error("[useIngredients] error", e);
            } finally{
                setLoading(false);
            }
        }
    }["useIngredients.useCallback[fetchIngredients]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIngredients.useEffect": ()=>{
            fetchIngredients();
            const interval = setInterval(fetchIngredients, 5000);
            return ({
                "useIngredients.useEffect": ()=>clearInterval(interval)
            })["useIngredients.useEffect"];
        }
    }["useIngredients.useEffect"], [
        fetchIngredients
    ]);
    return {
        ingredients,
        loading,
        refetch: fetchIngredients
    };
}
_s7(useIngredients, "hNsnGCoNVmv2YVbhHxbJUsLZOBg=");
function useMenuSync() {
    _s8();
    const [menuItems, setMenuItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBaseMenuItems"])());
    const [categories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MENU_CATEGORIES"]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const getMenuByCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuSync.useCallback[getMenuByCategory]": (category)=>{
            if (category === "All") return menuItems;
            return menuItems.filter({
                "useMenuSync.useCallback[getMenuByCategory]": (item)=>item.category === category
            }["useMenuSync.useCallback[getMenuByCategory]"]);
        }
    }["useMenuSync.useCallback[getMenuByCategory]"], [
        menuItems
    ]);
    const getMenuItemById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuSync.useCallback[getMenuItemById]": (id)=>{
            return menuItems.find({
                "useMenuSync.useCallback[getMenuItemById]": (item)=>item.id === id
            }["useMenuSync.useCallback[getMenuItemById]"]);
        }
    }["useMenuSync.useCallback[getMenuItemById]"], [
        menuItems
    ]);
    const getAllCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuSync.useCallback[getAllCategories]": ()=>{
            return [
                "All",
                ...categories.map({
                    "useMenuSync.useCallback[getAllCategories]": (cat)=>cat.name
                }["useMenuSync.useCallback[getAllCategories]"])
            ];
        }
    }["useMenuSync.useCallback[getAllCategories]"], [
        categories
    ]);
    const getCategoryEmoji = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuSync.useCallback[getCategoryEmoji]": (categoryName)=>{
            const category = categories.find({
                "useMenuSync.useCallback[getCategoryEmoji].category": (cat)=>cat.name === categoryName
            }["useMenuSync.useCallback[getCategoryEmoji].category"]);
            return category?.emoji || "📌";
        }
    }["useMenuSync.useCallback[getCategoryEmoji]"], [
        categories
    ]);
    const getLowStockItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuSync.useCallback[getLowStockItems]": ()=>{
            return menuItems.filter({
                "useMenuSync.useCallback[getLowStockItems]": (item)=>item.stock <= item.minThreshold
            }["useMenuSync.useCallback[getLowStockItems]"]);
        }
    }["useMenuSync.useCallback[getLowStockItems]"], [
        menuItems
    ]);
    // Poll /api/products to reflect DB-backed stock changes across multiple clients
    const fetchStock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuSync.useCallback[fetchStock]": async ()=>{
            try {
                const res = await fetch("/api/products");
                if (!res.ok) return;
                const data = await res.json();
                // Merge DB stock into local menu items
                // We match by Name since IDs might differ between mock and DB
                const stockMap = new Map(data.map({
                    "useMenuSync.useCallback[fetchStock]": (p)=>[
                            p.name,
                            p.stock_quantity
                        ]
                }["useMenuSync.useCallback[fetchStock]"]));
                setMenuItems({
                    "useMenuSync.useCallback[fetchStock]": (prev)=>prev.map({
                            "useMenuSync.useCallback[fetchStock]": (mi)=>({
                                    ...mi,
                                    // If DB has stock, use it. Otherwise keep local.
                                    // Note: If DB returns 0, use 0.
                                    stock: stockMap.has(mi.name) ? stockMap.get(mi.name) : mi.stock
                                })
                        }["useMenuSync.useCallback[fetchStock]"])
                }["useMenuSync.useCallback[fetchStock]"]);
            } catch (e) {
                console.warn("[useMenuSync] poll error", e);
            }
        }
    }["useMenuSync.useCallback[fetchStock]"], []);
    // Listen for external updates (other panels / API actions)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMenuSync.useEffect": ()=>{
            const onMenuUpdate = {
                "useMenuSync.useEffect.onMenuUpdate": ()=>{
                    // Re-fetch stock instead of resetting to hardcoded defaults
                    fetchStock();
                }
            }["useMenuSync.useEffect.onMenuUpdate"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener("menu:update", onMenuUpdate);
            }
            // initial poll
            fetchStock();
            // interval poll
            const id = setInterval(fetchStock, 5000);
            return ({
                "useMenuSync.useEffect": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener("menu:update", onMenuUpdate);
                    }
                    clearInterval(id);
                }
            })["useMenuSync.useEffect"];
        }
    }["useMenuSync.useEffect"], [
        fetchStock
    ]);
    return {
        menuItems,
        categories,
        selectedCategory,
        setSelectedCategory,
        getMenuByCategory,
        getMenuItemById,
        getAllCategories,
        getCategoryEmoji,
        getLowStockItems,
        refresh: fetchStock
    };
}
_s8(useMenuSync, "fiAorhToT7wvGyusji6W/Kt3L0w=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/components/cashier-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CashierPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/menu-data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CashierPanel({ onLogout, currentUser }) {
    _s();
    const menuSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuSync"])();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cash");
    const [customerName, setCustomerName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showReceipt, setShowReceipt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPaymentModal, setShowPaymentModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastOrder, setLastOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [checkoutLoading, setCheckoutLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Size selection modal state
    const [showSizeModal, setShowSizeModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const categories = menuSync.getAllCategories();
    const filteredItems = menuSync.getMenuByCategory(selectedCategory).filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.stock > 0);
    const handleItemClick = (item)=>{
        setSelectedItem(item);
        setShowSizeModal(true);
    };
    const handleSizeSelect = (size)=>{
        if (selectedItem) {
            const cartItemId = `${selectedItem.id}-${size.size}`;
            const existing = cart.find((c)=>c.id === cartItemId);
            if (existing) {
                setCart(cart.map((c)=>c.id === cartItemId ? {
                        ...c,
                        quantity: c.quantity + 1
                    } : c));
            } else {
                setCart([
                    ...cart,
                    {
                        id: cartItemId,
                        productId: selectedItem.id,
                        name: selectedItem.name,
                        size: size.size,
                        price: size.price,
                        quantity: 1
                    }
                ]);
            }
        }
        setShowSizeModal(false);
        setSelectedItem(null);
    };
    const removeFromCart = (cartItemId)=>{
        setCart(cart.filter((c)=>c.id !== cartItemId));
    };
    const updateQuantity = (cartItemId, quantity)=>{
        if (quantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            setCart(cart.map((c)=>c.id === cartItemId ? {
                    ...c,
                    quantity
                } : c));
        }
    };
    const subtotal = cart.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    const handleCheckout = ()=>{
        if (cart.length === 0) return;
        if (paymentMethod === "gcash" || paymentMethod === "card") {
            setShowPaymentModal(true);
        } else {
            processOrder();
        }
    };
    const processOrder = async ()=>{
        if (cart.length === 0) return;
        setCheckoutLoading(true);
        setShowPaymentModal(false);
        try {
            const orderData = {
                cashier_id: currentUser?.id || 1,
                customer_name: customerName || "Walk-in Customer",
                total_amount: total,
                payment_method: paymentMethod,
                items: cart.map((item)=>({
                        product_id: item.productId,
                        name: `${item.name} (${item.size})`,
                        quantity: item.quantity,
                        price: item.price,
                        subtotal: item.price * item.quantity
                    }))
            };
            const order = await __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].createOrder(orderData);
            // Update local in-memory menu immediately so UI reflects new stock
            try {
                cart.forEach((item)=>{
                    if (item.productId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$menu$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deductStock"])(item.productId, item.quantity);
                });
                // notify other hooks/components to refresh their menu view
                if ("TURBOPACK compile-time truthy", 1) {
                    window.dispatchEvent(new CustomEvent("menu:update"));
                }
            } catch (e) {
                console.warn("[menu] local deduct failed:", e);
            }
            setLastOrder({
                ...order,
                items: cart,
                subtotal,
                tax,
                total
            });
            setShowReceipt(true);
            setCart([]);
            setCustomerName("");
        } catch (err) {
            console.error("[POS] Checkout error:", err);
            alert("Failed to complete order. Please try again.");
        } finally{
            setCheckoutLoading(false);
        }
    };
    if (showReceipt && lastOrder) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center shadow-xl animate-in fade-in zoom-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-primary mb-4 text-4xl",
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold mb-2 text-foreground",
                        children: "Order Completed!"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mb-6",
                        children: "Thank you for your purchase."
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "receipt-content",
                        className: "text-left bg-white text-black p-6 rounded-xl mb-6 shadow-inner font-mono text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center border-b border-black/10 pb-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold uppercase tracking-wider",
                                        children: "Sodalicious.Co"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Premium POS Terminal"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 text-xs space-y-1 text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Order No:"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: lastOrder.order_number
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Date:"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: new Date().toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Time:"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: new Date().toLocaleTimeString()
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Cashier:"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: currentUser.name
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Customer:"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: lastOrder.customer_name || "Walk-in"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-b border-black/10 py-4 mb-4 space-y-2",
                                children: lastOrder.items?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    item.quantity,
                                                    "x ",
                                                    item.name,
                                                    " (",
                                                    item.size,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 185,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: [
                                                    "₱",
                                                    (item.price * item.quantity).toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Subtotal"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "₱",
                                                    lastOrder.subtotal?.toFixed(2) || "0.00"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 194,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Tax (8%)"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "₱",
                                                    lastOrder.tax?.toFixed(2) || "0.00"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between border-t border-black/10 pt-2 mt-2 text-base font-bold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "TOTAL"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "₱",
                                                    lastOrder.total?.toFixed(2) || lastOrder.total_amount?.toFixed(2) || "0.00"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-xs pt-1 text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Payment (",
                                                    paymentMethod.toUpperCase(),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "₱",
                                                    lastOrder.total?.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-center text-xs text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Thank you for drinking Sodalicious!"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Please come again."
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const printContent = document.getElementById("receipt-content")?.innerHTML;
                                    const originalContent = document.body.innerHTML;
                                    if (printContent) {
                                        document.title = `Receipt-${lastOrder.order_number}`;
                                        window.print();
                                        // In a real app we might use a hidden iframe or specific print CSS
                                        // For this demo, basic window.print() is triggered which prints the whole page usually, 
                                        // but we can rely on user selecting "Selection" or just accept it's a demo.
                                        // A better way for simple React print:
                                        const printWindow = window.open('', '', 'height=600,width=400');
                                        if (printWindow) {
                                            printWindow.document.write('<html><head><title>Receipt</title><style>body{font-family:monospace; padding: 20px;}</style></head><body>');
                                            printWindow.document.write(printContent);
                                            printWindow.document.write('</body></html>');
                                            printWindow.document.close();
                                            printWindow.print();
                                        }
                                    }
                                },
                                className: "flex-1 py-3 bg-muted text-foreground border border-border rounded-lg font-bold hover:bg-muted/80 transition-all flex items-center justify-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "🖨️ Print Receipt"
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowReceipt(false),
                                className: "flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all",
                                children: "Close & New Order"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary text-primary-foreground border-b border-primary/20 p-4 flex justify-between items-center shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold tracking-tight",
                                children: "Sodalicious.Co"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-primary-foreground/80 font-medium",
                                children: "POS Terminal"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "px-4 py-2 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 p-4 h-[calc(100vh-80px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search products...",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        className: "w-full px-4 py-3 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2 overflow-x-auto pb-2",
                                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedCategory(cat),
                                                className: `px-4 py-2 rounded-lg whitespace-nowrap font-semibold transition-all ${selectedCategory === cat ? "bg-primary text-primary-foreground shadow-md" : "bg-muted text-foreground hover:bg-muted/80 border border-border"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mr-2",
                                                        children: menuSync.getCategoryEmoji(cat)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 19
                                                    }, this),
                                                    cat
                                                ]
                                            }, cat, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto grid grid-cols-4 gap-3",
                                children: filteredItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleItemClick(item),
                                        disabled: item.stock <= 0,
                                        className: "bg-card border border-border rounded-xl p-4 hover:shadow-lg hover:border-primary/50 transition-all text-left group disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-3 flex items-center justify-center border border-primary/20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl",
                                                    children: menuSync.getCategoryEmoji(item.category)
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 307,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground mt-1",
                                                children: [
                                                    item.sizes.length,
                                                    " size",
                                                    item.sizes.length !== 1 ? "s" : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs font-semibold px-2 py-1 rounded-lg mt-2 ${item.stock <= item.minThreshold ? "bg-red-100 text-red-700" : "bg-muted text-muted-foreground"}`,
                                                children: [
                                                    item.stock,
                                                    " left"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-80 bg-card border border-border rounded-2xl flex flex-col shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 border-b border-border bg-primary text-primary-foreground rounded-t-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold",
                                    children: "Cart"
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Customer name (optional)",
                                    value: customerName,
                                    onChange: (e)=>setCustomerName(e.target.value),
                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto p-4 space-y-2",
                                children: cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-muted-foreground py-8 font-medium",
                                    children: "Cart is empty"
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 343,
                                    columnNumber: 15
                                }, this) : cart.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-muted border border-border p-3 rounded-lg hover:bg-muted/80 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-sm text-foreground",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-muted-foreground",
                                                                children: item.size
                                                            }, void 0, false, {
                                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeFromCart(item.id),
                                                        className: "text-destructive hover:text-destructive/80 text-sm font-bold",
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 347,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1 bg-background rounded-lg p-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updateQuantity(item.id, item.quantity - 1),
                                                                className: "px-2 py-1 bg-card rounded text-sm font-bold text-foreground hover:bg-muted transition-colors",
                                                                children: "−"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                                lineNumber: 361,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-3 py-1 text-sm font-bold text-foreground",
                                                                children: item.quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                                lineNumber: 367,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updateQuantity(item.id, item.quantity + 1),
                                                                className: "px-2 py-1 bg-card rounded text-sm font-bold text-foreground hover:bg-muted transition-colors",
                                                                children: "+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                                lineNumber: 368,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-sm text-primary",
                                                        children: [
                                                            "₱",
                                                            (item.price * item.quantity).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-t border-border space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Subtotal:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "₱",
                                                            subtotal.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 384,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Tax (8%):"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "₱",
                                                            tax.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 388,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-lg font-bold text-foreground border-t border-border pt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Total:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary",
                                                        children: [
                                                            "₱",
                                                            total.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 383,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-2 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setPaymentMethod("cash"),
                                                className: `py-2 px-1 rounded-lg text-sm font-bold border transition-all ${paymentMethod === "cash" ? "bg-primary text-primary-foreground border-primary" : "bg-background text-foreground border-border hover:bg-muted"}`,
                                                children: "💵 Cash"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 400,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setPaymentMethod("gcash"),
                                                className: `py-2 px-1 rounded-lg text-sm font-bold border transition-all ${paymentMethod === "gcash" ? "bg-blue-600 text-white border-blue-600" : "bg-background text-foreground border-border hover:bg-muted"}`,
                                                children: "📱 GCash"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setPaymentMethod("card"),
                                                className: `py-2 px-1 rounded-lg text-sm font-bold border transition-all ${paymentMethod === "card" ? "bg-purple-600 text-white border-purple-600" : "bg-background text-foreground border-border hover:bg-muted"}`,
                                                children: "💳 Card"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                lineNumber: 418,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCheckout,
                                        disabled: cart.length === 0 || checkoutLoading,
                                        className: "w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: checkoutLoading ? "Processing..." : `Checkout (₱${total.toFixed(2)})`
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 429,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                        lineNumber: 326,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            showSizeModal && selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold mb-2 text-foreground",
                            children: selectedItem.name
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mb-6",
                            children: selectedItem.description
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                            lineNumber: 445,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 mb-6",
                            children: selectedItem.sizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSizeSelect(size),
                                    className: "w-full py-3 px-4 bg-muted hover:bg-muted/80 border border-border rounded-lg font-semibold text-foreground transition-all flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: size.size
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                            lineNumber: 454,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary font-bold",
                                            children: [
                                                "₱",
                                                size.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                            lineNumber: 455,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, size.size, true, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 449,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                            lineNumber: 447,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setShowSizeModal(false);
                                setSelectedItem(null);
                            },
                            className: "w-full py-2 px-4 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-all",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                            lineNumber: 460,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                    lineNumber: 443,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                lineNumber: 442,
                columnNumber: 9
            }, this),
            showPaymentModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-foreground",
                                    children: paymentMethod === "gcash" ? "GCash Payment" : "Card Payment"
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: [
                                        "Total to Pay: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-primary",
                                            children: [
                                                "₱",
                                                total.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                            lineNumber: 481,
                                            columnNumber: 66
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                            lineNumber: 477,
                            columnNumber: 13
                        }, this),
                        paymentMethod === "gcash" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-xl flex items-center justify-center border border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-48 h-48 bg-gray-900 flex items-center justify-center text-white text-xs text-center p-2",
                                        children: "[Promotional QR Code Placeholder]"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                        lineNumber: 488,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 486,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-foreground",
                                            children: "Reference Number"
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                            lineNumber: 493,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "e.g. 1234 5678 9012",
                                            className: "w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary outline-none",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                            lineNumber: 494,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 492,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                            lineNumber: 485,
                            columnNumber: 15
                        }, this),
                        paymentMethod === "card" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-8 bg-yellow-400 rounded-md opacity-80"
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: "CREDIT"
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                            lineNumber: 507,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-mono text-xl tracking-widest mb-4",
                                            children: "•••• •••• •••• ••••"
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                            lineNumber: 511,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xs opacity-80",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "CARD HOLDER"
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "EXPIRES"
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                            lineNumber: 512,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 506,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-semibold text-foreground",
                                            children: "Card Number"
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                            lineNumber: 518,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "xxxx xxxx xxxx xxxx",
                                            className: "w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary outline-none font-mono",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                            lineNumber: 519,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 517,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                            lineNumber: 505,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowPaymentModal(false),
                                    className: "flex-1 py-3 bg-muted text-foreground border border-border rounded-lg font-bold hover:bg-muted/80 transition-all",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 530,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: processOrder,
                                    className: "flex-1 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg",
                                    children: paymentMethod === "gcash" ? "Confirm Payment" : "Process Card"
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                            lineNumber: 529,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                    lineNumber: 476,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/cashier-panel.tsx",
                lineNumber: 475,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/cashier-panel.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s(CashierPanel, "//f57hxG5pM6+dDjK8o8wI2Q6JI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuSync"]
    ];
});
_c = CashierPanel;
var _c;
__turbopack_context__.k.register(_c, "CashierPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/components/login-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function LoginPanel({ onLogin }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleLogin = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!response.ok) {
                const contentType = response.headers.get("content-type");
                let errorMessage = "Login failed";
                if (contentType?.includes("application/json")) {
                    try {
                        const data = await response.json();
                        errorMessage = data.error || errorMessage;
                    } catch  {
                        errorMessage = `Server error (${response.status})`;
                    }
                } else {
                    errorMessage = `Server error (${response.status})`;
                }
                setError(errorMessage);
                return;
            }
            const data = await response.json();
            // Map role names for compatibility
            const roleMap = {
                cashier: "cashier",
                manager: "manager"
            };
            onLogin(roleMap[data.user.role] || "cashier", data.user);
            setEmail("");
            setPassword("");
        } catch (err) {
            setError("Network error. Please try again.");
            console.error("[v0] Login error:", err);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card rounded-2xl shadow-2xl p-8 w-full max-w-md border border-border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-foreground mb-2 tracking-tight",
                            children: "Sodalicious.Co"
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/login-panel.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-sm font-medium",
                            children: "Premium POS System"
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/login-panel.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/login-panel.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleLogin,
                    className: "space-y-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "Email",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            className: "w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground transition-all",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/login-panel.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            placeholder: "Password",
                            value: password,
                            onChange: (e)=>setPassword(e.target.value),
                            className: "w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground transition-all",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/login-panel.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm font-medium",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/login-panel.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 transition-all shadow-md hover:shadow-lg",
                            children: loading ? "Logging in..." : "Login"
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/login-panel.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/login-panel.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 pt-4 border-t border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs text-muted-foreground font-medium mb-3",
                            children: "Demo Credentials:"
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/login-panel.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-muted-foreground space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold",
                                    children: "Cashier: cashier@sodalicious.com / 123456"
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/login-panel.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold",
                                    children: "Manager: manager@sodalicious.com / 123456"
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/login-panel.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sodalicious/components/login-panel.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/login-panel.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sodalicious/components/login-panel.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sodalicious/components/login-panel.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(LoginPanel, "LUirqFP7xFLXiV3PPHJSG0buCO8=");
_c = LoginPanel;
var _c;
__turbopack_context__.k.register(_c, "LoginPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/components/manager/product-management.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProductManagement({ products }) {
    _s();
    const menuSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuSync"])();
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        price: 0,
        category: "Hot Coffee",
        stock: 0,
        minThreshold: 5,
        description: "",
        size: "M"
    });
    const handleSubmit = ()=>{
        if (editingId) {
            products.updateProduct(parseInt(editingId), formData);
            setEditingId(null);
        } else {
            products.addProduct(formData);
        }
        setShowForm(false);
        setFormData({
            name: "",
            price: 0,
            category: "Hot Coffee",
            stock: 0,
            minThreshold: 5,
            description: "",
            size: "M"
        });
    };
    const handleEdit = (product)=>{
        setFormData(product);
        setEditingId(String(product.id));
        setShowForm(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold",
                        children: "Products"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowForm(!showForm);
                            setEditingId(null);
                            setFormData({
                                name: "",
                                price: 0,
                                category: "Hot Coffee",
                                stock: 0,
                                minThreshold: 5,
                                description: "",
                                size: "M"
                            });
                        },
                        className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
                        children: showForm ? "Cancel" : "Add Product"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4",
                        children: editingId ? "Edit Product" : "Add New Product"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Product Name",
                                value: formData.name,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        name: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Price",
                                value: formData.price,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        price: Number.parseFloat(e.target.value)
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: formData.category,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        category: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary",
                                children: menuSync.getAllCategories().map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: cat,
                                        children: cat
                                    }, cat, false, {
                                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Size (S/M/L/R)",
                                value: formData.size,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        size: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Stock",
                                value: formData.stock,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        stock: Number.parseInt(e.target.value)
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Min Threshold",
                                value: formData.minThreshold,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        minThreshold: Number.parseInt(e.target.value)
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Description",
                                value: formData.description || "",
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        description: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary col-span-2"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmit,
                        className: "mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
                        children: editingId ? "Update Product" : "Add Product"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-accent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Size"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Price"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Min Threshold"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-border",
                            children: menuSync.menuItems.map((item)=>{
                                const firstSize = item.sizes?.[0];
                                const displaySize = firstSize?.size || "—";
                                const displayPrice = firstSize?.price || 0;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-accent/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                            lineNumber: 161,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: displaySize
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: [
                                                "₱",
                                                displayPrice
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: item.stock <= item.minThreshold ? "text-yellow-600 font-bold" : "",
                                                children: item.stock
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: item.minThreshold
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleEdit(item),
                                                    className: "px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>products.deleteProduct(parseInt(item.id)),
                                                    className: "px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                                    lineNumber: 160,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/product-management.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/manager/product-management.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(ProductManagement, "DvuFvL1mhe7DcOe9Au70KXXehqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuSync"]
    ];
});
_c = ProductManagement;
var _c;
__turbopack_context__.k.register(_c, "ProductManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/components/manager/inventory-management.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InventoryManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function InventoryManagement({ products, inventoryLogs }) {
    _s();
    const { ingredients, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIngredients"])();
    const [showAdjustForm, setShowAdjustForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [adjustingId, setAdjustingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adjustmentData, setAdjustmentData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        quantity: 0,
        type: "restock",
        reason: ""
    });
    const lowStockItems = ingredients.filter((i)=>Number(i.stock_quantity) <= Number(i.reorder_level));
    const handleAdjustment = async ()=>{
        if (adjustingId) {
            const item = ingredients.find((i)=>i.id === adjustingId);
            if (item) {
                const change = adjustmentData.type === "restock" ? adjustmentData.quantity : -adjustmentData.quantity;
                try {
                    const response = await fetch("/api/inventory", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            ingredient_id: item.id,
                            user_id: 1,
                            log_type: adjustmentData.type,
                            quantity_changed: change,
                            reason: adjustmentData.reason
                        })
                    });
                    if (response.ok) {
                        refetch();
                        inventoryLogs.refetch();
                    } else {
                        console.error("Failed to update inventory");
                    }
                } catch (e) {
                    console.error(e);
                }
                setAdjustingId(null);
                setShowAdjustForm(false);
                setAdjustmentData({
                    quantity: 0,
                    type: "restock",
                    reason: ""
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-8",
                children: "Ingredient Inventory Management"
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            lowStockItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold text-yellow-800",
                        children: "⚠ Low Stock Alert"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-yellow-700",
                        children: [
                            lowStockItems.length,
                            " ingredients need restocking"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            showAdjustForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4",
                        children: "Adjust Stock"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: adjustmentData.type,
                                onChange: (e)=>setAdjustmentData({
                                        ...adjustmentData,
                                        type: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "restock",
                                        children: "Restock"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "damage",
                                        children: "Damage"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "waste",
                                        children: "Waste"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Quantity",
                                value: adjustmentData.quantity,
                                onChange: (e)=>setAdjustmentData({
                                        ...adjustmentData,
                                        quantity: Number.parseInt(e.target.value)
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Reason",
                                value: adjustmentData.reason,
                                onChange: (e)=>setAdjustmentData({
                                        ...adjustmentData,
                                        reason: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background col-span-2"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-x-2 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAdjustment,
                                className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
                                children: "Apply"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setShowAdjustForm(false);
                                    setAdjustingId(null);
                                },
                                className: "px-4 py-2 border border-border rounded-md hover:bg-accent",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-accent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Ingredient"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Unit"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Current Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Reorder Level"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-border",
                            children: ingredients.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-accent/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 font-medium",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: item.unit
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: `px-6 py-4 font-bold ${Number(item.stock_quantity) <= Number(item.reorder_level) ? "text-red-600" : "text-foreground"}`,
                                            children: item.stock_quantity
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: item.reorder_level
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-3 py-1 rounded text-sm font-bold ${Number(item.stock_quantity) <= Number(item.reorder_level) ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`,
                                                children: Number(item.stock_quantity) <= Number(item.reorder_level) ? "Low" : "OK"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setAdjustingId(item.id);
                                                    setShowAdjustForm(true);
                                                },
                                                className: "px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200",
                                                children: "Adjust"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            inventoryLogs.logs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4",
                        children: "Inventory History"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border border-border rounded-lg overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-accent",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left font-bold",
                                                children: "Ingredient"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left font-bold",
                                                children: "Type"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left font-bold",
                                                children: "Qty Changed"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left font-bold",
                                                children: "Reason"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left font-bold",
                                                children: "User"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                lineNumber: 173,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-4 text-left font-bold",
                                                children: "Timestamp"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                lineNumber: 174,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                        lineNumber: 168,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-border",
                                    children: inventoryLogs.logs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-accent/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: log.ingredient_name || log.productName || "Unknown"
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 capitalize",
                                                    children: log.log_type || log.type
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: log.quantity_changed || log.quantity
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: log.reason || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: log.user_name || log.userName
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4",
                                                    children: log.created_at ? new Date(log.created_at).toLocaleString() : log.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, log.id, true, {
                                            fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                            lineNumber: 179,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                            lineNumber: 166,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
                lineNumber: 163,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/manager/inventory-management.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(InventoryManagement, "rVMvD3GtvucAIj2zi3bzWPtCV3k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIngredients"]
    ];
});
_c = InventoryManagement;
var _c;
__turbopack_context__.k.register(_c, "InventoryManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/components/manager/order-management.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function OrderManagement({ orders }) {
    _s();
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [expandedOrderId, setExpandedOrderId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Filter to show only Completed orders by default if requested to "remove pending/preparing" view
    // Or just filter out pending/preparing from the view.
    const filteredOrders = orders.orders.filter((o)=>{
        const status = (o.order_status ?? o.status ?? "").toLowerCase();
        return status === "completed";
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-8",
                children: "Order History"
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-accent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Order ID"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-border",
                            children: filteredOrders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-accent/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 font-bold",
                                            children: order.id
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: order.customer_name ?? order.customer ?? "—"
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: [
                                                "₱",
                                                Number(order.total_amount ?? order.total ?? 0).toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 rounded text-sm font-bold bg-green-100 text-green-700 capitalize",
                                                children: order.order_status ?? order.status ?? "Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: order.created_at ?? order.timestamp ?? "-"
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setExpandedOrderId(expandedOrderId === String(order.id) ? null : String(order.id)),
                                                className: "px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200",
                                                children: expandedOrderId === String(order.id) ? "Hide" : "View"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, order.id, true, {
                                    fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            expandedOrderId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 bg-card border border-border rounded-lg p-6",
                children: (()=>{
                    const order = orders.orders.find((o)=>String(o.id) === expandedOrderId);
                    return order ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4",
                                children: [
                                    "Order Details: ",
                                    order.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                lineNumber: 69,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Customer"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold",
                                                children: order.customer_name ?? order.customer ?? "—"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 73,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 71,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Cashier"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 76,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold",
                                                children: order.cashier_name ?? order.cashierName ?? "N/A"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 77,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 75,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Payment Method"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold capitalize",
                                                children: order.payment_method ?? order.paymentMethod ?? "—"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 79,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-muted-foreground",
                                                children: "Date/Time"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 84,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold",
                                                children: order.created_at ?? order.timestamp ?? "-"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 85,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                lineNumber: 70,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-border pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold mb-3",
                                        children: "Items"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 89,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: Array.isArray(order.items) && order.items.length > 0 ? order.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            item.quantity ?? item.qty,
                                                            "x ",
                                                            item.name ?? item.product_name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "₱",
                                                            Number((item.price ?? item.unit_price ?? 0) * (item.quantity ?? item.qty ?? 0)).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, item.id ?? `${item.name}-${item.quantity}`, true, {
                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                lineNumber: 93,
                                                columnNumber: 25
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: "No item details available."
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                            lineNumber: 101,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-border mt-4 pt-4 space-y-1 font-bold",
                                        children: (()=>{
                                            const items = Array.isArray(order.items) ? order.items : [];
                                            const subtotal = items.reduce((s, it)=>s + Number((it.price ?? it.unit_price ?? 0) * (it.quantity ?? it.qty ?? 0)), 0);
                                            const displayedSubtotal = subtotal > 0 ? subtotal : Number(order.subtotal ?? order.sub_total ?? 0);
                                            const tax = Number(order.tax ?? order.tax_amount ?? 0);
                                            const total = Number(order.total_amount ?? order.total ?? displayedSubtotal + tax);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Subtotal:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "₱",
                                                                    displayedSubtotal.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Tax:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "₱",
                                                                    tax.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Total:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "₱",
                                                                    total.toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true);
                                        })()
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                        lineNumber: 104,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                                lineNumber: 88,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                        lineNumber: 68,
                        columnNumber: 15
                    }, this) : null;
                })()
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/order-management.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/manager/order-management.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(OrderManagement, "/EOpSMo4k+pxt0kfWc0h1QqOQR0=");
_c = OrderManagement;
var _c;
__turbopack_context__.k.register(_c, "OrderManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/components/manager/user-management.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function UserManagement({ users }) {
    _s();
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        username: "",
        password: "",
        role: "cashier",
        status: "Active"
    });
    const handleSubmit = ()=>{
        if (editingId) {
            users.updateUser(editingId, formData);
            setEditingId(null);
        } else {
            users.addUser(formData);
        }
        setShowForm(false);
        setFormData({
            name: "",
            username: "",
            password: "",
            role: "cashier",
            status: "Active"
        });
    };
    const handleEdit = (user)=>{
        setFormData({
            name: user.name,
            username: user.username,
            password: "",
            role: user.role,
            status: user.status
        });
        setEditingId(user.id);
        setShowForm(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold",
                        children: "User Management"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setShowForm(!showForm);
                            setEditingId(null);
                            setFormData({
                                name: "",
                                username: "",
                                password: "",
                                role: "cashier",
                                status: "Active"
                            });
                        },
                        className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
                        children: showForm ? "Cancel" : "Add User"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4",
                        children: editingId ? "Edit User" : "Add New User"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Full Name",
                                value: formData.name,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        name: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Username",
                                value: formData.username,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        username: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                placeholder: "Password",
                                value: formData.password,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        password: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: formData.role,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        role: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "cashier",
                                        children: "Cashier"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "manager",
                                        children: "Manager"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "inventory",
                                        children: "Inventory Officer"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: formData.status,
                                onChange: (e)=>setFormData({
                                        ...formData,
                                        status: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded bg-background col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Active",
                                        children: "Active"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "Inactive",
                                        children: "Inactive"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSubmit,
                        className: "mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
                        children: editingId ? "Update User" : "Add User"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-accent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Username"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Role"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Last Login"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-border",
                            children: users.users.filter((u)=>u.role !== 'manager').map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-accent/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: user.name
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: user.username
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 capitalize",
                                            children: user.role
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-3 py-1 rounded text-sm font-bold ${user.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`,
                                                children: user.status
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: user.lastLogin || "N/A"
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                            lineNumber: 125,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleEdit(user),
                                                    className: "px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200",
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>users.deleteUser(user.id),
                                                    className: "px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200",
                                                    children: "Delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, user.id, true, {
                                    fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/user-management.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/manager/user-management.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(UserManagement, "tx0mIviIZNvUeXf74zg0hCtQD8Q=");
_c = UserManagement;
var _c;
__turbopack_context__.k.register(_c, "UserManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/components/manager/reports.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reports
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Reports() {
    _s();
    const menuSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuSync"])();
    const [reportType, setReportType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("daily");
    const [dateRange, setDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        start: "",
        end: ""
    });
    const [apiReport, setApiReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchReport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Reports.useCallback[fetchReport]": async ()=>{
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams();
                params.set("type", reportType);
                if (dateRange.start && dateRange.end) {
                    params.set("start", dateRange.start);
                    params.set("end", dateRange.end);
                }
                const res = await fetch(`/api/reports?${params.toString()}`);
                if (!res.ok) throw new Error(`Status ${res.status}`);
                const json = await res.json();
                // Coerce numeric fields to numbers to avoid toFixed issues
                if (json?.totals) {
                    json.totals.totalOrders = Number(json.totals.totalOrders || 0);
                    json.totals.totalSales = Number(json.totals.totalSales || 0);
                }
                setApiReport(json);
            } catch (err) {
                console.error("[Reports] fetch error", err);
                setError("Failed to fetch report; showing local summary");
                setApiReport(null);
            } finally{
                setLoading(false);
            }
        }
    }["Reports.useCallback[fetchReport]"], [
        reportType,
        dateRange.start,
        dateRange.end
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reports.useEffect": ()=>{
            // initial fetch
            fetchReport();
            // poll every 5 seconds to keep reports in sync with cashier actions
            const id = setInterval({
                "Reports.useEffect.id": ()=>{
                    fetchReport();
                }
            }["Reports.useEffect.id"], 5000);
            return ({
                "Reports.useEffect": ()=>clearInterval(id)
            })["Reports.useEffect"];
        }
    }["Reports.useEffect"], [
        fetchReport
    ]);
    // Local fallback summary when API is unavailable — this keeps UI responsive
    const fallback = {
        title: reportType === "inventory" ? "Inventory Report" : "Daily Sales Report",
        totalSales: apiReport?.totals?.totalSales ?? 0,
        totalOrders: apiReport?.totals?.totalOrders ?? 0,
        itemsSold: apiReport?.breakdown ? apiReport.breakdown.reduce((s, b)=>s + Number(b.orders_count || 0), 0) : 0,
        paymentMethods: {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-8",
                children: "Reports"
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
                children: [
                    {
                        id: "daily",
                        label: "Daily Sales Report"
                    },
                    {
                        id: "weekly",
                        label: "Weekly Sales Report"
                    },
                    {
                        id: "monthly",
                        label: "Monthly Sales Report"
                    },
                    {
                        id: "payment",
                        label: "Payment Summary"
                    },
                    {
                        id: "inventory",
                        label: "Inventory Report"
                    }
                ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setReportType(r.id),
                        className: `p-6 border rounded-lg hover:bg-accent transition-colors text-left ${reportType === r.id ? "border-primary bg-primary/10" : "border-border"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold mb-2",
                                children: r.label
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Generate and view report"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, r.id, true, {
                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-lg p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold",
                                children: apiReport ? apiReport.meta?.type || "Report" : fallback.title
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Refreshing..."
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>fetchReport(),
                                        className: "px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90",
                                        children: "Refresh"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    reportType !== "inventory" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-blue-50 rounded-lg border border-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Total Sales"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-blue-600",
                                        children: [
                                            "₱",
                                            Number(apiReport?.totals?.totalSales ?? fallback.totalSales).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-green-50 rounded-lg border border-green-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Total Orders"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-green-600",
                                        children: apiReport?.totals?.totalOrders ?? fallback.totalOrders
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-purple-50 rounded-lg border border-purple-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Items Sold"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-purple-600",
                                        children: fallback.itemsSold
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-orange-50 rounded-lg border border-orange-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Avg Transaction"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-orange-600",
                                        children: [
                                            "₱",
                                            (Number(apiReport?.totals?.totalSales ?? fallback.totalSales) / Math.max(1, Number(apiReport?.totals?.totalOrders ?? fallback.totalOrders))).toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2 mt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold mb-4",
                                        children: "Top Products"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            (apiReport?.topProducts || []).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: p.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-muted-foreground",
                                                            children: [
                                                                p.qty_sold,
                                                                " — ₱",
                                                                Number(p.revenue || 0).toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, p.id, true, {
                                                    fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)),
                                            (!apiReport?.topProducts || apiReport.topProducts.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-muted-foreground",
                                                children: "No product data"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                                lineNumber: 133,
                                                columnNumber: 85
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    reportType === "inventory" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-blue-50 rounded-lg border border-blue-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Total Products"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-blue-600",
                                        children: apiReport?.topProducts?.length ?? 0
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-green-50 rounded-lg border border-green-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "In Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-green-600",
                                        children: 0
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-yellow-50 rounded-lg border border-yellow-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Low Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-yellow-600",
                                        children: 0
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-red-50 rounded-lg border border-red-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Out of Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl font-bold text-red-600",
                                        children: 0
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-sm text-destructive",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/reports.tsx",
                        lineNumber: 160,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager/reports.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/manager/reports.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(Reports, "y4yWsUJQhfYyKe0Imt2hK0Qprnc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuSync"]
    ];
});
_c = Reports;
var _c;
__turbopack_context__.k.register(_c, "Reports");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/components/manager/dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManagerDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ManagerDashboard({ products, orders, inventoryLogs }) {
    _s();
    const menuSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuSync"])();
    // Calculate today's sales from database orders
    const todaysSales = (orders.orders || []).filter((o)=>{
        const orderDate = new Date(o.created_at).toDateString();
        const today = new Date().toDateString();
        return orderDate === today;
    }).reduce((sum, o)=>sum + (Number(o.total_amount) || 0), 0);
    const totalOrders = (orders.orders || []).filter((o)=>{
        const orderDate = new Date(o.created_at).toDateString();
        const today = new Date().toDateString();
        return orderDate === today;
    }).length;
    const lowStockItems = menuSync.getLowStockItems();
    const topSelling = menuSync.menuItems.slice().sort((a, b)=>b.stock - a.stock).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-8",
                children: "Dashboard"
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Total Sales",
                        value: `₱${Number(todaysSales || 0).toFixed(2)}`,
                        color: "bg-blue-100"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Total Orders",
                        value: totalOrders.toString(),
                        color: "bg-green-100"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Low Stock Items",
                        value: lowStockItems.length.toString(),
                        color: "bg-yellow-100"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                        label: "Total Products",
                        value: menuSync.menuItems.length.toString(),
                        color: "bg-purple-100"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border border-border rounded-lg p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Top Selling Products"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: topSelling.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center pb-3 border-b border-border last:border-b-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            "Stock: ",
                                                            item.stock
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-lg text-primary",
                                                children: [
                                                    item.sizes.length,
                                                    " sizes"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border border-border rounded-lg p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Recent Orders"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: (orders.orders || []).slice(0, 3).map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center pb-3 border-b border-border last:border-b-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold",
                                                        children: order.order_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: order.customer_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold",
                                                        children: [
                                                            "₱",
                                                            Number(order.total_amount || 0).toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs px-2 py-1 bg-green-100 text-green-700 rounded",
                                                        children: order.order_status
                                                    }, void 0, false, {
                                                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, order.id, true, {
                                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border border-border rounded-lg p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Low Stock Alert"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            lowStockItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-muted-foreground",
                                children: "All items are well-stocked"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: lowStockItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 bg-yellow-50 border border-yellow-200 rounded",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-sm",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-yellow-700",
                                                children: [
                                                    "Stock: ",
                                                    item.stock,
                                                    " / Threshold: ",
                                                    item.minThreshold
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-card border border-border rounded-lg p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold mb-4",
                                children: "Payment Methods"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    "Cash",
                                    "GCash",
                                    "Card",
                                    "E-wallet"
                                ].map((method)=>{
                                    const count = orders.orders.filter((o)=>{
                                        const pm = (o.payment_method ?? o.paymentMethod ?? "").toString().toLowerCase().replace("-", "");
                                        return pm === method.toLowerCase().replace("-", "");
                                    }).length;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: method
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: [
                                                    count,
                                                    " transactions"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, method, true, {
                                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(ManagerDashboard, "g8zJ7p+Ilc8BfQwPyUYqq9MHLPY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuSync"]
    ];
});
_c = ManagerDashboard;
function StatCard({ label, value, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${color} p-6 rounded-lg`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-700 font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-3xl font-bold text-gray-900 mt-2",
                children: value
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/manager/dashboard.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_c1 = StatCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ManagerDashboard");
__turbopack_context__.k.register(_c1, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/components/manager-dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManagerPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$product$2d$management$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/components/manager/product-management.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$inventory$2d$management$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/components/manager/inventory-management.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$order$2d$management$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/components/manager/order-management.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$user$2d$management$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/components/manager/user-management.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$reports$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/components/manager/reports.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/components/manager/dashboard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ManagerPanel({ onLogout, currentUser }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])();
    const orders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDatabaseOrders"])();
    const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUsers"])();
    const inventoryLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryLogs"])();
    const activityLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogs"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 bg-sidebar border-r border-sidebar-border flex flex-col shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b border-sidebar-border bg-sidebar-primary/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-sidebar-foreground tracking-tight",
                                children: "Sodalicious"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-sidebar-foreground/70 font-medium",
                                children: "Manager Portal"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 p-4 space-y-1",
                        children: [
                            {
                                id: "dashboard",
                                label: "Dashboard",
                                icon: "📊"
                            },
                            {
                                id: "products",
                                label: "Products",
                                icon: "📦"
                            },
                            {
                                id: "inventory",
                                label: "Inventory",
                                icon: "📦"
                            },
                            {
                                id: "orders",
                                label: "Orders",
                                icon: "🛒"
                            },
                            {
                                id: "reports",
                                label: "Reports",
                                icon: "📈"
                            },
                            {
                                id: "users",
                                label: "Users",
                                icon: "👥"
                            },
                            {
                                id: "logs",
                                label: "Activity Logs",
                                icon: "📋"
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `w-full text-left px-4 py-3 rounded-lg transition-all font-semibold flex items-center gap-3 ${activeTab === tab.id ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md" : "text-sidebar-foreground hover:bg-sidebar-accent"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: tab.icon
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    tab.label
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "m-4 px-4 py-3 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 font-semibold transition-all shadow-md",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto",
                children: [
                    activeTab === "dashboard" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        products: products,
                        orders: orders,
                        inventoryLogs: inventoryLogs
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                        lineNumber: 69,
                        columnNumber: 39
                    }, this),
                    activeTab === "products" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$product$2d$management$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        products: products
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                        lineNumber: 70,
                        columnNumber: 38
                    }, this),
                    activeTab === "inventory" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$inventory$2d$management$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        products: products,
                        inventoryLogs: inventoryLogs
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                        lineNumber: 71,
                        columnNumber: 39
                    }, this),
                    activeTab === "orders" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$order$2d$management$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        orders: orders
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                        lineNumber: 72,
                        columnNumber: 36
                    }, this),
                    activeTab === "reports" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$reports$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                        lineNumber: 73,
                        columnNumber: 37
                    }, this),
                    activeTab === "users" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2f$user$2d$management$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        users: users
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                        lineNumber: 74,
                        columnNumber: 35
                    }, this),
                    activeTab === "logs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActivityLogs, {
                        logs: activityLogs.logs
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                        lineNumber: 75,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ManagerPanel, "50KGrk34rzs2eiSoZsZFSSkZRjE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDatabaseOrders"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUsers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryLogs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActivityLogs"]
    ];
});
_c = ManagerPanel;
function ActivityLogs({ logs }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-8 text-foreground",
                children: "Activity Logs"
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-xl overflow-hidden shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-primary/5 border-b border-border",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Action"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Details"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "User"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Timestamp"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-border",
                            children: logs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-primary/5 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 font-bold text-foreground capitalize",
                                            children: log.entity_type
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-foreground capitalize",
                                            children: log.action_type || log.action
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-foreground",
                                            children: typeof log.details === 'string' ? log.details : JSON.stringify(log.details)
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-foreground",
                                            children: log.user_name || "System"
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-muted-foreground",
                                            children: log.created_at ? new Date(log.created_at).toLocaleString() : ""
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, log.id, true, {
                                    fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/manager-dashboard.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c1 = ActivityLogs;
var _c, _c1;
__turbopack_context__.k.register(_c, "ManagerPanel");
__turbopack_context__.k.register(_c1, "ActivityLogs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/components/inventory-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InventoryPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/lib/hooks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function InventoryPanel({ onLogout, currentUser }) {
    _s();
    const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"])();
    const inventoryLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryLogs"])();
    const menuSync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuSync"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("inventory");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 bg-sidebar border-r border-sidebar-border flex flex-col shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b border-sidebar-border bg-sidebar-primary/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-sidebar-foreground tracking-tight",
                                children: "Sodalicious"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-sidebar-foreground/70 font-medium",
                                children: "Inventory Officer"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 p-4 space-y-1",
                        children: [
                            {
                                id: "inventory",
                                label: "Stock Management",
                                icon: "📦"
                            },
                            {
                                id: "logs",
                                label: "Stock History",
                                icon: "📋"
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `w-full text-left px-4 py-3 rounded-lg transition-all font-semibold flex items-center gap-3 ${activeTab === tab.id ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md" : "text-sidebar-foreground hover:bg-sidebar-accent"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: tab.icon
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    tab.label
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "m-4 px-4 py-3 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 font-semibold transition-all shadow-md",
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto",
                children: [
                    activeTab === "inventory" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InventoryView, {
                        menuSync: menuSync,
                        inventoryLogs: inventoryLogs,
                        currentUser: currentUser
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                        lineNumber: 53,
                        columnNumber: 39
                    }, this),
                    activeTab === "logs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StockHistoryView, {
                        inventoryLogs: inventoryLogs
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                        lineNumber: 54,
                        columnNumber: 34
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(InventoryPanel, "hy6RWntB0iX9ZMJbkwMYTh68cY8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProducts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInventoryLogs"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuSync"]
    ];
});
_c = InventoryPanel;
function InventoryView({ menuSync, inventoryLogs, currentUser }) {
    _s1();
    const { ingredients, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIngredients"])();
    const [adjustingId, setAdjustingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adjustmentData, setAdjustmentData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        quantity: 0,
        type: "restock",
        reason: ""
    });
    const lowStockItems = ingredients.filter((item)=>item.stock_quantity <= item.reorder_level);
    const handleAdjustment = async ()=>{
        if (adjustingId) {
            const item = ingredients.find((i)=>i.id === adjustingId);
            if (item) {
                const change = adjustmentData.type === "restock" ? adjustmentData.quantity : -adjustmentData.quantity;
                // Call API to update SQL and log the inventory change
                try {
                    const response = await fetch("/api/inventory", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            ingredient_id: item.id,
                            user_id: currentUser?.id || 1,
                            log_type: adjustmentData.type,
                            quantity_changed: change,
                            reason: adjustmentData.reason
                        })
                    });
                    if (response.ok) {
                        console.log("[Inventory] API sync successful");
                        refetch();
                        inventoryLogs.refetch();
                    } else {
                        console.error("[Inventory] API sync failed:", await response.text());
                    }
                } catch (e) {
                    console.error("[Inventory] API error:", e);
                }
                setAdjustingId(null);
                setAdjustmentData({
                    quantity: 0,
                    type: "restock",
                    reason: ""
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-8 text-foreground",
                children: "Ingredient Stock Management"
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            lowStockItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-bold text-yellow-800",
                        children: [
                            "⚠ Low Stock Ingredients: ",
                            lowStockItems.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 grid grid-cols-1 md:grid-cols-3 gap-3",
                        children: lowStockItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-yellow-700 font-medium",
                                children: [
                                    item.name,
                                    " (",
                                    item.stock_quantity,
                                    " ",
                                    item.unit,
                                    ")"
                                ]
                            }, item.id, true, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            adjustingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-xl p-6 mb-8 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-4 text-foreground",
                        children: "Adjust Stock"
                    }, void 0, false, {
                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: adjustmentData.type,
                                onChange: (e)=>setAdjustmentData({
                                        ...adjustmentData,
                                        type: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "restock",
                                        children: "Restock"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "damage",
                                        children: "Damage"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "waste",
                                        children: "Waste"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Quantity",
                                value: adjustmentData.quantity,
                                onChange: (e)=>setAdjustmentData({
                                        ...adjustmentData,
                                        quantity: Number.parseInt(e.target.value)
                                    }),
                                className: "px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Reason",
                                value: adjustmentData.reason,
                                onChange: (e)=>setAdjustmentData({
                                        ...adjustmentData,
                                        reason: e.target.value
                                    }),
                                className: "px-4 py-2 border border-border rounded-lg bg-card text-foreground col-span-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-x-2 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleAdjustment,
                                className: "px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold transition-all",
                                children: "Apply"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setAdjustingId(null),
                                className: "px-4 py-2 border border-border rounded-lg hover:bg-muted font-semibold transition-all text-foreground",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-xl overflow-hidden shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-primary/5 border-b border-border",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Ingredient"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Unit"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Stock"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Reorder Level"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-border",
                            children: ingredients.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-primary/5 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 font-medium text-foreground",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-foreground",
                                            children: item.unit
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-foreground",
                                            children: item.stock_quantity
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-foreground",
                                            children: item.reorder_level
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-3 py-1 rounded-lg text-sm font-bold ${item.stock_quantity <= item.reorder_level ? "bg-yellow-100 text-yellow-700 border border-yellow-200" : "bg-green-100 text-green-700 border border-green-200"}`,
                                                children: item.stock_quantity <= item.reorder_level ? "Low" : "OK"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setAdjustingId(item.id),
                                                className: "px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm hover:bg-primary/20 font-semibold transition-colors border border-primary/20",
                                                children: "Adjust"
                                            }, void 0, false, {
                                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s1(InventoryView, "qNJtpv8qDvxj99ALLSLywcpIh5g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$lib$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIngredients"]
    ];
});
_c1 = InventoryView;
function StockHistoryView({ inventoryLogs }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold mb-8 text-foreground",
                children: "Stock History"
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card border border-border rounded-xl overflow-hidden shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-primary/5 border-b border-border",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Product"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Quantity"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Reason"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Officer"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left font-bold text-foreground",
                                        children: "Timestamp"
                                    }, void 0, false, {
                                        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-border",
                            children: inventoryLogs.logs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-primary/5 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-foreground",
                                            children: log.ingredient_name || log.productName || "Unknown"
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 capitalize font-semibold text-foreground",
                                            children: log.log_type || log.type
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 235,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 font-bold text-foreground",
                                            children: log.quantity_changed || log.quantity
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 236,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-foreground",
                                            children: log.reason || "-"
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-foreground",
                                            children: log.user_name || log.userName
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-muted-foreground text-sm",
                                            children: log.created_at ? new Date(log.created_at).toLocaleString() : log.timestamp
                                        }, void 0, false, {
                                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, log.id, true, {
                                    fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                                    lineNumber: 233,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/sodalicious/components/inventory-panel.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/components/inventory-panel.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_c2 = StockHistoryView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "InventoryPanel");
__turbopack_context__.k.register(_c1, "InventoryView");
__turbopack_context__.k.register(_c2, "StockHistoryView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sodalicious/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$cashier$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/components/cashier-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$login$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/components/login-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/components/manager-dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$inventory$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sodalicious/components/inventory-panel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Home() {
    _s();
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cashier");
    const [currentUser, setCurrentUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleLogin = (role, user)=>{
        setUserRole(role);
        setCurrentUser(user);
        setIsLoggedIn(true);
    };
    const handleLogout = ()=>{
        if (currentUser?.id) {
            fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: currentUser.id
                })
            }).catch(console.error);
        }
        setIsLoggedIn(false);
        setCurrentUser(null);
    };
    if (!isLoggedIn) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$login$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onLogin: handleLogin
        }, void 0, false, {
            fileName: "[project]/sodalicious/app/page.tsx",
            lineNumber: 33,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background",
        children: [
            userRole === "cashier" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$cashier$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onLogout: handleLogout,
                currentUser: currentUser
            }, void 0, false, {
                fileName: "[project]/sodalicious/app/page.tsx",
                lineNumber: 38,
                columnNumber: 34
            }, this),
            userRole === "manager" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$manager$2d$dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onLogout: handleLogout,
                currentUser: currentUser
            }, void 0, false, {
                fileName: "[project]/sodalicious/app/page.tsx",
                lineNumber: 39,
                columnNumber: 34
            }, this),
            userRole === "inventory" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sodalicious$2f$components$2f$inventory$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onLogout: handleLogout,
                currentUser: currentUser
            }, void 0, false, {
                fileName: "[project]/sodalicious/app/page.tsx",
                lineNumber: 40,
                columnNumber: 36
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sodalicious/app/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Home, "UYtmL99Ka2NeKC5geyxLcMkyjAQ=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sodalicious_b7d4a80e._.js.map