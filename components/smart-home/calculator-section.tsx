'use client'

import { ConsumptionCalculator } from '@/app/learn/components/consumption-calculator'
import { ArrowRight, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const handleCalculate = (results: any) => {
    console.log(results)
}

export function CalculatorSection() {
    return (
        <section className="py-32 px-4 bg-gradient-to-br from-[#003366]/5 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="px-4 py-2 rounded-full bg-[#003366]/5 text-[#003366] text-sm font-medium inline-flex items-center gap-2">
                        <Calculator className="h-4 w-4" />
                        Energy Calculator
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
                        Calculate Your Energy Usage
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                        Understand your consumption patterns and identify opportunities for savings.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <ConsumptionCalculator onCalculate={handleCalculate} />
                    </div>

                    <div className="space-y-8">
                        <div className="bg-[#003366] text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4">Why Calculate?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="h-5 w-5 mt-1" />
                                    <span>Plan your inverter capacity needs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="h-5 w-5 mt-1" />
                                    <span>Estimate monthly electricity costs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ArrowRight className="h-5 w-5 mt-1" />
                                    <span>Identify energy-hungry appliances</span>
                                </li>
                            </ul>
                            <Link href="/calculator" className="block mt-6">
                                <Button className="w-full bg-white text-[#003366] hover:bg-[#87CEEB] hover:text-white">
                                    Detailed Calculator
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="font-semibold mb-4">Pro Tip</h3>
                            <p className="text-gray-700">
                                Most Nigerian homes can save up to 40% on energy costs by identifying and optimizing their high-consumption appliances.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 