import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/products/product-card'
import { useState } from 'react'
import { type Product } from '@/types/product'
import { Flame, Star, Clock } from 'lucide-react'

interface FeaturedProductsProps {
    products: Product[]
    onQuickView: (product: Product) => void
}

type Tab = 'best-sellers' | 'new-arrivals'

export function FeaturedProducts({ products, onQuickView }: FeaturedProductsProps) {
    const [activeTab, setActiveTab] = useState<Tab>('best-sellers')

    // Filter products based on active tab
    const filteredProducts = products.filter(product => {
        if (activeTab === 'best-sellers') {
            return product.rating && product.rating >= 4.5
        } else {
            // Show products created in the last 30 days
            const thirtyDaysAgo = new Date()
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
            return new Date(product.createdAt) > thirtyDaysAgo
        }
    }).slice(0, 8) // Show max 8 products

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Featured Products</h2>
                        <p className="text-gray-600">Discover our most popular and latest additions</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            variant={activeTab === 'best-sellers' ? 'default' : 'outline'}
                            className="rounded-full"
                            onClick={() => setActiveTab('best-sellers')}
                        >
                            <Flame className={`h-4 w-4 mr-2 ${activeTab === 'best-sellers' ? 'text-white' : 'text-[#E4A853]'}`} />
                            Best Sellers
                        </Button>
                        <Button
                            variant={activeTab === 'new-arrivals' ? 'default' : 'outline'}
                            className="rounded-full"
                            onClick={() => setActiveTab('new-arrivals')}
                        >
                            <Star className={`h-4 w-4 mr-2 ${activeTab === 'new-arrivals' ? 'text-white' : 'text-[#E4A853]'}`} />
                            New Arrivals
                        </Button>
                    </div>
                </div>

                {/* Featured Section Header */}
                <div className="mb-8">
                    {activeTab === 'best-sellers' ? (
                        <div className="flex items-center gap-3 text-[#E4A853]">
                            <Flame className="h-6 w-6" />
                            <h3 className="text-xl font-semibold">What's Hot?</h3>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3 text-[#E4A853]">
                            <Clock className="h-6 w-6" />
                            <h3 className="text-xl font-semibold">Just In!</h3>
                        </div>
                    )}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            />
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full px-8"
                    >
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    )
} 