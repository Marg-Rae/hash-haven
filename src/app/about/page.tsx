import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Hash Haven',
  description: 'Learn about my journey as a widow, mother, property manager, and geology graduate building resilience through Hash Haven.',
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Hash Haven</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Welcome to my world - a space where resilience meets motherhood, where geology meets property management, 
          and where vulnerability becomes strength.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">My Story</h2>
        <p className="mb-6">
          I am a widow, mother, property manager, and geology graduate navigating life with purpose and determination. 
          My journey has been marked by unexpected turns, profound loss, and the incredible strength that comes from 
          rebuilding your life from the ground up.
        </p>
        
        <p className="mb-6">
          As a geology graduate, I have always been fascinated by the layers beneath the surface - both literally 
          in rocks and metaphorically in life. This scientific background has taught me patience, observation, and 
          the understanding that pressure can create something beautiful and strong.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
        <p className="mb-6">
          Today, I manage properties while raising my children, sharing insights about wellness, and creating 
          digital resources that help other mothers navigate their own challenging journeys. Through Hash Haven, 
          I offer practical wisdom gained from real-life experiences.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Why Hash Haven?</h2>
        <p className="mb-6">
          The name &quot;Hash Haven&quot; represents a safe space - a haven - where we can hash out life&apos;s challenges together. 
          It is a place where authenticity is valued, where struggles are acknowledged, and where growth is celebrated.
        </p>
        
        <p className="mb-6">
          Whether you are a mother seeking inspiration, someone dealing with loss, or anyone looking for practical 
          life advice, you have found your community here.
        </p>
      </div>
    </div>
  );
}