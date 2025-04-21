"use client"

import { Category } from "../../data/categories"
import { Button } from "../ui/button"
import { Slider } from "../ui/slider"

interface ProductFiltersProps {
    category: Category
    onFilterChange: (filters: {
        priceRange: { min: number; max: number }
        brands: string[]
        features: string[]
        subcategories: string[]
    }) => void
}

export function ProductFilters({ category, onFilterChange }: ProductFiltersProps) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <Slider
                    value={[category.priceRange.min, category.priceRange.max]}
                    min={category.priceRange.min}
                    max={category.priceRange.max}
                    step={1000}
                    onValueChange={([min, max]) => onFilterChange({
                        priceRange: { min, max },
                        brands: [],
                        features: [],
                        subcategories: []
                    })}
                />
            </div>
        </div>
    )
} 