import Image from 'next/image'
import { Badge } from './badge'
import { formatPrice } from '../../lib/utils'

interface ProductCardProps {
    product: {
        id: string
        name: string
        price: number
        originalPrice?: number
        images: string[]
        isOnSale?: boolean
        dealType?: 'Deal of the Day' | 'Sale' | 'Open Box'
    }
    variant?: 'default' | 'compact'
    showBadge?: boolean
}

export function ProductCard({ product, variant = 'default', showBadge = true }: ProductCardProps) {
    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0

    return (
        <div className="group relative">
            {/* Product Image */}
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                />
                {showBadge && product.dealType && (
                    <div className="absolute top-2 left-2">
                        <Badge
                            variant={product.dealType === 'Deal of the Day' ? 'destructive' : 'secondary'}
                            className="text-xs font-medium"
                        >
                            {product.dealType}
                        </Badge>
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="mt-4">
                {variant === 'default' ? (
                    <>
                        <h3 className="text-sm text-gray-700 font-medium line-clamp-2">
                            {product.name}
                        </h3>
                        <div className="mt-2 flex items-center">
                            <p className="text-lg font-semibold text-gray-900">
                                {formatPrice(product.price)}
                            </p>
                            {product.originalPrice && (
                                <>
                                    <p className="ml-2 text-sm text-gray-500 line-through">
                                        {formatPrice(product.originalPrice)}
                                    </p>
                                    <p className="ml-2 text-sm font-medium text-green-600">
                                        {discount}% Off
                                    </p>
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-sm text-gray-700 font-medium line-clamp-1">
                                {product.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {formatPrice(product.price)}
                            </p>
                        </div>
                        {product.originalPrice && (
                            <Badge variant="outline" className="text-xs">
                                {discount}% Off
                            </Badge>
                        )}
                    </div>
                )}
            </div>

            {/* Quick View Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-gray-900 hover:bg-white">
                    Quick View
                </div>
            </div>
        </div>
    )
} 