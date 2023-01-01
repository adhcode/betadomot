import { motion } from "framer-motion"
import Image from 'next/image'

export const VisionSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
                >
                    <div className="relative aspect-square">
                        <div className="absolute inset-0 bg-[#1A1A1A] rounded-lg overflow-hidden">
                            <motion.div
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src="/our-vision.jpeg"
                                    alt="Modern Nigerian Home"
                                    fill
                                    className="object-cover opacity-80"
                                />
                            </motion.div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#E4A853]/10 rounded-full blur-2xl" />
                    </div>

                    <div className="relative">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-sm font-medium text-[#E4A853] mb-6 block"
                        >
                            Our Vision
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight"
                        >
                            Your home tells
                            <span className="block text-[#E4A853]">your story</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-600 text-lg font-bold leading-relaxed"
                        >
                            Beyond four walls, your home is where life's stories begin. We're here to make those stories extraordinary.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
} 