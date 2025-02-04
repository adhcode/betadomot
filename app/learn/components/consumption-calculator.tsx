'use client'

import { useState, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, AlertCircle, Lightbulb, TreePine, Zap } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from 'next/link'

interface Appliance {
    name: string
    watts: number
    hours: number
    quantity: number
    category?: string
    efficiency?: number
    startHour?: number
}

interface SavingTip {
    tip: string
    impact: number
    category: string
    products: Array<{
        id: string
        name: string
        savings: number
        description: string
    }>
}

interface Results {
    dailyUsage: number
    monthlyCost: number
    yearlyUsage: number
    yearlyCost: number
    highestConsumer: { name: string; consumption: number; category: string }
    savingTips: SavingTip[]
    potentialSavings: number
    peakUsage?: number
    offPeakUsage?: number
}

interface Product {
    id: string
    name: string
    description: string
    savings: number
    price: number
    category?: string
    specifications?: {
        capacity?: number
    }
}

// Expanded preset appliances with categories
const PRESET_APPLIANCES = {
    cooling: [
        { name: 'AC (1HP)', watts: 750, category: 'Cooling' },
        { name: 'AC (1.5HP)', watts: 1120, category: 'Cooling' },
        { name: 'AC (2HP)', watts: 1500, category: 'Cooling' },
        { name: 'Standing Fan', watts: 50, category: 'Cooling' },
        { name: 'Ceiling Fan', watts: 75, category: 'Cooling' },
        { name: 'Portable AC', watts: 900, category: 'Cooling' },
        { name: 'Industrial Fan', watts: 200, category: 'Cooling' },
        { name: 'Split AC (2HP)', watts: 1500, category: 'Cooling', efficiency: 0.6 },
        { name: 'Inverter AC (1.5HP)', watts: 900, category: 'Cooling', efficiency: 0.8 }
    ],
    kitchen: [
        { name: 'Refrigerator', watts: 150, category: 'Kitchen' },
        { name: 'Freezer', watts: 200, category: 'Kitchen' },
        { name: 'Microwave', watts: 800, category: 'Kitchen' },
        { name: 'Electric Kettle', watts: 1500, category: 'Kitchen' },
        { name: 'Toaster', watts: 800, category: 'Kitchen' },
        { name: 'Blender', watts: 300, category: 'Kitchen' },
        { name: 'Deep Freezer', watts: 400, category: 'Kitchen' },
        { name: 'Water Dispenser', watts: 100, category: 'Kitchen' },
        { name: 'Rice Cooker', watts: 700, category: 'Kitchen' },
        { name: 'Commercial Freezer', watts: 500, category: 'Kitchen', efficiency: 0.5 },
        { name: 'Electric Cooker', watts: 2000, category: 'Kitchen', efficiency: 0.4 }
    ],
    entertainment: [
        { name: 'LED TV (32")', watts: 40, category: 'Entertainment' },
        { name: 'LED TV (43")', watts: 65, category: 'Entertainment' },
        { name: 'Home Theater', watts: 80, category: 'Entertainment' },
        { name: 'Gaming Console', watts: 150, category: 'Entertainment' },
        { name: 'Sound System', watts: 200, category: 'Entertainment' },
        { name: 'DSTV/Cable Box', watts: 30, category: 'Entertainment' }
    ],
    office: [
        { name: 'Laptop', watts: 65, category: 'Office' },
        { name: 'Desktop PC', watts: 150, category: 'Office' },
        { name: 'Printer', watts: 100, category: 'Office' },
        { name: 'Router', watts: 20, category: 'Office' },
    ],
    lighting: [
        { name: 'LED Bulb', watts: 9, category: 'Lighting' },
        { name: 'CFL Bulb', watts: 14, category: 'Lighting' },
        { name: 'Tube Light', watts: 36, category: 'Lighting' },
    ],
    others: [
        { name: 'Water Pump', watts: 750, category: 'Others' },
        { name: 'Iron', watts: 1000, category: 'Others' },
        { name: 'Washing Machine', watts: 500, category: 'Others' },
        { name: 'Security Light', watts: 20, category: 'Others' },
    ],
    security: [
        { name: 'CCTV System', watts: 100, category: 'Security' },
        { name: 'Electric Fence', watts: 500, category: 'Security' },
        { name: 'Security Lights', watts: 100, category: 'Security' }
    ],
    waterHeating: [
        { name: 'Water Heater', watts: 3000, category: 'WaterHeating' },
        { name: 'Instant Shower', watts: 4500, category: 'WaterHeating' }
    ],
    business: [
        { name: 'Salon Dryer', watts: 1200, category: 'Business', efficiency: 0.5 },
        { name: 'Barbing Machine', watts: 15, category: 'Business', efficiency: 0.9 },
        { name: 'POS Terminal', watts: 10, category: 'Business', efficiency: 0.95 },
        { name: 'Desktop Computer', watts: 200, category: 'Business', efficiency: 0.8 },
        { name: 'Printer', watts: 100, category: 'Business', efficiency: 0.7 },
        { name: 'CCTV System', watts: 50, category: 'Business', efficiency: 0.9 },
        { name: 'Cash Counter', watts: 40, category: 'Business', efficiency: 0.95 },
        { name: 'Card Reader', watts: 5, category: 'Business', efficiency: 0.98 }
    ],
    waterPumping: [
        { name: 'Surface Pump', watts: 750, category: 'WaterPumping', efficiency: 0.6 },
        { name: 'Borehole Pump', watts: 1500, category: 'WaterPumping', efficiency: 0.5 }
    ],
    retail: [
        { name: 'Display Freezer', watts: 800, category: 'Retail', efficiency: 0.6 },
        { name: 'Shop Lighting', watts: 200, category: 'Retail', efficiency: 0.8 },
        { name: 'Security Light', watts: 100, category: 'Retail', efficiency: 0.8 },
        { name: 'Digital Scale', watts: 10, category: 'Retail', efficiency: 0.95 }
    ]
}

// Add appliance categories and their typical usage patterns
const APPLIANCE_CATEGORIES = {
    cooling: { name: 'Cooling', efficiency: 0.7, tipPriority: 1 },
    lighting: { name: 'Lighting', efficiency: 0.8, tipPriority: 2 },
    kitchen: { name: 'Kitchen', efficiency: 0.6, tipPriority: 3 },
    entertainment: { name: 'Entertainment', efficiency: 0.9, tipPriority: 4 },
    laundry: { name: 'Laundry', efficiency: 0.65, tipPriority: 5 }
}

// Enhanced saving tips with product recommendations
const generateSavingTips = (appliances: Appliance[], totalUsage: number): SavingTip[] => {
    const tips: SavingTip[] = []

    // AC & Cooling Tips
    const coolingAppliances = appliances.filter(app =>
        app.name.toLowerCase().includes('ac') ||
        app.name.toLowerCase().includes('air') ||
        app.name.toLowerCase().includes('fan')
    )
    const totalCoolingUsage = coolingAppliances.reduce((acc, app) =>
        acc + (app.watts * app.hours * app.quantity) / 1000, 0
    )

    if (totalCoolingUsage > 5) {
        tips.push({
            tip: "High cooling energy detected. Install smart AC controllers for optimal efficiency.",
            impact: totalCoolingUsage * 0.3, // 30% potential savings
            category: 'cooling',
            products: [
                {
                    id: 'smart-ac-1',
                    name: 'Smart AC Controller Pro',
                    savings: 30,
                    description: 'AI-powered temperature optimization'
                },
                {
                    id: 'smart-fan-1',
                    name: 'Smart Ceiling Fan Controller',
                    savings: 20,
                    description: 'Automated speed control'
                }
            ]
        })
    }

    // Lighting Tips
    const lightingAppliances = appliances.filter(app =>
        app.name.toLowerCase().includes('bulb') ||
        app.name.toLowerCase().includes('light') ||
        app.name.toLowerCase().includes('lamp')
    )
    const totalLightingUsage = lightingAppliances.reduce((acc, app) =>
        acc + (app.watts * app.hours * app.quantity) / 1000, 0
    )

    if (totalLightingUsage > 1) {
        tips.push({
            tip: "Switch to smart LED lighting for significant savings",
            impact: totalLightingUsage * 0.8,
            category: 'lighting',
            products: [
                {
                    id: 'smart-bulb-1',
                    name: 'Smart LED Bulb Pack',
                    savings: 80,
                    description: 'Voice-controlled, dimmable'
                },
                {
                    id: 'motion-sensor-1',
                    name: 'Motion Sensor',
                    savings: 15,
                    description: 'Automatic light control'
                }
            ]
        })
    }

    // High Consumption Tips
    if (totalUsage > 15) {
        tips.push({
            tip: "Consider a solar power system for long-term savings",
            impact: totalUsage * 0.6,
            category: 'solar',
            products: [
                {
                    id: 'solar-1',
                    name: 'Solar Power System',
                    savings: 60,
                    description: 'Complete home solar solution'
                },
                {
                    id: 'inverter-1',
                    name: 'Hybrid Inverter',
                    savings: 40,
                    description: 'Smart power management'
                }
            ]
        })
    }

    return tips.sort((a, b) => b.impact - a.impact)
}

// Enhanced savings calculations
const calculateSavings = (appliance: Appliance) => {
    const dailyUsage = (appliance.watts * appliance.hours * appliance.quantity) / 1000
    const monthlyCost = dailyUsage * 30 * 225

    // Category-specific efficiency improvements
    const efficiencyMap = {
        'Cooling': 0.4, // 40% potential savings
        'Lighting': 0.8, // 80% potential savings
        'Kitchen': 0.25, // 25% potential savings
        'Entertainment': 0.2, // 20% potential savings
        'Security': 0.3, // 30% potential savings
        'WaterHeating': 0.5 // 50% potential savings
    }

    const efficiency = efficiencyMap[appliance.category as keyof typeof efficiencyMap] || 0.3
    return {
        potentialSavings: monthlyCost * efficiency,
        co2Reduction: dailyUsage * 0.85 * efficiency * 30
    }
}

// More product recommendations based on usage patterns
const generateProductRecommendations = (appliances: Appliance[], totalUsage: number) => {
    const recommendations: SavingTip[] = []

    // High power users
    if (totalUsage > 20) {
        recommendations.push({
            tip: "Install a complete solar power system",
            impact: totalUsage * 0.7,
            category: 'solar',
            products: [
                {
                    id: 'solar-premium',
                    name: 'Premium Solar Kit',
                    savings: 70,
                    description: '5kVA complete solution'
                },
                {
                    id: 'battery-premium',
                    name: 'Premium Battery Bank',
                    savings: 60,
                    description: '200Ah Lithium batteries'
                }
            ]
        })
    }

    // Security system users
    const hasSecuritySystem = appliances.some(app =>
        app.category === 'Security' && app.hours > 12
    )
    if (hasSecuritySystem) {
        recommendations.push({
            tip: "Upgrade to smart security system",
            impact: 2.5,
            category: 'security',
            products: [
                {
                    id: 'smart-security',
                    name: 'Smart Security Hub',
                    savings: 30,
                    description: 'Energy-efficient security management'
                }
            ]
        })
    }

    // Add more specific recommendations...
    return recommendations
}

// Enhanced savings visualization component
function SavingsVisualizer({ current, potential, savings }: {
    current: number;
    potential: number;
    savings: number;
}) {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl">
            <h4 className="font-medium mb-4">Potential Savings Breakdown</h4>
            <div className="relative h-20 flex items-end gap-4">
                <div className="flex-1 relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-t-lg">
                        <div
                            className="bg-blue-500 w-full absolute bottom-0 transition-all duration-1000"
                            style={{ height: '100%' }}
                        />
                    </div>
                    <div className="absolute -top-6 left-0 right-0 text-center">
                        <p className="text-sm text-gray-600">Current</p>
                        <p className="font-bold">₦{current.toLocaleString()}</p>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="absolute inset-0 bg-green-100 rounded-t-lg">
                        <div
                            className="bg-green-500 w-full absolute bottom-0 transition-all duration-1000"
                            style={{ height: `${(potential / current) * 100}%` }}
                        />
                    </div>
                    <div className="absolute -top-6 left-0 right-0 text-center">
                        <p className="text-sm text-gray-600">After Optimization</p>
                        <p className="font-bold text-green-600">₦{potential.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-white p-4 rounded-lg border border-green-100">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">Monthly Savings</p>
                    <p className="text-lg font-bold text-green-600">₦{savings.toLocaleString()}</p>
                </div>
                <div className="mt-2 h-2 bg-green-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-green-500 transition-all duration-1000"
                        style={{ width: `${(savings / current) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    )
}

// More accurate calculation function
const calculateDetailedUsage = (appliances: Appliance[]) => {
    const peakHours = [9, 10, 11, 12, 13, 14, 15, 16] // Peak usage hours
    const peakRate = 225 // Peak rate in Naira
    const offPeakRate = 190 // Off-peak rate

    return appliances.reduce((acc, app) => {
        const dailyUsage = (app.watts * app.hours * app.quantity) / 1000
        const peakHoursUsed = app.hours * (peakHours.length / 24) // Estimate peak hours usage
        const offPeakHoursUsed = app.hours - peakHoursUsed

        const peakCost = (app.watts * peakHoursUsed * app.quantity / 1000) * peakRate
        const offPeakCost = (app.watts * offPeakHoursUsed * app.quantity / 1000) * offPeakRate

        return {
            dailyUsage: acc.dailyUsage + dailyUsage,
            peakCost: acc.peakCost + peakCost,
            offPeakCost: acc.offPeakCost + offPeakCost,
            totalCost: acc.totalCost + peakCost + offPeakCost
        }
    }, { dailyUsage: 0, peakCost: 0, offPeakCost: 0, totalCost: 0 })
}

// Product matching function with more specific recommendations
const getRecommendedProducts = (usage: number, appliances: Appliance[]) => {
    const recommendations: Record<string, Product[]> = {
        immediate: [], // Quick wins
        essential: [], // Must-have solutions
        optional: []   // Nice-to-have upgrades
    }

    // Add product matching logic based on usage patterns and appliance types
    appliances.forEach(app => {
        const dailyUsage = (app.watts * app.hours * app.quantity) / 1000
        if (dailyUsage > 5) {
            // High consumption appliance recommendations
            recommendations.immediate.push({
                id: `smart-${app.category?.toLowerCase()}-1`,
                name: `Smart ${app.category} Controller`,
                description: `Optimize your ${app.name} usage and save up to 30%`,
                savings: 30,
                price: 25000
            })
        }
    })

    return recommendations
}

export function ConsumptionCalculator({ onCalculate }: { onCalculate: (results: any) => void }) {
    const [appliances, setAppliances] = useState<Appliance[]>([
        { name: 'AC (1.5HP)', watts: 1120, hours: 8, quantity: 1, category: 'Cooling' }
    ])
    const [activeCategory, setActiveCategory] = useState('cooling')
    const [isCalculating, setIsCalculating] = useState(false)
    const [results, setResults] = useState<Results | null>(null)
    const [errors, setErrors] = useState<Record<string, string>>({})

    // Enhanced savings calculation
    const calculateDetailedSavings = (appliance: Appliance) => {
        const dailyUsage = (appliance.watts * appliance.hours * appliance.quantity) / 1000
        const peakHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
        const peakRate = 225
        const offPeakRate = 190

        // Default to 0 if startHour is undefined
        const startHour = appliance.startHour || 0
        const peakHoursUsed = appliance.hours * (peakHours.filter(h =>
            h >= startHour && h < (startHour + appliance.hours)
        ).length / appliance.hours)

        const offPeakHoursUsed = appliance.hours - peakHoursUsed

        return {
            peakUsage: (appliance.watts * peakHoursUsed * appliance.quantity) / 1000,
            offPeakUsage: (appliance.watts * offPeakHoursUsed * appliance.quantity) / 1000,
            potentialSavings: dailyUsage * (1 - (appliance.efficiency || 0.7)) * 225 * 30
        }
    }

    // Reset function to fix calculator toggle
    const resetCalculator = () => {
        setAppliances([{ name: 'AC (1.5HP)', watts: 1120, hours: 8, quantity: 1, category: 'Cooling' }])
        setActiveCategory('cooling')
        setIsCalculating(false)
        setResults(null)
        setErrors({})
    }

    useEffect(() => {
        resetCalculator()
    }, [])

    const validateInputs = () => {
        const newErrors: Record<string, string> = {}
        appliances.forEach((app, index) => {
            if (!app.name) newErrors[`name-${index}`] = 'Please enter appliance name'
            if (!app.watts) newErrors[`watts-${index}`] = 'Power rating required'
            if (app.watts > 5000) newErrors[`watts-${index}`] = 'Value seems too high. Please verify.'
            if (!app.hours) newErrors[`hours-${index}`] = 'Usage hours required'
            if (app.hours > 24) newErrors[`hours-${index}`] = 'Cannot exceed 24 hours per day'
            if (app.quantity < 1) newErrors[`quantity-${index}`] = 'Minimum quantity is 1'
            if (app.quantity > 20) newErrors[`quantity-${index}`] = 'Maximum quantity is 20'
        })
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const calculateUsage = () => {
        if (!validateInputs()) return
        setIsCalculating(true)

        const calculations = appliances.map(app => calculateDetailedSavings(app))
        const totalPeakUsage = calculations.reduce((sum, calc) => sum + calc.peakUsage, 0)
        const totalOffPeakUsage = calculations.reduce((sum, calc) => sum + calc.offPeakUsage, 0)
        const totalSavings = calculations.reduce((sum, calc) => sum + calc.potentialSavings, 0)

        const results: Results = {
            dailyUsage: totalPeakUsage + totalOffPeakUsage,
            peakUsage: totalPeakUsage,
            offPeakUsage: totalOffPeakUsage,
            monthlyCost: (totalPeakUsage * 225 + totalOffPeakUsage * 190) * 30,
            yearlyUsage: (totalPeakUsage + totalOffPeakUsage) * 365,
            yearlyCost: (totalPeakUsage * 225 + totalOffPeakUsage * 190) * 365,
            potentialSavings: totalSavings,
            highestConsumer: findHighestConsumer(),
            savingTips: generateSavingTips(appliances, totalPeakUsage + totalOffPeakUsage)
        }

        setTimeout(() => {
            setResults(results)
            setIsCalculating(false)
            onCalculate(results)
        }, 1000)
    }

    const findHighestConsumer = () => {
        return appliances.reduce((max, current) => {
            const consumption = (current.watts * current.hours * current.quantity) / 1000
            return consumption > (max?.consumption || 0)
                ? { name: current.name, consumption, category: current.category || 'unknown' }
                : max
        }, { name: appliances[0].name, consumption: 0, category: appliances[0].category || 'unknown' })
    }

    const addAppliance = () => {
        setAppliances([...appliances, { name: '', watts: 0, hours: 0, quantity: 1 }])
    }

    const removeAppliance = (index: number) => {
        setAppliances(appliances.filter((_, i) => i !== index))
    }

    const updateAppliance = (index: number, field: keyof Appliance, value: string | number) => {
        const newAppliances = [...appliances]
        newAppliances[index] = {
            ...newAppliances[index],
            [field]: typeof value === 'string' ? value : Number(value)
        }
        setAppliances(newAppliances)
    }

    return (
        <Card className="p-6">
            {/* Preset Appliances Section */}
            <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Quick Add Common Appliances:</h4>
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    {Object.keys(PRESET_APPLIANCES).map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveCategory(category)}
                            className="whitespace-nowrap"
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Button>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {PRESET_APPLIANCES[activeCategory as keyof typeof PRESET_APPLIANCES].map((appliance) => (
                        <Button
                            key={appliance.name}
                            variant="outline"
                            size="sm"
                            onClick={() => {
                                setAppliances([...appliances, { ...appliance, hours: 0, quantity: 1 }])
                            }}
                            className="text-xs justify-start"
                        >
                            <div className="flex justify-between w-full">
                                <span>{appliance.name}</span>
                                <span className="text-gray-500">{appliance.watts}W</span>
                            </div>
                        </Button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                {appliances.map((appliance, index) => (
                    <div key={index} className="grid grid-cols-12 gap-4 items-start">
                        <div className="col-span-4">
                            <Input
                                placeholder="Appliance name"
                                value={appliance.name}
                                onChange={(e) => updateAppliance(index, 'name', e.target.value)}
                                className={errors[`name-${index}`] ? 'border-red-500' : ''}
                            />
                            {errors[`name-${index}`] && (
                                <p className="text-red-500 text-xs mt-1">{errors[`name-${index}`]}</p>
                            )}
                        </div>
                        <div className="col-span-3">
                            <Input
                                type="number"
                                placeholder="Watts"
                                value={appliance.watts || ''}
                                onChange={(e) => updateAppliance(index, 'watts', e.target.value)}
                                className={errors[`watts-${index}`] ? 'border-red-500' : ''}
                            />
                            {errors[`watts-${index}`] && (
                                <p className="text-red-500 text-xs mt-1">{errors[`watts-${index}`]}</p>
                            )}
                        </div>
                        <div className="col-span-2">
                            <Input
                                type="number"
                                placeholder="Hours"
                                value={appliance.hours || ''}
                                onChange={(e) => updateAppliance(index, 'hours', e.target.value)}
                                className={errors[`hours-${index}`] ? 'border-red-500' : ''}
                            />
                            {errors[`hours-${index}`] && (
                                <p className="text-red-500 text-xs mt-1">{errors[`hours-${index}`]}</p>
                            )}
                        </div>
                        <div className="col-span-2">
                            <Input
                                type="number"
                                placeholder="Qty"
                                value={appliance.quantity || ''}
                                onChange={(e) => updateAppliance(index, 'quantity', e.target.value)}
                                min="1"
                                className={errors[`quantity-${index}`] ? 'border-red-500' : ''}
                            />
                        </div>
                        <div className="col-span-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeAppliance(index)}
                                className="text-gray-400 hover:text-red-500"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ))}

                <Button
                    variant="outline"
                    onClick={addAppliance}
                    className="w-full"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Appliance
                </Button>
            </div>

            <Button
                className="w-full mt-6"
                onClick={calculateUsage}
                disabled={isCalculating}
            >
                {isCalculating ? (
                    <div className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                        <span>Calculating...</span>
                    </div>
                ) : (
                    'Calculate Usage'
                )}
            </Button>

            {isCalculating && (
                <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#003366] border-t-transparent mx-auto mb-4"></div>
                        <p className="text-[#003366] font-medium mb-2">Analyzing your usage...</p>
                        <p className="text-sm text-gray-500">Calculating consumption patterns</p>
                    </div>
                </div>
            )}

            {results && (
                <div className="mt-8 space-y-6 animate-in fade-in-50">
                    {/* Primary Metrics */}
                    <div className="bg-gradient-to-r from-[#003366]/10 to-[#003366]/5 rounded-xl p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Daily Consumption</p>
                                <p className="text-2xl font-bold text-[#003366]">
                                    {results.dailyUsage.toFixed(2)} kWh
                                </p>
                            </div>
                            <div className="bg-white/50 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 mb-1">Monthly Cost</p>
                                <p className="text-2xl font-bold text-[#003366]">
                                    ₦{results.monthlyCost.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Metrics */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg border">
                            <p className="text-sm text-gray-600 mb-1">Yearly Usage</p>
                            <p className="text-xl font-semibold text-[#003366]">
                                {results.yearlyUsage.toFixed(1)} kWh
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                            <p className="text-sm text-gray-600 mb-1">Yearly Cost</p>
                            <p className="text-xl font-semibold text-[#003366]">
                                ₦{results.yearlyCost.toLocaleString()}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                            <p className="text-sm text-gray-600 mb-1">Potential Monthly Savings</p>
                            <p className="text-xl font-semibold text-green-600">
                                ₦{(results.potentialSavings).toLocaleString()}
                            </p>
                        </div>
                    </div>

                    {/* Saving Tips and Product Recommendations */}
                    <div className="bg-white p-6 rounded-xl border">
                        <h4 className="font-medium text-gray-800 mb-4">Personalized Recommendations</h4>
                        <div className="space-y-4">
                            {results.savingTips.map((tip, index) => (
                                <TipCard key={index} tip={tip} />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-4 flex items-start gap-2 text-sm text-gray-600">
                <AlertCircle className="h-4 w-4 mt-0.5 text-yellow-500" />
                <p>
                    Calculations are based on the Band A rate (₦225/kWh).
                    Actual costs may vary based on your DisCo and service band.
                </p>
            </div>
        </Card>
    )
}

// Helper components for visualization
function MetricCard({ icon, label, value, color }: any) {
    return (
        <div className="bg-white p-4 rounded-lg border">
            <div className={`${color} mb-2`}>{icon}</div>
            <p className="text-sm text-gray-600">{label}</p>
            <p className="text-xl font-semibold">{value}</p>
        </div>
    )
}

function TipCard({ tip }: { tip: SavingTip }) {
    return (
        <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                    <p className="font-medium">{tip.tip}</p>
                    <p className="text-sm text-gray-600">
                        Potential savings: {tip.impact.toFixed(1)} kWh/day
                    </p>
                </div>
            </div>
            {tip.products && (
                <div className="mt-3 grid grid-cols-2 gap-2">
                    {tip.products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="block p-3 rounded-lg border hover:bg-blue-50 transition-colors"
                        >
                            <p className="font-medium text-sm">{product.name}</p>
                            <p className="text-xs text-green-600">Save up to {product.savings}%</p>
                            <p className="text-xs text-gray-500 mt-1">{product.description}</p>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}