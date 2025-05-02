import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Fries Bag';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-heading font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Have questions, feedback, or inquiries? We're here to help. Reach out to our team using any of the methods below.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                  disabled={status === 'submitting'}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                  disabled={status === 'submitting'}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                  disabled={status === 'submitting'}
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Information</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="shipping">Shipping & Delivery</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 resize-none"
                  disabled={status === 'submitting'}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white py-3 px-6 rounded-md font-medium transition-colors disabled:opacity-70"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <div className="p-4 bg-success-100 dark:bg-success-900/30 text-success-800 dark:text-success-300 rounded-md">
                  Thank you! Your message has been sent successfully. We'll be in touch soon.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-error-100 dark:bg-error-900/30 text-error-800 dark:text-error-300 rounded-md">
                  There was an error sending your message. Please try again or contact us directly via email.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Our Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Luxury Lane<br />
                    Suite 456<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Customer Service: +1 (555) 123-4567<br />
                    Order Support: +1 (555) 987-6543<br />
                    Hours: Monday-Friday, 9am-6pm EST
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-full">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    General Inquiries: info@nebulaluxe.com<br />
                    Customer Support: support@nebulaluxe.com<br />
                    Orders: orders@nebulaluxe.com
                  </p>
                </div>
              </div>
              
              <div className="p-6 bg-light-100 dark:bg-dark-300 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Response Time</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We strive to respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please contact us by phone for fastest response.
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>Business Hours:</p>
                  <p>Monday-Friday: 9am-6pm EST</p>
                  <p>Saturday: 10am-4pm EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrency payments including Bitcoin and Ethereum.'
              },
              {
                question: 'What is your shipping policy?',
                answer: 'We offer worldwide shipping. Standard shipping takes 5-10 business days, while express shipping takes 2-3 business days. All orders over $200 qualify for free standard shipping.'
              },
              {
                question: 'Do you offer returns or exchanges?',
                answer: 'Yes, we accept returns within 30 days of delivery for items in their original condition. Exchanges can be processed for different sizes or colors when available.'
              },
              {
                question: 'How can I track my order?',
                answer: 'Once your order ships, you will receive a confirmation email with a tracking number. You can also check the status of your order in your account dashboard.'
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="p-6 bg-light-100 dark:bg-dark-300 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a
              href="/faq"
              className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
            >
              View all FAQs
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;