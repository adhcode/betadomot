import { type Product } from '@/types/product'
import { products as baseProducts } from '@/data/products'

export function getEnhancedProducts(): Product[] {
  return baseProducts.map(product => ({
    ...product,
    createdAt: new Date().toISOString()
  }))
} 