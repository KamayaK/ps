import React from 'react'
import { Filter, Search, MapPin, Package } from 'lucide-react'

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
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <Filter className="w-5 h-5 text-orange-500 mr-2" />
        <h2 className="text-lg font-bold text-white uppercase tracking-wide">Mission Parameters</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
            <Search className="w-4 h-4 inline mr-1" />
            Search Target
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
            <MapPin className="w-4 h-4 inline mr-1" />
            State Sector
          </label>
          <select
            value={selectedState}
            onChange={(e) => onStateChange(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">All States</option>
            {availableStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">
            <Package className="w-4 h-4 inline mr-1" />
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {availableCategories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}