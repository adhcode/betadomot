'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react'
import { Mail, ArrowRight, Lightbulb, Tag, BookOpen } from 'lucide-react'

export function NewsletterSection() {
    const [email, setEmail] = useState('')

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitted email:', email)
        setEmail('')
    }

    const benefits = [
        {
            icon: Lightbulb,
            title: "Weekly Energy Tips",
            description: "Get practical advice on reducing energy consumption"
        },
        {
            icon: Tag,
            title: "Exclusive Deals",
            description: "Early access to product launches and special offers"
        },
        {
            icon: BookOpen,
            title: "Educational Content",
            description: "In-depth guides on smart home technology"
        }
    ]

    return (
        <section className="py-24 px-4 bg-[#003366]">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/5 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 text-[#87CEEB] mb-6">
                                <Mail className="h-5 w-5" />
                                Stay Updated
                            </span>
                            <h2 className="text-4xl font-bold mb-6 text-white">Join Our Energy-Saving Community</h2>
                            <p className="text-lg mb-8 text-white/80 leading-relaxed">
                                Subscribe to receive weekly energy-saving tips, product updates, and exclusive educational content.
                            </p>

                            <div className="space-y-6 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="bg-white/10 p-2 rounded-lg">
                                            <benefit.icon className="h-5 w-5 text-[#87CEEB]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium mb-1">{benefit.title}</h4>
                                            <p className="text-white/60 text-sm">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="h-14 bg-white/10 border-white/10 text-white placeholder:text-white/60 rounded-full px-6 flex-grow"
                                />
                                <Button
                                    type="submit"
                                    className="h-14 px-8 rounded-full bg-white text-[#003366] hover:bg-[#87CEEB] transition-all duration-300 font-medium group"
                                >
                                    Subscribe
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                            <p className="mt-4 text-white/60 text-sm">
                                Join 10,000+ energy-conscious individuals. Unsubscribe anytime.
                            </p>
                        </div>

                        <div className="hidden md:block relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/20 to-[#003366]/20 blur-3xl rounded-full"></div>
                            <div className="relative bg-white/10 p-8 rounded-2xl">
                                <div className="space-y-6">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="bg-white/5 p-4 rounded-xl">
                                            <div className="h-2 w-2/3 bg-white/20 rounded mb-2"></div>
                                            <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 