import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

/**
 * OptimizedImage component that automatically uses WebP format with fallback
 *
 * This component wraps Next.js Image with a picture element to serve WebP
 * images when available, falling back to the original format.
 *
 * Usage:
 *   <OptimizedImage src="/images/photo.jpg" alt="Description" fill />
 *
 * It will automatically:
 * - Try to load /images/photo.webp first (WebP version)
 * - Fall back to /images/photo.jpg if WebP is not supported
 */
export function OptimizedImage({ src, alt, ...props }: OptimizedImageProps) {
  // Convert the original image path to WebP path
  // e.g., "/images/book1.jpg" -> "/images/book1.webp"
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <picture>
      {/* WebP source - modern browsers will use this */}
      <source srcSet={webpSrc} type="image/webp" />

      {/* Fallback for browsers that don't support WebP */}
      <Image
        src={src}
        alt={alt}
        {...props}
      />
    </picture>
  );
}
