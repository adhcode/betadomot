import { Product } from '../../types/product'

export interface Deal {
    id: string
    product: Product
    discount: number
    endsAt: string
}

export const deals: Deal[] = [
    {
        id: '1',
        product: {
            id: '1',
            name: 'Solar Panel Kit',
            description: 'Complete solar panel kit with inverter and battery',
            price: 150000,
            originalPrice: 200000,
            images: ['/images/solar-panel-kit.jpg'],
            category: 'solar',
            features: ['High efficiency', 'Easy installation', '5-year warranty'],
            rating: 4.8,
            reviewCount: 120,
            inStock: true,
            brand: 'SolarTech',
            warranty: '5 years',
            powerRating: '5kW',
            dimensions: '1000x500x50mm',
            weight: '15kg',
            isOnSale: true,
            dealType: 'Deal of the Day',
            tags: ['solar', 'renewable', 'energy'],
            createdAt: '2024-01-01',
            updatedAt: '2024-01-01'
        },
        discount: 20,
        endsAt: '2024-12-31T23:59:59'
    },
    {
        id: '2',
        product: {
            id: '2',
            name: 'Smart Thermostat',
            description: 'WiFi-enabled smart thermostat with energy saving features',
            price: 25000,
            originalPrice: 30000,
            images: ['/images/smart-thermostat.jpg'],
            category: 'smart-devices',
            features: ['Remote control', 'Energy reports', 'Geofencing'],
            rating: 4.5,
            reviewCount: 85,
            inStock: true,
            brand: 'SmartHome',
            warranty: '2 years',
            dimensions: '100x100x20mm',
            weight: '0.5kg',
            isOnSale: true,
            dealType: 'Sale',
            tags: ['smart', 'thermostat', 'energy-saving'],
            createdAt: '2024-01-01',
            updatedAt: '2024-01-01'
        },
        discount: 15,
        endsAt: '2024-12-31T23:59:59'
    }
] 