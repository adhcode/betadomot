'use client'

import { Shield, BarChart, Zap, Home, ArrowRight, Smartphone, WifiIcon, BookOpen } from 'lucide-react'
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function HelpSection() {
    const features = [
        {
            icon: Smartphone,
            title: "Smart Control",
            description: "Control all your devices from one app. Monitor usage, set schedules, and automate routines.",
            color: "from-blue-50 to-blue-100/50",
            link: "/learn/smart-control"
        },
        {
            icon: WifiIcon,
            title: "IoT Integration",
            description: "Connect your devices to create a seamless smart home ecosystem that optimizes energy use.",
            color: "from-green-50 to-green-100/50",
            link: "/learn/iot"
        },
        {
            icon: BookOpen,
            title: "Learning Center",
            description: "Access guides and tutorials on maximizing your energy savings with smart devices.",
            color: "from-purple-50 to-purple-100/50",
            link: "/learn"
        },
        {
            icon: BarChart,
            title: "Usage Analytics",
            description: "Get detailed insights into your energy consumption patterns and optimization tips.",
            color: "from-orange-50 to-orange-100/50",
            link: "/analytics"
        }
    ]

    const integrationSteps = [
        {
            number: "01",
            title: "Connect Devices",
            description: "Easy setup of smart plugs, bulbs, and appliances to your home network"
        },
        {
            number: "02",
            title: "Monitor Usage",
            description: "Track real-time energy consumption of each connected device"
        },
        {
            number: "03",
            title: "Optimize",
            description: "Get AI-powered recommendations for optimal energy usage"
        },
        {
            number: "04",
            title: "Save",
            description: "Watch your energy bills decrease with smart automation"
        }
    ]

    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <span className="px-4 py-2 rounded-full bg-[#003366]/5 text-[#003366] text-sm font-medium inline-flex items-center gap-2">
                        <WifiIcon className="h-4 w-4" />
                        Smart Integration
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
                        Smart Home, Smarter Savings
                    </h2>
                    <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Learn how our IoT devices work together to create an intelligent, energy-efficient home ecosystem.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-24">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className={`group hover:shadow-xl transition-all duration-500 border-none overflow-hidden relative bg-gradient-to-br ${feature.color}`}
                        >
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <CardHeader className="p-8 relative">
                                <div className="mb-6 flex items-start justify-between">
                                    <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                                        <feature.icon className="h-8 w-8 text-[#003366]" />
                                    </div>
                                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </div>
                                <CardTitle className="text-xl font-bold mb-4 text-gray-900">
                                    {feature.title}
                                </CardTitle>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-[#003366] to-[#002244] rounded-3xl p-12">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Getting Started is Easy
                            </h3>
                            <p className="text-white/80 mb-8">
                                Follow our simple setup process to start saving energy with smart home automation.
                            </p>
                            <div className="space-y-6">
                                {integrationSteps.map((step, index) => (
                                    <div key={index} className="flex gap-4 items-start">
                                        <div className="bg-white/10 px-3 py-1 rounded-lg">
                                            <span className="text-white font-bold">{step.number}</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                                            <p className="text-white/60">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button className="mt-8 bg-white text-[#003366] hover:bg-[#87CEEB] hover:text-white">
                                Start Integration
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/5 rounded-2xl"></div>
                            {/* Add an illustration or image here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}