import React, { useState, useMemo, useEffect } from 'react'
import { Header } from './Header'
import { FilterControls } from './FilterControls'
import { SortControls } from './SortControls'
import { ProductGrid } from './ProductGrid'
import { mockProducts } from '../../data/mockProducts'
import { supabase } from '../../lib/supabase'
import type { User, Product, SortField, SortDirection } from '../../types'
import {UpgradePrompt} from './Upgrade'

interface DashboardProps {
  user: User
}

const fetchProducts = async (): Promise<Product[] | null> => {
  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Error getting session:', sessionError);
      return null;
    }

    if (!session?.access_token) {
      console.error('No active session or access token found');
      return null;
    }
    const response = await fetch('https://pricesniper.fly.dev/products', {
    // const response = await fetch('http://127.0.0.1:8000/products', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
        'X-Refresh-Token': session.refresh_token, 
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Product[] = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};

export function Dashboard({ user }: DashboardProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortField, setSortField] = useState<SortField>('title')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const result = await fetchProducts();
        if (result && result.length > 0) {
          setProducts(result);
        } else {
          console.log('Using mock products as fallback');
          setProducts(mockProducts);
          setError('Using offline data - could not connect to server');
        }
      } catch (err) {
        console.error('Error in loadProducts:', err);
        setProducts(mockProducts);
        setError('Failed to fetch products, using offline data');
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  const availableStates = useMemo(() => {
    if (!products || products.length === 0) return [];
    return [...new Set(products.map(p => p.state))].filter(Boolean).sort();
  }, [products]);

  const availableCategories = useMemo(() => {
    if (!products || products.length === 0) return [];
    return [...new Set(products.map(p => p.category))].filter(Boolean).sort();
  }, [products]);

  const filteredAndSortedProducts = useMemo(() => {
    if (!products || products.length === 0) return [];
    
    let filtered = products.filter(product => {
      const matchesSearch = product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.sku?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = !selectedState || product.state === selectedState;
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesState && matchesCategory;
    });

    filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortField) {
        case 'title':
          aValue = a.title?.toLowerCase() || '';
          bValue = b.title?.toLowerCase() || '';
          break;
        case 'price':
          aValue = a.price || 0;
          bValue = b.price || 0;
          break;
        case 'rating':
          aValue = a.product_rating || 0;
          bValue = b.product_rating || 0;
          break;
        case 'discount':
          aValue = a.profit_margin || 0;
          bValue = b.profit_margin || 0;
          break;
        default:
          aValue = a.title?.toLowerCase() || '';
          bValue = b.title?.toLowerCase() || '';
      }
      
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [products, searchTerm, selectedState, selectedCategory, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="min-h-screen camo-gradient military-grid">
      <Header user={user} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 combat-ready p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-black text-white mb-2 military-heading">
                MISSION CONTROL
              </h2>
              <p className="text-zinc-300 stencil-text">
                {loading 
                  ? "LOADING TARGETS..." 
                  : `TRACKING ${filteredAndSortedProducts.length} TARGETS ACROSS MULTIPLE SECTORS`
                }
              </p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-xs font-bold rounded-full stencil-text border-2 border-green-400">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                SURVEILLANCE ACTIVE
              </div>
              <div className="text-xs text-orange-400 mt-2 stencil-text">
                CLEARANCE: CLASSIFIED
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 bg-yellow-900/70 border-2 border-yellow-500 text-yellow-200 px-6 py-4 rounded-lg">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
              <strong className="stencil-text">WARNING:</strong>
              <span className="ml-2 stencil-text">{error}</span>
            </div>
          </div>
        )}

        <UpgradePrompt />

        {!loading && (
          <>
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
          </>
        )}

        <ProductGrid
          products={filteredAndSortedProducts}
          loading={loading}
        />
      </main>
    </div>
  );
}