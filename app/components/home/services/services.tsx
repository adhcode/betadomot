'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import { Zap, Lightbulb, Paintbrush, ArrowRight, Check, Phone } from 'lucide-react'

const services = [
    {
        id: 'automation',
        title: 'Smart Home Installation',
        subtitle: 'Professional Setup & Integration',
        description: 'Expert installation and configuration of smart home devices, from security systems to entertainment units.',
        icon: Zap,
        image: '/services/automation.jpg',
        features: [
            'Expert device installation',
            'Smart home system integration',
            'Voice control setup',
            'Mobile app configuration',
            'Network optimization'
        ],
        cta: 'Schedule Installation',
        href: '/services/automation'
    },
    {
        id: 'energy',
        title: 'Energy Solutions',
        subtitle: 'Efficiency & Sustainability',
        description: 'Comprehensive energy audits and smart solutions to reduce your carbon footprint and utility bills.',
        icon: Lightbulb,
        image: '/services/energy.jpg',
        features: [
            'Energy consumption analysis',
            'Smart thermostat optimization',
            'LED lighting solutions',
            'Solar system consultation',
            'Energy-saving recommendations'
        ],
        cta: 'Get Energy Audit',
        href: '/services/energy'
    },
    {
        id: 'design',
        title: 'Interior Design',
        subtitle: 'Smart & Stylish Living',
        description: 'Transform your space with personalized design solutions that blend style with smart technology.',
        icon: Paintbrush,
        image: '/services/design.jpg',
        features: [
            'Space planning & optimization',
            'Smart furniture selection',
            'Lighting design & automation',
            'Color & material consultation',
            'Tech integration planning'
        ],
        cta: 'Book Consultation',
        href: '/services/design'
    }
]

export function ServicesSection() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#1A1A1A] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-radial from-[#E4A853]/5 to-transparent blur-3xl" />
                <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-radial from-[#003366]/5 to-transparent blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <span className="inline-block text-sm font-semibold text-[#E4A853] mb-4 tracking-wider uppercase">
                        Professional Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-ojuju">
                        Expert Solutions for Your
                        <span className="block text-[#E4A853] mt-2">Modern Smart Home</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Transform your living space with our comprehensive range of professional services
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl overflow-hidden 
                                border border-white/[0.05] hover:border-[#E4A853]/20 
                                transition-all duration-500 hover:shadow-2xl hover:shadow-[#E4A853]/5
                                flex flex-col h-full"
                        >
                            {/* Service Image */}
                            <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-[#E4A853]/10 backdrop-blur-sm">
                                        <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#E4A853]" />
                                    </div>
                                    <p className="text-white/90 text-sm font-medium">{service.subtitle}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
                                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{service.description}</p>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 sm:space-y-4 my-6 sm:my-8 flex-grow">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                                            <div className="p-0.5 rounded-full bg-[#E4A853]/10 mt-1">
                                                <Check className="h-4 w-4 text-[#E4A853]" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    asChild
                                    className="w-full bg-[#E4A853] hover:bg-[#E4A853]/90 text-black font-medium
                                        h-11 sm:h-12 flex items-center justify-center gap-2 group-hover:gap-3 
                                        transition-all duration-300 mt-auto text-sm sm:text-base rounded-xl"
                                >
                                    <Link href={service.href}>
                                        {service.cta}
                                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative mx-auto max-w-3xl text-center bg-gradient-to-r 
                        from-[#E4A853]/10 to-[#FFD700]/5 rounded-2xl p-6 sm:p-8 lg:p-10 
                        border border-[#E4A853]/10"
                >
                    <div className="inline-flex items-center justify-center p-2 rounded-full 
                        bg-white/5 border border-white/10 mb-6">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#E4A853]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-ojuju">
                        Need a Custom Solution?
                    </h3>
                    <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg">
                        Our experts are ready to help you create the perfect smart home environment
                    </p>
                    <Link
                        href="/consultation"
                        className="inline-flex items-center justify-center gap-2 hover:gap-3
                            bg-white/5 hover:bg-[#E4A853]/10 text-white border border-[#E4A853]/20
                            hover:border-[#E4A853]/30 rounded-xl px-6 sm:px-8 py-3 font-medium
                            transition-all duration-300 text-sm sm:text-base"
                    >
                        Schedule a Free Consultation
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
} 