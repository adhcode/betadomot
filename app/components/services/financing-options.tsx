'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, CreditCard, Building2, ArrowRight } from 'lucide-react'

export function FinancingOptions() {
    return (
        <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">Flexible Payment Options</h2>
                <p className="text-gray-600">
                    Choose from our range of financing solutions to make your solar investment more manageable.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full -mr-12 -mt-12" />
                    <div className="relative">
                        <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                            <CreditCard className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Installment Plan</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="text-sm text-gray-600">
                                • Up to 12 months payment plan
                            </li>
                            <li className="text-sm text-gray-600">
                                • Low initial deposit
                            </li>
                            <li className="text-sm text-gray-600">
                                • 0% interest options available
                            </li>
                            <li className="text-sm text-gray-600">
                                • Flexible monthly payments
                            </li>
                        </ul>
                        <Button variant="outline" className="w-full">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </Card>

                <Card className="p-6 relative overflow-hidden border-2 border-[#003366]">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12" />
                    <div className="relative">
                        <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                            <Building2 className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Bank Financing</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="text-sm text-gray-600">
                                • Partnership with major banks
                            </li>
                            <li className="text-sm text-gray-600">
                                • Up to 36 months repayment
                            </li>
                            <li className="text-sm text-gray-600">
                                • Competitive interest rates
                            </li>
                            <li className="text-sm text-gray-600">
                                • Quick approval process
                            </li>
                        </ul>
                        <Button className="w-full bg-[#003366] hover:bg-[#002244]">
                            Check Eligibility
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </Card>

                <Card className="p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-full -mr-12 -mt-12" />
                    <div className="relative">
                        <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                            <Calculator className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Rent-to-Own</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="text-sm text-gray-600">
                                • No large upfront payment
                            </li>
                            <li className="text-sm text-gray-600">
                                • Pay from energy savings
                            </li>
                            <li className="text-sm text-gray-600">
                                • Ownership transfer after term
                            </li>
                            <li className="text-sm text-gray-600">
                                • Maintenance included
                            </li>
                        </ul>
                        <Button variant="outline" className="w-full">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </Card>
            </div>

            <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 mb-4">
                    All financing options subject to approval. Terms and conditions apply.
                </p>
                <Button variant="link" className="text-[#003366]">
                    Download Financing Guide
                </Button>
            </div>
        </div>
    )
} 