# Hash Haven

A responsive personal brand website built with Next.js and TailwindCSS, showcasing authentic stories of motherhood, resilience, and wellness with integrated booking and payment services.

## Features

- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices
- **Dark/Light Mode**: Theme toggle for user preference
- **WordPress Integration**: Content management system with REST API integration
- **Payment Processing**: PayPal and M-Pesa payment integration for service bookings
- **Email Notifications**: SendGrid integration for contact forms and booking confirmations
- **Service Booking**: Airbnb property marketing and additional services
- **Blog System**: WordPress-powered blog with fallback content
- **Contact Form**: Interactive contact form with email notifications
- **SEO Optimized**: Meta tags, sitemap, and robots.txt for search engine optimization

## Tech Stack

- **Frontend**: Next.js 15 with App Router, TypeScript, TailwindCSS
- **Backend**: WordPress CMS with REST API
- **Payment Processing**: PayPal API, M-Pesa (Safaricom Daraja API)
- **Email Service**: SendGrid API
- **Deployment**: Vercel (Frontend), Hostinger (WordPress Backend)
- **Domain**: hashhavenltd.com

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

## Environment Configuration

Create a `.env.local` file in the root directory with the following variables:

```bash
# PayPal Configuration
PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_CLIENT_SECRET=your_paypal_client_secret_here

# M-Pesa Configuration (Safaricom Daraja API)
MPESA_CONSUMER_KEY=your_mpesa_consumer_key_here
MPESA_CONSUMER_SECRET=your_mpesa_consumer_secret_here
MPESA_SHORTCODE=your_business_shortcode_here
MPESA_PASSKEY=your_mpesa_passkey_here

# Email Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=your_email@domain.com
SENDGRID_TO_EMAIL=your_team_email@domain.com

# Application Configuration
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

See `.env.example` for detailed setup instructions.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts      # Contact form API with email notifications
│   │   └── payment/
│   │       ├── route.ts      # PayPal and M-Pesa payment processing
│   │       └── mpesa-callback/
│   │           └── route.ts  # M-Pesa payment callback handler
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── blog/
│   │   └── page.tsx          # WordPress-powered blog
│   ├── contact/
│   │   └── page.tsx          # Contact form page
│   ├── payment/
│   │   ├── success/
│   │   │   └── page.tsx      # Payment success page
│   │   └── cancel/
│   │       └── page.tsx      # Payment cancellation page
│   ├── properties/
│   │   └── page.tsx          # Airbnb properties showcase
│   ├── services/
│   │   └── page.tsx          # Service offerings page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with navigation
│   ├── page.tsx              # Home page
│   ├── robots.ts             # SEO robots configuration
│   └── sitemap.ts            # SEO sitemap generation
├── components/
│   ├── BlogGrid.tsx          # Blog post grid component
│   ├── BlogLayout.tsx        # Blog layout wrapper
│   ├── Footer.tsx            # Site footer component
│   ├── Navbar.tsx            # Navigation component
│   ├── Providers.tsx         # Theme provider wrapper
│   └── WordPressStatus.tsx   # WordPress connection status
├── lib/
│   └── wordpress.ts          # WordPress API utilities
└── services/
    └── wordpress.ts          # WordPress service layer
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
