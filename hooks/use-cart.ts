import { create } from 'zustand'
import { type Product } from '@/data/products'

type State = {
    items: Product[]
}

type Actions = {
    addToCart: (product: Product) => void
    removeFromCart: (productId: string) => void
    clearCart: () => void
}

export const useCart = create<State & Actions>((set) => ({
    items: [],
    addToCart: (product: Product) => 
        set((state: State) => ({ 
            items: [...state.items, product] 
        })),
    removeFromCart: (productId: string) => 
        set((state: State) => ({ 
            items: state.items.filter((item) => item.id !== productId) 
        })),
    clearCart: () => set({ items: [] })
})) 