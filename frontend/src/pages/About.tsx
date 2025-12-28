import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Users,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description:
        'We stay ahead of the curve with cutting-edge technologies and innovative solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We work closely with our clients to understand their needs and deliver tailored solutions.',
    },
    {
      icon: CheckCircle,
      title: 'Quality',
      description:
        'We maintain the highest standards in everything we do, ensuring excellence in every project.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description:
        'We help our clients grow by providing scalable solutions that adapt to their evolving needs.',
    },
  ];

  const promises = [
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description:
        'We deliver high-quality solutions that meet and exceed your expectations.',
    },
    {
      icon: Target,
      title: 'Timely Delivery',
      description:
        'We commit to delivering projects on time, every time, without compromising quality.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description:
        'Our team provides ongoing support and maintenance to ensure your success.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description:
        'We build solutions that grow with your business and adapt to your needs.',
    },
  ];

  const approachSteps = [
    {
      step: '01',
      title: 'Discovery',
      description:
        'We start by understanding your business needs, goals, and challenges. This involves in-depth consultations, stakeholder interviews, and market analysis to ensure we have a comprehensive understanding of the project\'s context.',
    },
    {
      step: '02',
      title: 'Planning',
      description:
        'Based on the discovery phase, we create a detailed roadmap and strategy. This includes defining the project scope, setting timelines, allocating resources, and establishing key performance indicators (KPIs) to measure success.',
    },
    {
      step: '03',
      title: 'Development',
      description:
        'Our expert team builds your solution using agile methodologies. We focus on iterative development, continuous feedback, and transparent communication to ensure the final product aligns perfectly with your vision.',
    },
    {
      step: '04',
      title: 'Launch & Support',
      description:
        'We deploy your solution to the market and provide comprehensive post-launch support. Our team remains available for maintenance, updates, and any further assistance to ensure your long-term success.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
              About Softvex
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading IT services and software solutions provider,
              dedicated to delivering excellence through innovation and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 p-10 rounded-xl shadow-lg text-center flex flex-col justify-center"
          >
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-200/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent-200/50 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Eye size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                To be the most trusted and innovative IT solutions provider,
                empowering businesses worldwide to achieve their digital
                transformation goals through cutting-edge technology and
                exceptional service.
              </p>
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden bg-gradient-to-br from-accent-50 to-primary-50 p-10 rounded-xl shadow-lg text-center flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-200/50 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-primary-200/50 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent-600 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                To deliver scalable, smart software solutions that drive
                business growth, enhance operational efficiency, and create
                lasting value for our clients through innovation, expertise, and
                unwavering commitment to excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute w-0.5 h-full bg-primary-200 top-0 left-1/2 transform -translate-x-1/2"></div>
            {approachSteps.map((item, index) => (
              <div key={item.step} className="relative md:flex md:items-center md:justify-between mb-12">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                      <span className="text-primary-600">{item.step}.</span> {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>
                <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-4 h-4 rounded-full bg-primary-600"></div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:order-1'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value: any, index: number) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Our Promise
            </h2>
            <p className="text-xl text-white/90">
              Our commitment to delivering excellence in every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((promise: any, index: number) => (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <promise.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {promise.title}
                </h3>
                <p className="text-gray-600">{promise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Softvex is Different
            </h2>
            <p className="text-lg text-gray-600">
              What sets us apart from the competition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Client-Centric Approach',
                description:
                  'We prioritize your success and work as an extension of your team.',
                imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fGVufDB8fHx8fA%3D%3D',
              },
              {
                title: 'Proven Track Record',
                description:
                  '500+ successful projects and satisfied clients worldwide.',
                imageUrl: 'https://images.unsplash.com/photo-1556742055-a4f5f5f5f5f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fGVufDB8fHx8fA%3D%3D',
              },
              {
                title: 'Innovation First',
                description:
                  'We leverage the latest technologies to deliver cutting-edge solutions.',
                imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c710?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fGVufDB8fHx8fA%3D%3D',
              },
            ].map((item: any, index: number) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
