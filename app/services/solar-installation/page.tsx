'use client'

import { useState } from 'react'
import { PageHeader } from '../../components/ui/page-header'
import { Card } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Sun, Battery, Zap, ArrowRight, Check, Calculator, LightbulbOff, Coins, Leaf } from 'lucide-react'
import { SolarCalculator } from '../../components/services/solar-calculator'
import { ConsultationForm } from '../../components/services/consultation-form'
import { FinancingOptions } from '../../components/services/financing-options'

export default function SolarInstallationPage() {
    const [showConsultation, setShowConsultation] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <PageHeader
                title="Solar Power Solutions for Nigerian Homes"
                description="End your electricity problems forever with reliable solar power"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Value Proposition */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why Solar Power in Nigeria?</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-yellow-100 p-3 rounded-lg">
                                    <LightbulbOff className="h-6 w-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">End Power Outages</h3>
                                    <p className="text-gray-600">
                                        No more disruptions from NEPA/PHCN. Enjoy 24/7 electricity with a properly sized solar system.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Coins className="h-6 w-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Massive Cost Savings</h3>
                                    <p className="text-gray-600">
                                        Eliminate generator fuel costs and high electricity bills. Solar pays for itself in 2-3 years.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Sun className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Perfect Nigerian Climate</h3>
                                    <p className="text-gray-600">
                                        Nigeria receives 5-7 hours of peak sunlight daily, making it ideal for solar power generation.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <Leaf className="h-6 w-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Long-Term Investment</h3>
                                    <p className="text-gray-600">
                                        25-year warranty on panels, minimal maintenance, and increasing property value.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="p-8">
                        <h3 className="text-2xl font-semibold mb-6">Calculate Your Savings</h3>
                        <p className="mb-8 text-gray-600">
                            Find out how much you could save by switching to solar power. Enter your current energy usage below.
                        </p>
                        <SolarCalculator />
                    </Card>
                </div>

                {/* Cost Breakdown */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">Understanding Solar Costs</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-6">
                            <h3 className="font-semibold mb-4">Initial Investment</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Tier-1 Solar Panels</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>High-Quality Inverters</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Lithium Batteries</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Professional Installation</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-600">
                                Flexible payment plans available
                            </p>
                        </Card>

                        <Card className="p-6">
                            <h3 className="font-semibold mb-4">Monthly Savings</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>No Generator Fuel</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Zero NEPA Bills</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>No Generator Maintenance</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Reduced Carbon Footprint</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-600">
                                Average savings of ₦50,000 - ₦150,000 monthly
                            </p>
                        </Card>

                        <Card className="p-6">
                            <h3 className="font-semibold mb-4">Long-Term Benefits</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>25-Year Panel Warranty</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Increased Property Value</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Energy Independence</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>Minimal Maintenance</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-600">
                                ROI within 2-3 years
                            </p>
                        </Card>
                    </div>
                </div>

                {/* Installation Process */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Installation Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Site Assessment",
                                description: "We evaluate your roof condition, sun exposure, and energy needs",
                                icon: Calculator
                            },
                            {
                                title: "Custom Design",
                                description: "Our engineers design your optimal solar system",
                                icon: Sun
                            },
                            {
                                title: "Professional Installation",
                                description: "Expert installation by certified technicians",
                                icon: Battery
                            },
                            {
                                title: "After-Care Support",
                                description: "24/7 monitoring and maintenance support",
                                icon: Zap
                            }
                        ].map((step, index) => (
                            <Card key={index} className="p-6 text-center">
                                <div className="bg-[#003366]/5 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                                    <step.icon className="h-8 w-8 text-[#003366]" />
                                </div>
                                <h3 className="font-semibold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Financing Options */}
                <div className="mb-16">
                    <FinancingOptions />
                </div>

                {/* Consultation Form */}
                {showConsultation ? (
                    <Card className="p-8">
                        <h2 className="text-2xl font-bold mb-6">Schedule Your Free Consultation</h2>
                        <ConsultationForm />
                    </Card>
                ) : (
                    <Card className="p-8 bg-gradient-to-r from-[#003366] to-[#004488] text-white">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
                            <p className="mb-8">
                                Get a free consultation and custom quote for your home.
                            </p>
                            <Button
                                size="lg"
                                variant="secondary"
                                className="bg-white text-[#003366] hover:bg-white/90"
                                onClick={() => setShowConsultation(true)}
                            >
                                Book Free Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    )
} 