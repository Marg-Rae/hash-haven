import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Hash Haven',
  description: 'Learn about Hash Haven - premium Airbnb properties with exceptional local services including airport transfers, babysitting, private chefs, and safari tours.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Hash Haven</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Welcome to Hash Haven - your premier destination for luxury Airbnb accommodations 
          combined with exceptional local services that make every stay unforgettable.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          At Hash Haven, we believe that travel should be seamless, comfortable, and enriching. 
          We provide premium accommodations paired with comprehensive local services to ensure 
          your stay exceeds expectations - whether you&apos;re traveling for business, family vacation, 
          or adventure.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-lg">
            <h3 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">🏡 Premium Properties</h3>
            <p className="text-sm">Carefully selected luxury villas, family homes, and unique stays</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-lg">
            <h3 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">🚗 Transport Services</h3>
            <p className="text-sm">Airport transfers, city tours, and reliable transportation</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-lg">
            <h3 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">👶 Family Care</h3>
            <p className="text-sm">Professional babysitting and childcare services</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-lg">
            <h3 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">👨‍🍳 Culinary Excellence</h3>
            <p className="text-sm">Private chefs, meal preparation, and cooking experiences</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-lg">
            <h3 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">🦁 Safari Adventures</h3>
            <p className="text-sm">Guided safari tours and wildlife experiences</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-lg">
            <h3 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">🎯 Personal Assistant</h3>
            <p className="text-sm">Errands, shopping, and personalized assistance</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="mb-6">
          We are committed to providing exceptional hospitality that goes beyond accommodation. 
          Our local expertise, attention to detail, and personalized service ensure that every 
          guest feels welcomed, comfortable, and cared for throughout their stay.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Why Choose Hash Haven?</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>24/7 guest support and assistance</li>
          <li>Vetted, professional service providers</li>
          <li>Competitive pricing with transparent fees</li>
          <li>Local expertise and insider knowledge</li>
          <li>Flexible service packages and customization</li>
          <li>Safety and security as top priorities</li>
        </ul>
        
        <p className="mb-6">
          Whether you need a luxury villa for a family reunion, airport transfers for business travel, 
          or a complete safari experience, Hash Haven is your trusted partner for exceptional 
          accommodations and services.
        </p>
      </div>
    </div>
  );
}