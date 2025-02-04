'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { products } from '@/data/products'
import { ArrowRight, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const categories = Array.from(
        new Set(products.map(p => p.category))
    )

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
            <PageHeader
                title="Products"
                description="Browse our range of energy solutions"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="flex gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input
                            className="pl-10"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant={selectedCategory === 'all' ? 'default' : 'outline'}
                            onClick={() => setSelectedCategory('all')}
                        >
                            All
                        </Button>
                        {categories.map(category => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? 'default' : 'outline'}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <Card key={product.id} className="overflow-hidden">
                            <div className="aspect-video relative">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                                {product.efficiency && (
                                    <div className="absolute top-2 right-2 bg-white/90 rounded-full px-3 py-1">
                                        <span className={`text-sm font-bold ${product.efficiency.rating === "A+++" ? "text-green-600" :
                                            product.efficiency.rating === "A++" ? "text-green-500" :
                                                "text-green-400"
                                            }`}>
                                            {product.efficiency.rating}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h4 className="font-semibold mb-2">{product.name}</h4>
                                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">₦{product.price.toLocaleString()}</span>
                                    <Link href={`/products/${product.id}`}>
                                        <Button variant="outline" size="sm">
                                            View Details
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
} 