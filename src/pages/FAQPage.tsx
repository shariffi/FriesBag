import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and cryptocurrency payments including Bitcoin and Ethereum. All transactions are securely processed and encrypted to ensure your personal information remains protected.',
    category: 'Payment'
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order ships, you will receive a confirmation email with a tracking number. You can also check the status of your order by logging into your account and viewing your order history. Our tracking system provides real-time updates on the location and estimated delivery date of your package.',
    category: 'Shipping'
  },
  {
    question: 'What is your shipping policy?',
    answer: 'We offer worldwide shipping to most countries. Standard shipping typically takes 5-10 business days, while express shipping takes 2-3 business days. All orders over $200 qualify for free standard shipping. Please note that delivery times may vary based on your location and any potential customs processing for international orders.',
    category: 'Shipping'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please note that any customs fees, import taxes, or duties are the responsibility of the recipient and are not included in our shipping charges.',
    category: 'Shipping'
  },
  {
    question: 'How long will it take to receive my order?',
    answer: 'Domestic orders within the US typically arrive within 3-5 business days with standard shipping and 1-2 business days with express shipping. International orders generally take 7-14 business days, depending on your location and customs processing times.',
    category: 'Shipping'
  },
  {
    question: 'Do you offer returns or exchanges?',
    answer: 'Yes, we accept returns within 30 days of delivery for items in their original condition with tags attached. Exchanges can be processed for different sizes or colors when available. Please note that customized or personalized items cannot be returned unless there is a manufacturing defect.',
    category: 'Returns'
  },
  {
    question: 'How do I make a return?',
    answer: 'To initiate a return, log into your account, go to your order history, and select the "Return Items" option for the relevant order. You\'ll receive a return shipping label and instructions. Once we receive your return, we\'ll process your refund within 3-5 business days.',
    category: 'Returns'
  },
  {
    question: 'What is your refund policy?',
    answer: 'Refunds are processed within 3-5 business days after we receive your returned items. The refund will be issued to the original payment method used for the purchase. Please allow an additional 2-5 business days for the funds to appear in your account, depending on your financial institution.',
    category: 'Returns'
  },
  {
    question: 'How do I know my size?',
    answer: 'We provide detailed size guides for all our products. You can find size charts on individual product pages or on our dedicated Size Guide page. If you\'re between sizes, we generally recommend sizing up. If you\'re still unsure, please contact our customer service team for personalized assistance.',
    category: 'Products'
  },
  {
    question: 'Are your products authentic?',
    answer: 'Our products are high-quality replicas of luxury items, crafted with attention to detail to provide the look and feel of designer products at accessible prices. We are transparent about the nature of our products and do not claim them to be original designer items or authorized reproductions.',
    category: 'Products'
  },
  {
    question: 'How do I care for my products?',
    answer: 'Care instructions vary by product type and material. You can find specific care instructions on product pages or included with your purchase. Generally, we recommend storing items in a cool, dry place away from direct sunlight and following any cleaning recommendations specific to the material of your item.',
    category: 'Products'
  },
  {
    question: 'Do you offer warranty on your products?',
    answer: 'We offer a 90-day warranty against manufacturing defects for all our products. This warranty covers issues related to craftsmanship but does not cover normal wear and tear, damage from improper use, or accidental damage. Please contact our customer service team if you experience any quality issues.',
    category: 'Products'
  },
  {
    question: 'How do I create an account?',
    answer: 'You can create an account by clicking on the "Login/Register" button in the top right corner of our website and selecting "Create an Account." You\'ll need to provide your email address and create a password. Creating an account allows you to track orders, save your shipping information, and manage your wishlist.',
    category: 'Account'
  },
  {
    question: 'I forgot my password, how can I reset it?',
    answer: 'You can reset your password by clicking on the "Login/Register" button, then selecting "Forgot Password." Enter the email address associated with your account, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.',
    category: 'Account'
  },
  {
    question: 'How can I contact customer service?',
    answer: 'You can reach our customer service team through multiple channels: email (support@nebulaluxe.com), phone (+1-555-123-4567), or by using the contact form on our Contact page. Our customer service hours are Monday-Friday 9am-6pm EST and Saturday 10am-4pm EST.',
    category: 'Support'
  },
  {
    question: 'Do you offer gift wrapping?',
    answer: 'Yes, we offer luxury gift wrapping services for an additional $5 per item. During checkout, you\'ll have the option to select gift wrapping and include a personalized message. Your items will be beautifully wrapped in premium paper with a custom Fries Bag ribbon.',
    category: 'Orders'
  }
];

const categories = [...new Set(faqs.map(faq => faq.category))];

const FAQPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Frequently Asked Questions | Fries Bag';
  }, []);

  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');
  
  const toggleItem = (question: string) => {
    setExpandedItems(prev =>
      prev.includes(question)
        ? prev.filter(item => item !== question)
        : [...prev, question]
    );
  };
  
  const filteredFaqs = faqs.filter(faq => {
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-heading font-bold mb-4 text-center">Frequently Asked Questions</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Find answers to common questions about our products, shipping, returns, and more.
        </p>
        
        {/* Search and filter */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-dark-300 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-200'
              }`}
            >
              All Questions
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-dark-300 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.question)}
                  className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {expandedItems.includes(faq.question) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedItems.includes(faq.question) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-4 pt-0 bg-gray-50 dark:bg-dark-400 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                No results found for "{searchQuery}".
              </p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try a different search term or browse by category.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-primary-600 dark:text-primary-400 hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you're looking for, our team is here to help.
            Contact us and we'll get back to you as soon as possible.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
          >
            Contact Support
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQPage;