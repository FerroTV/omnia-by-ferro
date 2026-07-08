"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
} from "react";

type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Solar System App",
    category: "Learning Project",
    year: "2025",
    href: "/projects/ssi-app",
  },
  {
    index: "02",
    title: "CRM Integration",
    category: "Software Project",
    year: "2026",
    href: "/projects/outlook-crm-integration",
  },
  {
    index: "03",
    title: "Omnia by Ferro",
    category: "Portfolio System",
    year: "2026",
    href: "/projects/omnia-by-ferro",
  },
];

function ProjectMarker({
  project,
  index,
  revealed,
}: {
  project: Project;
  index: number;
  revealed: boolean;
}) {
  const markerDelay =
    360 + index * 240;

  const connectorDelay =
    520 + index * 240;

  const pointDelay =
    700 + index * 240;

  return (
    <div className="group flex min-h-[300px] flex-col items-center justify-end">
      <Link
        href={project.href}
        style={{
          transitionDelay: revealed
            ? `${markerDelay}ms`
            : "0ms",
        }}
        className={`relative flex w-full max-w-sm flex-col items-center px-4 text-center transition-[opacity,transform] duration-700 ease-out ${
          revealed
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 font-mono text-[10px] text-zinc-500 transition duration-300 group-hover:border-white/35 group-hover:text-white">
            {project.index}
          </span>

          <span className="text-[9px] uppercase tracking-[0.26em] text-zinc-600 transition duration-300 group-hover:text-zinc-400">
            {project.category}
          </span>

          <span className="font-mono text-[10px] text-zinc-700">
            {project.year}
          </span>
        </div>

        <h2 className="mt-7 text-3xl font-medium tracking-[-0.045em] text-zinc-200 transition duration-300 group-hover:-translate-y-1 group-hover:text-white xl:text-4xl">
          {project.title}
        </h2>

        <div className="mt-5 h-px w-16 origin-center scale-x-0 bg-white/40 transition-transform duration-500 group-hover:scale-x-100" />

        <div className="mt-5 flex translate-y-2 items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-zinc-600 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:text-zinc-300 group-hover:opacity-100">
          <span>View project</span>
          <span>→</span>
        </div>
      </Link>

      <div
        style={{
          transitionDelay: revealed
            ? `${connectorDelay}ms`
            : "0ms",
        }}
        className={`mt-8 h-20 w-px origin-bottom bg-gradient-to-b from-white/20 to-white/75 transition-[transform,opacity] duration-700 ease-out ${
          revealed
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0"
        }`}
      />

      <div
        style={{
          transitionDelay: revealed
            ? `${pointDelay}ms`
            : "0ms",
        }}
        className={`relative z-10 h-4 w-4 rounded-full border border-white/70 bg-black shadow-[0_0_20px_rgba(255,255,255,0.22)] transition-[transform,opacity,box-shadow] duration-500 group-hover:shadow-[0_0_28px_rgba(255,255,255,0.5)] ${
          revealed
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0"
        }`}
      >
        <span className="absolute inset-[4px] rounded-full bg-zinc-200" />
      </div>
    </div>
  );
}

function MobileProjectMarker({
  project,
  index,
  revealed,
}: {
  project: Project;
  index: number;
  revealed: boolean;
}) {
  const delay =
    350 + index * 220;

  return (
    <div className="relative min-h-44">
      <div
        style={{
          transitionDelay: revealed
            ? `${delay}ms`
            : "0ms",
        }}
        className={`absolute -left-[34px] top-8 h-px w-[34px] origin-left bg-white/45 transition-transform duration-600 ${
          revealed
            ? "scale-x-100"
            : "scale-x-0"
        }`}
      />

      <div
        style={{
          transitionDelay: revealed
            ? `${delay + 120}ms`
            : "0ms",
        }}
        className={`absolute -left-[40px] top-[26px] h-3.5 w-3.5 rounded-full border border-white/70 bg-black transition-[transform,opacity] duration-500 ${
          revealed
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0"
        }`}
      >
        <span className="absolute inset-[3px] rounded-full bg-zinc-200" />
      </div>

      <Link
        href={project.href}
        style={{
          transitionDelay: revealed
            ? `${delay + 180}ms`
            : "0ms",
        }}
        className={`group block transition-[opacity,transform] duration-700 ${
          revealed
            ? "translate-x-0 opacity-100"
            : "translate-x-6 opacity-0"
        }`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[10px] text-zinc-500">
            {project.index}
          </span>

          <span className="text-[9px] uppercase tracking-[0.24em] text-zinc-600">
            {project.category}
          </span>

          <span className="font-mono text-[10px] text-zinc-700">
            {project.year}
          </span>
        </div>

        <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-zinc-200 transition group-hover:text-white">
          {project.title}
        </h2>

        <div className="mt-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-zinc-600 transition group-hover:text-white">
          <span>View project</span>
          <span>→</span>
        </div>
      </Link>
    </div>
  );
}

export default function ProjectsTimelinePrototypePage() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const [revealed, setRevealed] =
    useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    if (reduceMotion) {
  const frameId = window.requestAnimationFrame(() => {
    setRevealed(true);
  });

  return () => {
    window.cancelAnimationFrame(frameId);
  };
}

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-zinc-100">
      <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <Link
          href="/"
          className="text-xs text-zinc-600 transition hover:text-white"
        >
          ← Back to Omnia
        </Link>

        <header className="mt-20 max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600">
            Selected work
          </p>

          <h1 className="mt-5 text-4xl font-medium tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Projects in motion.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            A growing timeline of selected work,
            experiments and ideas developed over
            time.
          </p>
        </header>

        <section
          ref={sectionRef}
          className="mt-20 pb-16 lg:mt-28"
        >
          {/* Desktop */}
          <div className="relative hidden lg:block">
            <div className="absolute bottom-[7px] left-0 right-0 h-px bg-white/10" />

            <div
              className={`absolute bottom-[7px] left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-zinc-200 to-zinc-600 transition-transform duration-[1800ms] ease-out ${
                revealed
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
            />

            <div className="grid grid-cols-3 gap-10">
              {PROJECTS.map(
                (project, index) => (
                  <ProjectMarker
                    key={project.href}
                    project={project}
                    index={index}
                    revealed={revealed}
                  />
                ),
              )}
            </div>
          </div>

          {/* Mobile */}
          <div className="relative pl-10 lg:hidden">
            <div className="absolute bottom-0 left-[6px] top-0 w-px bg-white/10" />

            <div
              className={`absolute bottom-0 left-[6px] top-0 w-px origin-top bg-gradient-to-b from-zinc-200 via-zinc-500 to-transparent transition-transform duration-[1600ms] ease-out ${
                revealed
                  ? "scale-y-100"
                  : "scale-y-0"
              }`}
            />

            <div className="space-y-12">
              {PROJECTS.map(
                (project, index) => (
                  <MobileProjectMarker
                    key={project.href}
                    project={project}
                    index={index}
                    revealed={revealed}
                  />
                ),
              )}
            </div>
          </div>

          <div
            className={`mt-14 flex items-center justify-center gap-4 transition duration-1000 ${
              revealed
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <span className="h-px w-10 bg-white/10" />

            <p className="text-center font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-700">
              More projects will extend the timeline
            </p>

            <span className="h-px w-10 bg-white/10" />
          </div>
        </section>
      </div>
    </main>
  );
}