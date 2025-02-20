'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
    {
        id: 1,
        title: "The Future of Smart Homes in Nigeria",
        excerpt: "Exploring how technology is reshaping Nigerian homes for comfort and efficiency.",
        image: "/images/blog/smart-home-future.jpg",
        category: "Innovation",
        readTime: "5 min read",
        date: "Mar 15, 2024"
    },
    {
        id: 2,
        title: "Maximizing Energy Efficiency",
        excerpt: "Practical tips for reducing power consumption while maintaining comfort.",
        image: "/images/blog/blog2.jpg",
        category: "Energy",
        readTime: "4 min read",
        date: "Mar 12, 2024"
    },
    {
        id: 3,
        title: "Design Meets Functionality",
        excerpt: "How modern home solutions are blending aesthetics with practical living.",
        image: "/images/blog/blog1.jpg",
        category: "Design",
        readTime: "3 min read",
        date: "Mar 10, 2024"
    }
]

export function BlogSection() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-medium text-[#E4A853]">Our Blog</span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">Latest Insights</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our thoughts on technology, design, and creating better living spaces.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={`/blog/${post.id}`}>
                                <div className="relative aspect-[16/10] mb-6 rounded-lg overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <span className="text-[#E4A853]">{post.category}</span>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold group-hover:text-[#E4A853] transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-2">
                                        <Button
                                            variant="ghost"
                                            className="p-0 h-auto text-[#1A1A1A] hover:text-[#E4A853] group-hover:text-[#E4A853]"
                                        >
                                            Read More
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link href="/blog">
                        <Button className="bg-[#1A1A1A] hover:bg-[#E4A853] text-white hover:text-black">
                            View All Posts
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
} 