import React from 'react'
import { ProductCard } from './ProductCard'
import { Package } from 'lucide-react'
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
          <div key={index} className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-zinc-800"></div>
            <div className="p-4">
              <div className="h-4 bg-zinc-800 rounded mb-2"></div>
              <div className="h-3 bg-zinc-800 rounded mb-2"></div>
              <div className="h-3 bg-zinc-800 rounded mb-3"></div>
              <div className="flex justify-between">
                <div className="h-6 bg-zinc-800 rounded w-20"></div>
                <div className="h-8 bg-zinc-800 rounded w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">No Targets Found</h3>
        <p className="text-zinc-400">
          Adjust your mission parameters to locate available products.
        </p>
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