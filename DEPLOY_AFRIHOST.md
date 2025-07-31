# Deploying FundSpark to Afrihost Hosting

## Hosting Options with Afrihost

### Option 1: Check Node.js Support (Recommended First Step)

**Contact Afrihost Support** to verify Node.js support on your current hosting plan:
- **WhatsApp**: 071 883 5005
- **Phone**: 0800 011 000 (Monday-Friday, 08:00-17:00)
- **Support Portal**: Log a ticket through ClientZone

**Ask specifically**:
- "Does my shared hosting package support Node.js applications?"
- "Do you have cPanel Application Manager for Node.js?"
- "What Node.js versions are supported?"

### Option 2: Static Export (Works on Current Hosting)

If your Afrihost package doesn't support Node.js, you can deploy a static version:

#### Build Static Files
```bash
# Enable static export in next.config.js
# Uncomment this line: output: 'export',

npm install
npm run build
```

This creates a `out/` folder with static HTML/CSS/JS files.

#### Upload to Afrihost
1. Access your cPanel File Manager
2. Navigate to `public_html` folder
3. Upload all files from the `out/` folder
4. Your site will be live at your domain

#### Limitations of Static Export
- No server-side features (authentication, database)
- Only the static HTML marketing pages will work
- Dynamic features (dashboard, user accounts) won't function

### Option 3: Upgrade to VPS/Dedicated Hosting

For full functionality, consider upgrading to:
- **Afrihost Dedicated Hosting**: From R1,230.00 pm
- **Afrihost Cloud Hosting**: From R420.00 pm

These options support Node.js and all your app features.

### Option 4: Alternative Next.js Hosting

If Afrihost doesn't support Node.js on shared hosting:

1. **Vercel** (Free tier available)
   - Optimal for Next.js applications
   - Automatic deployments
   - Built-in CDN

2. **Netlify** (Free tier available)
   - Good Next.js support
   - Continuous deployment

3. **Heroku** (Free tier discontinued, paid plans available)
   - Full Node.js support

## Current Project Structure

Your project has two deployment strategies:

### Static HTML Files (Current)
These work on any hosting:
- `index.html` - Landing page
- `about.html` - About page
- `pricing.html` - Pricing page
- `login.html` - Demo login (non-functional)

### Next.js Application (Full Features)
Requires Node.js hosting:
- User authentication
- Database integration
- Real-time features
- Business dashboard
- AI consultant

## Deployment Steps by Option

### For Static Export (Option 2)
```bash
# 1. Prepare for static export
# Edit next.config.js and uncomment: output: 'export',

# 2. Build static files
npm run build

# 3. Upload the 'out' folder contents to public_html via cPanel
```

### For Node.js Hosting (Options 1, 3, 4)
```bash
# 1. Install dependencies
npm install

# 2. Build production version
npm run build

# 3. Start production server
npm start
```

## Testing Before Deployment

Always test locally first:
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

## Next Steps

1. **Contact Afrihost support** to check Node.js availability
2. **Choose deployment strategy** based on their response
3. **Deploy accordingly** using the appropriate option above

Your Supabase database will work with any hosting option that supports the full Next.js application.