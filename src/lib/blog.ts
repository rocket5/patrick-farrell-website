import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { BlogPhoto, BlogPost, BlogPostSummary } from "@/types/data";

const client = createClient({
  projectId: "a9spmcts",
  dataset: "production",
  apiVersion: "2026-02-01",
  // Next.js caches the results, and the Sanity webhook clears that cache on
  // publish, so reads must not come back stale from Sanity's own CDN.
  useCdn: false,
  perspective: "published",
});

const imageBuilder = createImageUrlBuilder(client);

export const POSTS_CACHE_TAG = "posts";

async function fetchPosts<T>(query: string, params: Record<string, string> = {}): Promise<T> {
  return client.fetch<T>(query, params, {
    // The hourly refresh is a safety net in case a publish webhook is ever missed.
    next: { revalidate: 3600, tags: [POSTS_CACHE_TAG] },
  });
}

const PHOTO_FIELDS = `_key, asset, crop, hotspot,
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height`;

const POST_FILTER = `_type == "post" && defined(slug.current)`;

const SHARED_FIELDS = `title, "slug": slug.current, bookAuthor,
  "publishedAt": coalesce(publishedAt, _createdAt),
  "excerpt": pt::text(body[0])`;

export function getPosts() {
  return fetchPosts<BlogPostSummary[]>(`*[${POST_FILTER}]
    | order(coalesce(publishedAt, _createdAt) desc) {
      ${SHARED_FIELDS},
      "photo": photos[defined(asset)][0]{${PHOTO_FIELDS}}
    }`);
}

export function getPost(slug: string) {
  return fetchPosts<BlogPost | null>(
    `*[${POST_FILTER} && slug.current == $slug][0]{
      ${SHARED_FIELDS},
      "updatedAt": _updatedAt,
      "photos": coalesce(photos[defined(asset)]{${PHOTO_FIELDS}}, []),
      body
    }`,
    { slug },
  );
}

export function getPostSlugs() {
  return fetchPosts<{ slug: string; updatedAt: string }[]>(
    `*[${POST_FILTER}]{ "slug": slug.current, "updatedAt": _updatedAt }`,
  );
}

const DATE_FORMAT = new Intl.DateTimeFormat("en-CA", {
  dateStyle: "long",
  timeZone: "America/Toronto",
});

export function formatDate(date: string) {
  return DATE_FORMAT.format(new Date(date));
}

/** Shortens text at a word boundary. */
export function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.]+$/, "")}…`;
}

export function photoUrl(photo: BlogPhoto, width: number) {
  return imageBuilder.image(photo).width(width).fit("max").auto("format").quality(80).url();
}

/**
 * Works out how to show a photo at its full shape, without cropping it or
 * enlarging it, inside a maxWidth x maxHeight box.
 */
export function fitPhoto(photo: BlogPhoto, maxWidth: number, maxHeight: number) {
  const crop = photo.crop;
  const sourceWidth = photo.width * (crop ? 1 - crop.left - crop.right : 1);
  const sourceHeight = photo.height * (crop ? 1 - crop.top - crop.bottom : 1);
  const scale = Math.min(maxWidth / sourceWidth, maxHeight / sourceHeight, 1);
  return {
    sourceWidth: Math.round(sourceWidth),
    width: Math.round(sourceWidth * scale),
    height: Math.round(sourceHeight * scale),
  };
}
