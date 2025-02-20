'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { spacing, theme } from "@/lib/constants"
import { fadeIn, imageScale } from "@/lib/animations"

export function VisionSection() {
    return (
        <section className={`${spacing.section} bg-white`}>
            <div className={spacing.container}>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
                >
                    <div className="relative aspect-square">
                        <div className={`absolute inset-0 bg-[${theme.colors.dark}] rounded-lg overflow-hidden`}>
                            <motion.div
                                variants={imageScale}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src="/vision-home.jpg"
                                    alt="Modern Nigerian Home"
                                    fill
                                    className="object-cover opacity-80"
                                />
                            </motion.div>
                        </div>
                        <div className={`absolute -bottom-8 -right-8 w-48 h-48 bg-[${theme.colors.primary}]/10 rounded-full blur-2xl`} />
                    </div>

                    <div className="relative">
                        <motion.div
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            <span className={`text-sm font-medium text-[${theme.colors.primary}] mb-6 block`}>
                                Our Vision
                            </span>

                            <h2 className={`text-4xl sm:text-5xl font-bold text-[${theme.colors.dark}] mb-8 leading-tight`}>
                                Your home tells
                                <span className="block">your story</span>
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed">
                                A home is more than four walls - it's where life unfolds. From morning light
                                streaming through windows to evening conversations over dinner, each moment adds
                                to your story. We're here to make that story more beautiful, more comfortable,
                                and uniquely yours.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
} 