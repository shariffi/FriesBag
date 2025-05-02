import React from 'react';
import { motion } from 'framer-motion';

const ShippingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Shipping Methods</h2>
        <p className="mb-6">
          We offer various shipping options to meet your needs. All orders are processed within 1-2 business days.
        </p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Standard Shipping</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Delivery within 5-7 business days</li>
            <li>Free shipping on orders over $100</li>
            <li>Tracking number provided</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Express Shipping</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Delivery within 2-3 business days</li>
            <li>Additional fee applies</li>
            <li>Priority handling</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
        <p className="mb-6">
          We ship worldwide! International shipping rates and delivery times vary by location.
          Please allow additional time for customs processing.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
        <p className="mb-6">
          Once your order ships, you will receive a confirmation email with tracking information.
          You can track your order status at any time through your account dashboard.
        </p>
      </div>
    </motion.div>
  );
};

export default ShippingPage;