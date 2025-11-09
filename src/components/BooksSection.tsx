"use client";

import { useState } from "react";
import type { Book } from "@/types/data";
import { OptimizedImage } from "@/components/OptimizedImage";

interface BooksSectionProps {
  books: Book[];
}

export function BooksSection({ books }: BooksSectionProps) {
  const [booksToShow, setBooksToShow] = useState(8);

  const displayedBooks = books.slice(0, booksToShow);
  const hasMoreBooks = booksToShow < books.length;

  return (
    <section id="books" className="mb-12 sm:mb-16 lg:mb-24" aria-labelledby="books-heading">
      <h2 id="books-heading" className="text-xl font-bold font-sans border-b-2 border-bg-dark pb-2 mb-3">
        Published Books
      </h2>
      <div className="flex flex-wrap justify-center gap-6 lg:gap-x-6 lg:gap-y-16">
        {displayedBooks.map((book, index) => {
          const BookWrapper = book.url ? 'a' : 'div';
          const wrapperProps = book.url
            ? { href: book.url, target: "_blank" as const, rel: "noopener noreferrer", className: "w-full sm:w-[250px] flex flex-col items-center gap-3 cursor-pointer group" }
            : { className: "w-full sm:w-[250px] flex flex-col items-center gap-3" };

          return (
            <BookWrapper key={index} {...wrapperProps}>
              <div className="w-full aspect-826/1253 relative overflow-hidden">
                <OptimizedImage
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
            aria-label={`Load ${Math.min(4, books.length - booksToShow)} more books. Currently showing ${booksToShow} of ${books.length} books`}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
