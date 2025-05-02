import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full px-4 py-2 border dark:border-gray-700 rounded-md bg-white dark:bg-dark-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
            disabled={status === 'submitting'}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1.5 bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-md transition-colors disabled:opacity-70"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>

      {status === 'submitting' && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Submitting...
        </p>
      )}

      {status === 'success' && (
        <p className="text-xs text-success-600 dark:text-success-400 mt-2">
          Thank you for subscribing!
        </p>
      )}

      {status === 'error' && (
        <p className="text-xs text-error-600 dark:text-error-400 mt-2">
          There was an error. Please try again.
        </p>
      )}
      
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        By subscribing, you agree to receive marketing emails from us. You can
        unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;