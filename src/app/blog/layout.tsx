import Link from "next/link";
import heroData from "@/data/hero.json";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-light">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[175px] pt-8 sm:pt-12 pb-4">
        <header className="mb-10 sm:mb-14">
          <Link
            href="/"
            className="block mb-4 text-4xl sm:text-5xl font-bold leading-none text-text-black [font-family:var(--font-source-sans)]"
          >
            {heroData.name}
          </Link>
          <nav className="border-t-2 border-b-2 border-bg-dark">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 lg:gap-x-[72px] text-base font-sans">
              {heroData.navigation.map((item) => (
                <li key={item.href}>
                  {/* Homepage sections are "#services" on the homepage itself, so add the "/" here. */}
                  <Link
                    href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                    className="hover:text-text-muted"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main role="main">{children}</main>

        <footer className="pt-16 sm:pt-24">
          <div className="flex flex-col sm:flex-row justify-between text-base gap-4">
            <p>© {new Date().getFullYear()} Patrick Farrell</p>
            <p>
              Website by{" "}
              <a
                href="https://rocket5studios.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-text-muted"
              >
                Rocket5
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
