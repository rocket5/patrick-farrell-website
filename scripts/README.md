# Image Optimization Script

This directory contains scripts for optimizing the website's performance.

## optimize-images.js

Optimizes images in the `public/images/` directory by converting them to WebP format.

### Prerequisites

Install the `sharp` package:

```bash
npm install --save-dev sharp
```

### Usage

**Manual optimization:**
```bash
node scripts/optimize-images.js
```

**Automatic optimization** (recommended):

Add to your `package.json`:
```json
{
  "scripts": {
    "optimize-images": "node scripts/optimize-images.js",
    "prebuild": "npm run optimize-images"
  }
}
```

This will automatically optimize images before every build.

### What it does

1. Scans `public/images/` for JPEG and PNG files
2. Converts them to WebP format (80% quality)
3. Saves as `.webp` alongside originals
4. Skips files that are already optimized
5. Reports file size savings

### Expected Results

- 40-60% reduction in image file sizes
- Faster page load times
- Better Core Web Vitals scores

### Using Optimized Images

After running the script, update your components to use WebP with fallback:

```tsx
<picture>
  <source srcSet="/images/book1.webp" type="image/webp" />
  <img src="/images/book1.jpg" alt="Book cover" loading="lazy" />
</picture>
```

### Note

The script is optional and won't break the build if `sharp` is not installed. It will simply skip optimization and display a helpful message.
