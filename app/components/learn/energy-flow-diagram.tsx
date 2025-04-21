'use client'

import { useState } from 'react'
import { ArrowRight, Zap, Home, Sun, Battery } from 'lucide-react'

export function EnergyFlowDiagram() {
    const [activeFlow, setActiveFlow] = useState<string | null>(null)

    const flows = [
        {
            id: 'grid',
            icon: Zap,
            title: 'Grid Power',
            description: 'Main electricity supply from DisCo'
        },
        {
            id: 'solar',
            icon: Sun,
            title: 'Solar Power',
            description: 'Renewable energy from solar panels'
        },
        {
            id: 'inverter',
            icon: Battery,
            title: 'Inverter System',
            description: 'Backup power storage solution'
        }
    ]

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">Home Energy Flow</h3>

            <div className="relative">
                {/* Flow Lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-gray-100"></div>
                </div>

                {/* Energy Sources */}
                <div className="grid grid-cols-3 gap-4 relative">
                    {flows.map((flow) => (
                        <div
                            key={flow.id}
                            className="relative"
                            onMouseEnter={() => setActiveFlow(flow.id)}
                            onMouseLeave={() => setActiveFlow(null)}
                        >
                            <div className={`
                                p-4 rounded-lg transition-all
                                ${activeFlow === flow.id ? 'bg-[#003366] text-white' : 'bg-gray-50'}
                            `}>
                                <flow.icon className={`
                                    h-8 w-8 mb-2
                                    ${activeFlow === flow.id ? 'text-white' : 'text-[#003366]'}
                                `} />
                                <h4 className="font-medium mb-1">{flow.title}</h4>
                                <p className={`
                                    text-sm
                                    ${activeFlow === flow.id ? 'text-white/80' : 'text-gray-600'}
                                `}>
                                    {flow.description}
                                </p>
                            </div>

                            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                                <ArrowRight className={`
                                    h-4 w-4 transition-colors
                                    ${activeFlow === flow.id ? 'text-[#003366]' : 'text-gray-300'}
                                `} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Home Icon */}
                <div className="mt-8 flex justify-center">
                    <div className="bg-[#003366]/5 p-4 rounded-full">
                        <Home className="h-8 w-8 text-[#003366]" />
                    </div>
                </div>
            </div>
        </div>
    )
} 