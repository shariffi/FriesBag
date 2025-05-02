import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User, Heart, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { mainNavigation } from '../../data/navigation';
import Logo from '../ui/Logo';
import MobileMenu from './MobileMenu';
import Dropdown from '../ui/Dropdown';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const { isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchValue);
      setSearchValue('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-light-100/80 dark:bg-dark-300/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo className="h-8 w-auto" />
              <span className="ml-2 text-xl font-heading font-bold hidden sm:block">
                FIRES BAG
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex space-x-8 mx-4">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <Dropdown
                    trigger={
                      <span className="text-sm cursor-pointer font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors py-2">
                        {item.name}
                      </span>
                    }
                    items={item.children}
                  />
                ) : (
                  <Link
                    to={item.path}
                    className="text-sm font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <button
              className="p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              aria-label="Search"
              onClick={toggleSearch}
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              className="p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <Link
              to="/wishlist"
              className="p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Link>

            <Link
              to={isAuthenticated ? "/profile" : "/login"}
              className="p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              aria-label={isAuthenticated ? "View profile" : "Login"}
            >
              <User className="h-5 w-5" />
            </Link>

            <Link
              to="/cart"
              className="p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Search overlay */}
      {isSearchOpen && (
        <div className="absolute inset-0 bg-light-100/95 dark:bg-dark-300/95 backdrop-blur-sm z-50 p-4 flex flex-col items-center justify-start pt-20">
          <button
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
            onClick={toggleSearch}
            aria-label="Close search"
          >
            <X className="h-6 w-6" />
          </button>
          <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full px-4 py-3 border-2 border-primary-500 dark:border-primary-400 rounded-full bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-1 top-1 p-2 rounded-full bg-primary-500 dark:bg-primary-600 text-white"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
          <div className="mt-8 text-sm text-gray-600 dark:text-gray-300">
            <p className="mb-2 font-semibold">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {['Watches', 'Sneakers', 'Jackets', 'Chains', 'New Arrivals'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchValue(term)}
                  className="px-3 py-1 bg-gray-200 dark:bg-dark-200 rounded-full hover:bg-gray-300 dark:hover:bg-dark-100 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;