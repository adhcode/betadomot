'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { ProductCard } from './product-card'
import { type Product } from '../../../types/product'
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Search, SlidersHorizontal } from 'lucide-react'

interface ProductGridProps {
    products: Product[]
    onQuickView?: (product: Product) => void
}

export function ProductGrid({ products, onQuickView }: ProductGridProps) {
    const [sortBy, setSortBy] = useState('featured')
    const [searchQuery, setSearchQuery] = useState('')
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000])

    // Sort products based on selected option
    const sortedProducts = [...products].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price
            case 'price-high':
                return b.price - a.price
            case 'name':
                return a.name.localeCompare(b.name)
            default:
                return 0
        }
    })

    // Filter products based on search query and price range
    const filteredProducts = sortedProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
        return matchesSearch && matchesPrice
    })

    return (
        <div className="w-full">
            {/* Filters and Search Bar */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>
                <div className="flex gap-4">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 border rounded-lg bg-white"
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Name</option>
                    </select>
                    <Button variant="outline" className="gap-2">
                        <SlidersHorizontal className="h-4 w-4" />
                        Filters
                    </Button>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ProductCard
                            product={product}
                            onQuickView={onQuickView}
                            className="h-full"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No products found matching your criteria.</p>
                </div>
            )}
        </div>
    )
} 