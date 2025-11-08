import type { Metadata } from "next";
import { Source_Sans_3, Inter } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Patrick Farrell - Professional Editor",
  description: "In an era of artificial intelligence, I bring human attention and human intelligence to ensure every element of your writing is as good as it can be.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
