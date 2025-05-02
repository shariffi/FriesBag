import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Globe, Truck } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Fries Bag';
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-heading font-bold mb-8 text-center">About Fries Bag</h1>
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="lead text-xl mb-6">
              Fries Bag is a premium destination for discerning customers seeking exceptional quality luxury items. 
              Founded in 2022, we've quickly established ourselves as a trusted name in high-end luxury goods.
            </p>
            
            <p className="mb-6">
              Our mission is simple: to provide our customers with access to the most coveted luxury brands and items at competitive prices, 
              with an emphasis on quality, authenticity, and exceptional customer service. We believe that luxury should be accessible, 
              and our carefully curated selection reflects this philosophy.
            </p>
            
            <h2 className="text-2xl font-heading font-bold mt-10 mb-4">Our Story</h2>
            
            <p className="mb-6">
              Fries Bag was born from a passion for luxury goods and a desire to make them more accessible to enthusiasts worldwide. 
              What began as a small online boutique has grown into a comprehensive e-commerce platform offering a wide range of premium products.
            </p>
            
            <p className="mb-6">
              Our founder, recognizing the growing demand for high-quality replicas of luxury items, established Fries Bag with a commitment to 
              ethical business practices, transparency, and customer satisfaction. Today, we continue to uphold these values as we expand our offerings 
              and reach new customers.
            </p>
            
            <h2 className="text-2xl font-heading font-bold mt-10 mb-4">What Sets Us Apart</h2>
            
            <p className="mb-6">
              At Fries Bag, we differentiate ourselves through our meticulous attention to detail, rigorous quality control, and 
              unwavering commitment to customer satisfaction. Every item in our collection undergoes a thorough authentication and 
              quality assurance process before being offered to our customers.
            </p>
            
            <p className="mb-6">
              We partner with skilled artisans and reputable manufacturers who share our dedication to craftsmanship and quality. 
              This allows us to offer products that capture the essence of luxury brands while remaining accessible to a wider audience.
            </p>
          </div>
          
          {/* Values section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-6 bg-light-100 dark:bg-dark-300 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-full mr-3">
                  <ShieldCheck className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold">Quality Assurance</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Every product undergoes rigorous quality control to ensure it meets our exacting standards
                before reaching our customers.
              </p>
            </div>
            
            <div className="p-6 bg-light-100 dark:bg-dark-300 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-full mr-3">
                  <Clock className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold">Timeless Design</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                We focus on classic, enduring styles rather than fleeting trends, ensuring our products 
                remain relevant and stylish for years to come.
              </p>
            </div>
            
            <div className="p-6 bg-light-100 dark:bg-dark-300 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-full mr-3">
                  <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold">Global Reach</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                We ship to customers worldwide, bringing luxury within reach regardless of geographic location.
              </p>
            </div>
            
            <div className="p-6 bg-light-100 dark:bg-dark-300 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-full mr-3">
                  <Truck className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold">Secure Shipping</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                All orders are discreetly packaged and shipped with tracking, ensuring your purchases arrive safely.
              </p>
            </div>
          </div>
          
          {/* Team section */}
          <div className="mb-16">
            <h2 className="text-2xl font-heading font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Ibraheem Shariff',
                  role: 'Founder & CEO',
                  image: 'https://i.pravatar.cc/300?u=alexandra'
                },
                {
                  name: 'Numair Khan',
                  role: 'Head of Curation',
                  image: 'https://i.pravatar.cc/300?u=marcus'
                },
                {
                  name: 'Lucia Mayorga',
                  role: 'Customer Experience Director',
                  image: 'https://i.pravatar.cc/300?u=sophia'
                }
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Have questions about our products or services? We'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;