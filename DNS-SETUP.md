# DNS Configuration for hashhavenltd.com

## DNS Records to Add in Hostinger hPanel

### Record 1: Main Domain (A Record)
- **Type**: A
- **Name**: @ (or leave blank)
- **Points to**: 82.198.227.29
- **TTL**: 3600 (or default)

### Record 2: WWW Subdomain (CNAME Record)
- **Type**: CNAME
- **Name**: www
- **Points to**: hashhavenltd.com
- **TTL**: 3600 (or default)

### Record 3: Mail (MX Record) - Optional but recommended
- **Type**: MX
- **Name**: @ (or leave blank)
- **Points to**: mail.hashhavenltd.com
- **Priority**: 10
- **TTL**: 3600 (or default)

## Step-by-Step Instructions

1. **Click "Add Record" or "+" button**
2. **Add A Record first:**
   - Select "A" from Type dropdown
   - Enter "@" in Name field (this represents your root domain)
   - Enter "82.198.227.29" in Points to field
   - Set TTL to 3600 or leave default
   - Save/Apply

3. **Add CNAME Record:**
   - Click "Add Record" again
   - Select "CNAME" from Type dropdown
   - Enter "www" in Name field
   - Enter "hashhavenltd.com" in Points to field
   - Set TTL to 3600 or leave default
   - Save/Apply

## What This Does
- **A Record**: Makes hashhavenltd.com point to your server (82.198.227.29)
- **CNAME Record**: Makes www.hashhavenltd.com redirect to hashhavenltd.com
- **Result**: Domain shows your hosting space instead of parking page

## After Adding Records
1. **Wait 10-30 minutes** for initial propagation
2. **Test**: Visit https://hashhavenltd.com (should show hosting space)
3. **Install WordPress** through hPanel once domain is working
4. **Your Next.js integration will automatically work**

## Important Notes
- Remove any existing conflicting records if present
- Make sure there are no duplicate A records
- TTL of 3600 = 1 hour (standard setting)
- Changes may take up to 24 hours to fully propagate globally