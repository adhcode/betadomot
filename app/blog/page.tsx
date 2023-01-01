'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Clock, ImageIcon, Search, CalendarDays, TrendingUp, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { spacing, theme } from "@/lib/constants"
import { containerAnimation, fadeIn } from "@/lib/animations"
import { useState } from "react"

// First define the BlogPost type
interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    readTime: string;
    date: string;
    featured?: boolean;
}

// Then define the FeaturedPost interface extending BlogPost
interface FeaturedPost extends BlogPost {
    authorImage: string;
    authorName: string;
    content: string;
}

// Update the blogPosts array with better images and content
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of Smart Homes in Nigeria",
        excerpt: "Exploring how technology is reshaping Nigerian homes for comfort and efficiency.",
        image: "/blog/smart-home-future.jpg",
        category: "Smart Home",
        readTime: "5 min read",
        date: "Mar 15, 2024",
        featured: true
    },
    {
        id: 2,
        title: "Maximizing Energy Efficiency",
        excerpt: "Practical tips for reducing power consumption while maintaining comfort.",
        image: "/blog/energy-efficiency.jpg",
        category: "Energy Efficiency",
        readTime: "4 min read",
        date: "Mar 12, 2024"
    },
    {
        id: 3,
        title: "Home Security Systems Guide",
        excerpt: "Everything you need to know about modern home security solutions.",
        image: "/blog/security-guide.jpg",
        category: "Home Security",
        readTime: "6 min read",
        date: "Mar 10, 2024"
    },
    {
        id: 4,
        title: "Solar Power: The Nigerian Perspective",
        excerpt: "Understanding solar solutions for Nigerian homes and businesses.",
        image: "/blog/solar-power.jpg",
        category: "Solar Power",
        readTime: "7 min read",
        date: "Mar 8, 2024"
    },
    {
        id: 5,
        title: "Smart Kitchen Essentials",
        excerpt: "Transform your kitchen with these smart appliances and gadgets.",
        image: "/blog/smart-kitchen.jpg",
        category: "Smart Kitchen",
        readTime: "5 min read",
        date: "Mar 5, 2024"
    },
    {
        id: 6,
        title: "The Power of Home Automation",
        excerpt: "How automation can simplify your daily life and save energy.",
        image: "/blog/home-automation.jpg",
        category: "Home Automation",
        readTime: "6 min read",
        date: "Mar 3, 2024"
    }
]

// Update the categories array to recommended topics
const recommendedTopics = [
    "Smart Home", "Energy Efficiency", "Home Security",
    "Solar Power", "Home Automation", "Smart Kitchen"
]

const featuredPost: FeaturedPost = {
    id: 1,
    title: "The Future of Smart Homes in Nigeria: 2024 Trends",
    excerpt: "Exploring how technology is reshaping Nigerian homes for comfort and efficiency.",
    content: "Discover how Nigerian homeowners are embracing smart technology to transform their living spaces into efficient, comfortable, and secure environments. From energy management to automated security systems, we explore the latest trends and innovations that are defining the future of homes in Nigeria.",
    image: "/blog/smart-home-future.jpg",
    category: "Smart Home",
    readTime: "5 min read",
    date: "Mar 15, 2024",
    featured: true,
    authorImage: "/team/author1.jpg",
    authorName: "David Adeleke"
}

export default function BlogPage() {
    const [imageError, setImageError] = useState<Record<number, boolean>>({})
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const handleImageError = (postId: number) => {
        setImageError(prev => ({ ...prev, [postId]: true }))
    }

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1A1A1A] to-black text-white overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-radial from-[#E4A853]/10 to-transparent" />
                    <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-radial from-[#003366]/10 to-transparent" />
                </div>

                <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1
                            bg-[#E4A853]/10 text-[#E4A853] rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#E4A853] animate-pulse" />
                            Latest Updates
                        </span>
                        <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
                            Insights for
                            <span className="block text-[#E4A853]">Smarter Living</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                            Explore the latest trends in home automation, energy efficiency,
                            and smart living solutions crafted for Nigerian homes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Article Section */}
            <section className="py-20 bg-gradient-to-b from-black to-[#1A1A1A]">
                <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        <div className="space-y-6">
                            <span className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1
                                bg-[#E4A853]/10 text-[#E4A853] rounded-full">
                                Featured Article
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                {featuredPost.title}
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {featuredPost.content}
                            </p>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={featuredPost.authorImage}
                                    alt={featuredPost.authorName}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div>
                                    <p className="text-white font-medium">{featuredPost.authorName}</p>
                                    <p className="text-gray-400 text-sm">{featuredPost.date}</p>
                                </div>
                            </div>
                            <Button
                                asChild
                                className="bg-[#E4A853] text-black hover:bg-[#E4A853]/90 mt-4"
                            >
                                <Link href={`/blog/${featuredPost.id}`} className="inline-flex items-center">
                                    Read Article
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="py-6 border-b bg-white sticky top-20 z-30 
                backdrop-blur-sm bg-white/80">
                <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col gap-6">
                        <div className="relative max-w-xl">
                            <Input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 h-12 rounded-full border-gray-200 
                                    focus:border-[#E4A853] focus:ring-[#E4A853]/20"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 
                                h-5 w-5 text-gray-400" />
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-600 mb-3">
                                Recommended topics
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`rounded-full flex-shrink-0 bg-gray-50 hover:bg-gray-100
                                        transition-all duration-300 ${selectedCategory === "All"
                                            ? 'bg-[#E4A853]/10 text-[#E4A853] hover:bg-[#E4A853]/20'
                                            : 'text-gray-600'
                                        }`}
                                    onClick={() => setSelectedCategory("All")}
                                >
                                    All
                                </Button>
                                {recommendedTopics.map((topic) => (
                                    <Button
                                        key={topic}
                                        variant="ghost"
                                        size="sm"
                                        className={`rounded-full flex-shrink-0 bg-gray-50 hover:bg-gray-100
                                            transition-all duration-300 ${selectedCategory === topic
                                                ? 'bg-[#E4A853]/10 text-[#E4A853] hover:bg-[#E4A853]/20'
                                                : 'text-gray-600'
                                            }`}
                                        onClick={() => setSelectedCategory(topic)}
                                    >
                                        {topic}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <motion.div
                        variants={containerAnimation}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                variants={fadeIn}
                                className="group relative bg-white rounded-xl border border-gray-100 
                                    hover:border-[#E4A853]/20 transition-all duration-300 
                                    hover:shadow-lg overflow-hidden"
                            >
                                <Link href={`/blog/${post.id}`} className="block">
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 
                                                group-hover:scale-105"
                                            onError={() => handleImageError(post.id)}
                                        />
                                        {imageError[post.id] && (
                                            <div className="absolute inset-0 flex items-center justify-center 
                                                bg-gray-100">
                                                <ImageIcon className="h-12 w-12 text-gray-400" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t 
                                            from-black/20 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="px-3 py-1 rounded-full bg-[#E4A853]/10 
                                                text-[#E4A853] text-xs font-medium">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-sm text-gray-500">
                                                <Clock className="h-4 w-4" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 
                                            group-hover:text-[#E4A853] transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">
                                                {post.date}
                                            </span>
                                            <span className="text-[#E4A853] font-medium inline-flex 
                                                items-center gap-2 group-hover:gap-3 transition-all duration-300">
                                                Read More
                                                <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    )
} 