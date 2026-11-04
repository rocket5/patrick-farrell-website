import { PortableText, type PortableTextBlock, type PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    // Pressing Enter twice in the editor leaves an empty paragraph, which shouldn't add a gap.
    normal: ({ children }) => <p className="mb-6 empty:hidden">{children}</p>,
  },
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href} className="underline hover:text-text-muted">
        {children}
      </a>
    ),
  },
};

export function BlogBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
