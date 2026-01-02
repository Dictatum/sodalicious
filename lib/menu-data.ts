/**
 * SODALICIOUS.CO – Complete POS Menu Data
 * Synced across Cashier, Manager, and Inventory panels
 * All prices in PHP, Stock quantities for tracking
 */

export interface MenuItem {
  id: string
  name: string
  category: string
  categoryCode: string
  sizes: Array<{
    size: string
    price: number
  }>
  description?: string
  stock: number
  minThreshold: number
  image?: string
  bottleneck_ingredient?: string
  ingredients_list?: string
}

// ☕ HOT COFFEE
export const HOT_COFFEE: MenuItem[] = [
  {
    id: "HC001",
    name: "Americano",
    category: "Hot Coffee",
    categoryCode: "HC",
    sizes: [
      { size: "S", price: 45 },
      { size: "M", price: 55 },
      { size: "L", price: 65 },
    ],
    description: "Classic Italian espresso with hot water",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "HC002",
    name: "Café Latte",
    category: "Hot Coffee",
    categoryCode: "HC",
    sizes: [
      { size: "S", price: 55 },
      { size: "M", price: 65 },
      { size: "L", price: 75 },
    ],
    description: "Smooth espresso with steamed milk",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "HC003",
    name: "Cappuccino",
    category: "Hot Coffee",
    categoryCode: "HC",
    sizes: [
      { size: "S", price: 55 },
      { size: "M", price: 65 },
      { size: "L", price: 75 },
    ],
    description: "Espresso with equal parts milk and foam",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "HC004",
    name: "Caramel Macchiato",
    category: "Hot Coffee",
    categoryCode: "HC",
    sizes: [
      { size: "S", price: 60 },
      { size: "M", price: 70 },
      { size: "L", price: 80 },
    ],
    description: "Rich espresso with caramel and steamed milk",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "HC005",
    name: "Mocha",
    category: "Hot Coffee",
    categoryCode: "HC",
    sizes: [
      { size: "S", price: 60 },
      { size: "M", price: 70 },
      { size: "L", price: 80 },
    ],
    description: "Espresso, steamed milk, and chocolate",
    stock: 40,
    minThreshold: 8,
  },
]

// 🧊 ICED COFFEE
export const ICED_COFFEE: MenuItem[] = [
  {
    id: "IC001",
    name: "Iced Americano",
    category: "Iced Coffee",
    categoryCode: "IC",
    sizes: [
      { size: "R", price: 55 },
      { size: "L", price: 65 },
    ],
    description: "Cold espresso with ice and water",
    stock: 40,
    minThreshold: 12,
  },
  {
    id: "IC002",
    name: "Iced Latte",
    category: "Iced Coffee",
    categoryCode: "IC",
    sizes: [
      { size: "R", price: 65 },
      { size: "L", price: 75 },
    ],
    description: "Smooth iced espresso with cold milk",
    stock: 40,
    minThreshold: 12,
  },
  {
    id: "IC003",
    name: "Iced Caramel",
    category: "Iced Coffee",
    categoryCode: "IC",
    sizes: [
      { size: "R", price: 70 },
      { size: "L", price: 80 },
    ],
    description: "Iced espresso with caramel and milk",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "IC004",
    name: "Iced Vanilla Brew",
    category: "Iced Coffee",
    categoryCode: "IC",
    sizes: [
      { size: "R", price: 65 },
      { size: "L", price: 75 },
    ],
    description: "Cold brew with vanilla essence",
    stock: 40,
    minThreshold: 12,
  },
  {
    id: "IC005",
    name: "Iced Mocha",
    category: "Iced Coffee",
    categoryCode: "IC",
    sizes: [
      { size: "R", price: 70 },
      { size: "L", price: 80 },
    ],
    description: "Iced espresso with chocolate and milk",
    stock: 40,
    minThreshold: 10,
  },
]

// 🥤 FRAPPES
export const FRAPPES: MenuItem[] = [
  {
    id: "FR001",
    name: "Chocolate Frappe",
    category: "Frappes",
    categoryCode: "FR",
    sizes: [{ size: "16oz", price: 75 }],
    description: "Blended chocolate frappe with whipped cream",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "FR002",
    name: "Caramel Frappe",
    category: "Frappes",
    categoryCode: "FR",
    sizes: [{ size: "16oz", price: 75 }],
    description: "Blended caramel frappe with whipped cream",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "FR003",
    name: "Cookies & Cream Frappe",
    category: "Frappes",
    categoryCode: "FR",
    sizes: [{ size: "16oz", price: 80 }],
    description: "Cookies and cream blended frappe",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "FR004",
    name: "Matcha Frappe",
    category: "Frappes",
    categoryCode: "FR",
    sizes: [{ size: "16oz", price: 85 }],
    description: "Blended matcha frappe with whipped cream",
    stock: 40,
    minThreshold: 6,
  },
  {
    id: "FR005",
    name: "Coffee Jelly Frappe",
    category: "Frappes",
    categoryCode: "FR",
    sizes: [{ size: "16oz", price: 80 }],
    description: "Coffee frappe with coffee jelly bits",
    stock: 40,
    minThreshold: 8,
  },
]

// 🫧 SODA SERIES
export const SODA_SERIES: MenuItem[] = [
  {
    id: "SS001",
    name: "Blue Lemon Soda",
    category: "Soda Series",
    categoryCode: "SS",
    sizes: [
      { size: "R", price: 55 },
      { size: "L", price: 65 },
    ],
    description: "Refreshing blue lemon carbonated drink",
    stock: 40,
    minThreshold: 15,
  },
  {
    id: "SS002",
    name: "Strawberry Fizz",
    category: "Soda Series",
    categoryCode: "SS",
    sizes: [
      { size: "R", price: 55 },
      { size: "L", price: 65 },
    ],
    description: "Sweet strawberry flavored soda",
    stock: 40,
    minThreshold: 15,
  },
  {
    id: "SS003",
    name: "Green Apple Soda",
    category: "Soda Series",
    categoryCode: "SS",
    sizes: [
      { size: "R", price: 55 },
      { size: "L", price: 65 },
    ],
    description: "Crisp green apple soda",
    stock: 40,
    minThreshold: 15,
  },
  {
    id: "SS004",
    name: "Lychee Pop Soda",
    category: "Soda Series",
    categoryCode: "SS",
    sizes: [
      { size: "R", price: 60 },
      { size: "L", price: 70 },
    ],
    description: "Tropical lychee flavored soda",
    stock: 40,
    minThreshold: 12,
  },
  {
    id: "SS005",
    name: "Mango Burst Soda",
    category: "Soda Series",
    categoryCode: "SS",
    sizes: [
      { size: "R", price: 60 },
      { size: "L", price: 70 },
    ],
    description: "Tropical mango soda explosion",
    stock: 40,
    minThreshold: 12,
  },
]

// 🧃 YAKULT SERIES
export const YAKULT_SERIES: MenuItem[] = [
  {
    id: "YK001",
    name: "Blue Yakult",
    category: "Yakult Series",
    categoryCode: "YK",
    sizes: [
      { size: "R", price: 60 },
      { size: "L", price: 70 },
    ],
    description: "Probiotic blue flavored Yakult",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "YK002",
    name: "Strawberry Yakult",
    category: "Yakult Series",
    categoryCode: "YK",
    sizes: [
      { size: "R", price: 60 },
      { size: "L", price: 70 },
    ],
    description: "Probiotic strawberry Yakult",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "YK003",
    name: "Green Apple Yakult",
    category: "Yakult Series",
    categoryCode: "YK",
    sizes: [
      { size: "R", price: 60 },
      { size: "L", price: 70 },
    ],
    description: "Probiotic green apple Yakult",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "YK004",
    name: "Mango Yakult",
    category: "Yakult Series",
    categoryCode: "YK",
    sizes: [
      { size: "R", price: 60 },
      { size: "L", price: 70 },
    ],
    description: "Probiotic mango Yakult",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "YK005",
    name: "Lychee Yakult",
    category: "Yakult Series",
    categoryCode: "YK",
    sizes: [
      { size: "R", price: 60 },
      { size: "L", price: 70 },
    ],
    description: "Probiotic lychee Yakult",
    stock: 40,
    minThreshold: 10,
  },
]

// 🍵 MATCHA SERIES
export const MATCHA_SERIES: MenuItem[] = [
  {
    id: "MC001",
    name: "Classic Matcha",
    category: "Matcha Series",
    categoryCode: "MC",
    sizes: [
      { size: "R", price: 70 },
      { size: "L", price: 80 },
    ],
    description: "Traditional matcha powder blend",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "MC002",
    name: "Matcha Latte",
    category: "Matcha Series",
    categoryCode: "MC",
    sizes: [
      { size: "R", price: 75 },
      { size: "L", price: 85 },
    ],
    description: "Matcha with steamed milk",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "MC003",
    name: "Matcha Caramel",
    category: "Matcha Series",
    categoryCode: "MC",
    sizes: [
      { size: "R", price: 80 },
      { size: "L", price: 90 },
    ],
    description: "Matcha with caramel drizzle",
    stock: 40,
    minThreshold: 6,
  },
  {
    id: "MC004",
    name: "Matcha Vanilla",
    category: "Matcha Series",
    categoryCode: "MC",
    sizes: [
      { size: "R", price: 75 },
      { size: "L", price: 85 },
    ],
    description: "Matcha with vanilla essence",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "MC005",
    name: "Dirty Matcha",
    category: "Matcha Series",
    categoryCode: "MC",
    sizes: [
      { size: "R", price: 85 },
      { size: "L", price: 95 },
    ],
    description: "Matcha with espresso shot",
    stock: 40,
    minThreshold: 6,
  },
]

// 🍱 COMBO MEALS
export const COMBO_MEALS: MenuItem[] = [
  {
    id: "CM001",
    name: "Fries + Soda",
    category: "Combo Meals",
    categoryCode: "CM",
    sizes: [{ size: "Combo", price: 99 }],
    description: "Regular Fries + Regular Soda",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "CM002",
    name: "Siomai Rice + Soda",
    category: "Combo Meals",
    categoryCode: "CM",
    sizes: [{ size: "Combo", price: 110 }],
    description: "Siomai Rice + Regular Soda",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "CM003",
    name: "Burger + Soda",
    category: "Combo Meals",
    categoryCode: "CM",
    sizes: [{ size: "Combo", price: 120 }],
    description: "Cheeseburger + Regular Soda",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "CM004",
    name: "Nuggets + Soda",
    category: "Combo Meals",
    categoryCode: "CM",
    sizes: [{ size: "Combo", price: 115 }],
    description: "6pcs Nuggets + Regular Soda",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "CM005",
    name: "Hotdog + Soda",
    category: "Combo Meals",
    categoryCode: "CM",
    sizes: [{ size: "Combo", price: 99 }],
    description: "Hotdog Sandwich + Regular Soda",
    stock: 40,
    minThreshold: 10,
  },
]

// 🍟 SNACKS
export const SNACKS: MenuItem[] = [
  {
    id: "SN001",
    name: "Fries",
    category: "Snacks",
    categoryCode: "SN",
    sizes: [
      { size: "Reg", price: 45 },
      { size: "Lrg", price: 60 },
    ],
    description: "Crispy golden fries",
    stock: 40,
    minThreshold: 15,
  },
  {
    id: "SN002",
    name: "Kropek",
    category: "Snacks",
    categoryCode: "SN",
    sizes: [{ size: "Solo", price: 45 }],
    description: "Crispy prawn cracker",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "SN003",
    name: "Nachos",
    category: "Snacks",
    categoryCode: "SN",
    sizes: [{ size: "Solo", price: 60 }],
    description: "Cheese nachos with dip",
    stock: 40,
    minThreshold: 8,
  },
  {
    id: "SN004",
    name: "Cheese Sticks",
    category: "Snacks",
    categoryCode: "SN",
    sizes: [{ size: "6 pcs", price: 50 }],
    description: "Golden fried cheese sticks",
    stock: 40,
    minThreshold: 10,
  },
  {
    id: "SN005",
    name: "Siomai Rice",
    category: "Snacks",
    categoryCode: "SN",
    sizes: [{ size: "Solo", price: 55 }],
    description: "Siomai served with rice",
    stock: 40,
    minThreshold: 10,
  },
]

// Combined complete menu
export const COMPLETE_MENU: MenuItem[] = [
  ...HOT_COFFEE,
  ...ICED_COFFEE,
  ...FRAPPES,
  ...SODA_SERIES,
  ...YAKULT_SERIES,
  ...MATCHA_SERIES,
  ...COMBO_MEALS,
  ...SNACKS,
]

// Menu categories for filtering
export const MENU_CATEGORIES = [
  { code: "HC", name: "Hot Coffee", emoji: "☕" },
  { code: "IC", name: "Iced Coffee", emoji: "🧊" },
  { code: "FR", name: "Frappes", emoji: "🥤" },
  { code: "SS", name: "Soda Series", emoji: "🫧" },
  { code: "YK", name: "Yakult Series", emoji: "🧃" },
  { code: "MC", name: "Matcha Series", emoji: "🍵" },
  { code: "CM", name: "Combo Meals", emoji: "🍱" },
  { code: "SN", name: "Snacks", emoji: "🍟" },
]

// Helper function to get menu items by category
export function getMenuByCategory(categoryCode: string): MenuItem[] {
  return COMPLETE_MENU.filter((item) => item.categoryCode === categoryCode)
}

// Helper function to get all categories
export function getAllCategories(): string[] {
  return MENU_CATEGORIES.map((cat) => cat.name)
}

// Helper function to convert MenuItem to Product format for store compatibility
export function menuItemToProduct(item: MenuItem, sizeIndex: number = 0) {
  const size = item.sizes[sizeIndex]
  return {
    id: item.id,
    name: `${item.name} (${size.size})`,
    price: size.price,
    category: item.category,
    stock: item.stock,
    minThreshold: item.minThreshold,
    description: item.description,
    image: item.image,
  }
}

// Get all products flattened with sizes as separate entries
export function getAllProductVariants() {
  return COMPLETE_MENU.flatMap((item) =>
    item.sizes.map((size, index) => ({
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
      image: item.image,
    })),
  )
}

// Get base menu items (one per drink, no size duplication) - for cashier modal selection
export function getBaseMenuItems() {
  return COMPLETE_MENU.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    categoryCode: item.categoryCode,
    sizes: item.sizes,
    description: item.description,
    stock: item.stock,
    minThreshold: item.minThreshold,
    image: item.image,
    bottleneck_ingredient: item.bottleneck_ingredient,
    ingredients_list: item.ingredients_list,
  }))
}

// Stock management functions
export function deductStock(productId: string, quantity: number): boolean {
  const item = COMPLETE_MENU.find((i) => i.id === productId)
  if (!item) return false
  if (item.stock < quantity) return false

  item.stock -= quantity
  return true
}

export function getProductById(productId: string): MenuItem | undefined {
  return COMPLETE_MENU.find((i) => i.id === productId)
}

export function updateProductStock(productId: string, newStock: number): boolean {
  const item = COMPLETE_MENU.find((i) => i.id === productId)
  if (!item) return false

  item.stock = Math.max(0, newStock)
  return true
}

// Find a menu item by base name (e.g. "Americano")
export function findMenuItemByName(baseName: string) {
  return COMPLETE_MENU.find((i) => i.name === baseName)
}

// Adjust stock by a delta using the base product name. Positive delta = restock.
export function changeStockByName(baseName: string, delta: number): boolean {
  const item = findMenuItemByName(baseName)
  if (!item) return false
  item.stock = Math.max(0, item.stock + delta)
  return true
}

// Set absolute stock by base product name.
export function setStockByName(baseName: string, newStock: number): boolean {
  const item = findMenuItemByName(baseName)
  if (!item) return false
  item.stock = Math.max(0, newStock)
  return true
}

export function getStockLevel(productId: string): number {
  const item = COMPLETE_MENU.find((i) => i.id === productId)
  return item?.stock || 0
}

