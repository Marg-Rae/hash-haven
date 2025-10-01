import type { Metadata } from 'next';
import BlogLayout from '@/components/BlogLayout';
import BlogGrid from '@/components/BlogGrid';

export const metadata: Metadata = {
  title: 'Blog | Hash Haven',
  description: 'Travel tips, Airbnb hosting insights, local service guides, and destination information to enhance your stay experience.',
};

export default function BlogPage() {
  return (
    <BlogLayout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Hash Haven Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Discover insights, tips, and stories about luxury accommodations, 
          wellness experiences, and unforgettable adventures.
        </p>
      </div>
      <BlogGrid />
    </BlogLayout>
  );
}