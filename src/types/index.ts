export interface User {
  id: string
  email: string
  created_at: string
}

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  state: string
  category: string
  brand: string
  sku: string
  inStock: boolean
  rating: number
  imageUrl: string
  discount?: number
}

export interface AuthState {
  user: User | null
  loading: boolean
}

export type SortField = 'name' | 'price' | 'rating' | 'discount'
export type SortDirection = 'asc' | 'desc'