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
    images: string[]
    category: string
    features?: string[]
    specifications?: {
        [key: string]: string
    }
    rating?: number
    reviews?: number
    stock?: number
    sku?: string
    brand?: string
}

export type ProductCategory = 
    | 'inverters'
    | 'solar'
    | 'smart-devices'
    | 'appliances'
    | 'batteries'
    | 'accessories' 