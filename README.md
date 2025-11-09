# Patrick Farrell's Personal Website

A modern, statically-generated personal website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

🌐 **Live Site**: [patrickfarrell.ca](https://patrickfarrell.ca)

## Tech Stack

- **Next.js 16** - App Router with static export
- **React 19** - Server Components by default
- **TypeScript** - Full type safety
- **Tailwind CSS 4** - Modern CSS framework with `@theme` syntax
- **react-markdown** - Markdown rendering support
- **GitHub Actions** - Automated CI/CD to GitHub Pages

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
│   └── images/                 # Static assets
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout
│       ├── page.tsx            # Home page
│       └── globals.css         # Tailwind styles
├── next.config.ts              # Next.js config (static export)
└── tsconfig.json               # TypeScript config
```

## Key Features

- **Static Export**: Configured with `output: 'export'` for GitHub Pages
- **Custom Domain**: Deployed to patrickfarrell.ca via CNAME
- **Auto Deployment**: Push to `main` triggers automatic GitHub Pages deployment
- **Modern Fonts**: Geist Sans and Geist Mono via `next/font`
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4

## Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Setup
1. GitHub Actions workflow builds the static site
2. Exports to `out/` directory
3. Deploys to GitHub Pages
4. Serves via custom domain (patrickfarrell.ca)

See [CLAUDE.md](./CLAUDE.md) for detailed development and deployment instructions.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
