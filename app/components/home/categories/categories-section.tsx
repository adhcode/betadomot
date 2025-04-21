import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { categories } from '../../../data/categories'
import { ArrowRight } from 'lucide-react'

export function CategoriesSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-[#E4A853] mb-4 block">
                        Explore Categories
                    </span>
                    <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
                        Shop By Category
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our curated collection of modern home essentials
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <Link href={`/categories/${category.id}`}>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#E4A853] transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {category.description}
                                    </p>
                                    <div className="flex items-center text-[#E4A853] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Explore</span>
                                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 