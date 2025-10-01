import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-800 dark:to-rose-800 text-white py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">Hash Haven</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Premium Airbnb properties with exceptional local services. 
            From luxury stays to private chefs, safari tours, and everything in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn My Story
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Premium Airbnb accommodations and comprehensive local services to make your stay unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Premium Airbnb Properties
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Luxury accommodations, family-friendly homes, and unique stays with top-rated hospitality and amenities.
              </p>
              <Link 
                href="/properties" 
                className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
              >
                View Properties →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">�</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Local Services
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Airport transfers, babysitting, errands, private chefs, safari tours, and personalized local experiences.
              </p>
              <Link 
                href="/services" 
                className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
              >
                Our Services →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tours & Experiences
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Expert tour guides, safari adventures, cultural experiences, and sightseeing packages tailored to you.
              </p>
              <Link 
                href="/experiences" 
                className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
              >
                Book Experience →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Your Complete Travel Solution
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Hash Haven offers premium Airbnb properties combined with exceptional local services. 
                From luxury accommodations to private chefs, airport transfers, safari tours, and babysitting services, 
                we ensure your stay is seamless and memorable.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Whether you need a family-friendly home, executive suite, or unique experience, we provide 
                personalized hospitality with local expertise and professional service standards.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-pink-600 dark:text-pink-400 font-semibold hover:underline"
              >
                Read My Full Story
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900 dark:to-rose-900 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Exceptional Hospitality
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Premium accommodations, personalized services, and unforgettable local experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 dark:bg-pink-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join the Hash Haven community and stay updated with the latest content, 
            resources, and inspiration.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get In Touch
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}