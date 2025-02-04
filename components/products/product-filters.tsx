'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

interface ProductFiltersProps {
    categories: {
        id: string
        name: string
        description: string
    }[]
    activeCategory: string
    setActiveCategory: (category: string) => void
}

export function ProductFilters({
    categories,
    activeCategory,
    setActiveCategory
}: ProductFiltersProps) {
    return (
        <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder="Search products..."
                        className="pl-10"
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={activeCategory === 'all' ? 'default' : 'outline'}
                        onClick={() => setActiveCategory('all')}
                        className="whitespace-nowrap"
                    >
                        All Products
                    </Button>
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={activeCategory === category.id ? 'default' : 'outline'}
                            onClick={() => setActiveCategory(category.id)}
                            className="whitespace-nowrap"
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
} 