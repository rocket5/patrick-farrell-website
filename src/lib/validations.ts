/**
 * Data validation schemas using Zod
 *
 * These schemas provide runtime type checking for JSON data files.
 * To use: npm install zod
 *
 * Uncomment the code below once Zod is installed.
 */

/*
import { z } from 'zod';

export const BookSchema = z.object({
  image: z.string().min(1, 'Image path is required'),
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  role: z.string().min(1, 'Role is required'),
  url: z.string().url('Must be a valid URL').or(z.literal('')),
});

export const BooksSchema = z.array(BookSchema);

export const TestimonialSchema = z.object({
  quote: z.string().min(1, 'Quote is required'),
  author: z.string().min(1, 'Author is required'),
  book: z.string().min(1, 'Book title is required'),
});

export const TestimonialsSchema = z.array(TestimonialSchema);

export const ExpertiseSectionSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  title: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
});

export const ExpertiseSchema = z.array(ExpertiseSectionSchema);

export const NavigationItemSchema = z.object({
  label: z.string().min(1, 'Label is required'),
  href: z.string().min(1, 'Href is required'),
});

export const HeroSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  blurb: z.string().min(1, 'Blurb is required'),
  navigation: z.array(NavigationItemSchema),
});

export const BioSchema = z.object({
  paragraphs: z.array(z.string().min(1, 'Paragraph cannot be empty')),
});

// Helper function to validate data with better error messages
export function validateData<T>(schema: z.ZodSchema<T>, data: unknown, dataName: string): T {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(`Validation error in ${dataName}:`, error.errors);
      throw new Error(`Invalid data in ${dataName}. Check console for details.`);
    }
    throw error;
  }
}
*/

// Export empty object when Zod is not installed
export {};
