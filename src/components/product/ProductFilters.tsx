import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Filter } from 'lucide-react';

interface FilterOption {
  name: string;
  options: {
    value: string;
    label: string;
    count?: number;
  }[];
}

interface ProductFiltersProps {
  filters: FilterOption[];
  activeFilters: Record<string, string[]>;
  onFilterChange: (name: string, value: string) => void;
  onClearFilters: () => void;
  isMobile?: boolean;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  activeFilters,
  onFilterChange,
  onClearFilters,
  isMobile = false,
}) => {
  const [expandedFilters, setExpandedFilters] = useState<string[]>(filters.map(f => f.name));
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = (name: string) => {
    setExpandedFilters((prev) => 
      prev.includes(name) 
        ? prev.filter(f => f !== name) 
        : [...prev, name]
    );
  };

  const toggleMobileFilters = () => {
    setIsOpen(!isOpen);
  };

  const filtersContent = (
    <div className="space-y-6">
      {filters.map((filter) => (
        <div key={filter.name}>
          <button
            className="flex w-full items-center justify-between text-sm font-medium"
            onClick={() => toggleFilter(filter.name)}
          >
            <span>{filter.name}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                expandedFilters.includes(filter.name) ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {expandedFilters.includes(filter.name) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-4 space-y-2"
            >
              {filter.options.map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={`filter-${filter.name}-${option.value}`}
                    name={`${filter.name}[]`}
                    value={option.value}
                    type="checkbox"
                    checked={activeFilters[filter.name]?.includes(option.value) || false}
                    onChange={() => onFilterChange(filter.name, option.value)}
                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label
                    htmlFor={`filter-${filter.name}-${option.value}`}
                    className="ml-3 text-sm text-gray-600 dark:text-gray-300"
                  >
                    {option.label}
                    {option.count !== undefined && (
                      <span className="ml-1 text-gray-400 dark:text-gray-500">
                        ({option.count})
                      </span>
                    )}
                  </label>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      ))}
      
      <div className="pt-2">
        <button
          type="button"
          className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300"
          onClick={onClearFilters}
        >
          Clear all filters
        </button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="lg:hidden">
        <button
          type="button"
          className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
          onClick={toggleMobileFilters}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </button>
        
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-25">
            <div className="fixed inset-0 z-40" onClick={toggleMobileFilters} />
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-dark-300 rounded-t-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Filters</h3>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={toggleMobileFilters}
                >
                  <span className="sr-only">Close filters</span>
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              <div className="max-h-[70vh] overflow-auto pb-8">
                {filtersContent}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <h3 className="text-lg font-medium mb-4">Filters</h3>
      {filtersContent}
    </div>
  );
};

export default ProductFilters;