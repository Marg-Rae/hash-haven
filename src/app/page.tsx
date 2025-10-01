import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-800 dark:to-indigo-800 text-white py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">Hash Haven</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering mothers through resilience, wellness, and practical wisdom. 
            Join me on a journey of motherhood, property management, and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn My Story
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
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
              What You'll Find Here
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A space dedicated to sharing authentic experiences and practical resources for modern mothers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Personal Blog
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Raw, honest stories about widowhood, motherhood, and rebuilding life with purpose.
              </p>
              <Link 
                href="/blog" 
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                Read Articles →
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">🎥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                YouTube Content
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Video content covering wellness tips, property management insights, and life lessons.
              </p>
              <Link 
                href="/youtube" 
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                Watch Videos →
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Digital Products
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Practical tools including budget trackers, wellness journals, and planning resources.
              </p>
              <Link 
                href="/products" 
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                Explore Products →
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
                My Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I'm a widow, mother, property manager, and geology graduate navigating life with 
                resilience and purpose. Through Hash Haven, I share the real experiences of 
                rebuilding, growing, and thriving after loss.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Whether you're looking for wellness inspiration, practical life tips, or just 
                someone who understands the journey, you've found your haven.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:underline"
              >
                Read My Full Story
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Building Resilience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every challenge is an opportunity to grow stronger and create a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 dark:bg-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
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