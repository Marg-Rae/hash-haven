// WordPress API configuration
export const WORDPRESS_API_URL = 'https://hashhavenltd.com/wp-json/wp/v2';

export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
}

// Helper function to strip HTML from excerpts
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
}

// Helper function to calculate read time
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const text = stripHtml(content);
  const wordCount = text.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}