import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col gap-8 py-12 md:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Products</h3>
                        <nav className="flex flex-col gap-2">
                            <Link href="/products/furniture" className="text-sm text-muted-foreground hover:text-foreground">
                                Smart Furniture
                            </Link>
                            <Link href="/products/lighting" className="text-sm text-muted-foreground hover:text-foreground">
                                Smart Lighting
                            </Link>
                            <Link href="/products/appliances" className="text-sm text-muted-foreground hover:text-foreground">
                                Smart Appliances
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Services</h3>
                        <nav className="flex flex-col gap-2">
                            <Link href="/services/consultation" className="text-sm text-muted-foreground hover:text-foreground">
                                Consultation
                            </Link>
                            <Link href="/services/installation" className="text-sm text-muted-foreground hover:text-foreground">
                                Installation
                            </Link>
                            <Link href="/services/support" className="text-sm text-muted-foreground hover:text-foreground">
                                Support
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <nav className="flex flex-col gap-2">
                            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                                About Us
                            </Link>
                            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                                Blog
                            </Link>
                            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                                Contact
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">Legal</h3>
                        <nav className="flex flex-col gap-2">
                            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                                Terms of Service
                            </Link>
                            <Link href="/warranty" className="text-sm text-muted-foreground hover:text-foreground">
                                Warranty
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="text-sm text-muted-foreground">
                        © 2024 Betadomot. All rights reserved.
                    </div>
                    <div className="flex gap-4">
                        <Link href="https://facebook.com" className="text-muted-foreground hover:text-foreground">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="https://instagram.com" className="text-muted-foreground hover:text-foreground">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 