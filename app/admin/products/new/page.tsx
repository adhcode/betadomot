'use client'

import { ProductForm } from '@/components/admin/product-form'
import { productService } from '@/services/products'
import { useRouter } from 'next/navigation'

export default function NewProductPage() {
    const router = useRouter()

    const handleSubmit = async (data: any) => {
        await productService.createProduct(data)
        router.push('/admin/products')
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">Add New Product</h1>
            <ProductForm onSubmit={handleSubmit} />
        </div>
    )
} 