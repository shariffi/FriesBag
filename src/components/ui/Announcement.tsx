import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnnouncementProps {
  message: string;
  onClose: () => void;
}

const Announcement: React.FC<AnnouncementProps> = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative bg-primary-600 dark:bg-primary-700 py-2 text-center text-white text-sm z-50"
    >
      <p className="font-medium tracking-wide">{message}</p>
      <button
        onClick={onClose}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-primary-700 dark:hover:bg-primary-800 rounded-full transition-colors"
        aria-label="Close announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
};

export default Announcement;