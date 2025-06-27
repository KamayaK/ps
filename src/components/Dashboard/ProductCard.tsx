import React from 'react'
import { Star, MapPin, Package, AlertCircle, CheckCircle } from 'lucide-react'
import type { Product } from '../../types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => `$${price.toFixed(2)}`

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden hover:border-orange-500 transition-colors duration-200">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{product.discount}%
          </div>
        )}
        <div className="absolute top-2 left-2 flex items-center bg-zinc-900/80 backdrop-blur-sm px-2 py-1 rounded-full">
          <MapPin className="w-3 h-3 text-orange-500 mr-1" />
          <span className="text-white text-xs font-bold">{product.state}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 flex-1">
            {product.name}
          </h3>
          <div className={`ml-2 px-2 py-1 rounded-full text-xs font-bold ${
            product.inStock 
              ? 'bg-green-600 text-white' 
              : 'bg-red-600 text-white'
          }`}>
            {product.inStock ? (
              <CheckCircle className="w-3 h-3 inline mr-1" />
            ) : (
              <AlertCircle className="w-3 h-3 inline mr-1" />
            )}
            {product.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
          </div>
        </div>

        <div className="flex items-center mb-2">
          <Package className="w-4 h-4 text-zinc-400 mr-1" />
          <span className="text-zinc-400 text-xs">{product.category}</span>
          <span className="text-zinc-600 mx-2">•</span>
          <span className="text-zinc-400 text-xs">{product.brand}</span>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-white text-sm font-bold ml-1">{product.rating}</span>
          </div>
          <span className="text-zinc-600 mx-2">•</span>
          <span className="text-zinc-400 text-xs">SKU: {product.sku}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-black text-orange-500">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-zinc-500 text-sm line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors duration-200">
            View Deal
          </button>
        </div>
      </div>
    </div>
  )
}