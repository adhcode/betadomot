'use client'

import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Shield, Zap, AlertTriangle, Timer,
    Settings, Battery, Wrench, Gauge,
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

const protectionStrategies = [
    {
        icon: Zap,
        title: "Voltage Protection",
        description: "Shield your appliances from power fluctuations",
        tips: [
            "Install voltage stabilizers for sensitive equipment",
            "Use surge protectors for electronics",
            "Monitor power quality with smart meters",
            "Implement automatic voltage cutoff systems"
        ]
    },
    {
        icon: Timer,
        title: "Usage Optimization",
        description: "Extend appliance lifespan through smart usage patterns",
        tips: [
            "Follow manufacturer's operating guidelines",
            "Implement proper startup sequences",
            "Allow cool-down periods between uses",
            "Avoid overloading circuits"
        ]
    },
    {
        icon: Wrench,
        title: "Maintenance Schedule",
        description: "Regular maintenance for optimal performance",
        tips: [
            "Schedule periodic professional checks",
            "Clean filters and vents regularly",
            "Check for unusual sounds or behavior",
            "Keep maintenance records"
        ]
    }
]

const faqs = [
    {
        question: "How often should I service my appliances?",
        answer: "For most home appliances in Nigeria's climate: AC units every 3-4 months, refrigerators every 6 months, and generators every 3 months or 100 hours of use. Regular maintenance helps prevent damage from voltage fluctuations and dusty conditions."
    },
    {
        question: "What voltage stabilizer rating do I need?",
        answer: "For Nigerian homes, choose a stabilizer that can handle 20% above your total connected load. For example, if your appliances total 2000W, get a 2400VA stabilizer to account for startup surges and future additions."
    },
    {
        question: "How do I protect against frequent power surges?",
        answer: "Install a whole-house surge protector at your main distribution board and use individual surge protectors for sensitive electronics. In Nigeria's power environment, multi-layer protection is essential."
    }
]

const resources = [
    {
        title: "Appliance Protection Guide",
        description: "Complete guide for protecting your appliances in Nigeria's power conditions",
        type: "PDF",
        link: "/resources/appliance-protection-guide.pdf"
    },
    {
        title: "Maintenance Scheduler",
        description: "Customizable maintenance schedule for all your appliances",
        type: "Template",
        link: "/resources/maintenance-schedule.xlsx"
    },
    {
        title: "Voltage Log Template",
        description: "Track voltage fluctuations affecting your appliances",
        type: "Template",
        link: "/resources/voltage-log.pdf"
    }
]

const protectionChecklist = {
    title: "Protection Level Assessment",
    description: "Check your current appliance protection measures",
    items: [
        {
            name: "Basic Protection",
            measures: [
                "Voltage stabilizer installed",
                "Surge protectors on electronics",
                "Regular cleaning schedule",
                "Basic maintenance routine"
            ],
            recommendedProducts: [
                "Entry-level stabilizer",
                "Basic surge protectors"
            ]
        },
        {
            name: "Advanced Protection",
            measures: [
                "Whole-house surge protection",
                "Smart voltage monitoring",
                "Automated shutdown systems",
                "Professional maintenance plan"
            ],
            recommendedProducts: [
                "Whole-house protector",
                "Smart monitoring system"
            ]
        }
    ]
}

export default function ApplianceProtectionPage() {
    const [completedSteps, setCompletedSteps] = useState<string[]>([])
    const [progress, setProgress] = useState(0)

    const toggleStep = (step: string) => {
        setCompletedSteps(prev => {
            const newSteps = prev.includes(step)
                ? prev.filter(s => s !== step)
                : [...prev, step]

            // Update progress
            const totalSteps = protectionChecklist.items.reduce(
                (acc, item) => acc + item.measures.length, 0
            )
            setProgress((newSteps.length / totalSteps) * 100)

            return newSteps
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <PageHeader
                title="Protect Your Appliances"
                description="Essential strategies to safeguard your valuable home equipment from power-related damage"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {protectionStrategies.map((strategy, index) => (
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
                    <h2 className="text-2xl font-bold mb-6">Protection Assessment</h2>
                    <Card className="p-6">
                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">Protection Level</span>
                                <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {protectionChecklist.items.map((level, index) => (
                                <div key={index} className="space-y-4">
                                    <h3 className="font-semibold text-lg">{level.name}</h3>
                                    <div className="space-y-3">
                                        {level.measures.map((measure, i) => (
                                            <div
                                                key={i}
                                                onClick={() => toggleStep(`${level.name}-${i}`)}
                                                className="flex items-start gap-3 p-3 rounded-lg
                                                    hover:bg-gray-50 cursor-pointer transition-colors"
                                            >
                                                <div className={`rounded-full p-0.5 
                                                    ${completedSteps.includes(`${level.name}-${i}`)
                                                        ? 'text-green-500'
                                                        : 'text-gray-400'}`}
                                                >
                                                    <CheckCircle className="h-5 w-5" />
                                                </div>
                                                <span className="text-sm">{measure}</span>
                                            </div>
                                        ))}
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
            </div>
        </div>
    )
} 