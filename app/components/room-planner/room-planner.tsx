'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import { Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {
    Ruler, Move, Grid, Save,
    RotateCcw, ZoomIn, ZoomOut,
    Square
} from 'lucide-react'

interface RoomDimensions {
    width: number
    length: number
    height: number
}

export function RoomPlanner() {
    const [dimensions, setDimensions] = useState<RoomDimensions>({
        width: 0,
        length: 0,
        height: 0
    })
    const [activeView, setActiveView] = useState<'2d' | '3d'>('2d')

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Room Planner</h2>
                    <p className="text-gray-600">Design your perfect space with our interactive planner</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Controls Panel */}
                    <Card className="p-6">
                        <h3 className="font-semibold mb-6">Room Dimensions</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-600">Width (m)</label>
                                <Input
                                    type="number"
                                    value={dimensions.width}
                                    onChange={(e) => setDimensions(prev => ({
                                        ...prev,
                                        width: Number(e.target.value)
                                    }))}
                                />
                            </div>
                            {/* Add length and height inputs */}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <Button variant="outline" onClick={() => setActiveView('2d')}>
                                <Grid className="h-4 w-4 mr-2" />
                                2D View
                            </Button>
                            <Button variant="outline" onClick={() => setActiveView('3d')}>
                                <Square className="h-4 w-4 mr-2" />
                                3D View
                            </Button>
                        </div>
                    </Card>

                    {/* Room Preview */}
                    <Card className="col-span-2 aspect-[4/3] relative">
                        {/* Add room visualization here */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            <Button size="sm" variant="outline">
                                <ZoomIn className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                                <ZoomOut className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                                <RotateCcw className="h-4 w-4" />
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
} 