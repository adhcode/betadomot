import { supabase } from '@/lib/supabase'
import { Product } from '@/types/product'

export const productService = {
  async createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) {
    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          ...product,
          benefits: JSON.stringify(product.benefits),
          features: JSON.stringify(product.features),
          specifications: JSON.stringify(product.specifications)
        }
      ])
      .select()
      .single()

    if (error) throw error
    return data
  },

  async updateProduct(id: string, updates: Partial<Product>) {
    const { data, error } = await supabase
      .from('products')
      .update({
        ...updates,
        benefits: updates.benefits ? JSON.stringify(updates.benefits) : undefined,
        features: updates.features ? JSON.stringify(updates.features) : undefined,
        specifications: updates.specifications ? JSON.stringify(updates.specifications) : undefined,
        updatedAt: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  async getProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      throw new Error(error.message)
    }

    return (data || []).map(this.parseProduct)
  },

  async getProductBySlug(slug: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw error
    return this.parseProduct(data)
  },

  parseProduct(product: any): Product {
    return {
      ...product,
      benefits: JSON.parse(product.benefits),
      features: JSON.parse(product.features),
      specifications: JSON.parse(product.specifications)
    }
  }
} 