import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Smartphone,
  Users,
  Bell,
  BarChart3,
  Shield,
  CheckCircle,
  ArrowRight,
  Navigation,
  Clock,
  AlertCircle,
} from 'lucide-react'

const Product = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Real-time GPS Tracking',
      description:
        'Track bus locations in real-time with high accuracy GPS technology. Monitor routes, speeds, and locations instantly.',
    },
    {
      icon: Smartphone,
      title: 'Admin Dashboard',
      description:
        'Comprehensive web-based dashboard for administrators to manage routes, drivers, vehicles, and monitor system performance.',
    },
    {
      icon: Users,
      title: 'Driver App',
      description:
        'User-friendly mobile app for drivers to start/stop routes, view schedules, and receive important notifications.',
    },
    {
      icon: Smartphone,
      title: 'Parent/Student App',
      description:
        'Mobile app for parents and students to track bus location, receive notifications, and view route information.',
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description:
        'Instant notifications for delays, arrivals, emergencies, and important announcements to keep everyone informed.',
    },
    {
      icon: BarChart3,
      title: 'Reports & Analytics',
      description:
        'Detailed reports on routes, driver performance, fuel consumption, and other key metrics for data-driven decisions.',
    },
    {
      icon: Navigation,
      title: 'Route Optimization',
      description:
        'AI-powered route optimization to reduce travel time, fuel consumption, and improve efficiency.',
    },
    {
      icon: Shield,
      title: 'Safety Features',
      description:
        'Emergency alerts, speed monitoring, geofencing, and other safety features to ensure passenger security.',
    },
  ]

  const benefits = [
    'Improved safety and security for students',
    'Reduced fuel costs through route optimization',
    'Better parent satisfaction with real-time updates',
    'Enhanced operational efficiency',
    'Reduced administrative workload',
    'Comprehensive reporting and analytics',
  ]

  const howItWorks = [
    {
      step: 1,
      title: 'Install GPS Device',
      description:
        'A small GPS device is installed in each bus, which sends location data to our servers in real-time.',
    },
    {
      step: 2,
      title: 'Admin Setup',
      description:
        'Administrators set up routes, drivers, and vehicles in the web-based dashboard.',
    },
    {
      step: 3,
      title: 'Driver App',
      description:
        'Drivers use the mobile app to start and stop their routes, and view their schedules.',
    },
    {
      step: 4,
      title: 'Real-time Tracking',
      description:
        'Parents and administrators can track the bus location in real-time through the mobile app or web dashboard.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
                Bus Tracking System
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A comprehensive real-time GPS tracking solution designed for
                schools and transportation companies. Monitor bus locations,
                track routes, and keep parents informed with our advanced bus
                tracking system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
                >
                  Request Demo
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-2xl p-8 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                    alt="Bus Tracking System Dashboard"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = '<div class="flex items-center justify-center w-full h-full"><svg class="w-20 h-20 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>'
                      }
                    }}
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Real-time Bus Tracking Dashboard
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Product Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Bus Tracking System is a complete solution that combines
              real-time GPS tracking, mobile applications, and a powerful admin
              dashboard to provide comprehensive fleet management and parent
              communication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: '99.9%',
                label: 'Uptime Guarantee',
                description: 'Reliable service you can count on',
              },
              {
                number: '< 5s',
                label: 'Update Frequency',
                description: 'Real-time location updates',
              },
              {
                number: '24/7',
                label: 'Support',
                description: 'Round-the-clock assistance',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              A simple and effective process to get you up and running.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold text-primary-600 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need for efficient bus tracking and management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6">
                Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Bus Tracking System delivers tangible benefits for schools,
                transportation companies, parents, and students.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle
                      size={24}
                      className="text-primary-600 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-8 border border-primary-100 overflow-hidden">
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                    alt="Bus Tracking System Benefits"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="space-y-6">
                  {[
                    { icon: Clock, text: 'Real-time Updates' },
                    { icon: AlertCircle, text: 'Emergency Alerts' },
                    { icon: Navigation, text: 'Route Optimization' },
                    { icon: BarChart3, text: 'Analytics Dashboard' },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-sm"
                    >
                      <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <span className="text-gray-900 font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Screenshots
            </h2>
            <p className="text-lg text-gray-600">
              See our Bus Tracking System in action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Admin Dashboard',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                alt: 'Admin Dashboard Screenshot',
              },
              {
                title: 'Driver App',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
                alt: 'Driver Mobile App Screenshot',
              },
              {
                title: 'Parent App',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
                alt: 'Parent Mobile App Screenshot',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = '<div class="flex items-center justify-center w-full h-full"><svg class="w-16 h-16 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg></div>'
                      }
                    }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Ready to Transform Your Bus Tracking?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Request a demo or get a custom quote for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Request Demo
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Product
