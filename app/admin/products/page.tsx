'use client'

import { useState, useEffect } from 'react'
import { Product } from '@/types/product'
import { productService } from '@/services/products'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = async () => {
        try {
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .order('created_at', { ascending: false })

            if (error) {
                console.error('Supabase error:', error)
                return
            }

            setProducts(data || [])
        } catch (error) {
            console.error('Error loading products:', error instanceof Error ? error.message : 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (productId: string) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                const { error } = await supabase
                    .from('products')
                    .delete()
                    .eq('id', productId)

                if (error) throw error

                // Refresh the products list
                loadProducts()
            } catch (error) {
                console.error('Error deleting product:', error)
            }
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Product Management</h1>
                <Link href="/admin/products/new">
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        Add Product
                    </Button>
                </Link>
            </div>

            {loading ? (
                <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
                </div>
            ) : (
                <div className="grid gap-6">
                    {products.map((product) => (
                        <Card key={product.id} className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 relative rounded-lg overflow-hidden bg-gray-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{product.name}</h3>
                                        <p className="text-sm text-gray-600">₦{product.price.toLocaleString()}</p>
                                        <span className={`text-xs px-2 py-1 rounded-full ${product.status === 'active'
                                            ? 'bg-green-100 text-green-800'
                                            : product.status === 'outOfStock'
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {product.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link href={`/admin/products/${product.id}/edit`}>
                                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                                            <Edit className="h-4 w-4" />
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="flex items-center gap-2"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
} 