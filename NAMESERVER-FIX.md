# Nameserver Configuration Fix for hashhavenltd.com

## Current Issue
Your domain `hashhavenltd.com` is currently using parking nameservers:
- ns1.dns-parking.com
- ns2.dns-parking.com

This is why you're seeing the Hostinger parking page instead of your website.

## Required Fix: Update Nameservers

### Step 1: Find Your Correct Hostinger Nameservers
You need to find your actual Hostinger nameservers (not the parking ones). These are usually:
- ns1.hostinger.com
- ns2.hostinger.com

OR check in your Hostinger hPanel under "DNS Zone" for the correct nameservers.

### Step 2: Update Nameservers in Domain Registrar
1. Log into your domain registrar (where you bought hashhavenltd.com)
2. Find "DNS Management" or "Nameservers" section
3. Replace current nameservers with your Hostinger nameservers

### Step 3: Verify Current Nameservers
Current settings show:
```
Current nameserver 1: ns1.dns-parking.com
Current nameserver 2: ns2.dns-parking.com
```

These need to be changed to your actual Hostinger hosting nameservers.

### Step 4: Alternative - Use Hostinger DNS Zone
If you want to keep current nameservers, you can:
1. Go to hPanel → DNS Zone
2. Add A record pointing to your server IP: 82.198.227.29
3. Add CNAME record for www pointing to your domain

## After Fix
Once nameservers are updated (24-48 hours propagation):
- https://hashhavenltd.com will show your actual website
- WordPress installation can proceed
- Your Next.js integration will work perfectly

## Next Steps After Nameserver Fix
1. Install WordPress through hPanel
2. Configure WordPress settings
3. Test REST API endpoints
4. Deploy your Next.js frontend to Vercel