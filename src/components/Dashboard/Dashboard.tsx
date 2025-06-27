import React, { useState, useMemo } from 'react'
import { Header } from './Header'
import { FilterControls } from './FilterControls'
import { SortControls } from './SortControls'
import { ProductGrid } from './ProductGrid'
import { mockProducts } from '../../data/mockProducts'
import type { User, Product, SortField, SortDirection } from '../../types'

interface DashboardProps {
  user: User
}

export function Dashboard({ user }: DashboardProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortField, setSortField] = useState<SortField>('name')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [loading, setLoading] = useState(false)

  // Get unique states and categories for filters
  const availableStates = useMemo(() => {
    return [...new Set(mockProducts.map(p => p.state))].sort()
  }, [])

  const availableCategories = useMemo(() => {
    return [...new Set(mockProducts.map(p => p.category))].sort()
  }, [])

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.sku.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesState = !selectedState || product.state === selectedState
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      
      return matchesSearch && matchesState && matchesCategory
    })

    // Sort products
    filtered.sort((a, b) => {
      let aValue: string | number
      let bValue: string | number

      switch (sortField) {
        case 'name':
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
          break
        case 'price':
          aValue = a.price
          bValue = b.price
          break
        case 'rating':
          aValue = a.rating
          bValue = b.rating
          break
        case 'discount':
          aValue = a.discount || 0
          bValue = b.discount || 0
          break
        default:
          aValue = a.name.toLowerCase()
          bValue = b.name.toLowerCase()
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    return filtered
  }, [searchTerm, selectedState, selectedCategory, sortField, sortDirection])

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <Header user={user} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-wide">
            Mission Control
          </h2>
          <p className="text-zinc-400">
            Tracking {filteredAndSortedProducts.length} targets across multiple sectors
          </p>
        </div>

        <FilterControls
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedState={selectedState}
          onStateChange={setSelectedState}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          availableStates={availableStates}
          availableCategories={availableCategories}
        />

        <SortControls
          sortField={sortField}
          sortDirection={sortDirection}
          onSort={handleSort}
        />

        <ProductGrid
          products={filteredAndSortedProducts}
          loading={loading}
        />
      </main>
    </div>
  )
}