import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { revalidateTag } from "next/cache";
import { POSTS_CACHE_TAG } from "@/lib/blog";

/** Called by a Sanity webhook whenever a post is published, changed or removed. */
export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  const signature = request.headers.get(SIGNATURE_HEADER_NAME);
  const body = await request.text();

  if (!secret || !signature || !(await isValidSignature(body, signature, secret))) {
    return Response.json({ message: "Invalid signature" }, { status: 401 });
  }

  // Expire straight away so the next visitor sees the new post, not the old page.
  revalidateTag(POSTS_CACHE_TAG, { expire: 0 });
  return Response.json({ revalidated: true });
}
