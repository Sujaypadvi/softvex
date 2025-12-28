import { motion } from 'framer-motion';
import {
  SearchX,
  Linkedin,
  Twitter,
  Github,
  Heart,
  Zap,
  Users,
  Award,
} from 'lucide-react';

const Careers = () => {
  const perks = [
    {
      icon: Zap,
      title: 'Remote First',
      description: 'Work from anywhere in the world. We are a distributed team.',
    },
    {
      icon: Heart,
      title: 'Flexible Hours',
      description:
        'We trust you to manage your time and get your work done.',
    },
    {
      icon: Users,
      title: 'Great Team',
      description:
        'Work with a team of passionate and talented people.',
    },
    {
      icon: Award,
      title: 'Stock Options',
      description:
        'We want you to be a part of our success. We offer stock options to all our employees.',
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re building our core team. Right now we don&apos;t have any active
              openings, but you can still share your profile with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why You&apos;ll Love Working Here
            </h2>
            <p className="text-lg text-gray-600">
              We are a small, passionate team that is dedicated to building great
              products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <perk.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  {perk.title}
                </h3>
                <p className="text-gray-600">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              We currently don&apos;t have any open positions. However, we&apos;re always
              happy to hear from passionate people.
            </p>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl opacity-30"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative text-center bg-white/70 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-lg p-10 lg:p-12"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchX size={40} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3">
                No Openings at the Moment
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We&apos;re not actively hiring for any specific roles right now, but
                we are always excited to connect with talented individuals who
                believe in our mission.
              </p>
              <p className="text-gray-600">
                Get in touch at:{' '}
                <a
                  href="mailto:info@softvex.in"
                  className="text-primary-600 font-semibold hover:underline"
                >
                  info@softvex.in
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connect with us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
              Connect with us
            </h2>
            <p className="text-lg text-gray-600">
              Stay up to date with our latest news and announcements.
            </p>
          </motion.div>

          <div className="flex justify-center items-center gap-8">
            <a
              href="https://www.linkedin.com/company/softvex/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Linkedin size={40} />
            </a>
            <a
              href="https://twitter.com/softvex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Twitter size={40} />
            </a>
            <a
              href="https://github.com/softvex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Github size={40} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
