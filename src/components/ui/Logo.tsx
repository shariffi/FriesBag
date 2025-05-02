import React from 'react';
import { Star } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-pulse-slow opacity-50">
          <Star className="text-primary-500 dark:text-primary-400" fill="currentColor" />
        </div>
      </div>
      <Star className="text-primary-600 dark:text-primary-500" fill="currentColor" />
    </div>
  );
};

export default Logo;