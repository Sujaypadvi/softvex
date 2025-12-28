import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { text: string; link: string };
}

const HeroSection = ({
  title = 'Softvex – Scalable Software. Smart Solutions.',
  subtitle = 'Leading IT Services & Software Solutions',
  description = 'Transform your business with cutting-edge technology solutions. From custom software development to digital marketing, we deliver excellence.',
  primaryCTA = { text: 'Get a Quote', link: '/contact' },
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20">
      <Parallax translateY={[-20, 20]}>
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ x: [-20, 20, -20], y: [-20, 20, -20], rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 -left-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          />
          <motion.div
            animate={{ x: [20, -20, 20], y: [20, -20, 20], rotate: [0, -180, -360], scale: [1, 1.2, 1] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear', delay: 15 }}
            className="absolute top-0 -right-4 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          />
          <motion.div
            animate={{ x: [-20, 20, -20], y: [20, -20, 20], rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear', delay: 30 }}
            className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          />
          <motion.div
            animate={{ x: [20, -20, 20], y: [-20, 20, -20], rotate: [0, -180, -360], scale: [1, 1.2, 1] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear', delay: 45 }}
            className="absolute -bottom-8 right-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          />
        </div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
              <Sparkles size={16} className="mr-2" />
              {subtitle}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to={primaryCTA.link}
              className="group px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>{primaryCTA.text}</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
