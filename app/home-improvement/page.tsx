'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Home, Palette, Lightbulb, Thermometer,
    ArrowRight, Wrench, Ruler, Leaf,
    Sun, Wind, Droplets, Shield,
    Settings, Mail, Eye, Zap, Check, Users
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './home-improvement.module.css'
import { Input } from "@/components/ui/input"
import { toast } from 'sonner'
import { BeforeAfterData } from '@/types/home-improvement'
import { getProductById } from '@/data/products'

// Home Improvement Tips
const improvementTips = [
    {
        icon: Palette,
        title: "Smart Color Choices",
        description: "Use light colors to make spaces feel larger and cooler. Dark colors absorb heat.",
        benefit: "Better Comfort",
        action: "View Color Guide"
    },
    {
        icon: Lightbulb,
        title: "Natural Lighting",
        description: "Maximize natural light with strategic window placement and reflective surfaces",
        benefit: "Energy Savings",
        action: "Lighting Solutions"
    },
    {
        icon: Wind,
        title: "Ventilation Design",
        description: "Improve airflow with proper window placement and ceiling heights",
        benefit: "Better Air Quality",
        action: "Learn More"
    },
    {
        icon: Shield,
        title: "Weather Protection",
        description: "Protect your home from harsh weather with proper insulation and sealing",
        benefit: "Long-term Savings",
        action: "Protection Tips"
    }
]

// Home Improvement Resources
const improvementResources = [
    {
        title: "Energy-Efficient Design",
        description: "Guide to designing an energy-efficient Nigerian home",
        readTime: "15 mins",
        type: "Design Guide",
        preview: "Learn about passive cooling, natural ventilation, and smart material choices...",
        topics: ["Natural Cooling", "Ventilation", "Materials", "Insulation"],
        icon: Sun,
        category: "Design"
    },
    {
        title: "Smart Space Planning",
        description: "Make the most of your living spaces",
        readTime: "10 mins",
        type: "Planning Guide",
        preview: "Optimize your home layout for better flow and functionality...",
        topics: ["Room Layout", "Storage", "Multi-purpose Spaces", "Flow"],
        icon: Ruler,
        category: "Planning"
    },
    {
        title: "Maintenance Guide",
        description: "Keep your home in top condition",
        readTime: "12 mins",
        type: "Maintenance",
        preview: "Regular maintenance tips to protect your home investment...",
        topics: ["Seasonal Checks", "Repairs", "Prevention", "Upkeep"],
        icon: Wrench,
        category: "Maintenance"
    },
    {
        title: "Eco-Friendly Updates",
        description: "Sustainable improvements for your home",
        readTime: "10 mins",
        type: "Green Living",
        preview: "Environmentally conscious upgrades that save money...",
        topics: ["Solar Power", "Water Conservation", "Green Materials", "Recycling"],
        icon: Leaf,
        category: "Sustainability"
    }
]

const transformations: BeforeAfterData[] = [
    {
        title: "Living Room Makeover",
        description: "Modern transformation with improved lighting and space utilization",
        before: "/showcase/living-before.jpg",
        after: "/showcase/living-after.jpg",
        improvements: ["Natural Light", "Space Planning", "Color Scheme"],
        savings: "30% Energy Savings"
    },
    {
        title: "Kitchen Renovation",
        description: "Efficient kitchen design with better workflow and storage",
        before: "/showcase/kitchen-before.jpg",
        after: "/showcase/kitchen-after.jpg",
        improvements: ["Storage Solutions", "Ventilation", "Work Triangle"],
        savings: "40% Space Utilized"
    },
    {
        title: "Bedroom Enhancement",
        description: "Comfort-focused upgrade with climate control features",
        before: "/showcase/bedroom-before.jpg",
        after: "/showcase/bedroom-after.jpg",
        improvements: ["Temperature Control", "Sound Insulation", "Lighting"],
        savings: "25% Better Comfort"
    }
]

// Add these interfaces to your types
interface ApartmentType {
    size: string;
    title: string;
    description: string;
    image: string;
    products: string[];  // Product IDs
    features: string[];
}

// Add this near your other data constants
const apartmentTypes: ApartmentType[] = [
    {
        size: "1-2 Bedroom",
        title: "Starter Home",
        description: "Perfect solutions for small apartments and starter homes",
        image: "/apartments/starter.jpg",
        products: ["smart-bulb-pack", "portable-ac", "surge-protector-1"],
        features: ["Space-saving designs", "Energy-efficient", "Smart controls"]
    },
    {
        size: "3-4 Bedroom",
        title: "Family Home",
        description: "Comprehensive solutions for family living spaces",
        image: "/apartments/family.jpg",
        products: ["ac-1", "smart-lock-1", "camera-system-1"],
        features: ["Family safety", "Comfort control", "Smart security"]
    },
    {
        size: "Duplex",
        title: "Luxury Living",
        description: "Premium solutions for larger homes and duplexes",
        image: "/apartments/luxury.jpg",
        products: ["solar-2kw-package", "inv-1", "smart-lock-1"],
        features: ["Full automation", "Solar power", "Premium comfort"]
    }
]

export default function HomeImprovementPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-[#003366] to-[#002244] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.1, 0.2]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[#E4A853]/10 to-transparent"
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="inline-block text-sm font-medium bg-gradient-to-r from-[#E4A853] to-[#FFD700] 
                                text-transparent bg-clip-text mb-6 tracking-wider uppercase">
                                Home Improvement Guide
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                                Transform Your Space
                                <span className="block text-[#E4A853] mt-2">Enhance Your Living</span>
                            </h1>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Discover smart ways to improve your home's comfort, efficiency, and value.
                                Get expert tips and solutions tailored for Nigerian homes.
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-10">
                                <div className="text-center">
                                    <div className="text-[#E4A853] text-3xl font-bold mb-2">15+</div>
                                    <div className="text-gray-300 text-sm">Design Tips</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[#E4A853] text-3xl font-bold mb-2">30%</div>
                                    <div className="text-gray-300 text-sm">Energy Savings</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[#E4A853] text-3xl font-bold mb-2">
                                        <Home className="h-8 w-8 mx-auto" />
                                    </div>
                                    <div className="text-gray-300 text-sm">Better Living</div>
                                </div>
                            </div>

                            <Button className="h-14 px-8 bg-[#E4A853] hover:bg-[#FFD700] 
                                text-black font-medium transition-all duration-300
                                rounded-full flex items-center justify-center gap-2
                                hover:gap-3 shadow-lg hover:shadow-xl 
                                transform hover:-translate-y-0.5">
                                Explore Solutions
                                <ArrowRight className="h-5 w-5 transition-all duration-300" />
                            </Button>
                        </motion.div>

                        {/* Add hero image if needed */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden">
                                <Image
                                    src="/home-improvement-hero.jpg"
                                    alt="Modern Home Improvement"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Improvement Tips Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Smart Improvement Solutions
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Expert-recommended improvements to enhance your living space comfort and efficiency.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {improvementTips.map((tip, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="group p-8 hover:shadow-lg transition-all duration-300 
                                    bg-white border border-gray-100 hover:border-[#E4A853]">
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 rounded-2xl bg-[#003366]/5 
                                            group-hover:bg-[#003366]/10 transition-all duration-300">
                                            <tip.icon className="h-7 w-7 text-[#003366]" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold group-hover:text-[#003366] 
                                                transition-colors duration-300">
                                                {tip.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {tip.description}
                                            </p>
                                            <div className="flex items-center gap-3 text-[#E4A853]">
                                                <Shield className="h-5 w-5" />
                                                <span className="text-sm font-medium">{tip.benefit}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Help Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                <Image
                                    src="/home-improvement-help.jpg"
                                    alt="Home Improvement Process"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="flex -space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-[#E4A853] flex items-center justify-center">
                                            <Wrench className="h-5 w-5" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-[#003366] flex items-center justify-center">
                                            <Users className="h-5 w-5" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-[#E4A853] flex items-center justify-center">
                                            <Home className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium">Trusted by 1000+ homeowners</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold mb-4">
                                    How We Help Transform Your Space
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    We guide you through every step of your home improvement journey,
                                    from planning to completion.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Expert Consultation",
                                        description: "Get personalized advice from our home improvement specialists",
                                        icon: Users
                                    },
                                    {
                                        title: "Product Selection",
                                        description: "Choose from our curated selection of quality improvement products",
                                        icon: Check
                                    },
                                    {
                                        title: "Installation Support",
                                        description: "Professional installation guidance and support when needed",
                                        icon: Wrench
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-[#003366]/5">
                                            <item.icon className="h-6 w-6 text-[#003366]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Button className="h-12 px-8 bg-[#003366] hover:bg-[#002244] text-white
                                transition-all duration-300 rounded-lg">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Transformation Showcase */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Transformation Showcase
                        </h2>
                        <p className="text-gray-600 text-lg">
                            See the impact of our improvement solutions through these real-world transformations.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {transformations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="group overflow-hidden">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#003366] 
                                            transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-6">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Before/After Images */}
                                    <div className="relative h-64 grid grid-cols-2 gap-2 px-6">
                                        <div className="relative rounded-lg overflow-hidden">
                                            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] 
                                        group-hover:backdrop-blur-0 transition-all duration-300" />
                                            <span className="absolute top-2 left-2 text-xs font-medium 
                                        bg-black/50 text-white px-2 py-1 rounded-full">Before</span>
                                            <Image
                                                src={item.before}
                                                alt={`${item.title} Before`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="relative rounded-lg overflow-hidden">
                                            <span className="absolute top-2 left-2 text-xs font-medium 
                                        bg-[#E4A853] text-black px-2 py-1 rounded-full">After</span>
                                            <Image
                                                src={item.after}
                                                alt={`${item.title} After`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        {/* Improvements */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {item.improvements.map((improvement, i) => (
                                                <span key={i}
                                                    className="text-xs px-3 py-1 rounded-full
                                                    bg-gradient-to-r from-[#003366]/5 to-[#003366]/10
                                                    text-[#003366] font-medium">
                                                    {improvement}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Results */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-2">
                                                <Zap className="h-5 w-5 text-[#E4A853]" />
                                                <span className="text-sm font-medium text-[#E4A853]">
                                                    {item.savings}
                                                </span>
                                            </div>
                                            <Button variant="ghost"
                                                className="group-hover:text-[#003366] transition-colors duration-300">
                                                View Details
                                                <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 
                                                    group-hover:translate-x-1" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Home Improvement Resources
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Expert guides and tutorials to help you make informed decisions
                            about your home improvements.
                        </p>
                    </motion.div>

                    <div className={styles.masonryGrid}>
                        {improvementResources.map((resource, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={styles.masonryItem}
                            >
                                <Card className="group p-6 hover:shadow-xl transition-all duration-300 
                                    border border-gray-100 hover:border-[#E4A853] 
                                    flex flex-col h-full relative overflow-hidden">
                                    {/* Decorative gradient */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br 
                                        from-[#003366]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

                                    {/* Type Badge */}
                                    <div className="flex items-center gap-2 mb-6 relative">
                                        <div className="p-2 rounded-lg bg-[#003366]/5 group-hover:bg-[#003366]/10 
                                            transition-colors duration-300">
                                            <resource.icon className="h-5 w-5 text-[#003366]" />
                                        </div>
                                        <span className="text-sm font-medium text-[#E4A853]">
                                            {resource.type}
                                        </span>
                                        <span className="ml-auto text-sm text-gray-500">
                                            {resource.readTime} read
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col">
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#003366] 
                                            transition-colors duration-300">
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-6">
                                            {resource.description}
                                        </p>

                                        {/* Topics */}
                                        <div className="mb-6">
                                            <div className="flex flex-wrap gap-2">
                                                {resource.topics.map((topic, i) => (
                                                    <span key={i}
                                                        className="text-xs px-3 py-1 rounded-full
                                                        bg-gradient-to-r from-[#003366]/5 to-[#003366]/10
                                                        text-[#003366] font-medium
                                                        hover:from-[#003366]/10 hover:to-[#003366]/20 
                                                        transition-all duration-300 cursor-pointer">
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Preview */}
                                        <p className="text-sm text-gray-500 mb-6 flex-grow">
                                            {resource.preview}
                                        </p>

                                        {/* Action Button - Will stay at bottom */}
                                        <div className="pt-4 border-t border-gray-100">
                                            <Button
                                                className="w-full bg-white hover:bg-[#003366] text-[#003366] 
                                                hover:text-white border border-[#003366] transition-all 
                                                duration-300 flex items-center justify-center gap-2
                                                rounded-lg group-hover:shadow-md">
                                                Read Article
                                                <ArrowRight className="h-4 w-4 transition-all duration-300
                                                group-hover:translate-x-1" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Shop by Apartment Type */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Shop by Apartment Type
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Find the perfect home improvement solutions tailored to your living space.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {apartmentTypes.map((apt, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="group overflow-hidden bg-white hover:shadow-lg 
                                    transition-all duration-300 h-full flex flex-col">
                                    {/* Apartment Image */}
                                    <div className="relative h-56">
                                        <Image
                                            src={apt.image}
                                            alt={apt.title}
                                            fill
                                            className="object-cover transition-transform duration-500 
                                        group-hover:scale-[1.02]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t 
                                    from-black/70 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <span className="inline-block px-3 py-1 bg-[#E4A853] text-black text-sm 
                                        font-medium rounded-full mb-2">
                                                {apt.size}
                                            </span>
                                            <h3 className="text-xl font-bold text-white">
                                                {apt.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="flex-1 p-6 flex flex-col">
                                        <p className="text-gray-600 text-sm mb-6">
                                            {apt.description}
                                        </p>

                                        {/* Features */}
                                        <div className="space-y-2 mb-6">
                                            {apt.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2 p-2 rounded-lg 
                                            bg-gray-50 group-hover:bg-gray-100 transition-all duration-300">
                                                    <Check className="h-4 w-4 text-[#E4A853]" />
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Products - Takes remaining space */}
                                        <div className="flex-1 space-y-3">
                                            <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                                                Recommended Products
                                            </h4>
                                            <div className="space-y-2">
                                                {apt.products.map((productId) => {
                                                    const product = getProductById(productId)
                                                    return product ? (
                                                        <div key={productId}
                                                            className="flex items-center gap-3 p-2 rounded-lg 
                                                        hover:bg-gray-50 transition-all duration-300
                                                        group/item cursor-pointer">
                                                            <div className="relative w-12 h-12 rounded-md overflow-hidden 
                                                        flex-shrink-0">
                                                                <Image
                                                                    src={product.image}
                                                                    alt={product.name}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                            <div className="min-w-0 flex-1">
                                                                <p className="font-medium text-gray-900 truncate">
                                                                    {product.name}
                                                                </p>
                                                                <p className="text-sm text-[#E4A853]">
                                                                    ₦{product.price.toLocaleString()}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ) : null
                                                })}
                                            </div>
                                        </div>

                                        {/* Button - Always at bottom */}
                                        <div className="pt-6 mt-6 border-t border-gray-100">
                                            <Button className="w-full bg-white hover:bg-[#003366] text-[#003366] 
                                        hover:text-white border border-[#003366] transition-all duration-300
                                        h-11 rounded-lg">
                                                View All Solutions
                                                <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300
                                            group-hover:translate-x-1" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 bg-gradient-to-br from-[#003366] to-[#002244]">
                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Background Effects */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.1, 0.2]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[#E4A853]/10 to-transparent"
                        />
                    </div>

                    <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-white">
                                Stay Updated on Home Improvement
                            </h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#E4A853]/10 flex items-center justify-center">
                                        <Home className="h-5 w-5 text-[#E4A853]" />
                                    </div>
                                    <p className="text-gray-300">Weekly home improvement tips</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#E4A853]/10 flex items-center justify-center">
                                        <Zap className="h-5 w-5 text-[#E4A853]" />
                                    </div>
                                    <p className="text-gray-300">Energy efficiency updates</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#E4A853]/10 flex items-center justify-center">
                                        <Check className="h-5 w-5 text-[#E4A853]" />
                                    </div>
                                    <p className="text-gray-300">Latest product recommendations</p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <Card className="p-8 bg-gradient-to-br from-[#003366] to-[#002244]">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Get Home Improvement Updates
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Join our community and receive practical home improvement tips.
                                Stay informed about the latest trends and solutions!
                            </p>
                            <form className="space-y-4">
                                <div className="relative group">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="h-14 bg-white/10 border-white/20 text-white 
                                            placeholder:text-gray-400 pr-12 pl-5
                                            rounded-full backdrop-blur-sm
                                            group-hover:border-[#E4A853]/50 focus:border-[#E4A853]
                                            focus:ring focus:ring-[#E4A853]/20
                                            transition-all duration-300"
                                    />
                                    <Mail className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 
                                        text-gray-400 group-hover:text-[#E4A853] transition-colors duration-300" />
                                </div>
                                <div className="flex justify-center">
                                    <Button className="h-14 px-8 bg-[#E4A853] hover:bg-[#FFD700] 
                                        text-black font-medium transition-all duration-300
                                        rounded-full flex items-center justify-center gap-2
                                        hover:gap-3 shadow-lg hover:shadow-xl 
                                        transform hover:-translate-y-0.5">
                                        Subscribe to Updates
                                        <ArrowRight className="h-5 w-5 transition-all duration-300" />
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
} 