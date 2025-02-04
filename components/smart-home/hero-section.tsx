'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Lightbulb, Users, BookOpen, ArrowUpRight, Zap } from 'lucide-react'
import bannerImage from "@/public/safirox.jpeg"
import Link from 'next/link'

export function HeroSection() {
    return (
        <section className="relative py-32 px-4 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10 gap-16">
                <div className="md:w-1/2 mb-8 md:mb-0 text-left">
                    <div className="space-y-8">
                        <span className="px-6 py-2 rounded-full bg-[#003366]/5 text-[#003366] text-sm font-medium inline-flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            Empowering Nigerian Homes
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Save Energy, <span className="text-[#003366]">Empower Your Future</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                            With soaring electricity costs and unreliable supply, energy efficiency is a necessity. Smart solutions help you save money and live better.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/learn">
                                <Button variant="outline" className="h-[60px] rounded-full px-8 py-3 text-lg border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-all duration-300">
                                    Learn More
                                </Button>
                            </Link>
                            <Link href="/products">
                                <Button className="h-[60px] rounded-full px-8 py-3 text-lg bg-[#003366] text-white hover:bg-[#002244] transition-all duration-300">
                                    View Products
                                    <ArrowUpRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {[
                                {
                                    icon: Users,
                                    title: "5K+ Homes",
                                    description: "Empowered Across Nigeria"
                                },
                                {
                                    icon: Lightbulb,
                                    title: "70% Less",
                                    description: "Generator Usage"
                                },
                                {
                                    icon: BookOpen,
                                    title: "24/7 Support",
                                    description: "Local Expertise"
                                },
                                {
                                    icon: Zap,
                                    title: "₦50K+ Monthly",
                                    description: "Average Savings"
                                }
                            ].map((stat, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <stat.icon className="h-5 w-5 text-[#003366]" />
                                    <div>
                                        <p className="font-bold text-gray-900">{stat.title}</p>
                                        <p className="text-sm text-gray-600">{stat.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#87CEEB]/20 to-[#003366]/20 blur-3xl rounded-full"></div>
                    <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                        <Image
                            src={bannerImage}
                            alt="Empowering Nigerian Homes"
                            width={600}
                            height={400}
                            className="rounded-xl relative transform hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                            <p className="text-sm font-medium text-[#003366]">Join the Movement</p>
                            <p className="text-xs text-gray-600">Learn how to save energy and reduce costs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 