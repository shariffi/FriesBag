import React from 'react';
import { motion } from 'framer-motion';

const ReturnPolicyPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8">Return Policy</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Return Window</h2>
          <p className="mb-4">
            We accept returns within 30 days of delivery for most items. Items must be unused, 
            unworn, and in their original packaging with all tags attached.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Return Process</h2>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-2">
              Initiate your return through your account dashboard or contact customer service
            </li>
            <li className="mb-2">
              Print the provided return shipping label
            </li>
            <li className="mb-2">
              Package your item securely in its original packaging
            </li>
            <li className="mb-2">
              Drop off the package at your nearest shipping location
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
          <p className="mb-4">
            Once we receive and inspect your return, we'll process your refund within 3-5 
            business days. The refund will be issued to your original payment method.
          </p>
          <p className="mb-4">
            Please note that shipping costs are non-refundable unless the return is due to 
            our error or a defective product.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Personalized or custom-made items</li>
            <li className="mb-2">Items marked as final sale</li>
            <li className="mb-2">Intimate apparel for hygiene reasons</li>
            <li className="mb-2">Items damaged through customer use</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our return policy, please don't hesitate to 
            contact our customer service team.
          </p>
          <p className="mb-4">
            Email: support@example.com<br />
            Phone: 1-800-123-4567<br />
            Hours: Monday - Friday, 9am - 5pm EST
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default ReturnPolicyPage;