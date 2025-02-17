'use client'

import { useState } from 'react'
import { Product } from '@/types/product'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Plus, X } from 'lucide-react'

interface ProductFormProps {
    initialData?: Partial<Product>
    onSubmit: (data: Partial<Product>) => Promise<void>
}

export function ProductForm({ initialData, onSubmit }: ProductFormProps) {
    const [loading, setLoading] = useState(false)
    const [benefits, setBenefits] = useState<string[]>(initialData?.benefits || [])
    const [features, setFeatures] = useState(initialData?.features || [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        const data = {
            name: formData.get('name') as string,
            slug: formData.get('slug') as string,
            description: formData.get('description') as string,
            price: Number(formData.get('price')),
            monthlyBill: formData.get('monthlyBill') as string,
            image: formData.get('image') as string,
            benefits,
            whyItWorks: formData.get('whyItWorks') as string,
            savings: formData.get('savings') as string,
            idealFor: formData.get('idealFor') as string,
            features,
            category: formData.get('category') as Product['category'],
            status: formData.get('status') as Product['status'],
            specifications: {}
        } as const

        try {
            await onSubmit(data as Partial<Product>)
        } catch (error) {
            console.error('Error submitting product:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Product Name</label>
                        <Input
                            name="name"
                            defaultValue={initialData?.name}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Slug</label>
                        <Input
                            name="slug"
                            defaultValue={initialData?.slug}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Price (₦)</label>
                        <Input
                            name="price"
                            type="number"
                            defaultValue={initialData?.price}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Monthly Bill Range</label>
                        <Input
                            name="monthlyBill"
                            defaultValue={initialData?.monthlyBill}
                            required
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <Select name="category" defaultValue={initialData?.category}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="inverter">Inverter</SelectItem>
                                <SelectItem value="solar">Solar</SelectItem>
                                <SelectItem value="monitor">Monitor</SelectItem>
                                <SelectItem value="stabilizer">Stabilizer</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Status</label>
                        <Select name="status" defaultValue={initialData?.status || 'active'}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="outOfStock">Out of Stock</SelectItem>
                                <SelectItem value="comingSoon">Coming Soon</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="space-y-4">
                <label className="block text-sm font-medium">Benefits</label>
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-2">
                        <Input
                            value={benefit}
                            onChange={(e) => {
                                const newBenefits = [...benefits]
                                newBenefits[index] = e.target.value
                                setBenefits(newBenefits)
                            }}
                        />
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => setBenefits(benefits.filter((_, i) => i !== index))}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                ))}
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => setBenefits([...benefits, ''])}
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Benefit
                </Button>
            </div>

            <Button type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save Product'}
            </Button>
        </form>
    )
} 