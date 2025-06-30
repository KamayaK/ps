import React from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
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
    { field: 'name' as SortField, label: 'Name' },
    { field: 'price' as SortField, label: 'Price' },
    { field: 'rating' as SortField, label: 'Rating' },
    { field: 'discount' as SortField, label: 'Discount' }
  ]

  return (
    <div className="bg-stone-100 border-2 border-stone-300 rounded-lg p-4 mb-6 shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-black text-stone-800 uppercase tracking-wide mb-0">
          Sort Order
        </h3>
        <div className="flex flex-wrap gap-2">
          {buttons.map(({ field, label }) => (
            <button
              key={field}
              onClick={() => onSort(field)}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-black uppercase tracking-wide transition-colors duration-200 shadow-md ${
                sortField === field
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border-2 border-stone-300'
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