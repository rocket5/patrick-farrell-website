import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogBody } from "@/components/blog/BlogBody";
import { BlogPhotoImage } from "@/components/blog/BlogPhotoImage";
import { formatDate, getPost, getPostSlugs, photoUrl, truncate } from "@/lib/blog";
import type { BlogPost } from "@/types/data";

// The text column's width. Photos can be this wide, or this tall, but no more,
// so a tall photo can't push the text far down the page.
const PHOTO_MAX_WIDTH = 680;
const PHOTO_MAX_HEIGHT = 640;

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPostSlugs();
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = `${post.title} | Patrick Farrell`;
  const description = truncate(post.excerpt ?? "", 160);
  const images = post.photos[0] ? [photoUrl(post.photos[0], 1200)] : undefined;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      ...(images && { images }),
    },
    twitter: { title, description, ...(images && { images }) },
  };
}

function photoAlt(post: BlogPost, index: number) {
  const subject = post.bookAuthor ? `${post.title} by ${post.bookAuthor}` : post.title;
  return post.photos.length > 1 ? `${subject}, photo ${index + 1} of ${post.photos.length}` : subject;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const [mainPhoto, ...otherPhotos] = post.photos;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url: `https://patrickfarrell.ca/blog/${post.slug}`,
    author: { "@type": "Person", name: "Patrick Farrell", url: "https://patrickfarrell.ca" },
    ...(mainPhoto && { image: photoUrl(mainPhoto, 1200) }),
  };

  return (
    <article className="max-w-[680px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />

      <h1 className="text-3xl sm:text-5xl font-bold leading-tight">{post.title}</h1>
      <p className="mt-2 text-base text-text-muted">
        {post.bookAuthor && <>by {post.bookAuthor} · </>}
        {formatDate(post.publishedAt)}
      </p>

      {mainPhoto && (
        <div className="mt-8">
          <BlogPhotoImage
            photo={mainPhoto}
            alt={photoAlt(post, 0)}
            maxWidth={PHOTO_MAX_WIDTH}
            maxHeight={PHOTO_MAX_HEIGHT}
            priority
          />
        </div>
      )}

      <div className="mt-8 text-lg leading-8">
        <BlogBody value={post.body} />
      </div>

      {otherPhotos.length > 0 && (
        <div className="mt-8 space-y-6">
          {otherPhotos.map((photo, index) => (
            <BlogPhotoImage
              key={photo._key}
              photo={photo}
              alt={photoAlt(post, index + 1)}
              maxWidth={PHOTO_MAX_WIDTH}
              maxHeight={PHOTO_MAX_HEIGHT}
            />
          ))}
        </div>
      )}

      <p className="mt-12 pt-4 border-t-2 border-bg-dark text-base text-text-muted">
        Patrick Farrell is a freelance editor based in Toronto.{" "}
        <Link href="/#services" className="text-link">
          See his editing services
        </Link>{" "}
        or{" "}
        <Link href="/#contact" className="text-link">
          get in touch
        </Link>
        .
      </p>
    </article>
  );
}
