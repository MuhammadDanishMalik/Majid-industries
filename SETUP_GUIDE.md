# Majid Industries Website - Setup Guide

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
3. [Image Assets Required](#image-assets-required)
4. [Running the Website](#running-the-website)
5. [Customization Guide](#customization-guide)
6. [Troubleshooting](#troubleshooting)

---

## 1. Prerequisites

Before starting, ensure you have:

- **Node.js** version 18 or higher installed
  - Check version: `node --version`
  - Download from: https://nodejs.org/

- **npm** (comes with Node.js)
  - Check version: `npm --version`

- **Text Editor** (recommended: VS Code)
  - Download from: https://code.visualstudio.com/

---

## 2. Installation Steps

### Step 1: Extract the Project
```bash
cd path/to/majid-industries
```

### Step 2: Install Dependencies
Open terminal/command prompt in the project folder and run:
```bash
npm install
```

This will install all required packages (may take 2-3 minutes).

### Step 3: Verify Installation
```bash
npm run dev
```

Open browser and go to: `http://localhost:3000`

You should see the website (without images initially).

---

## 3. Image Assets Required

### 🎨 Priority Images (Add These First)

#### A. Logo Files
Place in `/public/` folder:

1. **logo.png** (Main logo)
   - Size: 180px width × 60px height
   - Format: PNG with transparent background
   - Usage: Header navigation

2. **logo-white.png** (White version for footer)
   - Size: 180px width × 60px height
   - Format: PNG with transparent background
   - Usage: Footer

3. **trademark-seal.png** (Bronze seal "Since 1996")
   - Size: 48px × 48px (or larger, will be scaled)
   - Format: PNG with transparent background
   - Usage: Footer copyright section

#### B. Certification Badges
Place in `/public/certifications/` folder:

1. **halal.png** - Halal certification badge
2. **iso.png** - ISO certification badge
3. **green-clean.png** - Green Clean Institute badge

All should be:
- Size: 48px × 48px minimum (will be scaled)
- Format: PNG with transparent or white background
- High quality

#### C. Hero Section Products (Floating)
Place in `/public/products/` folder:

1. **hero-bucket-1.png** - White bucket with black lid
2. **hero-jar-1.png** - Clear jar with black cap
3. **hero-bottle-1.png** - Any bottle product

Requirements:
- Size: 800px × 800px minimum
- Format: PNG with transparent background
- High resolution
- Product photographed on white/transparent background

#### D. Facility/About Image
Place in `/public/` folder:

1. **facility-image.jpg**
   - Your manufacturing facility photo
   - Size: 1200px × 800px minimum
   - Format: JPG
   - Usage: About Us section

#### E. Category Banner Images
Place in `/public/categories/` folder:

1. **smart-series.jpg** - Smart series buckets
2. **square-series.jpg** - Square buckets
3. **ice-cream.jpg** - Ice cream containers
4. **jars.jpg** - PET jars
5. **bottles.jpg** - Various bottles
6. **jerry-cans.jpg** - Jerry cans

Requirements:
- Size: 800px × 600px minimum
- Format: JPG
- Lifestyle or studio photography

#### F. Offerings Section Images
Place in `/public/offerings/` folder:

1. **smart-series.jpg**
2. **ice-cream.jpg**
3. **jars.jpg**
4. **bottles.jpg**

Requirements:
- Size: 800px × 800px
- Format: JPG
- Artistic/lifestyle photography

#### G. Individual Product Images
Place in `/public/products/` folder:

Name format: `{product-name}.png`

Examples:
- `1kg-smart-bucket.png`
- `2kg-smart-bucket.png`
- `5kg-smart-bucket.png`
- `1kg-square-bucket.png`
- `2kg-square-bucket.png`
- `half-kg-jar.png`
- `1kg-jar.png`
- `1ltr-ice-cream-bucket.png`
- `1kg-square-ice-cream.png`
- `1kg-om-bucket.png`
- `2kg-om-bucket.png`
- `5kg-om-bucket.png`
- `2ltr-jerry-can.png`
- `4ltr-jerry-can.png`
- `10ltr-jerry-can.png`
- `20ltr-jerry-can.png`
- `honey-bottle-500g.png`
- `ketchup-bottle.png`
- `topping-bottle.png`
- `detergent-bottle.png`

Requirements:
- Size: 1000px × 1000px minimum
- Format: PNG with transparent background
- Clean product photography on white/transparent background
- Consistent lighting and angle

---

## 4. Running the Website

### Development Mode (for testing)
```bash
npm run dev
```
- Website runs at: `http://localhost:3000`
- Hot reload enabled (changes reflect immediately)
- Use for development and testing

### Production Build
```bash
npm run build
npm start
```
- Optimized for performance
- Use for deployment

---

## 5. Customization Guide

### A. Adding New Products

1. Open `/data/products.ts`
2. Add new product to the `products` array:

```typescript
{
  id: '21',
  name: 'Your Product Name',
  slug: 'your-product-name',
  category: 'Category Name',
  price: 100,
  samplePrice: 100,
  cartonPrice: 10000,
  cartonQty: 100,
  image: '/products/your-product.png',
  description: 'Product description here',
  specifications: {
    height: '120mm',
    topDiameter: '100mm',
    bottomDiameter: '80mm',
    weight: '50g',
  },
  colors: ['white', 'red', 'custom'],
  inStock: true,
}
```

### B. Updating Company Information

Edit `/components/Footer.tsx` to update:
- Address
- Phone numbers
- Email
- Working hours

### C. Changing Colors

Main colors used:
- Primary Blue: `#0066CC` → Search and replace in components
- Teal/Turquoise: `#4FBFAD` → For buttons and accents
- Black: `#000000` → For text and dark buttons

### D. Modifying Text Content

**Hero Section** → `/components/HeroSection.tsx`
- Main headline
- Subtitle
- Button text

**About Section** → `/components/AboutSection.tsx`
- Company description
- About text

**Footer** → `/components/Footer.tsx`
- Contact information
- Company details

---

## 6. Troubleshooting

### Issue: "Module not found" errors
**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Images not showing
**Solution:**
1. Check file names match exactly (case-sensitive)
2. Verify images are in correct folders
3. Restart development server: `Ctrl+C` then `npm run dev`

### Issue: Port 3000 already in use
**Solution:**
```bash
# Kill the process using port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Or use a different port:
npm run dev -- -p 3001
```

### Issue: TypeScript errors
**Solution:**
```bash
npm run build
```
This will show all TypeScript errors that need fixing.

### Issue: Slow performance
**Solution:**
1. Optimize images (compress before adding)
2. Use PNG for products, JPG for photos
3. Keep image sizes under 500KB each

---

## 📞 Need Help?

**Contact:**
- Email: Majidindustries@hotmail.com
- Phone: 0320 4006761

---

## ✅ Final Checklist

Before going live, ensure:

- [ ] All logo files added
- [ ] Certification badges added
- [ ] Hero product images added
- [ ] Facility image added
- [ ] Category images added
- [ ] At least 10-15 product images added
- [ ] Company information updated in Footer
- [ ] Contact details verified
- [ ] Website tested on mobile
- [ ] Website tested on desktop
- [ ] All links working
- [ ] Build successful: `npm run build`

---

## 🚀 Deployment

When ready to deploy:

1. Build the project: `npm run build`
2. Choose a hosting platform:
   - **Vercel** (Recommended for Next.js)
   - **Netlify**
   - **DigitalOcean**
   - Any Node.js hosting

3. Follow platform-specific deployment guides

---

Good luck with your website! 🎉
