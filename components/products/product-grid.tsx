'use client'

import { ProductCard } from './product-card'
import { getProductsByCategory } from '@/data/products'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductGridProps {
    category: string
    filter?: string  // Make filter prop optional
}

const getEfficiencyColor = (rating: string) => {
    const colors = {
        "A+++": "text-green-600",
        "A++": "text-green-500",
        "A+": "text-green-400",
        "A": "text-green-300",
        "B": "text-yellow-500"
    }
    return colors[rating as keyof typeof colors] || "text-gray-500"
}

export function ProductGrid({ category, filter = 'all' }: ProductGridProps) {
    const products = getProductsByCategory(category)
    // Add filter logic here if needed

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
                                <span className={`text-sm font-bold ${getEfficiencyColor(product.efficiency.rating)}`}>
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
    )
} 