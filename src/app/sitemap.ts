import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/blog";

const SITE_URL = "https://patrickfarrell.ca";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostSlugs();
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map(({ slug, updatedAt }) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: updatedAt,
      priority: 0.6,
    })),
  ];
}
