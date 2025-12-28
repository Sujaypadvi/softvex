import { Link } from 'react-router-dom';
import { MapPin, Linkedin, Twitter, Facebook, Info, Headphones } from 'lucide-react';
import logo from '../assets/logo2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Software Development', path: '/services#software-development' },
    { name: 'App Development', path: '/services#app-development' },
    { name: 'Digital Marketing', path: '/services#digital-marketing' },
    { name: 'CRM Solutions', path: '/services#crm' },
    { name: 'ERP Solutions', path: '/services#erp' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Product', path: '/product' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Softvex Logo" className="h-9 sm:h-10" />
            </div>
            <p className="text-sm leading-relaxed">
              Scalable Software. Smart Solutions. Leading IT services and
              software solutions provider.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Info size={18} className="mt-1 text-primary-400" />
                <div className="text-sm">
                  <p className="font-semibold text-white mb-0.5">
                    General Inquiries
                  </p>
                  <a
                    href="mailto:info@softvex.in"
                    className="hover:text-primary-300 transition-colors"
                  >
                    info@softvex.in
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Headphones size={18} className="mt-1 text-primary-400" />
                <div className="text-sm">
                  <p className="font-semibold text-white mb-0.5">Support</p>
                  <a
                    href="mailto:support@softvex.in"
                    className="hover:text-primary-300 transition-colors"
                  >
                    support@softvex.in
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-primary-400" />
                <span className="text-sm">
                  Bandra East, Mumbai,
                  <br />
                  Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {currentYear} Softvex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
