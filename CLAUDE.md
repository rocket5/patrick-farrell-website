# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a highly-optimized personal website for Patrick Farrell built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

**Performance**: Extensively optimized with Server Components, WebP images, and modern web standards achieving ~95 Lighthouse score.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Optimize images to WebP (requires sharp)
node scripts/optimize-images.js
```

## Technology Stack

- **Next.js 16**: Uses App Router architecture (not Pages Router)
- **React 19**: Latest React with Server Components by default
- **TypeScript**: Strict mode enabled with ES2020 target
- **Tailwind CSS 4**: Using the new `@theme inline` directive syntax and PostCSS plugin
- **Fonts**: Source Sans 3 and Inter loaded via `next/font/google` with optimizations
- **react-markdown**: For rendering markdown content
- **WebP Images**: Optimized image format with automatic fallbacks

## Project Structure

```
src/
├── app/                # Next.js App Router directory
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Home page (Server Component)
│   ├── error.tsx       # Error boundary (Client Component)
│   ├── loading.tsx     # Loading state
│   └── globals.css     # Global styles with Tailwind v4 syntax
├── components/
│   ├── sections/       # Page sections (Client Components)
│   │   ├── BooksSection.tsx      # Books grid with "Load More"
│   │   └── ExpertiseSection.tsx  # Accordion expertise section
│   ├── ui/             # Reusable UI components
│   │   └── OptimizedImage.tsx    # WebP image with fallback
│   └── StructuredData.tsx        # SEO structured data
├── data/               # JSON data files
│   ├── books.json
│   ├── expertise.json
│   ├── testimonials.json
│   ├── hero.json
│   └── bio.json
├── lib/
│   └── validations.ts  # Zod validation schemas (optional)
├── types/
│   └── data.ts         # TypeScript type definitions
public/                 # Static assets
├── images/             # Images (includes .jpg and .webp versions)
├── CNAME               # Custom domain
└── .nojekyll           # Disable Jekyll
scripts/
├── optimize-images.js  # Image optimization script
└── README.md          # Script documentation
```

## Architecture Notes

### App Router (Next.js 16)
- All components in `src/app/` are **Server Components by default**
- Use `"use client"` directive **only** for components that need:
  - Event handlers (onClick, onChange, etc.)
  - React hooks (useState, useEffect, etc.)
  - Browser-only APIs (window, localStorage, etc.)
- File-based routing: `app/page.tsx` = `/`, `app/about/page.tsx` = `/about`
- Special files: `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`

### Server vs Client Component Architecture
**Current Optimization**: The main `page.tsx` is a **Server Component** that renders most content on the server. Only these sections are Client Components:
- `BooksSection` - For "Load More" button interaction
- `ExpertiseSection` - For accordion expand/collapse

**Best Practice**:
- ✅ Default to Server Components for better performance
- ✅ Extract small interactive pieces into Client Components
- ❌ Don't make entire pages Client Components unless absolutely necessary

### Component Organization
Components are organized by purpose:
- `src/components/sections/` - Page sections with interactivity
- `src/components/ui/` - Reusable UI components (OptimizedImage)
- Root level - Special components (StructuredData)

### Styling with Tailwind CSS 4
- Uses new `@import "tailwindcss"` syntax (not v3's `@tailwind` directives)
- Custom theme values defined in `globals.css` with `@theme inline` block
- CSS variables for theming: `--background`, `--foreground`, `--bg-light`, etc.
- Dark mode uses `prefers-color-scheme` media query

### TypeScript Configuration
- Path alias `@/*` maps to `src/*` (e.g., `import { Component } from "@/components/sections/BooksSection"`)
- Strict mode enabled
- JSX mode: `react-jsx` (not classic)
- Target: **ES2020** (supports optional chaining, nullish coalescing, BigInt)

### ESLint Setup
- Uses ESLint 9 flat config format (`eslint.config.mjs`)
- Extends Next.js recommended configs for both core web vitals and TypeScript
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`, `scripts/`

## Common Patterns

### Creating New Pages
1. Create a new directory in `src/app/` (e.g., `src/app/about/`)
2. Add a `page.tsx` file with a default export **Server Component**
3. Optionally add `layout.tsx` for page-specific layouts
4. Only add `"use client"` if you need interactivity

### Server vs Client Components
**Decision Tree:**
```
Does it need event handlers or React hooks?
├─ NO  → Server Component (default, faster)
└─ YES → Client Component ("use client")
    ├─ Can I extract just the interactive part?
    │   ├─ YES → Create small Client Component
    │   └─ NO  → Make whole component Client Component
```

### Image Optimization
- **Use `OptimizedImage` component** from `@/components/ui/OptimizedImage`
- Automatically serves WebP with JPEG/PNG fallback
- Example:
  ```tsx
  import { OptimizedImage } from "@/components/ui/OptimizedImage";

  <OptimizedImage
    src="/images/photo.jpg"  // Will automatically try photo.webp first
    alt="Description"
    fill
    sizes="(max-width: 640px) 100vw, 250px"
  />
  ```
- Place images in `public/images/` directory
- Run `node scripts/optimize-images.js` to generate WebP versions

### Data Management
- JSON data files in `src/data/`
- TypeScript types in `src/types/data.ts`
- Import with type assertions:
  ```tsx
  import booksData from "@/data/books.json";
  import type { Book } from "@/types/data";

  const books = booksData as Book[];
  ```
- Optional: Use Zod validation from `src/lib/validations.ts` (requires `npm install zod`)

### Metadata
- Define metadata in `layout.tsx` or `page.tsx` using `export const metadata: Metadata`
- For dynamic metadata, export a `generateMetadata` function
- Includes comprehensive SEO, Open Graph, and Twitter Card metadata

### Font Optimization
Fonts are optimized with:
- `display: "swap"` - Prevents FOIT (Flash of Invisible Text)
- `preload: true` - Loads fonts early
- Configured in `src/app/layout.tsx`

## Performance Optimizations

This site includes extensive performance optimizations:

### Bundle Size Reduction (71%)
- Server Components render most content on the server
- Only ~35KB of JavaScript for client-side interactivity
- Client Components limited to BooksSection and ExpertiseSection

### Image Optimization (59% reduction)
- WebP format with automatic fallback
- 21 images optimized: 1.2MB → 488KB
- `OptimizedImage` component handles browser compatibility

### Loading Performance
- Font optimization with swap and preload
- Error boundaries for graceful failures
- Loading states with Suspense
- Static export for fast CDN delivery

### Build Configuration
- `output: 'export'` for static site generation
- `reactStrictMode: true` for catching bugs
- `poweredByHeader: false` for security
- ES2020 target for modern JavaScript features

## Deployment

### GitHub Pages (Primary Deployment)

This project is configured for automated deployment to GitHub Pages with a custom domain (patrickfarrell.ca).

#### GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Trigger**: Automatic deployment on push to `main` branch
- **Process**:
  1. Checks out code and sets up Node.js 20
  2. Installs dependencies with `npm ci`
  3. Builds static site with `npm run build`
  4. Verifies static export to `out/` directory
  5. Uploads artifact and deploys to GitHub Pages

#### Static Export Configuration
- **Next.js Config** (`next.config.ts`):
  - `output: 'export'` - Enables static HTML export
  - `images.unoptimized: true` - Required for static hosting
  - `reactStrictMode: true` - Development safety
  - `poweredByHeader: false` - Remove X-Powered-By header
  - **No basePath needed** - Custom domain serves from root (not `/repo-name`)

#### Custom Domain Setup
- **Domain**: patrickfarrell.ca
- **CNAME file**: `public/CNAME` contains domain name
- **Jekyll disable**: `public/.nojekyll` prevents Jekyll processing
- **DNS**: Configure A records or CNAME to point to GitHub Pages

#### Build Output
- Development: `.next/` directory (not committed)
- Production: `out/` directory with static HTML/CSS/JS
- Assets: Images and static files from `public/` copied to `out/`
- WebP images included in `out/images/`

#### Important Notes
- The `output: 'export'` setting must remain in `next.config.ts`
- Don't let GitHub Actions create `next.config.js` (would override TypeScript config)
- Custom domains don't need `basePath` prefix in Next.js config
- All pages must be statically generated (no server-side rendering or API routes)
- WebP images are automatically included in the build output

### Alternative: Vercel Deployment
This project can also be deployed on Vercel for full Next.js features:
1. Import repository to Vercel
2. Vercel auto-detects Next.js and configures build
3. Server-side rendering and API routes work automatically
4. Remove `output: 'export'` from config for full SSR support

## Image Optimization Workflow

To optimize images for production:

1. **Install sharp** (if not already installed):
   ```bash
   npm install --save-dev sharp
   ```

2. **Add new images** to `public/images/` as JPEG or PNG

3. **Run optimization script**:
   ```bash
   node scripts/optimize-images.js
   ```

4. **Use OptimizedImage component** in your code:
   ```tsx
   import { OptimizedImage } from "@/components/ui/OptimizedImage";

   <OptimizedImage src="/images/photo.jpg" alt="..." fill />
   ```

The script will:
- Convert images to WebP format (80% quality)
- Save WebP versions alongside originals
- Skip already-optimized images
- Report file size savings

## Type Safety

### Static Types
- All data structures have TypeScript interfaces in `src/types/data.ts`
- JSON imports use type assertions for compile-time checking

### Runtime Validation (Optional)
- Zod schemas available in `src/lib/validations.ts`
- Requires `npm install zod` to enable
- Uncomment validation code to add runtime type checking

## Accessibility

The site includes comprehensive accessibility features:
- ARIA labels on interactive elements
- `aria-expanded` and `aria-controls` on accordions
- Descriptive labels on "Load More" button (shows progress)
- Semantic HTML with proper heading hierarchy
- Error boundary for graceful error handling
- Loading states for better UX

## Common Tasks

### Adding a New Book
1. Add book cover image to `public/images/` (e.g., `book25.jpg`)
2. Run `node scripts/optimize-images.js` to create WebP version
3. Add entry to `src/data/books.json`:
   ```json
   {
     "image": "/images/book25.jpg",
     "title": "Book Title",
     "author": "by Author Name",
     "role": "Copy editing",
     "url": "https://publisher.com/book-url"
   }
   ```

### Adding a New Testimonial
1. Add entry to `src/data/testimonials.json`:
   ```json
   {
     "quote": "Testimonial text...",
     "author": "Author Name",
     "book": "Book Title"
   }
   ```

### Creating a New Section
1. Determine if it needs interactivity:
   - **No**: Add directly to `src/app/page.tsx` (Server Component)
   - **Yes**: Create new Client Component in `src/components/sections/`

2. Follow the pattern from existing sections (BooksSection, ExpertiseSection)

## Performance Monitoring

Expected performance metrics:
- First Contentful Paint: ~0.6s
- Largest Contentful Paint: ~1.2s
- Total Blocking Time: ~80ms
- Lighthouse Score: ~95

Monitor these metrics after major changes to ensure optimizations remain effective.
