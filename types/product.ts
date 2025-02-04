export interface Product {
    id: string
    name: string
    description: string
    price: number
    image: string
    rating: number
    category: ProductCategory
    features: string[]
    savings: string
    specifications: {
        [key: string]: string | number
    }
    details: {
        overview: string
        highlights: string[]
        technicalDetails: string[]
    }
    relatedProducts: string[]
    stock: number
}

export type ProductCategory = 
    | 'inverters'
    | 'solar'
    | 'smart-devices'
    | 'appliances'
    | 'batteries'
    | 'accessories' 