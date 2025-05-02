import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  ShoppingBag, 
  Star, 
  Share, 
  Check, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  getProductById, 
  getRelatedProducts 
} from '../data/products';
import ProductCarousel from '../components/product/ProductCarousel';
import { useCart } from '../contexts/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(id ? getProductById(id) : null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [openSection, setOpenSection] = useState<string | null>('description');
  
  useEffect(() => {
    if (id) {
      const productData = getProductById(id);
      setProduct(productData);
      
      if (productData) {
        document.title = `${productData.name} | Fries Bag`;
        
        // Set default size and color if available
        if (productData.sizes && productData.sizes.length > 0) {
          setSelectedSize(productData.sizes[0]);
        }
        
        if (productData.colors && productData.colors.length > 0) {
          setSelectedColor(productData.colors[0]);
        }
        
        // Get related products
        setRelatedProducts(getRelatedProducts(id));
      } else {
        document.title = 'Product Not Found | Fries Bag';
      }
    }
  }, [id]);
  
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= (product?.stock || 10)) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedSize, selectedColor);
      
      // Show toast or confirmation message (simplified here)
      alert(`${product.name} added to cart!`);
    }
  };
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Link
          to="/products"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-6">
        <ol className="flex text-sm">
          <li className="flex items-center">
            <Link to="/" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              Home
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link to="/products" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
              Products
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link 
              to={`/products/${product.category}`} 
              className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-900 dark:text-white font-medium truncate">
            {product.name}
          </li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product images */}
        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-light-100 dark:bg-dark-300 mb-4">
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded overflow-hidden ${
                  selectedImage === index 
                    ? 'ring-2 ring-primary-500 dark:ring-primary-400' 
                    : 'ring-1 ring-gray-200 dark:ring-gray-700'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} - view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product info */}
        <div>
          <div className="mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-heading font-bold mb-2">{product.name}</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{product.brand}</p>
              </div>
              <button className="p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                <Share className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) 
                        ? 'text-primary-500 fill-primary-500' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                {product.rating} ({product.reviews.length} reviews)
              </span>
            </div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
              {product.discount && (
                <span className="ml-2 text-sm text-error-600 dark:text-error-400 font-medium">
                  ({product.discount}% OFF)
                </span>
              )}
            </div>
            
            <div className="mb-6">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-success-500 mr-2" />
                <span className="text-sm text-success-600 dark:text-success-400">
                  In stock
                </span>
              </div>
            </div>
          </div>
          
          {/* Options */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      selectedSize === size
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                        : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-300 text-gray-900 dark:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Color</label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                      selectedColor === color
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                        : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-300 text-gray-900 dark:text-white'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="p-2 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-300 text-gray-600 dark:text-gray-300 disabled:opacity-50"
              >
                <ChevronDown className="h-4 w-4" />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (!isNaN(val) && val >= 1 && val <= product.stock) {
                    setQuantity(val);
                  }
                }}
                className="w-16 text-center py-2 border-y border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-300 text-gray-900 dark:text-white"
              />
              <button
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= product.stock}
                className="p-2 rounded-r-md border border-l-0 border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-300 text-gray-600 dark:text-gray-300 disabled:opacity-50"
              >
                <ChevronUp className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Add to cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="flex items-center justify-center gap-2 bg-white dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-200 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 py-3 px-6 rounded-md font-medium transition-colors">
              <Heart className="h-5 w-5" />
              Add to Wishlist
            </button>
          </div>
          
          {/* Product details accordion */}
          <div className="border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div>
              <button
                onClick={() => toggleSection('description')}
                className="flex justify-between items-center w-full py-4 text-left font-medium"
              >
                <span>Description</span>
                {openSection === 'description' ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              <AnimatePresence>
                {openSection === 'description' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 prose dark:prose-invert">
                      <p>{product.description}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => toggleSection('features')}
                className="flex justify-between items-center w-full py-4 text-left font-medium"
              >
                <span>Features</span>
                {openSection === 'features' ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              <AnimatePresence>
                {openSection === 'features' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4">
                      <ul className="list-disc pl-5 space-y-2">
                        {product.features ? (
                          product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))
                        ) : (
                          <li>No features specified for this product.</li>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => toggleSection('reviews')}
                className="flex justify-between items-center w-full py-4 text-left font-medium"
              >
                <span>Reviews ({product.reviews.length})</span>
                {openSection === 'reviews' ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              <AnimatePresence>
                {openSection === 'reviews' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 space-y-4">
                      {product.reviews.length > 0 ? (
                        product.reviews.map((review) => (
                          <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                            <div className="flex items-start mb-2">
                              <div className="mr-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                  <img 
                                    src={review.userAvatar || `https://i.pravatar.cc/150?u=${review.userId}`} 
                                    alt={review.userName} 
                                    className="w-full h-full object-cover" 
                                  />
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium">{review.userName}</h4>
                                <div className="flex items-center">
                                  <div className="flex mr-2">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating
                                            ? 'text-primary-500 fill-primary-500'
                                            : 'text-gray-300'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <time className="text-xs text-gray-500">{review.date}</time>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm">{review.comment}</p>
                          </div>
                        ))
                      ) : (
                        <p>No reviews yet for this product.</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <ProductCarousel
            products={relatedProducts}
            title="You May Also Like"
            subtitle="Based on your interest in this product"
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;