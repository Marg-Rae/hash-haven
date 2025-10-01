import axios from 'axios';
import { WORDPRESS_API_URL, WordPressPost, WordPressMedia } from './wordpress';

// Create axios instance with default config
const api = axios.create({
  baseURL: WORDPRESS_API_URL,
  timeout: 10000,
});

export class WordPressService {
  // Fetch all published posts
  static async getPosts(page: number = 1, perPage: number = 10): Promise<WordPressPost[]> {
    try {
      const response = await api.get('/posts', {
        params: {
          status: 'publish',
          page,
          per_page: perPage,
          _embed: true, // Include featured media
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }

  // Fetch single post by slug
  static async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    try {
      const response = await api.get('/posts', {
        params: {
          slug,
          status: 'publish',
          _embed: true,
        },
      });
      
      if (response.data && response.data.length > 0) {
        return response.data[0];
      }
      return null;
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      return null;
    }
  }

  // Fetch featured media
  static async getMedia(mediaId: number): Promise<WordPressMedia | null> {
    try {
      const response = await api.get(`/media/${mediaId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching media:', error);
      return null;
    }
  }

  // Search posts
  static async searchPosts(query: string): Promise<WordPressPost[]> {
    try {
      const response = await api.get('/posts', {
        params: {
          search: query,
          status: 'publish',
          _embed: true,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching posts:', error);
      return [];
    }
  }

  // Get posts by category
  static async getPostsByCategory(categoryId: number): Promise<WordPressPost[]> {
    try {
      const response = await api.get('/posts', {
        params: {
          categories: categoryId,
          status: 'publish',
          _embed: true,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      return [];
    }
  }

  // Health check - test WordPress API connection
  static async healthCheck(): Promise<boolean> {
    try {
      const response = await api.get('/posts', {
        params: {
          per_page: 1,
        },
      });
      return response.status === 200;
    } catch (error) {
      console.log('WordPress API not ready yet - this is normal during setup');
      return false;
    }
  }

  // Check if WordPress is properly installed
  static async isWordPressInstalled(): Promise<boolean> {
    try {
      const response = await api.get('/');
      return response.status === 200 && response.data?.name;
    } catch (error) {
      console.log('WordPress installation check failed - setup may be in progress');
      return false;
    }
  }
}