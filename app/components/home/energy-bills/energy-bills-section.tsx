import { motion } from "framer-motion"
import Image from 'next/image'
import { Button } from "../../../components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'
import { slideIn, fadeIn } from "../../../lib/animations"

export const EnergyBillsSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative py-20 bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Content with Stagger */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 max-w-2xl"
                    >
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-4">Take Control of Your Energy Bills</h2>
                            <p className="text-lg mb-8 max-w-2xl mx-auto">
                                Discover how smart home technology can help you reduce your energy consumption and save money.
                            </p>
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                Get Started
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Image with Float Animation */}
                    <motion.div
                        variants={slideIn}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex-1 relative w-full aspect-square lg:aspect-auto lg:h-[600px]"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 -bottom-4 w-full h-full border border-[#E4A853]/20 rounded-2xl"
                        />
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <Image
                                src="/powersaving2.jpeg"
                                alt="Energy Savings Visualization"
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