import React from 'react'
import { ProductCard } from './ProductCard'
import { Package, Target } from 'lucide-react'
import type { Product } from '../../types'

interface ProductGridProps {
  products: Product[] | []
  loading: boolean
}

export function ProductGrid({ products, loading }: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="high-contrast-card rounded-lg overflow-hidden animate-pulse">
            <div className="w-full h-48 camo-gradient-alt"></div>
            <div className="p-4">
              <div className="h-4 bg-zinc-700 rounded mb-2"></div>
              <div className="h-3 bg-zinc-700 rounded mb-2"></div>
              <div className="h-3 bg-zinc-700 rounded mb-3"></div>
              <div className="flex justify-between">
                <div className="h-6 bg-zinc-700 rounded w-20"></div>
                <div className="h-8 bg-zinc-700 rounded w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="combat-ready p-8 rounded-lg max-w-md mx-auto">
          <div className="relative mb-6">
            <Package className="w-20 h-20 text-zinc-600 mx-auto" />
            <Target className="w-8 h-8 text-orange-500 absolute -top-2 -right-2 tactical-glow" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 military-heading">NO TARGETS FOUND</h3>
          <p className="text-zinc-300 stencil-text">
            ADJUST YOUR MISSION PARAMETERS TO LOCATE AVAILABLE PRODUCTS.
          </p>
          <div className="mt-4 text-xs text-orange-400 stencil-text">
            SEARCH STATUS: NO RESULTS
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}