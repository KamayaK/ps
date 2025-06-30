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
  const [loading, setLoading] = useState(true) // Start with loading true
  const [products, setProducts] = useState<Product[]>([]) // Initialize as empty array, not null
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
          // Fallback to mock products if API fails
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

  // Get unique states and categories for filters - only run when products exist
  const availableStates = useMemo(() => {
    if (!products || products.length === 0) return [];
    return [...new Set(products.map(p => p.state))].filter(Boolean).sort();
  }, [products]);

  const availableCategories = useMemo(() => {
    if (!products || products.length === 0) return [];
    return [...new Set(products.map(p => p.category))].filter(Boolean).sort();
  }, [products]);

  // Filter and sort products - only run when products exist
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

    // Sort products
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
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black relative overflow-hidden">
      {/* Camouflage pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-700 rounded-full blur-2xl"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-green-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-48 h-48 bg-green-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-green-700 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-green-600 rounded-full blur-lg"></div>
      </div>
      
      <Header user={user} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-wide">
            Mission Control
          </h2>
          <p className="text-stone-200 font-medium">
            {loading 
              ? "Loading targets..." 
              : `Tracking ${filteredAndSortedProducts.length} targets across multiple sectors`
            }
          </p>
          
        </div>

        {error && (
          <div className="mb-6 bg-orange-100 border-2 border-orange-300 text-orange-800 px-4 py-3 rounded font-semibold">
            <strong>Warning:</strong> {error}
          </div>
        )}
        {
          <UpgradePrompt />

        }

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
          products={filteredAndSortedProducts} // Pass filtered products, not raw products
          loading={loading}
        />
      </main>
    </div>
  );
}