'use client'

import { useState } from 'react'
import { Card } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Slider } from "../../components/ui/slider"
import { Sun, Battery, Zap } from 'lucide-react'

interface CalculationResult {
    systemSize: number
    panels: number
    batteries: number
    estimatedCost: number
    monthlySavings: number
}

export function SolarCalculator() {
    const [dailyUsage, setDailyUsage] = useState(10)
    const [sunHours, setSunHours] = useState(5)
    const [result, setResult] = useState<CalculationResult | null>(null)

    const calculateSystem = () => {
        // Basic solar system calculation
        const systemSize = (dailyUsage * 1.3) / sunHours // Adding 30% for losses
        const panels = Math.ceil(systemSize / 0.4) // Assuming 400W panels
        const batteries = Math.ceil(dailyUsage * 1.5 / 2.4) // Assuming 2.4kWh per battery

        setResult({
            systemSize: Math.round(systemSize * 10) / 10,
            panels,
            batteries,
            estimatedCost: Math.round(systemSize * 350000), // Rough estimate
            monthlySavings: Math.round(dailyUsage * 30 * 225) // Based on electricity rate
        })
    }

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <div>
                    <label className="text-sm font-medium">Daily Energy Usage (kWh)</label>
                    <div className="flex gap-4">
                        <Slider
                            value={[dailyUsage]}
                            onValueChange={([value]) => setDailyUsage(value)}
                            min={1}
                            max={50}
                            step={0.5}
                            className="flex-1"
                        />
                        <Input
                            type="number"
                            value={dailyUsage}
                            onChange={(e) => setDailyUsage(Number(e.target.value))}
                            className="w-20"
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium">Peak Sun Hours</label>
                    <div className="flex gap-4">
                        <Slider
                            value={[sunHours]}
                            onValueChange={([value]) => setSunHours(value)}
                            min={3}
                            max={7}
                            step={0.5}
                            className="flex-1"
                        />
                        <Input
                            type="number"
                            value={sunHours}
                            onChange={(e) => setSunHours(Number(e.target.value))}
                            className="w-20"
                        />
                    </div>
                </div>
                <Button
                    onClick={calculateSystem}
                    className="w-full bg-[#003366] hover:bg-[#002244]"
                >
                    Calculate System
                </Button>
            </div>

            {result && (
                <Card className="p-6 space-y-6">
                    <h3 className="font-semibold text-lg">Recommended System</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[#003366]">
                                <Sun className="h-5 w-5" />
                                <span className="font-medium">System Size</span>
                            </div>
                            <p className="text-2xl font-bold">{result.systemSize}kW</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[#003366]">
                                <Battery className="h-5 w-5" />
                                <span className="font-medium">Solar Panels</span>
                            </div>
                            <p className="text-2xl font-bold">{result.panels} panels</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[#003366]">
                                <Zap className="h-5 w-5" />
                                <span className="font-medium">Batteries</span>
                            </div>
                            <p className="text-2xl font-bold">{result.batteries} units</p>
                        </div>
                    </div>
                    <div className="pt-4 border-t">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-600">Estimated Cost</p>
                                <p className="text-2xl font-bold">₦{result.estimatedCost.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Monthly Savings</p>
                                <p className="text-2xl font-bold text-green-600">
                                    ₦{result.monthlySavings.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
            )}
        </div>
    )
} 