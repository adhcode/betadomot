'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Shield, Lock, Bell, Camera,
    ArrowRight, Zap, Home, Wifi,
    AlertTriangle, Fingerprint, Eye,
    Smartphone, Radio, Battery,
    Settings, PhoneCall, AlertCircle, FileText, Users, Mail
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './security.module.css'
import { ProductSuggestion } from '@/components/products/product-suggestion'
import { getProductsByCategory } from '@/data/products'
import { Product } from '@/types/product'
import { cn } from "@/lib/utils"
import { Check, Clock } from 'lucide-react'
import { toast } from 'sonner'
import { Input } from "@/components/ui/input"

// Security tips
const securityTips = [
    {
        icon: Lock,
        title: "Smart Access Control",
        description: "Secure your home with smart locks and biometric access - prevent unauthorized entry",
        benefit: "24/7 Access Control",
        action: "Explore Solutions"
    },
    {
        icon: Zap,
        title: "Surge Protection",
        description: "Protect expensive appliances from power surges with smart monitoring",
        benefit: "Device Protection",
        action: "View Protection Plans"
    },
    {
        icon: Camera,
        title: "Video Surveillance",
        description: "Monitor your home remotely with AI-powered cameras and motion detection",
        benefit: "Real-time Monitoring",
        action: "See Cameras"
    },
    {
        icon: Bell,
        title: "Instant Alerts",
        description: "Get immediate notifications for any security or power-related incidents",
        benefit: "Quick Response",
        action: "Setup Alerts"
    }
]

// Security resources
const securityResources = [
    {
        title: "Home Security Essentials",
        description: "Complete guide to securing your Nigerian home",
        readTime: "15 mins",
        type: "Guide",
        preview: "Learn about modern security systems, from smart locks to surveillance...",
        topics: ["Access Control", "CCTV", "Smart Alerts", "Remote Monitoring"],
        icon: Home,
        category: "Basics"
    },
    {
        title: "Appliance Protection Guide",
        description: "Protect your valuable electronics from power issues",
        readTime: "10 mins",
        type: "Protection",
        preview: "Essential tips for protecting your appliances from electrical damage...",
        topics: ["Surge Protection", "Voltage Control", "Smart Monitoring", "Device Safety"],
        icon: Zap,
        category: "Protection"
    },
    {
        title: "Smart Security Setup",
        description: "Step-by-step guide to setting up your security system",
        readTime: "20 mins",
        type: "Tutorial",
        preview: "Detailed walkthrough of installing and configuring security devices...",
        topics: ["Installation", "Configuration", "Integration", "Testing"],
        icon: Settings,
        category: "Setup"
    },
    {
        title: "Power Safety 101",
        description: "Understanding electrical safety for your home",
        readTime: "12 mins",
        type: "Safety",
        preview: "Essential knowledge about electrical safety and protection...",
        topics: ["Grounding", "Circuit Protection", "Load Management", "Safety Standards"],
        icon: Shield,
        category: "Safety"
    }
]

// Update the product filtering
const recommendedProducts = {
    accessControl: getProductsByCategory('smart-devices')
        .filter(p => p.tags?.includes('access-control'))
        .slice(0, 2),
    surveillance: getProductsByCategory('smart-devices')
        .filter(p => p.tags?.includes('surveillance'))
        .slice(0, 2),
    protection: getProductsByCategory('power')
        .filter(p => p.tags?.includes('surge-protection'))
        .slice(0, 2)
}

// Add this constant with the emergency guidelines
const emergencyGuidelines = [
    {
        icon: AlertCircle,
        title: "Immediate Actions",
        steps: [
            "Stay calm and assess the situation",
            "Contact emergency services if needed",
            "Activate security alarm system",
            "Move to a safe location if necessary"
        ],
        priority: "Critical"
    },
    {
        icon: PhoneCall,
        title: "Emergency Contacts",
        steps: [
            "Police Emergency: 112",
            "Fire Service: 112",
            "Security Company Hotline",
            "Trusted neighbors"
        ],
        priority: "Important"
    },
    {
        icon: FileText,
        title: "Documentation",
        steps: [
            "Take photos of any damage",
            "Note time and details of incident",
            "Record any suspicious activity",
            "Keep all incident reports"
        ],
        priority: "High"
    },
    {
        icon: Users,
        title: "Family Protocol",
        steps: [
            "Establish safe meeting point",
            "Share location with family",
            "Follow evacuation plan",
            "Check on vulnerable members"
        ],
        priority: "Essential"
    }
]

// Add this function to handle saving guidelines
const handleSaveGuidelines = (guide: typeof emergencyGuidelines[0]) => {
    // In a real app, you might save to localStorage or a database
    toast.success(`Saved ${guide.title} guidelines`, {
        description: "You can now access these guidelines offline",
    })
}

export default function SecurityPage() {
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
                                Smart Security Solutions
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                                Protect What
                                <span className="block text-[#E4A853] mt-2">Matters Most</span>
                            </h1>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                From smart surveillance to surge protection, secure your home and valuable
                                appliances with our comprehensive security solutions. Get peace of mind
                                knowing your investments are protected 24/7.
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-10">
                                <div className="text-center">
                                    <div className="text-[#E4A853] text-3xl font-bold mb-2">24/7</div>
                                    <div className="text-gray-300 text-sm">Monitoring</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[#E4A853] text-3xl font-bold mb-2">100%</div>
                                    <div className="text-gray-300 text-sm">Coverage</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[#E4A853] text-3xl font-bold mb-2">
                                        <Shield className="h-8 w-8 mx-auto" />
                                    </div>
                                    <div className="text-gray-300 text-sm">Protection</div>
                                </div>
                            </div>

                            <Button className="h-14 px-8 bg-[#E4A853] hover:bg-[#FFD700] 
                                text-black font-medium transition-all duration-300
                                rounded-full flex items-center justify-center gap-2
                                hover:gap-3 shadow-lg hover:shadow-xl 
                                transform hover:-translate-y-0.5">
                                Learn More
                                <ArrowRight className="h-5 w-5 transition-all duration-300" />
                            </Button>
                        </motion.div>

                        {/* Continue with the rest of the sections similar to learn page but with security focus */}
                        {/* ... */}
                    </div>
                </div>
            </section>

            {/* Security Tips Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Comprehensive Security Solutions
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Protect your home and appliances with our integrated security features.
                            Each solution is designed to work seamlessly together.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {securityTips.map((tip, index) => (
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

            {/* Product Recommendations */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Recommended Security Solutions
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Explore our curated selection of security products designed to protect
                            your home and valuable appliances.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {Object.entries(recommendedProducts).map(([category, products]) => (
                            <div key={category}>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 rounded-lg bg-[#003366]/5">
                                        {category === 'accessControl' && <Lock className="h-5 w-5 text-[#003366]" />}
                                        {category === 'surveillance' && <Camera className="h-5 w-5 text-[#003366]" />}
                                        {category === 'protection' && <Shield className="h-5 w-5 text-[#003366]" />}
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {category === 'accessControl' && 'Smart Access Control'}
                                        {category === 'surveillance' && 'Video Surveillance'}
                                        {category === 'protection' && 'Surge Protection'}
                                    </h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {products.map((product) => (
                                        <ProductSuggestion
                                            key={product.id}
                                            product={product}
                                            className="bg-gradient-to-br from-white to-gray-50/50"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All CTA */}
                    <div className="text-center mt-16">
                        <Link href="/products/security">
                            <Button className="h-14 px-8 bg-[#003366] hover:bg-[#002244] 
                                text-white font-medium transition-all duration-300
                                rounded-full flex items-center justify-center gap-2
                                hover:gap-3 shadow-lg hover:shadow-xl 
                                transform hover:-translate-y-0.5">
                                View All Security Products
                                <ArrowRight className="h-5 w-5 transition-all duration-300" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Security Resources Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Security Resources
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Expert guides and tutorials to help you understand and implement
                            comprehensive security solutions.
                        </p>
                    </motion.div>

                    <div className={styles.masonryGrid}>
                        {securityResources.map((resource, index) => (
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

            {/* Emergency Response Guidelines Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Emergency Response Guidelines
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Quick reference guide for handling security incidents. Keep these steps
                            handy for immediate action when needed.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {emergencyGuidelines.map((guide, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="group h-full hover:shadow-lg transition-all duration-300 flex flex-col">
                                    <div className="p-6 flex flex-col h-full">
                                        {/* Header */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 rounded-lg bg-[#003366]/5 
                                                group-hover:bg-[#003366]/10 transition-all duration-300">
                                                <guide.icon className="h-5 w-5 text-[#003366]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg group-hover:text-[#003366] 
                                                    transition-colors duration-300">
                                                    {guide.title}
                                                </h3>
                                                <span className="text-xs font-medium text-[#E4A853]">
                                                    Priority: {guide.priority}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Steps - This will take up remaining space */}
                                        <div className="space-y-3 flex-grow">
                                            {guide.steps.map((step, i) => (
                                                <div key={i} className="flex items-start gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-[#003366]/5 flex 
                                                        items-center justify-center flex-shrink-0 mt-0.5">
                                                        <span className="text-xs font-medium text-[#003366]">
                                                            {i + 1}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{step}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Action Button - This will stay at bottom */}
                                        <div className="mt-6 pt-4 border-t border-gray-100">
                                            <Button
                                                variant="outline"
                                                onClick={() => handleSaveGuidelines(guide)}
                                                className="w-full group-hover:bg-[#003366] 
                                                    group-hover:text-white transition-all duration-300"
                                            >
                                                Save Guidelines
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
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Stay Updated on Security
                            </h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#E4A853]/10 flex items-center justify-center">
                                        <Shield className="h-5 w-5 text-[#E4A853]" />
                                    </div>
                                    <p className="text-gray-600">Daily security tips and alerts</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#E4A853]/10 flex items-center justify-center">
                                        <Bell className="h-5 w-5 text-[#E4A853]" />
                                    </div>
                                    <p className="text-gray-600">Emergency response updates</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#E4A853]/10 flex items-center justify-center">
                                        <Lock className="h-5 w-5 text-[#E4A853]" />
                                    </div>
                                    <p className="text-gray-600">Latest security product reviews</p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <Card className="p-8 bg-gradient-to-br from-[#003366] to-[#002244]">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Get Security Updates
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Join our community and receive practical security tips to protect
                                your home and appliances. Stay informed and secure!
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