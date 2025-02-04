'use client'

import { Card } from "@/components/ui/card"
import { MapPin, Phone, Globe, Mail } from 'lucide-react'
import { PageHeader } from '@/components/ui/page-header'
import { DiscoMap } from '@/app/learn/components/disco-map'

const discosList = [
    {
        name: "Ikeja Electric",
        coverage: ["Ikeja", "Abule-Egba", "Akowonjo", "Ikorodu", "Oshodi", "Shomolu"],
        website: "www.ikejaelectric.com",
        contact: {
            phone: "01-7000250",
            email: "customercare@ikejaelectric.com"
        },
        bands: {
            A: "₦225/kWh",
            B: "₦215/kWh",
            C: "₦187/kWh"
        }
    },
    {
        name: "Eko Electric",
        coverage: ["Lagos Island", "Lekki", "Victoria Island", "Ibeju", "Ajah", "Apapa"],
        website: "www.ekedp.com",
        contact: {
            phone: "07080655555",
            email: "customercare@ekedp.com"
        },
        bands: {
            A: "₦225/kWh",
            B: "₦215/kWh",
            C: "₦187/kWh"
        }
    },
    {
        name: "Abuja Electric",
        coverage: ["FCT", "Niger", "Nasarawa", "Kogi"],
        website: "www.abujaelectricity.com",
        contact: {
            phone: "08039070070",
            email: "customerservice@abujaelectricity.com"
        },
        bands: {
            A: "₦225/kWh",
            B: "₦215/kWh",
            C: "₦187/kWh"
        }
    },
    // Add other DisCos...
]

export default function DiscosPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <PageHeader
                title="Electricity Distribution Companies"
                description="Find information about your local electricity distribution company and understand their service bands."
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <DiscoMap />
            </div>
        </div>
    )
} 