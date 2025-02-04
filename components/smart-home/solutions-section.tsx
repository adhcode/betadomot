'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const solutions = [
    {
        title: "Backup Power",
        description: "Never worry about power cuts with our inverter solutions",
        image: "/solutions/backup.jpg",
        link: "/products?category=inverters"
    },
    {
        title: "Solar Systems",
        description: "Harness the sun's power for sustainable energy",
        image: "/solutions/solar.jpg",
        link: "/products?category=solar"
    },
    {
        title: "Smart Home",
        description: "Automate and optimize your energy usage",
        image: "/solutions/smart.jpg",
        link: "/products?category=smart-devices"
    }
]

export function SolutionsSection() {
    return (
        <section className="py-24 px-4 bg-gradient-to-br from-[#003366]/5 to-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Complete Energy Solutions</h2>
                    <p className="text-xl text-gray-600">
                        Transform your home with our integrated energy solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <Link key={index} href={solution.link}>
                            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
                                {/* Solution content */}
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
} 