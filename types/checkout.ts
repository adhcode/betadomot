import { Product } from './product'

export interface GuestOrder {
    id: string
    email?: string
    items: {
        product_id: string
        quantity: number
        price: number
    }[]
    total: number
    shipping_address: {
        name: string
        street: string
        city: string
        state: string
        postal_code: string
        phone?: string
    }
    status: 'pending' | 'processing' | 'completed'
    created_at: string
    guest_reference: string // For tracking guest orders
}

export interface CheckoutData {
    email?: string
    shipping_address: {
        name: string
        street: string
        city: string
        state: string
        postal_code: string
        phone?: string
    }
    items: CartItem[]
}

export interface CartItem {
    id: string
    quantity: number
    price: number
    product: Product
} 