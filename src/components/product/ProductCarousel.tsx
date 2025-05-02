import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

interface ProductCarouselProps {
  products: Product[];
  title: string;
  subtitle?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title, subtitle }) => {
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update visible cards based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else if (width < 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.max(0, products.length - visibleCards + 1);
  
  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(totalSlides - 1, currentIndex + 1));
  };

  if (!products.length) {
    return null;
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-heading font-bold">{title}</h2>
          {subtitle && <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{subtitle}</p>}
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= totalSlides - 1}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            aria-label="Next products"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden" ref={carouselRef}>
        <motion.div
          className="flex transition-transform duration-500 ease-out"
          animate={{ x: -currentIndex * (100 / visibleCards) + '%' }}
          transition={{ type: 'tween', ease: 'easeInOut', duration: 0.5 }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-none px-2"
              style={{ width: `${100 / visibleCards}%` }}
            >
              <ProductCard product={product} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCarousel;