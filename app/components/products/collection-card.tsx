'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { type Collection } from '../../data/collections'
import { type Product } from '../../../types/product'

interface CollectionCardProps {
    collection: Collection
    products: Product[]
}

export function CollectionCard({ collection, products }: CollectionCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-xl">
            {/* Collection Image */}
            <div className="aspect-[4/3] relative">
                <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            {/* Collection Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                    {collection.name}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                    {collection.description}
                </p>

                {/* Products Preview */}
                <div className="flex gap-2 mb-4">
                    {products.slice(0, 3).map(product => (
                        <div
                            key={product.id}
                            className="w-12 h-12 relative rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm"
                        >
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                    {products.length > 3 && (
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                            <span className="text-white text-sm">+{products.length - 3}</span>
                        </div>
                    )}
                </div>

                {/* View Collection Link */}
                <Link
                    href={`/collections/${collection.id}`}
                    className="inline-flex items-center gap-2 text-white hover:text-[#E4A853] transition-colors"
                >
                    <span>View Collection</span>
                    <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    )
} 