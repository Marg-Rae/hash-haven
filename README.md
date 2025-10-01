# Hash Haven

A responsive personal brand website built with Next.js and TailwindCSS, showcasing authentic stories of motherhood, resilience, and wellness.

## Features

- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices
- **Dark/Light Mode**: Theme toggle for user preference
- **Blog System**: Markdown-friendly blog for sharing personal stories and insights
- **YouTube Integration**: Dedicated section for video content
- **Digital Products**: Showcase for budget trackers, journals, and planning resources
- **Contact Form**: Interactive contact form for community engagement
- **SEO Optimized**: Meta tags, sitemap, and robots.txt for search engine optimization
- **Social Sharing**: Integration with social media platforms

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Icons**: Heroicons
- **Theme**: next-themes for dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hash-haven
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── blog/
│   │   └── page.tsx          # Blog listing page
│   ├── contact/
│   │   └── page.tsx          # Contact form page
│   ├── products/
│   │   └── page.tsx          # Digital products page
│   ├── youtube/
│   │   └── page.tsx          # YouTube content page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with navigation
│   ├── page.tsx              # Home page
│   ├── robots.ts             # SEO robots configuration
│   └── sitemap.ts            # SEO sitemap generation
└── components/
    ├── Footer.tsx            # Site footer component
    ├── Navbar.tsx            # Navigation component
    └── Providers.tsx         # Theme provider wrapper
```

## Deployment on Vercel

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import your project to [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure build settings
4. Your site will be deployed with a generated URL

## Customization

### Content Updates

1. **Personal Information**: Update content in `src/app/about/page.tsx`
2. **Blog Posts**: Add new posts to the `blogPosts` array in `src/app/blog/page.tsx`
3. **YouTube Videos**: Update video information in `src/app/youtube/page.tsx`
4. **Digital Products**: Modify products in `src/app/products/page.tsx`
5. **Social Links**: Update social media URLs in `src/components/Footer.tsx`

### SEO Configuration

- Update the domain URL in `src/app/sitemap.ts` and `src/app/robots.ts`
- Modify meta tags in each page's metadata export

Built with ❤️ using Next.js and TailwindCSS
