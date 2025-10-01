import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Products | Hash Haven',
  description: 'Discover practical digital products including budget trackers, wellness journals, and planning resources.',
};

const products = [
  {
    id: '1',
    name: 'Ultimate Budget Tracker',
    description: 'A comprehensive spreadsheet to track your finances and build wealth as a single mother.',
    price: '$15',
    features: ['Monthly budget planner', 'Expense tracking', 'Savings goals', 'Emergency fund tracker'],
    status: 'Available'
  },
  {
    id: '2',
    name: 'Wellness Journal for Moms',
    description: 'A digital journal designed specifically for busy mothers to track wellness and self-care.',
    price: '$12',
    features: ['Daily wellness check-ins', 'Mood tracking', 'Self-care reminders', 'Gratitude practice'],
    status: 'Available'
  },
  {
    id: '3',
    name: 'Property Management Toolkit',
    description: 'Essential templates and checklists for managing rental properties effectively.',
    price: '$25',
    features: ['Tenant screening forms', 'Maintenance checklists', 'Rent tracking', 'Legal templates'],
    status: 'Coming Soon'
  },
  {
    id: '4',
    name: 'Life Planning Workbook',
    description: 'A comprehensive guide to rebuilding and planning your life after major changes.',
    price: '$18',
    features: ['Goal setting framework', 'Life visioning exercises', 'Action planning', 'Progress tracking'],
    status: 'Coming Soon'
  }
];

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Digital Products</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Practical tools and resources to help you thrive in motherhood, wellness, and life planning.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {product.price}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                Includes:
              </h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <button
              className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                product.status === 'Available'
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
              }`}
              disabled={product.status !== 'Available'}
            >
              {product.status === 'Available' ? 'Purchase Now' : 'Coming Soon'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}