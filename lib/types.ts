// Product Categories
export type ProductCategory =
  | "Engine Parts"
  | "Transmission Parts"
  | "Suspension & Steering"
  | "Brake System"
  | "Electrical Components"
  | "Body Parts"
  | "Cooling System"
  | "Fuel System"

// Product Interface
export interface Product {
  id: string
  name: string
  category: ProductCategory
  partNumber: string
  vehicleModel: string
  description: string
  price: number
  inStock: boolean
  imageUrl: string
  specifications?: Record<string, string>
}

// User Roles
export type UserRole = "customer" | "admin"

// User Interface
export interface User {
  id: string
  name: string
  email: string
  phone: string
  company: string
  role: UserRole
  createdAt: Date
}

// Quote Request Status
export type QuoteStatus = "pending" | "quoted" | "accepted" | "rejected"

// Quote Request Interface
export interface QuoteRequest {
  id: string
  customerId: string
  customerName: string
  customerEmail: string
  customerPhone: string
  company: string
  products: {
    productId: string
    productName: string
    quantity: number
  }[]
  message: string
  status: QuoteStatus
  quotedPrice?: number
  adminNotes?: string
  createdAt: Date
  updatedAt: Date
}

// Order Status
export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled"

// Order Interface
export interface Order {
  id: string
  customerId: string
  customerName: string
  customerEmail: string
  products: {
    productId: string
    productName: string
    quantity: number
    price: number
  }[]
  totalAmount: number
  status: OrderStatus
  shippingAddress: string
  createdAt: Date
  updatedAt: Date
}
