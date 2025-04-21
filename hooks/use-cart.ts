import { create } from 'zustand'
import { type Product } from '../types/product'

interface CartStore {
  items: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  addToCart: (product) => set((state) => ({ items: [...state.items, product] })),
  removeFromCart: (productId) => 
    set((state) => ({ items: state.items.filter(item => item.id !== productId) })),
  clearCart: () => set({ items: [] })
})) 