'use client'

import { useState } from 'react'
import { FeaturedProducts } from './featured-products'
import type { Product } from '../../../../types/product'

export function FeaturedProductsWrapper({ products }: { products: Product[] }) {
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
    return <FeaturedProducts products={products} onQuickView={setQuickViewProduct} />
} 