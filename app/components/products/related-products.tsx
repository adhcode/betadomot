"use client"

import { ProductCard } from "../../components/products/product-card"
import { Product } from "../../../types/product"

interface RelatedProductsProps {
    products: Product[]
    currentProductId?: string
}

export function RelatedProducts({ products, currentProductId }: RelatedProductsProps) {
    const relatedProducts = products.filter(product => product.id !== currentProductId).slice(0, 4)

    if (relatedProducts.length === 0) return null

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Related Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
} 