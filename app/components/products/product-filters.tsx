"use client"

import { Category } from "@/data/categories"
import { Button } from "@/components/ui/button"

interface ProductFiltersProps {
    categories: Category[]
    selectedCategory?: string
    onSelectCategory: (category: string) => void
}

export function ProductFilters({ categories, selectedCategory, onSelectCategory }: ProductFiltersProps) {
    return (
        <div className="flex flex-wrap gap-2">
            <Button
                variant={!selectedCategory ? "default" : "outline"}
                onClick={() => onSelectCategory("")}
                className="text-sm"
            >
                All Products
            </Button>
            {categories.map((category) => (
                <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => onSelectCategory(category.id)}
                    className="text-sm"
                >
                    {category.title}
                </Button>
            ))}
        </div>
    )
} 