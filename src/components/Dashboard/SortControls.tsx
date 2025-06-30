import React from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown, Target } from 'lucide-react'
import type { SortField, SortDirection } from '../../types'

interface SortControlsProps {
  sortField: SortField
  sortDirection: SortDirection
  onSort: (field: SortField) => void
}

export function SortControls({ sortField, sortDirection, onSort }: SortControlsProps) {
  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4" />
    }
    return sortDirection === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />
  }

  const buttons = [
    { field: 'name' as SortField, label: 'NAME' },
    { field: 'price' as SortField, label: 'PRICE' },
    { field: 'rating' as SortField, label: 'RATING' },
    { field: 'discount' as SortField, label: 'DISCOUNT' }
  ]

  return (
    <div className="high-contrast-card p-6 mb-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Target className="w-6 h-6 text-orange-500 mr-3 tactical-glow" />
          <h3 className="text-xl font-bold text-white military-heading">
            SORT ORDER
          </h3>
          <div className="ml-4 text-xs text-orange-400 stencil-text">
            TARGET PRIORITY
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {buttons.map(({ field, label }) => (
            <button
              key={field}
              onClick={() => onSort(field)}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-bold stencil-text transition-all duration-200 border-2 ${
                sortField === field
                  ? 'tactical-button border-orange-500'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border-zinc-600 hover:border-zinc-500'
              }`}
            >
              {getSortIcon(field)}
              <span className="ml-2">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}