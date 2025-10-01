'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I would love to hear from you! Whether you have questions, feedback, or just want to connect, 
          feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="collaboration">Collaboration</option>
                <option value="products">Digital Products</option>
                <option value="speaking">Speaking Opportunities</option>
                <option value="support">Support</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Tell me how I can help you..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Connect With Me</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-pink-600 dark:text-pink-400 hover:underline">YouTube</a>
                  <a href="https://www.instagram.com/hash_haven09?igsh=MTJlNGlmMXZyenM4eQ==" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline">Instagram</a>
                  <a href="https://www.tiktok.com/@hash_haven?_t=ZM-90AwkMFbA5c&_r=1" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline">TikTok</a>
                  <a href="https://www.facebook.com/share/14M8mwQ9Vu7/" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-400 hover:underline">Facebook</a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Response Time</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I typically respond to messages within 24-48 hours. Thank you for your patience!
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">What to Expect</h3>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Personalized responses to your inquiries</li>
                  <li>• Collaboration opportunities discussion</li>
                  <li>• Product support and guidance</li>
                  <li>• Speaking engagement coordination</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-xl font-semibold mb-4">Join the Community</h3>
            <p className="mb-4">
              Stay updated with the latest content and resources by following Hash Haven on social media.
            </p>
            <button className="bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Follow Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}