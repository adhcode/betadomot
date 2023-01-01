'use client'

import { useEffect, useState } from 'react'
import { Category } from '@/types'
import { getMainCategories } from '@/data/categories'
import { LoadingSpinner } from '@/components/ui/loading-spinner'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const mainCategories = getMainCategories()
        setCategories(mainCategories)
        setLoading(false)
    }, [])

    if (loading) return <LoadingSpinner />

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] bg-[#1A1A1A] flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src="/categories/hero.jpg"
                        alt="Categories"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#1A1A1A]" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="font-ojuju text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Discover Your Perfect
                            <span className="block text-[#E4A853] mt-2">Home Collection</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                            Explore our curated collections of premium home essentials, designed to transform your living spaces.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Category Showcases */}
            {categories.map((category, index) => (
                <motion.section
                    key={category.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`py-32 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                            >
                                {/* Main Image */}
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Floating Stats Box */}
                                <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        {category.features.slice(0, 4).map((feature, i) => (
                                            <div key={i} className="text-sm">
                                                <div className="font-medium mb-1">{feature.title}</div>
                                                <div className="text-gray-600 text-xs">{feature.description}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
                            >
                                <h2 className="font-ojuju text-4xl font-bold mb-6">{category.title}</h2>
                                <p className="text-xl text-gray-600 mb-8">{category.description}</p>

                                {/* Subcategories Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {category.subcategories.map((sub, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 
                                                hover:bg-[#E4A853]/5 transition-colors"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#E4A853]" />
                                            <span className="font-medium">{sub}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Benefits */}
                                {category.benefits.map((benefit, i) => (
                                    <div key={i} className="mb-6">
                                        <h3 className="font-ojuju text-xl font-semibold mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600">{benefit.description}</p>
                                    </div>
                                ))}

                                <Link
                                    href={`/categories/${category.title.toLowerCase().replace(/ /g, '-')}`}
                                    className="inline-flex items-center gap-2 text-[#E4A853] 
                                        hover:gap-4 transition-all mt-8"
                                >
                                    <span className="font-medium">Explore Collection</span>
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            ))}

            {/* Newsletter Section */}
            <section className="relative py-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[#1A1A1A]">
                    <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E4A853]/20 via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Content Card */}
                        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 
                            border border-white/10 shadow-2xl">

                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#E4A853] rounded-full blur-2xl opacity-20" />
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#E4A853] rounded-full blur-2xl opacity-10" />

                            <div className="relative text-center mb-12">
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block text-[#E4A853] font-medium mb-4"
                                >
                                    Join Our Community
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="font-ojuju text-4xl md:text-5xl font-bold text-white mb-6"
                                >
                                    Get Inspired Weekly
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
                                >
                                    Join our community of design enthusiasts. Receive exclusive offers,
                                    inspiring ideas, and early access to new collections.
                                </motion.p>
                            </div>

                            {/* Subscribe Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="max-w-xl mx-auto"
                            >
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-1 relative">
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="h-14 w-full bg-white/10 border-white/10 text-white 
                                                placeholder:text-gray-400 rounded-xl pl-12"
                                        />
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <Button
                                        className="h-14 px-8 bg-[#E4A853] hover:bg-[#E4A853]/90 
                                            text-black font-medium rounded-xl whitespace-nowrap
                                            transform transition-all hover:scale-105"
                                    >
                                        Subscribe Now
                                    </Button>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                        <span>Secure & Private</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>No Spam Promise</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
} 