import { motion } from "framer-motion"
import { Button } from "../../../components/ui/button"
import { ArrowRight, Phone, Clock, HeadphonesIcon, CreditCard } from "lucide-react"
import Link from 'next/link'

const features = [
    {
        title: "Free Consultation",
        description: "Expert advice tailored to your needs",
        icon: Phone,
        delay: 0.2
    },
    {
        title: "Quick Installation",
        description: "Professional setup within days",
        icon: Clock,
        delay: 0.3
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock assistance",
        icon: HeadphonesIcon,
        delay: 0.4
    },
    {
        title: "Flexible Payment",
        description: "Convenient payment options",
        icon: CreditCard,
        delay: 0.5
    }
]

export const CTASection = () => {
    return (
        <section className="relative py-20 bg-white">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.1, 0.2]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[#E4A853]/10 to-transparent"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-[#003366]/10 to-transparent"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block text-sm font-medium bg-gradient-to-r from-[#E4A853] to-[#FFD700] 
              text-transparent bg-clip-text mb-6 tracking-wider uppercase">
                            Get Started Today
                        </span>

                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8 leading-tight">
                            Ready to transform
                            <span className="block text-[#E4A853] mt-2">your living space?</span>
                        </h2>

                        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                            Book a consultation with our experts and discover how to make your home
                            smarter, more efficient, and truly exceptional.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/consultation">
                                <Button className="h-14 px-8 bg-[#E4A853] hover:bg-[#FFD700] 
                  text-black font-medium transition-all duration-300
                  rounded-full flex items-center justify-center gap-2
                  hover:gap-3 shadow-lg hover:shadow-xl 
                  transform hover:-translate-y-0.5">
                                    Book a Free Consultation
                                    <ArrowRight className="h-5 w-5 transition-all duration-300" />
                                </Button>
                            </Link>
                            <Link href="/portfolio">
                                <Button variant="outline"
                                    className="h-14 px-8 border-white/20 text-[#E4A853] 
                    hover:bg-white/10 backdrop-blur-sm
                    rounded-full flex items-center justify-center gap-2
                    hover:gap-3 transition-all duration-300">
                                    View Our Portfolio
                                    <ArrowRight className="h-5 w-5 transition-all duration-300" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: feature.delay }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 group
                  border border-white/10 hover:border-[#E4A853]/30
                  transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-[#E4A853]/20 to-[#E4A853]/5 
                  rounded-xl flex items-center justify-center mb-4 
                  group-hover:from-[#E4A853]/30 group-hover:to-[#E4A853]/10 
                  transition-all duration-300">
                                    <feature.icon className="h-6 w-6 text-[#E4A853]" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-[#E4A853]
                  transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
} 