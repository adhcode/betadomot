'use client'

import { useState } from 'react'
import { HeroSection } from "../../components/home/hero/hero-section"
import { DynamicCategories } from "../../components/home/dynamic-categories/dynamic-categories"
import { FeaturedProducts } from "../../components/home/featured-products/featured-products"
import { ServicesSection } from "../../components/home/services/services"
import { EnergyBillsSection } from "../../components/home/energy-bills/energy-bills-section"
import { SecuritySection } from "../../components/home/security/security-section"
import { HomeImprovementSection } from "../../components/home/home-improvement/home-improvement-section"
import { BlogSection } from "../../components/blog/blog-section"
import { NewsletterSection } from "../../components/home/newsletter/newsletter-section"
import { ProductShowcase } from "../../components/home/product-showcase/product-showcase"
import type { Product } from '@/types/product'

export function PageContent({ products }: { products: Product[] }) {
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

    return (
        <main className="flex-1">
            <HeroSection />
            <div className="space-y-0">
                <DynamicCategories />
                <FeaturedProducts
                    products={products}
                    onQuickView={setQuickViewProduct}
                />
                <ServicesSection />
                <EnergyBillsSection />
                <SecuritySection />
                <HomeImprovementSection />
                <ProductShowcase />
                <BlogSection />
                <NewsletterSection />
            </div>
        </main>
    )
} 