import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube | Hash Haven',
  description: 'Watch Hash Haven videos about wellness, motherhood, property management, and life inspiration.',
};

const videos = [
  {
    id: '1',
    title: 'Morning Wellness Routine for Busy Moms',
    description: 'A 10-minute morning routine that sets you up for success',
    thumbnail: '/api/placeholder/300/200',
    videoId: 'dQw4w9WgXcQ' // Replace with actual YouTube video IDs
  },
  {
    id: '2',
    title: 'Property Management Tips & Tricks',
    description: 'Essential insights for managing rental properties effectively',
    thumbnail: '/api/placeholder/300/200',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Building Resilience After Loss',
    description: 'How to rebuild your life with purpose and strength',
    thumbnail: '/api/placeholder/300/200',
    videoId: 'dQw4w9WgXcQ'
  }
];

export default function YouTube() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">YouTube Channel</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Join me on YouTube for video content about wellness, motherhood, and building resilience.
        </p>
        <a
          href="https://youtube.com/@hashhaven"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          Subscribe to Channel
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-6xl">🎥</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {video.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {video.description}
              </p>
              <a
                href={`https://youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-medium hover:underline"
              >
                Watch Video →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}