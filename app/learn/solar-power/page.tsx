'use client'

import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Sun, Battery, Zap, Wrench,
    ArrowRight, Calculator, Coins,
    Shield, Settings, LineChart
} from 'lucide-react'
import Link from 'next/link'

const sections = [
    {
        title: "Understanding Solar Components",
        icon: Settings,
        content: [
            {
                subtitle: "Solar Panels",
                points: [
                    "Monocrystalline vs Polycrystalline options",
                    "Typical efficiency rates in Nigeria's climate",
                    "Expected lifespan of 25+ years",
                    "Impact of dust and harmattan on performance"
                ]
            },
            {
                subtitle: "Inverters & Batteries",
                points: [
                    "Pure sine wave vs modified sine wave inverters",
                    "Lithium-ion vs Lead-acid battery comparison",
                    "Battery capacity and depth of discharge",
                    "Charge controller types and functions"
                ]
            }
        ]
    },
    {
        title: "System Sizing & Planning",
        icon: Calculator,
        content: [
            {
                subtitle: "Load Assessment",
                points: [
                    "Calculate total daily energy consumption",
                    "Account for peak load requirements",
                    "Factor in future expansion needs",
                    "Consider seasonal usage variations"
                ]
            },
            {
                subtitle: "Installation Considerations",
                points: [
                    "Roof strength and orientation assessment",
                    "Shading analysis throughout the day",
                    "Space requirements for batteries",
                    "Wiring and distribution planning"
                ]
            }
        ]
    },
    {
        title: "Maintenance & Performance",
        icon: Wrench,
        content: [
            {
                subtitle: "Regular Maintenance",
                points: [
                    "Panel cleaning schedule (especially during harmattan)",
                    "Battery water levels and terminal checks",
                    "Inverter performance monitoring",
                    "Connection and wiring inspections"
                ]
            },
            {
                subtitle: "Performance Optimization",
                points: [
                    "Monitor daily power generation",
                    "Track battery charging cycles",
                    "Adjust usage patterns for efficiency",
                    "Regular system health checks"
                ]
            }
        ]
    }
]

const keyBenefits = [
    {
        icon: Zap,
        title: "Reliability",
        benefit: "Consistent power supply independent of national grid"
    },
    {
        icon: Coins,
        title: "Cost Savings",
        benefit: "Significant reduction in electricity bills and generator costs"
    },
    {
        icon: Shield,
        title: "Durability",
        benefit: "25+ years lifespan with minimal maintenance"
    },
    {
        icon: LineChart,
        title: "ROI",
        benefit: "Investment recovery within 3-5 years through savings"
    }
]

export default function SolarPowerPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
            <PageHeader
                title="Solar Power Solutions"
                description="A comprehensive guide to solar power systems for Nigerian homes"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Key Benefits Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Benefits of Solar Power</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {keyBenefits.map((benefit, index) => (
                            <Card key={index} className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-[#003366]/10 p-2 rounded-lg">
                                        <benefit.icon className="h-5 w-5 text-[#003366]" />
                                    </div>
                                    <h3 className="font-semibold">{benefit.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600">{benefit.benefit}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-16">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-[#003366]/10 p-3 rounded-lg">
                                    <section.icon className="h-6 w-6 text-[#003366]" />
                                </div>
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {section.content.map((subsection, idx) => (
                                    <Card key={idx} className="p-6">
                                        <h3 className="font-semibold mb-4">{subsection.subtitle}</h3>
                                        <ul className="space-y-3">
                                            {subsection.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-600">
                                                    <div className="mt-1.5">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-[#003366]" />
                                                    </div>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <Card className="mt-16 p-8 bg-gradient-to-r from-[#003366] to-[#004488] text-white">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">Ready to Switch to Solar?</h2>
                        <p className="mb-8">
                            Get a customized solar solution designed specifically for your home's needs.
                        </p>
                        <Link href="/services/solar-installation">
                            <Button variant="secondary" size="lg" className="bg-white text-[#003366] hover:bg-white/90">
                                Explore Solar Installation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
} 