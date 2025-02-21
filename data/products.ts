export interface ProductEfficiency {
    rating: "A+++" | "A++" | "A+" | "A" | "B"
    seer?: number
    annualConsumption?: number
    noiseLevel?: number
    powerConsumption?: number
    standbyPower?: number
}

export interface Product {
    id: string
    name: string
    price: number
    description: string
    category: string
    subCategory: string
    image: string
    efficiency?: ProductEfficiency
    specs: {
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
    features: string[]
    relatedCategories: string[] // For recommending in learn pages
    savings?: string
    rating?: number
    specifications?: Record<string, string | number>
    details?: {
        overview: string
        highlights: string[]
        technicalDetails: string[]
    }
    relatedProducts?: string[]
    stock?: number
    tags: string[]
    slug: string
}

// Mock products data - will be replaced with database data
export const products: Product[] = [
    {
        id: "ac-1",
        name: "1.5HP Inverter Split AC",
        price: 275000,
        description: "Energy-efficient inverter AC with smart control",
        category: "cooling",
        subCategory: "ac",
        image: "/images/products/inverter-ac.jpg",
        efficiency: {
            rating: "A+++",
            seer: 21,
            annualConsumption: 850,
            noiseLevel: 21
        },
        specs: {
            power: "1.5 HP",
            type: "Split Unit",
            coolant: "R32",
            coverage: "18-24 sqm"
        },
        features: [
            "WiFi Control",
            "Sleep Mode",
            "Auto Restart",
            "Timer Function"
        ],
        relatedCategories: ["temperature", "energy-savings"],
        tags: ["cooling", "energy-efficient", "smart-control"],
        slug: "1-5hp-inverter-split-ac"
    },
    {
        id: "inv-1",
        name: "5kVA Hybrid Inverter",
        price: 450000,
        description: "Pure sine wave inverter with solar charging",
        category: "power",
        subCategory: "inverter",
        image: "/images/products/hybrid-inverter.jpg",
        specs: {
            capacity: "5kVA",
            type: "Hybrid",
            efficiency: "98%",
            warranty: "2 years"
        },
        features: [
            "MPPT Charging",
            "LCD Display",
            "Mobile Monitoring",
            "Overload Protection"
        ],
        relatedCategories: ["backup-power", "solar-power", "energy-savings"],
        tags: ["power", "inverter", "solar-compatible"],
        slug: "5kva-hybrid-inverter"
    },
    {
        id: 'luminous-5kva-inverter',
        name: 'Luminous 5KVA Inverter',
        price: 450000,
        description: 'High-capacity inverter for homes and offices',
        category: 'power',
        subCategory: 'inverter',
        image: '/products/inverter-2.jpg',
        specs: {
            capacity: '5KVA',
            type: 'Pure Sine Wave',
            efficiency: '98%',
            warranty: '2 years'
        },
        features: [
            'Pure Sine Wave Output',
            'LCD Display',
            'Intelligent Battery Management',
            'Overload Protection'
        ],
        relatedCategories: ['backup-power'],
        tags: ['power', 'inverter', 'energy-savings'],
        slug: 'luminous-5kva-inverter'
    },
    {
        id: 'solar-2kw-package',
        name: '2KW Complete Solar System',
        description: 'Complete solar power system with panels, batteries, and inverter',
        price: 1250000,
        image: '/products/solar-1.jpg',
        rating: 4.9,
        category: 'power',
        subCategory: 'solar',
        features: [
            '2KW Solar Panels',
            '5KVA Hybrid Inverter',
            '200AH Lithium Batteries',
            'Complete Installation'
        ],
        savings: '₦45,000/month',
        specs: {
            capacity: '2KW',
            panels: '4 x 500W',
            battery: '5.12KWh',
            efficiency: '21%'
        },
        details: {
            overview: 'Complete solar solution designed for Nigerian homes...',
            highlights: [
                'Zero electricity bills',
                'Premium tier-1 panels',
                'Professional installation'
            ],
            technicalDetails: [
                'Daily Production: 8-10KWh',
                'Battery Capacity: 5.12KWh',
                'Panel Efficiency: 21%'
            ]
        },
        relatedProducts: ['smart-solar-monitor', 'power-optimizer'],
        stock: 5,
        relatedCategories: ['solar-power', 'backup-power', 'energy-savings'],
        tags: ['power', 'solar', 'energy-savings'],
        slug: '2kw-complete-solar-system'
    },
    {
        id: 'smart-bulb-pack',
        name: 'Smart LED Bulb 4-Pack',
        description: 'WiFi-enabled smart LED bulbs with app control',
        price: 12000,
        image: '/products/smart-bulb.jpg',
        rating: 4.7,
        category: 'smart-devices',
        subCategory: 'lighting',
        features: [
            'App Control',
            'Voice Command Support',
            'Scheduling',
            'Energy Monitoring'
        ],
        savings: '₦2,000/month',
        specs: {
            wattage: '9W',
            lumens: '800lm',
            color: 'RGB + White',
            lifespan: '25000 hours'
        },
        details: {
            overview: 'Transform your lighting with smart LED bulbs...',
            highlights: [
                'Works with Alexa & Google Home',
                'Energy usage tracking',
                'Automated schedules'
            ],
            technicalDetails: [
                'Input: 220-240V',
                'Beam Angle: 270°',
                'CRI: >80'
            ]
        },
        relatedProducts: ['smart-strip', 'motion-sensor'],
        stock: 50,
        relatedCategories: ['smart-home', 'energy-savings', 'lighting'],
        tags: ['smart-devices', 'lighting', 'energy-savings'],
        slug: 'smart-led-bulb-4-pack'
    },
    {
        id: "portable-ac",
        name: "1HP Portable AC",
        price: 185000,
        description: "Compact and mobile cooling solution",
        category: "cooling",
        subCategory: "portable-ac",
        image: "/images/products/portable-ac.jpg",
        efficiency: {
            rating: "A++",
            seer: 16,
            annualConsumption: 650,
            noiseLevel: 25
        },
        specs: {
            power: "1 HP",
            type: "Portable",
            coolant: "R32",
            coverage: "12-16 sqm"
        },
        features: [
            "Mobile Design",
            "Remote Control",
            "24-Hour Timer",
            "Self-Evaporative System"
        ],
        relatedCategories: ["temperature", "energy-savings"],
        tags: ['cooling', 'energy-savings'],
        slug: '1hp-portable-ac'
    },
    {
        id: "battery-200ah",
        name: "200AH Deep Cycle Battery",
        price: 320000,
        description: "Long-lasting lithium battery for power backup",
        category: "power",
        subCategory: "battery",
        image: "/images/products/battery.jpg",
        specs: {
            capacity: "200AH",
            type: "Lithium Iron Phosphate",
            voltage: "12V",
            cycles: "4000+"
        },
        features: [
            "10-Year Lifespan",
            "Built-in BMS",
            "Temperature Protection",
            "Low Self-Discharge"
        ],
        relatedCategories: ["backup-power", "solar-power"],
        tags: ['power', 'energy-savings'],
        slug: '200ah-deep-cycle-battery'
    },
    {
        id: "smart-lock-1",
        name: "Smart Door Lock",
        price: 85000,
        description: "Biometric and smartphone-controlled door lock with remote access",
        category: "smart-devices",
        subCategory: "security",
        image: "/products/smart-lock.jpg",
        specs: {
            type: "Biometric",
            battery: "1 Year",
            connectivity: "WiFi"
        },
        features: [
            "Fingerprint Access",
            "Mobile App Control",
            "Guest Access",
            "Activity Log"
        ],
        tags: ["access-control", "security", "smart-home"],
        slug: "smart-door-lock",
        relatedCategories: ["security", "smart-home"]
    },
    {
        id: "camera-system-1",
        name: "Smart Security Camera",
        price: 45000,
        description: "HD security camera with night vision and motion detection",
        category: "smart-devices",
        subCategory: "security",
        image: "/products/security-camera.jpg",
        specs: {
            resolution: "1080p",
            nightVision: "Yes",
            storage: "Cloud + SD"
        },
        features: [
            "Motion Detection",
            "Night Vision",
            "Two-way Audio",
            "Cloud Storage"
        ],
        tags: ["surveillance", "camera", "security"],
        slug: "smart-security-camera",
        relatedCategories: ["security", "smart-home"]
    },
    {
        id: "surge-protector-1",
        name: "Smart Surge Protector",
        price: 35000,
        description: "Intelligent surge protection with device monitoring",
        category: "power",
        subCategory: "protection",
        image: "/products/surge-protector.jpg",
        specs: {
            outlets: "6",
            protection: "4000 Joules",
            monitoring: "Yes"
        },
        features: [
            "Device Protection",
            "Power Monitoring",
            "Surge Protection",
            "Mobile Alerts"
        ],
        tags: ["surge-protection", "protection", "power"],
        slug: "smart-surge-protector",
        relatedCategories: ["security", "power"]
    },
    // Add more products...
]

export const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
    if (category === 'all') return products
    return products.filter(product => product.category === category)
}

export const getRelatedProducts = (productId: string): Product[] => {
    const product = getProductById(productId)
    if (!product || !product.relatedProducts) return []
    return product.relatedProducts
        .map(id => getProductById(id))
        .filter((p): p is Product => p !== undefined)
}

// Helper function to get products by related category
export const getProductsByRelatedCategory = (category: string) => {
    return products.filter(product => 
        product.relatedCategories.includes(category)
    )
} 