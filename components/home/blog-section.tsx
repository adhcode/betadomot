'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { spacing, theme } from "@/lib/constants"
import { containerAnimation, fadeIn } from "@/lib/animations"

const blogPosts = [
    {
        id: 1,
        title: "The Future of Smart Homes in Nigeria",
        excerpt: "Exploring how technology is reshaping Nigerian homes for comfort and efficiency.",
        image: "/smarthome.jpeg",
        category: "Innovation",
        readTime: "5 min read",
        date: "Mar 15, 2024"
    },
    {
        id: 2,
        title: "Maximizing Energy Efficiency",
        excerpt: "Practical tips for reducing power consumption while maintaining comfort.",
        image: "/blog2.jpg",
        category: "Energy",
        readTime: "4 min read",
        date: "Mar 12, 2024"
    },
    {
        id: 3,
        title: "Design Meets Functionality",
        excerpt: "How modern home solutions are blending aesthetics with practical living.",
        image: "blog1.jpg",
        category: "Design",
        readTime: "3 min read",
        date: "Mar 10, 2024"
    }
]

export function BlogSection() {
    return (
        <section className={`${spacing.section} bg-white`}>
            <div className={spacing.container}>
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <div className={spacing.sectionHead}>
                        <span className={`text-sm font-medium text-[${theme.colors.primary}]`}>
                            Our Blog
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Latest Insights
                        </h2>
                    </div>

                    <div className={spacing.gridGap}>
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                variants={fadeIn}
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
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span className={`text-[${theme.colors.primary}]`}>{post.category}</span>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {post.readTime}
                                            </div>
                                        </div>

                                        <h3 className={`text-xl font-semibold group-hover:text-[${theme.colors.primary}] transition-colors duration-300`}>
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 