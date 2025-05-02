import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | Fries Bag';
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto"
      >
        <div className="text-primary-500 dark:text-primary-400 mb-6">
          <div className="relative">
            <div className="text-9xl font-bold opacity-10">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold">404</div>
            </div>
          </div>
        </div>
        
        <h1 className="text-3xl font-heading font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
          >
            <Home className="h-5 w-5" />
            Back to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-white dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 py-3 px-6 rounded-md font-medium transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>
        
        <div className="mt-12 space-y-4">
          <h2 className="text-lg font-medium">Popular pages you might be looking for:</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/products/watches"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Shop Watches
              </Link>
            </li>
            <li>
              <Link
                to="/products/footwear"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Shop Footwear
              </Link>
            </li>
            <li>
              <Link
                to="/products/outerwear"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Shop Outerwear
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;