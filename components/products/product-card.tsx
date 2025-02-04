'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
    id: string
    name: string
    description: string
    price: number
    image: string
    rating: number
    category: string
    features: string[]
    savings: string
}

export function ProductCard({
    id, name, description, price, image, rating, category, features, savings
}: ProductCardProps) {
    return (
        <Card className="group overflow-hidden">
            <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/5 to-transparent z-10" />
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />
                {savings && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                        Save {savings}
                    </div>
                )}
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-[#003366] font-medium">{category}</p>
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{rating}</span>
                    </div>
                </div>

                <h3 className="font-semibold text-xl mb-2">{name}</h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>

                <ul className="space-y-2 mb-6">
                    {features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#003366]" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">₦{price.toLocaleString()}</p>
                    <Link href={`/products/${id}`}>
                        <Button className="bg-[#003366] hover:bg-[#002244]">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    )
} 