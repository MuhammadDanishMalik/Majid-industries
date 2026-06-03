# Majid Industries E-Commerce Website

A modern, professional e-commerce website built with Next.js 15 for Majid Industries (Private) Limited - Pakistan's leading plastic packaging manufacturer since 1996.

## 🎨 Design Features

- **Animated Hero Section** with floating product images
- **Hover Animations** - Products animate downward on hover (as per Stanplas inspiration)
- **Dual Purchase Buttons** - Sample [1pc] and Carton [XXpc] options for each product
- **Product Cards** with wishlist, quick view, and compare icons
- **Horizontal Scrolling Categories** section
- **Why Choose Us** section with animated icons
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** using Framer Motion
- **Modern UI** inspired by Stanplas.pk

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono

## 📦 Product Categories

- Smart Series Buckets
- Square Series Buckets
- Premium Ice Cream Buckets
- PET Jars
- PET Bottles
- Jerry Cans (2L - 20L)
- O/M Series (Open Mouth)
- Household Products
- Autoparts

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd majid-industries
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
majid-industries/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Header.tsx           # Navigation & announcement bar
│   ├── Footer.tsx           # Footer with company info
│   ├── HeroSection.tsx      # Hero with animated products
│   ├── AboutSection.tsx     # Company overview
│   ├── OfferingsSection.tsx # Scrollable categories
│   ├── FeaturedProductsSection.tsx
│   ├── WhyChooseUsSection.tsx
│   └── ProductCard.tsx      # Product card with animations
├── data/                    # Data files
│   └── products.ts          # Product & category data
├── types/                   # TypeScript types
│   └── product.ts           # Product interfaces
├── lib/                     # Utility functions
│   └── utils.ts             # className merger
└── public/                  # Static assets
    ├── logo.png
    ├── products/           # Product images
    ├── certifications/     # ISO, Halal, Green Clean badges
    └── trademark-seal.png
```

## 🎯 Key Features

### 1. Product Hover Animation
Products animate 8px downward on hover, creating a lifting effect as seen on Stanplas.pk

### 2. Dual Purchase Options
Each product offers:
- **Sample** button (black) - Purchase single piece
- **Carton** button (outlined) - Purchase bulk quantity

### 3. Shopping Cart System
- Wishlist with counter badge
- Shopping cart with counter badge
- Quick view functionality
- Compare products feature

### 4. Certifications Display
- Halal Certification
- ISO 14001:2015 & 45001:2018
- Green Clean Institute

### 5. Responsive Navigation
- Sticky header
- Product category dropdown
- Mobile-friendly menu
- Search functionality

## 📸 Image Assets Needed

Place the following images in the `/public` directory:

### Logo & Branding
- `/logo.png` - Company logo (180x60px)
- `/logo-white.png` - White version for footer
- `/trademark-seal.png` - Bronze seal "Since 1996"

### Certifications (in `/public/certifications/`)
- `halal.png`
- `iso.png`
- `green-clean.png`

### Hero Products (in `/public/products/`)
- `hero-bucket-1.png`
- `hero-jar-1.png`
- `hero-bottle-1.png`

### Product Images
Use actual product photos from the PDF catalog, named as:
- `1kg-smart-bucket.png`
- `2kg-square-bucket.png`
- `half-kg-jar.png`
- etc.

### Category Images (in `/public/categories/`)
- `smart-series.jpg`
- `square-series.jpg`
- `ice-cream.jpg`
- `jars.jpg`
- `bottles.jpg`
- `jerry-cans.jpg`

### Facility Image
- `/facility-image.jpg` - Manufacturing facility photo

### Offerings (in `/public/offerings/`)
- `smart-series.jpg`
- `ice-cream.jpg`
- `jars.jpg`
- `bottles.jpg`

## 🎨 Color Scheme

- **Primary Blue:** `#0066CC`
- **Teal/Turquoise:** `#4FBFAD`
- **Black:** `#000000`
- **Gray Backgrounds:** `#F5F5F5` / `#E5E5E5`
- **White:** `#FFFFFF`

## 📞 Company Contact Information

**Majid Industries (Private) Limited**

**Head Office:**
Plot 9, Block 4 Karim Park
Ravi Road, Lahore

**Manufacturing Facility:**
Bara Dari Road
Javed Forman Street
Shahdara Industrial Zone, Lahore

**Phone:**
- 0320 4006761
- 0300 2007742

**Email:** Majidindustries@hotmail.com

**Working Hours:**
9 AM – 5 PM, Monday to Saturday

## 🔧 Customization

### Adding New Products

Edit `/data/products.ts` and add new product objects:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  slug: 'product-name',
  category: 'Category Name',
  price: 100,
  samplePrice: 100,
  cartonPrice: 10000,
  cartonQty: 100,
  image: '/products/product-image.png',
  description: 'Product description',
  inStock: true,
}
```

### Modifying Colors

Update colors in component files or add custom colors to `tailwind.config.ts`

### Animation Tweaks

Modify animation parameters in component files using Framer Motion's `motion` components

## 📝 License

© 2026 Majid Industries (Private) Limited. All rights reserved.

## 🤝 Contributing

This is a proprietary project for Majid Industries. For any modifications or questions, please contact the development team.

## 📧 Support

For technical support or questions:
- Email: Majidindustries@hotmail.com
- Phone: 0320 4006761
