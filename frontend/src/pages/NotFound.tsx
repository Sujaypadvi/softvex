import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={60} className="text-primary-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              404 - Page Not Found
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The page you are looking for does not exist. It might have been
              moved or deleted.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Go Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
