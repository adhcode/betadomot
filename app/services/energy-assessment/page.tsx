'use client'

import { PageHeader } from '../../components/ui/page-header'
import { EnergyAssessment } from '../../components/services/energy-assessment'

export default function EnergyAssessmentPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
            <PageHeader
                title="Energy Assessment Services"
                description="Get a detailed analysis of your energy needs and expert recommendations"
            />

            <div className="max-w-7xl mx-auto px-4 py-16">
                <EnergyAssessment />
            </div>
        </div>
    )
} 