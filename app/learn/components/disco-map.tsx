'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info, Phone, Globe, MapPin, ChevronRight } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const discoData = [
    {
        name: "Ikeja Electric",
        coverage: "Lagos (North and Central)",
        website: "www.ikejaelectric.com",
        customerCare: "01-7000250",
        bands: {
            A: { rate: "₦225/kWh", hours: "20-24hrs" },
            B: { rate: "₦215/kWh", hours: "16-20hrs" },
            C: { rate: "₦187/kWh", hours: "12-16hrs" },
            D: { rate: "₦170/kWh", hours: "8-12hrs" }
        },
        regions: ["Ikeja", "Abule-Egba", "Akowonjo", "Ikorodu", "Oshodi", "Shomolu"]
    },
    {
        name: "Eko Electric",
        coverage: "Lagos (Island, Lekki, Victoria Island)",
        website: "www.ekedp.com",
        customerCare: "07080655555",
        bands: {
            A: { rate: "₦225/kWh", hours: "20-24hrs" },
            B: { rate: "₦215/kWh", hours: "16-20hrs" },
            C: { rate: "₦187/kWh", hours: "12-16hrs" },
            D: { rate: "₦170/kWh", hours: "8-12hrs" }
        },
        regions: ["Lagos Island", "Lekki", "Victoria Island", "Ibeju", "Ajah", "Apapa"]
    },
    {
        name: "Abuja Electric",
        coverage: "FCT and surroundings",
        website: "www.abujaelectricity.com",
        customerCare: "08039070070",
        bands: {
            A: { rate: "₦225/kWh", hours: "20-24hrs" },
            B: { rate: "₦215/kWh", hours: "16-20hrs" },
            C: { rate: "₦187/kWh", hours: "12-16hrs" },
            D: { rate: "₦170/kWh", hours: "8-12hrs" }
        },
        regions: ["Central Business District", "Maitama", "Wuse", "Garki", "Asokoro", "Gwarinpa"]
    },
    {
        name: "Enugu Electric",
        coverage: "South-Eastern Nigeria",
        website: "www.enugudisco.com",
        customerCare: "084-300-300",
        bands: {
            A: { rate: "₦225/kWh", hours: "20-24hrs" },
            B: { rate: "₦215/kWh", hours: "16-20hrs" },
            C: { rate: "₦187/kWh", hours: "12-16hrs" },
            D: { rate: "₦170/kWh", hours: "8-12hrs" }
        },
        regions: ["Enugu", "Abakaliki", "Owerri", "Umuahia", "Onitsha"]
    },
    {
        name: "Ibadan Electric",
        coverage: "Oyo, Ogun, Osun, Kwara",
        website: "www.ibedc.com",
        customerCare: "0700-123-9999",
        bands: {
            A: { rate: "₦225/kWh", hours: "20-24hrs" },
            B: { rate: "₦215/kWh", hours: "16-20hrs" },
            C: { rate: "₦187/kWh", hours: "12-16hrs" },
            D: { rate: "₦170/kWh", hours: "8-12hrs" }
        },
        regions: ["Ibadan", "Ilorin", "Osogbo", "Abeokuta"]
    },
    {
        name: "Benin Electric",
        coverage: "Edo, Delta, Ondo, Ekiti",
        website: "www.bedcpower.com",
        customerCare: "0700-023-2332",
        bands: {
            A: { rate: "₦225/kWh", hours: "20-24hrs" },
            B: { rate: "₦215/kWh", hours: "16-20hrs" },
            C: { rate: "₦187/kWh", hours: "12-16hrs" },
            D: { rate: "₦170/kWh", hours: "8-12hrs" }
        },
        regions: ["Benin", "Asaba", "Akure", "Ado-Ekiti"]
    }
]

export function DiscoMap() {
    const [selectedDisco, setSelectedDisco] = useState(discoData[0])
    const [isAnimating, setIsAnimating] = useState(false)

    const handleDiscoSelect = (disco: typeof discoData[0]) => {
        setIsAnimating(true)
        setSelectedDisco(disco)
        setTimeout(() => setIsAnimating(false), 300)
    }

    return (
        <TooltipProvider>
            <div className="space-y-8">
                {/* Search hint for mobile */}
                <p className="text-sm text-gray-500 md:hidden mb-2 px-1">
                    Scroll to see more providers
                </p>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* DisCo List - Enhanced accessibility and mobile */}
                    <div
                        className="space-y-3 overflow-auto max-h-[70vh] md:max-h-[600px] p-1 
                            scrollbar-thin scrollbar-thumb-gray-200 -mx-4 px-4 md:mx-0 md:px-1"
                        role="listbox"
                        aria-label="Electricity Distribution Companies"
                    >
                        {discoData.map((disco, index) => (
                            <button
                                key={index}
                                role="option"
                                aria-selected={selectedDisco.name === disco.name}
                                className={`w-full text-left p-5 rounded-xl transition-all transform 
                                    hover:scale-[1.02] active:scale-[0.98] focus:outline-none 
                                    focus:ring-2 focus:ring-[#003366] focus:ring-offset-2
                                    ${selectedDisco.name === disco.name
                                        ? 'bg-[#003366] text-white shadow-lg'
                                        : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
                                    }`}
                                onClick={() => handleDiscoSelect(disco)}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="font-semibold text-lg block mb-1">{disco.name}</span>
                                        <p className={`text-sm ${selectedDisco.name === disco.name ? 'text-white/80' : 'text-gray-600'
                                            }`}>
                                            {disco.coverage}
                                        </p>
                                    </div>
                                    <ChevronRight className={`h-5 w-5 transition-transform ${selectedDisco.name === disco.name ? 'rotate-90' : ''
                                        }`} />
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Details Card - Enhanced animations and accessibility */}
                    <Card className={`p-6 lg:p-8 bg-white/50 backdrop-blur-sm transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                        }`}>
                        <div className="space-y-6">
                            <div className="border-b pb-4">
                                <h3 className="text-2xl font-bold text-[#003366] mb-2">
                                    {selectedDisco.name}
                                </h3>
                                <p className="text-gray-600">{selectedDisco.coverage}</p>
                            </div>

                            <div className="grid gap-6">
                                {/* Contact Info - Enhanced with icons */}
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
                                    <div className="space-y-3 text-sm">
                                        <a
                                            href={`tel:${selectedDisco.customerCare}`}
                                            className="flex items-center gap-3 hover:text-[#003366] transition-colors"
                                        >
                                            <Phone className="h-4 w-4" />
                                            <span>{selectedDisco.customerCare}</span>
                                        </a>
                                        <a
                                            href={`https://${selectedDisco.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 hover:text-[#003366] transition-colors"
                                        >
                                            <Globe className="h-4 w-4" />
                                            <span>{selectedDisco.website}</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Service Bands - Interactive cards */}
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-3">Service Bands</h4>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {Object.entries(selectedDisco.bands).map(([band, info]) => (
                                            <div
                                                key={band}
                                                className="group bg-gray-50 p-4 rounded-xl hover:shadow-md 
                                                    transition-all cursor-pointer hover:bg-white"
                                                tabIndex={0}
                                                role="button"
                                            >
                                                <p className="font-semibold text-[#003366] mb-2 
                                                    group-hover:scale-105 transition-transform">
                                                    Band {band}
                                                </p>
                                                <div className="space-y-1 text-sm">
                                                    <p className="text-gray-600">Rate: {info.rate}</p>
                                                    <p className="text-gray-600">Supply: {info.hours}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Regions - Enhanced grid */}
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-3">Regions Covered</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                        {selectedDisco.regions.map((region, index) => (
                                            <div
                                                key={index}
                                                className="group bg-gray-50 px-3 py-2 rounded-lg text-sm 
                                                    text-gray-600 text-center hover:bg-white hover:shadow-md 
                                                    transition-all cursor-pointer"
                                            >
                                                <MapPin className="h-4 w-4 mx-auto mb-1 opacity-0 
                                                    group-hover:opacity-100 transition-opacity" />
                                                {region}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </TooltipProvider>
    )
} 