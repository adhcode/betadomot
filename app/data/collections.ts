export interface Collection {
    id: string
    name: string
    description: string
    image: string
    products: string[] // Product IDs
}

export const collections = {
    featured: [
        {
            id: 'smart-home-essentials',
            name: 'Smart Home Essentials',
            description: 'Everything you need to start your smart home journey',
            image: '/images/collections/smart-home.jpg',
            products: ['smart-thermostat', 'smart-lights', 'smart-plug']
        },
        {
            id: 'energy-saving-bundle',
            name: 'Energy Saving Bundle',
            description: 'Reduce your energy bills with these efficient products',
            image: '/images/collections/energy-saving.jpg',
            products: ['solar-panel-kit', 'smart-inverter', 'battery-pack']
        },
        {
            id: 'home-security',
            name: 'Home Security',
            description: 'Keep your home safe with our security solutions',
            image: '/images/collections/security.jpg',
            products: ['security-camera', 'smart-doorbell', 'motion-sensor']
        }
    ],
    all: [
        {
            id: 'smart-home-essentials',
            name: 'Smart Home Essentials',
            description: 'Everything you need to start your smart home journey',
            image: '/images/collections/smart-home.jpg',
            products: ['smart-thermostat', 'smart-lights', 'smart-plug']
        },
        {
            id: 'energy-saving-bundle',
            name: 'Energy Saving Bundle',
            description: 'Reduce your energy bills with these efficient products',
            image: '/images/collections/energy-saving.jpg',
            products: ['solar-panel-kit', 'smart-inverter', 'battery-pack']
        },
        {
            id: 'home-security',
            name: 'Home Security',
            description: 'Keep your home safe with our security solutions',
            image: '/images/collections/security.jpg',
            products: ['security-camera', 'smart-doorbell', 'motion-sensor']
        },
        {
            id: 'comfort-living',
            name: 'Comfort Living',
            description: 'Enhance your home comfort with smart climate control',
            image: '/images/collections/comfort.jpg',
            products: ['smart-ac', 'air-purifier', 'humidity-control']
        }
    ]
} 