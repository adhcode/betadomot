import { LucideIcon } from 'lucide-react'

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    subcategory: string;
    features: string[];
    specifications: Record<string, string>;
    stock: number;
    ratings: {
        average: number;
        count: number;
    };
    brand: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Category {
    title: string;
    description: string;
    image: string;
    subcategories: string[];
    features: {
        title: string;
        description: string;
    }[];
    brands: string[];
    priceRange: [number, number];
    benefits: {
        title: string;
        description: string;
        image: string;
    }[];
    id?: string;
    slug?: string;
    icon: LucideIcon;
}

export interface CartItem {
    productId: string;
    quantity: number;
    price: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    cart: CartItem[];
    wishlist: string[];
} 