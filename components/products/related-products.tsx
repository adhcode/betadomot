'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getProductsByRelatedCategory, type Product } from '@/data/products'

interface RelatedProductsProps {
    category: string // e.g., 'temperature', 'backup-power'
}

export function RelatedProducts({ category }: RelatedProductsProps) {
    const products = getProductsByRelatedCategory(category)

    return (
        <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Recommended Products</h3>
            <div className="grid md:grid-cols-4 gap-6">
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
    )
} 