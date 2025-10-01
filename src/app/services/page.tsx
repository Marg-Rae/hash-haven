import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Hash Haven',
  description: 'Premium local services including airport transfers, babysitting, private chefs, errands, and personalized assistance for your stay.',
};

const serviceCategories = [
  {
    id: '1',
    title: 'Transportation Services',
    icon: '🚗',
    services: [
      { name: 'Airport Pickup & Drop-off', price: 'From $20', description: 'Reliable transfers to/from airport' },
      { name: 'City Tours & Sightseeing', price: 'From $35', description: 'Guided tours with local insights' },
      { name: 'Shopping Mall Trips', price: 'From $15', description: 'Convenient shopping transportation' },
      { name: 'Event Transportation', price: 'From $25', description: 'Wedding, conference, or event transport' }
    ]
  },
  {
    id: '2',
    title: 'Childcare & Family Services',
    icon: '👶',
    services: [
      { name: 'Professional Babysitting', price: 'From $10/hr', description: 'Certified childcare professionals' },
      { name: 'Nanny Services', price: 'From $15/hr', description: 'Full-time childcare support' },
      { name: 'Children\'s Activities', price: 'From $20', description: 'Supervised fun activities for kids' },
      { name: 'Family Photography', price: 'From $75', description: 'Capture precious family moments' }
    ]
  },
  {
    id: '3',
    title: 'Culinary Services',
    icon: '👨‍🍳',
    services: [
      { name: 'Private Chef Service', price: 'From $75/meal', description: 'Personal chef for your stay' },
      { name: 'Meal Preparation', price: 'From $35', description: 'Pre-prepared healthy meals' },
      { name: 'Cooking Classes', price: 'From $60', description: 'Learn local cuisine with expert chefs' },
      { name: 'Special Diet Catering', price: 'From $40', description: 'Vegan, keto, gluten-free options' }
    ]
  },
  {
    id: '4',
    title: 'Personal Assistant Services',
    icon: '🎯',
    services: [
      { name: 'Grocery Shopping', price: 'From $15', description: 'Fresh groceries delivered to you' },
      { name: 'Errands & Tasks', price: 'From $18', description: 'Banking, post office, appointments' },
      { name: 'Laundry & Cleaning', price: 'From $25', description: 'Professional cleaning services' },
      { name: 'Personal Shopping', price: 'From $25', description: 'Shopping assistance and styling' }
    ]
  },
  {
    id: '5',
    title: 'Wellness & Relaxation',
    icon: '🧘‍♀️',
    services: [
      { name: 'In-Home Massage', price: 'From $60', description: 'Professional therapeutic massage' },
      { name: 'Yoga & Fitness', price: 'From $45', description: 'Personal trainer or yoga instructor' },
      { name: 'Spa Services', price: 'From $50', description: 'Facial, manicure, beauty treatments' },
      { name: 'Meditation Sessions', price: 'From $30', description: 'Guided meditation and mindfulness' }
    ]
  },
  {
    id: '6',
    title: 'Business Services',
    icon: '💼',
    services: [
      { name: 'Airport Executive Transfer', price: 'From $45', description: 'Professional business transportation' },
      { name: 'Meeting Room Setup', price: 'From $75', description: 'Professional meeting arrangements' },
      { name: 'Translation Services', price: 'From $35/hr', description: 'Professional interpreters' },
      { name: 'Event Planning', price: 'From $150', description: 'Corporate event coordination' }
    ]
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comprehensive local services to enhance your stay and make your visit stress-free and memorable.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCategories.map((category) => (
          <div key={category.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {category.services.map((service, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                      {service.name}
                    </h4>
                    <span className="text-pink-600 dark:text-pink-400 font-semibold text-sm">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Link
                href="/contact"
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-pink-700 transition-colors text-center block"
              >
                Book Services
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Custom Service Packages</h2>
        <p className="text-xl mb-6 opacity-90">
          Combine multiple services for better rates. We create personalized packages based on your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Family Package</h3>
            <p className="text-sm opacity-90">Babysitting + Airport transfer + Grocery shopping</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Business Package</h3>
            <p className="text-sm opacity-90">Executive transport + Meeting setup + Translation</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Luxury Package</h3>
            <p className="text-sm opacity-90">Private chef + Spa services + Personal assistant</p>
          </div>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center mt-6 px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Request Custom Package
        </Link>
      </div>
    </div>
  );
}