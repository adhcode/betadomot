"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../components/ui/dialog"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"

export function MarketingModal() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenModal = localStorage.getItem("hasSeenMarketingModal")
            if (!hasSeenModal) {
                setIsOpen(true)
                localStorage.setItem("hasSeenMarketingModal", "true")
            }
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Join Our Newsletter</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <p className="text-sm text-muted-foreground">
                        Subscribe to our newsletter to receive updates about new products,
                        special offers, and design tips.
                    </p>
                    <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                    />
                    <Button onClick={() => setIsOpen(false)}>Subscribe</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
} 