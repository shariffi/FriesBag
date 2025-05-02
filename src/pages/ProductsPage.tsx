import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Grid, List, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { products, getProductsByCategory } from '../data/products';
import { categories, getCategoryBySlug } from '../data/categories';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters from '../components/product/ProductFilters';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rating' }
];

interface FilterOption {
  name: string;
  options: {
    value: string;
    label: string;
    count?: number;
  }[];
}

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();
  const subcategory = searchParams.get('subcategory');
  
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  
  // Generate filter options
  const filterOptions: FilterOption[] = [
    {
      name: 'Brand',
      options: Array.from(new Set(products.map(p => p.brand)))
        .map(brand => ({ value: brand, label: brand }))
    },
    {
      name: 'Price',
      options: [
        { value: '0-200', label: 'Under $200' },
        { value: '200-500', label: '$200 - $500' },
        { value: '500-1000', label: '$500 - $1,000' },
        { value: '1000+', label: 'Over $1,000' }
      ]
    }
  ];
  
  // Get category details
  const categoryDetails = category ? getCategoryBySlug(category) : null;
  
  // Set page title
  useEffect(() => {
    if (categoryDetails) {
      document.title = `${categoryDetails.name} | Fries Bag`;
    } else {
      document.title = 'All Products | Fries Bag';
    }
  }, [categoryDetails]);
  
  // Filter products based on category, subcategory and active filters
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (category) {
      filtered = getProductsByCategory(category);
    }
    
    // Filter by subcategory
    if (subcategory) {
      filtered = filtered.filter(product => 
        product.subcategory === subcategory
      );
    }
    
    // Apply active filters
    Object.entries(activeFilters).forEach(([filterName, values]) => {
      if (values.length === 0) return;
      
      if (filterName === 'Brand') {
        filtered = filtered.filter(product => 
          values.includes(product.brand)
        );
      } else if (filterName === 'Price') {
        filtered = filtered.filter(product => {
          return values.some(range => {
            if (range === '0-200') return product.price < 200;
            if (range === '200-500') return product.price >= 200 && product.price < 500;
            if (range === '500-1000') return product.price >= 500 && product.price < 1000;
            if (range === '1000+') return product.price >= 1000;
            return false;
          });
        });
      }
    });
    
    // Sort products
    switch (sortBy) {
      case 'newest':
        // For demo, we'll just randomize
        filtered = [...filtered].sort(() => Math.random() - 0.5);
        break;
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - default sort
        break;
    }
    
    setDisplayedProducts(filtered);
  }, [category, subcategory, activeFilters, sortBy]);
  
  const handleFilterChange = (name: string, value: string) => {
    setActiveFilters(prev => {
      const current = prev[name] || [];
      return {
        ...prev,
        [name]: current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value]
      };
    });
  };
  
  const handleClearFilters = () => {
    setActiveFilters({});
  };
  
  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold">
          {categoryDetails ? categoryDetails.name : 'All Products'}
        </h1>
        {categoryDetails?.description && (
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {categoryDetails.description}
          </p>
        )}
      </div>
      
      {/* Filters and sort */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Mobile filters button */}
        <div className="flex lg:hidden justify-between items-center">
          <button
            type="button"
            className="flex items-center text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400"
            onClick={toggleFilters}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </button>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${
                viewMode === 'grid'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                  : 'bg-gray-100 dark:bg-dark-400 text-gray-600 dark:text-gray-300'
              }`}
              aria-label="Grid view"
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${
                viewMode === 'list'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                  : 'bg-gray-100 dark:bg-dark-400 text-gray-600 dark:text-gray-300'
              }`}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Desktop filters */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <ProductFilters
            filters={filterOptions}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
        </div>
        
        {/* Mobile filters */}
        <ProductFilters
          filters={filterOptions}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          isMobile={true}
        />
        
        {/* Product grid and sort options */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {displayedProducts.length} product{displayedProducts.length !== 1 ? 's' : ''}
            </p>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="flex items-center">
                  <ArrowUpDown className="h-4 w-4 mr-2 text-gray-500" />
                  <select
                    id="sort-by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="block w-full py-2 pl-3 pr-10 text-sm border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid'
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                      : 'bg-gray-100 dark:bg-dark-400 text-gray-600 dark:text-gray-300'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list'
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                      : 'bg-gray-100 dark:bg-dark-400 text-gray-600 dark:text-gray-300'
                  }`}
                  aria-label="List view"
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          {displayedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                No products found. Try adjusting your filters.
              </p>
              <button
                onClick={handleClearFilters}
                className="mt-4 text-primary-600 dark:text-primary-400 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ProductGrid 
                products={displayedProducts} 
                columns={viewMode === 'list' ? 1 : 4} 
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;