'use client'

import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Home, Thermometer, Sun, Wind,
    Lightbulb, Battery, Clock, Settings,
    ChevronDown, ArrowRight, Download,
    CheckCircle
} from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { useState } from 'react'

const comfortStrategies = [
    {
        icon: Thermometer,
        title: "Temperature Control",
        description: "Maintain optimal comfort while minimizing energy use",
        tips: [
            "Set AC temperature to 24-26°C for efficiency",
            "Use ceiling fans to improve air circulation",
            "Install window films to reduce heat gain",
            "Zone your cooling system effectively"
        ]
    },
    {
        icon: Lightbulb,
        title: "Smart Lighting",
        description: "Create the perfect ambiance while saving energy",
        tips: [
            "Switch to LED bulbs for better efficiency",
            "Use motion sensors in less-used areas",
            "Maximize natural daylight usage",
            "Create automated lighting schedules"
        ]
    },
    {
        icon: Battery,
        title: "Power Backup",
        description: "Ensure uninterrupted comfort during outages",
        tips: [
            "Size your inverter for essential loads",
            "Maintain backup batteries properly",
            "Set up automatic power switching",
            "Prioritize critical comfort systems"
        ]
    }
]

const faqs = [
    {
        question: "What's the ideal AC temperature for Nigerian weather?",
        answer: "For optimal comfort and energy efficiency in Nigeria's climate, set your AC between 24-26°C (75-79°F). This range balances comfort with energy consumption, especially during peak afternoon heat."
    },
    {
        question: "How can I keep my home cool during power outages?",
        answer: "Use cross ventilation by opening windows on opposite sides, install heat-reflective window films, use ceiling fans (connected to your inverter), and consider installing solar-powered ventilation fans."
    },
    {
        question: "Which lighting is best for Nigerian homes?",
        answer: "LED bulbs are ideal for Nigerian homes as they consume 90% less power than traditional bulbs, last longer, and work well with inverter systems. Look for ones rated 6-12W for regular rooms and 15-20W for larger spaces."
    }
]

const resources = [
    {
        title: "Home Cooling Guide",
        description: "Effective cooling strategies for Nigerian homes",
        type: "PDF",
        link: "/resources/home-cooling-guide.pdf"
    },
    {
        title: "Lighting Calculator",
        description: "Calculate optimal lighting for each room",
        type: "Tool",
        link: "/calculators/lighting"
    },
    {
        title: "Comfort Monitoring Log",
        description: "Track your home's comfort metrics",
        type: "Template",
        link: "/resources/comfort-log.xlsx"
    }
]

const comfortChecklist = {
    title: "Comfort Optimization Checklist",
    description: "Track your progress in optimizing home comfort",
    items: [
        {
            name: "Temperature Control",
            measures: [
                "AC serviced and optimized",
                "Windows properly sealed",
                "Heat-reflective treatments installed",
                "Ceiling fans operational"
            ],
            tips: [
                "Service AC every 3 months",
                "Clean filters monthly"
            ]
        },
        {
            name: "Lighting Optimization",
            measures: [
                "LED bulbs installed",
                "Natural light maximized",
                "Motion sensors in place",
                "Light zones established"
            ],
            tips: [
                "Replace old bulbs with LEDs",
                "Add task lighting"
            ]
        }
    ]
}

const seasonalTips = [
    {
        season: "Harmattan",
        tips: [
            "Use humidifiers to counter dry air",
            "Seal windows to prevent dust",
            "Regular air filter cleaning",
            "Maintain indoor plants for humidity"
        ],
        months: "November - March"
    },
    {
        season: "Rainy Season",
        tips: [
            "Improve ventilation to prevent mold",
            "Use dehumidifiers in damp areas",
            "Install rain guards on windows",
            "Check drainage systems"
        ],
        months: "April - October"
    },
    {
        season: "Hot Season",
        tips: [
            "Use window films to reduce heat",
            "Install proper insulation",
            "Optimize cross ventilation",
            "Service AC systems"
        ],
        months: "February - April"
    }
]

const energyEfficiencyGuide = [
    {
        category: "Air Conditioning",
        recommendations: [
            {
                title: "Temperature Settings",
                description: "Optimal settings for Nigerian climate",
                points: [
                    "Set temperature between 24-26°C",
                    "Use sleep mode at night",
                    "Clean filters monthly",
                    "Service units quarterly"
                ]
            },
            {
                title: "Zoning Strategy",
                description: "Efficient cooling zones",
                points: [
                    "Separate day and night zones",
                    "Use door closers",
                    "Install zone thermostats",
                    "Optimize room layouts"
                ]
            }
        ]
    },
    {
        category: "Natural Ventilation",
        recommendations: [
            {
                title: "Window Management",
                description: "Maximize natural airflow",
                points: [
                    "Open windows during cool hours",
                    "Install window screens",
                    "Use curtains strategically",
                    "Consider window films"
                ]
            }
        ]
    }
]

export default function HomeComfortPage() {
    const [completedSteps, setCompletedSteps] = useState<string[]>([])
    const [progress, setProgress] = useState(0)

    const toggleStep = (step: string) => {
        setCompletedSteps(prev => {
            const newSteps = prev.includes(step)
                ? prev.filter(s => s !== step)
                : [...prev, step]

            // Update progress
            const totalSteps = comfortChecklist.items.reduce(
                (acc, item) => acc + item.measures.length, 0
            )
            setProgress((newSteps.length / totalSteps) * 100)

            return newSteps
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <PageHeader
                title="Home Comfort Solutions"
                description="Smart strategies to maintain comfort while maximizing energy efficiency"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {comfortStrategies.map((strategy, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden hover:shadow-xl transition-all duration-300 
                                transform hover:-translate-y-1 hover:scale-[1.02]
                                bg-gradient-to-b from-white to-gray-50/50"
                        >
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative group-hover:rotate-3 transition-transform duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/20 to-[#004488]/20 
                                            blur-xl group-hover:blur-2xl transition-all duration-300 rounded-full"
                                        />
                                        <div className="relative bg-gradient-to-br from-[#003366] to-[#004488] 
                                            p-3.5 rounded-xl text-white transform group-hover:scale-110 
                                            transition-all duration-300 ease-out shadow-lg group-hover:shadow-xl
                                            border border-white/10"
                                        >
                                            <strategy.icon className="h-5 w-5 stroke-[1.5]" />
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-lg text-[#003366] 
                                        group-hover:text-[#004488] transition-colors duration-300"
                                    >
                                        {strategy.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 group-hover:text-gray-700 
                                    transition-colors duration-300 mb-6"
                                >
                                    {strategy.description}
                                </p>
                                <div className="space-y-3">
                                    {strategy.tips.map((tip, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 text-gray-600 
                                                group-hover:text-gray-700 hover:translate-x-1 
                                                transition-all duration-200"
                                        >
                                            <div className="mt-1.5 transform group-hover:scale-110 
                                                transition-transform duration-300"
                                            >
                                                <div className="h-1.5 w-1.5 rounded-full 
                                                    bg-gradient-to-r from-[#003366] to-[#004488]"
                                                />
                                            </div>
                                            <span className="text-sm">{tip}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Comfort Optimization Progress</h2>
                    <Card className="p-6">
                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">Optimization Level</span>
                                <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {comfortChecklist.items.map((area, index) => (
                                <div key={index} className="space-y-4">
                                    <h3 className="font-semibold text-lg">{area.name}</h3>
                                    <div className="space-y-3">
                                        {area.measures.map((measure, i) => (
                                            <div
                                                key={i}
                                                onClick={() => toggleStep(`${area.name}-${i}`)}
                                                className="flex items-start gap-3 p-3 rounded-lg
                                                    hover:bg-gray-50 cursor-pointer transition-colors"
                                            >
                                                <div className={`rounded-full p-0.5 
                                                    ${completedSteps.includes(`${area.name}-${i}`)
                                                        ? 'text-green-500'
                                                        : 'text-gray-400'}`}
                                                >
                                                    <CheckCircle className="h-5 w-5" />
                                                </div>
                                                <span className="text-sm">{measure}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                        <h4 className="text-sm font-medium text-blue-800 mb-2">Pro Tips:</h4>
                                        <ul className="space-y-2">
                                            {area.tips.map((tip, i) => (
                                                <li key={i} className="text-sm text-blue-600 flex items-center gap-2">
                                                    <div className="h-1 w-1 rounded-full bg-blue-400" />
                                                    {tip}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

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

                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Seasonal Comfort Guide</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {seasonalTips.map((season, index) => (
                            <Card key={index} className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <h3 className="font-semibold text-lg">{season.season}</h3>
                                    <span className="text-sm text-gray-600">({season.months})</span>
                                </div>
                                <ul className="space-y-3">
                                    {season.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1.5">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#003366]" />
                                            </div>
                                            <span className="text-sm text-gray-600">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Detailed Efficiency Guide</h2>
                    {energyEfficiencyGuide.map((category, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {category.recommendations.map((rec, i) => (
                                    <Card key={i} className="p-6">
                                        <h4 className="font-semibold mb-2">{rec.title}</h4>
                                        <p className="text-sm text-gray-600 mb-4">{rec.description}</p>
                                        <ul className="space-y-2">
                                            {rec.points.map((point, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <div className="mt-1.5">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-[#003366]" />
                                                    </div>
                                                    <span className="text-sm text-gray-600">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
} 