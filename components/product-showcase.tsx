'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const featuredProducts = [
    {
        id: 1,
        name: "Smart Inverter System",
        category: "Power",
        image: "/products/inverter.jpg",
        price: "₦450,000",
    },
    {
        id: 2,
        name: "Intelligent AC",
        category: "Climate",
        image: "/products/ac.jpg",
        price: "₦380,000",
    },
    {
        id: 3,
        name: "Home Monitor",
        category: "Control",
        image: "/products/monitor.jpg",
        price: "₦85,000",
    }
]

export function ProductShowcase() {
    return (
        <section className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-[#E4A853]">Featured Products</span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">Curated Excellence</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our selection of premium solutions, each chosen to enhance your home's comfort and efficiency.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] mb-6 bg-white rounded-lg overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm text-[#E4A853] mb-1">{product.category}</p>
                                    <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                                    <p className="text-gray-600">{product.price}</p>
                                </div>
                                <Link href={`/products/${product.id}`}>
                                    <Button
                                        variant="ghost"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <ArrowRight className="h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link href="/products">
                        <Button className="bg-[#1A1A1A] hover:bg-[#E4A853] text-white hover:text-black">
                            View All Products
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
} 