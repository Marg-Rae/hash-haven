import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Properties | Hash Haven',
  description: 'Discover our premium Airbnb properties - luxury homes, family-friendly accommodations, and unique stays with exceptional hospitality.',
};

const properties = [
  {
    id: '1',
    name: 'Executive Villa with Pool',
    type: 'Luxury Villa',
    guests: '8 guests',
    bedrooms: '4 bedrooms',
    features: ['Private Pool', 'Garden', 'WiFi', 'Parking', 'Security'],
    price: '$120/night',
    image: '🏡',
    description: 'Stunning executive villa with private pool, perfect for families or business travelers.'
  },
  {
    id: '2',
    name: 'Cozy Family Home',
    type: 'Family House',
    guests: '6 guests',
    bedrooms: '3 bedrooms',
    features: ['Kitchen', 'Playground', 'WiFi', 'Parking', 'Pet Friendly'],
    price: '$80/night',
    image: '🏠',
    description: 'Comfortable family home with all amenities, ideal for extended stays.'
  },
  {
    id: '3',
    name: 'Modern City Apartment',
    type: 'Apartment',
    guests: '4 guests',
    bedrooms: '2 bedrooms',
    features: ['City View', 'Balcony', 'WiFi', 'Gym Access', 'Security'],
    price: '$65/night',
    image: '🏢',
    description: 'Contemporary apartment in the heart of the city with stunning views.'
  },
  {
    id: '4',
    name: 'Safari Lodge Experience',
    type: 'Unique Stay',
    guests: '10 guests',
    bedrooms: '5 bedrooms',
    features: ['Safari View', 'Game Drives', 'Restaurant', 'Spa', 'Bar'],
    price: '$250/night',
    image: '🦁',
    description: 'Authentic safari lodge experience with wildlife viewing and luxury amenities.'
  }
];

export default function Properties() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Properties</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Premium Airbnb accommodations ranging from luxury villas to unique safari experiences.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-6xl">{property.image}</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {property.name}
                </h3>
                <span className="text-pink-600 dark:text-pink-400 font-bold">
                  {property.price}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {property.type} • {property.guests} • {property.bedrooms}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {property.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3">
                <Link 
                  href="/contact"
                  className="flex-1 bg-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-pink-700 transition-colors text-center"
                >
                  Book Now
                </Link>
                <Link 
                  href="/contact"
                  className="flex-1 border border-pink-600 text-pink-600 dark:text-pink-400 py-2 px-4 rounded-lg font-medium hover:bg-pink-50 dark:hover:bg-pink-900 transition-colors text-center"
                >
                  More Info
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-pink-50 dark:bg-pink-900 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Need Something Specific?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We can help you find the perfect accommodation for your needs, budget, and group size.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
        >
          Contact Us for Custom Options
        </Link>
      </div>
    </div>
  );
}