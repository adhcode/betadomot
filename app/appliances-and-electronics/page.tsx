'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Menu, ArrowRight, ChevronDown, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

// Mock product data
const products = [
  { id: 1, name: "Smart Refrigerator", price: 1299.99, image: "/placeholder.svg?height=300&width=300", rating: 4.5 },
  { id: 2, name: "Energy Efficient Washing Machine", price: 799.99, image: "/placeholder.svg?height=300&width=300", rating: 4.2 },
  { id: 3, name: "LED Smart TV", price: 599.99, image: "/placeholder.svg?height=300&width=300", rating: 4.7 },
  { id: 4, name: "Smart Thermostat", price: 249.99, image: "/placeholder.svg?height=300&width=300", rating: 4.8 },
  { id: 5, name: "Solar-Powered Charger", price: 79.99, image: "/placeholder.svg?height=300&width=300", rating: 4.3 },
  { id: 6, name: "Energy-Saving Light Bulbs (4-pack)", price: 19.99, image: "/placeholder.svg?height=300&width=300", rating: 4.6 },
]

export default function AppliancesAndElectronics() {
  const [sortOrder, setSortOrder] = useState('featured')
  const [cartItems, setCartItems] = useState<number[]>([])
  const [isSmartHomeOpen, setIsSmartHomeOpen] = useState(false)

  const addToCart = (productId: number) => {
    setCartItems([...cartItems, productId])
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'priceLowToHigh') return a.price - b.price
    if (sortOrder === 'priceHighToLow') return b.price - a.price
    if (sortOrder === 'topRated') return b.rating - a.rating
    return 0 // 'featured' order
  })

  const smartHomeLinks = [
    { title: "Appliances and Electronics", href: "#" },
    { title: "Lighting", href: "#" },
    { title: "Residential Renewable Energy", href: "#" },
  ]

  return (
    <div className={`flex flex-col min-h-screen bg-white ${montserrat.className}`}>
      <header className="bg-white text-[#003366] sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl">Safirox</span>
          </Link>
          <nav className="hidden lg:flex font-medium space-x-8">
            <Link href="/" className="text-base hover:text-[#87CEEB] transition-colors relative group">
              Home
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#87CEEB] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link href="#" className="text-base hover:text-[#87CEEB] transition-colors relative group">
              Energy Saving
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#87CEEB] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <div className="relative group">
              <button
                onClick={() => setIsSmartHomeOpen(!isSmartHomeOpen)}
                className="text-base hover:text-[#87CEEB] transition-colors flex items-center"
              >
                Product & Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isSmartHomeOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
                  {smartHomeLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-[#003366] hover:bg-[#87CEEB] hover:text-white transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="#" className="text-base hover:text-[#87CEEB] transition-colors relative group">
              Contact
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#87CEEB] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="/" className="text-lg hover:text-[#87CEEB] transition-colors">Home</Link>
                  <Link href="#" className="text-lg hover:text-[#87CEEB] transition-colors">Energy Saving</Link>
                  <div>
                    <button
                      onClick={() => setIsSmartHomeOpen(!isSmartHomeOpen)}
                      className="text-lg hover:text-[#87CEEB] transition-colors flex items-center"
                    >
                      Product & Services
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isSmartHomeOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {smartHomeLinks.map((link, index) => (
                          <Link
                            key={index}
                            href={link.href}
                            className="block text-sm text-[#003366] hover:text-[#87CEEB] transition-colors"
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <Link href="#" className="text-lg hover:text-[#87CEEB] transition-colors">Contact</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Appliances and Electronics</h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Revolutionize your home with energy-efficient technology. Save money, reduce your carbon footprint, and enjoy the convenience of smart appliances.
            </p>
            <Button className="bg-[#87CEEB] text-[#003366] hover:bg-white transition-colors rounded-full px-8 py-3 text-lg group">
              Explore Our Range
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-[#003366]">Featured Products</h2>
              <div className="flex items-center space-x-4">
                <label htmlFor="sort" className="text-sm font-medium text-[#003366]">Sort by:</label>
                <Select value={sortOrder} onValueChange={setSortOrder}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort order" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
                    <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
                    <SelectItem value="topRated">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="p-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <CardTitle className="text-xl font-semibold mb-2 text-[#003366]">{product.name}</CardTitle>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className={`h-5 w-5 ${
                            index < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({product.rating.toFixed(1)})</span>
                    </div>
                    <p className="text-2xl font-bold text-[#87CEEB]">${product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      className="w-full bg-[#003366] text-white hover:bg-[#002244] transition-colors rounded-full"
                      onClick={() => addToCart(product.id)}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#003366] mb-6">Stay Informed, Save More</h2>
            <p className="text-xl text-[#87CEEB] mb-10 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest energy-saving tips, exclusive deals, and insights on smart home technology.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-gray-50 text-[#003366] placeholder-gray-400 border-[#87CEEB] focus:border-[#003366] rounded-full"
              />
              <Button type="submit" className="bg-[#003366] text-white hover:bg-[#002244] transition-colors rounded-full px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#003366] py-12 px-4 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Safirox</h2>
            <p>Smart solutions for a sustainable future.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#87CEEB] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="space-y-2">
              {["FAQ", "Shipping", "Returns"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-[#87CEEB] transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Safirox. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}