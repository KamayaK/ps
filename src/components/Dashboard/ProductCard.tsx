import React from 'react'
import { Star, MapPin, Package, AlertCircle, CheckCircle, ShoppingCart, Tags, Target } from 'lucide-react'
import type { Product } from '../../types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number | null | undefined) => {
    if (price == null) {
      return 'NIL';
    }
    return `$${price.toFixed(2)}`;
  }

  function openExternalLink(event: React.MouseEvent<HTMLButtonElement>, product: string, store: number) {
    let full_url = `https://www.homedepot.com/p/${product}?store=${store}`
    event.preventDefault(); 
    window.open(full_url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="high-contrast-card rounded-lg overflow-hidden hover:border-orange-400 transition-all duration-300 relative group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
      
      <div className="relative">
        <img
          src={product.image_url}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        {product.profit_margin && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold stencil-text border border-red-400">
            -{product.profit_margin}%
          </div>
        )}
        <div className="absolute top-3 left-3 flex items-center combat-ready px-3 py-1 rounded-full">
          <MapPin className="w-3 h-3 text-orange-500 mr-1" />
          <span className="text-white text-xs font-bold stencil-text">{product.state}</span>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center combat-ready px-2 py-1 rounded-full">
          <Target className="w-3 h-3 text-orange-500 mr-1" />
          <span className="text-white text-xs font-bold stencil-text">TARGET</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 flex-1 stencil-text">
            {product.title}
          </h3>
          <div className={`ml-3 px-3 py-1 rounded-full text-xs font-bold stencil-text border-2 ${
            product.stock_status 
              ? 'bg-green-600 text-white border-green-400' 
              : 'bg-red-600 text-white border-red-400'
          }`}>
            {product.stock_status ? (
              <CheckCircle className="w-3 h-3 inline mr-1" />
            ) : (
              <AlertCircle className="w-3 h-3 inline mr-1" />
            )}
            {product.stock_status ? 'IN STOCK' : 'OUT OF STOCK'}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center">
            <Package className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-zinc-300 text-xs stencil-text">{product.category}</span>
          </div>
          <div className="flex items-center">
            <ShoppingCart className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-zinc-300 text-xs stencil-text">{product.store_name}</span>
          </div>
          <div className="flex items-center">
            <Tags className="w-4 h-4 text-orange-500 mr-2" />
            <span className="text-zinc-300 text-xs stencil-text">ID: {product.product}</span>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-white text-sm font-bold ml-1 stencil-text">{product.product_rating}</span>
          </div>
          <div className="ml-auto text-xs text-orange-400 stencil-text">
            RATING: VERIFIED
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-black text-orange-500 stencil-text">
              {formatPrice(product.price)}
            </span>
            {product.retail_price && (
              <span className="text-zinc-500 text-sm line-through ml-2 stencil-text">
                {formatPrice(product.retail_price)}
              </span>
            )}
          </div>
          <button 
            className="tactical-button text-white px-4 py-2 rounded-md text-sm font-bold stencil-text border-2 border-orange-500"
            onClick={(e) => openExternalLink(e, product.product, product.store_id)}
          >
            VIEW DEAL
          </button>
        </div>
      </div>
    </div>
  )
}