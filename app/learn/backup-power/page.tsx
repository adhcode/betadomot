'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
    Battery, Power, Sun, Zap,
    ArrowRight, Settings, Wrench,
    AlertTriangle, DollarSign, Gauge, Shield
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { RelatedProducts } from '@/components/products/related-products'
import { ProductSuggestion } from '@/components/products/product-suggestion'

interface PowerSystemCost {
    initial: number
    monthly: number
    yearly: number
    fiveYear: number
}

interface SystemCosts {
    generator: PowerSystemCost
    solar: PowerSystemCost
    hybrid: PowerSystemCost
}

const BackupSystemCalculator = () => {
    const [load, setLoad] = useState<number>(5) // kVA
    const [hours, setHours] = useState<number>(8) // Daily hours

    const calculateCosts = (load: number, hours: number): SystemCosts => {
        // Example calculations - adjust these based on current Nigerian market rates
        const generatorCost = {
            initial: load * 150000, // Generator cost
            monthly: load * hours * 30 * 400, // Fuel cost per month
            yearly: load * hours * 365 * 400, // Yearly fuel cost
            fiveYear: load * 150000 + (load * hours * 365 * 400 * 5) // 5-year total cost
        }

        const solarCost = {
            initial: load * 350000, // Solar system cost
            monthly: 5000, // Maintenance
            yearly: 60000, // Yearly maintenance
            fiveYear: (load * 350000) + (60000 * 5) // 5-year total cost
        }

        const hybridCost = {
            initial: (load * 250000) + (load * 100000), // Combined system
            monthly: (load * hours * 15 * 400) + 3000, // Reduced fuel + maintenance
            yearly: (load * hours * 180 * 400) + 36000,
            fiveYear: ((load * 250000) + (load * 100000)) + ((load * hours * 180 * 400 + 36000) * 5)
        }

        return { generator: generatorCost, solar: solarCost, hybrid: hybridCost }
    }

    const costs = calculateCosts(load, hours)

    return (
        <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Cost Comparison Calculator</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                    <label className="block text-sm font-medium mb-2">Power Requirement (kVA)</label>
                    <Input
                        type="number"
                        value={load}
                        onChange={(e) => setLoad(Number(e.target.value))}
                        min={1}
                        max={50}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Daily Usage Hours</label>
                    <Input
                        type="number"
                        value={hours}
                        onChange={(e) => setHours(Number(e.target.value))}
                        min={1}
                        max={24}
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(costs).map(([type, cost]) => (
                    <Card key={type} className="p-4">
                        <h4 className="font-semibold mb-3 capitalize">{type} System</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                                <span>Initial Cost:</span>
                                <span>₦{cost.initial.toLocaleString()}</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Monthly Cost:</span>
                                <span>₦{cost.monthly.toLocaleString()}</span>
                            </li>
                            <li className="flex justify-between">
                                <span>5-Year Total:</span>
                                <span>₦{cost.fiveYear.toLocaleString()}</span>
                            </li>
                        </ul>
                    </Card>
                ))}
            </div>
        </Card>
    )
}

const sections = [
    {
        title: "Generator Systems",
        icon: Power,
        content: [
            {
                subtitle: "Types and Sizing",
                points: [
                    "Petrol vs Diesel generators",
                    "Automatic Transfer Switch (ATS) options",
                    "Load calculation and sizing guide",
                    "Noise levels and neighborhood considerations"
                ]
            },
            {
                subtitle: "Maintenance Requirements",
                points: [
                    "Regular service intervals",
                    "Fuel quality management",
                    "Common problems and solutions",
                    "Emergency maintenance tips"
                ]
            }
        ]
    },
    {
        title: "Solar Inverter Systems",
        icon: Sun,
        content: [
            {
                subtitle: "System Components",
                points: [
                    "Inverter types and specifications",
                    "Battery bank sizing",
                    "Solar panel requirements",
                    "Charge controller selection"
                ]
            },
            {
                subtitle: "Installation & Setup",
                points: [
                    "Location and ventilation needs",
                    "Wiring and safety standards",
                    "Battery configuration options",
                    "System monitoring setup"
                ]
            }
        ]
    },
    {
        title: "Hybrid Solutions",
        icon: Zap,
        content: [
            {
                subtitle: "Integration Strategies",
                points: [
                    "Combining solar and generator backup",
                    "Smart switching systems",
                    "Load sharing configuration",
                    "Optimization techniques"
                ]
            },
            {
                subtitle: "Management & Control",
                points: [
                    "Automated source switching",
                    "Priority load management",
                    "Energy storage optimization",
                    "Remote monitoring options"
                ]
            }
        ]
    }
]

const nigerianPowerContext = {
    regions: [
        {
            name: "Lagos & South West",
            challenges: [
                "6-12 hours average daily power",
                "Frequent voltage fluctuations",
                "High humidity impact on equipment"
            ],
            recommendations: [
                {
                    type: "Urban Areas",
                    solution: "Hybrid Inverter + Solar",
                    products: [
                        {
                            id: "hybrid-5kva",
                            name: "5KVA Hybrid Inverter System",
                            price: 850000,
                            description: "Complete solar hybrid system with lithium batteries",
                            savings: "₦45,000 monthly on fuel",
                            features: [
                                "Auto-switching between solar, grid, and battery",
                                "Works with low voltage (140V)",
                                "Pure sine wave output",
                                "5-year warranty"
                            ]
                        },
                        {
                            id: "stab-5kva",
                            name: "5KVA Voltage Stabilizer",
                            price: 75000,
                            description: "Wide input range stabilizer (140V-260V)",
                            features: ["Protects inverter and appliances"]
                        }
                    ]
                },
                {
                    type: "Suburban Areas",
                    solution: "Pure Inverter System",
                    products: [
                        {
                            id: "inv-3.5kva",
                            name: "3.5KVA Inverter + 200Ah Lithium",
                            price: 650000,
                            description: "8-10 hours backup for essential loads",
                            savings: "₦35,000 monthly on fuel"
                        }
                    ]
                }
            ]
        },
        {
            name: "Northern Region",
            challenges: [
                "4-8 hours average daily power",
                "Dust impact on equipment",
                "Extreme temperatures"
            ],
            recommendations: [
                {
                    type: "Urban Areas",
                    solution: "Solar Priority System",
                    products: [
                        {
                            id: "solar-complete-5kw",
                            name: "5KW Solar Complete System",
                            price: 2850000,
                            description: "Full solar independence",
                            savings: "₦65,000 monthly on power costs",
                            features: [
                                "Dust-resistant panels",
                                "Temperature-optimized batteries",
                                "Extended warranty"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "South East & South South",
            challenges: [
                "3-6 hours average daily power",
                "Frequent surges",
                "High rainfall impact"
            ],
            recommendations: [
                {
                    type: "Urban/Suburban",
                    solution: "Heavy-duty Backup",
                    products: [
                        {
                            id: "inv-7.5kva",
                            name: "7.5KVA Inverter System",
                            price: 1250000,
                            description: "Complete backup solution",
                            savings: "₦75,000 monthly on generator costs",
                            features: [
                                "Surge protection built-in",
                                "Waterproof installation",
                                "Extended battery life"
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    costBenefitAnalysis: [
        {
            system: "Basic Inverter (2KVA)",
            initialCost: 350000,
            monthlySavings: 25000,
            paybackPeriod: "14 months",
            idealFor: "Small apartments, essential loads only",
            roi: "85% over 3 years"
        },
        {
            system: "Standard Hybrid (5KVA)",
            initialCost: 850000,
            monthlySavings: 45000,
            paybackPeriod: "19 months",
            idealFor: "Medium homes, 70% load coverage",
            roi: "110% over 3 years"
        },
        {
            system: "Full Solar (5KW)",
            initialCost: 2850000,
            monthlySavings: 65000,
            paybackPeriod: "44 months",
            idealFor: "Large homes, complete independence",
            roi: "75% over 3 years"
        }
    ],
    maintenanceTips: [
        {
            component: "Batteries",
            schedule: "Every 3 months",
            tasks: [
                "Check water levels (for lead-acid)",
                "Clean terminals",
                "Test voltage levels"
            ],
            products: [
                {
                    id: "battery-tester",
                    name: "Digital Battery Tester",
                    price: 15000,
                    description: "Professional battery testing tool"
                }
            ]
        },
        {
            component: "Inverter",
            schedule: "Monthly",
            tasks: [
                "Clean cooling fans",
                "Check connections",
                "Update firmware"
            ]
        }
    ]
}

const useCaseProducts = {
    smallHome: {
        title: "Small Homes & Apartments",
        description: "Ideal for 1-2 bedroom apartments with basic appliances",
        monthlyBill: "₦15,000 - ₦25,000",
        products: [
            {
                id: "inv-2kva-basic",
                name: "2KVA Inverter + 200Ah Battery",
                price: 350000,
                description: "Perfect for essential loads: TV, fans, lights",
                savings: "₦20,000 monthly on fuel",
                features: [
                    "8-10 hours backup for basic loads",
                    "Pure sine wave output",
                    "Automatic switching",
                    "2-year warranty"
                ]
            },
            {
                id: "smart-ups-1.5",
                name: "1.5KVA Smart UPS",
                price: 185000,
                description: "For electronics and home office",
                savings: "Protects devices worth ₦500,000+",
                features: [
                    "Mobile app monitoring",
                    "Surge protection",
                    "LCD display"
                ]
            }
        ]
    },
    mediumHome: {
        title: "Medium Homes",
        description: "3-4 bedroom homes with moderate power needs",
        monthlyBill: "₦35,000 - ₦60,000",
        products: [
            {
                id: "hybrid-5kva-premium",
                name: "5KVA Hybrid Inverter System",
                price: 950000,
                description: "Complete power solution with solar option",
                savings: "₦45,000 monthly on power costs",
                features: [
                    "Solar ready",
                    "Lithium batteries",
                    "Smart load management",
                    "5-year warranty"
                ]
            },
            {
                id: "solar-3kw-kit",
                name: "3KW Solar Addition Kit",
                price: 750000,
                description: "Add solar to existing inverter",
                savings: "₦25,000 additional monthly savings",
                features: [
                    "6x 500W panels",
                    "MPPT controller",
                    "Installation included"
                ]
            }
        ]
    },
    business: {
        title: "Small Businesses",
        description: "Shops, offices, and small commercial spaces",
        monthlyBill: "₦50,000 - ₦100,000",
        products: [
            {
                id: "comm-10kva",
                name: "10KVA Commercial Inverter",
                price: 1850000,
                description: "Heavy-duty business backup solution",
                savings: "₦85,000 monthly on generator costs",
                features: [
                    "3-phase output option",
                    "Industrial grade components",
                    "Remote monitoring",
                    "Extended warranty"
                ]
            },
            {
                id: "voltage-guard-pro",
                name: "Voltage Protection System",
                price: 125000,
                description: "Complete power quality solution",
                savings: "Prevents equipment damage",
                features: [
                    "Surge protection",
                    "Phase sequence protection",
                    "Data logging"
                ]
            }
        ]
    },
    criticalLoads: {
        title: "Critical Equipment Protection",
        description: "Medical equipment, servers, sensitive devices",
        monthlyBill: "Varies by equipment",
        products: [
            {
                id: "online-ups-3kva",
                name: "3KVA Online UPS",
                price: 450000,
                description: "Zero switching time, pure power",
                savings: "100% uptime for critical loads",
                features: [
                    "True online double conversion",
                    "Power conditioning",
                    "Bypass switch",
                    "Network management"
                ]
            },
            {
                id: "smart-ats-32",
                name: "32A Smart ATS",
                price: 165000,
                description: "Automatic source switching",
                savings: "Prevents equipment restart issues",
                features: [
                    "4-way power switching",
                    "Delay timer",
                    "Source priority"
                ]
            }
        ]
    }
}

export default function BackupPowerPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
            <PageHeader
                title="Backup Power Solutions"
                description="Compare and understand different power backup options for your needs"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <Tabs defaultValue="overview" className="space-y-8">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="overview">System Overview</TabsTrigger>
                        <TabsTrigger value="calculator">Cost Calculator</TabsTrigger>
                        <TabsTrigger value="comparison">Detailed Comparison</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview">
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
                            <RelatedProducts category="backup-power" />
                        </div>
                    </TabsContent>

                    <TabsContent value="calculator">
                        <BackupSystemCalculator />
                    </TabsContent>

                    <TabsContent value="comparison">
                        <div className="space-y-8">
                            <div className="mb-16">
                                <h2 className="text-2xl font-bold mb-8">Regional Power Solutions</h2>
                                {nigerianPowerContext.regions.map((region, index) => (
                                    <Card key={index} className="mb-8 p-6">
                                        <h3 className="text-xl font-semibold mb-4">{region.name}</h3>

                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <h4 className="font-medium mb-3">Local Challenges</h4>
                                                <ul className="space-y-2">
                                                    {region.challenges.map((challenge, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-gray-600">
                                                            <div className="mt-1.5">
                                                                <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                                            </div>
                                                            <span>{challenge}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                {region.recommendations.map((rec, i) => (
                                                    <div key={i}>
                                                        <h4 className="font-medium mb-3">{rec.type}</h4>
                                                        <p className="text-green-600 mb-4">{rec.solution}</p>
                                                        <div className="space-y-4">
                                                            {rec.products.map((product) => (
                                                                <ProductSuggestion
                                                                    key={product.id}
                                                                    product={product}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            <div className="mb-16">
                                <h2 className="text-2xl font-bold mb-8">Cost-Benefit Analysis</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {nigerianPowerContext.costBenefitAnalysis.map((analysis, index) => (
                                        <Card key={index} className="p-6">
                                            <h3 className="font-semibold text-lg mb-4">{analysis.system}</h3>
                                            <div className="space-y-3">
                                                <p className="flex justify-between">
                                                    <span className="text-gray-600">Initial Cost:</span>
                                                    <span className="font-medium">₦{analysis.initialCost.toLocaleString()}</span>
                                                </p>
                                                <p className="flex justify-between">
                                                    <span className="text-gray-600">Monthly Savings:</span>
                                                    <span className="font-medium text-green-600">₦{analysis.monthlySavings.toLocaleString()}</span>
                                                </p>
                                                <p className="flex justify-between">
                                                    <span className="text-gray-600">Payback Period:</span>
                                                    <span className="font-medium">{analysis.paybackPeriod}</span>
                                                </p>
                                                <p className="flex justify-between">
                                                    <span className="text-gray-600">ROI:</span>
                                                    <span className="font-medium text-blue-600">{analysis.roi}</span>
                                                </p>
                                                <p className="text-sm text-gray-600 mt-4">
                                                    Ideal for: {analysis.idealFor}
                                                </p>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-16">
                                <h2 className="text-2xl font-bold mb-8">Solutions by Use Case</h2>
                                {Object.values(useCaseProducts).map((useCase, index) => (
                                    <Card key={index} className="mb-8 p-6">
                                        <div className="mb-6">
                                            <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                                            <p className="text-gray-600">{useCase.description}</p>
                                            <p className="text-sm text-blue-600 mt-2">
                                                Typical Monthly Power Bill: {useCase.monthlyBill}
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {useCase.products.map((product) => (
                                                <div key={product.id} className="space-y-6">
                                                    <ProductSuggestion
                                                        product={product}
                                                    />

                                                    <Card className="p-4 bg-gray-50">
                                                        <h4 className="font-medium mb-2">Key Features</h4>
                                                        <ul className="space-y-2">
                                                            {product.features.map((feature, i) => (
                                                                <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                                                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5" />
                                                                    <span>{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </Card>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>

                {/* Call to Action */}
                <Card className="mt-16 p-8 bg-gradient-to-r from-[#003366] to-[#004488] text-white">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
                        <p className="mb-8">
                            Get expert advice on the best backup power solution for your specific needs.
                        </p>
                        <Link href="/services/energy-assessment">
                            <Button variant="secondary" size="lg" className="bg-white text-[#003366] hover:bg-white/90">
                                Schedule Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
} 