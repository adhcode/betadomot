import { Product, ProductEfficiency } from '../types/product';

// Mock products data - will be replaced with database data
export const products: Product[] = [
    {
        id: 'ac-1',
        name: 'LG Dual Inverter Air Conditioner',
        description: 'Energy-efficient split AC with smart features',
        price: 450000,
        originalPrice: 500000,
        discount: 10,
        images: ['/images/products/ac-1.jpg'],
        category: 'appliances',
        subcategory: 'air-conditioners',
        features: ['Smart Inverter', 'WiFi Control', 'Low Noise'],
        specifications: {
            capacity: '1.5HP',
            type: 'Split',
            efficiency: 'A+++',
            warranty: '5 years'
        },
        rating: 4.8,
        reviewCount: 120,
        stock: 15,
        inStock: true,
        brand: 'LG',
        warranty: '5 years',
        isOnSale: true,
        dealType: 'Sale',
        tags: ['air-conditioner', 'smart', 'inverter'],
        createdAt: '2024-01-15',
        efficiency: {
            rating: 'A+++',
            seer: 4.5,
            annualConsumption: 1200,
            noiseLevel: 19
        }
    },
    {
        id: "ac-2",
        name: "2HP Window AC",
        description: "Powerful window air conditioner",
        price: 180000,
        originalPrice: 200000,
        discount: 10,
        images: ["/images/ac/2hp-window.jpg"],
        category: "air-conditioners",
        subcategory: "window",
        features: ["Energy saver", "Sleep mode", "Auto restart"],
        specifications: {
            capacity: "2HP",
            type: "Window",
            warranty: "1 year"
        },
        rating: 4.5,
        reviewCount: 78,
        inStock: true,
        brand: "CoolTech",
        warranty: "1 year",
        powerRating: "2HP",
        dimensions: "600x400x300mm",
        weight: "45kg",
        isOnSale: false,
        tags: ["ac", "cooling", "window"],
        createdAt: "2024-01-02",
        updatedAt: "2024-01-02"
    },
    {
        id: "fan-1",
        name: "Smart Ceiling Fan",
        description: "WiFi enabled ceiling fan with remote control",
        price: 45000,
        originalPrice: 50000,
        discount: 10,
        images: ["/images/fans/smart-ceiling.jpg"],
        category: "fans",
        subcategory: "ceiling",
        features: ["WiFi control", "Timer function", "6 speeds"],
        specifications: {
            size: "52 inches",
            type: "Ceiling",
            warranty: "2 years"
        },
        rating: 4.8,
        reviewCount: 120,
        inStock: true,
        brand: "AirFlow",
        warranty: "2 years",
        powerRating: "60W",
        dimensions: "52 inches",
        weight: "8kg",
        isOnSale: true,
        dealType: "Sale",
        tags: ["fan", "cooling", "smart"],
        createdAt: "2024-01-02",
        updatedAt: "2024-01-02"
    },
    {
        id: "fan-2",
        name: "Standing Fan",
        description: "Powerful standing fan with oscillation",
        price: 25000,
        originalPrice: 30000,
        discount: 17,
        images: ["/images/fans/standing.jpg"],
        category: "fans",
        subcategory: "standing",
        features: ["3 speeds", "Oscillation", "Timer"],
        specifications: {
            size: "16 inches",
            type: "Standing",
            warranty: "1 year"
        },
        rating: 4.3,
        reviewCount: 65,
        inStock: true,
        brand: "AirFlow",
        warranty: "1 year",
        powerRating: "45W",
        dimensions: "16 inches",
        weight: "5kg",
        isOnSale: true,
        dealType: "Sale",
        tags: ["fan", "cooling", "standing"],
        createdAt: "2024-01-02",
        updatedAt: "2024-01-02"
    },
    {
        id: "light-1",
        name: "Smart LED Bulb",
        description: "Color changing smart LED bulb",
        price: 15000,
        originalPrice: 18000,
        discount: 17,
        images: ["/images/lights/smart-bulb.jpg"],
        category: "lighting",
        subcategory: "bulbs",
        features: ["16M colors", "Voice control", "Scheduling"],
        specifications: {
            wattage: "9W",
            type: "LED",
            warranty: "2 years"
        },
        rating: 4.9,
        reviewCount: 210,
        inStock: true,
        brand: "LumiTech",
        warranty: "2 years",
        powerRating: "9W",
        dimensions: "60mm x 110mm",
        weight: "0.1kg",
        isOnSale: true,
        dealType: "Sale",
        tags: ["light", "smart", "led"],
        createdAt: "2024-01-02",
        updatedAt: "2024-01-02"
    },
    {
        id: "light-2",
        name: "LED Strip Light",
        description: "RGB LED strip with remote control",
        price: 12000,
        originalPrice: 15000,
        discount: 20,
        images: ["/images/lights/led-strip.jpg"],
        category: "lighting",
        subcategory: "strips",
        features: ["RGB colors", "Remote control", "Cuttable"],
        specifications: {
            length: "5m",
            type: "LED Strip",
            warranty: "1 year"
        },
        rating: 4.6,
        reviewCount: 95,
        inStock: true,
        brand: "LumiTech",
        warranty: "1 year",
        powerRating: "24W",
        dimensions: "5m x 10mm",
        weight: "0.2kg",
        isOnSale: true,
        dealType: "Sale",
        tags: ["light", "led", "strip"],
        createdAt: "2024-01-02",
        updatedAt: "2024-01-02"
    },
    {
        id: "security-1",
        name: "Smart Doorbell",
        description: "Video doorbell with motion detection",
        price: 35000,
        originalPrice: 40000,
        discount: 13,
        images: ["/images/security/doorbell.jpg"],
        category: "security",
        subcategory: "doorbells",
        features: ["1080p video", "Motion detection", "Two-way audio"],
        specifications: {
            resolution: "1080p",
            type: "Doorbell",
            warranty: "1 year"
        },
        rating: 4.7,
        reviewCount: 150,
        inStock: true,
        brand: "SecureHome",
        warranty: "1 year",
        powerRating: "5W",
        dimensions: "120mm x 45mm",
        weight: "0.3kg",
        isOnSale: true,
        dealType: "Sale",
        tags: ["security", "camera", "doorbell"],
        createdAt: "2024-01-02",
        updatedAt: "2024-01-02"
    },
    {
        id: "security-2",
        name: "Security Camera",
        description: "Outdoor security camera with night vision",
        price: 45000,
        originalPrice: 50000,
        discount: 10,
        images: ["/images/security/camera.jpg"],
        category: "security",
        subcategory: "cameras",
        features: ["1080p video", "Night vision", "Motion alerts"],
        specifications: {
            resolution: "1080p",
            type: "Camera",
            warranty: "1 year"
        },
        rating: 4.8,
        reviewCount: 180,
        inStock: true,
        brand: "SecureHome",
        warranty: "1 year",
        powerRating: "8W",
        dimensions: "100mm x 100mm x 100mm",
        weight: "0.5kg",
        isOnSale: true,
        dealType: "Sale",
        tags: ["security", "camera", "outdoor"],
        createdAt: "2024-01-02",
        updatedAt: "2024-01-02"
    }
];

export function getProductById(id: string): Product | undefined {
    return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
    return products.filter(product => product.category === category);
}

export function getRelatedProducts(product: Product): Product[] {
    return products
        .filter(p => 
            p.id !== product.id && 
            (p.category === product.category || p.subcategory === product.subcategory)
        )
        .slice(0, 4);
} 