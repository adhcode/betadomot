'use client'

import { ConsumptionCalculator } from '@/app/learn/components/consumption-calculator'
import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Zap, Battery, Sun } from 'lucide-react'
import Link from 'next/link'

const usageGuides = [
    {
        title: "PHCN/NEPA Usage",
        icon: Zap,
        points: [
            "Understand your DisCo's tariff bands (A-D)",
            "Track peak vs off-peak consumption",
            "Monitor power quality and voltage fluctuations",
            "Calculate cost based on current ₦225/kWh rate"
        ]
    },
    {
        title: "Generator Efficiency",
        icon: Battery,
        points: [
            "Compare fuel consumption vs power output",
            "Optimize running hours to reduce costs",
            "Calculate cost per kWh (typically ₦280-350)",
            "Plan maintenance schedules"
        ]
    },
    {
        title: "Solar Potential",
        icon: Sun,
        points: [
            "Assess roof space and orientation",
            "Calculate panel requirements",
            "Consider Nigerian climate factors",
            "Evaluate battery storage needs"
        ]
    }
]

export default function CalculatorPage() {
    const handleCalculate = (results: any) => {
        // Handle calculation results here
        console.log(results)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <PageHeader
                title="Energy Consumption Calculator"
                description="Calculate your daily and monthly energy consumption to make informed decisions about your power usage."
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <ConsumptionCalculator onCalculate={handleCalculate} />
                    </div>

                    <div className="space-y-6">
                        <Card className="p-6 bg-blue-50">
                            <h3 className="text-lg font-semibold mb-4">Nigerian Power Context</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 text-gray-700">
                                    <Lightbulb className="h-5 w-5 mt-0.5 text-blue-600" />
                                    <span>Average Nigerian home uses 2-5kWh daily with PHCN</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <Lightbulb className="h-5 w-5 mt-0.5 text-blue-600" />
                                    <span>Generator usage adds 3-8kWh additional consumption</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-700">
                                    <Lightbulb className="h-5 w-5 mt-0.5 text-blue-600" />
                                    <span>Power availability varies by service band (6-20 hours)</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-lg font-semibold mb-4">Quick Cost Estimates</h3>
                            <div className="space-y-3 text-sm">
                                <p className="flex justify-between">
                                    <span>PHCN Rate (Band A):</span>
                                    <span className="font-medium">₦225/kWh</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Generator Cost:</span>
                                    <span className="font-medium">₦280-350/kWh</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Solar System:</span>
                                    <span className="font-medium">₦150-200/kWh</span>
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {usageGuides.map((guide, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-50 p-2 rounded-lg">
                                    <guide.icon className="h-5 w-5 text-blue-600" />
                                </div>
                                <h3 className="font-semibold">{guide.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {guide.points.map((point, i) => (
                                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>

                <Card className="mt-16 p-8 bg-gradient-to-r from-[#003366] to-[#004488] text-white">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Professional Assessment?</h2>
                        <p className="mb-8">
                            Get a detailed energy audit from our certified experts who understand
                            Nigerian power challenges and can recommend optimal solutions.
                        </p>
                        <Link href="/services/energy-assessment">
                            <Button variant="secondary" size="lg">
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