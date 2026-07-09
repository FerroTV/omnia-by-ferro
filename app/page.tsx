"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectsTimeline from "@/components/ProjectsTimeline";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { homeContent } from "@/content/home";
import {
  defaultLocale,
  localeShortLabels,
  locales,
  type Locale,
} from "@/lib/i18n";

const LOCALE_STORAGE_KEY = "omnia-locale";
const OmniaScene = dynamic(
  () => import("@/components/three/OmniaScene"),
  {
    ssr: false,
    loading: () => null,
  },
);

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

  const isProgrammaticScroll = useRef(false);
  const scrollReleaseTimeout = useRef<number | null>(null);

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
      if (isProgrammaticScroll.current) {
        return;
      }

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

      if (scrollReleaseTimeout.current !== null) {
        window.clearTimeout(scrollReleaseTimeout.current);
      }
    };
  }, []);

  const navigateToSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    isProgrammaticScroll.current = true;

    if (scrollReleaseTimeout.current !== null) {
      window.clearTimeout(scrollReleaseTimeout.current);
    }

    scrollReleaseTimeout.current = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
      scrollReleaseTimeout.current = null;
    }, 900);
  };

  const changeLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);

    window.localStorage.setItem(
      LOCALE_STORAGE_KEY,
      nextLocale,
    );

    setIsMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/70 backdrop-blur-xl">
        <nav className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={() => navigateToSection("home")}
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
                    onClick={() =>
                      navigateToSection(item.id)
                    }
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
                    onClick={() =>
                      navigateToSection(item.id)
                    }
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
  className="relative isolate min-h-[calc(100vh-65px)] overflow-hidden bg-black sm:min-h-screen"
>
  <div
    aria-hidden="true"
    className="absolute inset-0 z-0"
  >
    <OmniaScene />
  </div>

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.9)_30%,rgba(0,0,0,0.48)_52%,rgba(0,0,0,0.08)_76%,rgba(0,0,0,0.22)_100%)]"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-2 bg-[radial-gradient(circle_at_65%_45%,transparent_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.55)_100%)]"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 bottom-0 z-3 h-64 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.18)_28%,rgba(0,0,0,0.52)_58%,rgba(0,0,0,0.86)_82%,#000_100%)] sm:h-80"
  />

  <div className="pointer-events-none relative z-10 mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl flex-col justify-center px-6 py-12 sm:min-h-screen sm:py-16">
    <Reveal>
      <div className="max-w-3xl -translate-y-10 transform-gpu sm:translate-y-0">
        <p className="mb-6 w-fit rounded-full border border-zinc-800 bg-black/60 px-4 py-2 text-xs uppercase tracking-[0.4em] text-zinc-400 shadow-2xl shadow-black/40 backdrop-blur-sm">
          {content.hero.badge}
        </p>

        <h1
          aria-label={content.hero.title}
          className="text-6xl font-semibold tracking-[-0.08em] text-white sm:text-8xl"
        >
          {Array.from(content.hero.title).map(
            (letter, index) => (
              <span
                key={`${letter}-${index}`}
                aria-hidden="true"
                className="omnia-hero-watercolor-letter"
                style={{
                  animationDelay: `${300 + index * 140}ms`,
                }}
              >
                {letter}
              </span>
            ),
          )}
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-300">
          {content.hero.description}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            onClick={() =>
              navigateToSection("projects")
            }
            className="pointer-events-auto rounded-full border border-zinc-700 bg-black/65 px-6 py-3 text-sm font-medium text-zinc-100 shadow-2xl shadow-black/40 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-100 hover:text-black"
          >
            {content.hero.primaryAction}
          </a>

          <a
            href="#lab"
            onClick={() =>
              navigateToSection("lab")
            }
            className="pointer-events-auto rounded-full border border-zinc-700 bg-black/65 px-6 py-3 text-sm font-medium text-zinc-100 shadow-2xl shadow-black/40 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-100 hover:text-black"
          >
            {content.hero.secondaryAction}
          </a>
        </div>
      </div>
    </Reveal>
  </div>
</section>

      <ProjectsTimeline
  label={content.projects.label}
  title={content.projects.title}
  items={content.projects.items}
  locale={locale}
/>

      <section
  id="lab"
  className="mx-auto max-w-6xl px-6 py-24"
>
  <p className="mb-4 w-fit rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
    {content.lab.label}
  </p>

  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
    {content.lab.title}
  </h2>

  <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
    {content.lab.description}
  </p>

  <Link
    href="/lab/robot-evolution"
    className="group mt-12 block"
  >
    <div className="relative overflow-hidden py-10 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-zinc-600">
            01 — Interactive experiment
          </p>

          <h3 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl">
            Robot evolution
          </h3>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            A visual metaphor for how an idea develops
            from a first sketch into structure,
            prototype and final form.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-zinc-300">
            <span>Open experiment</span>

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>

        <div className="relative h-[360px] overflow-hidden rounded-3xl border border-zinc-800 bg-black sm:h-[440px]">
          <div className="absolute inset-x-0 top-5 bottom-20 overflow-hidden sm:bottom-24">
            <Image
              src="/robots/evolution/robot-perfected.png"
              alt="Robot evolution preview"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-contain p-0 transition-transform duration-700 group-hover:scale-[1.012]"
            />
          </div>

          <div className="pointer-events-none absolute inset-x-6 bottom-4">
            <div className="relative h-px bg-zinc-800">
              <div className="absolute left-0 top-0 h-px w-full bg-white" />

              <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white" />

              <div className="absolute left-1/3 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-500 bg-black" />

              <div className="absolute left-2/3 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-500 bg-black" />

              <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-white bg-black" />
            </div>

            <div className="mt-4 grid grid-cols-4 text-center text-[9px] uppercase tracking-[0.18em] text-zinc-600">
              <span>Sketch</span>
              <span>Structure</span>
              <span>Prototype</span>
              <span>Perfected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
</section>

      <section
  id="about"
  className="mx-auto max-w-6xl px-6 py-24 sm:py-32"
>
  <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
    <div className="lg:sticky lg:top-28 lg:self-start">
      <p className="mb-5 w-fit rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
        {content.about.label}
      </p>

      <h2 className="max-w-md text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        {content.about.name}
      </h2>

      <div className="mt-10 h-px w-20 bg-zinc-700" />

      <p className="mt-10 max-w-sm text-sm uppercase leading-7 tracking-[0.22em] text-zinc-600">
        Software · AI · Interfaces · Creative systems
      </p>
    </div>

    <div>
      <div className="space-y-8 text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
        {content.about.paragraphs.map(
          (paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "text-zinc-200"
                  : undefined
              }
            >
              {paragraph}
            </p>
          ),
        )}
      </div>

      <div className="mt-14 border-l border-zinc-700 pl-6 sm:pl-8">
        <p className="max-w-2xl text-2xl font-medium leading-9 tracking-tight text-white sm:text-4xl sm:leading-[1.2]">
          {content.about.statement}
        </p>
      </div>

      <div className="mt-14 flex flex-wrap gap-3">
        {content.about.tags.map((tag, index) => (
          <span
            key={tag}
            className="flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950/50 px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-500"
          >
            <span className="text-[9px] text-zinc-700">
              {String(index + 1).padStart(2, "0")}
            </span>

            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-24"
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