# Health Desk Clinic - Website

A modern, responsive Next.js website for Health Desk Clinic - selling natural supplements.

## 🎯 Project Overview

This is a pixel-perfect implementation of the Health Desk Clinic website design using:

- **Next.js 14** with TypeScript
- **React 18** for component architecture
- **CSS Modules** for scoped styling
- **Responsive Design** supporting mobile, tablet, and desktop
- **Clean Code** structure with reusable components

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Home page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with CTA
│   ├── NutritionSection.tsx # Nutrition solutions section
│   └── Footer.tsx          # Footer component
├── styles/
│   ├── globals.css         # Global styles
│   ├── Header.module.css   # Header styles
│   ├── Hero.module.css     # Hero section styles
│   ├── NutritionSection.module.css # Nutrition section styles
│   └── Footer.module.css   # Footer styles
├── public/                 # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Vowsvibe
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

✅ **Responsive Design**

- Mobile-first approach
- Optimized for all screen sizes
- Smooth transitions and hover effects

✅ **Component Architecture**

- Reusable, modular components
- TypeScript for type safety
- Clean, maintainable code

✅ **Performance**

- Next.js optimization
- CSS Modules for scoped styling
- Optimized images and assets

✅ **SEO Friendly**

- Semantic HTML structure
- Meta tags and metadata
- Open Graph support

## 🎨 Design Specifications

### Colors

- Primary Blue: `#0066CC`
- Text Dark: `#333333`
- Text Light: `#555555`
- Background: `#FFFFFF`
- Accent: `#F8F9FB`

### Typography

- Font Family: System fonts (Inter fallback)
- Heading Sizes: Responsive (1.8rem - 3.5rem)
- Line Height: 1.2 - 1.7

### Spacing

- Max Container Width: 1200px
- Padding: Responsive (1rem - 2rem)
- Gap Sizes: 1.5rem - 3rem

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 641px - 1023px
- **Mobile**: 640px and below

## 🔧 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library
- **CSS Modules** - Scoped styling
- **CSS Grid & Flexbox** - Layout

## 📝 Component Documentation

### Header Component

Navigation header with logo and nav links

- Props: None
- Features: Sticky positioning, hover effects, newsletter button

### Hero Component

Main hero section with call-to-action

- Props: None
- Features: Responsive layout, gradient background, CTA button

### NutritionSection Component

Information section about nutrition solutions

- Props: None
- Features: Centered text, responsive sizing

### Footer Component

Footer with copyright information

- Props: None
- Features: Dynamic year, responsive padding

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```bash
docker build -t health-desk-clinic .
docker run -p 3000:3000 health-desk-clinic
```

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created by Suyash Singh
