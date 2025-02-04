'use client'

import { useState } from 'react'
import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
    Thermometer, Fan, Sun, Wind,
    ArrowRight, Home, Droplets,
    Leaf, Timer, Settings
} from 'lucide-react'
import Link from 'next/link'
import {
    LineChart, Line, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, ResponsiveContainer
} from 'recharts'
import Image from 'next/image'
import { RelatedProducts } from '@/components/products/related-products'

const CoolingCalculator = () => {
    const [roomSize, setRoomSize] = useState<number>(20) // square meters
    const [occupants, setOccupants] = useState<number>(2)
    const [sunExposure, setSunExposure] = useState<string>('medium')

    const calculateBTU = () => {
        // Basic BTU calculation for Nigerian climate
        let btu = roomSize * 600 // Base BTU per square meter
        btu += occupants * 400 // Additional BTU per person

        // Adjust for sun exposure
        const exposureMultiplier: Record<string, number> = {
            low: 1,
            medium: 1.1,
            high: 1.2
        }

        btu *= exposureMultiplier[sunExposure] || 1.1 // Default to medium if undefined

        // Convert to tons
        const tons = btu / 12000

        return {
            btu: Math.round(btu),
            tons: tons.toFixed(1),
            recommendedType: tons <= 1 ? 'Split Unit' : 'Floor Standing'
        }
    }

    const result = calculateBTU()

    return (
        <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">AC Size Calculator</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                    <label className="block text-sm font-medium mb-2">Room Size (m²)</label>
                    <Input
                        type="number"
                        value={roomSize}
                        onChange={(e) => setRoomSize(Number(e.target.value))}
                        min={1}
                        max={100}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Number of Occupants</label>
                    <Input
                        type="number"
                        value={occupants}
                        onChange={(e) => setOccupants(Number(e.target.value))}
                        min={1}
                        max={20}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Sun Exposure</label>
                    <select
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        value={sunExposure}
                        onChange={(e) => setSunExposure(e.target.value)}
                    >
                        <option value="low">Low (North-facing/Shaded)</option>
                        <option value="medium">Medium (East/West-facing)</option>
                        <option value="high">High (South-facing/Direct sun)</option>
                    </select>
                </div>
            </div>

            <Card className="p-4 bg-[#003366]/5">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Required Capacity</p>
                        <p className="font-semibold">{result.btu.toLocaleString()} BTU</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Tonnage</p>
                        <p className="font-semibold">{result.tons} Tons</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-1">Recommended Type</p>
                        <p className="font-semibold">{result.recommendedType}</p>
                    </div>
                </div>
            </Card>
        </Card>
    )
}

const sections = [
    {
        title: "Natural Cooling Strategies",
        icon: Leaf,
        content: [
            {
                subtitle: "Ventilation Techniques",
                points: [
                    "Cross ventilation through window placement",
                    "Using ceiling fans to improve air circulation",
                    "Night cooling methods during harmattan",
                    "Strategic placement of plants for cooling"
                ]
            },
            {
                subtitle: "Heat Reduction",
                points: [
                    "Window treatments and solar films",
                    "Roof and wall insulation options",
                    "Creating shade with awnings or trees",
                    "Light-colored exterior paints"
                ]
            }
        ]
    },
    {
        title: "AC Efficiency",
        icon: Thermometer,
        content: [
            {
                subtitle: "System Selection",
                points: [
                    "Choosing the right AC capacity",
                    "Inverter vs. conventional units",
                    "Energy efficiency ratings explained",
                    "Installation best practices"
                ]
            },
            {
                subtitle: "Optimal Operation",
                points: [
                    "Temperature setting guidelines",
                    "Maintenance and cleaning schedule",
                    "Filter replacement timing",
                    "Zoning and room isolation"
                ]
            }
        ]
    },
    {
        title: "Humidity Control",
        icon: Droplets,
        content: [
            {
                subtitle: "Managing Humidity",
                points: [
                    "Ideal humidity levels (45-55%)",
                    "Dehumidifier usage tips",
                    "Natural humidity control methods",
                    "Preventing mold growth"
                ]
            },
            {
                subtitle: "Seasonal Adjustments",
                points: [
                    "Rainy season strategies",
                    "Harmattan period adjustments",
                    "Combined AC and fan usage",
                    "Ventilation timing"
                ]
            }
        ]
    }
]

const CostCalculator = () => {
    const [acWattage, setAcWattage] = useState<number>(1500)
    const [hoursPerDay, setHoursPerDay] = useState<number>(8)
    const [electricityRate, setElectricityRate] = useState<number>(62.33)

    const calculateCosts = () => {
        const dailyKwh = (acWattage * hoursPerDay) / 1000
        const monthlyCost = dailyKwh * 30 * (electricityRate / 100)
        const yearlyCost = monthlyCost * 12

        return {
            daily: dailyKwh.toFixed(2),
            monthlyCost: monthlyCost.toFixed(2),
            yearlyCost: yearlyCost.toFixed(2)
        }
    }

    const costs = calculateCosts()

    return (
        <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">AC Running Cost Calculator</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                    <label className="block text-sm font-medium mb-2">AC Power Rating (Watts)</label>
                    <Input
                        type="number"
                        value={acWattage}
                        onChange={(e) => setAcWattage(Number(e.target.value))}
                        min={500}
                        max={5000}
                    />
                    <p className="text-xs text-gray-500 mt-1">Typical range: 750W - 2500W</p>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Daily Usage (Hours)</label>
                    <Input
                        type="number"
                        value={hoursPerDay}
                        onChange={(e) => setHoursPerDay(Number(e.target.value))}
                        min={1}
                        max={24}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Electricity Rate (₦/kWh)</label>
                    <Input
                        type="number"
                        value={electricityRate}
                        onChange={(e) => setElectricityRate(Number(e.target.value))}
                        step="0.01"
                    />
                    <p className="text-xs text-gray-500 mt-1">Current NERC rate: ₦62.33/kWh</p>
                </div>
            </div>

            <Card className="p-6 bg-[#003366]/5">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Daily Consumption</p>
                        <p className="text-2xl font-semibold">{costs.daily} kWh</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Monthly Cost</p>
                        <p className="text-2xl font-semibold">₦{Number(costs.monthlyCost).toLocaleString()}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Yearly Cost</p>
                        <p className="text-2xl font-semibold">₦{Number(costs.yearlyCost).toLocaleString()}</p>
                    </div>
                </div>
            </Card>
        </Card>
    )
}

const RegionalGuide = () => {
    const regions = [
        {
            name: "Lagos/Coastal",
            climate: "Hot & Humid",
            avgTemp: "24-32°C",
            humidity: "75-95%",
            challenges: [
                "High humidity levels year-round",
                "Sea breeze corrosion on equipment",
                "Urban heat island effect",
                "Frequent power fluctuations"
            ],
            recommendations: [
                "Use corrosion-resistant equipment",
                "Focus on dehumidification",
                "Regular maintenance due to salt air",
                "Install surge protectors"
            ],
            seasonalTips: {
                dry: [
                    "Maximize natural ventilation",
                    "Use ceiling fans with AC",
                    "Schedule maintenance before rainy season"
                ],
                rainy: [
                    "Monitor humidity levels",
                    "Use dehumidifier mode",
                    "Check drainage systems",
                    "Protect outdoor units"
                ]
            },
            monthlyData: [
                { month: 'Jan', temp: 28, humidity: 80 },
                { month: 'Feb', temp: 29, humidity: 75 },
                // ... add data for all months
            ]
        },
        {
            name: "Northern Nigeria",
            climate: "Hot & Dry",
            avgTemp: "22-40°C",
            humidity: "20-45%",
            challenges: [
                "Extreme temperature variations",
                "Frequent dust storms",
                "Very low humidity in harmattan",
                "High cooling demands"
            ],
            recommendations: [
                "Install high-efficiency units",
                "Use advanced dust filtration",
                "Consider evaporative cooling",
                "Implement zoning systems"
            ],
            seasonalTips: {
                dry: [
                    "Use night cooling strategies",
                    "Implement dust protection",
                    "Regular filter cleaning",
                    "Consider misting systems"
                ],
                harmattan: [
                    "Increase humidity levels",
                    "Extra dust protection",
                    "Regular maintenance",
                    "Use heat mode in cold mornings"
                ]
            },
            monthlyData: [
                { month: 'Jan', temp: 35, humidity: 25 },
                { month: 'Feb', temp: 37, humidity: 20 },
                // ... add data for all months
            ]
        },
        {
            name: "Middle Belt",
            climate: "Moderate",
            avgTemp: "20-35°C",
            humidity: "45-75%",
            challenges: [
                "Significant seasonal variations",
                "Mixed cooling/heating needs",
                "Varied humidity levels",
                "Unpredictable weather patterns"
            ],
            recommendations: [
                "Install versatile HVAC systems",
                "Use smart climate control",
                "Implement adaptive ventilation",
                "Focus on energy efficiency"
            ],
            seasonalTips: {
                dry: [
                    "Balance humidity levels",
                    "Use natural ventilation",
                    "Implement solar shading",
                    "Regular maintenance"
                ],
                rainy: [
                    "Monitor indoor humidity",
                    "Use appropriate fan speeds",
                    "Check insulation",
                    "Optimize temperature settings"
                ]
            },
            monthlyData: [
                { month: 'Jan', temp: 30, humidity: 55 },
                { month: 'Feb', temp: 32, humidity: 50 },
                // ... add data for all months
            ]
        }
    ]

    return (
        <div className="space-y-8">
            {regions.map((region, index) => (
                <Card key={index} className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <h3 className="text-2xl font-bold">{region.name}</h3>
                                <span className="px-3 py-1 bg-[#003366]/10 rounded-full text-sm">
                                    {region.climate}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-600">Average Temperature</p>
                                    <p className="text-lg font-semibold">{region.avgTemp}</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-600">Humidity Range</p>
                                    <p className="text-lg font-semibold">{region.humidity}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold mb-3">Key Challenges</h4>
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
                                <h4 className="font-semibold mb-3">Recommendations</h4>
                                <ul className="space-y-2">
                                    {region.recommendations.map((rec, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-600">
                                            <div className="mt-1.5">
                                                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                            </div>
                                            <span>{rec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Climate Trends</h4>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={region.monthlyData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis yAxisId="left" />
                                        <YAxis yAxisId="right" orientation="right" />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            yAxisId="left"
                                            type="monotone"
                                            dataKey="temp"
                                            stroke="#ff7300"
                                            name="Temperature (°C)"
                                        />
                                        <Line
                                            yAxisId="right"
                                            type="monotone"
                                            dataKey="humidity"
                                            stroke="#82ca9d"
                                            name="Humidity (%)"
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            <div className="mt-6">
                                <h4 className="font-semibold mb-3">Seasonal Recommendations</h4>
                                <Tabs defaultValue="dry">
                                    <TabsList>
                                        <TabsTrigger value="dry">Dry Season</TabsTrigger>
                                        <TabsTrigger value="wet">
                                            {region.name.includes("Northern") ? "Harmattan" : "Rainy Season"}
                                        </TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="dry">
                                        <ul className="space-y-2">
                                            {region.seasonalTips.dry.map((tip, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                                    <div className="mt-1.5">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                    </div>
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </TabsContent>
                                    <TabsContent value="wet">
                                        <ul className="space-y-2">
                                            {(region.seasonalTips[region.name.includes("Northern") ? "harmattan" : "rainy"] ?? []).map((tip, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                                    <div className="mt-1.5">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                    </div>
                                                    <span>{tip}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

const CoolingComparison = () => {
    const methods = [
        {
            type: "Split AC",
            initialCost: "₦250,000 - ₦500,000",
            efficiency: "High",
            maintenance: "Moderate",
            lifespan: "8-12 years",
            bestFor: "Single rooms, offices",
            pros: ["Efficient", "Quiet", "Easy installation"],
            cons: ["Limited coverage", "Regular maintenance"],
            savingTips: [
                "Use timer settings",
                "Clean filters monthly",
                "Set to 24-26°C",
                "Regular servicing"
            ]
        },
        {
            type: "Standing AC",
            initialCost: "₦400,000 - ₦800,000",
            efficiency: "Moderate",
            maintenance: "High",
            lifespan: "10-15 years",
            bestFor: "Large spaces, halls",
            pros: ["Powerful cooling", "Mobile", "No installation"],
            cons: ["Higher energy use", "Takes floor space"],
            savingTips: [
                "Position strategically",
                "Use fan mode when possible",
                "Regular maintenance",
                "Seal room properly"
            ]
        },
        {
            type: "Ceiling Fans",
            initialCost: "₦15,000 - ₦50,000",
            efficiency: "Low",
            maintenance: "Low",
            lifespan: "5-10 years",
            bestFor: "General ventilation",
            pros: ["Low cost", "Easy maintenance"],
            cons: ["Limited cooling", "Air circulation only"],
            savingTips: [
                "Clean blades regularly",
                "Check balance annually",
                "Use with natural ventilation",
                "Optimal speed settings"
            ]
        }
    ]

    return (
        <div className="space-y-6">
            {methods.map((method, index) => (
                <Card key={index} className="p-6">
                    <div className="grid md:grid-cols-4 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{method.type}</h3>
                            <p className="text-gray-600 mb-4">Initial Cost: {method.initialCost}</p>
                            <div className="space-y-2">
                                <p><span className="font-medium">Efficiency:</span> {method.efficiency}</p>
                                <p><span className="font-medium">Maintenance:</span> {method.maintenance}</p>
                                <p><span className="font-medium">Lifespan:</span> {method.lifespan}</p>
                                <p><span className="font-medium">Best For:</span> {method.bestFor}</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Advantages</h4>
                            <ul className="space-y-1">
                                {method.pros.map((pro, i) => (
                                    <li key={i} className="flex items-center gap-2 text-green-600">
                                        <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                                        <span>{pro}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Disadvantages</h4>
                            <ul className="space-y-1">
                                {method.cons.map((con, i) => (
                                    <li key={i} className="flex items-center gap-2 text-red-600">
                                        <div className="h-1.5 w-1.5 rounded-full bg-red-600" />
                                        <span>{con}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Energy Saving Tips</h4>
                            <ul className="space-y-1">
                                {method.savingTips.map((tip, i) => (
                                    <li key={i} className="flex items-center gap-2 text-blue-600">
                                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                                        <span>{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default function TemperaturePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-8">
            <PageHeader
                title="Temperature Management"
                description="Effective cooling strategies for Nigeria's tropical climate"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <Tabs defaultValue="overview" className="space-y-8">
                    <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="overview">Cooling Guide</TabsTrigger>
                        <TabsTrigger value="calculator">AC Calculator</TabsTrigger>
                        <TabsTrigger value="costs">Cost Calculator</TabsTrigger>
                        <TabsTrigger value="comparison">Compare Methods</TabsTrigger>
                        <TabsTrigger value="regional">Regional Guide</TabsTrigger>
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
                            <RelatedProducts category="temperature" />
                        </div>
                    </TabsContent>

                    <TabsContent value="calculator">
                        <CoolingCalculator />
                    </TabsContent>

                    <TabsContent value="costs">
                        <CostCalculator />
                    </TabsContent>

                    <TabsContent value="comparison">
                        <CoolingComparison />
                    </TabsContent>

                    <TabsContent value="regional">
                        <RegionalGuide />
                    </TabsContent>
                </Tabs>

                {/* Call to Action */}
                <Card className="mt-16 p-8 bg-gradient-to-r from-[#003366] to-[#004488] text-white">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Professional Advice?</h2>
                        <p className="mb-8">
                            Get expert recommendations on the most effective cooling solutions for your space.
                        </p>
                        <Link href="/services/energy-assessment">
                            <Button variant="secondary" size="lg" className="bg-white text-[#003366] hover:bg-white/90">
                                Book a Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
} 