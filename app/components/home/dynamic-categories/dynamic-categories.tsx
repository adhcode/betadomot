import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Flame, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
    id: number
    name: string
    price: number
    image: string
    originalPrice?: number
    discount?: number
    trending?: boolean
}

interface Category {
    id: string
    title: string
    description: string
    tag?: string
    image: string
    products: Product[]
}

const categories: Category[] = [
    {
        id: 'deals',
        title: 'Deals of the Day',
        description: 'Limited-time discounts on must-have home essentials',
        tag: 'Limited Time',
        image: '/categories/deals.jpg',
        products: [
            {
                id: 1,
                name: 'Smart LED Bundle',
                price: 24999,
                originalPrice: 34999,
                discount: 30,
                image: '/products/led-bundle.jpg'
            },
            {
                id: 2,
                name: 'Air Purifier Pro',
                price: 89999,
                originalPrice: 129999,
                discount: 25,
                image: '/products/purifier.jpg'
            },
            {
                id: 3,
                name: 'Robot Vacuum',
                price: 149999,
                originalPrice: 199999,
                discount: 20,
                image: '/products/vacuum.jpg'
            }
        ]
    },
    {
        id: 'cool-finds',
        title: 'Cool Finds on Betadomot',
        description: 'Trending products everyone\'s talking about',
        tag: 'Trending',
        image: '/categories/trending.jpg',
        products: [
            {
                id: 4,
                name: 'Smart Mirror',
                price: 199999,
                trending: true,
                image: '/products/mirror.jpg'
            },
            {
                id: 5,
                name: 'Plant Monitor',
                price: 12999,
                trending: true,
                image: '/products/plant-monitor.jpg'
            },
            {
                id: 6,
                name: 'Sleep Tech Pod',
                price: 299999,
                trending: true,
                image: '/products/sleep-pod.jpg'
            }
        ]
    },
    {
        id: 'no-blackouts',
        title: 'No More Blackouts',
        description: 'Solar, inverters & backup power solutions',
        image: '/categories/power.jpg',
        products: [
            {
                id: 7,
                name: 'Solar Inverter Kit',
                price: 449999,
                image: '/products/inverter.jpg'
            },
            {
                id: 8,
                name: 'Battery Bank Pro',
                price: 299999,
                image: '/products/battery.jpg'
            },
            {
                id: 9,
                name: 'Solar Panels 400W',
                price: 199999,
                image: '/products/solar.jpg'
            }
        ]
    },
    {
        id: 'naija-kitchen',
        title: 'Naija Kitchen Must-Haves',
        description: 'Blenders, air fryers & cooking gadgets',
        image: '/categories/kitchen.jpg',
        products: [
            {
                id: 10,
                name: 'Smart Air Fryer',
                price: 89999,
                image: '/products/airfryer.jpg'
            },
            {
                id: 11,
                name: 'Pro Blender',
                price: 49999,
                image: '/products/blender.jpg'
            },
            {
                id: 12,
                name: 'Rice Cooker Plus',
                price: 39999,
                image: '/products/rice-cooker.jpg'
            }
        ]
    },
    {
        id: 'luxury-less',
        title: 'Luxury for Less',
        description: 'Affordable upgrades to make your space feel premium',
        image: '/categories/luxury.jpg',
        products: [
            {
                id: 13,
                name: 'Smart Chandelier',
                price: 149999,
                image: '/products/chandelier.jpg'
            },
            {
                id: 14,
                name: 'Premium Diffuser',
                price: 29999,
                image: '/products/diffuser.jpg'
            },
            {
                id: 15,
                name: 'Auto Curtains',
                price: 89999,
                image: '/products/curtains.jpg'
            }
        ]
    },
    {
        id: 'small-apartment',
        title: 'Small Apartment, Big Style',
        description: 'Space-saving furniture & storage ideas for urban living',
        image: '/categories/apartment.jpg',
        products: [
            {
                id: 16,
                name: 'Folding Desk',
                price: 79999,
                image: '/products/desk.jpg'
            },
            {
                id: 17,
                name: 'Wall Bed System',
                price: 299999,
                image: '/products/wall-bed.jpg'
            },
            {
                id: 18,
                name: 'Storage Ottoman',
                price: 49999,
                image: '/products/ottoman.jpg'
            }
        ]
    },
    {
        id: 'stay-cool',
        title: 'Stay Fresh, Stay Cool',
        description: 'Power-efficient fans & ACs to beat the heat',
        image: '/categories/cooling.jpg',
        products: [
            {
                id: 19,
                name: 'Smart AC',
                price: 399999,
                image: '/products/ac.jpg'
            },
            {
                id: 20,
                name: 'Tower Fan Pro',
                price: 89999,
                image: '/products/fan.jpg'
            },
            {
                id: 21,
                name: 'Ceiling Fan Plus',
                price: 129999,
                image: '/products/ceiling-fan.jpg'
            }
        ]
    },
    {
        id: 'festive',
        title: 'Naija Festive Essentials',
        description: 'Home décor & hosting must-haves for celebrations',
        image: '/categories/festive.jpg',
        products: [
            {
                id: 22,
                name: 'Party Lights Set',
                price: 34999,
                image: '/products/lights.jpg'
            },
            {
                id: 23,
                name: 'Sound System',
                price: 199999,
                image: '/products/sound.jpg'
            },
            {
                id: 24,
                name: 'Serving Set',
                price: 49999,
                image: '/products/serving.jpg'
            }
        ]
    },
    {
        id: 'secure-space',
        title: 'Secure Your Space',
        description: 'Affordable security cameras, smart locks & safety solutions',
        image: '/categories/security.jpg',
        products: [
            {
                id: 25,
                name: 'Smart Camera Set',
                price: 89999,
                image: '/products/camera-set.jpg'
            },
            {
                id: 26,
                name: 'Door Lock Pro',
                price: 59999,
                image: '/products/lock.jpg'
            },
            {
                id: 27,
                name: 'Motion Sensors',
                price: 29999,
                image: '/products/sensors.jpg'
            }
        ]
    },
    {
        id: 'weekend-vibes',
        title: 'Weekend Vibes at Home',
        description: 'Turn your living room into a relaxation zone',
        image: '/categories/weekend.jpg',
        products: [
            {
                id: 28,
                name: 'Massage Chair',
                price: 499999,
                image: '/products/massage.jpg'
            },
            {
                id: 29,
                name: 'Smart TV 65"',
                price: 899999,
                image: '/products/tv.jpg'
            },
            {
                id: 30,
                name: 'Sound Bar',
                price: 149999,
                image: '/products/soundbar.jpg'
            }
        ]
    },
    {
        id: 'rainy-season',
        title: 'Rainy Season Ready',
        description: 'Waterproof furniture & humidity control solutions',
        image: '/categories/rainy.jpg',
        products: [
            {
                id: 31,
                name: 'Dehumidifier',
                price: 129999,
                image: '/products/dehumidifier.jpg'
            },
            {
                id: 32,
                name: 'Storage Boxes',
                price: 19999,
                image: '/products/storage.jpg'
            },
            {
                id: 33,
                name: 'Water Detector',
                price: 24999,
                image: '/products/detector.jpg'
            }
        ]
    },
    {
        id: 'dust-proof',
        title: 'Dust-Proof Your Home',
        description: 'Easy-clean furniture & air purifiers',
        image: '/categories/dust.jpg',
        products: [
            {
                id: 34,
                name: 'Air Purifier',
                price: 199999,
                image: '/products/purifier-pro.jpg'
            },
            {
                id: 35,
                name: 'Robot Vacuum',
                price: 299999,
                image: '/products/robot.jpg'
            },
            {
                id: 36,
                name: 'Dust Covers',
                price: 14999,
                image: '/products/covers.jpg'
            }
        ]
    },
    {
        id: 'budget-smart',
        title: 'Budget-Friendly Smart Homes',
        description: 'Affordable automation solutions',
        image: '/categories/budget.jpg',
        products: [
            {
                id: 37,
                name: 'Smart Plugs',
                price: 9999,
                image: '/products/plugs.jpg'
            },
            {
                id: 38,
                name: 'LED Strip',
                price: 14999,
                image: '/products/strip.jpg'
            },
            {
                id: 39,
                name: 'Motion Light',
                price: 19999,
                image: '/products/motion-light.jpg'
            }
        ]
    },
    {
        id: 'fast-cleanup',
        title: 'Fast Cleanup, No Stress',
        description: 'Smart cleaning solutions',
        image: '/categories/cleanup.jpg',
        products: [
            {
                id: 40,
                name: 'Smart Mop',
                price: 39999,
                image: '/products/mop.jpg'
            },
            {
                id: 41,
                name: 'Hand Vacuum',
                price: 49999,
                image: '/products/hand-vac.jpg'
            },
            {
                id: 42,
                name: 'Organizer Set',
                price: 29999,
                image: '/products/organizer.jpg'
            }
        ]
    },
    {
        id: 'kid-pet-friendly',
        title: 'Kid & Pet-Friendly Picks',
        description: 'Durable, safe home essentials',
        image: '/categories/family.jpg',
        products: [
            {
                id: 43,
                name: 'Pet Camera',
                price: 59999,
                image: '/products/pet-cam.jpg'
            },
            {
                id: 44,
                name: 'Child Lock Set',
                price: 19999,
                image: '/products/child-lock.jpg'
            },
            {
                id: 45,
                name: 'Air Monitor',
                price: 39999,
                image: '/products/air-monitor.jpg'
            }
        ]
    },
    {
        id: 'better-sleep',
        title: 'Upgrade Your Sleep',
        description: 'Sleep-friendly gadgets & bedding',
        image: '/categories/sleep.jpg',
        products: [
            {
                id: 46,
                name: 'Smart Pillow',
                price: 49999,
                image: '/products/pillow.jpg'
            },
            {
                id: 47,
                name: 'Sleep Tracker',
                price: 79999,
                image: '/products/tracker.jpg'
            },
            {
                id: 48,
                name: 'White Noise',
                price: 29999,
                image: '/products/noise.jpg'
            }
        ]
    },
    {
        id: 'host-like-boss',
        title: 'Host Like a Boss',
        description: 'Dining & entertaining essentials',
        image: '/categories/hosting.jpg',
        products: [
            {
                id: 49,
                name: 'Wine Cooler',
                price: 199999,
                image: '/products/wine.jpg'
            },
            {
                id: 50,
                name: 'Smart Table',
                price: 299999,
                image: '/products/table.jpg'
            },
            {
                id: 51,
                name: 'Party Lights',
                price: 39999,
                image: '/products/party.jpg'
            }
        ]
    }
]

export function DynamicCategories() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {categories.map((category) => (
                    <div key={category.id} className="mb-20 last:mb-0">
                        {/* Category Header */}
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    {category.tag && (
                                        <span className="inline-flex items-center gap-1 bg-[#E4A853]/10 text-[#E4A853] 
                                            px-2 py-1 rounded-full text-sm font-medium">
                                            {category.tag === 'Limited Time' && <Clock className="h-3 w-3" />}
                                            {category.tag === 'Trending' && <TrendingUp className="h-3 w-3" />}
                                            {category.tag}
                                        </span>
                                    )}
                                    <h2 className="text-2xl font-bold">{category.title}</h2>
                                </div>
                                <p className="text-gray-600">{category.description}</p>
                            </div>
                            <Link
                                href={`/categories/${category.id}`}
                                className="text-[#E4A853] font-medium flex items-center gap-2 hover:gap-3 
                                    transition-all duration-300 mt-4 sm:mt-0"
                            >
                                View All
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.products.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative bg-white rounded-xl overflow-hidden shadow-sm 
                                        hover:shadow-lg transition-all duration-300"
                                >
                                    <Link href={`/products/${product.id}`}>
                                        {/* Product Image */}
                                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover transition-transform duration-300 
                                                    group-hover:scale-105"
                                            />
                                            {product.discount && (
                                                <span className="absolute top-3 left-3 bg-red-500 text-white 
                                                    px-2 py-1 rounded-full text-sm font-medium">
                                                    {product.discount}% OFF
                                                </span>
                                            )}
                                            {product.trending && (
                                                <span className="absolute top-3 left-3 bg-[#E4A853] text-white 
                                                    px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                                                    <Flame className="h-3 w-3" />
                                                    Hot
                                                </span>
                                            )}
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-4">
                                            <h3 className="font-medium text-gray-900 group-hover:text-[#E4A853] 
                                                transition-colors line-clamp-1">
                                                {product.name}
                                            </h3>
                                            <div className="mt-2 flex items-baseline gap-2">
                                                <span className="text-[#E4A853] font-medium">
                                                    ₦{product.price.toLocaleString()}
                                                </span>
                                                {product.originalPrice && (
                                                    <span className="text-sm text-gray-500 line-through">
                                                        ₦{product.originalPrice.toLocaleString()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
} 