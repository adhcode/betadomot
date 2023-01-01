'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Heart, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { type Product } from '@/types/product'

interface ProductCardProps {
    product: Product
    onQuickView?: (product: Product) => void
    className?: string
}

export function ProductCard({ product, onQuickView, className }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isFavorited, setIsFavorited] = useState(false)

    return (
        <motion.div
            className={cn(
                "group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className={cn(
                        "object-cover transition-transform duration-500",
                        isHovered && "scale-105"
                    )}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Actions */}
                <div className={cn(
                    "absolute inset-0 bg-black/0 transition-all duration-300 flex items-end justify-between p-4",
                    isHovered && "bg-black/20"
                )}>
                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            "bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300",
                            isFavorited && "text-red-500"
                        )}
                        onClick={() => setIsFavorited(!isFavorited)}
                    >
                        <Heart className="h-4 w-4" fill={isFavorited ? "currentColor" : "none"} />
                    </Button>

                    {onQuickView && (
                        <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 gap-2"
                            onClick={() => onQuickView(product)}
                        >
                            <Eye className="h-4 w-4" />
                            Quick View
                        </Button>
                    )}
                </div>

                {/* Discount Badge */}
                {product.discount && (
                    <div className="absolute top-4 left-4 bg-[#E4A853] text-black px-2 py-1 rounded text-sm font-medium">
                        {product.discount}% OFF
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4">
                <Link href={`/products/${product.id}`} className="block group-hover:text-[#E4A853] transition-colors">
                    <h3 className="font-medium text-lg mb-2 line-clamp-2">{product.name}</h3>
                </Link>

                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "h-4 w-4",
                                    i < (product.rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                )}
                            />
                        ))}
                    </div>
                    {product.reviewCount && (
                        <span className="text-sm text-gray-500">({product.reviewCount})</span>
                    )}
                </div>

                <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold">₦{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                            ₦{product.originalPrice.toLocaleString()}
                        </span>
                    )}
                </div>

                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {product.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
} 