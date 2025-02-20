'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react'
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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
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
        <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b' : 'bg-transparent'
            }`}>
            <nav className="container mx-auto px-4">
                {/* Mobile Layout */}
                <div className="flex flex-col py-4 lg:hidden">
                    {/* Top Row: Menu, Logo, Cart */}
                    <div className="flex items-center justify-between mb-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(true)}
                            className={scrolled ? 'text-gray-700' : 'text-white'}
                        >
                            <Menu className="h-6 w-6" />
                        </Button>

                        <Link href="/" className="flex items-center">
                            <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'
                                }`}>
                                Betadomot
                            </span>
                        </Link>

                        <div className="flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={`h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 transition-colors duration-300 
                                        ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                                    >
                                        <User className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-72 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-lg rounded-lg mt-2">
                                    <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                                        <p className="text-base font-semibold text-gray-800">My Account</p>
                                    </div>
                                    <div className="py-2">
                                        <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                            <Link href="/account" className="flex items-center w-full text-gray-700 gap-3">
                                                <User className="h-4 w-4" />
                                                <div className="flex flex-col">
                                                    <span className="font-medium">My Account</span>
                                                    <span className="text-sm text-gray-500">View your profile and settings</span>
                                                </div>
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                            <Link href="/orders" className="flex items-center w-full text-gray-700 gap-3">
                                                <ShoppingCart className="h-4 w-4" />
                                                <div className="flex flex-col">
                                                    <span className="font-medium">My Orders</span>
                                                    <span className="text-sm text-gray-500">Track your orders</span>
                                                </div>
                                            </Link>
                                        </DropdownMenuItem>
                                    </div>
                                    <DropdownMenuSeparator className="bg-gray-100" />
                                    <div className="py-2">
                                        <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                            <Link href="/help" className="flex items-center w-full text-gray-700 gap-3">
                                                <span className="font-medium">Help & Contact</span>
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                            <Link href="/services" className="flex items-center w-full text-gray-700 gap-3">
                                                <span className="font-medium">Design Services</span>
                                            </Link>
                                        </DropdownMenuItem>
                                    </div>
                                    <DropdownMenuSeparator className="bg-gray-100" />
                                    <div className="py-2">
                                        <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                            <Link href="/rewards" className="flex items-center w-full text-gray-700 gap-3">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">Betadomot Rewards</span>
                                                    <span className="text-sm text-gray-500">View your points and rewards</span>
                                                </div>
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                            <Link href="/financing" className="flex items-center w-full text-gray-700 gap-3">
                                                <div className="flex flex-col">
                                                    <span className="font-medium">Financing</span>
                                                    <span className="text-sm text-gray-500">Explore financing options</span>
                                                </div>
                                            </Link>
                                        </DropdownMenuItem>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Button
                                variant="ghost"
                                size="icon"
                                className={scrolled ? 'text-gray-700' : 'text-white'}
                            >
                                <ShoppingCart className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Bottom Row: Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
                        <Input
                            placeholder="Find anything home"
                            className={`w-full pl-10 pr-4 h-10 transition-colors duration-300 rounded-full 
                                ${scrolled
                                    ? 'bg-gray-50 border-gray-200 focus:border-[#E4A853] focus:ring-[#E4A853]/20'
                                    : 'bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white/40'
                                }`}
                            onClick={() => setSearchOpen(true)}
                        />
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex flex-shrink-0">
                        <Link href="/" className="p-1">
                            <span className={`text-lg sm:text-xl lg:text-2xl font-medium tracking-tight transition-colors duration-300 
                                ${scrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>
                                Betadomot
                            </span>
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md mx-4">
                        <div className="relative w-full">
                            <Input
                                type="text"
                                placeholder="Find anything home..."
                                className={`w-full pl-10 pr-4 py-2 rounded-full border 
                                    ${scrolled
                                        ? 'bg-gray-50 border-gray-200 focus:border-[#E4A853]'
                                        : 'bg-white/10 border-white/20 focus:border-white/40 text-white placeholder:text-white/70'
                                    }`}
                                onClick={() => setSearchOpen(true)}
                            />
                            <Search className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 
                                ${scrolled ? 'text-gray-400' : 'text-white/70'}`} />
                        </div>
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
                            className={`md:hidden h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 transition-colors duration-300 
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

                        {/* Profile Menu */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={`h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 transition-colors duration-300 
                                        ${scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                                >
                                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-72 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-lg rounded-lg mt-2">
                                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                                    <p className="text-base font-semibold text-gray-800">My Account</p>
                                </div>
                                <div className="py-2">
                                    <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                        <Link href="/account" className="flex items-center w-full text-gray-700 gap-3">
                                            <User className="h-4 w-4" />
                                            <div className="flex flex-col">
                                                <span className="font-medium">My Account</span>
                                                <span className="text-sm text-gray-500">View your profile and settings</span>
                                            </div>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                        <Link href="/orders" className="flex items-center w-full text-gray-700 gap-3">
                                            <ShoppingCart className="h-4 w-4" />
                                            <div className="flex flex-col">
                                                <span className="font-medium">My Orders</span>
                                                <span className="text-sm text-gray-500">Track your orders</span>
                                            </div>
                                        </Link>
                                    </DropdownMenuItem>
                                </div>
                                <DropdownMenuSeparator className="bg-gray-100" />
                                <div className="py-2">
                                    <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                        <Link href="/help" className="flex items-center w-full text-gray-700 gap-3">
                                            <span className="font-medium">Help & Contact</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                        <Link href="/services" className="flex items-center w-full text-gray-700 gap-3">
                                            <span className="font-medium">Design Services</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </div>
                                <DropdownMenuSeparator className="bg-gray-100" />
                                <div className="py-2">
                                    <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                        <Link href="/rewards" className="flex items-center w-full text-gray-700 gap-3">
                                            <div className="flex flex-col">
                                                <span className="font-medium">Betadomot Rewards</span>
                                                <span className="text-sm text-gray-500">View your points and rewards</span>
                                            </div>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="px-6 py-3 hover:bg-gray-50 focus:bg-gray-50 cursor-pointer">
                                        <Link href="/financing" className="flex items-center w-full text-gray-700 gap-3">
                                            <div className="flex flex-col">
                                                <span className="font-medium">Financing</span>
                                                <span className="text-sm text-gray-500">Explore financing options</span>
                                            </div>
                                        </Link>
                                    </DropdownMenuItem>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>

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
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ translateX: "100%" }}
                            animate={{ translateX: 0 }}
                            exit={{ translateX: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed right-0 top-0 bottom-0 w-[300px] bg-white shadow-xl z-[100] overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between px-6 py-5 border-b">
                                    <span className="text-xl font-semibold text-gray-900">Menu</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-10 w-10 hover:bg-gray-100 rounded-full transition-colors duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <X className="h-5 w-5 text-gray-600" />
                                    </Button>
                                </div>

                                <div className="flex-1 overflow-y-auto py-2">
                                    {/* User Profile Section */}
                                    <div className="px-6 py-4 mb-2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                                                <User className="h-6 w-6 text-gray-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-900">Welcome</h3>
                                                <p className="text-sm text-gray-500">Sign in to your account</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t border-gray-100" />

                                    {/* Navigation Links */}
                                    <nav className="py-2">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center px-6 py-4 text-base font-medium text-gray-900 
                                                    hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </nav>

                                    <div className="border-t border-gray-100" />

                                    {/* Additional Links */}
                                    <div className="py-2">
                                        <Link
                                            href="/rewards"
                                            className="flex items-center px-6 py-4 text-base font-medium text-gray-900 
                                                hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <div>
                                                <div className="font-medium">Betadomot Rewards</div>
                                                <div className="text-sm text-gray-500">View your points and rewards</div>
                                            </div>
                                        </Link>
                                        <Link
                                            href="/financing"
                                            className="flex items-center px-6 py-4 text-base font-medium text-gray-900 
                                                hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <div>
                                                <div className="font-medium">Financing</div>
                                                <div className="text-sm text-gray-500">Explore financing options</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-6 border-t">
                                    <Button
                                        className="w-full bg-[#1A1A1A] hover:bg-[#E4A853] text-white 
                                            hover:text-black transition-all duration-300 h-12 text-base font-medium
                                            rounded-full"
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
            <CommandDialog
                open={searchOpen}
                onOpenChange={setSearchOpen}
            >
                <div className="bg-white/95 backdrop-blur-sm rounded-t-lg">
                    <CommandInput
                        placeholder="Search products..."
                        className="border-none focus:ring-0 focus:border-none h-12"
                    />
                </div>
                <CommandList className="p-4">
                    <CommandEmpty className="text-gray-500 text-sm py-6 text-center">
                        No results found.
                    </CommandEmpty>
                    <CommandGroup heading="Suggestions" className="text-gray-700">
                        {searchSuggestions.map((item) => (
                            <CommandItem
                                key={item.title}
                                onSelect={() => {
                                    setSearchOpen(false)
                                    window.location.href = item.href
                                }}
                                className="cursor-pointer hover:bg-gray-50 active:bg-gray-100 px-4 py-3 rounded-lg"
                            >
                                <div className="flex flex-col">
                                    <span className="font-medium">{item.title}</span>
                                    <span className="text-sm text-gray-500">{item.category}</span>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </header>
    )
}