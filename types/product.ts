export interface Product {
    id: string
    name: string
    slug: string
    description: string
    price: number
    monthlyBill: string
    image: string
    benefits: string[]
    whyItWorks: string
    savings: string
    idealFor: string
    features: {
        title: string
        description: string
    }[]
    category: 'inverter' | 'solar' | 'monitor' | 'stabilizer'
    status: 'active' | 'outOfStock' | 'comingSoon'
    specifications: {
        [key: string]: string
    }
    createdAt: string
    updatedAt: string
}

export type ProductCategory = 
    | 'inverters'
    | 'solar'
    | 'smart-devices'
    | 'appliances'
    | 'batteries'
    | 'accessories' 