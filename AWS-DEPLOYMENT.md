# AWS Deployment Guide for Hash Haven

## Architecture Options

### Option 1: AWS Amplify + RDS (Recommended)
- **Frontend**: AWS Amplify (Next.js)
- **Backend**: WordPress on EC2 + RDS MySQL
- **CDN**: CloudFront (automatic with Amplify)
- **Domain**: Route 53

### Option 2: Full EC2 Deployment
- **Frontend**: Next.js on EC2
- **Backend**: WordPress on separate EC2
- **Database**: RDS MySQL
- **Load Balancer**: Application Load Balancer

### Option 3: Serverless Approach
- **Frontend**: AWS Amplify
- **Backend**: WordPress on Lightsail
- **API**: API Gateway (optional)

## Recommended: Option 1 - AWS Amplify + EC2

### Step 1: Set Up WordPress Backend on AWS

#### 1.1 Launch EC2 Instance for WordPress
```bash
# Instance specifications:
- AMI: Amazon Linux 2
- Instance Type: t3.micro (free tier) or t3.small
- Security Group: HTTP (80), HTTPS (443), SSH (22)
- Storage: 20GB EBS
```

#### 1.2 Set Up RDS MySQL Database
```bash
# RDS Configuration:
- Engine: MySQL 8.0
- Instance Class: db.t3.micro (free tier)
- Storage: 20GB
- Multi-AZ: No (for cost)
- Public Access: No
- VPC Security Group: MySQL/Aurora (3306)
```

#### 1.3 Install WordPress on EC2
```bash
# Connect to EC2 and run:
sudo yum update -y
sudo yum install -y httpd php php-mysqlnd
sudo systemctl start httpd
sudo systemctl enable httpd

# Download and configure WordPress
cd /var/www/html
sudo wget https://wordpress.org/latest.tar.gz
sudo tar -xzf latest.tar.gz
sudo mv wordpress/* .
sudo rm -rf wordpress latest.tar.gz

# Set permissions
sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html
```

### Step 2: Deploy Frontend to AWS Amplify

#### 2.1 Connect GitHub Repository
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Choose "GitHub" and connect your account
4. Select repository: `Marg-Rae/hash-haven`
5. Choose branch: `main`

#### 2.2 Configure Build Settings
```yaml
# amplify.yml (auto-generated, verify these settings)
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

#### 2.3 Add Environment Variables in Amplify
```
WORDPRESS_API_URL=https://your-ec2-domain.com/wp-json/wp/v2
NEXT_PUBLIC_WORDPRESS_URL=https://your-ec2-domain.com
WORDPRESS_FALLBACK_MODE=true
```

### Step 3: Configure Domain and SSL

#### 3.1 Set Up Route 53 (Optional)
1. Transfer your domain to Route 53 OR
2. Update nameservers to point to Route 53

#### 3.2 Configure SSL Certificates
- **Amplify**: Automatic SSL via Certificate Manager
- **EC2**: Use Let's Encrypt or Certificate Manager

### Step 4: WordPress Configuration

#### 4.1 Complete WordPress Setup
1. Access your EC2 public IP or domain
2. Complete WordPress installation
3. Configure database connection to RDS

#### 4.2 Configure WordPress for API
```php
// Add to wp-config.php
define('WP_DEBUG', false);

// Enable CORS for your Amplify domain
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: https://your-amplify-domain.com');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
}, 15);
```

## Alternative: AWS Lightsail (Simpler)

### Quick Deployment Option
1. **WordPress Backend**: AWS Lightsail WordPress instance ($3.50/month)
2. **Frontend**: AWS Amplify (connects to GitHub)
3. **Domain**: Route 53 or existing registrar

### Lightsail Steps:
1. Create Lightsail WordPress instance
2. Configure static IP
3. Set up domain
4. Update Amplify environment variables to point to Lightsail

## Cost Estimation (Monthly)

### Option 1: Amplify + EC2 + RDS
- **Amplify**: $0 (free tier) + $0.01 per GB served
- **EC2 t3.micro**: $8.50/month
- **RDS db.t3.micro**: $15/month
- **Total**: ~$25-30/month

### Option 2: Amplify + Lightsail
- **Amplify**: $0 (free tier) + $0.01 per GB served
- **Lightsail WordPress**: $3.50/month
- **Total**: ~$5-10/month

## Security Best Practices

### 1. VPC Configuration
- WordPress EC2 in private subnet
- RDS in private subnet
- ALB in public subnet

### 2. Security Groups
- Restrict MySQL access to WordPress servers only
- Use HTTPS everywhere
- Regular security updates

### 3. Backup Strategy
- RDS automated backups
- EC2 snapshots
- WordPress backup plugins

## Monitoring and Logging

### CloudWatch Setup
- EC2 instance monitoring
- RDS performance insights
- Amplify build and hosting metrics
- Custom alarms for uptime

## Deployment Commands

### Initial Setup Script
```bash
#!/bin/bash
# Run this on your local machine

# 1. Ensure your code is committed
git add .
git commit -m "Prepare for AWS deployment"
git push origin main

# 2. AWS CLI commands (after setting up AWS CLI)
aws amplify create-app --name hash-haven --repository https://github.com/Marg-Rae/hash-haven

# 3. Create branch
aws amplify create-branch --app-id YOUR_APP_ID --branch-name main
```

## Next Steps After Reading This Guide

1. **Choose Architecture**: Option 1 (Amplify + EC2) or Lightsail
2. **Set Up AWS Account**: Enable required services
3. **Deploy WordPress Backend**: EC2+RDS or Lightsail
4. **Deploy Frontend**: AWS Amplify
5. **Configure Integration**: Environment variables
6. **Set Up Domain**: Route 53 or DNS configuration
7. **Test Integration**: Verify WordPress + Amplify connection

Would you like me to walk you through any specific option in detail?