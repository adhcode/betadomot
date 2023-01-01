'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Timer } from 'lucide-react'
import { type Deal } from '@/data/deals'

interface DealCardProps extends Deal { }

export function DealCard({ product, discount, endsAt }: DealCardProps) {
    const discountedPrice = product.price * (1 - discount / 100)
    const timeLeft = new Date(endsAt).getTime() - Date.now()
    const hours = Math.floor(timeLeft / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))

    return (
        <Link
            href={`/products/${product.id}`}
            className="group relative flex flex-col overflow-hidden rounded-lg border bg-white"
        >
            {/* Discount Badge */}
            <div className="absolute left-4 top-4 z-10">
                <div className="rounded-full bg-red-500 px-3 py-1.5 text-sm font-medium text-white">
                    {discount}% OFF
                </div>
            </div>

            {/* Product Image */}
            <div className="aspect-square overflow-hidden">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Product Info */}
            <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="font-medium text-gray-900 group-hover:text-[#E4A853]">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                </p>

                {/* Price */}
                <div className="mt-auto space-y-1">
                    <div className="flex items-end gap-2">
                        <span className="text-lg font-medium text-gray-900">
                            ₦{discountedPrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                            ₦{product.price.toLocaleString()}
                        </span>
                    </div>

                    {/* Timer */}
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Timer className="h-4 w-4" />
                        <span>Ends in {hours}h {minutes}m</span>
                    </div>
                </div>
            </div>
        </Link>
    )
} 