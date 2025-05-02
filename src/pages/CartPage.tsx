import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  
  useEffect(() => {
    document.title = 'Shopping Cart | Fries Bag';
  }, []);
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-light-100 dark:bg-dark-300 rounded-full">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
          </div>
          <h1 className="text-3xl font-heading font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Looks like you haven't added any products to your cart yet. 
            Browse our collection to find something you'll love.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
          >
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-heading font-bold mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="flex-grow">
            <div className="bg-light-100 dark:bg-dark-300 rounded-lg overflow-hidden shadow-sm">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-light-200 dark:bg-dark-400 text-sm font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`} className="p-4 md:py-6 md:grid md:grid-cols-12 md:gap-4 md:items-center">
                    {/* Mobile view: Product with details */}
                    <div className="md:col-span-6 flex items-center">
                      <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-medium">
                          <Link to={`/product/${item.product.id}`} className="hover:text-primary-600 dark:hover:text-primary-400">
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.product.brand}</p>
                        {(item.size || item.color) && (
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {item.size && <span className="mr-2">Size: {item.size}</span>}
                            {item.color && <span>Color: {item.color}</span>}
                          </div>
                        )}
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="mt-2 flex items-center text-xs text-gray-500 hover:text-error-600 dark:text-gray-400 dark:hover:text-error-400 md:hidden"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price - mobile view as label, desktop as column */}
                    <div className="md:col-span-2 md:text-center flex justify-between md:block mt-4 md:mt-0">
                      <span className="text-sm text-gray-500 dark:text-gray-400 md:hidden">Price:</span>
                      <span className="font-medium">${item.product.price.toFixed(2)}</span>
                    </div>
                    
                    {/* Quantity - mobile view as label, desktop as column */}
                    <div className="md:col-span-2 md:text-center flex justify-between md:block mt-2 md:mt-0">
                      <span className="text-sm text-gray-500 dark:text-gray-400 md:hidden">Quantity:</span>
                      <div className="flex items-center space-x-1 justify-end md:justify-center">
                        <button
                          onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="p-1 rounded-full bg-gray-100 dark:bg-dark-400 text-gray-600 dark:text-gray-300"
                        >
                          <span className="sr-only">Decrease</span>
                          <span className="block w-4 h-4 flex items-center justify-center">−</span>
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded-full bg-gray-100 dark:bg-dark-400 text-gray-600 dark:text-gray-300"
                        >
                          <span className="sr-only">Increase</span>
                          <span className="block w-4 h-4 flex items-center justify-center">+</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Total - mobile view as label, desktop as column */}
                    <div className="md:col-span-2 md:text-right flex justify-between md:block mt-2 md:mt-0">
                      <span className="text-sm text-gray-500 dark:text-gray-400 md:hidden">Total:</span>
                      <span className="font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    
                    {/* Delete button - desktop only */}
                    <div className="hidden md:flex md:justify-end">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-500 hover:text-error-600 dark:text-gray-400 dark:hover:text-error-400"
                        aria-label="Remove item"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <Link
                to="/products"
                className="flex items-center text-primary-600 dark:text-primary-400 hover:underline"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-light-100 dark:bg-dark-300 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                  <span className="text-success-600 dark:text-success-400">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tax</span>
                  <span className="font-medium">${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white py-3 px-6 rounded-md font-medium transition-colors">
                Proceed to Checkout
              </button>
              
              <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
                <p className="mb-2">We accept:</p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded">Visa</span>
                  <span className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded">Mastercard</span>
                  <span className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CartPage;