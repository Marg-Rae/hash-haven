import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Hash Haven',
  description: 'Travel tips, Airbnb hosting insights, local service guides, and destination information to enhance your stay experience.',
};

import Link from 'next/link';
import { WordPressService } from '@/services/wordpress';
import { stripHtml, calculateReadTime } from '@/lib/wordpress';

// Fallback static data for development/backup
const fallbackPosts = [
  {
    id: '1',
    title: 'Ultimate Guide to Airport Transfers: Making Your Arrival Stress-Free',
    excerpt: 'Everything you need to know about booking reliable airport transfers and what to expect from professional transport services.',
    date: '2024-10-01',
    readTime: '6 min read',
    slug: 'ultimate-guide-airport-transfers'
  },
  {
    id: '2',
    title: 'Traveling with Kids: Why Professional Babysitting Services Are Game-Changers',
    excerpt: 'How to enjoy your vacation while ensuring your children are safe, happy, and well-cared for with certified childcare professionals.',
    date: '2024-09-28',
    readTime: '8 min read',
    slug: 'traveling-with-kids-babysitting-services'
  },
  {
    id: '3',
    title: 'Private Chef vs Restaurant Dining: The Luxury Experience at Your Airbnb',
    excerpt: 'Discover why hiring a private chef for your stay offers unmatched convenience, customization, and memorable culinary experiences.',
    date: '2024-09-25',
    readTime: '7 min read',
    slug: 'private-chef-vs-restaurant-dining'
  },
  {
    id: '4',
    title: 'Safari Etiquette: What Every First-Time Safari Guest Should Know',
    excerpt: 'Essential tips for safari tours including what to wear, how to behave around wildlife, and making the most of your adventure.',
    date: '2024-09-22',
    readTime: '9 min read',
    slug: 'safari-etiquette-first-time-guests'
  },
  {
    id: '5',
    title: 'Choosing the Perfect Airbnb Property for Your Group Size and Needs',
    excerpt: 'A comprehensive guide to selecting accommodations that match your group size, budget, and specific requirements.',
    date: '2024-09-20',
    readTime: '5 min read',
    slug: 'choosing-perfect-airbnb-property'
  },
  {
    id: '6',
    title: 'Local Services That Transform Your Stay: Beyond Basic Accommodation',
    excerpt: 'How additional services like grocery shopping, laundry, and personal assistance can elevate your travel experience.',
    date: '2024-09-18',
    readTime: '6 min read',
    slug: 'local-services-transform-your-stay'
  },
  {
    id: '7',
    title: 'Business Travel Made Easy: Executive Services for Professional Stays',
    excerpt: 'Professional transport, meeting room setup, and business services that ensure your work travel runs smoothly.',
    date: '2024-09-15',
    readTime: '7 min read',
    slug: 'business-travel-executive-services'
  },
  {
    id: '8',
    title: 'Budget-Friendly Travel: Getting Premium Services Without Breaking the Bank',
    excerpt: 'Smart strategies for enjoying luxury services and quality accommodations while staying within your travel budget.',
    date: '2024-09-12',
    readTime: '6 min read',
    slug: 'budget-friendly-travel-premium-services'
  }
];

async function getBlogPosts() {
  try {
    // Try to fetch from WordPress first
    const wpPosts = await WordPressService.getPosts(1, 20);
    
    if (wpPosts && wpPosts.length > 0) {
      // Transform WordPress posts to our format
      return wpPosts.map(post => ({
        id: post.id.toString(),
        title: post.title.rendered,
        excerpt: stripHtml(post.excerpt.rendered),
        date: new Date(post.date).toISOString().split('T')[0],
        readTime: calculateReadTime(post.content.rendered),
        slug: post.slug
      }));
    }
    
    // Fallback to static posts if WordPress is unavailable
    return fallbackPosts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return fallback posts if WordPress API fails
    return fallbackPosts;
  }
}

export default async function Blog() {
  const blogPosts = await getBlogPosts();
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Travel & Hospitality Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Expert insights on accommodation, travel services, and making the most of your stay. From safari adventures to business travel, discover tips that enhance every journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })} • {post.readTime}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-pink-600 dark:hover:text-pink-400">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-pink-600 dark:text-pink-400 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}