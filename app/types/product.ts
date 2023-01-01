export interface Product {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number
    images: string[]
    image?: string
    category: string
    subcategory?: string
    features?: string[]
    brand?: string
    rating?: number
    reviewCount?: number
    stock?: number
    discount?: number
    tags?: string[]
    specifications?: Record<string, string | number>
    createdAt: string
} 