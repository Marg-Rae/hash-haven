'use client';

import { useState, useEffect } from 'react';
import { WordPressService } from '@/services/wordpress';
import { WordPressPost } from '@/lib/wordpress';
import Link from 'next/link';

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  const [recentPosts, setRecentPosts] = useState<WordPressPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const posts = await WordPressService.getPosts(1, 5);
        setRecentPosts(posts);
      } catch {
        console.log('Could not fetch recent posts from WordPress backend');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {children}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Recent Posts
            </h3>
            
            {isLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  </div>
                ))}
              </div>
            ) : recentPosts.length > 0 ? (
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-3">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-gray-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 font-medium line-clamp-2"
                    >
                      {post.title.rendered}
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                No posts available from WordPress backend yet.
              </p>
            )}

            {/* WordPress Backend Status */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 text-xs">
                <div className={`w-2 h-2 rounded-full ${recentPosts.length > 0 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <span className="text-gray-500 dark:text-gray-400">
                  {recentPosts.length > 0 ? 'WordPress Connected' : 'Connecting to WordPress...'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}