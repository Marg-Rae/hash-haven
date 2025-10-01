# WordPress Backend Setup Checklist

## Pre-Deployment Checklist

### WordPress Installation (Hostinger)
- [ ] Access Hostinger control panel
- [ ] Navigate to WordPress section
- [ ] Complete WordPress installation for hashhavenltd.com
- [ ] Verify WordPress admin access at `/wp-admin`
- [ ] Set strong admin password

### WordPress Configuration
- [ ] Go to Settings → Permalinks
- [ ] Set permalink structure to "Post name" or custom (not Plain)
- [ ] Save permalink settings
- [ ] Test REST API endpoint: `/wp-json/wp/v2/posts`

### Content Setup (Optional but Recommended)
- [ ] Create 3-5 sample blog posts
- [ ] Add featured images to posts
- [ ] Set up basic categories (Travel, Services, Tips, etc.)
- [ ] Configure site title and tagline
- [ ] Set timezone in WordPress settings

### API Security & Performance
- [ ] Install and configure security plugin (Wordfence, etc.)
- [ ] Consider CORS plugin if needed for API access
- [ ] Install caching plugin (WP Rocket, W3 Total Cache)
- [ ] Enable HTTPS in WordPress settings

## Vercel Deployment Checklist

### Repository Setup
- [ ] Push latest code to GitHub
- [ ] Ensure all files are committed
- [ ] Verify .env.local is in .gitignore (✅ Done)

### Vercel Configuration
- [ ] Connect GitHub repository to Vercel
- [ ] Select Next.js framework preset
- [ ] Add environment variables:
  - [ ] `WORDPRESS_API_URL=https://hashhavenltd.com/wp-json/wp/v2`
  - [ ] `NEXT_PUBLIC_WORDPRESS_URL=https://hashhavenltd.com`
  - [ ] `WORDPRESS_FALLBACK_MODE=true`
- [ ] Deploy project
- [ ] Test deployment on Vercel URL

### Domain Configuration
- [ ] Add custom domain `hashhavenltd.com` in Vercel
- [ ] Update DNS records in Hostinger (if using Vercel for main site)
- [ ] **OR** Set up subdomain `wp.hashhavenltd.com` for WordPress
- [ ] Verify SSL certificate is active

## Testing & Validation

### WordPress API Testing
- [ ] Test direct API access: `curl https://hashhavenltd.com/wp-json/wp/v2/posts`
- [ ] Verify API returns valid JSON
- [ ] Check API response time (should be < 3 seconds)
- [ ] Test with different endpoints (categories, media, etc.)

### Frontend Integration Testing
- [ ] Visit deployed site
- [ ] Navigate to `/blog` page
- [ ] Check WordPress connection status indicator
- [ ] Verify posts load (either from WordPress or fallback)
- [ ] Test individual blog post pages
- [ ] Check responsive design on mobile

### SEO & Performance
- [ ] Test page load speeds
- [ ] Verify meta tags are present
- [ ] Check sitemap generation
- [ ] Test social media sharing
- [ ] Validate HTML markup

## Post-Deployment Tasks

### Monitoring Setup
- [ ] Set up Vercel analytics
- [ ] Configure WordPress uptime monitoring
- [ ] Add Google Analytics (optional)
- [ ] Set up error tracking

### Security Measures
- [ ] Change default WordPress admin username
- [ ] Enable two-factor authentication
- [ ] Install security plugins
- [ ] Set up regular backups
- [ ] Review file permissions

### Content Management Workflow
- [ ] Create content creation guidelines
- [ ] Set up WordPress user roles
- [ ] Configure automatic updates
- [ ] Plan content calendar

## Troubleshooting Quick Reference

### WordPress Issues
- **API 404 Error**: Check permalink settings
- **CORS Issues**: Install WordPress CORS plugin
- **Slow Response**: Check hosting performance, add caching
- **SSL Errors**: Verify HTTPS settings in WordPress

### Vercel Issues
- **Build Failures**: Check environment variables
- **API Timeouts**: Increase timeout limits or optimize WordPress
- **Domain Issues**: Verify DNS configuration

### Integration Issues
- **No Posts Loading**: Check API URL in environment variables
- **Fallback Content Only**: WordPress API may be unreachable
- **Styling Issues**: Clear browser cache, check CSS compilation

## Quick Commands

### Test WordPress API
```bash
# Test posts endpoint
curl -s https://hashhavenltd.com/wp-json/wp/v2/posts | jq '.[0].title'

# Test API health
curl -s https://hashhavenltd.com/wp-json/wp/v2 | jq '.name'
```

### Local Development
```bash
npm run dev                    # Start development server
npm run build && npm run start # Test production build locally
```

### Deployment
```bash
git add . && git commit -m "Production ready"
git push origin main           # Auto-deploy to Vercel
```

---

**Current Status:**
- ✅ Next.js application complete with WordPress integration
- ✅ Environment variables configured
- ✅ Fallback content system implemented
- ⚠️ **NEXT**: Complete WordPress installation on Hostinger
- ⚠️ **THEN**: Deploy to Vercel and configure domain

**Estimated Timeline:**
- WordPress setup: 30-60 minutes
- Vercel deployment: 15-30 minutes
- Domain configuration: 30-60 minutes
- Testing & validation: 30 minutes

**Total Time to Production: 2-3 hours**