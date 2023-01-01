import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingBag, Star, ArrowRight } from 'lucide-react'

export const HeroSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative min-h-[85vh] w-full"
        >
            {/* Background with Parallax */}
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0 w-full"
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/modern-living-room.jpg"
                        alt="Modern Living Room"
                        fill
                        className="object-cover object-center brightness-90"
                        priority
                        sizes="100vw"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
                </div>
            </motion.div>

            {/* Hero Content with Stagger Animation */}
            <div className="relative z-10 h-full w-full">
                <div className="container-max mx-auto pt-28 lg:pt-36 px-8 lg:px-12">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-2xl"
                    >
                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Discover Your
                        </motion.h1>
                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E4A853] mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            Dream Home
                        </motion.h1>

                        <motion.p
                            className="text-lg text-white/90 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            Transform your space with our curated collection of premium furniture, decor, and smart home solutions. Quality craftsmanship, timeless design, delivered to your doorstep.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            className="flex gap-4 items-center"
                        >
                            <Button size="lg" className="bg-[#E4A853] hover:bg-[#E4A853]/90 text-white">
                                <ShoppingBag className="mr-2 h-5 w-5" />
                                Shop Now
                            </Button>
                            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                                View Collections <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
} 