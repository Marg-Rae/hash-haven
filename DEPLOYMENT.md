# WordPress + Vercel Integration Deployment Guide

## Overview
This project integrates a Next.js frontend (deployed on Vercel) with a WordPress backend (hosted on Hostinger) for the Hash Haven website at `hashhavenltd.com`.

## Architecture
- **Frontend**: Next.js 15 with TailwindCSS (deployed on Vercel)
- **Backend**: WordPress CMS (hosted on Hostinger)
- **Domain**: hashhavenltd.com (managed through Hostinger)
- **Integration**: WordPress REST API for content management

## Current Status
- ✅ Next.js application ready for deployment
- ✅ WordPress integration code implemented
- ✅ Environment variables configured
- ⚠️ WordPress backend needs completion on Hostinger
- ⚠️ Domain currently shows parking page

## WordPress Backend Setup (Hostinger)

### Step 1: Complete WordPress Installation
1. Log into your Hostinger control panel
2. Navigate to "WordPress" section
3. Complete the WordPress installation for `hashhavenltd.com`
4. Verify WordPress is accessible at `https://hashhavenltd.com/wp-admin`

### Step 2: Enable REST API
WordPress REST API is enabled by default, but verify:
1. Go to WordPress Admin → Settings → Permalinks
2. Choose "Post name" or "Custom Structure" (not "Plain")
3. Save changes
4. Test API: `https://hashhavenltd.com/wp-json/wp/v2/posts`

### Step 3: Create Content (Optional)
1. Add some blog posts through WordPress admin
2. Set featured images for better presentation
3. Configure categories and tags as needed

## Vercel Deployment

### Step 1: Connect Repository
1. Connect your GitHub repository to Vercel
2. Import the `hash-haven` project
3. Choose "Next.js" as framework preset

### Step 2: Configure Environment Variables
In Vercel dashboard, add these environment variables:
```
WORDPRESS_API_URL=https://hashhavenltd.com/wp-json/wp/v2
NEXT_PUBLIC_WORDPRESS_URL=https://hashhavenltd.com
WORDPRESS_FALLBACK_MODE=true
```

### Step 3: Deploy
1. Click "Deploy" in Vercel
2. Wait for build to complete
3. Test deployment at your Vercel URL

## Domain Configuration

### Option 1: Vercel Frontend + WordPress Backend (Recommended)
1. **Vercel Setup**:
   - Add custom domain `hashhavenltd.com` in Vercel
   - Configure DNS records as instructed by Vercel
   
2. **WordPress Setup**:
   - Move WordPress to subdomain: `wp.hashhavenltd.com`
   - Update environment variables:
     ```
     WORDPRESS_API_URL=https://wp.hashhavenltd.com/wp-json/wp/v2
     NEXT_PUBLIC_WORDPRESS_URL=https://wp.hashhavenltd.com
     ```

### Option 2: Subdirectory Setup
1. **Hostinger Configuration**:
   - Set main domain to point to Vercel
   - Configure `/wp/` subdirectory for WordPress
   - Update environment variables:
     ```
     WORDPRESS_API_URL=https://hashhavenltd.com/wp/wp-json/wp/v2
     NEXT_PUBLIC_WORDPRESS_URL=https://hashhavenltd.com/wp
     ```

## Testing the Integration

### 1. WordPress API Test
```bash
curl https://hashhavenltd.com/wp-json/wp/v2/posts
```
Should return JSON with posts data.

### 2. Frontend Test
1. Visit your deployed site
2. Navigate to `/blog`
3. Check for WordPress connection status indicator
4. Verify posts load from WordPress or fallback content

### 3. Blog Post Test
1. Create a test post in WordPress
2. Visit `/blog/[post-slug]` on frontend
3. Verify content displays correctly

## Troubleshooting

### WordPress Issues
- **404 on API**: Check permalinks in WordPress settings
- **CORS errors**: Install WordPress CORS plugin if needed
- **SSL issues**: Ensure WordPress URLs use HTTPS

### Vercel Issues
- **Build errors**: Check environment variables are set
- **API timeouts**: WordPress server may be slow
- **Domain conflicts**: Ensure DNS is properly configured

### Fallback Mode
The application includes fallback content that displays when WordPress is unavailable:
- Static blog posts with realistic content
- Graceful degradation for better user experience
- Status indicators showing connection state

## Performance Optimization

### Caching Strategy
1. **Vercel**: Automatic edge caching for static content
2. **WordPress**: Consider caching plugin (W3 Total Cache, WP Rocket)
3. **API Calls**: Implement client-side caching for blog posts

### SEO Considerations
1. **Meta Tags**: Implemented in Next.js metadata API
2. **Sitemaps**: Auto-generated based on WordPress content
3. **Analytics**: Add Google Analytics/Meta Pixel as needed

## Maintenance

### Regular Tasks
1. **WordPress Updates**: Keep WordPress core and plugins updated
2. **Security**: Use security plugins and strong passwords
3. **Backups**: Regular database and file backups
4. **Monitoring**: Monitor API uptime and performance

### Content Management
1. Use WordPress admin for blog content
2. Media uploads handled by WordPress
3. SEO meta data managed through WordPress plugins

## Support & Resources

### WordPress Resources
- [WordPress REST API Documentation](https://developer.wordpress.org/rest-api/)
- [Hostinger WordPress Guide](https://www.hostinger.com/tutorials/wordpress)

### Vercel Resources
- [Vercel Next.js Deployment](https://vercel.com/docs/frameworks/nextjs)
- [Custom Domain Setup](https://vercel.com/docs/concepts/projects/custom-domains)

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

## Quick Start Commands

### Development
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
```

### Deployment
```bash
git push origin main    # Deploy to Vercel (if auto-deploy enabled)
vercel --prod          # Manual deployment
```

---

**Next Steps:**
1. Complete WordPress installation on Hostinger
2. Test WordPress API endpoint
3. Deploy to Vercel with proper environment variables
4. Configure custom domain
5. Test full integration