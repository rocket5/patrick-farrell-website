"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg-light flex items-center justify-center">
      <div className="max-w-md mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-text-black">Something went wrong</h2>
        <p className="text-base text-text-muted mb-6">
          We encountered an unexpected error while loading the page.
        </p>
        <button
          onClick={reset}
          className="bg-bg-dark border border-text-muted px-6 py-3 text-base hover:bg-text-muted hover:text-bg-light transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
