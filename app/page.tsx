'use client'

import { PageHeader } from '@/components/ui/page-header'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Zap, Sun, Battery, Thermometer,
  ArrowRight, Calculator, LineChart,
  Lightbulb, Coins, Shield, Info, Home, Radio, Gift, Mail, Check
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
import { motion } from "framer-motion"

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

const featuredProducts = [
  {
    id: 'hybrid-inverter-5kva',
    name: '5KVA Hybrid Inverter System',
    image: '/products/hybrid-inverter.jpg',
    price: 850000,
    monthlyBill: '₦45,000 - ₦65,000',
    description: 'Complete solar hybrid inverter system with lithium batteries',
    benefits: [
      'Reduces generator usage by 70%',
      'Handles voltage fluctuations (140V-260V)',
      'Smart load management',
      'Mobile app monitoring'
    ],
    whyItWorks: 'Automatically switches between solar, grid, and battery power to minimize generator usage and maximize savings.',
    savings: 'Average ₦35,000 monthly on fuel costs',
    idealFor: 'Homes with 3-4 bedrooms running essential appliances',
    features: [
      {
        title: 'Smart Load Management',
        description: 'Prioritizes critical appliances during power outages'
      },
      {
        title: 'Pure Sine Wave Output',
        description: 'Safe for sensitive electronics and appliances'
      },
      {
        title: 'Fast Charging',
        description: '4-6 hours full charge from grid or generator'
      }
    ]
  },
  {
    id: 'voltage-stabilizer-tns',
    name: 'Servo Voltage Stabilizer',
    image: '/products/stabilizer.jpg',
    price: 145000,
    monthlyBill: '₦15,000 - ₦25,000',
    description: 'Industrial-grade voltage stabilizer with surge protection',
    benefits: [
      'Protects expensive appliances',
      'Handles extreme voltage swings',
      'Extends equipment lifespan',
      'Zero maintenance required'
    ],
    whyItWorks: 'Maintains stable 220V output even when grid voltage drops to 140V or spikes to 290V, preventing damage to appliances.',
    savings: 'Prevents ₦200,000+ in annual appliance repairs',
    idealFor: 'Areas with frequent voltage fluctuations',
    features: [
      {
        title: 'Wide Input Range',
        description: '140V-290V input voltage range'
      },
      {
        title: 'Digital Display',
        description: 'Real-time voltage monitoring'
      },
      {
        title: 'Surge Protection',
        description: 'Built-in surge and lightning protection'
      }
    ]
  },
  {
    id: 'smart-energy-monitor',
    name: 'WiFi Energy Monitor',
    image: '/products/energy-monitor.jpg',
    price: 45000,
    monthlyBill: '₦5,000 - ₦15,000',
    description: 'Real-time power consumption monitoring system',
    benefits: [
      'Track energy usage in real-time',
      'Identify power-hungry appliances',
      'Set consumption alerts',
      'Generate savings reports'
    ],
    whyItWorks: 'Provides detailed insights into power consumption patterns, helping identify wastage and optimize usage times.',
    savings: 'Up to 30% reduction in monthly bills',
    idealFor: 'Cost-conscious homes wanting to optimize consumption',
    features: [
      {
        title: 'Mobile App',
        description: 'Real-time monitoring and alerts'
      },
      {
        title: 'Usage Analytics',
        description: 'Detailed consumption patterns and trends'
      },
      {
        title: 'Multi-Circuit Monitoring',
        description: 'Track different areas separately'
      }
    ]
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
    <main className="flex-1">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-[100vh]"
      >
        {/* Background with Parallax */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="relative w-full h-full">
            <Image
              src="/betadomot1.jpeg"
              alt="Betadomot Home"
              fill
              className="object-cover object-center brightness-90"
              priority
              sizes="100vw"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/0 to-black/40" />
          </div>
        </motion.div>

        {/* Hero Content with Stagger Animation */}
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 lg:pt-52">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl md:mt-6"
            >
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-4 leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Elevate your
                <br />
                lifestyle.
              </motion.h1>
              <motion.span
                className="text-5xl sm:text-6xl lg:text-8xl font-light text-[#E4A853]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                Live brilliantly.
              </motion.span>
            </motion.div>
          </div>

          {/* Bottom Line with Slide Up */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-[-250px] left-0 right-0"
          >
            <div className="border-t border-white/20">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 md:h-14 gap-4 md:gap-0">
                  <div className="text-white/80 text-sm order-1 md:order-none">
                    Betadomot
                  </div>
                  <div className="text-white/70 text-sm text-center order-3 md:order-none">
                    Modern living redefined.
                    <br className="hidden md:block" />
                    Smart homes crafted for the Nigerian elite.
                  </div>
                  <div className="text-white/80 text-sm order-2 md:order-none">
                    Explore More
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Energy Bills Section with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative py-32 lg:py-40 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Content with Stagger */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-none">
                Betadomot
                <br />
                <span className="text-[#E4A853]">pay less energy bills.</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Tired of outrageous energy bills? Our solutions help Nigerian homes save
                <span className="text-[#E4A853] font-semibold"> millions yearly</span> while enjoying
                <span className="text-black font-semibold"> constant power supply</span>.
              </p>
              <Link href="/learn">
                <Button
                  className="group bg-black hover:bg-black/90 text-white px-8 h-14 
                    text-base transition-all duration-300 rounded-full"
                >
                  Learn how
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Right Image with Float Animation */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative w-full aspect-square lg:aspect-auto lg:h-[600px]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -bottom-4 w-full h-full border border-[#E4A853]/20 rounded-2xl"
              />
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/powersaving2.jpeg"
                  alt="Energy Savings Visualization"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Product Categories with Grid Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header with Fade Up */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-medium text-[#E4A853] mb-4 block">
              Our Collections
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 leading-none">
              Curated for
              <br />
              <span className="text-[#E4A853]">modern living.</span>
            </h2>
          </motion.div>

          {/* Grid with Stagger */}
          <motion.div
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Product Cards with Hover Effects */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 }
              }}
              className="group relative overflow-hidden rounded-2xl bg-gray-100"
            >
              <div className="aspect-square relative">
                <Image
                  src="/smarthome.jpeg"
                  alt="Smart Appliances"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold text-white mb-4">Smart Appliances</h3>
                <p className="text-white/90 mb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Energy-efficient appliances that learn your lifestyle and save you money.
                </p>
                <Link href="/categories/smart-appliances">
                  <Button
                    className="bg-white text-black hover:bg-white/90 
                      transition-all duration-300 rounded-full px-6"
                  >
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Home Electronics */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 }
              }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-square relative">
                <Image
                  src="/appliance.jpeg"
                  alt="Home Electronics"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold text-white mb-4">Home Electronics</h3>
                <p className="text-white/90 mb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Premium electronics that blend seamlessly with your space.
                </p>
                <Link href="/categories/electronics">
                  <Button
                    className="bg-white text-black hover:bg-white/90 
                      transition-all duration-300 rounded-full px-6"
                  >
                    Discover
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Home Accessories */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 }
              }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-square relative">
                <Image
                  src="/accesories.jpeg"
                  alt="Home Accessories"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold text-white mb-4">Home Accessories</h3>
                <p className="text-white/90 mb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Elevate your space with carefully curated accessories.
                </p>
                <Link href="/categories/accessories">
                  <Button
                    className="bg-white text-black hover:bg-white/90 
                      transition-all duration-300 rounded-full px-6"
                  >
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Home Improvement Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-32 bg-gray-50"
      >
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
        >
          <span className="text-sm font-medium text-[#E4A853] mb-4 block">
            Home Improvement
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
            Transform your space
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our solutions can enhance every aspect of your home
          </p>
        </motion.div>

        {/* Stacked Sections */}
        <div className="space-y-32">
          {/* Comfort & Climate Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 lg:order-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="/home-improvement/climate-control.jpg"
                      alt="Smart Climate Control"
                      width={600}
                      height={400}
                      className="object-cover w-full h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>
                </div>
                <div className="flex-1 lg:order-1">
                  <h3 className="text-3xl font-bold mb-6">
                    Smart Climate
                    <span className="text-[#E4A853]"> Control</span>
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Experience perfect comfort with our intelligent climate control systems.
                    Automatically adjusts to your preferences while optimizing energy usage.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Temperature automation",
                      "Humidity control",
                      "Air quality monitoring",
                      "Energy optimization"
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <Check className="h-5 w-5 text-[#E4A853]" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <Button
                    className="bg-[#1A1A1A] hover:bg-[#E4A853] text-white hover:text-black
                      transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Security Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#1A1A1A] py-32"
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="/home-improvement/security.jpg"
                      alt="Smart Security"
                      width={600}
                      height={400}
                      className="object-cover w-full h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>
                </div>
                <div className="flex-1 text-white">
                  <h3 className="text-3xl font-bold mb-6">
                    Advanced
                    <span className="text-[#E4A853]"> Security</span>
                  </h3>
                  <p className="text-gray-400 mb-8 text-lg">
                    Protect your home with cutting-edge security systems.
                    Monitor and control access from anywhere in the world.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "24/7 monitoring",
                      "Smart cameras",
                      "Biometric access",
                      "Mobile notifications"
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <Check className="h-5 w-5 text-[#E4A853]" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <Button
                    className="bg-[#E4A853] hover:bg-white text-black
                      transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Entertainment Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 lg:order-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="/home-improvement/entertainment.jpg"
                      alt="Home Entertainment"
                      width={600}
                      height={400}
                      className="object-cover w-full h-[400px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>
                </div>
                <div className="flex-1 lg:order-1">
                  <h3 className="text-3xl font-bold mb-6">
                    Premium
                    <span className="text-[#E4A853]"> Entertainment</span>
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Transform your home into an entertainment paradise with our
                    state-of-the-art audio-visual solutions.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Smart TV integration",
                      "Multi-room audio",
                      "Home theater",
                      "Voice control"
                    ].map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <Check className="h-5 w-5 text-[#E4A853]" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <Button
                    className="bg-[#1A1A1A] hover:bg-[#E4A853] text-white hover:text-black
                      transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-medium text-[#E4A853] mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6">
              What our clients say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial Cards */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="/testimonials/client1.jpg"
                    alt="Client"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Betadomot transformed our home into a smart, energy-efficient space.
                The savings on our electricity bills have been remarkable."
              </p>
            </motion.div>

            {/* Add more testimonial cards */}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-32 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/circuit.svg')] opacity-5" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.1, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#E4A853]/10 to-transparent"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-sm font-medium text-[#E4A853] mb-4"
              >
                Get Started Today
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              >
                Ready to transform
                <span className="block text-[#E4A853]">your living space?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-blue-100/90 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Book a consultation with our experts and discover how to make your home smarter, more efficient, and truly exceptional.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/services/design-consultation">
                  <Button
                    className="bg-[#E4A853] text-black hover:bg-[#FFD700] 
                      px-8 py-6 text-lg font-medium
                      transform hover:-translate-y-1
                      transition-all duration-300
                      shadow-lg hover:shadow-xl"
                  >
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10
                      px-8 py-6 text-lg font-medium
                      transition-all duration-300"
                  >
                    View Our Portfolio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex-1 grid grid-cols-2 gap-6"
            >
              {[
                { title: "Free Consultation", description: "Expert advice tailored to your needs" },
                { title: "Quick Installation", description: "Professional setup within days" },
                { title: "24/7 Support", description: "Round-the-clock technical assistance" },
                { title: "Flexible Payment", description: "Convenient payment options" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 
                    transition-all duration-300 border border-white/10"
                >
                  <h3 className="text-lg font-semibold mb-2 text-[#E4A853]">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-32 bg-gradient-to-br from-[#003366] to-[#002244]"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.1, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-radial from-[#E4A853]/10 to-transparent"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-radial from-[#003366]/10 to-transparent"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block text-sm font-medium bg-gradient-to-r from-[#E4A853] to-[#FFD700] 
                text-transparent bg-clip-text mb-4">
                Join Our Community
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Stay ahead with smart living
                <span className="block text-[#E4A853]">updates & insights</span>
              </h2>
              <p className="text-lg text-gray-400 mb-10">
                Get expert tips, exclusive offers, and the latest innovations in smart home technology
                delivered straight to your inbox.
              </p>
            </motion.div>

            <motion.form
              onSubmit={(e) => e.preventDefault()}
              className="relative flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400
                    focus:bg-white/15 transition-all duration-300 pr-12"
                />
                <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button
                className="h-14 px-8 bg-[#E4A853] hover:bg-[#FFD700]
                  text-black font-medium transition-all duration-300 
                  shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.form>

            <motion.p
              className="text-sm text-gray-500 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { icon: Zap, text: "Exclusive Deals", delay: 0 },
              { icon: Lightbulb, text: "Energy Tips", delay: 0.1 },
              { icon: Home, text: "Home Guides", delay: 0.2 },
              { icon: Gift, text: "Special Rewards", delay: 0.3 }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#E4A853]/20 to-[#E4A853]/5 
                  rounded-xl flex items-center justify-center mx-auto mb-4 
                  group-hover:from-[#E4A853]/30 group-hover:to-[#E4A853]/10 transition-all duration-300"
                >
                  <item.icon className="h-6 w-6 text-[#E4A853]" />
                </div>
                <p className="text-white font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
