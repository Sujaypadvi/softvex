import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  imageUrl?: string; // Add imageUrl prop
  delay?: number;
  limitDescriptionLines?: boolean;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features = [],
  imageUrl,
  delay = 0,
  limitDescriptionLines = false,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col overflow-hidden"
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mr-4">
            <Icon size={24} className="text-white" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-gray-900">
            {title}
          </h3>
        </div>
        <p
          className={`text-gray-600 mb-4 flex-grow ${limitDescriptionLines ? 'h-12 overflow-hidden text-ellipsis' : ''}`}>
          {description}
        </p>
        {features.length > 0 && (
          <ul className="space-y-2 mt-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <span className="text-primary-600 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
