'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ArrowRight } from "lucide-react"
import { spacing } from "@/lib/styles"
import { fadeIn } from "@/lib/animations"
import { useState } from "react"

export function CtaSection() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter signup
        console.log('Newsletter signup:', email)
        setEmail('')
    }

    return (
        <section className={`${spacing.section} bg-[#1A1A1A]`}>
            <div className={spacing.container}>
                <motion.div
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="inline-flex items-center gap-2 text-[#E4A853] mb-6">
                        <Mail className="h-5 w-5" />
                        Newsletter
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Stay Updated with Smart Living
                    </h2>

                    <p className="text-gray-300 mb-8">
                        Subscribe to our newsletter for the latest updates on smart home technology,
                        energy-saving tips, and exclusive offers.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12 bg-white/10 border-white/10 text-white placeholder:text-white/60"
                        />
                        <Button type="submit" className="h-12 bg-[#E4A853] hover:bg-[#F5B963] text-black whitespace-nowrap">
                            Subscribe Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
} 