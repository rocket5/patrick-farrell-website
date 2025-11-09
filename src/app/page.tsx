import ReactMarkdown from "react-markdown";
import booksData from "@/data/books.json";
import expertiseData from "@/data/expertise.json";
import testimonialsData from "@/data/testimonials.json";
import heroData from "@/data/hero.json";
import bioData from "@/data/bio.json";
import type { Book, Testimonial } from "@/types/data";
import { BooksSection } from "@/components/BooksSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { OptimizedImage } from "@/components/OptimizedImage";

export default function Home() {
  const books = booksData as Book[];
  const testimonials = testimonialsData as Testimonial[];

  return (
    <div className="min-h-screen bg-bg-light">
      <main className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[175px] pt-16 sm:pt-24 lg:pt-32 pb-4" role="main">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16 lg:mb-24" aria-label="Introduction">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-end">
            <div className="flex flex-col gap-6 lg:gap-8 w-full">
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
                {/* Headshot */}
                <div className="w-full sm:w-[217px] shrink-0">
                  <div className="aspect-217/281 relative">
                    <OptimizedImage
                      src="/images/headshot.jpg"
                      alt="Patrick Farrell - Professional Editor based in Toronto, Canada"
                      fill
                      sizes="(max-width: 640px) 100vw, 217px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Name and Navigation */}
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-4xl sm:text-5xl lg:text-[80px] font-bold leading-none text-text-black">
                      {heroData.name}
                    </h1>
                    <p className="font-sans text-lg sm:text-2xl lg:text-[32px] font-medium text-text-muted leading-normal">
                      {heroData.blurb}
                    </p>
                  </div>

                  {/* Navigation */}
                  <nav className="border-t-2 border-b-2 border-bg-dark">
                    <ul className="flex flex-wrap gap-x-6 gap-y-1 lg:gap-x-[72px] text-base font-sans">
                      {heroData.navigation.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} className="hover:text-text-muted transition-colors">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Bio */}
              <div className="text-base leading-6 space-y-4">
                {bioData.paragraphs.map((paragraph, index) => (
                  <ReactMarkdown
                    key={index}
                    components={{
                      a: (props) => (
                        <a {...props} className="underline hover:text-text-muted transition-colors" />
                      ),
                    }}
                  >
                    {paragraph}
                  </ReactMarkdown>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-12 sm:mb-16 lg:mb-24" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-xl font-bold font-sans border-b-2 border-bg-dark pb-2 mb-3">
            Professional Editing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-bg-dark p-6 lg:p-8 border border-bg-dark hover:border-[#D3D3D3] transition-all duration-300 group">
              <p className="text-base leading-6 text-text-muted group-hover:text-text-black transition-colors duration-300">Developmental and substantive editing</p>
            </div>
            <div className="bg-bg-dark p-6 lg:p-8 border border-bg-dark hover:border-[#D3D3D3] transition-all duration-300 group">
              <p className="text-base leading-6 text-text-muted group-hover:text-text-black transition-colors duration-300">Copy editing and proofreading</p>
            </div>
            <div className="bg-bg-dark p-6 lg:p-8 border border-bg-dark hover:border-[#D3D3D3] transition-all duration-300 group">
              <p className="text-base leading-6 text-text-muted group-hover:text-text-black transition-colors duration-300">Manuscription preparation and production editing</p>
            </div>
            <div className="bg-bg-dark p-6 lg:p-8 border border-bg-dark hover:border-[#D3D3D3] transition-all duration-300 group">
              <p className="text-base leading-6 text-text-muted group-hover:text-text-black transition-colors duration-300">Indexing</p>
            </div>
          </div>
        </section>

        {/* Books Section - Client Component */}
        <BooksSection books={books} />

        {/* Expertise Section - Client Component */}
        <ExpertiseSection sections={expertiseData} />

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-12 sm:mb-16 lg:mb-24" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="text-xl font-bold font-sans border-b-2 border-bg-dark pb-2 mb-8">
            Client Testimonials
          </h2>
          <div className="flex flex-wrap gap-[18px]">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full sm:w-[calc(50%-9px)] lg:w-[calc(33.333%-12px)] bg-bg-dark p-2 flex flex-col gap-6 transition-transform duration-300 hover:scale-105">
                <p className="text-base leading-6">{testimonial.quote}</p>
                <div className="text-base leading-6">
                  <p className="font-bold">{testimonial.author}</p>
                  <p>{testimonial.book}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12 sm:mb-16 lg:mb-24" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="text-xl font-bold font-sans border-b-2 border-bg-dark pb-2 mb-3">
            Contact Patrick Farrell
          </h2>
          <p className="text-base leading-6">
            Email{" "}
            <a
              href="mailto:pherzen@gmail.com"
              className="underline hover:text-text-muted transition-colors"
              aria-label="Email Patrick Farrell at pherzen@gmail.com"
            >
              pherzen@gmail.com
            </a>{" "}
            to talk about how I can help with your project.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-16 sm:pt-24 lg:pt-32">
          <div className="flex flex-col sm:flex-row justify-between text-base gap-4">
            <p>© {new Date().getFullYear()} Patrick Farrell</p>
            <p>
              Website by{" "}
              <a
                href="https://rocket5studios.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-muted transition-colors"
              >
                Rocket5
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
