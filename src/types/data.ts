/**
 * TypeScript type definitions for JSON data files
 */

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
