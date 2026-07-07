"use client";

import { useEffect, useState } from "react";
import { homeContent } from "@/content/home";
import {
  defaultLocale,
  localeShortLabels,
  locales,
  type Locale,
} from "@/lib/i18n";

const LOCALE_STORAGE_KEY = "omnia-locale";

const SECTION_IDS = [
  "home",
  "projects",
  "lab",
  "about",
  "contact",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

export default function Home() {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState<SectionId>("home");

  const content = homeContent[locale];

  const navigationItems: {
    id: SectionId;
    label: string;
  }[] = [
    {
      id: "home",
      label: content.navigation.home,
    },
    {
      id: "projects",
      label: content.navigation.projects,
    },
    {
      id: "lab",
      label: content.navigation.lab,
    },
    {
      id: "about",
      label: content.navigation.about,
    },
    {
      id: "contact",
      label: content.navigation.contact,
    },
  ];

  useEffect(() => {
    const savedLocale =
      window.localStorage.getItem(LOCALE_STORAGE_KEY);

    const browserLocale =
      window.navigator.language.split("-")[0];

    const initialLocale =
      savedLocale && locales.includes(savedLocale as Locale)
        ? (savedLocale as Locale)
        : locales.includes(browserLocale as Locale)
          ? (browserLocale as Locale)
          : defaultLocale;

    const timeoutId = window.setTimeout(() => {
      setLocale(initialLocale);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const updateActiveSection = () => {
      const headerOffset = 120;
      let currentSection: SectionId = "home";

      for (const sectionId of SECTION_IDS) {
        const section = document.getElementById(sectionId);

        if (
          section &&
          section.getBoundingClientRect().top <= headerOffset
        ) {
          currentSection = sectionId;
        }
      }

      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (isAtPageBottom) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection,
      );

      window.removeEventListener(
        "resize",
        updateActiveSection,
      );
    };
  }, []);

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);

    window.localStorage.setItem(
      LOCALE_STORAGE_KEY,
      nextLocale,
    );

    setIsMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),linear-gradient(to_bottom,black,rgb(9,9,11)_45%,black)] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold tracking-[0.3em] text-white"
            >
              OMNIA
            </a>

            <div className="hidden items-center gap-6 md:flex">
              <div className="flex items-center gap-5 text-sm">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    aria-current={
                      activeSection === item.id
                        ? "location"
                        : undefined
                    }
                    className={`border-b pb-1 transition ${
                      activeSection === item.id
                        ? "border-zinc-100 text-white"
                        : "border-transparent text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div
                aria-label="Language selector"
                className="flex w-fit items-center rounded-full border border-zinc-800 bg-zinc-950/70 p-1 text-xs text-zinc-500"
              >
                {locales.map((availableLocale) => (
                  <button
                    key={availableLocale}
                    type="button"
                    onClick={() =>
                      changeLocale(availableLocale)
                    }
                    aria-pressed={
                      availableLocale === locale
                    }
                    className={`rounded-full px-3 py-1.5 transition ${
                      availableLocale === locale
                        ? "bg-zinc-100 text-black"
                        : "hover:text-white"
                    }`}
                  >
                    {localeShortLabels[availableLocale]}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setIsMenuOpen((current) => !current)
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                isMenuOpen
                  ? content.navigation.close
                  : content.navigation.menu
              }
              className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:text-white md:hidden"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                )}
              </svg>

              <span>
                {isMenuOpen
                  ? content.navigation.close
                  : content.navigation.menu}
              </span>
            </button>
          </div>

          {isMenuOpen && (
            <div
              id="mobile-navigation"
              className="mt-4 border-t border-zinc-900 pt-4 md:hidden"
            >
              <div className="flex flex-col gap-1 text-sm">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={
                      activeSection === item.id
                        ? "location"
                        : undefined
                    }
                    className={`rounded-xl px-3 py-3 transition ${
                      activeSection === item.id
                        ? "bg-zinc-900/80 text-white"
                        : "text-zinc-400 hover:bg-zinc-900/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div
                aria-label="Language selector"
                className="mt-4 flex w-fit items-center rounded-full border border-zinc-800 bg-zinc-950/70 p-1 text-xs text-zinc-500"
              >
                {locales.map((availableLocale) => (
                  <button
                    key={availableLocale}
                    type="button"
                    onClick={() =>
                      changeLocale(availableLocale)
                    }
                    aria-pressed={
                      availableLocale === locale
                    }
                    className={`rounded-full px-3 py-1.5 transition ${
                      availableLocale === locale
                        ? "bg-zinc-100 text-black"
                        : "hover:text-white"
                    }`}
                  >
                    {localeShortLabels[availableLocale]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto flex min-h-[calc(100vh-97px)] max-w-6xl flex-col justify-center px-6 py-12 sm:min-h-screen sm:py-16"
      >
        <p className="mb-6 w-fit rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-xs uppercase tracking-[0.4em] text-zinc-400 shadow-2xl shadow-white/5">
          {content.hero.badge}
        </p>

        <h1 className="text-6xl font-semibold tracking-[-0.08em] text-white sm:text-8xl">
          {content.hero.title}
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-400">
          {content.hero.description}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full border border-zinc-700 bg-zinc-950/60 px-6 py-3 text-sm font-medium text-zinc-100 shadow-2xl shadow-black/40 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-100 hover:text-black"
          >
            {content.hero.primaryAction}
          </a>

          <a
            href="#lab"
            className="rounded-full border border-zinc-700 bg-zinc-950/60 px-6 py-3 text-sm font-medium text-zinc-100 shadow-2xl shadow-black/40 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-100 hover:text-black"
          >
            {content.hero.secondaryAction}
          </a>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 w-fit rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
          {content.projects.label}
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          {content.projects.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {content.projects.items.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 shadow-2xl shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900/70"
            >
              <p className="text-sm text-zinc-500">
                {project.category}
              </p>

              <h3 className="mt-4 text-xl font-medium text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-500">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-800 px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="lab"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 w-fit rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-1 text-xs uppercase tracking-[0.35em]] text-zinc-500">
          {content.lab.label}
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          {content.lab.title}
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          {content.lab.description}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {content.lab.items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-5"
            >
              <h3 className="text-sm font-medium text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 w-fit rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
          {content.about.label}
        </p>

        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {content.about.name}
          </h2>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            {content.about.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ),
            )}

            <p className="text-zinc-300">
              {content.about.statement}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 text-xs text-zinc-500">
              {content.about.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 w-fit rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
          {content.contact.label}
        </p>

        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {content.contact.title}
          </h2>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>{content.contact.description}</p>

            <div className="flex flex-wrap gap-2 text-xs text-zinc-500">
              {content.contact.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-base">
              {content.contact.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  {...(link.external
                    ? {
                        target: "_blank",
                        rel: "noreferrer",
                      }
                    : {})}
                  className="w-fit rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-zinc-900/70 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-zinc-900/80 px-6 py-10 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p
          className="tracking-wide"
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} Omnia by Ferro.
        </p>

        <p className="tracking-wide text-zinc-500">
          {content.footer.credit}
        </p>
      </footer>
    </main>
  );
}