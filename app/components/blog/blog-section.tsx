import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const blogPosts = [
    {
        id: 1,
        title: "Modern Interior Design Trends for 2024",
        excerpt:
            "Discover the latest interior design trends that are shaping homes in 2024. From sustainable materials to smart furniture.",
        image: "/blog/interior-design-trends.jpg",
        date: "March 1, 2024",
        author: {
            name: "Sarah Johnson",
            image: "/team/sarah.jpg"
        },
        category: "Interior Design",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Smart Home Integration Guide",
        excerpt:
            "A comprehensive guide to integrating smart home technology into your living space for enhanced comfort and efficiency.",
        image: "/blog/smart-home-guide.jpg",
        date: "February 28, 2024",
        author: {
            name: "Michael Chen",
            image: "/team/michael.jpg"
        },
        category: "Smart Home",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "Sustainable Furniture Selection Tips",
        excerpt:
            "Learn how to choose eco-friendly furniture that doesn't compromise on style or comfort for your home.",
        image: "/blog/sustainable-furniture.jpg",
        date: "February 25, 2024",
        author: {
            name: "Emma Davis",
            image: "/team/emma.jpg"
        },
        category: "Sustainability",
        readTime: "6 min read"
    },
]

export function BlogSection() {
    return (
        <section className="w-full py-20 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="max-w-[600px]"
                    >
                        <span className="text-sm font-medium text-[#E4A853] mb-6 block">
                            Latest Updates
                        </span>
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-[#1A1A1A] mb-4">
                            Insights for Your
                            <span className="block text-[#E4A853]">Modern Home</span>
                        </h2>
                        <p className="text-gray-600 md:text-lg">
                            Stay updated with our latest articles on interior design, smart home technology,
                            and sustainable living.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm 
                                hover:shadow-xl transition-all duration-500"
                        >
                            <Link href={`/blog/${post.id}`} className="block">
                                {/* Image Container */}
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category and Read Time */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-[#E4A853]/10 text-[#E4A853] 
                                            text-xs font-medium">
                                            {post.category}
                                        </span>
                                        <span className="text-sm text-gray-500">{post.readTime}</span>
                                    </div>

                                    {/* Title and Excerpt */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E4A853] 
                                        transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                                        {post.excerpt}
                                    </p>

                                    {/* Author and Date */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                <Image
                                                    src={post.author.image}
                                                    alt={post.author.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {post.author.name}
                                                </p>
                                                <p className="text-xs text-gray-500">{post.date}</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="h-5 w-5 text-[#E4A853] transform transition-transform 
                                            duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Button
                        asChild
                        className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 text-white px-8 h-12 rounded-full"
                    >
                        <Link href="/blog" className="flex items-center gap-2">
                            View All Articles
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
} 