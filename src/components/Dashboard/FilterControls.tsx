import React from 'react'
import { Filter, Search, MapPin, Package, Radar } from 'lucide-react'

interface FilterControlsProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedState: string
  onStateChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  availableStates: string[]
  availableCategories: string[]
}

export function FilterControls({
  searchTerm,
  onSearchChange,
  selectedState,
  onStateChange,
  selectedCategory,
  onCategoryChange,
  availableStates,
  availableCategories
}: FilterControlsProps) {
  return (
    <div className="high-contrast-card p-6 mb-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
      
      <div className="flex items-center mb-6">
        <div className="relative">
          <Filter className="w-6 h-6 text-orange-500 mr-3 tactical-glow" />
          <Radar className="w-3 h-3 text-white absolute -bottom-1 -right-1 bg-zinc-900 rounded-full" />
        </div>
        <h2 className="text-xl font-bold text-white military-heading">MISSION PARAMETERS</h2>
        <div className="ml-auto text-xs text-orange-400 stencil-text">
          FILTER STATUS: ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-zinc-200 mb-3 stencil-text">
            <Search className="w-4 h-4 inline mr-2 text-orange-500" />
            SEARCH TARGET
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="SEARCH PRODUCTS..."
            className="w-full px-4 py-3 tactical-input rounded-md text-white placeholder-zinc-400 focus:outline-none transition-all duration-200 stencil-text"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-200 mb-3 stencil-text">
            <MapPin className="w-4 h-4 inline mr-2 text-orange-500" />
            STATE SECTOR
          </label>
          <select
            value={selectedState}
            onChange={(e) => onStateChange(e.target.value)}
            className="w-full px-4 py-3 tactical-input rounded-md text-white focus:outline-none transition-all duration-200 stencil-text"
          >
            <option value="">ALL STATES</option>
            {availableStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-200 mb-3 stencil-text">
            <Package className="w-4 h-4 inline mr-2 text-orange-500" />
            CATEGORY
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-3 tactical-input rounded-md text-white focus:outline-none transition-all duration-200 stencil-text"
          >
            <option value="">ALL CATEGORIES</option>
            {availableCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}