'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Types
interface Product {
    name: string
    price: string
}

interface Category {
    title: string
    description: string
    image: string
    items: string[]
    link: string
    color: string
}

const categories: Category[] = [
    {
        title: "Smart Furniture",
        description: "Modern, functional pieces that adapt to your lifestyle",
        image: "/smart-furniture.jpg",
        items: ["Smart Sofas", "Adjustable Beds", "Connected Tables", "Intelligent Storage"],
        link: "/products/furniture",
        color: "#E4A853"
    },
    {
        title: "Bedding & Bath",
        description: "Luxury comfort for your personal spaces",
        image: "/beddings.jpeg",
        items: ["Premium Bedding", "Smart Mattresses", "Luxury Towels", "Bath Automation"],
        link: "/products/bedding-bath",
        color: "#E4A853"
    },
    {
        title: "Home Decor",
        description: "Artful touches that define your space",
        image: "/accesories.jpeg",
        items: ["Art Pieces", "Vases", "Mirrors", "Rugs"],
        link: "/products/decor",
        color: "#E4A853"
    },
    {
        title: "Smart Lighting",
        description: "Intelligent lighting for every mood",
        image: "/smart-bulb.jpg",
        items: ["Chandeliers", "Smart Bulbs", "Wall Lights", "Outdoor"],
        link: "/products/lighting",
        color: "#E4A853"
    },
    {
        title: "Kitchen Essentials",
        description: "Modern tools for the heart of your home",
        image: "/appliance.jpeg",
        items: ["Cookware", "Smart Appliances", "Organization", "Dining"],
        link: "/products/kitchen",
        color: "#E4A853"
    },
    {
        title: "Smart Appliances",
        description: "Energy-efficient devices for modern living",
        image: "/smart-appliances.jpg",
        items: ["AC Units", "Washers", "Refrigerators", "TVs"],
        link: "/products/appliances",
        color: "#E4A853"
    }
]

export function ProductShowcase() {
    return (
        <motion.section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-sm font-medium text-[#E4A853] mb-4 block">
                        Our Collections
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-none">
                        Everything for
                        <br />
                        <span className="text-[#E4A853]">your dream home.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From essential appliances to luxurious decor, discover our curated collection
                        of premium products for every corner of your home.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={category.title}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

// Category Card Component
function CategoryCard({ category, index }: { category: Category; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-md 
                hover:shadow-xl transition-all duration-300 flex flex-col"
        >
            {/* Image Section */}
            <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 
                        group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t 
                    from-black/70 via-black/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm 
                    px-[10px] py-[2px] rounded-full shadow-lg transform -translate-y-1 
                    group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm font-medium text-[#1A1A1A]">
                        {category.title}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex-1 flex flex-col">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A] 
                        group-hover:text-[#E4A853] transition-colors duration-300">
                        {category.title}
                    </h3>
                    <p className="text-gray-600 mb-8 line-clamp-2">
                        {category.description}
                    </p>

                    {/* Category Items */}
                    <div className="grid grid-cols-2 gap-3">
                        {category.items.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 p-2 rounded-lg
                                    bg-gray-50 group-hover:bg-[#E4A853]/5 
                                    transition-all duration-300 transform hover:scale-105
                                    border border-transparent hover:border-[#E4A853]/20"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#E4A853]" />
                                <span className="text-sm text-gray-600 truncate">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons - Now always at bottom */}
                <div className="flex gap-4 mt-8 pt-8 border-t border-gray-100">
                    <Link href={category.link} className="flex-1">
                        <Button
                            className="w-full bg-[#1A1A1A] hover:bg-[#E4A853] text-white 
                                hover:text-black transition-all duration-300 h-12
                                shadow-sm hover:shadow-md"
                        >
                            View All
                        </Button>
                    </Link>
                    <Link href={`${category.link}/explore`} className="flex-1">
                        <Button
                            variant="outline"
                            className="w-full border-[#1A1A1A] text-[#1A1A1A] 
                                hover:bg-[#1A1A1A] hover:text-white transition-all 
                                duration-300 h-12 shadow-sm hover:shadow-md
                                group relative overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center">
                                Explore
                                <ArrowRight className="ml-2 h-4 w-4 
                                    group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}