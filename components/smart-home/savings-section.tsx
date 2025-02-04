'use client'

import { Button } from "@/components/ui/button"
import { Zap, BarChart, ArrowRight, Battery, Lightbulb, Wifi } from 'lucide-react'
import { Card } from "@/components/ui/card"

export function SavingsSection() {
    const featuredProducts = [
        {
            icon: Battery,
            name: "5KVA Inverter System",
            savings: "70%",
            price: "₦850,000",
            roi: "8 months",
            description: "Complete backup power system with lithium batteries"
        },
        {
            icon: Lightbulb,
            name: "Inverter AC (1.5HP)",
            savings: "60%",
            price: "₦360,000",
            roi: "12 months",
            description: "Energy-efficient cooling, works with low voltage"
        },
        {
            icon: Wifi,
            name: "Smart Power Monitor",
            savings: "30%",
            price: "₦45,000",
            roi: "3 months",
            description: "Track generator & PHCN usage, get fuel savings tips"
        }
    ]

    return (
        <section className="py-32 px-4 bg-gradient-to-br from-[#003366]/5 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium inline-flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Smart Investment
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
                        Save Money with Energy-Efficient Products
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Our products pay for themselves through energy savings. Calculate your potential savings and ROI.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {featuredProducts.map((product, index) => (
                        <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-start justify-between mb-6">
                                <div className="bg-[#003366]/5 p-3 rounded-2xl">
                                    <product.icon className="h-8 w-8 text-[#003366]" />
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold text-[#003366]">{product.price}</p>
                                    <p className="text-sm text-gray-600">Starting at</p>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-green-50 p-3 rounded-lg">
                                    <p className="text-green-600 font-bold">{product.savings}</p>
                                    <p className="text-sm text-gray-600">Energy Savings</p>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <p className="text-blue-600 font-bold">{product.roi}</p>
                                    <p className="text-sm text-gray-600">ROI Period</p>
                                </div>
                            </div>
                            <Button className="w-full bg-[#003366] hover:bg-[#002244] text-white">
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Card>
                    ))}
                </div>

                <div className="bg-[#003366] rounded-3xl p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Calculate Your Power Savings
                    </h3>
                    <p className="text-white/80 mb-8">
                        See how much you can save on PHCN bills and generator fuel costs with our energy-efficient solutions.
                    </p>
                    <Button className="bg-white text-[#003366] hover:bg-[#87CEEB] hover:text-white">
                        Try Calculator
                        <BarChart className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
} 