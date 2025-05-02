import React from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNavigation } from '../../data/navigation';
import Logo from '../ui/Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  const handleCategoryClick = (name: string) => {
    if (activeCategory === name) {
      setActiveCategory(null);
    } else {
      setActiveCategory(name);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" onClick={onClose} />
          
          <motion.div
            className="fixed top-0 left-0 bottom-0 w-full max-w-xs bg-light-100 dark:bg-dark-300 shadow-xl overflow-y-auto"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <div className="flex items-center">
                <Logo className="h-8 w-auto" />
                <span className="ml-2 text-xl font-heading font-bold">
                  NEBULA LUXE
                </span>
              </div>
              <button
                className="p-2 text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400"
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="px-4 py-6 space-y-1">
              {mainNavigation.map((item) => (
                <div key={item.name} className="py-1">
                  {item.children ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-2 text-base font-medium"
                        onClick={() => handleCategoryClick(item.name)}
                      >
                        {item.name}
                        <ChevronRight
                          className={`h-5 w-5 transition-transform ${
                            activeCategory === item.name ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeCategory === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-4 space-y-1 border-l dark:border-gray-700 pl-4"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.path}
                                className="block py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                                onClick={onClose}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-2 text-base font-medium hover:text-primary-500 dark:hover:text-primary-400"
                      onClick={onClose}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-auto p-4 border-t dark:border-gray-700">
              <Link
                to="/login"
                className="block w-full py-3 px-4 bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white text-center font-medium rounded-md transition-colors"
                onClick={onClose}
              >
                Login / Register
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;