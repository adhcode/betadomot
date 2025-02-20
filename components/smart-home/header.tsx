'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from "@/components/ui/input"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command"

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'Services', href: '/services' },
]

const searchSuggestions = [
    { title: 'Smart Inverter', category: 'Power', href: '/products/smart-inverter' },
    { title: 'Solar Panels', category: 'Energy', href: '/products/solar-panels' },
    { title: 'Smart AC', category: 'Climate', href: '/products/smart-ac' },
    { title: 'LED Lights', category: 'Lighting', href: '/products/led-lights' },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
            document.body.style.touchAction = 'none'
            document.body.style.width = '100%'
        } else {
            document.body.style.overflow = ''
            document.body.style.touchAction = ''
            document.body.style.width = ''
        }
    }, [mobileMenuOpen])

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 
            ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2 sm:py-4' : 'bg-transparent py-4 sm:py-6'}`}>
            <nav className="relative mx-auto flex items-center justify-between gap-4 px-3 sm:px-4 max-w-7xl">
                {/* Logo */}
                <div className="flex flex-shrink-0">
                    <Link href="/" className="p-1">
                        <span className={`text-lg sm:text-xl lg:text-2xl font-medium tracking-tight transition-colors duration-300 
                            ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
                            Betadomot
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors duration-300 relative group 
                                ${scrolled ? 'text-gray-600 hover:text-[#1A1A1A]' : 'text-white/80 hover:text-white'}`}
                        >
                            {item.name}
                            <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-[#E4A853] transform scale-x-0 
                                group-hover:scale-x-100 transition-transform duration-300" />
                        </Link>
                    ))}
                </div>

                {/* Right section */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 transition-colors duration-300 
                            ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                        onClick={() => setSearchOpen(true)}
                    >
                        <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>

                    <Link href="/cart">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={`h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 transition-colors duration-300 
                                ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                        >
                            <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                    </Link>

                    <Button
                        variant="ghost"
                        size="icon"
                        className={`h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 lg:hidden transition-colors duration-300 
                            ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ translateX: "100%" }}
                            animate={{ translateX: 0 }}
                            exit={{ translateX: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed right-0 top-0 bottom-0 w-[250px] bg-white shadow-xl z-50"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between p-4 border-b">
                                    <span className="text-lg font-semibold">Menu</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>

                                <div className="flex-1 overflow-y-auto">
                                    <nav className="flex flex-col py-2">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="px-4 py-2.5 text-sm font-medium text-gray-900 
                                                    hover:bg-gray-50 transition-colors duration-200"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-4 border-t mt-auto">
                                    <Button
                                        className="w-full bg-[#1A1A1A] hover:bg-[#E4A853] text-white 
                                            hover:text-black transition-all duration-300"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Search Dialog */}
            <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
                <CommandInput placeholder="Search products..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {searchSuggestions.map((item) => (
                            <CommandItem
                                key={item.title}
                                onSelect={() => {
                                    setSearchOpen(false)
                                    window.location.href = item.href
                                }}
                            >
                                <div className="flex flex-col">
                                    <span>{item.title}</span>
                                    <span className="text-sm text-gray-600">{item.category}</span>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </header>
    )
}