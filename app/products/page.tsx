'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Search, ArrowRight, Star, Timer, Truck, Shield,
    Zap, Home, Sofa, Lamp, Tv, Coffee, Bath, Wrench,
    Sun, Lock, Bed, ChefHat, Check, Laptop, ArrowLeft
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { products as baseProducts, getProductById } from '@/data/products'
import { QuickViewModal } from "@/components/products/quick-view-modal"
import { type Product } from '@/types/product'
import { cn } from "@/lib/utils"
import { categories } from "@/data/categories"
import { collections } from '@/data/collections'
import { ProductCard } from '@/components/products/product-card'
import { DealCard } from '@/components/products/deal-card'
import { CollectionCard } from '@/components/products/collection-card'
import { deals } from '@/data/deals'
import { type Collection } from '@/data/collections'
import { ProductGrid } from '@/components/products/product-grid'

// Add createdAt to products to match the Product type
const products: Product[] = baseProducts.map(product => ({
    ...product,
    createdAt: new Date().toISOString()
}))

// Main product categories
const mainCategories = [
    // Smart Living
    {
        name: "Smart Home", icon: Home, href: "/categories/smart-home",
        description: "Automate your daily routines"
    },
    {
        name: "Security", icon: Lock, href: "/categories/security",
        description: "Keep your family safe"
    },
    {
        name: "Entertainment", icon: Tv, href: "/categories/entertainment",
        description: "Create the perfect atmosphere"
    },

    // Energy & Power
    {
        name: "Solar Power", icon: Sun, href: "/categories/solar",
        description: "Save on electricity bills"
    },
    {
        name: "Backup Power", icon: Zap, href: "/categories/backup",
        description: "Never go dark again"
    },
    {
        name: "Lighting", icon: Lamp, href: "/categories/lighting",
        description: "Efficient & beautiful lighting"
    },

    // Home Essentials
    {
        name: "Furniture", icon: Sofa, href: "/categories/furniture",
        description: "Comfort meets style"
    },
    {
        name: "Bedroom", icon: Bed, href: "/categories/bedroom",
        description: "Your perfect sleep sanctuary"
    },
    {
        name: "Kitchen", icon: Coffee, href: "/categories/kitchen",
        description: "Smart cooking solutions"
    },
    {
        name: "Bathroom", icon: Bath, href: "/categories/bathroom",
        description: "Modern bath experiences"
    },

    // Specialty
    {
        name: "Appliances", icon: ChefHat, href: "/categories/appliances",
        description: "Energy-efficient devices"
    },
    {
        name: "Tools", icon: Wrench, href: "/categories/tools",
        description: "Professional-grade equipment"
    },
    {
        name: "Outdoor", icon: Sun, href: "/categories/outdoor",
        description: "Transform your outdoor space"
    },
    {
        name: "Office", icon: Laptop, href: "/categories/office",
        description: "Productive work environment"
    },
]

// Flash deals data
const flashDeals = [
    {
        id: 1,
        name: "Smart LED Bulb Pack",
        price: 15000,
        originalPrice: 25000,
        discount: 40,
        image: "/products/smart-bulb.jpg",
        timeLeft: "2:15:45"
    },
    // ... add more flash deals
]

// Add these new category sections:

const lifestyleCategories = [
    {
        title: "Smart Living",
        subtitle: "automate your home.",
        items: [
            {
                id: "smart-hub-1",
                name: "Smart Home Hub",
                image: "/categories/smart-hub.jpg",
                price: 65000,
                description: "Central control for your smart home",
                images: ["/categories/smart-hub.jpg"],
                category: "smart-home",
                subcategory: "hubs",
                features: ["Voice Control", "Mobile App"],
                brand: "SmartLife",
                tags: ["smart-home", "automation"],
                specifications: {
                    material: "Premium Plastic",
                    size: "Standard Size",
                    dimensions: "15cm x 15cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            },
            // Add more smart living items
        ]
    },
    {
        title: "Energy & Power",
        subtitle: "sustainable solutions.",
        items: [
            {
                id: "solar-1",
                name: "Solar Panel Kit",
                image: "/categories/solar-kit.jpg",
                price: 450000,
                description: "Complete solar power solution",
                images: ["/categories/solar-kit.jpg"],
                category: "energy",
                subcategory: "solar",
                features: ["High Efficiency", "Easy Install"],
                brand: "SolarTech",
                tags: ["energy", "solar"],
                specifications: {
                    material: "Monocrystalline",
                    size: "Standard",
                    dimensions: "100cm x 160cm"
                },
                stock: 5,
                createdAt: new Date().toISOString()
            },
            // Add more energy items
        ]
    },
    {
        title: "Bedding & Bath",
        subtitle: "create your sanctuary.",
        items: [
            {
                id: "bed-1",
                name: "Luxury Bedding",
                image: "/categories/bedding.jpg",
                price: 45000,
                description: "Premium bedding collection",
                images: ["/categories/bedding.jpg"],
                category: "bedding",
                subcategory: "bedding-sets",
                features: [],
                brand: "Brooklinen",
                tags: ["bedding", "luxury"],
                specifications: {
                    material: "100% Cotton",
                    size: "King Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            },
            {
                id: "curtain-1",
                name: "Smart Curtains",
                image: "/categories/curtains.jpg",
                price: 35000,
                description: "Automated window treatments",
                images: ["/categories/curtains.jpg"],
                category: "curtains",
                subcategory: "smart-curtains",
                features: ["Automated", "Voice Control"],
                brand: "Vivint",
                tags: ["curtains", "smart"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            },
            {
                id: "bath-1",
                name: "Bath Collections",
                image: "/categories/bath.jpg",
                price: 25000,
                description: "Complete bathroom solutions",
                images: ["/categories/bath.jpg"],
                category: "bathroom",
                subcategory: "bath-collections",
                features: ["Eco-friendly", "Low-flow"],
                brand: "AquaSpa",
                tags: ["bathroom", "eco"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            },
            {
                id: "towel-1",
                name: "Towel Warmers",
                image: "/categories/warmers.jpg",
                price: 55000,
                description: "Warm and cozy towels",
                images: ["/categories/warmers.jpg"],
                category: "bathroom",
                subcategory: "towel-warmers",
                features: ["Energy Efficient", "Quick Heat"],
                brand: "Heating Bliss",
                tags: ["bathroom", "energy-efficient"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            }
        ]
    },
    {
        title: "Home Decor",
        subtitle: "express your style.",
        items: [
            {
                id: "mirror-1",
                name: "Smart Mirrors",
                image: "/categories/mirrors.jpg",
                price: 75000,
                description: "Interactive home mirror",
                images: ["/categories/mirrors.jpg"],
                category: "decor",
                subcategory: "smart-mirrors",
                features: ["Voice Control", "Energy Efficient"],
                brand: "Vivint",
                tags: ["decor", "smart"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            },
            {
                id: "wall-art-1",
                name: "Wall Art",
                image: "/categories/wall-art.jpg",
                price: 25000,
                description: "Decorative wall art",
                images: ["/categories/wall-art.jpg"],
                category: "decor",
                subcategory: "wall-art",
                features: [],
                brand: "Artisan Creations",
                tags: ["decor", "art"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            },
            {
                id: "pillow-1",
                name: "Throw Pillows",
                image: "/categories/pillows.jpg",
                price: 15000,
                description: "Comfortable throw pillows",
                images: ["/categories/pillows.jpg"],
                category: "decor",
                subcategory: "throw-pillows",
                features: ["Soft", "Hypoallergenic"],
                brand: "Pillow Paradise",
                tags: ["decor", "comfort"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            },
            {
                id: "rug-1",
                name: "Area Rugs",
                image: "/categories/rugs.jpg",
                price: 45000,
                description: "Stylish area rugs",
                images: ["/categories/rugs.jpg"],
                category: "decor",
                subcategory: "area-rugs",
                features: ["Durable", "Eco-friendly"],
                brand: "Rug Paradise",
                tags: ["decor", "eco"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            }
        ]
    },
    {
        title: "Kitchen & Dining",
        subtitle: "cook with passion.",
        items: [
            {
                id: "smart-oven-1",
                name: "Smart Oven",
                image: "/categories/smart-oven.jpg",
                price: 185000,
                description: "Complete kitchen appliance",
                images: ["/categories/smart-oven.jpg"],
                category: "kitchen",
                subcategory: "smart-ovens",
                features: ["Voice Control", "Energy Efficient"],
                brand: "KitchenTech",
                tags: ["kitchen", "smart"],
                specifications: {
                    material: "Stainless Steel",
                    size: "Standard",
                    dimensions: "60cm x 40cm"
                },
                stock: 5,
                createdAt: new Date().toISOString()
            },
            // Add more kitchen items
        ]
    },
    {
        title: "Indoor-Outdoor",
        subtitle: "seamless living.",
        items: [
            {
                id: "garden-light-1",
                name: "Garden Lights",
                image: "/categories/garden.jpg",
                price: 35000,
                description: "Beautiful garden lighting",
                images: ["/categories/garden.jpg"],
                category: "outdoor",
                subcategory: "garden-lights",
                features: ["Energy Efficient", "Weather Resistant"],
                brand: "Lighting Paradise",
                tags: ["outdoor", "eco"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            },
            {
                id: "planter-1",
                name: "Planters",
                image: "/categories/planters.jpg",
                price: 15000,
                description: "Decorative planters",
                images: ["/categories/planters.jpg"],
                category: "outdoor",
                subcategory: "planters",
                features: [],
                brand: "Gardening Bliss",
                tags: ["outdoor", "gardening"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            },
            {
                id: "outdoor-seating-1",
                name: "Outdoor Seating",
                image: "/categories/seating.jpg",
                price: 85000,
                description: "Comfortable outdoor seating",
                images: ["/categories/seating.jpg"],
                category: "outdoor",
                subcategory: "outdoor-seating",
                features: ["Weather Resistant", "Eco-friendly"],
                brand: "Outdoor Bliss",
                tags: ["outdoor", "eco"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            },
            {
                id: "weather-sensor-1",
                name: "Weather Sensors",
                image: "/categories/weather.jpg",
                price: 25000,
                description: "Monitor weather conditions",
                images: ["/categories/weather.jpg"],
                category: "outdoor",
                subcategory: "weather-sensors",
                features: ["Energy Efficient", "Weather Resistant"],
                brand: "Weather Paradise",
                tags: ["outdoor", "eco"],
                specifications: {
                    material: "Premium Material",
                    size: "Standard Size",
                    dimensions: "120cm x 200cm"
                },
                stock: 10,
                createdAt: new Date().toISOString()
            }
        ]
    },
    {
        title: "Workspace",
        subtitle: "productive environment.",
        items: [
            {
                id: "desk-1",
                name: "Standing Desk",
                image: "/categories/standing-desk.jpg",
                price: 125000,
                description: "Complete workspace solution",
                images: ["/categories/standing-desk.jpg"],
                category: "workspace",
                subcategory: "standing-desks",
                features: ["Adjustable Height", "Ergonomic"],
                brand: "OfficeTech",
                tags: ["workspace", "ergonomic"],
                specifications: {
                    material: "Solid Wood",
                    size: "Standard",
                    dimensions: "120cm x 60cm"
                },
                stock: 5,
                createdAt: new Date().toISOString()
            },
            // Add more workspace items
        ]
    }
]

// Add new showcase sections
const smartSolutions = {
    title: "Smart Solutions for Modern Living",
    sections: [
        {
            title: "Voice Control Everything",
            subtitle: "Meet your new home assistant",
            product: {
                id: "alexa-1",
                name: "Amazon Echo (4th Gen)",
                price: 45000,
                image: "/products/alexa-echo.jpg",
                features: [
                    "Voice control your home",
                    "Premium sound quality",
                    "Smart home hub built in",
                    "Sleek, modern design"
                ]
            }
        },
        {
            title: "Automate Your Comfort",
            subtitle: "Smart climate control",
            product: {
                id: "nest-1",
                name: "Nest Learning Thermostat",
                price: 85000,
                image: "/products/nest.jpg",
                features: [
                    "AI-powered temperature control",
                    "Energy savings",
                    "Remote control via app",
                    "Beautiful display"
                ]
            }
        }
    ]
}

const lifestyleInspiration = {
    title: "Design Your Perfect Space",
    collections: [
        {
            title: "Work From Home",
            description: "Create a productive workspace",
            image: "/lifestyle/workspace.jpg",
            products: [
                {
                    id: "desk-1",
                    name: "Standing Desk",
                    price: 125000,
                    image: "/products/desk.jpg"
                },
                {
                    id: "chair-1",
                    name: "Ergonomic Chair",
                    price: 85000,
                    image: "/products/chair.jpg"
                }
            ]
        },
        {
            title: "Relaxation Corner",
            description: "Your personal retreat",
            image: "/lifestyle/relaxation.jpg",
            products: [
                {
                    id: "lamp-1",
                    name: "Smart Ambient Light",
                    price: 35000,
                    image: "/products/lamp.jpg"
                },
                {
                    id: "diffuser-1",
                    name: "Aroma Diffuser",
                    price: 25000,
                    image: "/products/diffuser.jpg"
                }
            ]
        },
        {
            title: "Smart Entertainment",
            description: "Immersive home theater experience",
            image: "/lifestyle/entertainment.jpg",
            products: [
                {
                    id: "tv-1",
                    name: "Smart TV",
                    price: 450000,
                    image: "/products/smart-tv.jpg"
                },
                {
                    id: "soundbar-1",
                    name: "Wireless Soundbar",
                    price: 85000,
                    image: "/products/soundbar.jpg"
                }
            ]
        },
        {
            title: "Kitchen & Dining",
            description: "Cook with intelligence",
            image: "/lifestyle/kitchen.jpg",
            products: [
                {
                    id: "oven-1",
                    name: "Smart Oven",
                    price: 250000,
                    image: "/products/smart-oven.jpg"
                },
                {
                    id: "fridge-1",
                    name: "Connected Fridge",
                    price: 650000,
                    image: "/products/smart-fridge.jpg"
                }
            ]
        }
    ]
}

// Add this after the lifestyleCategories

const plantsAndFlowers = {
    title: "Bring Nature Inside",
    subtitle: "Transform your space with life and color",
    collections: [
        {
            title: "Air-Purifying Plants",
            description: "Natural air filters for a healthier home",
            items: [
                {
                    id: "plant-1",
                    name: "Peace Lily",
                    price: 15000,
                    image: "/products/plants/peace-lily.jpg",
                    benefits: ["Removes air toxins", "Low maintenance", "Elegant blooms"],
                    careLevel: "Easy",
                    lightNeeds: "Low to medium light",
                    category: "air-purifying"
                },
                {
                    id: "plant-2",
                    name: "Snake Plant",
                    price: 12000,
                    image: "/products/plants/snake-plant.jpg",
                    benefits: ["Night oxygen production", "Drought resistant", "Modern look"],
                    careLevel: "Very easy",
                    lightNeeds: "Any light condition",
                    category: "air-purifying"
                }
            ]
        },
        {
            title: "Mood-Boosting Flowers",
            description: "Add color and joy to your space",
            items: [
                {
                    id: "flower-1",
                    name: "Orchid Collection",
                    price: 25000,
                    image: "/products/plants/orchid.jpg",
                    benefits: ["Long-lasting blooms", "Elegant presence", "Air humidifier"],
                    careLevel: "Moderate",
                    lightNeeds: "Bright indirect light",
                    category: "flowers"
                },
                {
                    id: "flower-2",
                    name: "Anthurium",
                    price: 18000,
                    image: "/products/plants/anthurium.jpg",
                    benefits: ["Year-round blooms", "Air purifying", "Statement piece"],
                    careLevel: "Easy",
                    lightNeeds: "Medium light",
                    category: "flowers"
                }
            ]
        }
    ]
}

// Define vibrant category colors
const categoryColors: Record<string, string> = {
    'smart-lighting': "bg-amber-400 text-white hover:bg-amber-500",
    'smart-security': "bg-rose-400 text-white hover:bg-rose-500",
    'home-automation': "bg-blue-400 text-white hover:bg-blue-500",
    'smart-home': "bg-indigo-400 text-white hover:bg-indigo-500",
    'solar-power': "bg-yellow-400 text-white hover:bg-yellow-500",
    'backup-power': "bg-emerald-400 text-white hover:bg-emerald-500",
    'bedroom': "bg-purple-400 text-white hover:bg-purple-500",
    'bath': "bg-teal-400 text-white hover:bg-teal-500",
    'kitchen': "bg-orange-400 text-white hover:bg-orange-500",
    'living-room': "bg-cyan-400 text-white hover:bg-cyan-500",
    'office': "bg-violet-400 text-white hover:bg-violet-500",
    'outdoor': "bg-lime-400 text-white hover:bg-lime-500"
}

// Transform categories data for the UI
const mainCategoryGroups = Object.entries(categories).reduce((acc, [slug, category]) => {
    acc[category.title] = {
        slug,
        color: categoryColors[slug] || "bg-gray-400 text-white hover:bg-gray-500",
        description: category.description,
        subcategories: category.subcategories,
        features: category.features,
        image: category.image
    }
    return acc
}, {} as Record<string, {
    slug: string
    color: string
    description: string
    subcategories: string[]
    features: { title: string; description: string }[]
    image: string
}>)

export default function ProductsPage() {
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

    return (
        <main className="min-h-screen bg-white">
            {/* Enhanced Hero Banner */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A]">
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
                <div
                    className="absolute inset-0 bg-gradient-to-br from-[#E4A853]/20 to-transparent"
                    style={{
                        maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 70%)'
                    }}
                />
                {/* Animated Background Elements */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 right-0 w-96 h-96 bg-[#E4A853]/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-0 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                />

                <div className="container mx-auto px-4 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4A853]/10 border border-[#E4A853]/20">
                                <Star className="h-4 w-4 text-[#E4A853]" />
                                <span className="text-sm text-[#E4A853]">Trusted by 10,000+ Nigerian homes</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                Elevate Your Home with
                                <span className="text-[#E4A853] block mt-3">
                                    Smart African Living
                                </span>
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                                Experience the perfect blend of modern technology and African aesthetics.
                                Transform your space into an intelligent, energy-efficient sanctuary that
                                celebrates our cultural heritage.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    className="bg-[#E4A853] hover:bg-[#E4A853]/90 text-black h-14 px-8 rounded-full"
                                >
                                    Start Shopping
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-white border-white hover:bg-white/10 h-14 px-8 rounded-full"
                                >
                                    Book Consultation
                                </Button>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Timer className="h-5 w-5 text-[#E4A853]" />
                                        <span className="text-white font-semibold">Fast Delivery</span>
                                    </div>
                                    <p className="text-sm text-gray-400">48-hour delivery in Lagos</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-5 w-5 text-[#E4A853]" />
                                        <span className="text-white font-semibold">2-Year Warranty</span>
                                    </div>
                                    <p className="text-sm text-gray-400">Full coverage guarantee</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Truck className="h-5 w-5 text-[#E4A853]" />
                                        <span className="text-white font-semibold">Free Installation</span>
                                    </div>
                                    <p className="text-sm text-gray-400">Professional setup included</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="relative lg:h-[600px] hidden lg:block"
                        >
                            {/* Product Showcase Grid */}
                            <div className="grid grid-cols-2 gap-6 h-full">
                                <div className="space-y-6">
                                    <motion.div
                                        initial={{ y: 20 }}
                                        animate={{ y: 0 }}
                                        className="relative aspect-square rounded-2xl overflow-hidden"
                                    >
                                        <Image
                                            src="/products/smart-light.jpg"
                                            alt="Smart Lighting"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ y: 20 }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                                    >
                                        <Image
                                            src="/products/smart-security.jpg"
                                            alt="Smart Security"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </motion.div>
                                </div>
                                <div className="space-y-6 pt-12">
                                    <motion.div
                                        initial={{ y: 20 }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                                    >
                                        <Image
                                            src="/products/smart-thermostat.jpg"
                                            alt="Smart Climate Control"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ y: 20 }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="relative aspect-square rounded-2xl overflow-hidden"
                                    >
                                        <Image
                                            src="/products/smart-speaker.jpg"
                                            alt="Smart Entertainment"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg 
                                    rounded-2xl p-6 border border-white/20 shadow-xl"
                            >
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <p className="text-4xl font-bold text-white">50%</p>
                                        <p className="text-sm text-gray-300">Energy Savings</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-4xl font-bold text-white">24/7</p>
                                        <p className="text-sm text-gray-300">Smart Monitoring</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-4xl font-bold text-white">100%</p>
                                        <p className="text-sm text-gray-300">Customer Support</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Category Highlights */}
            <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {Object.entries(categories).slice(0, 4).map(([id, category]) => (
                            <Link
                                key={id}
                                href={`/categories/${id}`}
                                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                            >
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                                    <p className="text-sm text-white/80 line-clamp-2">{category.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-2xl font-bold">Featured Products</h2>
                            <p className="text-gray-600">Discover our most popular smart home solutions</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="rounded-full">
                                Best Sellers
                            </Button>
                            <Button variant="outline" className="rounded-full">
                                New Arrivals
                            </Button>
                            <Button variant="outline" className="rounded-full">
                                On Sale
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.slice(0, 8).map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ProductCard
                                    product={product}
                                    onQuickView={setQuickViewProduct}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Smart Living Solutions */}
            <section className="py-16 bg-neutral-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Smart Living Solutions</h2>
                            <p className="text-gray-400 text-lg">
                                Transform your home with our intelligent solutions that combine style,
                                comfort, and efficiency.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {smartSolutions.sections.map((section, index) => (
                                    <div key={index} className="bg-white/5 rounded-xl p-6 space-y-4">
                                        <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                                        <p className="text-gray-400">{section.subtitle}</p>
                                        <ul className="space-y-2">
                                            {section.product.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-gray-300">
                                                    <Check className="h-4 w-4 text-[#E4A853]" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="w-full bg-[#E4A853] hover:bg-[#E4A853]/90 text-black">
                                            Learn More
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-6">
                                    <motion.div
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        className="relative aspect-square rounded-xl overflow-hidden"
                                    >
                                        <Image
                                            src="/products/smart-home-1.jpg"
                                            alt="Smart Home"
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        className="relative aspect-[4/3] rounded-xl overflow-hidden"
                                    >
                                        <Image
                                            src="/products/smart-home-2.jpg"
                                            alt="Smart Living"
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>
                                <div className="space-y-6 pt-12">
                                    <motion.div
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        className="relative aspect-[4/3] rounded-xl overflow-hidden"
                                    >
                                        <Image
                                            src="/products/smart-home-3.jpg"
                                            alt="Smart Solutions"
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ y: 20 }}
                                        whileInView={{ y: 0 }}
                                        className="relative aspect-square rounded-xl overflow-hidden"
                                    >
                                        <Image
                                            src="/products/smart-home-4.jpg"
                                            alt="Smart Features"
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lifestyle Collections */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Shop by Lifestyle</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover curated collections that match your lifestyle and transform your living spaces
                            into sophisticated, connected environments.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {lifestyleInspiration.collections.map((collection, index) => (
                            <motion.div
                                key={collection.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-xl overflow-hidden"
                            >
                                <div className="aspect-[3/4] relative">
                                    <Image
                                        src={collection.image}
                                        alt={collection.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                </div>
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <h3 className="text-xl font-bold text-white mb-2">{collection.title}</h3>
                                    <p className="text-white/80 mb-4">{collection.description}</p>
                                    <Button
                                        className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20"
                                    >
                                        Explore Collection
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Products */}
            <section className="py-16 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">All Products</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Browse our complete collection of smart home solutions and modern living essentials
                        </p>
                    </div>
                    <ProductGrid
                        products={products}
                        onQuickView={setQuickViewProduct}
                    />
                </div>
            </section>

            {/* Quick View Modal */}
            {quickViewProduct && (
                <QuickViewModal
                    isOpen={!!quickViewProduct}
                    onClose={() => setQuickViewProduct(null)}
                    product={quickViewProduct}
                />
            )}
        </main>
    )
} 