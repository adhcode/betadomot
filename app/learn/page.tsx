'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Power, Timer, Thermometer,
    LightbulbIcon, ArrowRight, Zap, Check, Mail,
    FileText, Clock, Sun, Clipboard, Calculator, Cloud, Home
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import styles from './learn.module.css'

// Quick tips that actually save money
const savingTips = [
    {
        icon: Power,
        title: "Standby Power Waste",
        description: "Unplug devices when not in use - save up to ₦15,000 monthly on phantom loads",
        saving: "₦15,000/month",
        action: "Use smart power strips"
    },
    {
        icon: Thermometer,
        title: "AC Efficiency",
        description: "Set AC to 24°C instead of 18°C - reduce AC energy use by 30%",
        saving: "₦25,000/month",
        action: "Optimize temperature"
    },
    {
        icon: Timer,
        title: "Peak Hours",
        description: "Run major appliances during off-peak hours (9pm - 5am)",
        saving: "₦20,000/month",
        action: "Schedule usage"
    },
    {
        icon: LightbulbIcon,
        title: "Smart Lighting",
        description: "Switch to LED bulbs and use motion sensors",
        saving: "₦10,000/month",
        action: "Upgrade lights"
    }
]

// Update the resources array with more categories and rich content
const resources = [
    {
        title: "Energy Saving Guide 2024",
        description: "Complete guide to reducing energy costs in Nigerian homes",
        readTime: "15 mins",
        type: "PDF Guide",
        preview: "Learn about smart meters, energy audits, and practical tips for reducing consumption...",
        topics: ["Smart Meters", "Energy Audits", "Peak Hours", "Appliance Efficiency"],
        icon: FileText
    },
    {
        title: "Smart Home Automation",
        description: "How automation can reduce your energy consumption",
        readTime: "10 mins",
        type: "Article",
        preview: "Discover how smart home devices can automate energy savings without sacrificing comfort...",
        topics: ["Smart Switches", "Motion Sensors", "Smart AC", "Automation Rules"],
        icon: Home
    },
    {
        title: "Peak vs Off-Peak Usage",
        description: "Understanding electricity tariffs and optimal usage times",
        readTime: "8 mins",
        type: "Guide",
        preview: "Master the art of timing your energy usage to minimize costs and maximize efficiency...",
        topics: ["Time-of-Use Rates", "Load Shifting", "Cost Calculation", "Usage Planning"],
        icon: Clock
    },
    {
        title: "Appliance Efficiency Ratings",
        description: "Choose the right energy-efficient appliances",
        readTime: "12 mins",
        type: "Checklist",
        preview: "Compare energy ratings and make informed decisions when purchasing new appliances...",
        topics: ["Energy Stars", "Cost Comparison", "Lifecycle Costs", "Buying Guide"],
        icon: Check
    },
    {
        title: "Solar Power Basics",
        description: "Essential guide to solar power systems",
        readTime: "20 mins",
        type: "Course",
        preview: "Everything you need to know about solar power systems for your Nigerian home...",
        topics: ["System Types", "Sizing Guide", "Installation", "Maintenance"],
        icon: Sun
    },
    {
        title: "Energy Audit Tutorial",
        description: "DIY guide to auditing your home's energy use",
        readTime: "15 mins",
        type: "Video Guide",
        preview: "Step-by-step instructions for conducting your own home energy audit...",
        topics: ["Audit Steps", "Tools Needed", "Common Issues", "Solutions"],
        icon: Clipboard
    },
    {
        title: "Cost Saving Calculator",
        description: "Interactive tools to estimate your savings",
        readTime: "5 mins",
        type: "Interactive",
        preview: "Use our calculator to estimate potential savings from energy-efficient upgrades...",
        topics: ["ROI Calculator", "Usage Tracker", "Savings Estimator", "Comparison Tools"],
        icon: Calculator
    },
    {
        title: "Seasonal Energy Tips",
        description: "Optimize energy use across seasons",
        readTime: "10 mins",
        type: "Seasonal Guide",
        preview: "Adapt your energy usage to Nigeria's weather patterns for maximum efficiency...",
        topics: ["Harmattan Tips", "Rainy Season", "Summer Cooling", "Yearly Planning"],
        icon: Cloud
    }
]

export default function LearnPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-br from-[#003366] to-[#002244] overflow-hidden">
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

                <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="inline-block text-sm font-medium bg-gradient-to-r from-[#E4A853] to-[#FFD700] 
                                text-transparent bg-clip-text mb-6 tracking-wider uppercase">
                                Energy Savings Guide
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                                Small Changes,
                                <span className="block text-[#E4A853] mt-2">Big Savings</span>
                            </h1>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Did you know? The average Nigerian home wastes up to 30% of its energy
                                on unused appliances and inefficient systems. Learn how to save money
                                and create a more sustainable home.
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-6 mb-10">
                                <div className="text-center">
                                    <div className="text-[#E4A853] text-3xl font-bold mb-2">30%</div>
                                    <div className="text-gray-300 text-sm">Potential Savings</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[#E4A853] text-3xl font-bold mb-2">₦50k+</div>
                                    <div className="text-gray-300 text-sm">Monthly Reduction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[#E4A853] text-3xl font-bold mb-2">24/7</div>
                                    <div className="text-gray-300 text-sm">Smart Monitoring</div>
                                </div>
                            </div>

                            <Link href="/calculator">
                                <Button className="h-14 px-8 bg-[#E4A853] hover:bg-[#FFD700] 
                                    text-black font-medium transition-all duration-300
                                    rounded-full flex items-center justify-center gap-2
                                    hover:gap-3 shadow-lg hover:shadow-xl 
                                    transform hover:-translate-y-0.5">
                                    Calculate Your Savings
                                    <ArrowRight className="h-5 w-5 transition-all duration-300" />
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Right Side Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative h-[500px] hidden lg:block"
                        >
                            <Image
                                src="/images/energy-savings-hero.jpg"
                                alt="Smart energy savings visualization"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quick Wins Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-4">
                            Quick Wins to Reduce Your Bill
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Simple changes that can save you thousands monthly.
                            Start with these easy-to-implement solutions.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {savingTips.map((tip, index) => (
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
                                                <Zap className="h-5 w-5" />
                                                <span className="text-sm font-medium">{tip.saving}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Tips Preview Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Daily Tips for Better Savings
                            </h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#E4A853]/10 flex items-center justify-center">
                                        <Check className="h-5 w-5 text-[#E4A853]" />
                                    </div>
                                    <p className="text-gray-600">Daily energy-saving tips via email</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#E4A853]/10 flex items-center justify-center">
                                        <Check className="h-5 w-5 text-[#E4A853]" />
                                    </div>
                                    <p className="text-gray-600">Weekly savings calculations</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#E4A853]/10 flex items-center justify-center">
                                        <Check className="h-5 w-5 text-[#E4A853]" />
                                    </div>
                                    <p className="text-gray-600">Monthly efficiency reports</p>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <Card className="p-8 bg-gradient-to-br from-[#003366] to-[#002244]">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Get Daily Energy Saving Tips
                            </h3>
                            <p className="text-gray-300 mb-6">
                                Join our community and receive practical tips to reduce your energy bills.
                                Start saving today!
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
                                        Subscribe to Tips
                                        <ArrowRight className="h-5 w-5 transition-all duration-300" />
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            Free Learning Resources
                        </h2>
                        <p className="text-gray-600">
                            Explore our comprehensive collection of guides, tools, and articles to master
                            energy management in your home.
                        </p>
                    </div>

                    <div className={styles.masonryGrid}>
                        {resources.map((resource, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={styles.masonryItem}
                            >
                                <Card className="group p-6 hover:shadow-xl transition-all duration-500 
                                    border-t-4 border-t-transparent hover:border-t-[#E4A853]
                                    transform hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br 
                                        from-[#003366]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

                                    {/* Type Badge */}
                                    <div className="flex items-center gap-2 mb-6">
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
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#003366] 
                                            transition-colors duration-300">
                                            {resource.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                                            {resource.description}
                                        </p>

                                        {/* Topics */}
                                        <div className="space-y-4 mb-6">
                                            <div className="flex flex-wrap gap-2">
                                                {resource.topics.slice(0, 3).map((topic, i) => (
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
                                        <p className="text-sm text-gray-500 italic mb-6 line-clamp-2">
                                            {resource.preview}
                                        </p>

                                        {/* Action Button */}
                                        <div className="pt-4 border-t border-gray-100">
                                            <Button
                                                className="w-full bg-white hover:bg-[#003366] text-[#003366] 
                                                    hover:text-white border border-[#003366] transition-all 
                                                    duration-300 flex items-center justify-center gap-2
                                                    rounded-lg group-hover:shadow-md">
                                                Read Now
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

            {/* Get Started CTA */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">
                        Ready to Start Saving?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/calculator">
                            <Button className="h-14 px-8 bg-[#003366] hover:bg-[#002244]
                                text-white font-medium transition-all duration-300">
                                Calculate Your Savings
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/products">
                            <Button variant="outline" className="h-14 px-8">
                                Browse Energy Solutions
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
} 