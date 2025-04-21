import { useState, useEffect } from 'react'
import type { Product } from '../../types/product'

export interface CartItem {
    id: string
    productId: string
    name: string
    price: number
    quantity: number
    image?: string
    product?: Product
}

export function useCart() {
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            setCart(JSON.parse(savedCart))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product: Product) => {
        setCart(currentCart => {
            const existingItem = currentCart.find(item => item.productId === product.id)
            if (existingItem) {
                return currentCart.map(item =>
                    item.productId === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...currentCart, {
                id: product.id,
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.images[0],
                product
            }]
        })
    }

    const removeFromCart = (productId: string) => {
        setCart(currentCart => currentCart.filter(item => item.productId !== productId))
    }

    const updateQuantity = (productId: string, quantity: number) => {
        setCart(currentCart =>
            currentCart.map(item =>
                item.productId === productId ? { ...item, quantity } : item
            )
        )
    }

    const clearCart = () => {
        setCart([])
        localStorage.removeItem('cart')
    }

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
    }
} 