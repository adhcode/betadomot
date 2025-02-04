'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Power, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react'

interface OutageRecord {
    date: string
    startTime: string
    endTime: string
    duration: number
    type: 'scheduled' | 'unscheduled'
}

export function OutageTracker() {
    const [outages, setOutages] = useState<OutageRecord[]>([])
    const [isTracking, setIsTracking] = useState(false)
    const [startTime, setStartTime] = useState('')

    const startTracking = () => {
        setIsTracking(true)
        setStartTime(new Date().toISOString())
    }

    const stopTracking = () => {
        setIsTracking(false)
        const endTime = new Date()
        const start = new Date(startTime)
        const duration = (endTime.getTime() - start.getTime()) / (1000 * 60 * 60) // hours

        setOutages([
            {
                date: start.toLocaleDateString(),
                startTime: start.toLocaleTimeString(),
                endTime: endTime.toLocaleTimeString(),
                duration: Number(duration.toFixed(2)),
                type: 'unscheduled'
            },
            ...outages
        ])
    }

    return (
        <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Tracking Control */}
                <Card className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`p-3 rounded-full ${isTracking ? 'bg-red-100' : 'bg-green-100'}`}>
                            <Power className={`h-6 w-6 ${isTracking ? 'text-red-500' : 'text-green-500'}`} />
                        </div>
                        <div>
                            <h3 className="font-semibold">Power Status</h3>
                            <p className="text-sm text-gray-600">
                                {isTracking ? 'Currently experiencing outage' : 'Power supply normal'}
                            </p>
                        </div>
                    </div>

                    <Button
                        className={`w-full ${isTracking ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                        onClick={isTracking ? stopTracking : startTracking}
                    >
                        {isTracking ? 'Power Restored' : 'Report Outage'}
                    </Button>
                </Card>

                {/* Statistics */}
                <Card className="p-6">
                    <h3 className="font-semibold mb-4">Outage Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Total Outages</p>
                            <p className="text-2xl font-bold">{outages.length}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">Avg Duration</p>
                            <p className="text-2xl font-bold">
                                {outages.length > 0
                                    ? (outages.reduce((acc, curr) => acc + curr.duration, 0) / outages.length).toFixed(1)
                                    : 0
                                }h
                            </p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Outage History */}
            <Card className="p-6">
                <h3 className="font-semibold mb-4">Recent Outages</h3>
                <div className="space-y-4">
                    {outages.map((outage, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                            <div className="p-2 bg-white rounded-full">
                                <Clock className="h-5 w-5 text-gray-600" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-medium">{outage.date}</p>
                                        <p className="text-sm text-gray-600">
                                            {outage.startTime} - {outage.endTime}
                                        </p>
                                    </div>
                                    <span className="text-sm font-medium">
                                        {outage.duration}h
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {outages.length === 0 && (
                        <div className="text-center text-gray-500 py-8">
                            No outages recorded yet
                        </div>
                    )}
                </div>
            </Card>
        </div>
    )
} 