"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "../../../components/ui/button"
import Link from "next/link"
import { categories, type Category } from "../../../data/categories"
import { getProductsByCategory } from "../../../data/products"
import type { Product } from "../../../../types/product"

interface CategoryWithId extends Category {
    id: string;
}

export function ProductShowcase() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-20 bg-white"
        >
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-sm font-medium text-[#E4A853] mb-6 block">
                        Our Collections
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-none">
                        Everything for
                        <br />
                        <span className="text-[#E4A853]">your dream home.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Curated excellence for the sophisticated home, from essentials to elegance.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {Object.entries(categories).map(([key, category], index) => (
                        <CategoryCard
                            key={key}
                            category={{ ...category, id: key }}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

function CategoryCard({ category, index }: { category: CategoryWithId; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm 
                hover:shadow-xl transition-all duration-500 flex flex-col w-full"
        >
            {/* Image Section with Overlay */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80" />
            </div>

            {/* Content Section - Overlaid on Image */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform transition-all duration-300 group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-3">
                        {category.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 line-clamp-2">
                        {category.description}
                    </p>

                    {/* Features Preview */}
                    <div className="flex gap-2 mb-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full 
                            bg-white/10 backdrop-blur-sm text-white/90 text-xs">
                            {category.title}
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <Button
                            asChild
                            variant="outline"
                            className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 
                                text-white hover:bg-white/20 transition-all duration-300"
                        >
                            <Link href={`/products/${category.id}`}>
                                View Products
                            </Link>
                        </Button>
                        <Button
                            asChild
                            className="flex-1 bg-[#E4A853] hover:bg-[#E4A853]/90 text-black 
                                transition-all duration-300"
                        >
                            <Link href={`/categories/${category.id}`}>
                                Explore
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
} 