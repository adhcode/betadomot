'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/data/products'
import { cn } from '@/lib/utils'

interface ProductSuggestionProps {
    product: {
        id: string;
        name: string;
        price: number;
        description: string;
        savings?: string;
        features?: string[];
    };
    className?: string;
}

export function ProductSuggestion({ product, className }: ProductSuggestionProps) {
    return (
        <Card className={cn("group hover:shadow-lg transition-all duration-300", className)}>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                    <div className="text-[#003366] font-bold">
                        ₦{product.price.toLocaleString()}
                    </div>
                    {product.savings && (
                        <div className="text-[#E4A853] text-sm">
                            Save {product.savings}
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
} 