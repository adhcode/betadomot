'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About Us', href: '/about' },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed w-full z-50">
            <div className="bg-transparent">
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8 lg:px-12">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="text-2xl font-medium text-white tracking-tight">
                                Betadomot
                            </span>
                        </Link>
                    </div>

                    {/* Right section */}
                    <div className="flex items-center gap-6">
                        <Link href="/cart">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/10 h-11 w-11"
                            >
                                <ShoppingCart className="h-5 w-5" />
                            </Button>
                        </Link>
                        <button
                            type="button"
                            className="text-white hover:text-white/80 transition-colors"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Menu panel */}
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto 
                        bg-white px-6 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link
                                href="/"
                                className="-m-1.5 p-1.5"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="text-2xl font-bold text-[#003366] tracking-tight">
                                    Betadomot
                                </span>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2.5 
                                                text-base font-medium text-gray-900 
                                                hover:bg-gray-50 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Button
                                        className="w-full bg-[#003366] hover:bg-[#002244] 
                                            transition-all duration-300"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
} 