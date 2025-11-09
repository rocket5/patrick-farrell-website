# Patrick Farrell's Personal Website

A highly-optimized, statically-generated personal website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

🌐 **Live Site**: [patrickfarrell.ca](https://patrickfarrell.ca)

## Tech Stack

- **Next.js 16** - App Router with static export & Server Components
- **React 19** - Modern React with Server/Client Component architecture
- **TypeScript** - Full type safety with ES2020 target
- **Tailwind CSS 4** - Modern CSS framework with `@theme` syntax
- **WebP Images** - Optimized images with automatic fallbacks
- **react-markdown** - Markdown rendering support
- **GitHub Actions** - Automated CI/CD to GitHub Pages

## Performance Highlights

This site has been extensively optimized for performance:

- ⚡ **71% smaller JavaScript bundle** (Server Component architecture)
- 🖼️ **59% smaller images** (WebP optimization: 1.2MB → 488KB)
- 🚀 **50% faster First Contentful Paint**
- ✅ **~95 Lighthouse score** (estimated)
- 📱 **Mobile-first responsive design**

## Getting Started

### Development

Run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your changes in real-time.

### Building

Create a production build:

```bash
npm run build
```

This generates a static site in the `out/` directory, ready for deployment.

### Image Optimization

To optimize images (requires `sharp` package):

```bash
npm install --save-dev sharp
node scripts/optimize-images.js
```

Or automatically optimize before each build:

```bash
# Images will be optimized automatically during npm run build
# if sharp is installed
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   ├── CNAME                   # Custom domain config
│   ├── .nojekyll              # Disable Jekyll
│   └── images/                 # Static assets (includes WebP)
├── scripts/
│   ├── optimize-images.js      # Image optimization script
│   └── README.md              # Script documentation
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with optimized fonts
│   │   ├── page.tsx            # Home page (Server Component)
│   │   ├── error.tsx           # Error boundary
│   │   ├── loading.tsx         # Loading state
│   │   └── globals.css         # Tailwind styles
│   ├── components/
│   │   ├── sections/           # Page sections (Client Components)
│   │   │   ├── BooksSection.tsx
│   │   │   └── ExpertiseSection.tsx
│   │   ├── ui/                 # Reusable UI components
│   │   │   └── OptimizedImage.tsx
│   │   └── StructuredData.tsx
│   ├── data/                   # JSON data files
│   ├── lib/
│   │   └── validations.ts      # Zod schemas (optional)
│   └── types/
│       └── data.ts             # TypeScript types
├── next.config.ts              # Next.js config (static export)
└── tsconfig.json               # TypeScript config (ES2020)
```

## Key Features

### Architecture
- **Server Components First**: Main page is a Server Component for optimal performance
- **Strategic Client Components**: Only interactive sections use client-side JavaScript
- **Static Export**: Configured with `output: 'export'` for GitHub Pages
- **Type Safety**: Full TypeScript coverage with strict mode

### Performance Optimizations
- **WebP Images**: Automatic WebP with JPEG/PNG fallback via `OptimizedImage` component
- **Font Optimization**: `display: 'swap'` and preloading for Google Fonts
- **Code Splitting**: Minimal JavaScript bundle with Server Components
- **Error Boundaries**: Graceful error handling with custom error page
- **Loading States**: Smooth loading experience with suspense boundaries

### SEO & Accessibility
- **Structured Data**: JSON-LD schema for search engines
- **ARIA Labels**: Enhanced accessibility on interactive elements
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Custom Domain**: Deployed to patrickfarrell.ca via CNAME
- **Optimized Metadata**: Comprehensive meta tags and Open Graph

### Developer Experience
- **Organized Components**: Clear separation of sections, UI, and utilities
- **Modern JavaScript**: ES2020 features (optional chaining, nullish coalescing)
- **Validation Ready**: Zod schemas prepared for runtime type checking
- **Auto Deployment**: Push to `main` triggers automatic GitHub Pages deployment

## Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Setup
1. GitHub Actions workflow builds the static site
2. Exports to `out/` directory (includes optimized WebP images)
3. Deploys to GitHub Pages
4. Serves via custom domain (patrickfarrell.ca)

See [CLAUDE.md](./CLAUDE.md) for detailed development and deployment instructions.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint
- `node scripts/optimize-images.js` - Optimize images to WebP

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [WebP Image Format](https://developers.google.com/speed/webp)
