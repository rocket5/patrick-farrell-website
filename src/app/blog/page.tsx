import type { Metadata } from "next";
import Link from "next/link";
import { BlogPhotoImage } from "@/components/blog/BlogPhotoImage";
import { formatDate, getPosts, truncate } from "@/lib/blog";

const description = "Book reviews and notes from Patrick Farrell, a freelance editor and book lover in Toronto.";

export const metadata: Metadata = {
  title: "Blog | Patrick Farrell",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog | Patrick Farrell", description, url: "/blog" },
  twitter: { title: "Blog | Patrick Farrell", description },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-xl font-bold border-b-2 border-bg-dark pb-2">Blog</h1>

      {posts.length === 0 && <p className="py-8 text-base">No posts yet.</p>}

      {posts.map((post) => (
        <article key={post.slug} className="flex gap-4 sm:gap-8 py-8 border-b-2 border-bg-dark">
          {post.photo && (
            <div className="w-24 sm:w-40 shrink-0">
              <Link href={`/blog/${post.slug}`} aria-hidden="true" tabIndex={-1}>
                <BlogPhotoImage photo={post.photo} alt="" maxWidth={160} maxHeight={240} />
              </Link>
            </div>
          )}
          <div className="min-w-0 max-w-[680px]">
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-text-muted">
                {post.title}
              </Link>
            </h2>
            <p className="mt-1 text-base text-text-muted">
              {post.bookAuthor && <>by {post.bookAuthor} · </>}
              {formatDate(post.publishedAt)}
            </p>
            {post.excerpt && <p className="mt-3 text-base leading-7">{truncate(post.excerpt, 240)}</p>}
          </div>
        </article>
      ))}
    </>
  );
}
