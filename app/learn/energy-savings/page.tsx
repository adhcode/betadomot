'use client'

import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Lightbulb, Fan, Zap, Timer,
    ArrowRight, Coins, Calendar,
    Droplets, Wind, Sun
} from 'lucide-react'
import Link from 'next/link'

const sections = [
    {
        title: "Seasonal Energy Management",
        icon: Calendar,
        content: [
            {
                subtitle: "Harmattan Season (November - March)",
                points: [
                    "Reduce dust infiltration to improve AC efficiency",
                    "Clean air filters more frequently",
                    "Use fans instead of AC during cooler periods",
                    "Take advantage of natural ventilation in the mornings"
                ]
            },
            {
                subtitle: "Rainy Season (April - October)",
                points: [
                    "Manage humidity with dehumidifiers or AC",
                    "Use natural cooling from rainfall",
                    "Implement proper ventilation to prevent mold",
                    "Adjust AC temperature settings for comfort"
                ]
            }
        ]
    },
    {
        title: "Smart Appliance Usage",
        icon: Zap,
        content: [
            {
                subtitle: "Peak vs Off-Peak Usage",
                points: [
                    "Run heavy appliances during off-peak hours (typically 10pm - 5am)",
                    "Schedule laundry and ironing for early mornings or late evenings",
                    "Use timers for water heaters and pool pumps",
                    "Batch cooking to reduce cooking time and energy use"
                ]
            },
            {
                subtitle: "Energy-Efficient Settings",
                points: [
                    "Use ECO modes on appliances when available",
                    "Set refrigerator temperature to optimal levels",
                    "Use appropriate water levels in washing machines",
                    "Enable power-saving features on electronics"
                ]
            }
        ]
    },
    {
        title: "Natural Cooling Techniques",
        icon: Wind,
        content: [
            {
                subtitle: "Ventilation Strategies",
                points: [
                    "Create cross-ventilation paths through the home",
                    "Use window positioning to direct airflow",
                    "Install window films to reduce heat gain",
                    "Plant shade trees on sun-facing sides"
                ]
            },
            {
                subtitle: "Passive Cooling Methods",
                points: [
                    "Use light-colored curtains to reflect sunlight",
                    "Install ceiling fans in key areas",
                    "Create shade with awnings or pergolas",
                    "Use indoor plants for natural cooling"
                ]
            }
        ]
    }
]

const quickTips = [
    {
        icon: Lightbulb,
        title: "Lighting",
        tip: "Replace all bulbs with LED alternatives for up to 80% energy savings"
    },
    {
        icon: Fan,
        title: "Cooling",
        tip: "Use fans with AC to distribute cool air more efficiently"
    },
    {
        icon: Timer,
        title: "Timing",
        tip: "Use timers on water heaters to avoid unnecessary heating"
    },
    {
        icon: Coins,
        title: "Monitoring",
        tip: "Track your energy usage to identify high consumption periods"
    }
]

export default function EnergyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
            <PageHeader
                title="Energy Savings Guide"
                description="Practical strategies to reduce energy costs in Nigerian homes"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Quick Tips Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Quick Energy-Saving Tips</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {quickTips.map((tip, index) => (
                            <Card key={index} className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-[#003366]/10 p-2 rounded-lg">
                                        <tip.icon className="h-5 w-5 text-[#003366]" />
                                    </div>
                                    <h3 className="font-semibold">{tip.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600">{tip.tip}</p>
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
                        <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Energy Usage?</h2>
                        <p className="mb-8">
                            Get a professional assessment of your home's energy consumption and receive
                            personalized recommendations.
                        </p>
                        <Link href="/services/energy-assessment">
                            <Button variant="secondary" size="lg" className="bg-white text-[#003366] hover:bg-white/90">
                                Book an Assessment
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
} 