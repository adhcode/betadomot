'use client'

import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Zap, Sun, Battery, Thermometer,
  ArrowRight, Calculator, LineChart,
  Lightbulb, Coins, Shield, Info, Home
} from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ConsumptionCalculator } from './learn/components/consumption-calculator'
import { getProductsByCategory, type Product } from '@/data/products'
import { ProductSuggestion } from '@/components/products/product-suggestion'

// Enhanced Calculator with validation and animations
const EnergyCalculator = ({ onCalculate }: { onCalculate: (results: any) => void }) => {
  const [monthlyBill, setMonthlyBill] = useState<string>('')
  const [generatorHours, setGeneratorHours] = useState<string>('')
  const [fuelCost, setFuelCost] = useState<string>('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isCalculating, setIsCalculating] = useState(false)
  const [savings, setSavings] = useState({ current: 0, potential: 0, monthly: 0 })

  const validateInputs = () => {
    const newErrors: Record<string, string> = {}

    const billAmount = parseFloat(monthlyBill)
    const hours = parseFloat(generatorHours)
    const fuel = parseFloat(fuelCost)

    if (billAmount && billAmount > 1000000) {
      newErrors.monthlyBill = 'Amount seems too high'
    }
    if (hours && hours > 24) {
      newErrors.generatorHours = 'Cannot exceed 24 hours'
    }
    if (fuel && fuel > 2000) {
      newErrors.fuelCost = 'Amount seems too high'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputBlur = () => {
    if (monthlyBill && generatorHours && fuelCost) {
      calculateSavings()
    }
  }

  const calculateSavings = () => {
    if (!validateInputs()) {
      setSavings({ current: 0, potential: 0, monthly: 0 })
      return
    }

    setIsCalculating(true)
    const bill = parseFloat(monthlyBill) || 0
    const hours = parseFloat(generatorHours) || 0
    const fuel = parseFloat(fuelCost) || 0

    setTimeout(() => {
      const annualElectricCost = bill * 12
      const annualFuelCost = hours * 30 * 12 * (fuel / 8)
      const totalCurrent = annualElectricCost + annualFuelCost
      const potentialSavings = totalCurrent * 0.4

      setSavings({
        current: totalCurrent,
        potential: potentialSavings,
        monthly: potentialSavings / 12
      })
      setIsCalculating(false)

      onCalculate({
        monthlyCost: bill + (hours * 30 * (fuel / 8)),
        potentialSavings: potentialSavings / 12
      })
    }, 1000)
  }

  return (
    <Card className="p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        Energy Savings Calculator
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-4 w-4 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">
                Calculate potential savings based on your current energy costs.
                We estimate a 40% reduction through our optimization recommendations.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            Monthly Electricity Bill (₦)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Enter your average monthly NEPA/PHCN bill</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <div className="relative">
            <Input
              type="text"
              value={monthlyBill}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '')
                setMonthlyBill(value)
                setErrors({ ...errors, monthlyBill: '' })
              }}
              onBlur={handleInputBlur}
              placeholder="e.g. 25000"
              className={`pr-10 focus:ring-2 ${errors.monthlyBill
                ? 'focus:ring-red-500 border-red-300'
                : 'focus:ring-green-500'
                }`}
            />
            {monthlyBill && (
              <button
                onClick={() => setMonthlyBill('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
          {errors.monthlyBill && (
            <p className="text-red-500 text-xs mt-1">{errors.monthlyBill}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            Daily Generator Hours
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Average hours your generator runs per day</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <div className="relative">
            <Input
              type="text"
              value={generatorHours}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '')
                setGeneratorHours(value)
                setErrors({ ...errors, generatorHours: '' })
              }}
              onBlur={handleInputBlur}
              placeholder="e.g. 8"
              className={`pr-10 focus:ring-2 ${errors.generatorHours
                ? 'focus:ring-red-500 border-red-300'
                : 'focus:ring-green-500'
                }`}
            />
            {generatorHours && (
              <button
                onClick={() => setGeneratorHours('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
          {errors.generatorHours && (
            <p className="text-red-500 text-xs mt-1">{errors.generatorHours}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            Fuel Cost per Liter (₦)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Current price of fuel/diesel per liter</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <div className="relative">
            <Input
              type="text"
              value={fuelCost}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, '')
                setFuelCost(value)
                setErrors({ ...errors, fuelCost: '' })
              }}
              onBlur={handleInputBlur}
              placeholder="e.g. 700"
              className={`pr-10 focus:ring-2 ${errors.fuelCost
                ? 'focus:ring-red-500 border-red-300'
                : 'focus:ring-green-500'
                }`}
            />
            {fuelCost && (
              <button
                onClick={() => setFuelCost('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
          {errors.fuelCost && (
            <p className="text-red-500 text-xs mt-1">{errors.fuelCost}</p>
          )}
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#003366]/10 to-[#003366]/5 p-6 rounded-lg">
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`text-center p-4 bg-white rounded-lg shadow-sm transform transition-all duration-500 ${isCalculating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
            }`}>
            <p className="text-sm text-gray-600 mb-2">Current Annual Cost</p>
            <p className={`text-3xl font-bold text-[#003366] transition-all duration-500 ${isCalculating ? 'opacity-50' : 'opacity-100'
              }`}>
              ₦{savings?.current.toLocaleString() ?? '0'}
            </p>
          </div>
          <div className={`text-center p-4 bg-white rounded-lg shadow-sm transform transition-all duration-500 ${isCalculating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
            }`}>
            <p className="text-sm text-gray-600 mb-2">Annual Savings</p>
            <p className={`text-3xl font-bold text-green-600 transition-all duration-500 ${isCalculating ? 'opacity-50' : 'opacity-100'
              }`}>
              ₦{savings?.potential.toLocaleString() ?? '0'}
            </p>
          </div>
          <div className={`text-center p-4 bg-white rounded-lg shadow-sm transform transition-all duration-500 ${isCalculating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
            }`}>
            <p className="text-sm text-gray-600 mb-2">Monthly Savings</p>
            <p className={`text-3xl font-bold text-green-600 transition-all duration-500 ${isCalculating ? 'opacity-50' : 'opacity-100'
              }`}>
              ₦{savings?.monthly.toLocaleString() ?? '0'}
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

// Update the customer benefits with more Nigerian context and interactivity
const customerBenefits = [
  {
    icon: Zap,
    title: "Lower Energy Bills",
    description: "Reduce your electricity costs with smart consumption strategies",
    details: [
      "Monitor real-time electricity usage",
      "Optimize peak vs off-peak consumption",
      "Identify energy-hungry appliances",
      "Track monthly spending patterns"
    ],
    href: "/learn/reduce-energy-bills"
  },
  {
    icon: Shield,
    title: "Protect Your Appliances",
    description: "Extend the lifespan of your valuable home equipment",
    details: [
      "Prevent voltage fluctuation damage",
      "Optimize appliance usage cycles",
      "Implement surge protection",
      "Schedule maintenance alerts"
    ],
    href: "/learn/appliance-protection"
  },
  {
    icon: Home,
    title: "Home Comfort",
    description: "Maintain comfort while maximizing energy efficiency",
    details: [
      "Smart temperature management",
      "Efficient lighting solutions",
      "Backup power optimization",
      "Automated energy control"
    ],
    href: "/learn/home-comfort"
  }
]

const calculatorTypes = [
  {
    id: 'consumption',
    icon: Calculator,
    title: "Daily Usage Calculator",
    description: "Find out how much power your home actually needs",
    benefits: [
      "Understand your daily power consumption",
      "Size your inverter or solar system correctly",
      "Identify energy-hungry appliances",
      "Plan backup power duration"
    ],
    explanation: "This calculator helps you list all your appliances and their usage hours. It then calculates your total daily power needs in kilowatt-hours (kWh). This is essential for choosing the right backup power solution."
  },
  {
    id: 'savings',
    icon: LineChart,
    title: "Savings Calculator",
    description: "See how much you could save on power costs",
    benefits: [
      "Calculate current power expenses",
      "See potential monthly savings",
      "Compare different energy solutions",
      "Estimate ROI on upgrades"
    ],
    explanation: "Enter your current electricity bill and generator usage to see how much you're spending. The calculator shows potential savings from energy-efficient solutions and better power management."
  }
]

export default function HomePage() {
  const [selectedCalculator, setSelectedCalculator] = useState<string>('consumption')
  const [calculationResults, setCalculationResults] = useState<{
    dailyUsage?: number;
    monthlyCost?: number;
    potentialSavings?: number;
  } | null>(null)
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([])
  const [showCalculator, setShowCalculator] = useState(false)
  const [calculatorState, setCalculatorState] = useState<'idle' | 'calculating' | 'complete'>('idle')
  const [transitionDirection, setTransitionDirection] = useState<'in' | 'out'>('in')

  const handleCalculationResults = (results: any) => {
    setCalculatorState('calculating')
    setCalculationResults(results)

    setTimeout(() => {
      let relevantProducts: Product[] = []

      if (results.dailyUsage) {
        // For high consumption users (>15 kWh/day)
        if (results.dailyUsage > 15) {
          relevantProducts = [
            ...getProductsByCategory('solar').filter(p =>
              p.specifications?.capacity && Number(p.specifications.capacity) >= results.dailyUsage
            ),
            ...getProductsByCategory('inverters').filter(p =>
              p.specifications?.capacity && Number(p.specifications.capacity) >= results.dailyUsage * 1.3
            ),
            ...getProductsByCategory('smart-devices').filter(p =>
              p.category === 'energy-management'
            )
          ]
        }
        // For medium consumption users (5-15 kWh/day)
        else if (results.dailyUsage > 5) {
          relevantProducts = [
            ...getProductsByCategory('inverters').filter(p =>
              p.specifications?.capacity && Number(p.specifications.capacity) >= results.dailyUsage * 1.2
            ),
            ...getProductsByCategory('smart-devices').filter(p =>
              p.category === 'energy-management'
            ),
            ...getProductsByCategory('accessories').filter(p =>
              p.category === 'energy-saving'
            )
          ]
        }
        // For low consumption users (<5 kWh/day)
        else {
          relevantProducts = [
            ...getProductsByCategory('smart-devices'),
            ...getProductsByCategory('accessories').filter(p =>
              p.category === 'energy-saving'
            )
          ]
        }

        // Add recommendations based on highest consuming appliance
        if (results.highestConsumer) {
          const applianceType = results.highestConsumer.name.toLowerCase()
          if (applianceType.includes('ac')) {
            relevantProducts.push(...getProductsByCategory('smart-devices').filter(p =>
              p.category === 'ac-control'
            ))
          }
        }
      }

      // Ensure we have unique products
      const uniqueProducts = Array.from(new Set(relevantProducts.map(p => p.id)))
        .map(id => relevantProducts.find(p => p.id === id)!)
        .slice(0, 3) as Product[]

      setRecommendedProducts(uniqueProducts)
      setCalculatorState('complete')
    }, 1500)
  }

  const handleCalculatorToggle = () => {
    setShowCalculator(prev => !prev)
    if (!showCalculator) {
      setCalculatorState('idle')
      setRecommendedProducts([])
      setCalculationResults(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10 
                animate-slide-in-left hover:translate-x-2 
                transition-all duration-500 ease-out cursor-default"
              >
                Smart Energy Solutions for Nigerian Homes
              </h1>
              <p className="text-xl mb-8 text-gray-200 
                animate-slide-up animation-delay-200
                hover:text-white transition-colors duration-300"
              >
                Learn how to optimize your home's energy use, reduce costs,
                and ensure reliable power supply with our expert guides and solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
                <Link href="/learn" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full relative overflow-hidden group 
                        bg-gradient-to-r from-white to-gray-100
                        hover:from-gray-50 hover:to-white
                        text-[#003366] font-semibold
                        shadow-[0_4px_20px_-4px_rgba(255,255,255,0.3)]
                        hover:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.5)]
                        transform hover:-translate-y-1 active:translate-y-0
                        transition-all duration-300 ease-out
                        border-0 hover:scale-[1.02]"
                  >
                    <span className="relative z-10 flex items-center justify-center 
                        group-hover:text-[#004488] transition-all duration-300">
                      Start Learning
                      <ArrowRight className="ml-2 h-5 w-5 transform 
                            group-hover:translate-x-3 group-hover:scale-110
                            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/60 
                        transform scale-x-0 group-hover:scale-x-100 
                        transition-transform duration-500 origin-left" />
                  </Button>
                </Link>
                <Link href="/services/energy-assessment" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full relative overflow-hidden group
                        bg-transparent border-2 border-white/70
                        hover:border-white text-white
                        shadow-[0_4px_20px_-4px_rgba(255,255,255,0.1)]
                        hover:shadow-[0_8px_30px_-4px_rgba(255,255,255,0.4)]
                        transform hover:-translate-y-1 active:translate-y-0
                        transition-all duration-300 ease-out
                        hover:scale-[1.02]
                        hover:bg-white/10"
                  >
                    <span className="relative z-10 flex items-center justify-center 
                        group-hover:text-white transition-all duration-300">
                      Get Assessment
                      <ArrowRight className="ml-2 h-5 w-5 transform 
                            group-hover:translate-x-3 group-hover:scale-110
                            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r 
                        from-white/5 via-white/20 to-white/5 
                        transform -translate-x-full group-hover:translate-x-full 
                        transition-transform duration-1000 ease-in-out" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/illustrations/smart-home.svg"
                alt="Smart home energy management"
                fill
                className="object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div id="calculators" className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Calculate & Save</h2>
          {/* Calculator type selection buttons */}
          <div className="grid md:grid-cols-2 gap-8">
            {calculatorTypes.map((calc) => (
              <Card key={calc.id} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-[#003366]/10 p-3 rounded-lg">
                      <calc.icon className="h-6 w-6 text-[#003366]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{calc.title}</h3>
                      <p className="text-sm text-gray-600">{calc.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-left mb-2">How it works:</h4>
                      <p className="text-sm text-left text-gray-600">{calc.explanation}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium">This calculator helps you:</h4>
                      <ul className="space-y-2">
                        {calc.benefits.map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="mt-1.5">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                            </div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    className="w-full relative overflow-hidden group 
                        bg-gradient-to-r from-[#003366] to-[#004488]
                        hover:from-[#004488] hover:to-[#003366]
                        text-white font-semibold
                        shadow-md hover:shadow-xl
                        transform hover:-translate-y-1 active:translate-y-0
                        transition-all duration-300 ease-out
                        hover:scale-[1.02]"
                    onClick={() => {
                      setSelectedCalculator(calc.id)
                      handleCalculatorToggle()
                    }}
                  >
                    <span className="flex items-center justify-center">
                      Use Calculator
                      <ArrowRight className="ml-2 h-4 w-4 transform 
                            group-hover:translate-x-3 group-hover:scale-110
                            transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                    </span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Calculator */}
        {showCalculator && (
          <div className={`mt-8 transition-all duration-500 ${transitionDirection === 'in' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <Card className="overflow-hidden">
              <div className="bg-[#003366] p-4 text-white flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  {selectedCalculator === 'consumption' ? 'Daily Power Usage' : 'Potential Savings'}
                </h3>
                <Button
                  variant="ghost"
                  className="text-white hover:text-white/90 relative overflow-hidden group
                      hover:bg-white/10
                      transform hover:-translate-y-1 active:translate-y-0
                      transition-all duration-300 ease-out"
                  onClick={handleCalculatorToggle}
                >
                  <span className="flex items-center justify-center">
                    Close
                  </span>
                </Button>
              </div>
              <div className="p-6">
                {/* Instructions Panel */}
                <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Instructions:</h4>
                  {selectedCalculator === 'consumption' ? (
                    <ol className="space-y-2 text-sm text-gray-600">
                      <li>1. Add each appliance you use regularly</li>
                      <li>2. Enter the power rating in watts (check the appliance label)</li>
                      <li>3. Specify daily usage hours</li>
                      <li>4. View your total consumption and cost analysis</li>
                    </ol>
                  ) : (
                    <ol className="space-y-2 text-sm text-gray-600">
                      <li>1. Enter your average monthly NEPA/PHCN bill</li>
                      <li>2. Input daily generator running hours</li>
                      <li>3. Specify current fuel cost per liter</li>
                      <li>4. See your potential monthly and annual savings</li>
                    </ol>
                  )}
                </div>

                {/* Loading Overlay */}
                <div className={`relative ${calculatorState === 'calculating' ? 'pointer-events-none' : ''}`}>
                  {calculatorState === 'calculating' && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003366] mb-4"></div>
                        <p className="text-[#003366] font-medium">Analyzing your usage...</p>
                      </div>
                    </div>
                  )}

                  {selectedCalculator === 'consumption' ? (
                    <ConsumptionCalculator
                      onCalculate={(results) => handleCalculationResults(results)}
                    />
                  ) : (
                    <EnergyCalculator
                      onCalculate={(results) => handleCalculationResults(results)}
                    />
                  )}
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Enhanced Product Recommendations */}
        {recommendedProducts.length > 0 && (
          <div className={`mt-16 transition-all duration-500 ${calculatorState === 'complete' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Recommended Solutions</h3>
              <p className="text-gray-600">
                Based on your usage patterns, here are the most cost-effective solutions for your needs:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {recommendedProducts.map((product) => (
                <ProductSuggestion
                  key={product.id}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  savings={product.savings}
                  image={product.image}
                  href={`/products/${product.id}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Customer Benefits Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Save Energy?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Smart energy management in Nigeria goes beyond cost savings.
              Protect your appliances, ensure reliable power, and enjoy a
              more comfortable home—while saving up to 40% on monthly bills.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {customerBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 
                    transform hover:-translate-y-1 hover:scale-[1.02]
                    bg-gradient-to-b from-white to-gray-50/50"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative group-hover:rotate-3 transition-transform duration-300">
                      {/* Glow effect background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/20 to-[#004488]/20 
                          blur-xl group-hover:blur-2xl transition-all duration-300 rounded-full"
                      />

                      {/* Icon container */}
                      <div className="relative bg-gradient-to-br from-[#003366] to-[#004488] 
                          p-3.5 rounded-xl text-white transform group-hover:scale-110 
                          transition-all duration-300 ease-out
                          shadow-lg group-hover:shadow-xl
                          border border-white/10"
                      >
                        <benefit.icon className="h-5 w-5 stroke-[1.5]" />
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg text-[#003366] 
                        group-hover:text-[#004488] transition-colors duration-300"
                    >
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 
                      transition-colors duration-300 mb-6"
                  >
                    {benefit.description}
                  </p>
                  <div className="space-y-3">
                    {benefit.details.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-gray-600 
                            group-hover:text-gray-700 transition-colors duration-300
                            hover:translate-x-1 transition-transform duration-200"
                      >
                        <div className="mt-1.5 transform group-hover:scale-110 
                            transition-transform duration-300">
                          <div className="h-1.5 w-1.5 rounded-full 
                              bg-gradient-to-r from-[#003366] to-[#004488]" />
                        </div>
                        <span className="text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-100">
                    <Link href={benefit.href}>
                      <Button
                        className="w-full relative overflow-hidden group
                            bg-gradient-to-r from-[#003366] to-[#004488]
                            hover:from-[#004488] hover:to-[#003366]
                            text-white font-semibold
                            shadow-md hover:shadow-xl
                            transform hover:-translate-y-1 active:translate-y-0
                            transition-all duration-300 ease-out
                            hover:scale-[1.02]"
                      >
                        <span className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transform 
                              group-hover:translate-x-3 group-hover:scale-110
                              transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Energy Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted products that help Nigerian homes achieve energy independence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Add ProductCard components here with top recommended products */}
          {/* We can pull these from your products data */}
        </div>
        <div className="text-center mt-8">
          <Link href="/products">
            <Button variant="outline" size="lg">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Learning Topics */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Popular Learning Topics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/learn/solar-power">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#003366]/10 p-3 rounded-lg">
                  <Sun className="h-6 w-6 text-[#003366]" />
                </div>
                <h3 className="font-semibold">Solar Power Solutions</h3>
              </div>
              <p className="text-gray-600">
                Learn about solar system components, sizing, and ROI calculations
                for Nigerian homes.
              </p>
            </Card>
          </Link>
          <Link href="/learn/backup-power">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#003366]/10 p-3 rounded-lg">
                  <Battery className="h-6 w-6 text-[#003366]" />
                </div>
                <h3 className="font-semibold">Backup Power Systems</h3>
              </div>
              <p className="text-gray-600">
                Compare different backup power options and find the best solution
                for your needs.
              </p>
            </Card>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#003366] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Home's Energy?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Start your journey to energy efficiency and reliable power supply today.
          </p>
          <Link href="/services/energy-assessment">
            <Button size="lg" variant="secondary">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
