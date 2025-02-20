'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { spacing } from "@/lib/constants"

export function CollectionsSection() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    <div className="relative aspect-[4/3] lg:order-2">
                        <Image
                            src="/collections/power-solutions.jpg"
                            alt="Smart Power Solutions"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Power Solutions</h3>
                        <p className="text-gray-600 text-lg mb-8">
                            Reliable power backup systems and smart energy solutions designed
                            for the Nigerian environment. Never worry about power outages again.
                        </p>
                        <Link href="/collections/power">
                            <Button className="bg-[#1A1A1A] hover:bg-[#E4A853] text-white hover:text-black">
                                View Collection
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
} 