import type { Metadata } from "next";
import { Source_Sans_3, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Patrick Farrell - Professional Editor | Toronto, Canada",
  description: "In an era of artificial intelligence, I bring human attention and human intelligence to ensure every element of your writing is as good as it can be. Freelance editor specializing in developmental editing, copy editing, proofreading, and indexing.",
  keywords: [
    "freelance editor",
    "professional editor",
    "editor Toronto",
    "editing services Canada",
    "developmental editing",
    "copy editing",
    "proofreading",
    "manuscript editing",
    "book editor",
    "substantive editing",
    "production editing",
    "indexing services",
    "Canadian editor",
    "Toronto editor",
  ],
  authors: [{ name: "Patrick Farrell" }],
  creator: "Patrick Farrell",
  publisher: "Patrick Farrell",
  metadataBase: new URL("https://patrickfarrell.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://patrickfarrell.ca",
    siteName: "Patrick Farrell - Professional Editor",
    title: "Patrick Farrell - Professional Editor | Toronto, Canada",
    description: "In an era of artificial intelligence, I bring human attention and human intelligence to ensure every element of your writing is as good as it can be. Freelance editor specializing in developmental editing, copy editing, proofreading, and indexing.",
    images: [
      {
        url: "/open-graph-patrick-farrell.jpg",
        width: 1200,
        height: 630,
        alt: "Patrick Farrell - Professional Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Farrell - Professional Editor",
    description: "Freelance editor in Toronto bringing human attention to your writing. Specializing in developmental editing, copy editing, and proofreading.",
    images: ["/open-graph-patrick-farrell.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "", // Add Google Search Console verification code here when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${sourceSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
