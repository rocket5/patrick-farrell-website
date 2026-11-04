/**
 * TypeScript type definitions for JSON data files
 */

import type { PortableTextBlock } from "@portabletext/react";

export interface Book {
  image: string;
  title: string;
  author: string;
  role: string;
  url: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  book: string;
}

export interface ExpertiseSection {
  id: string;
  title?: string;
  content: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroData {
  name: string;
  blurb: string;
  navigation: NavigationItem[];
}

export interface BioData {
  paragraphs: string[];
}

export interface BlogPhoto {
  _key: string;
  asset: { _ref: string; _type: "reference" };
  crop?: { top: number; bottom: number; left: number; right: number } | null;
  hotspot?: { x: number; y: number; height: number; width: number } | null;
  width: number;
  height: number;
}

export interface BlogPostSummary {
  title: string;
  slug: string;
  bookAuthor: string | null;
  publishedAt: string;
  photo: BlogPhoto | null;
  excerpt: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  bookAuthor: string | null;
  publishedAt: string;
  updatedAt: string;
  photos: BlogPhoto[];
  body: PortableTextBlock[];
  excerpt: string;
}
