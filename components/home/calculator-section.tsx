'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calculator, ArrowRight } from "lucide-react"
import { spacing, theme } from "@/lib/constants"
import { fadeIn } from "@/lib/animations"
import { useState } from "react"

export function CalculatorSection() {
    const [monthlyBill, setMonthlyBill] = useState('')
    const [generatorHours, setGeneratorHours] = useState('')
    const [results, setResults] = useState<any>(null)

    const handleCalculate = () => {
        // Add calculation logic here
        setResults({
            monthlySavings: 50000,
            yearlySavings: 600000,
            roi: "12 months"
        })
    }

    return (
        <section className={`${spacing.section} bg-gray-50`}>
            <div className={spacing.container}>
                <motion.div
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <div className={spacing.sectionHead}>
                        <span className={`text-sm font-medium text-[${theme.colors.primary}]`}>
                            Energy Calculator
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                            Calculate Your Savings
                        </h2>
                    </div>

                    <div className="space-y-6">
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
                        <Button
                            onClick={handleCalculate}
                            className={`w-full bg-[${theme.colors.dark}] hover:bg-[${theme.colors.primary}]`}
                        >
                            Calculate Savings
                            <Calculator className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    {results && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 p-6 bg-white rounded-lg shadow-sm"
                        >
                            {/* Results display */}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
} 