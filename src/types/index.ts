export interface User {
  id: string
  email: string
  created_at: string
}

export interface Product {
    id: number;
    title: string;
    store_id: number;
    country: string;
    category: string;
    sku: string;
    image_url: string | undefined;
    price: number;
    retail_price: number | undefined;
    profit_margin: number ;
    product_rating: number; 
    stock_status: boolean;
    state: string;
    updated_at: Date;
    product: string;
    store_name:string
}
export interface AuthState {
  user: User | null
  loading: boolean
}

export type SortField = 'title' | 'price' | 'rating' | 'discount'
export type SortDirection = 'asc' | 'desc'