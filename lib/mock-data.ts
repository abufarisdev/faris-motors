import type { Product, User, QuoteRequest, Order } from "./types"

// Mock Products Data
export const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "Engine Oil Filter",
    category: "Engine Parts",
    partNumber: "EOF-2547-TT",
    vehicleModel: "Tata 407",
    description: "High-quality engine oil filter for Tata 407. Ensures optimal engine performance and longevity.",
    price: 450,
    inStock: true,
    imageUrl: "/truck-engine-oil-filter.jpg",
    specifications: {
      Material: "Premium Filter Paper",
      "Thread Size": "M20 x 1.5",
      Height: "95mm",
      Diameter: "76mm",
    },
  },
  {
    id: "prod-2",
    name: "Brake Pad Set",
    category: "Brake System",
    partNumber: "BPS-8821-TT",
    vehicleModel: "Tata 709",
    description: "Heavy-duty brake pad set designed for Tata 709. Superior stopping power and durability.",
    price: 2800,
    inStock: true,
    imageUrl: "/truck-brake-pads.png",
    specifications: {
      Material: "Semi-Metallic",
      Thickness: "18mm",
      Width: "180mm",
      Length: "220mm",
    },
  },
  {
    id: "prod-3",
    name: "Clutch Plate Assembly",
    category: "Transmission Parts",
    partNumber: "CPA-4512-TT",
    vehicleModel: "Tata 1109",
    description: "Complete clutch plate assembly for Tata 1109. Smooth engagement and long service life.",
    price: 5600,
    inStock: true,
    imageUrl: "/truck-clutch-plate.jpg",
    specifications: {
      Diameter: "380mm",
      "Spline Count": "10",
      "Hub Diameter": "44mm",
    },
  },
  {
    id: "prod-4",
    name: "Radiator Assembly",
    category: "Cooling System",
    partNumber: "RAD-7734-TT",
    vehicleModel: "Tata 1512",
    description: "Heavy-duty radiator assembly for Tata 1512. Efficient cooling for demanding conditions.",
    price: 12500,
    inStock: true,
    imageUrl: "/truck-radiator.jpg",
    specifications: {
      "Core Size": "650 x 450mm",
      Rows: "3",
      Material: "Aluminum",
    },
  },
  {
    id: "prod-5",
    name: "Shock Absorber",
    category: "Suspension & Steering",
    partNumber: "SHA-3398-TT",
    vehicleModel: "Tata 407",
    description: "Front shock absorber for Tata 407. Provides excellent ride comfort and stability.",
    price: 3200,
    inStock: true,
    imageUrl: "/truck-shock-absorber.jpg",
    specifications: {
      Type: "Hydraulic",
      Length: "520mm",
      Mounting: "Eye-Eye",
    },
  },
  {
    id: "prod-6",
    name: "Alternator",
    category: "Electrical Components",
    partNumber: "ALT-9921-TT",
    vehicleModel: "Tata 709",
    description: "24V alternator for Tata 709. Reliable power generation for all electrical systems.",
    price: 8900,
    inStock: false,
    imageUrl: "/truck-alternator.jpg",
    specifications: {
      Voltage: "24V",
      Amperage: "80A",
      "Pulley Type": "V-Belt",
    },
  },
  {
    id: "prod-7",
    name: "Fuel Injection Pump",
    category: "Fuel System",
    partNumber: "FIP-6654-TT",
    vehicleModel: "Tata 1109",
    description: "High-precision fuel injection pump for Tata 1109. Optimizes fuel delivery and efficiency.",
    price: 18500,
    inStock: true,
    imageUrl: "/truck-fuel-injection-pump.jpg",
    specifications: {
      Type: "Inline",
      Cylinders: "4",
      Pressure: "1800 bar",
    },
  },
  {
    id: "prod-8",
    name: "Cabin Door Assembly",
    category: "Body Parts",
    partNumber: "CDA-2211-TT",
    vehicleModel: "Tata 407",
    description: "Complete cabin door assembly for Tata 407. Includes hinges and weather sealing.",
    price: 15800,
    inStock: true,
    imageUrl: "/truck-cabin-door.jpg",
    specifications: {
      Side: "Driver",
      Material: "Steel",
      Finish: "Primer Coated",
    },
  },
  {
    id: "prod-9",
    name: "Air Filter Element",
    category: "Engine Parts",
    partNumber: "AFE-5533-TT",
    vehicleModel: "Tata 1512",
    description: "High-efficiency air filter element for Tata 1512. Protects engine from dust and debris.",
    price: 890,
    inStock: true,
    imageUrl: "/truck-air-filter.png",
    specifications: {
      Type: "Dry Element",
      Height: "320mm",
      "Outer Diameter": "210mm",
    },
  },
  {
    id: "prod-10",
    name: "Steering Gear Box",
    category: "Suspension & Steering",
    partNumber: "SGB-7788-TT",
    vehicleModel: "Tata 709",
    description: "Power steering gear box for Tata 709. Smooth and responsive steering control.",
    price: 22500,
    inStock: true,
    imageUrl: "/truck-steering-gear-box.jpg",
    specifications: {
      Type: "Recirculating Ball",
      Ratio: "20:1",
      Mounting: "Frame Mount",
    },
  },
  {
    id: "prod-11",
    name: "Headlight Assembly",
    category: "Electrical Components",
    partNumber: "HLA-4466-TT",
    vehicleModel: "Tata 407",
    description: "Complete headlight assembly for Tata 407. Bright illumination for safe night driving.",
    price: 2400,
    inStock: true,
    imageUrl: "/truck-headlight.jpg",
    specifications: {
      Type: "Halogen",
      Voltage: "24V",
      Wattage: "70W/55W",
    },
  },
  {
    id: "prod-12",
    name: "Exhaust Manifold",
    category: "Engine Parts",
    partNumber: "EXM-8899-TT",
    vehicleModel: "Tata 1109",
    description: "Cast iron exhaust manifold for Tata 1109. Durable construction for high-temperature operation.",
    price: 6700,
    inStock: false,
    imageUrl: "/truck-exhaust-manifold.jpg",
    specifications: {
      Material: "Cast Iron",
      Ports: "4",
      Finish: "Heat Resistant Coating",
    },
  },
]

// Mock Users Data
export const mockUsers: User[] = [
  {
    id: "user-1",
    name: "Rajesh Kumar",
    email: "rajesh@transportco.in",
    phone: "+91 98765 43210",
    company: "Kumar Transport Services",
    role: "customer",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "user-2",
    name: "Amit Patel",
    email: "amit@garageservices.in",
    phone: "+91 98765 43211",
    company: "Patel Auto Garage",
    role: "customer",
    createdAt: new Date("2024-02-20"),
  },
  {
    id: "admin-1",
    name: "Mohammed Faris",
    email: "admin@farismotors.in",
    phone: "+91 98765 00000",
    company: "Faris Motors",
    role: "admin",
    createdAt: new Date("2023-01-01"),
  },
]

// Mock Quote Requests
export const mockQuoteRequests: QuoteRequest[] = [
  {
    id: "quote-1",
    customerId: "user-1",
    customerName: "Rajesh Kumar",
    customerEmail: "rajesh@transportco.in",
    customerPhone: "+91 98765 43210",
    company: "Kumar Transport Services",
    products: [
      { productId: "prod-1", productName: "Engine Oil Filter", quantity: 50 },
      { productId: "prod-2", productName: "Brake Pad Set", quantity: 20 },
    ],
    message: "Need bulk pricing for monthly maintenance. Please provide best rates.",
    status: "pending",
    createdAt: new Date("2025-04-01"),
    updatedAt: new Date("2025-04-01"),
  },
  {
    id: "quote-2",
    customerId: "user-2",
    customerName: "Amit Patel",
    customerEmail: "amit@garageservices.in",
    customerPhone: "+91 98765 43211",
    company: "Patel Auto Garage",
    products: [{ productId: "prod-3", productName: "Clutch Plate Assembly", quantity: 5 }],
    message: "Urgent requirement. When can you deliver?",
    status: "quoted",
    quotedPrice: 26500,
    adminNotes: "Special discount applied for urgent order",
    createdAt: new Date("2025-03-28"),
    updatedAt: new Date("2025-03-29"),
  },
]

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: "order-1",
    customerId: "user-1",
    customerName: "Rajesh Kumar",
    customerEmail: "rajesh@transportco.in",
    products: [
      { productId: "prod-5", productName: "Shock Absorber", quantity: 10, price: 3200 },
      { productId: "prod-9", productName: "Air Filter Element", quantity: 25, price: 890 },
    ],
    totalAmount: 54250,
    status: "shipped",
    shippingAddress: "Kumar Transport Services, Industrial Area, Pune - 411019",
    createdAt: new Date("2025-03-15"),
    updatedAt: new Date("2025-03-20"),
  },
  {
    id: "order-2",
    customerId: "user-2",
    customerName: "Amit Patel",
    customerEmail: "amit@garageservices.in",
    products: [{ productId: "prod-11", productName: "Headlight Assembly", quantity: 4, price: 2400 }],
    totalAmount: 9600,
    status: "delivered",
    shippingAddress: "Patel Auto Garage, Main Road, Ahmedabad - 380001",
    createdAt: new Date("2025-03-10"),
    updatedAt: new Date("2025-03-18"),
  },
]

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id)
}

// Helper function to filter products by category
export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return mockProducts
  return mockProducts.filter((p) => p.category === category)
}

// Helper function to search products
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return mockProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.partNumber.toLowerCase().includes(lowerQuery) ||
      p.vehicleModel.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery),
  )
}
