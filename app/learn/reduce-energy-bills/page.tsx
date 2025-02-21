'use client'

import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ProductSuggestion } from '@/components/products/product-suggestion'
import {
    Zap, LineChart, DollarSign, Clock,
    Sun, Moon, Battery, Lightbulb,
    ChevronDown, ArrowRight, Download,
    Fan, Timer, Coins, Calendar,
    Droplets, Wind
} from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from 'react'

const strategies = [
    {
        icon: LineChart,
        title: "Peak vs Off-Peak Usage",
        description: "Learn to shift your energy consumption to off-peak hours for maximum savings",
        tips: [
            "Run heavy appliances during off-peak hours (10pm - 5am)",
            "Use timers to automate appliance schedules",
            "Save up to 30% on electricity costs"
        ]
    },
    {
        icon: Battery,
        title: "Smart Appliance Management",
        description: "Optimize how you use and maintain your appliances",
        tips: [
            "Regular maintenance for better efficiency",
            "Use energy-efficient settings",
            "Replace old, inefficient appliances"
        ]
    },
    {
        icon: Sun,
        title: "Natural Resource Utilization",
        description: "Make the most of natural lighting and ventilation",
        tips: [
            "Use daylight instead of artificial lighting",
            "Natural ventilation during cooler hours",
            "Strategic window treatments for temperature control"
        ]
    }
]

const faqs = [
    {
        question: "What's the fastest way to reduce my electricity bill?",
        answer: "The quickest wins are usually through behavioral changes: switching off unused appliances, using natural light when possible, and optimizing your AC temperature settings. These alone can reduce your bill by 15-20%."
    },
    {
        question: "How much can I save with energy-efficient appliances?",
        answer: "Energy-efficient appliances typically use 30-60% less electricity than standard models. While they may cost more upfront, they often pay for themselves within 1-2 years through reduced energy bills."
    },
    {
        question: "What are peak and off-peak hours?",
        answer: "Peak hours are typically 6am-10pm when electricity demand and rates are highest. Off-peak hours are usually 10pm-6am when rates are lower. Using heavy appliances during off-peak hours can significantly reduce costs."
    },
    {
        question: "How do I identify energy-wasting appliances?",
        answer: "Look for older appliances, those that feel warm when running, or those with high wattage ratings. You can use an energy meter to measure actual consumption or check your appliance's energy rating."
    }
]

const resources = [
    {
        title: "Energy Audit Checklist",
        description: "A comprehensive guide to conducting your own home energy audit",
        type: "PDF",
        link: "/resources/energy-audit-checklist.pdf"
    },
    {
        title: "Appliance Energy Calculator",
        description: "Calculate the energy consumption of your appliances",
        type: "Tool",
        link: "/calculators/appliance-energy"
    },
    {
        title: "Monthly Savings Tracker",
        description: "Track your energy savings progress month by month",
        type: "Template",
        link: "/resources/savings-tracker.xlsx"
    }
]

const savingsCalculator = {
    title: "Quick Savings Estimator",
    description: "See how much you could save with different energy-saving measures",
    measures: [
        {
            name: "LED Lighting",
            savingsRange: "₦2,000 - ₦5,000 monthly",
            implementation: "Easy",
            cost: "₦5,000 - ₦15,000"
        },
        {
            name: "Smart Power Strips",
            savingsRange: "₦1,500 - ₦3,000 monthly",
            implementation: "Easy",
            cost: "₦8,000 - ₦20,000"
        },
        {
            name: "AC Optimization",
            savingsRange: "₦5,000 - ₦15,000 monthly",
            implementation: "Medium",
            cost: "₦10,000 - ₦30,000"
        }
    ]
}

const nigerianContext = {
    challenges: [
        {
            title: "High Generator Costs",
            description: "Nigerian households spend ₦20,000-₦50,000 monthly on fuel",
            solution: "Smart inverter systems can reduce generator runtime by 60%"
        },
        {
            title: "Voltage Fluctuations",
            description: "Unstable power damages appliances and increases bills",
            solution: "Voltage stabilizers and smart regulators protect equipment"
        },
        {
            title: "Peak Hour Costs",
            description: "Band A tariffs at ₦225/kWh during peak hours",
            solution: "Load shifting to off-peak hours saves 30-40%"
        }
    ],
    recommendations: [
        {
            category: "Essential Protection",
            products: [
                {
                    id: "vs-5000",
                    name: "5KVA Voltage Stabilizer",
                    price: 75000,
                    description: "Protects appliances from voltage fluctuations",
                    savings: "Prevents damage worth ₦200,000+ annually"
                },
                {
                    id: "sp-whole",
                    name: "Whole House Surge Protector",
                    price: 45000,
                    description: "Complete electrical protection system",
                    savings: "Extends appliance life by 40%"
                }
            ]
        },
        {
            category: "Smart Energy Management",
            products: [
                {
                    id: "smart-meter-1",
                    name: "WiFi Energy Monitor",
                    price: 35000,
                    description: "Real-time consumption tracking",
                    savings: "Helps reduce bills by 25%"
                },
                {
                    id: "smart-plug-pack",
                    name: "Smart Plug Bundle (4)",
                    price: 28000,
                    description: "Automate appliance schedules",
                    savings: "Save ₦5,000 monthly on idle power"
                }
            ]
        },
        {
            category: "Efficient Cooling",
            products: [
                {
                    id: "inv-ac-1.5",
                    name: "1.5HP Inverter AC",
                    price: 285000,
                    description: "Low-power startup, efficient cooling",
                    savings: "60% lower power consumption"
                },
                {
                    id: "smart-fan-1",
                    name: "Smart Ceiling Fan",
                    price: 45000,
                    description: "Variable speed, remote control",
                    savings: "80% more efficient than AC"
                }
            ]
        }
    ],
    seasonalTips: [
        {
            season: "Harmattan (Nov-Mar)",
            focus: [
                "Dust protection for electronics",
                "Natural ventilation optimization",
                "Humidity management"
            ],
            products: [
                {
                    id: "air-filter-1",
                    name: "HEPA Air Filter",
                    benefit: "Reduces AC load during dusty periods"
                }
            ]
        },
        {
            season: "Peak Heat (Feb-Apr)",
            focus: [
                "Cooling efficiency",
                "Peak hour management",
                "Solar utilization"
            ],
            products: [
                {
                    id: "window-film-1",
                    name: "Heat Reduction Window Film",
                    benefit: "Cuts AC costs by 30%"
                }
            ]
        }
    ]
}

export default function ReduceEnergyBillsPage() {
    const [activeTab, setActiveTab] = useState('overview')

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <PageHeader
                title="Reduce Your Energy Bills"
                description="Practical strategies to lower your electricity costs without compromising comfort"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Strategies Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {strategies.map((strategy, index) => (
                        <Card key={index} className="p-6 hover:shadow-lg transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-[#003366]/10 p-3 rounded-lg">
                                    <strategy.icon className="h-6 w-6 text-[#003366]" />
                                </div>
                                <h3 className="font-semibold">{strategy.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{strategy.description}</p>
                            <ul className="space-y-2">
                                {strategy.tips.map((tip, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                        <div className="mt-1.5">
                                            <div className="h-1.5 w-1.5 rounded-full bg-[#003366]" />
                                        </div>
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>

                {/* Interactive Savings Calculator */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Potential Savings Calculator</h2>
                    <Card className="p-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            {savingsCalculator.measures.map((measure, index) => (
                                <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                    <h3 className="font-semibold mb-2">{measure.name}</h3>
                                    <div className="space-y-2 text-sm">
                                        <p className="flex justify-between">
                                            <span className="text-gray-600">Savings:</span>
                                            <span className="font-medium">{measure.savingsRange}</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span className="text-gray-600">Implementation:</span>
                                            <span className="font-medium">{measure.implementation}</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span className="text-gray-600">Initial Cost:</span>
                                            <span className="font-medium">{measure.cost}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Resources Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Helpful Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {resources.map((resource, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-all">
                                <h3 className="font-semibold mb-2">{resource.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                                <Button className="w-full" variant="outline">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download {resource.type}
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                    <Card className="p-6">
                        <Accordion type="single" collapsible>
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-left">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Card>
                </div>

                {/* Nigerian Power Solutions */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Nigerian Power Solutions</h2>
                    {nigerianContext.recommendations.map((category, index) => (
                        <div key={index} className="mb-12">
                            <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {category.products.map((product) => (
                                    <ProductSuggestion
                                        key={product.id}
                                        product={{
                                            id: product.id,
                                            name: product.name,
                                            description: product.description,
                                            price: product.price,
                                            savings: product.savings
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Local Challenges & Solutions */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Local Challenges & Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {nigerianContext.challenges.map((challenge, index) => (
                            <Card key={index} className="p-6">
                                <h3 className="font-semibold text-lg mb-3">{challenge.title}</h3>
                                <p className="text-gray-600 mb-4">{challenge.description}</p>
                                <p className="text-green-600 font-medium">{challenge.solution}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 