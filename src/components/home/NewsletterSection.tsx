import React from 'react';
import { motion } from 'framer-motion';
import NewsletterSignup from '../ui/NewsletterSignup';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-90" />
          
          <div className="relative p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Subscribe to receive exclusive offers, early access to new products, and personalized recommendations tailored to your style preferences.
            </p>
            
            <div className="max-w-md mx-auto">
              <NewsletterSignup />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-400/20 blur-2xl" />
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-secondary-400/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;