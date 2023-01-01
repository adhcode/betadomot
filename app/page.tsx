'use client'

import { useState } from 'react'
import { HeroSection } from "./components/home/hero/hero-section"
import { DynamicCategories } from "./components/home/dynamic-categories/dynamic-categories"
import { FeaturedProducts } from "./components/home/featured-products/featured-products"
import { ServicesSection } from "./components/home/services/services"
import { EnergyBillsSection } from "./components/home/energy-bills/energy-bills-section"
import { SecuritySection } from "./components/home/security/security-section"
import { HomeImprovementSection } from "./components/home/home-improvement/home-improvement-section"
import { BlogSection } from "./components/blog/blog-section"
import { NewsletterSection } from "./components/home/newsletter/newsletter-section"
import { type Product } from '@/types/product'
import { products as baseProducts } from '@/data/products'
import { ProductShowcase } from './components/home/product-showcase/product-showcase'
import { ArrowRight, Clock, TrendingUp, Star, Sparkles, Shield, Zap, Home, Sun } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const products: Product[] = baseProducts.map(product => ({
  ...product,
  createdAt: new Date().toISOString()
}))

export default function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  return (
    <main className="flex-1">
      <HeroSection />

      {/* Mother's Day Gifts */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">mother's day gifts she'll love</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">shop the collection</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ProductCard
              title="spa gift set"
              price="35,000"
              image="/spa-1.jpg"
              badge={{ text: "Gift Idea", variant: "secondary" }}
            />
            <ProductCard
              title="jewelry box"
              price="28,000"
              image="/jewelry-1.jpg"
              badge={{ text: "Best Seller", variant: "default" }}
            />
            <ProductCard
              title="tea set"
              price="45,000"
              image="/tea-1.jpg"
              badge={{ text: "New", variant: "secondary" }}
            />
            <ProductCard
              title="photo frame set"
              price="22,000"
              image="/frames-1.jpg"
              badge={{ text: "Gift Idea", variant: "secondary" }}
            />
          </div>
        </div>
      </section>

      {/* Easter Collection */}
      <section className="py-16 bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">easter entertaining essentials</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">shop all easter</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ProductCard
              title="dining set"
              price="150,000"
              image="/easter-dining-1.jpg"
              badge={{ text: "Featured", variant: "secondary" }}
            />
            <ProductCard
              title="table runner"
              price="15,000"
              image="/runner-1.jpg"
              badge={{ text: "New", variant: "default" }}
            />
            <ProductCard
              title="serving set"
              price="45,000"
              image="/serving-1.jpg"
              badge={{ text: "Must Have", variant: "secondary" }}
            />
            <ProductCard
              title="centerpiece"
              price="25,000"
              image="/centerpiece-1.jpg"
              badge={{ text: "Featured", variant: "secondary" }}
            />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">just landed: new arrivals</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">view all new arrivals</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <ProductCard
              title="modern pendant light"
              price="85,000"
              image="/pendant-1.jpg"
              badge={{ text: "New", variant: "default" }}
            />
            <ProductCard
              title="accent table"
              price="65,000"
              image="/accent-table-1.jpg"
              badge={{ text: "New", variant: "default" }}
            />
            <ProductCard
              title="wall shelf set"
              price="45,000"
              image="/shelf-1.jpg"
              badge={{ text: "New", variant: "default" }}
            />
            <ProductCard
              title="area rug"
              price="120,000"
              image="/rug-1.jpg"
              badge={{ text: "New", variant: "default" }}
            />
            <ProductCard
              title="desk lamp"
              price="35,000"
              image="/desk-lamp-1.jpg"
              badge={{ text: "New", variant: "default" }}
            />
            <ProductCard
              title="storage basket"
              price="18,000"
              image="/basket-1.jpg"
              badge={{ text: "New", variant: "default" }}
            />
          </div>
        </div>
      </section>

      {/* Cool Finds */}
      <section className="py-16 bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">cool finds under ₦50,000</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">view all finds</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <ProductCard
              title="decorative cushion"
              price="12,000"
              image="/cushion-1.jpg"
              badge={{ text: "Best Value", variant: "secondary" }}
            />
            <ProductCard
              title="wall clock"
              price="25,000"
              image="/clock-1.jpg"
              badge={{ text: "Trending", variant: "default" }}
            />
            <ProductCard
              title="plant stand"
              price="18,000"
              image="/plant-stand-1.jpg"
              badge={{ text: "Popular", variant: "secondary" }}
            />
            <ProductCard
              title="table lamp"
              price="35,000"
              image="/lamp-2.jpg"
              badge={{ text: "Best Seller", variant: "default" }}
            />
            <ProductCard
              title="storage basket set"
              price="22,000"
              image="/basket-2.jpg"
              badge={{ text: "New", variant: "secondary" }}
            />
            <ProductCard
              title="photo frames"
              price="15,000"
              image="/frames-2.jpg"
              badge={{ text: "Hot Pick", variant: "default" }}
            />
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">what's trending now</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">view all trending</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <ProductCard
              title="Modern Floor Lamp"
              price="45,000"
              image="/lamp-1.jpg"
              badge={{ text: "Trending", variant: "default" }}
            />
            <ProductCard
              title="Velvet Accent Chair"
              price="120,000"
              image="/chair-1.jpg"
              badge={{ text: "Best Seller", variant: "secondary" }}
            />
            <ProductCard
              title="Ceramic Vase Set"
              price="25,000"
              image="/vase-1.jpg"
              badge={{ text: "New", variant: "default" }}
            />
            <ProductCard
              title="Wall Art Collection"
              price="35,000"
              image="/art-1.jpg"
              badge={{ text: "Trending", variant: "default" }}
            />
            <ProductCard
              title="Throw Pillows Set"
              price="18,000"
              image="/pillows-1.jpg"
              badge={{ text: "Hot Pick", variant: "secondary" }}
            />
            <ProductCard
              title="Table Decor Set"
              price="28,000"
              image="/decor-1.jpg"
              badge={{ text: "New", variant: "default" }}
            />
          </div>
        </div>
      </section>

      {/* Daily Deals */}
      <section className="py-16 bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">24-hours only: deals of the day</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">see all deals</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <ProductCard
              title="Luxury Sofa"
              price="450,000"
              originalPrice="600,000"
              image="/sofa-deal-1.jpg"
              badge={{ text: "25% Off", variant: "destructive" }}
            />
            <ProductCard
              title="Coffee Table"
              price="75,000"
              originalPrice="150,000"
              image="/table-deal-1.jpg"
              badge={{ text: "50% Off", variant: "destructive" }}
            />
            <ProductCard
              title="Floor Lamp"
              price="35,000"
              originalPrice="50,000"
              image="/lamp-deal-1.jpg"
              badge={{ text: "30% Off", variant: "destructive" }}
            />
            <ProductCard
              title="Dining Set"
              price="280,000"
              originalPrice="400,000"
              image="/dining-deal-1.jpg"
              badge={{ text: "30% Off", variant: "destructive" }}
            />
            <ProductCard
              title="Bedside Table"
              price="45,000"
              originalPrice="60,000"
              image="/bedside-deal-1.jpg"
              badge={{ text: "25% Off", variant: "destructive" }}
            />
            <ProductCard
              title="Wall Mirror"
              price="40,000"
              originalPrice="80,000"
              image="/mirror-deal-1.jpg"
              badge={{ text: "50% Off", variant: "destructive" }}
            />
          </div>
        </div>
      </section>

      {/* Style Inspiration: Modern Living */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">style inspiration: modern living</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">shop the look</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src="/modern-sofa-1.jpg" alt="Contemporary Sofa 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src="/modern-sofa-2.jpg" alt="Contemporary Sofa 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-lg font-medium group cursor-pointer">
                <span className="flex items-center gap-2">
                  contemporary sofas from ₦650,000
                  <ArrowRight className="h-5 w-5 text-[#E4A853] transition-transform group-hover:translate-x-1" />
                </span>
              </h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src="/modern-light-1.jpg" alt="Statement Lighting 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src="/modern-light-2.jpg" alt="Statement Lighting 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-lg font-medium group cursor-pointer">
                <span className="flex items-center gap-2">
                  statement lighting from ₦120,000
                  <ArrowRight className="h-5 w-5 text-[#E4A853] transition-transform group-hover:translate-x-1" />
                </span>
              </h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src="/modern-storage-1.jpg" alt="Minimalist Storage 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src="/modern-storage-2.jpg" alt="Minimalist Storage 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-lg font-medium group cursor-pointer">
                <span className="flex items-center gap-2">
                  minimalist storage from ₦250,000
                  <ArrowRight className="h-5 w-5 text-[#E4A853] transition-transform group-hover:translate-x-1" />
                </span>
              </h3>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src="/modern-accent-1.jpg" alt="Accent Pieces 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src="/modern-accent-2.jpg" alt="Accent Pieces 2" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-lg font-medium group cursor-pointer">
                <span className="flex items-center gap-2">
                  accent pieces from ₦85,000
                  <ArrowRight className="h-5 w-5 text-[#E4A853] transition-transform group-hover:translate-x-1" />
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Saving Appliances */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">energy saving appliances</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">view all appliances</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Smart Refrigerators"
              price="450,000"
              images={['/fridge-1.jpg', '/fridge-2.jpg']}
            />
            <CategoryCard
              title="Energy Efficient ACs"
              price="350,000"
              images={['/ac-1.jpg', '/ac-2.jpg']}
            />
            <CategoryCard
              title="Smart Washing Machines"
              price="280,000"
              images={['/washer-1.jpg', '/washer-2.jpg']}
            />
            <CategoryCard
              title="LED Lighting Solutions"
              price="45,000"
              images={['/led-1.jpg', '/led-2.jpg']}
            />
          </div>
        </div>
      </section>

      {/* Smart Home Essentials */}
      <section className="py-16 bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">smart home essentials</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">view all smart devices</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <ProductCard
              title="Smart Security Camera"
              price="85,000"
              image="/camera-1.jpg"
              badge={{ text: "Best Seller", variant: "default" }}
            />
            <ProductCard
              title="Smart Doorbell"
              price="65,000"
              image="/doorbell-1.jpg"
              badge={{ text: "New", variant: "secondary" }}
            />
            <ProductCard
              title="Smart Light Bulbs Set"
              price="45,000"
              image="/bulbs-1.jpg"
              badge={{ text: "Popular", variant: "default" }}
            />
            <ProductCard
              title="Smart Thermostat"
              price="120,000"
              image="/thermostat-1.jpg"
              badge={{ text: "Energy Saver", variant: "secondary" }}
            />
            <ProductCard
              title="Smart Lock"
              price="95,000"
              image="/lock-1.jpg"
              badge={{ text: "Top Rated", variant: "default" }}
            />
            <ProductCard
              title="Smart Speaker"
              price="75,000"
              image="/speaker-1.jpg"
              badge={{ text: "Must Have", variant: "secondary" }}
            />
          </div>
        </div>
      </section>

      {/* Home Office */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">create your perfect home office</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">shop home office</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Ergonomic Chairs"
              price="180,000"
              images={['/office-chair-1.jpg', '/office-chair-2.jpg']}
            />
            <CategoryCard
              title="Standing Desks"
              price="250,000"
              images={['/standing-desk-1.jpg', '/standing-desk-2.jpg']}
            />
            <CategoryCard
              title="Storage Solutions"
              price="120,000"
              images={['/office-storage-1.jpg', '/office-storage-2.jpg']}
            />
            <CategoryCard
              title="Desk Accessories"
              price="45,000"
              images={['/desk-acc-1.jpg', '/desk-acc-2.jpg']}
            />
          </div>
        </div>
      </section>

      {/* Outdoor Space */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">transform your outdoor space</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">view outdoor collection</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Lounge Sets"
              price="450,000"
              images={['/outdoor-lounge-1.jpg', '/outdoor-lounge-2.jpg']}
            />
            <CategoryCard
              title="Dining Sets"
              price="350,000"
              images={['/outdoor-dining-1.jpg', '/outdoor-dining-2.jpg']}
            />
            <CategoryCard
              title="Garden Decor"
              price="85,000"
              images={['/garden-decor-1.jpg', '/garden-decor-2.jpg']}
            />
            <CategoryCard
              title="Lighting"
              price="65,000"
              images={['/outdoor-light-1.jpg', '/outdoor-light-2.jpg']}
            />
          </div>
        </div>
      </section>

      {/* Kitchen & Dining */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">kitchen & dining done right</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">view all kitchen</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category Cards */}
            <CategoryCard
              title="Dining tables"
              price="200,000"
              images={['/dining-table-1.jpg', '/dining-table-2.jpg']}
            />
            <CategoryCard
              title="Dining chairs"
              price="50,000"
              images={['/dining-chair-1.jpg', '/dining-chair-2.jpg']}
            />
            <CategoryCard
              title="Bar stools"
              price="50,000"
              images={['/bar-stool-1.jpg', '/bar-stool-2.jpg']}
            />
            <CategoryCard
              title="Sideboards"
              price="100,000"
              images={['/sideboard-1.jpg', '/sideboard-2.jpg']}
            />
          </div>
        </div>
      </section>

      {/* Outdoor Entertaining */}
      <section className="py-16 bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">best sellers: outdoor entertaining</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">see all</a>
          </div>
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* Product Cards */}
              {/* Add your outdoor entertaining products here */}
            </div>
          </div>
        </div>
      </section>

      {/* Room Collections */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Living Room */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">living room essentials</h2>
                <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">view all living room</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <CategoryCard
                  title="Sofas"
                  price="500,000"
                  images={['/sofa-1.jpg', '/sofa-2.jpg']}
                />
                <CategoryCard
                  title="Coffee tables"
                  price="150,000"
                  images={['/coffee-table-1.jpg', '/coffee-table-2.jpg']}
                />
                <CategoryCard
                  title="TV stands"
                  price="200,000"
                  images={['/tv-stand-1.jpg', '/tv-stand-2.jpg']}
                />
                <CategoryCard
                  title="Accent chairs"
                  price="150,000"
                  images={['/accent-chair-1.jpg', '/accent-chair-2.jpg']}
                />
              </div>
            </div>

            {/* Bedroom */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">bedroom collections</h2>
                <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">view all bedroom</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <CategoryCard
                  title="Beds"
                  price="400,000"
                  images={['/bed-1.jpg', '/bed-2.jpg']}
                />
                <CategoryCard
                  title="Mattresses"
                  price="250,000"
                  images={['/mattress-1.jpg', '/mattress-2.jpg']}
                />
                <CategoryCard
                  title="Wardrobes"
                  price="300,000"
                  images={['/wardrobe-1.jpg', '/wardrobe-2.jpg']}
                />
                <CategoryCard
                  title="Bedside tables"
                  price="80,000"
                  images={['/bedside-table-1.jpg', '/bedside-table-2.jpg']}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Smart Home Solutions</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">View all solutions</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Security */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-5 w-5 text-[#E4A853]" />
                <h3 className="text-lg font-medium text-gray-900">Secure Home</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Protect your home with smart security solutions, from cameras to smart locks.</p>
              <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 text-sm font-medium flex items-center gap-2">
                Explore security options
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Energy */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="h-5 w-5 text-[#E4A853]" />
                <h3 className="text-lg font-medium text-gray-900">Energy Management</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Smart solutions to monitor and reduce your energy consumption.</p>
              <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 text-sm font-medium flex items-center gap-2">
                View energy solutions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Home Care */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Home className="h-5 w-5 text-[#E4A853]" />
                <h3 className="text-lg font-medium text-gray-900">Home Care</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Automated solutions for cleaning, maintenance, and home care.</p>
              <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 text-sm font-medium flex items-center gap-2">
                Discover home care
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Home Services */}
      <section className="py-16 bg-white">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Home Services</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">View all services</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Installation */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Installation</h3>
              <p className="text-sm text-gray-600">Professional installation for all your furniture and appliances</p>
            </div>

            {/* Assembly */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Assembly</h3>
              <p className="text-sm text-gray-600">Expert assembly service for your new furniture</p>
            </div>

            {/* Maintenance */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Maintenance</h3>
              <p className="text-sm text-gray-600">Regular maintenance to keep your home in perfect condition</p>
            </div>

            {/* Design */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Design</h3>
              <p className="text-sm text-gray-600">Interior design consultation and space planning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Moved from Hero) */}
      <section className="py-16 bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-[#E4A853] text-2xl font-bold mb-2">Premium Quality</div>
              <div className="text-gray-600">Curated Selection</div>
            </div>
            <div className="text-center">
              <div className="text-[#E4A853] text-2xl font-bold mb-2">Fast Delivery</div>
              <div className="text-gray-600">Nationwide</div>
            </div>
            <div className="text-center">
              <div className="text-[#E4A853] text-2xl font-bold mb-2">Expert Support</div>
              <div className="text-gray-600">24/7 Available</div>
            </div>
            <div className="text-center">
              <div className="text-[#E4A853] text-2xl font-bold mb-2">Easy Returns</div>
              <div className="text-gray-600">30-Day Policy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      {/* Our Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="text-[#E4A853] mb-2">Our Collections</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything for</h2>
            <h2 className="text-4xl font-bold text-[#E4A853] mb-6">your dream home.</h2>
            <p className="text-gray-600">Curated excellence for the sophisticated home, from essentials to elegance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Furniture */}
            <div className="group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
                <img
                  src="/categories/smart-furniture.jpg"
                  alt="Smart Furniture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-sm">Smart Furniture</Badge>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Furniture</h3>
              <p className="text-gray-600">Intelligent furniture for the modern home</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Smart Sofas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Adjustable Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Connected Tables</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Intelligent Storage</span>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <a href="#" className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black/90">View All</a>
                <a href="#" className="border border-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black/5">Explore</a>
              </div>
            </div>

            {/* Bedding & Bath */}
            <div className="group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
                <img
                  src="/categories/bedding.jpg"
                  alt="Bedding & Bath"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-sm">Bedding & Bath</Badge>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bedding & Bath</h3>
              <p className="text-gray-600">Luxury bedding and bath essentials</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Premium Bedding</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Smart Mattresses</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Luxury Towels</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Bath Automation</span>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <a href="#" className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black/90">View All</a>
                <a href="#" className="border border-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black/5">Explore</a>
              </div>
            </div>

            {/* Home Decor */}
            <div className="group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
                <img
                  src="/categories/decor.jpg"
                  alt="Home Decor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-sm">Home Decor</Badge>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Home Decor</h3>
              <p className="text-gray-600">Beautiful accents for your home</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Art Pieces</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Vases</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Mirrors</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E4A853]"></span>
                  <span className="text-sm text-gray-600">Rugs</span>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <a href="#" className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black/90">View All</a>
                <a href="#" className="border border-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black/5">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Collections */}
      <section className="py-16 bg-gray-50">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">all collections</h2>
            <a href="#" className="text-[#E4A853] hover:text-[#E4A853]/90 font-medium">view all collections</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">living room</h3>
              <p className="text-sm text-gray-600">from ₦150,000</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">bedroom</h3>
              <p className="text-sm text-gray-600">from ₦200,000</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">dining</h3>
              <p className="text-sm text-gray-600">from ₦180,000</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">office</h3>
              <p className="text-sm text-gray-600">from ₦120,000</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">outdoor</h3>
              <p className="text-sm text-gray-600">from ₦250,000</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-gray-900 mb-2">decor</h3>
              <p className="text-sm text-gray-600">from ₦15,000</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Category Card Component
function CategoryCard({ title, price, images }: { title: string, price: string, images: string[] }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img src={image} alt={`${title} ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <h3 className="text-lg font-medium group cursor-pointer">
        <span className="flex items-center gap-2">
          {title.toLowerCase()} from ₦{price}
          <ArrowRight className="h-5 w-5 text-[#E4A853] transition-transform group-hover:translate-x-1" />
        </span>
      </h3>
    </div>
  )
}

// Product Card Component
function ProductCard({
  title,
  price,
  originalPrice,
  image,
  badge
}: {
  title: string
  price: string
  originalPrice?: string
  image: string
  badge?: { text: string; variant: 'default' | 'secondary' | 'destructive' }
}) {
  return (
    <div className="group relative">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
        {badge && (
          <div className="absolute top-2 left-2">
            <Badge variant={badge.variant} className="text-xs font-medium">
              {badge.text}
            </Badge>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-700 font-medium">{title}</h3>
        <div className="mt-1 flex items-center gap-2">
          <p className="text-sm font-semibold text-gray-900">₦{price}</p>
          {originalPrice && (
            <p className="text-sm text-gray-500 line-through">₦{originalPrice}</p>
          )}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-white">
          Quick View
        </div>
      </div>
    </div>
  )
}
