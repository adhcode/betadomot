'use client'

import { Dialog, DialogContent } from "../../components/ui/dialog"
import { Button } from "../../components/ui/button"
import { X, Heart, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import { type Product } from '../../../types/product'

interface DealProduct {
    id: string
    name: string
    price: number
    originalPrice?: number
    discount?: number
    images: string[]
    trending?: boolean
    rating?: number
    description?: string
}

interface QuickViewModalProps {
    product: DealProduct
    isOpen: boolean
    onClose: () => void
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Product Image */}
                    <div className="relative aspect-square">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Product Details */}
                    <div className="p-6 space-y-4">
                        <h2 className="text-2xl font-bold">{product.name}</h2>

                        {/* Price */}
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-[#E4A853]">
                                ₦{product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                                <span className="text-gray-500 line-through">
                                    ₦{product.originalPrice.toLocaleString()}
                                </span>
                            )}
                            {product.discount && (
                                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                                    {product.discount}% OFF
                                </span>
                            )}
                        </div>

                        {/* Rating */}
                        {product.rating && (
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < Math.floor(product.rating!)
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">
                                    {product.rating} out of 5
                                </span>
                            </div>
                        )}

                        {/* Description */}
                        <p className="text-gray-600">
                            {product.description || "No description available"}
                        </p>

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-4">
                            <Button className="flex-1 bg-[#E4A853] hover:bg-[#E4A853]/90">
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Add to Cart
                            </Button>
                            <Button variant="outline" size="sm">
                                <Heart className="h-4 w-4" />
                            </Button>
                        </div>

                        {/* Additional Info */}
                        <div className="pt-4 border-t border-gray-200 mt-6">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-500">Availability</span>
                                    <p className="font-medium">In Stock</p>
                                </div>
                                <div>
                                    <span className="text-gray-500">Delivery</span>
                                    <p className="font-medium">2-4 business days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
} 