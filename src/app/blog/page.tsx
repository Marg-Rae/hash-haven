import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Hash Haven',
  description: 'Read authentic stories about motherhood, resilience, wellness, and life lessons from Hash Haven.',
};

const blogPosts = [
  {
    id: '1',
    title: 'Finding Strength in Vulnerability',
    excerpt: 'How sharing our struggles can become our greatest source of power and connection.',
    date: '2024-10-01',
    readTime: '5 min read',
    slug: 'finding-strength-in-vulnerability'
  },
  {
    id: '2',
    title: 'Property Management Lessons for Life',
    excerpt: 'What managing properties has taught me about managing life, relationships, and personal growth.',
    date: '2024-09-28',
    readTime: '7 min read',
    slug: 'property-management-lessons-for-life'
  },
  {
    id: '3',
    title: 'Wellness Routines for Busy Mothers',
    excerpt: 'Practical self-care strategies that actually work when you have no time for yourself.',
    date: '2024-09-25',
    readTime: '6 min read',
    slug: 'wellness-routines-for-busy-mothers'
  }
];

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Authentic stories and practical insights from my journey through motherhood, loss, and resilience.
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
                <Link href={`/blog/${post.slug}`} className="hover:text-purple-600 dark:hover:text-purple-400">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.slug}`}
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
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