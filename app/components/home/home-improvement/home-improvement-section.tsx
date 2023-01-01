import { motion } from "framer-motion"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'

export const HomeImprovementSection = () => {
    return (
        <motion.div className="relative py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    {/* Content */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 max-w-2xl"
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-none">
                            Betadomot
                            <br />
                            <span className="text-[#E4A853]">improves your home.</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                            Transform your living space with our
                            <span className="text-[#E4A853] font-semibold"> smart upgrades </span>
                            and experience
                            <span className="text-black font-semibold"> modern comfort</span>.
                        </p>
                        <Link href="/home-improvement">
                            <Button
                                className="group bg-black hover:bg-black/90 text-white px-8 h-14 
                  text-base transition-all duration-300 rounded-full"
                            >
                                Discover more
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Right Image with Float Animation */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 relative w-full aspect-square lg:aspect-auto lg:h-[600px]"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 -bottom-4 w-full h-full border border-[#E4A853]/20 rounded-2xl"
                        />
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                                src="/improvement.jpeg"
                                alt="Modern Home Improvements"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
} 