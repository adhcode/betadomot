'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Lightbulb, Gift, Bell, ArrowRight } from 'lucide-react'

export function NewsletterSection() {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // TODO: Implement newsletter signup
        setTimeout(() => setIsSubmitting(false), 1000)
    }

    const benefits = [
        {
            icon: Lightbulb,
            title: 'Smart Tips',
            description: 'Get weekly home automation and energy-saving tips'
        },
        {
            icon: Gift,
            title: 'Exclusive Offers',
            description: 'Be the first to know about special deals and promotions'
        },
        {
            icon: Bell,
            title: 'New Arrivals',
            description: 'Stay updated with our latest products and innovations'
        }
    ]

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#1A1A1A]">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-radial from-[#E4A853]/10 to-transparent" />
                <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gradient-radial from-[#003366]/10 to-transparent" />
            </div>

            <div className="relative container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block text-sm font-medium bg-gradient-to-r from-[#E4A853] to-[#FFD700] 
                            text-transparent bg-clip-text mb-4 tracking-wider uppercase">
                            Join Our Newsletter
                        </span>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Stay Ahead with Smart Living Updates
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Subscribe to our newsletter and discover the latest trends in home automation,
                            energy solutions, and smart living.
                        </p>
                    </motion.div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br 
                                    from-[#E4A853]/20 to-[#E4A853]/5 flex items-center justify-center">
                                    <benefit.icon className="h-6 w-6 text-[#E4A853]" />
                                </div>
                                <h3 className="text-white font-medium mb-2">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Subscribe Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="relative max-w-xl mx-auto"
                    >
                        <div className="flex gap-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-12 bg-white/10 border-white/20 text-white 
                                    placeholder:text-gray-400 focus:border-[#E4A853] focus:ring-[#E4A853]/20"
                                required
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="h-12 px-8 bg-[#E4A853] hover:bg-[#E4A853]/90 text-black font-medium
                                    flex items-center gap-2 hover:gap-3 transition-all duration-300"
                            >
                                Subscribe
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                        <p className="mt-3 text-sm text-gray-400 text-center">
                            Join 5,000+ subscribers. Unsubscribe anytime.
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    )
} 