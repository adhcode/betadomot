'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductSuggestionProps {
    title: string
    description: string
    price: number
    savings?: string
    image: string
    href: string
}

export function ProductSuggestion({
    title,
    description,
    price,
    savings,
    image,
    href
}: ProductSuggestionProps) {
    return (
        <Card className="group overflow-hidden">
            <div className="flex items-center p-4">
                <div className="relative w-24 h-24 mr-4">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <div className="flex-1">
                    <h4 className="font-medium mb-1">{title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{description}</p>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-lg font-bold">₦{price.toLocaleString()}</p>
                            <p className="text-sm text-green-600">{savings}</p>
                        </div>
                        <Link href={href}>
                            <Button variant="ghost" size="sm">
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    )
} 