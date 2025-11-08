# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website for Patrick Farrell built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

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
```

## Technology Stack

- **Next.js 16**: Uses App Router architecture (not Pages Router)
- **React 19**: Latest React with Server Components by default
- **TypeScript**: Strict mode enabled with ES2017 target
- **Tailwind CSS 4**: Using the new `@theme inline` directive syntax and PostCSS plugin
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`

## Project Structure

```
src/
├── app/              # Next.js App Router directory
│   ├── layout.tsx    # Root layout with fonts and metadata
│   ├── page.tsx      # Home page (Server Component)
│   ├── globals.css   # Global styles with Tailwind v4 syntax
│   └── favicon.ico
public/               # Static assets
```

## Architecture Notes

### App Router (Next.js 16)
- All components in `src/app/` are Server Components by default
- Use `"use client"` directive at the top of files that need client-side interactivity
- File-based routing: `app/page.tsx` = `/`, `app/about/page.tsx` = `/about`
- Special files: `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`

### Styling with Tailwind CSS 4
- Uses new `@import "tailwindcss"` syntax (not v3's `@tailwind` directives)
- Custom theme values defined in `globals.css` with `@theme inline` block
- CSS variables for theming: `--background`, `--foreground`
- Dark mode uses `prefers-color-scheme` media query

### TypeScript Configuration
- Path alias `@/*` maps to `src/*` (e.g., `import { Component } from "@/components/Button"`)
- Strict mode enabled
- JSX mode: `react-jsx` (not classic)

### ESLint Setup
- Uses ESLint 9 flat config format (`eslint.config.mjs`)
- Extends Next.js recommended configs for both core web vitals and TypeScript
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Common Patterns

### Creating New Pages
1. Create a new directory in `src/app/` (e.g., `src/app/about/`)
2. Add a `page.tsx` file with a default export component
3. Optionally add `layout.tsx` for page-specific layouts

### Server vs Client Components
- Default to Server Components for better performance
- Only use `"use client"` when you need:
  - Event handlers (onClick, onChange, etc.)
  - React hooks (useState, useEffect, etc.)
  - Browser-only APIs (window, localStorage, etc.)

### Image Optimization
- Use Next.js `<Image>` component from `next/image`
- Place images in `public/` directory
- Reference as `/image-name.ext` (leading slash)

### Metadata
- Define metadata in `layout.tsx` or `page.tsx` using `export const metadata: Metadata`
- For dynamic metadata, export a `generateMetadata` function

## Deployment

This project is designed to be deployed on Vercel. The build process:
1. `npm run build` creates optimized production build
2. Static assets are generated in `.next/` directory
3. Server-side rendering and API routes work out of the box on Vercel
