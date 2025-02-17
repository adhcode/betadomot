'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SavingsCalculator() {
    const [monthlyBill, setMonthlyBill] = useState('')
    const [generatorHours, setGeneratorHours] = useState('')
    const [fuelCost, setFuelCost] = useState('')

    const calculateSavings = () => {
        // Calculation logic here
    }

    return (
        <Card className="p-6">
            <div className="space-y-4">
                <Input
                    type="number"
                    placeholder="Monthly Electricity Bill (₦)"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="Daily Generator Hours"
                    value={generatorHours}
                    onChange={(e) => setGeneratorHours(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="Fuel Cost per Litre (₦)"
                    value={fuelCost}
                    onChange={(e) => setFuelCost(e.target.value)}
                />
                <Button onClick={calculateSavings} className="w-full">
                    Calculate Savings
                </Button>
            </div>
        </Card>
    )
} 