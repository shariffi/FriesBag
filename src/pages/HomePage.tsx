import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import ProductCarousel from '../components/product/ProductCarousel';
import FeaturedCategories from '../components/home/FeaturedCategories';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';
import { 
  getFeaturedProducts, 
  getTrendingProducts, 
  getNewProducts 
} from '../data/products';

const HomePage: React.FC = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Fries Bag | Premium Luxury Items';
  }, []);

  // Get products data
  const featuredProducts = getFeaturedProducts();
  const trendingProducts = getTrendingProducts();
  const newProducts = getNewProducts();

  return (
    <div>
      <HeroSection />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20"
      >
        <ProductCarousel 
          products={featuredProducts}
          title="Featured Products"
          subtitle="Handpicked premium items for the discerning customer"
        />
        
        <FeaturedCategories />
        
        <ProductCarousel 
          products={trendingProducts}
          title="Trending Now"
          subtitle="Our most popular products that customers are loving"
        />
        
        <ProductCarousel 
          products={newProducts}
          title="New Arrivals"
          subtitle="The latest additions to our exclusive collection"
        />
        
        <TestimonialsSection />
        
        <NewsletterSection />
      </motion.div>
    </div>
  );
};

export default HomePage;