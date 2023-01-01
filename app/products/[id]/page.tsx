'use client'

import { useEffect, useState } from 'react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { Product } from '@/types/product'
import { PageHeader } from '@/components/ui/page-header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
    ShoppingCart, Star, Check,
    Battery, Zap, Shield
} from 'lucide-react'
import Image from 'next/image'
import { ProductSuggestion } from '@/components/products/product-suggestion'
import { useCart } from '@/hooks/use-cart'
import { use } from 'react'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const [product, setProduct] = useState<Product | null>(null)
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
    const { addToCart } = useCart()

    useEffect(() => {
        const fetchedProduct = getProductById(id)
        if (fetchedProduct) {
            setProduct(fetchedProduct)
            setRelatedProducts(getRelatedProducts(fetchedProduct.id))
        }
    }, [id])

    if (!product) return null

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <PageHeader
                title={product.name}
                description={product.description}
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Product Image */}
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                        {product.savings && (
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full">
                                Save {product.savings}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1 bg-[#003366]/10 text-[#003366] rounded-full text-sm">
                                    {product.category}
                                </span>
                                <div className="flex items-center gap-1">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium">{product.rating}</span>
                                </div>
                            </div>

                            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                            <p className="text-xl text-gray-600 mb-6">{product.description}</p>
                            <div className="flex items-baseline gap-4">
                                <p className="text-3xl font-bold">₦{product.price.toLocaleString()}</p>
                                {product.savings && (
                                    <p className="text-green-600">Save {product.savings}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: Battery, text: 'Long Lasting' },
                                { icon: Zap, text: 'Energy Efficient' },
                                { icon: Shield, text: '2 Year Warranty' },
                            ].map((item, index) => (
                                <Card key={index} className="p-4 text-center">
                                    <item.icon className="h-6 w-6 mx-auto mb-2 text-[#003366]" />
                                    <p className="text-sm font-medium">{item.text}</p>
                                </Card>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-semibold text-lg">Key Features</h3>
                            <ul className="grid grid-cols-2 gap-2">
                                {product.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-500" />
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button
                            size="lg"
                            className="w-full bg-[#003366] hover:bg-[#002244]"
                            onClick={() => addToCart(product)}
                        >
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                    </div>
                </div>

                {/* Product Details */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Product Overview</h2>
                        <p className="text-gray-600 mb-6">{product.details?.overview}</p>
                        <h3 className="font-semibold mb-3">Highlights</h3>
                        {product.details && (
                            <ul className="space-y-2">
                                {product.details.highlights.map((highlight: string, index: number) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                        <div className="space-y-2">
                            {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                                <div key={key} className="flex justify-between py-2 border-b">
                                    <span className="text-gray-600 capitalize">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </span>
                                    <span className="font-medium">{value as string}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {relatedProducts.map((product) => (
                                <ProductSuggestion
                                    key={product.id}
                                    product={{
                                        id: product.id,
                                        name: product.name,
                                        description: product.description,
                                        price: product.price,
                                        savings: product.savings
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
} 