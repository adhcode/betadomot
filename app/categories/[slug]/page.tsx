'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, Filter, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ProductFilters } from "@/components/products/product-filters"
import { categories } from "@/data/categories"
import { getProductsByCategory } from "@/data/products"
import { ProductCard } from "@/components/products/product-card"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function CategoryPage({ params }: { params: { slug: string } }) {
    const [sortBy, setSortBy] = useState("featured")
    const [loading, setLoading] = useState(false)
    const category = categories[params.slug]

    if (!category) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Category Not Found</h2>
                    <p className="text-gray-600 mb-4">The category you're looking for doesn't exist.</p>
                    <Link href="/categories">
                        <Button>
                            View All Categories
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    const products = getProductsByCategory(params.slug)

    const [filters, setFilters] = useState({
        priceRange: category.priceRange,
        brands: [] as string[],
        features: [] as string[],
        subcategories: [] as string[]
    })

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px]">
                <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-2xl"
                        >
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                {category.title}
                            </h1>
                            <p className="text-xl text-white/90">
                                {category.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Subcategories */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-4 overflow-x-auto pb-4">
                        {category.subcategories.map((subcat) => (
                            <Button
                                key={subcat}
                                variant="outline"
                                className="whitespace-nowrap"
                                onClick={() => setFilters(prev => ({
                                    ...prev,
                                    subcategories: [subcat]
                                }))}
                            >
                                {subcat}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {category.features.map((feature) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-sm"
                            >
                                <h3 className="text-lg font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Filters Sidebar */}
                        <div className="w-full md:w-64 space-y-6">
                            <ProductFilters
                                category={category}
                                onFilterChange={setFilters}
                            />
                        </div>

                        {/* Products Grid */}
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">All Products</h2>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border rounded-lg px-3 py-2"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="newest">Newest</option>
                                </select>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {products.map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
} 