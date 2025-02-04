'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Lightbulb,
    Home,
    Fan,
    Thermometer,
    Battery,
    ArrowRight,
    Plug,
    Droplets,
    Sun,
    Clipboard,
    Calculator,
    Ruler,
    LineChart,
    CheckSquare,
    Download
} from 'lucide-react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const selfAssessmentSteps = [
    {
        title: "Energy Audit Basics",
        icon: Clipboard,
        description: "Document your current energy usage and costs",
        steps: [
            "Collect last 6 months of electricity bills to establish baseline costs",
            "Record generator fuel consumption and costs (if applicable)",
            "Note frequency and duration of power outages",
            "Document comfort issues (e.g., rooms too hot, poor lighting)"
        ]
    },
    {
        title: "Appliance Inventory",
        icon: Plug,
        description: "Create a detailed list of all electrical devices",
        steps: [
            "List each appliance with its wattage (found on nameplate/label)",
            "Note daily usage hours for each device",
            "Identify energy ratings (e.g., AC energy efficiency rating)",
            "Calculate daily energy consumption (Watts × Hours ÷ 1000 = kWh)"
        ]
    },
    {
        title: "Load Analysis",
        icon: Calculator,
        description: "Calculate your power requirements",
        steps: [
            "Sum up essential loads (fridge, fans, basic lighting)",
            "Calculate peak load (when most appliances run simultaneously)",
            "Group appliances by priority (essential vs. non-essential)",
            "Determine backup power duration needs"
        ]
    },
    {
        title: "Cooling Assessment",
        icon: Thermometer,
        description: "Evaluate cooling efficiency and heat sources",
        steps: [
            "Check AC temperature settings and usage patterns",
            "Identify heat entry points (windows, walls getting direct sun)",
            "Assess natural ventilation possibilities",
            "Note areas with poor air circulation"
        ]
    },
    {
        title: "Lighting Review",
        icon: Lightbulb,
        description: "Analyze lighting efficiency",
        steps: [
            "Count bulbs by type (LED, CFL, incandescent)",
            "Identify areas with excessive/insufficient lighting",
            "Note potential for natural light usage",
            "Calculate lighting power consumption"
        ]
    },
    {
        title: "System Sizing",
        icon: Ruler,
        description: "Determine backup power system requirements",
        steps: [
            "Calculate total daily energy needs in kWh",
            "Size inverter based on peak load (add 30% margin)",
            "Determine battery capacity for desired backup time",
            "Consider solar panel requirements if applicable"
        ]
    },
    {
        title: "Cost Analysis",
        icon: LineChart,
        description: "Evaluate potential savings and investments",
        steps: [
            "Calculate current monthly energy costs (NEPA + Generator)",
            "Identify potential energy efficiency upgrades",
            "Estimate costs for recommended improvements",
            "Calculate potential ROI and payback periods"
        ]
    },
    {
        title: "Action Planning",
        icon: CheckSquare,
        description: "Create your energy optimization plan",
        steps: [
            "Prioritize improvements by cost-benefit ratio",
            "Create timeline for implementing changes",
            "Set measurable energy reduction goals",
            "Plan regular maintenance schedules"
        ]
    }
]

interface Worksheet {
    title: string
    filename: string
    description: string
}

interface Example {
    title: string
    calculation: string
    explanation: string
}

interface Troubleshooting {
    problem: string
    solutions: string[]
}

interface RegionalConsideration {
    region: string
    climate: string
    specificConsiderations: string[]
    recommendations: string[]
}

const worksheets: Record<string, Worksheet> = {
    "audit": {
        title: "Energy Audit Worksheet",
        filename: "energy-audit-template.pdf",
        description: "Track your electricity bills and usage patterns"
    },
    "appliance": {
        title: "Appliance Inventory Sheet",
        filename: "appliance-inventory.xlsx",
        description: "List and calculate appliance power consumption"
    },
    "load": {
        title: "Load Calculator",
        filename: "load-calculator.xlsx",
        description: "Calculate your total and peak power needs"
    },
    // ... other worksheets
}

const exampleCalculations = {
    "daily-consumption": {
        title: "Daily Energy Consumption",
        calculation: "AC (1.5HP): 1100W × 8 hours = 8.8 kWh/day",
        explanation: "Multiply the appliance wattage by hours used per day"
    },
    "inverter-sizing": {
        title: "Inverter Sizing",
        calculation: "Peak Load: 3kW × 1.3 = 3.9kW inverter needed",
        explanation: "Add 30% margin to your peak load for inverter size"
    },
    // ... other calculations
}

const troubleshootingTips: Record<string, Troubleshooting[]> = {
    "audit": [
        {
            problem: "Inconsistent electricity bills",
            solutions: [
                "Track daily meter readings",
                "Note power outage periods",
                "Check for unauthorized connections"
            ]
        },
        // ... other problems
    ],
    // ... other categories
}

const regionalConsiderations: RegionalConsideration[] = [
    {
        region: "Coastal (Lagos, Port Harcourt)",
        climate: "Hot & Humid",
        specificConsiderations: [
            "High humidity affects cooling efficiency",
            "Salt air corrosion on outdoor units",
            "Frequent rainfall impact on solar systems"
        ],
        recommendations: [
            "Prioritize dehumidification in cooling systems",
            "Use corrosion-resistant equipment",
            "Include humidity in load calculations"
        ]
    },
    {
        region: "Northern Nigeria",
        climate: "Hot & Dry",
        specificConsiderations: [
            "Extreme temperature variations",
            "Dust storms affect equipment",
            "Strong solar potential",
            "Low humidity in harmattan"
        ],
        recommendations: [
            "Include dust protection in system design",
            "Maximize solar potential",
            "Account for high cooling demands"
        ]
    },
    // ... other regions
]

const calculationKeys: Record<string, keyof typeof exampleCalculations> = {
    "Load Analysis": "daily-consumption",
    "System Sizing": "inverter-sizing"
}

export function EnergyAssessment() {
    return (
        <div className="space-y-16">
            {/* DIY Assessment Section */}
            <Card className="p-8">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        DIY Energy Assessment Guide
                    </h2>
                    <p className="text-gray-600">
                        Learn how to assess your energy needs and find the right solutions for your home.
                        Follow these steps or get professional help for more complex situations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {selfAssessmentSteps.map((step, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-[#003366]/10 p-3 rounded-lg">
                                    <step.icon className="h-6 w-6 text-[#003366]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {step.steps.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <div className="mt-1.5">
                                            <div className="h-1.5 w-1.5 rounded-full bg-[#003366]" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Worksheet Download */}
                            {worksheets[step.title.toLowerCase()] && (
                                <div className="mt-4 pt-4 border-t">
                                    <Button variant="outline" size="sm">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Worksheet
                                    </Button>
                                </div>
                            )}

                            {/* Example Calculations */}
                            {calculationKeys[step.title] && (
                                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-medium mb-2">Example Calculation</h4>
                                    <p className="text-sm text-gray-600">
                                        {exampleCalculations[calculationKeys[step.title]].calculation}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        {exampleCalculations[calculationKeys[step.title]].explanation}
                                    </p>
                                </div>
                            )}

                            {/* Troubleshooting Tips */}
                            {troubleshootingTips[step.title.toLowerCase()] && (
                                <div className="mt-4">
                                    <Tabs defaultValue="tips">
                                        <TabsList>
                                            <TabsTrigger value="tips">Troubleshooting</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="tips">
                                            <div className="space-y-2">
                                                {troubleshootingTips[step.title.toLowerCase()].map((tip, i) => (
                                                    <div key={i} className="text-sm">
                                                        <p className="font-medium text-red-600">{tip.problem}</p>
                                                        <ul className="mt-1 space-y-1">
                                                            {tip.solutions.map((solution, j) => (
                                                                <li key={j} className="text-gray-600">• {solution}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
            </Card>

            {/* Regional Considerations */}
            <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Regional Considerations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {regionalConsiderations.map((region, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <h4 className="font-semibold">{region.region}</h4>
                                <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                                    {region.climate}
                                </span>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h5 className="font-medium mb-2">Key Considerations</h5>
                                    <ul className="space-y-1">
                                        {region.specificConsiderations.map((consideration, i) => (
                                            <li key={i} className="text-sm text-gray-600">• {consideration}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium mb-2">Recommendations</h5>
                                    <ul className="space-y-1">
                                        {region.recommendations.map((recommendation, i) => (
                                            <li key={i} className="text-sm text-gray-600">• {recommendation}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Card>

            {/* Professional Assessment Section */}
            <Card className="p-8 bg-gradient-to-r from-[#003366] to-[#004488] text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Professional Energy Assessment
                    </h2>
                    <p className="mb-8">
                        Get a comprehensive evaluation of your energy needs from our certified experts.
                        We'll analyze your usage patterns and recommend the most cost-effective solutions.
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
    )
} 