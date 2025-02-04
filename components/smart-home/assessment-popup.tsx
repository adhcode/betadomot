'use client'

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cva } from "class-variance-authority"

const popupVariants = cva(
    "fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm border-l-4 border-[#003366]",
    {
        variants: {
            visibility: {
                visible: "animate-slide-up",
                hidden: "hidden",
            },
        },
        defaultVariants: {
            visibility: "hidden",
        },
    }
)

export function AssessmentPopup() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isPopupVisible, setIsPopupVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsPopupVisible(true), 3000)
        return () => clearTimeout(timer)
    }, [])

    const handleAssessmentClick = () => {
        setIsPopupOpen(false)
        setIsPopupVisible(false)
    }

    return (
        <>
            <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Welcome to Safirox</DialogTitle>
                        <DialogDescription>
                            Discover how we can help you create a smarter, more efficient home.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <a
                            href="https://sarp-kd3p033o.scoreapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#003366] hover:text-[#87CEEB] transition-colors"
                        >
                            Take our smart home assessment
                        </a>
                    </div>
                    <DialogFooter>
                        <Button onClick={() => setIsPopupOpen(false)} className="bg-[#003366] text-white hover:bg-[#002244] transition-colors">
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {isPopupVisible && (
                <div className={popupVariants({ visibility: "visible" })}>
                    <button
                        onClick={() => setIsPopupVisible(false)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    >
                        ×
                    </button>
                    <h3 className="text-lg font-semibold mb-2 text-[#003366]">Take Our Assessment</h3>
                    <p className="mb-4 text-[#87CEEB]">Discover how we can help you create a smarter, more efficient home.</p>
                    <a
                        href="https://sarp-kd3p033o.scoreapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#003366] text-white px-6 py-2 rounded-full hover:bg-[#002244] transition-colors group"
                        onClick={handleAssessmentClick}
                    >
                        Start Assessment
                        <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            )}
        </>
    )
} 