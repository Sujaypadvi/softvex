import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import { Parallax } from 'react-scroll-parallax';
import web from "../assets/web development.jpg"
import app from "../assets/app development.jpg"
import crm from "../assets/crm solution.jpg"
import erp from "../assets/erp solotion.jpg"
import dm from "../assets/digital marketing.jpg"
import {
  Code,
  Smartphone,
  TrendingUp,
  Database,
  Settings,
  Shield,
  Zap,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description:
        'Custom software solutions tailored to your business needs. Web applications to enterprise systems.',
      features: ['Web Applications', 'Enterprise Software', 'API Development'],
      imageUrl: web,
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description:
        'Native and cross-platform mobile applications for iOS, Android, and web platforms.',
      features: ['iOS Apps', 'Android Apps', 'Cross-platform Solutions'],
      imageUrl: app,
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing services to grow your online presence and reach target audience.',
      features: ['SEO', 'Social Media', 'PPC Advertising', 'Content Marketing'],
      imageUrl: dm,
    },
    {
      icon: Database,
      title: 'CRM Solutions',
      description:
        'Customer relationship management systems to streamline sales and customer service processes.',
      features: ['Custom CRM', 'Sales Automation', 'Customer Analytics'],
      imageUrl: crm,
    },
    {
      icon: Settings,
      title: 'ERP Solutions',
      description:
        'Enterprise resource planning systems to optimize business operations and resource management.',
      features: ['Custom ERP', 'Process Automation', 'Business Intelligence'],
      imageUrl: erp,
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile development process with rapid deployment',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers and designers at your service',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality assurance processes',
    },
  ];

  const technologies = [
    { name: 'React', logoUrl: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Node.js', logoUrl: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
    { name: 'TypeScript', logoUrl: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
    { name: 'Python', logoUrl: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
    { name: 'Java', logoUrl: 'https://cdn.worldvectorlogo.com/logos/java-4.svg' },
    { name: 'AWS', logoUrl: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
    { name: 'Docker', logoUrl: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
    { name: 'MongoDB', logoUrl: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'Firebase', logoUrl: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
    { name: 'PostgreSQL', logoUrl: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      content:
        'Softvex transformed our business operations with their custom ERP solution. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director, GrowthCo',
      content:
        'Their digital marketing services helped us increase our online presence by 300%. Outstanding results!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, StartupXYZ',
      content:
        'The mobile app they developed exceeded our expectations. Professional team and excellent communication.',
      rating: 5,
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval: number | undefined;

    const startScrolling = () => {
      scrollInterval = window.setInterval(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 20);
    };

    const stopScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };

    if (!isHovering) {
      startScrolling();
    }

    return () => stopScrolling();
  }, [isHovering]);

  return (
    <div>
      <HeroSection />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT services to drive your business forward
            </p>
          </motion.div>

          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            {/* Gradient fade effects on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

            {/* Scrollable container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="min-w-[300px] sm:min-w-[340px] lg:min-w-[380px] flex-shrink-0"
                >
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl} // Pass imageUrl to ServiceCard
                    delay={index * 0.1}
                    limitDescriptionLines={true}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Product
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Innovative solutions designed to transform your business operations
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
                Bus Tracking System
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Real-time GPS tracking solution for schools and transportation
                companies. Monitor bus locations, track routes, and keep parents
                informed with our comprehensive bus tracking system.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Real-time GPS tracking',
                  'Admin dashboard',
                  'Driver mobile app',
                  'Parent/Student app',
                  'Push notifications',
                  'Route optimization',
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-primary-600 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/product"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
            <Parallax speed={-5}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg overflow-hidden flex items-center justify-center relative">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                      alt="Bus Tracking System Dashboard"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to icon if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="flex items-center justify-center w-full h-full"><svg class="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>';
                        }
                      }}
                    />
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-4">
                    Bus Tracking System Dashboard Preview
                  </p>
                </div>
              </motion.div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Softvex?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through innovation, expertise, and
              dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Parallax key={item.title} speed={index * 2 + 2}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-gray-600">
              Modern tech stack for cutting-edge solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col items-center"
              >
                <img
                  src={tech.logoUrl}
                  alt={tech.name}
                  className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="absolute -bottom-6 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Parallax key={testimonial.name} speed={index * 3 - 2}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <Parallax speed={-10}>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </Parallax>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get a Quote
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/80 text-white rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-white transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
