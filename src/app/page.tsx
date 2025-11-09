"use client";

import Image from "next/image";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import booksData from "@/data/books.json";
import expertiseData from "@/data/expertise.json";
import testimonialsData from "@/data/testimonials.json";
import heroData from "@/data/hero.json";
import bioData from "@/data/bio.json";

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("for-everyone");
  const [booksToShow, setBooksToShow] = useState(8);

  const books = booksData;
  const displayedBooks = books.slice(0, booksToShow);
  const hasMoreBooks = booksToShow < books.length;

  const accordionSections = expertiseData;
  const testimonials = testimonialsData;

  return (
    <div className="min-h-screen bg-bg-light">
      <main className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[175px] pt-16 sm:pt-24 lg:pt-32 pb-4">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-end">
            <div className="flex flex-col gap-6 lg:gap-8 w-full">
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
                {/* Headshot */}
                <div className="w-full sm:w-[217px] shrink-0">
                  <div className="aspect-217/281 relative">
                    <Image
                      src="/images/headshot.jpg"
                      alt="Patrick Farrell"
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
                    <h1 className="font-(family-name:--font-source-sans) text-4xl sm:text-5xl lg:text-[80px] font-bold leading-none text-text-black">
                      {heroData.name}
                    </h1>
                    <p className="font-(family-name:--font-inter) text-lg sm:text-2xl lg:text-[32px] font-medium text-text-muted leading-normal">
                      {heroData.blurb}
                    </p>
                  </div>

                  {/* Navigation */}
                  <nav className="border-t-2 border-b-2 border-bg-dark">
                    <ul className="flex flex-wrap gap-x-6 gap-y-1 lg:gap-x-[72px] text-base font-(family-name:--font-inter)">
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
        <section id="services" className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl font-bold font-(family-name:--font-inter) border-b-2 border-bg-dark pb-2 mb-3">
            Services
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

        {/* Books Section */}
        <section id="books" className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl font-bold font-(family-name:--font-inter) border-b-2 border-bg-dark pb-2 mb-3">
            Books
          </h2>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-x-6 lg:gap-y-16">
            {displayedBooks.map((book, index) => {
              const BookWrapper = book.url ? 'a' : 'div';
              const wrapperProps = book.url
                ? { href: book.url, target: "_blank", rel: "noopener noreferrer", className: "w-full sm:w-[250px] flex flex-col items-center gap-3 cursor-pointer group" }
                : { className: "w-full sm:w-[250px] flex flex-col items-center gap-3" };

              return (
                <BookWrapper key={index} {...wrapperProps}>
                  <div className="w-full aspect-826/1253 relative overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 250px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center px-2 space-y-2">
                    <p className="font-bold text-base leading-6">{book.title}</p>
                    <p className="text-base leading-6">{book.author}</p>
                  </div>
                  <div className="h-0 w-24 border-t border-text-muted" />
                  <div className="px-2">
                    <p className="text-base leading-6 text-center">{book.role}</p>
                  </div>
                </BookWrapper>
              );
            })}
          </div>
          {hasMoreBooks && (
            <div className="flex justify-center pt-8">
              <button
                onClick={() => setBooksToShow(prev => prev + 4)}
                className="bg-bg-dark border border-text-muted px-4 py-3 text-base hover:bg-text-muted hover:text-bg-light transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl font-bold font-(family-name:--font-inter) border-b-2 border-bg-dark pb-2 mb-8">
            Expertise
          </h2>
          <p className="text-base leading-6 mb-8">
            I'm a professional editor with over 20 years of experience helping writers bring clarity, precision, and depth to their work.
          </p>
          <div className="space-y-8">
            {accordionSections.map((section) => (
              <div key={section.id} className="bg-bg-dark p-2">
                <button
                  onClick={() => setOpenAccordion(openAccordion === section.id ? null : section.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-bold font-(family-name:--font-inter)">
                    {section.title}
                  </h3>
                  <div className="w-6 h-6 shrink-0">
                    <Image
                      src={openAccordion === section.id ? "/images/chevron-up.svg" : "/images/chevron-down.svg"}
                      alt={openAccordion === section.id ? "Collapse" : "Expand"}
                      width={24}
                      height={24}
                    />
                  </div>
                </button>
                {openAccordion === section.id && section.content && (
                  <div className="mt-4 text-base leading-6">
                    <p>{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl font-bold font-(family-name:--font-inter) border-b-2 border-bg-dark pb-2 mb-8">
            Testimonials
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
        <section id="contact" className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl font-bold font-(family-name:--font-inter) border-b-2 border-bg-dark pb-2 mb-3">
            Contact
          </h2>
          <p className="text-base leading-6">
            Email{" "}
            <a href="mailto:pherzen@gmail.com" className="underline hover:text-text-muted transition-colors">
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
