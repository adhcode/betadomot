'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { spacing } from "@/lib/styles"
import { fadeIn, staggerContainer } from "@/lib/animations"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
    return (
        <section className={`${spacing.section} relative overflow-hidden bg-[#1A1A1A]`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <Image
                    src="/patterns/grid.svg"
                    alt="Background pattern"
                    fill
                    className="object-cover"
                />
            </div>

            <div className={spacing.container}>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    <motion.div variants={fadeIn} className="text-white relative z-10">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                            Transform Your Home
                            <span className="block text-[#E4A853]">Into Something Special</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-lg">
                            Experience the perfect blend of comfort and innovation with our
                            smart home solutions designed for modern Nigerian living.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/products">
                                <Button className="bg-[#E4A853] hover:bg-[#F5B963] text-black w-full sm:w-auto">
                                    Explore Products
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/calculator">
                                <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                                    Calculate Savings
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        className="relative aspect-square lg:aspect-auto"
                    >
                        <Image
                            src="/hero-home.jpg"
                            alt="Modern smart home"
                            fill
                            className="object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent lg:hidden" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
} 