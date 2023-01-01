"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/data/products"

interface ProductSuggestionProps {
    product: Product
}

export function ProductSuggestion({ product }: ProductSuggestionProps) {
    const { addToCart } = useCart()

    return (
        <Card className="group overflow-hidden transition-all hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <CardContent className="p-6">
                <div className="space-y-4">
                    <div>
                        <Link
                            href={`/products/${product.id}`}
                            className="text-xl font-semibold hover:text-primary transition-colors line-clamp-1"
                        >
                            {product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {product.description}
                        </p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-primary">
                                ₦{product.price.toLocaleString()}
                            </span>
                        </div>
                        <Button
                            variant="outline"
                            className="w-full bg-primary/5 hover:bg-primary/10 transition-colors"
                            onClick={() => addToCart(product)}
                        >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
} 