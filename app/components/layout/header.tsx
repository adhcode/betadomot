'use client'

import Link from 'next/link'
import { Button } from "../../components/ui/button"
import { Menu, ShoppingCart, Search, User2, X } from 'lucide-react'
import { useState } from 'react'
import { Input } from "../../components/ui/input"
import { cn } from "../../lib/utils"

const navLinks = [
    { href: '/products', label: 'products' },
    { href: '/categories', label: 'categories' },
    { href: '/deals', label: 'deals' },
    { href: '/blog', label: 'blog' },
    { href: '/contact', label: 'contact' }
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white w-full">
            {/* Rewards Banner */}
            <div className="w-full bg-[#E4A853]">
                <div className="container-max mx-auto">
                    <p className="text-xs text-black font-medium text-center py-1">
                        earn 5% back in rewards on every purchase! →
                    </p>
                </div>
            </div>

            {/* Main Header */}
            <div className="w-full border-b">
                <div className="container-max mx-auto">
                    <div className="flex items-center h-14 px-4 gap-8">
                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="lg:hidden h-8 w-8"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>

                        {/* Logo - Left aligned on desktop */}
                        <Link href="/" className="lg:mr-8">
                            <span className="font-ojuju text-xl text-[#E4A853] lowercase">betadomot</span>
                        </Link>

                        {/* Search Bar - Center on desktop */}
                        <div className="hidden lg:block flex-1 max-w-xl">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    type="search"
                                    placeholder="find home products"
                                    className="pl-10 h-9 w-full focus:ring-[#E4A853]"
                                />
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm lowercase text-gray-600 hover:text-[#E4A853] transition-colors whitespace-nowrap"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Right Section - Icons */}
                        <div className="flex items-center gap-2 ml-auto lg:ml-6">
                            <Button variant="ghost" size="sm" className="h-8 w-8">
                                <User2 className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8">
                                <ShoppingCart className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Search */}
            <div className="w-full border-b lg:hidden">
                <div className="container-max mx-auto">
                    <div className="relative h-10 px-4">
                        <Search className="absolute left-7 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            type="search"
                            placeholder="find home products"
                            className="pl-10 h-full w-full focus:ring-[#E4A853]"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={cn(
                "fixed inset-0 top-[116px] bg-white lg:hidden transition-transform duration-300 ease-in-out z-40",
                mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="container-max mx-auto py-4">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-3 text-lg lowercase text-gray-600 hover:text-[#E4A853] 
                                    hover:bg-gray-50 transition-colors rounded-lg"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
} 