'use client'

import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Sun, Coins, Leaf, Home,
    ArrowRight, Battery, Thermometer,
    Droplets, Wind, Clipboard, Calculator, Ruler, LineChart
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const energyTopics = [
    {
        title: "Understanding Your Home's Energy",
        description: "Learn the basics of home energy consumption and management in Nigeria",
        icon: Home,
        href: "/learn/understanding-home-energy",
        image: "/illustrations/home-energy.svg",
        illustration: {
            src: "/illustrations/home-energy.svg",
            alt: "Home energy management illustration",
            width: 400,
            height: 300
        },
        topics: [
            "Power sources and distribution",
            "Understanding energy bills and tariffs",
            "Peak vs off-peak consumption",
            "Common energy issues in Nigeria"
        ]
    },
    {
        title: "Energy Savings in Nigerian Homes",
        description: "Practical tips and strategies for reducing energy costs in Nigeria's unique climate",
        icon: Coins,
        href: "/learn/energy-savings",
        image: "/illustrations/energy-savings.svg",
        illustration: {
            src: "/illustrations/energy-savings.svg",
            alt: "Family managing home energy usage with smart devices",
            width: 400,
            height: 300
        },
        topics: [
            "Seasonal energy management during harmattan and rainy seasons",
            "Smart appliance usage and timing",
            "Natural cooling and ventilation techniques",
            "Energy-efficient lighting solutions"
        ]
    },
    {
        title: "Solar Power Solutions",
        description: "Understanding solar energy systems and their benefits in Nigeria's sunny climate",
        icon: Sun,
        href: "/learn/solar-power",
        illustration: {
            src: "/illustrations/solar-power.svg",
            alt: "House powered by solar energy",
            width: 400,
            height: 300
        },
        topics: [
            "Solar system components and sizing",
            "Installation considerations",
            "Maintenance requirements",
            "Cost analysis and ROI"
        ]
    },
    {
        title: "Backup Power Systems",
        description: "Comparing different backup power options for reliable electricity supply",
        icon: Battery,
        href: "/learn/backup-power",
        illustration: {
            src: "/illustrations/backup-power.svg",
            alt: "Home backup power system installation",
            width: 400,
            height: 300
        },
        topics: [
            "Generator vs. solar inverter systems",
            "Battery storage solutions",
            "Hybrid system configurations",
            "Maintenance schedules"
        ]
    },
    {
        title: "Temperature Management",
        description: "Effective cooling strategies for Nigeria's tropical climate",
        icon: Thermometer,
        href: "/learn/temperature",
        illustration: {
            src: "/illustrations/temperature.svg",
            alt: "Smart home temperature control system",
            width: 400,
            height: 300
        },
        topics: [
            "AC efficiency optimization",
            "Natural cooling methods",
            "Insulation techniques",
            "Smart temperature zoning"
        ]
    }
]

const selfAssessmentSteps = [
    {
        title: "Energy Audit Basics",
        icon: Clipboard,
        description: "Learn how to conduct a basic energy audit of your home",
        steps: [
            "Document your monthly electricity costs",
            "List all electrical appliances and their wattage",
            "Track usage patterns for major appliances",
            "Identify peak consumption periods"
        ]
    },
    {
        title: "Load Calculation",
        icon: Calculator,
        description: "Calculate your power needs accurately",
        steps: [
            "Sum up the wattage of essential appliances",
            "Consider peak usage scenarios",
            "Factor in future expansion needs",
            "Calculate backup duration requirements"
        ]
    },
    {
        title: "System Sizing",
        icon: Ruler,
        description: "Determine the right size for your backup solution",
        steps: [
            "Match inverter capacity to your load",
            "Calculate required battery capacity",
            "Size solar panels if considering solar",
            "Factor in system efficiency losses"
        ]
    },
    {
        title: "Cost Analysis",
        icon: LineChart,
        description: "Evaluate different solutions and their costs",
        steps: [
            "Compare initial investment costs",
            "Calculate running costs (fuel/maintenance)",
            "Estimate system lifespan and ROI",
            "Consider financing options"
        ]
    }
]

const learnTopics = [
    {
        title: "Reduce Energy Bills",
        href: "/learn/reduce-energy-bills",
        description: "Learn how to lower your energy costs"
    },
    {
        title: "Appliance Protection",
        href: "/learn/appliance-protection",
        description: "Protect your valuable home equipment"
    },
    {
        title: "Home Comfort",
        href: "/learn/home-comfort",
        description: "Optimize your home's comfort"
    }
]

export default function LearnPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
            <PageHeader
                title="Energy Learning Center"
                description="Your guide to understanding and optimizing energy use in Nigerian homes"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Learning Topics Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {learnTopics.map((topic, index) => (
                        <Link key={index} href={topic.href}>
                            <Card className="p-6 hover:shadow-lg transition-all duration-300 
                                hover:-translate-y-1 cursor-pointer h-full">
                                <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                                <p className="text-gray-600 text-sm">{topic.description}</p>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Self-Assessment Guide */}


                {/* Featured Topic */}
                <div className="mb-16">
                    <Card className="relative overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl font-bold mb-4">
                                    Assess Your Home's Energy Consumption
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    Learn how to assess and optimize your home's energy consumption.
                                    Our comprehensive guides help you make informed decisions about energy
                                    solutions that work best in Nigeria's environment.
                                </p>
                                <Link href="/services/energy-assessment">
                                    <Button className="bg-[#003366] hover:bg-[#002244]">
                                        Get Started
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                            <div className="relative h-48 md:h-auto">
                                <Image
                                    src="/images/energy-home.jpg"
                                    alt="Energy efficient home"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Main Topics */}
                <div className="space-y-12">
                    {energyTopics.map((topic, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-6 p-6">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#003366]/10 p-3 rounded-lg">
                                            <topic.icon className="h-6 w-6 text-[#003366]" />
                                        </div>
                                        <h3 className="text-2xl font-bold">{topic.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{topic.description}</p>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold">What you'll learn:</h4>
                                        <ul className="space-y-2">
                                            {topic.topics.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                                    <div className="mt-1.5">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-[#003366]" />
                                                    </div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-8">
                                        <Link href={topic.href}>
                                            <Button variant="outline">
                                                Read More
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative h-48 md:h-auto rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
                                    <Image
                                        src={topic.illustration.src}
                                        alt={topic.illustration.alt}
                                        width={topic.illustration.width}
                                        height={topic.illustration.height}
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
} 