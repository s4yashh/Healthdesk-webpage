# Images Directory

This folder stores all image assets for the Health Desk Clinic website.

## Structure

```
public/images/
├── hero/           # Hero section images
│   ├── doctor.jpg
│   └── banner.jpg
├── products/       # Product images
│   ├── product-1.jpg
│   ├── product-2.jpg
│   └── ...
└── icons/          # Icon images
    ├── logo.svg
    ├── features.svg
    └── ...
```

## Usage in Components

### Using Next.js Image Component (Recommended)

```typescript
import Image from "next/image";

export default function MyComponent() {
  return (
    <Image
      src="/images/hero/doctor.jpg"
      alt="Doctor"
      width={300}
      height={400}
      priority
    />
  );
}
```

### Using Standard HTML img Tag

```typescript
<img src="/images/hero/doctor.jpg" alt="Doctor" />
```

## Image Guidelines

### Hero Images

- **Size**: 1200x800px or larger
- **Format**: JPG (for photos), PNG (for graphics)
- **Quality**: High resolution for professional look
- **Examples**: Doctor photos, banner images

### Product Images

- **Size**: 500x500px or square aspect ratio
- **Format**: JPG or PNG with transparency
- **Quality**: Clear, well-lit product photos
- **Examples**: Supplement products, bottles

### Icons

- **Size**: 64x64px to 256x256px
- **Format**: SVG (vector, scalable) or PNG
- **Quality**: Crisp, clean icons
- **Examples**: Feature icons, UI icons

## Adding New Images

1. Place image files in appropriate subfolder
2. Use Next.js Image component for optimization
3. Always include descriptive `alt` text
4. Optimize images before uploading:
   - Use tools like TinyPNG, ImageOptim
   - Compress without losing quality
   - Use modern formats (WebP, AVIF)

## Image Optimization

Next.js automatically optimizes images when using the Image component:

- Automatic format conversion (WebP, AVIF)
- Responsive image serving
- Lazy loading
- Proper caching

## Image Naming Convention

- Use lowercase filenames
- Use hyphens for spaces: `doctor-photo.jpg`
- Be descriptive: `hero-doctor-banner.jpg`
- Avoid numbers only: `123.jpg` ❌ → `doctor-profile.jpg` ✅

## File Size Targets

- Hero images: < 200KB
- Product images: < 150KB
- Icons: < 50KB
- Total images: < 2MB for page load

## Supported Formats

- **JPG/JPEG** - Photos, complex images
- **PNG** - Graphics, images with transparency
- **WebP** - Modern format, better compression
- **SVG** - Vector graphics, icons (scalable)
- **GIF** - Animations (minimize use)

---

Ready to add your images! 📸
