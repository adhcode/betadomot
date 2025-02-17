import Link from 'next/link'
import { ArrowRight, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Betadomot</h3>
                        <p className="text-gray-400">
                            Modern living redefined. Smart homes crafted for the Nigerian elite.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-[#E4A853] transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#E4A853] transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#E4A853] transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-[#E4A853] transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-[#E4A853] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {[
                                'Smart Home Design',
                                'Energy Solutions',
                                'Security Systems',
                                'Home Automation'
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/services/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-gray-400 hover:text-[#E4A853] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Lagos, Nigeria</li>
                            <li>+234 123 456 7890</li>
                            <li>info@betadomot.com</li>
                        </ul>
                        <Button
                            className="mt-4 bg-[#E4A853] text-black hover:bg-[#FFD700] 
                transition-all duration-300"
                        >
                            Get in Touch
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2024 Betadomot. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-gray-400 hover:text-[#E4A853] text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-[#E4A853] text-sm">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 