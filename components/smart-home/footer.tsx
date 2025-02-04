import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ShoppingBag, BookOpen, Users, Shield } from 'lucide-react'

export function Footer() {
    const currentYear = new Date().getFullYear()

    const footerSections = {
        products: [
            { title: "Smart Bulbs & Lighting", href: "/products/lighting" },
            { title: "Inverter Appliances", href: "/products/appliances" },
            { title: "Smart Plugs & Strips", href: "/products/smart-plugs" },
            { title: "Energy Monitors", href: "/products/monitors" },
            { title: "IoT Controllers", href: "/products/controllers" }
        ],
        learn: [
            { title: "Energy Basics", href: "/learn/basics" },
            { title: "Smart Home Guide", href: "/learn/smart-home" },
            { title: "Savings Calculator", href: "/tools/calculator" },
            { title: "Video Tutorials", href: "/learn/tutorials" },
            { title: "Energy Blog", href: "/blog" }
        ],
        community: [
            { title: "Success Stories", href: "/community/stories" },
            { title: "Energy Forums", href: "/community/forum" },
            { title: "Expert Advice", href: "/community/experts" },
            { title: "Events", href: "/community/events" },
            { title: "Newsletter", href: "/newsletter" }
        ],
        support: [
            { title: "Product Support", href: "/support" },
            { title: "Installation Help", href: "/support/installation" },
            { title: "FAQs", href: "/support/faqs" },
            { title: "Contact Us", href: "/contact" },
            { title: "Warranty Info", href: "/support/warranty" }
        ]
    }

    return (
        <footer className="bg-[#003366] pt-24 pb-12 px-4 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Company Info - Takes 2 columns */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold">Safirox</h2>
                        <p className="text-white/80 leading-relaxed max-w-sm">
                            Empowering homes with smart energy solutions. Learn, save, and contribute to a sustainable future.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { icon: ShoppingBag, label: "500+ Products" },
                                { icon: Users, label: "10K+ Users" },
                                { icon: Shield, label: "Certified" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm text-white/60">
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <ShoppingBag className="h-5 w-5 text-[#87CEEB]" />
                            Products
                        </h3>
                        <ul className="space-y-4">
                            {footerSections.products.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-white/70 hover:text-white transition-colors">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Learn */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-[#87CEEB]" />
                            Learn
                        </h3>
                        <ul className="space-y-4">
                            {footerSections.learn.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-white/70 hover:text-white transition-colors">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <Users className="h-5 w-5 text-[#87CEEB]" />
                            Community
                        </h3>
                        <ul className="space-y-4">
                            {footerSections.community.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-white/70 hover:text-white transition-colors">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <Shield className="h-5 w-5 text-[#87CEEB]" />
                            Support
                        </h3>
                        <ul className="space-y-4">
                            {footerSections.support.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href} className="text-white/70 hover:text-white transition-colors">
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info Bar */}
                <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-white/10 mb-8">
                    {[
                        { icon: Mail, text: "contact@safirox.com" },
                        { icon: Phone, text: "+1 (555) 123-4567" },
                        { icon: MapPin, text: "123 Energy Street, Smart City, SC 12345" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <item.icon className="h-5 w-5 text-[#87CEEB]" />
                            <span className="text-white/70">{item.text}</span>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60">
                            © {currentYear} Safirox. All rights reserved.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-white/60 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="/sitemap" className="text-white/60 hover:text-white transition-colors">
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 