'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { X, Minus, Plus, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { type Product } from '@/types/product'

interface QuickViewModalProps {
    product: Product | null
    isOpen: boolean
    onClose: () => void
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
    const [quantity, setQuantity] = useState(1)

    if (!product) return null

    const incrementQuantity = () => setQuantity(prev => prev + 1)
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

    return (
        <Dialog open={isOpen} onClose={onClose} className="relative z-50">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

            {/* Full-screen container */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="relative w-full max-w-2xl rounded-lg bg-white shadow-xl">
                    <div className="flex h-full flex-col lg:flex-row">
                        {/* Close button */}
                        <button
                            type="button"
                            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                            onClick={onClose}
                        >
                            <span className="sr-only">Close</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Product Image */}
                        <div className="relative h-64 w-full lg:h-auto lg:w-1/2">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                className="h-full w-full object-cover object-center"
                                width={500}
                                height={500}
                            />
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-1 flex-col px-6 pb-6 pt-12 lg:px-8">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                                <div className="mt-3">
                                    <p className="text-3xl tracking-tight text-gray-900">
                                        ${product.price.toFixed(2)}
                                    </p>
                                </div>

                                <div className="mt-6">
                                    <h3 className="sr-only">Description</h3>
                                    <p className="text-base text-gray-700">{product.description}</p>
                                </div>

                                {/* Features */}
                                {product.features && product.features.length > 0 && (
                                    <div className="mt-8">
                                        <h3 className="text-sm font-medium text-gray-900">Features</h3>
                                        <ul className="mt-2 list-disc pl-4 text-sm text-gray-600">
                                            {product.features.map((feature: string, index: number) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="mt-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-sm font-medium text-gray-700">Quantity</span>
                                        <div className="flex items-center border rounded-md">
                                            <button
                                                type="button"
                                                className="p-2 hover:bg-gray-50"
                                                onClick={decrementQuantity}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </button>
                                            <span className="px-4 py-2 text-center w-12">{quantity}</span>
                                            <button
                                                type="button"
                                                className="p-2 hover:bg-gray-50"
                                                onClick={incrementQuantity}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    className="mt-8 w-full flex items-center justify-center gap-2"
                                    size="lg"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
} 