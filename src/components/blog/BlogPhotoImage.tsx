import { fitPhoto, photoUrl } from "@/lib/blog";
import type { BlogPhoto } from "@/types/data";

const SRCSET_WIDTHS = [160, 320, 480, 640, 800, 1024, 1360, 1600];

interface BlogPhotoImageProps {
  photo: BlogPhoto;
  alt: string;
  maxWidth: number;
  maxHeight: number;
  priority?: boolean;
}

/**
 * Shows a photo at its own shape, never cropped. A plain <img> lets Sanity's CDN
 * do the resizing and keeps these pages free of client-side JavaScript.
 */
export function BlogPhotoImage({ photo, alt, maxWidth, maxHeight, priority }: BlogPhotoImageProps) {
  const { sourceWidth, width, height } = fitPhoto(photo, maxWidth, maxHeight);
  const candidates = SRCSET_WIDTHS.filter((w) => w < sourceWidth && w <= width * 2);
  const srcSetWidths = [...candidates, Math.min(sourceWidth, width * 2)];

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photoUrl(photo, width)}
      srcSet={srcSetWidths.map((w) => `${photoUrl(photo, w)} ${w}w`).join(", ")}
      sizes={`(max-width: ${width}px) 100vw, ${width}px`}
      alt={alt}
      width={width}
      height={height}
      className="block h-auto max-w-full"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
