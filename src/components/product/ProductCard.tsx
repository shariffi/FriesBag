import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  const renderDiscount = () => {
    if (!product.discount) return null;
    
    return (
      <div className="absolute top-2 left-2 z-10 bg-error-500 text-white text-xs font-bold px-2 py-1 rounded">
        {product.discount}% OFF
      </div>
    );
  };
  
  const renderNewBadge = () => {
    if (!product.isNew) return null;
    
    return (
      <div className="absolute top-2 right-2 z-10 bg-success-500 text-white text-xs font-bold px-2 py-1 rounded">
        NEW
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-light-100 dark:bg-dark-300 shadow-md hover:shadow-lg transition-shadow duration-300">
          {renderDiscount()}
          {renderNewBadge()}
          
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-2">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-1 bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-md text-xs font-medium transition-colors"
                  >
                    <ShoppingBag className="h-3 w-3" />
                    Add to Cart
                  </button>
                  <button className="flex items-center justify-center p-2 bg-light-100/80 dark:bg-dark-200/80 hover:bg-light-200 dark:hover:bg-dark-100 rounded-md transition-colors">
                    <Heart className="h-4 w-4 text-error-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-medium line-clamp-1">{product.name}</h3>
              <div className="flex items-center">
                <span className="text-xs font-medium text-primary-500 dark:text-primary-400">
                  {product.rating}★
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{product.brand}</p>
            
            <div className="flex items-baseline">
              <span className="text-sm font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="ml-1 text-xs text-gray-500 dark:text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;