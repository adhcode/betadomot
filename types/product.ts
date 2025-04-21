export interface ProductSpecs {
    capacity?: string
    type?: string
    efficiency?: string
    warranty?: string
    wattage?: string
    power?: string
    coolant?: string
    coverage?: string
    panels?: string
    battery?: string
    voltage?: string
    cycles?: string
    resolution?: string
    nightVision?: string
    storage?: string
    outlets?: string
    protection?: string
    monitoring?: string
    lumens?: string
    color?: string
    lifespan?: string
    connectivity?: string
    [key: string]: string | undefined
}

export interface ProductEfficiency {
    rating: "A+++" | "A++" | "A+" | "A" | "B"
    seer?: number
    annualConsumption?: number
    noiseLevel?: number
    powerConsumption?: number
    standbyPower?: number
}

export interface ProductDetails {
    overview: string
    highlights: string[]
    technicalDetails: string[]
}

export interface Product {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number
    discount?: number
    images: string[]
    image?: string
    category: string
    subcategory?: string
    features?: string[]
    specifications?: Record<string, string | number>
    rating?: number
    reviews?: number
    reviewCount?: number
    stock?: number
    inStock?: boolean
    brand?: string
    warranty?: string
    powerRating?: string
    voltage?: string
    dimensions?: string
    weight?: string
    isOnSale?: boolean
    dealType?: "Deal of the Day" | "Sale" | "Open Box"
    tags?: string[]
    createdAt?: string | Date
    updatedAt?: string | Date
    efficiency?: ProductEfficiency
    details?: ProductDetails
    relatedProducts?: string[]
}

export type ProductCategory = 
    | 'inverters'
    | 'solar'
    | 'smart-devices'
    | 'appliances'
    | 'batteries'
    | 'accessories' 