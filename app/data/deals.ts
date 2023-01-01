import { type Product } from '@/types/product'

export interface Deal {
    product: Product
    discount: number
    endsAt: Date
}

export const deals = {
    dealOfTheDay: {
        product: {
            id: 'smart-inverter-pro',
            name: 'Smart Inverter Pro',
            description: 'High-efficiency smart inverter with advanced power management',
            price: 999.99,
            images: ['/images/products/smart-inverter.jpg'],
            category: 'inverters',
            features: [
                'Pure sine wave output',
                'Smart power management',
                'Mobile app control',
                'Battery health monitoring'
            ]
        },
        discount: 25,
        endsAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
    }
} 