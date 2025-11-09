export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://patrickfarrell.ca/#organization",
    name: "Patrick Farrell - Professional Editor",
    description: "Freelance editor specializing in developmental editing, copy editing, proofreading, manuscript preparation, production editing, and indexing services.",
    url: "https://patrickfarrell.ca",
    logo: "https://patrickfarrell.ca/open-graph-patrick-farrell.jpg",
    image: "https://patrickfarrell.ca/open-graph-patrick-farrell.jpg",
    email: "pherzen@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Canada",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    priceRange: "$$",
    knowsLanguage: "en",
    founder: {
      "@type": "Person",
      name: "Patrick Farrell",
      jobTitle: "Professional Editor",
      email: "pherzen@gmail.com",
      image: "https://patrickfarrell.ca/images/headshot.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA",
      },
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Developmental and Substantive Editing",
          description: "In-depth editing focusing on structure, content, and style of manuscripts.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Copy Editing and Proofreading",
          description: "Detailed review for grammar, punctuation, spelling, and consistency.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Manuscript Preparation and Production Editing",
          description: "Preparing manuscripts for publication with professional formatting and production standards.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Indexing",
          description: "Professional indexing services for books and publications.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
