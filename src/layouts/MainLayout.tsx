import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SpaceBackground from '../components/ui/SpaceBackground';
import ScrollToTop from '../components/ui/ScrollToTop';
import { AnimatePresence, motion } from 'framer-motion';
import Announcement from '../components/ui/Announcement';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  
  // Disable announcement after user closes it
  const handleCloseAnnouncement = () => {
    setShowAnnouncement(false);
    localStorage.setItem('announcement-closed', 'true');
  };
  
  // Check if announcement was previously closed
  useEffect(() => {
    const isClosed = localStorage.getItem('announcement-closed') === 'true';
    setShowAnnouncement(!isClosed);
  }, []);

  return (
    <div className="flex flex-col min-h-screen dark:bg-dark-400 bg-light-300 text-light-600 dark:text-white relative overflow-hidden transition-colors duration-300">
      <SpaceBackground />
      
      {showAnnouncement && (
        <Announcement 
          message="FREE SHIPPING ON ALL ORDERS OVER $200" 
          onClose={handleCloseAnnouncement}
        />
      )}
      
      <Header />
      
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;