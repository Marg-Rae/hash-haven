'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { WordPressService } from '@/services/wordpress';
import { WordPressPost } from '@/lib/wordpress';

// Fallback blog posts if WordPress is not available
const fallbackPosts = [
  {
    id: 1,
    slug: 'ultimate-guide-airport-transfers',
    title: 'Ultimate Guide to Airport Transfers: Making Your Arrival Stress-Free',
    excerpt: 'Everything you need to know about booking reliable airport transfers and what to expect from professional transport services.',
    date: '2024-10-01',
    author: 'Hash Haven Team',
    category: 'Travel Services',
    image: '/placeholder-blog-1.jpg'
  },
  {
    id: 2,
    slug: 'traveling-with-kids-babysitting-services',
    title: 'Traveling with Kids: Why Professional Babysitting Services Are Game-Changers',
    excerpt: 'How to enjoy your vacation while ensuring your children are safe, happy, and well-cared for with certified childcare professionals.',
    date: '2024-09-28',
    author: 'Hash Haven Team',
    category: 'Family Services',
    image: '/placeholder-blog-2.jpg'
  },
  {
    id: 3,
    slug: 'private-chef-vs-restaurant-dining',
    title: 'Private Chef vs Restaurant Dining: The Luxury Experience at Your Airbnb',
    excerpt: 'Discover why hiring a private chef for your stay offers unmatched convenience, customization, and memorable culinary experiences.',
    date: '2024-09-25',
    author: 'Hash Haven Team',
    category: 'Culinary Services',
    image: '/placeholder-blog-3.jpg'
  },
  {
    id: 4,
    slug: 'safari-etiquette-first-time-guests',
    title: 'Safari Etiquette: What Every First-Time Safari Guest Should Know',
    excerpt: 'Essential tips for safari tours including what to wear, how to behave around wildlife, and making the most of your adventure.',
    date: '2024-09-22',
    author: 'Hash Haven Team',
    category: 'Adventure Tours',
    image: '/placeholder-blog-4.jpg'
  },
  {
    id: 5,
    slug: 'choosing-perfect-airbnb-property',
    title: 'Choosing the Perfect Airbnb Property for Your Group Size and Needs',
    excerpt: 'A comprehensive guide to selecting accommodations that match your group size, budget, and specific requirements.',
    date: '2024-09-20',
    author: 'Hash Haven Team',
    category: 'Property Selection',
    image: '/placeholder-blog-5.jpg'
  },
  {
    id: 6,
    slug: 'local-errands-concierge-services',
    title: 'Local Errands and Concierge Services: Your Personal Assistant Away From Home',
    excerpt: 'From grocery shopping to dry cleaning pickup, learn how concierge services can make your stay completely hassle-free.',
    date: '2024-09-18',
    author: 'Hash Haven Team',
    category: 'Concierge Services',
    image: '/placeholder-blog-6.jpg'
  },
  {
    id: 7,
    slug: 'hidden-gems-local-tour-guide',
    title: 'Hidden Gems: Why a Local Tour Guide Beats Guidebooks Every Time',
    excerpt: 'Discover authentic experiences and secret spots that only locals know with professional tour guide services.',
    date: '2024-09-15',
    author: 'Hash Haven Team',
    category: 'Local Experiences',
    image: '/placeholder-blog-7.jpg'
  },
  {
    id: 8,
    slug: 'sightseeing-tours-beyond-tourist-traps',
    title: 'Sightseeing Tours: Beyond the Tourist Traps',
    excerpt: 'Experience authentic culture and hidden treasures with curated sightseeing tours designed for discerning travelers.',
    date: '2024-09-12',
    author: 'Hash Haven Team',
    category: 'Sightseeing',
    image: '/placeholder-blog-8.jpg'
  }
];

export default function BlogGrid() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isUsingWordPress, setIsUsingWordPress] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const wordPressPosts = await WordPressService.getPosts(currentPage, 6);
        setPosts(wordPressPosts);
        setIsUsingWordPress(true);
        // In a real implementation, you'd get total pages from WordPress API headers
        setTotalPages(Math.ceil(wordPressPosts.length / 6));
      } catch {
        console.log('WordPress not available, using fallback content');
        // Use fallback posts when WordPress is not available
        const startIndex = (currentPage - 1) * 6;
        const endIndex = startIndex + 6;
        const paginatedFallback = fallbackPosts.slice(startIndex, endIndex);
        
        setPosts(paginatedFallback.map(post => ({
          id: post.id,
          date: post.date,
          slug: post.slug,
          status: 'publish',
          type: 'post',
          title: { rendered: post.title },
          content: { rendered: `<p>${post.excerpt}</p>` },
          excerpt: { rendered: post.excerpt },
          author: 1,
          featured_media: 0,
          comment_status: 'open',
          ping_status: 'open',
          sticky: false,
          template: '',
          format: 'standard',
          meta: {},
          categories: [1],
          tags: [],
          _links: {}
        })));
        setTotalPages(Math.ceil(fallbackPosts.length / 6));
        setIsUsingWordPress(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div>
      {/* WordPress Status Indicator */}
      <div className="mb-8 flex items-center justify-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${isUsingWordPress ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {isUsingWordPress ? 'WordPress Backend Connected' : 'Using Local Content'}
        </span>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900"></div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                {post.title.rendered}
              </h2>
              <div 
                className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 font-medium"
              >
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded-md ${
                currentPage === page
                  ? 'bg-pink-600 text-white border-pink-600'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}