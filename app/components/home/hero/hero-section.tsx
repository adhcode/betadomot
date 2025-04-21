import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { ShoppingBag, Star, ArrowRight } from 'lucide-react'
import { fadeIn, slideIn } from "../../../../lib/animations"

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
                        src="/hero-home.jpeg"
                        alt="Modern Living Room"
                        fill
                        className="object-cover object-center brightness-90"
                        priority
                        sizes="100vw"
                        quality={100}
                    />
                    <div className="absolute " />
                </div>
            </motion.div>

            {/* Hero Content with Stagger Animation */}
            <div className="relative z-10 h-full w-full">
                <div className="container-max mx-auto pt-[250px] lg:pt-[250px]  px-8 lg:px-12">
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="show"
                        className="w-full max-w-4xl px-4 sm:px-6 lg:px-8"
                    >
                        <div className="bg-white/90 p-6 sm:p-8 lg:p-12 rounded-lg w-full">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-6">
                                <motion.h1
                                    variants={fadeIn}
                                    initial="hidden"
                                    animate="show"
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight whitespace-nowrap font-roboto-mono"
                                    suppressHydrationWarning
                                >
                                    your home,
                                </motion.h1>
                                <motion.h1
                                    variants={fadeIn}
                                    initial="hidden"
                                    animate="show"
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E4A853] leading-tight whitespace-nowrap font-roboto-mono"
                                >
                                    only better
                                </motion.h1>
                            </div>

                            <motion.p
                                variants={fadeIn}
                                initial="hidden"
                                animate="show"
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E4A853] mb-12"
                            >
                                everything you need to love your space
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                                className="flex justify-center"
                            >
                                <Button size="lg" className="bg-transparent hover:bg-[#E4A853]/10 text-[#E4A853] border-2 border-[#E4A853] rounded-full font-semibold text-lg sm:text-xl px-12 py-8 whitespace-nowrap font-roboto-mono">
                                    <ShoppingBag className="mr-3 h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0" />
                                    shop now
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
} 