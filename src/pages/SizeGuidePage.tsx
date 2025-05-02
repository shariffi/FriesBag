import React from 'react';
import { motion } from 'framer-motion';

const SizeGuidePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8">Size Guide</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">How to Measure</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-3">Chest / Bust</h3>
            <p className="text-gray-600">Measure around the fullest part of your chest/bust, keeping the measuring tape horizontal.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-3">Waist</h3>
            <p className="text-gray-600">Measure around your natural waistline, keeping the tape comfortably loose.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-3">Hips</h3>
            <p className="text-gray-600">Measure around the fullest part of your hips, keeping the tape horizontal.</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-6">Size Chart</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Size</th>
                  <th className="border p-3 text-left">Chest/Bust (cm)</th>
                  <th className="border p-3 text-left">Waist (cm)</th>
                  <th className="border p-3 text-left">Hips (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">XS</td>
                  <td className="border p-3">82-87</td>
                  <td className="border p-3">63-68</td>
                  <td className="border p-3">87-92</td>
                </tr>
                <tr>
                  <td className="border p-3">S</td>
                  <td className="border p-3">88-93</td>
                  <td className="border p-3">69-74</td>
                  <td className="border p-3">93-98</td>
                </tr>
                <tr>
                  <td className="border p-3">M</td>
                  <td className="border p-3">94-99</td>
                  <td className="border p-3">75-80</td>
                  <td className="border p-3">99-104</td>
                </tr>
                <tr>
                  <td className="border p-3">L</td>
                  <td className="border p-3">100-105</td>
                  <td className="border p-3">81-86</td>
                  <td className="border p-3">105-110</td>
                </tr>
                <tr>
                  <td className="border p-3">XL</td>
                  <td className="border p-3">106-111</td>
                  <td className="border p-3">87-92</td>
                  <td className="border p-3">111-116</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-600">
            If you're unsure about your size or need additional assistance, please don't hesitate to contact our customer service team. We're here to help you find the perfect fit!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SizeGuidePage;