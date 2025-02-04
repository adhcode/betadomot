'use client'

import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Home, Zap, LineChart, Sun,
    ArrowRight, Battery, Lightbulb,
    Thermometer, Timer, DollarSign
} from 'lucide-react'
import Link from 'next/link'
import { EnergyFlowDiagram } from '@/app/learn/components/energy-flow-diagram'
import { DiscoMap } from '@/app/learn/components/disco-map'

const energyBasics = [
    {
        title: "Power Sources",
        icon: Zap,
        points: [
            "Grid Power (PHCN/NEPA)",
            "Generator Backup",
            "Solar Power Systems",
            "Inverter Systems"
        ]
    },
    {
        title: "Consumption Patterns",
        icon: LineChart,
        points: [
            "Peak vs Off-peak Usage",
            "Seasonal Variations",
            "Load Distribution",
            "Usage Optimization"
        ]
    },
    {
        title: "Cost Factors",
        icon: DollarSign,
        points: [
            "Tariff Bands",
            "Generator Fuel Costs",
            "Maintenance Expenses",
            "Energy Efficiency Impact"
        ]
    }
]

const commonIssues = [
    {
        problem: "High Energy Bills",
        solutions: [
            "Identify energy-hungry appliances",
            "Optimize usage timing",
            "Upgrade to energy-efficient models",
            "Regular maintenance"
        ]
    },
    {
        problem: "Frequent Power Outages",
        solutions: [
            "Install backup power systems",
            "Use automatic changeover",
            "Implement load shedding",
            "Regular system maintenance"
        ]
    },
    {
        problem: "Poor Power Quality",
        solutions: [
            "Install voltage stabilizers",
            "Use surge protectors",
            "Regular wiring checks",
            "Upgrade distribution board"
        ]
    }
]

const nigerianContext = [
    {
        title: "Power Availability",
        icon: Zap,
        content: "Average of 6-12 hours daily grid power in urban areas",
        challenges: [
            "Load shedding schedules",
            "Voltage fluctuations",
            "Regional differences in supply"
        ]
    },
    {
        title: "Backup Solutions",
        icon: Battery,
        content: "Essential backup power systems for Nigerian homes",
        options: [
            "Generators (I better pass my neighbor)",
            "Inverter systems",
            "Solar installations"
        ]
    },
    {
        title: "Cost Structure",
        icon: DollarSign,
        content: "Understanding Nigerian electricity pricing",
        details: [
            "MYTO tariff system",
            "Service band classifications",
            "Estimated vs prepaid billing"
        ]
    }
]

const energySavingTips = [
    {
        season: "Harmattan",
        tips: [
            "Use fans instead of AC during cooler periods",
            "Clean dust from appliances regularly",
            "Take advantage of natural ventilation"
        ]
    },
    {
        season: "Rainy Season",
        tips: [
            "Use natural cooling from rainfall",
            "Manage humidity with dehumidifiers",
            "Implement proper ventilation"
        ]
    },
    {
        season: "Hot Season",
        tips: [
            "Use window treatments to block heat",
            "Service AC units for efficiency",
            "Schedule heavy appliance use for cooler hours"
        ]
    }
]

export default function UnderstandingHomeEnergyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <PageHeader
                title="Understanding Your Home's Energy"
                description="Learn how electricity flows through your home, identify consumption patterns, and optimize your energy usage."
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Energy Flow Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">How Energy Flows in Your Home</h2>
                    <EnergyFlowDiagram />
                </section>

                {/* Energy Basics */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Energy Basics</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {energyBasics.map((basic, index) => (
                            <Card key={index} className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-[#003366]/10 p-3 rounded-lg">
                                        <basic.icon className="h-6 w-6 text-[#003366]" />
                                    </div>
                                    <h3 className="font-semibold">{basic.title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {basic.points.map((point, i) => (
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
                </section>

                {/* Nigerian Power Context */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Nigerian Power Context</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {nigerianContext.map((context, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-all cursor-pointer">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-[#003366]/10 p-3 rounded-lg">
                                        <context.icon className="h-6 w-6 text-[#003366]" />
                                    </div>
                                    <h3 className="font-semibold">{context.title}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{context.content}</p>
                                <div className="space-y-2">
                                    {context.challenges ? (
                                        context.challenges.map((challenge, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                                                <span>{challenge}</span>
                                            </div>
                                        ))
                                    ) : context.options ? (
                                        context.options.map((option, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                                <span>{option}</span>
                                            </div>
                                        ))
                                    ) : (
                                        context.details?.map((detail, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                                                <span>{detail}</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Seasonal Energy Saving Tips */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Seasonal Energy Saving Tips</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {energySavingTips.map((season, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-all">
                                <h3 className="font-semibold text-[#003366] mb-4">{season.season}</h3>
                                <ul className="space-y-3">
                                    {season.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5" />
                                            <span>{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Distribution Companies */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Your Electricity Provider</h2>
                    <DiscoMap />
                </section>

                {/* Common Issues and Solutions */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Common Issues & Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {commonIssues.map((issue, index) => (
                            <Card key={index} className="p-6">
                                <h3 className="font-semibold text-red-600 mb-4">{issue.problem}</h3>
                                <ul className="space-y-3">
                                    {issue.solutions.map((solution, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <div className="mt-1.5">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#003366]" />
                                            </div>
                                            <span>{solution}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <Card className="p-8 bg-gradient-to-r from-[#003366] to-[#004488] text-white">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Energy Usage?</h2>
                        <p className="mb-8">
                            Use our calculator to analyze your consumption and get personalized recommendations.
                        </p>
                        <Link href="/calculator">
                            <Button variant="secondary" size="lg">
                                Try Energy Calculator
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
} 