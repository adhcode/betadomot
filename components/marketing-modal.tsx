'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function MarketingModal() {
    const [isOpen, setIsOpen] = useState(false)
    const [email, setEmail] = useState('')

    useEffect(() => {
        // Show on every reload after a delay
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Email submitted:', email)
        handleClose()
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative w-[90%] max-w-md bg-white rounded-xl shadow-xl 
                            overflow-hidden mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute right-4 top-4 p-1.5 rounded-full
                                hover:bg-black/5 transition-colors duration-200 z-10"
                        >
                            <X className="h-4 w-4 text-gray-500" />
                        </button>

                        {/* Content */}
                        <div className="px-6 py-8">
                            <div className="max-w-sm mx-auto">
                                <h3 className="text-2xl font-semibold text-center mb-2">
                                    Join Our Newsletter
                                </h3>
                                <p className="text-gray-600 text-center text-sm mb-6">
                                    Stay updated with the latest in smart home technology
                                    and get exclusive offers.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-3">
                                    <div className="relative">
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                            className="h-12 pr-10 border-gray-200 focus:border-[#E4A853] 
                                                focus:ring focus:ring-[#E4A853]/20 rounded-lg"
                                        />
                                        <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 
                                            h-5 w-5 text-gray-400" />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-[#1A1A1A] hover:bg-[#E4A853] 
                                            text-white hover:text-black font-medium 
                                            transition-all duration-300 rounded-lg
                                            flex items-center justify-center gap-2"
                                    >
                                        Subscribe
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </form>

                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-xs text-gray-500 text-center">
                                        By subscribing, you agree to our Privacy Policy and consent
                                        to receive updates from us.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
} 