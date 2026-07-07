"use client";
import { useState } from "react";
import { homeContent } from "@/content/home";
import {
  defaultLocale,
  localeShortLabels,
  locales,
  type Locale,
} from "@/lib/i18n";

export default function Home() {
const [locale, setLocale] = useState<Locale>(defaultLocale);
const content = homeContent[locale];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_32%),linear-gradient(to_bottom,black,rgb(9,9,11)_45%,black)] text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/70 backdrop-blur-xl">
  <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
    <a
      href="#"
      className="text-sm font-semibold tracking-[0.3em] text-white"
    >
      OMNIA
    </a>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
            <a href="#" className="transition hover:text-white">
              {content.navigation.home}
            </a>
            <a href="#projects" className="transition hover:text-white">
              {content.navigation.projects}
            </a>
            <a href="#lab" className="transition hover:text-white">
              {content.navigation.lab}
            </a>
            <a href="#about" className="transition hover:text-white">
              {content.navigation.about}
            </a>
            <a href="#contact" className="transition hover:text-white">
              {content.navigation.contact}
            </a>
          </div>
          <div
  aria-label="Language selector"
  className="flex w-fit items-center rounded-full border border-zinc-800 bg-zinc-950/70 p-1 text-xs text-zinc-500"
>
  {locales.map((availableLocale) => (
  <button
    key={availableLocale}
    type="button"
    onClick={() => setLocale(availableLocale)}
    aria-pressed={availableLocale === locale}
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
        </nav>
      </header>

            <section className="mx-auto flex min-h-[calc(100vh-97px)] max-w-6xl flex-col justify-center px-6 py-12 sm:min-h-screen sm:py-16">
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
              <p className="text-sm text-zinc-500">{project.category}</p>

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
        <p className="mb-4 w-fit rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
          Lab
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Experiments, prototypes and unfinished ideas.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          The Lab is the experimental part of Omnia — a place for AI concepts,
          interface ideas, visual tests and future prototypes before they become
          finished projects.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
  <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-5">
    <h3 className="text-sm font-medium text-white">AI Concepts</h3>
    <p className="mt-3 text-sm leading-6 text-zinc-500">
      Ideas for intelligent systems, digital memory, learning flows and
      future assistant behavior.
    </p>
  </div>

  <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-5">
    <h3 className="text-sm font-medium text-white">Interface Experiments</h3>
    <p className="mt-3 text-sm leading-6 text-zinc-500">
      Small tests around navigation, interaction, visual hierarchy and
      minimal user interfaces.
    </p>
  </div>

  <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-5">
    <h3 className="text-sm font-medium text-white">Visual Prototypes</h3>
    <p className="mt-3 text-sm leading-6 text-zinc-500">
      Experimental layouts, motion ideas, art direction tests and visual
      identity explorations.
    </p>
  </div>

  <div className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-5">
    <h3 className="text-sm font-medium text-white">Future Systems</h3>
    <p className="mt-3 text-sm leading-6 text-zinc-500">
      Early thoughts about tools, personal platforms and digital systems
      that may become full projects later.
    </p>
  </div>
</div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 w-fit rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
          About
        </p>

        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Zhelyazko “Ferro” Zhelyazkov.
          </h2>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              I am building Omnia as a personal digital space where software
              development, AI concepts, visual experiments and learning paths can
              live together.
            </p>

            <p>
              This website is not meant to be only a portfolio. It is also a
              growing archive of ideas, prototypes, unfinished thoughts and
              systems that may become something bigger over time.
            </p>

            <p>
              My focus is on clean digital products, thoughtful interfaces,
              practical learning and the connection between technology and
              creativity.
            </p>

            <p className="text-zinc-300">
              Omnia is the space. Ferro is the signature.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs text-zinc-500">
              <span className="rounded-full border border-zinc-800 px-3 py-1">
                Software
              </span>
              <span className="rounded-full border border-zinc-800 px-3 py-1">
                AI Concepts
              </span>
              <span className="rounded-full border border-zinc-800 px-3 py-1">
                Interfaces
              </span>
              <span className="rounded-full border border-zinc-800 px-3 py-1">
                Creative Systems
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 w-fit rounded-full border border-zinc-900 bg-zinc-950/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
          Contact
        </p>

        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Let’s connect.
          </h2>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
           <p>
            Omnia is an evolving digital space. If you want to connect, follow
            the development of my work or reach out about ideas, projects or
            collaboration, these are the best places to find me.
          </p>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-500">
              <span className="rounded-full border border-zinc-800 px-3 py-1">
                Open to ideas
              </span>
              <span className="rounded-full border border-zinc-800 px-3 py-1">
                Portfolio in progress
              </span>
              <span className="rounded-full border border-zinc-800 px-3 py-1">
                Based in Germany
              </span>
            </div>
            <div className="flex flex-col gap-4 text-base">
              <a
                  href="mailto:zhelyazkov.it@gmail.com"
                  className="w-fit rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-zinc-900/70 hover:text-white"
                  >
                  zhelyazkov.it@gmail.com
              </a>

              <a
                href="https://github.com/FerroTV"
                target="_blank"
                rel="noreferrer"
                className="w-fit rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-zinc-900/70 hover:text-white"
              >
                GitHub / FerroTV
              </a>

              <a
                href="https://www.linkedin.com/in/zhelyazko-zhelyazkov-29669586"
                target="_blank"
                rel="noreferrer"
                className="w-fit rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-600 hover:bg-zinc-900/70 hover:text-white"
                >
                LinkedIn / Zhelyazko Zhelyazkov
              </a>
            </div>
          </div>
        </div>
      </section>
            <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-zinc-900/80 px-6 py-10 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
  <p className="tracking-wide">© 2026 Omnia by Ferro.</p>

  <p className="tracking-wide text-zinc-500">
    Built by Zhelyazko “Ferro” Zhelyazkov.
  </p>
</footer>
    </main>
  );
}