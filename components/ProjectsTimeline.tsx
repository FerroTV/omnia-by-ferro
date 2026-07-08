"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Locale } from "@/lib/i18n";

type ProjectTimelineItem = {
  category: string;
  title: string;
  href?: string;
};

type ProjectsTimelineProps = {
  label: string;
  title: string;
  items: ProjectTimelineItem[];
  locale: Locale;
};

type TimelineMetadata = {
  index: string;
  year: string;
  order: number;
};

const PROJECT_METADATA: Record<
  string,
  TimelineMetadata
> = {
  "/projects/ssi-app": {
    index: "01",
    year: "2025",
    order: 1,
  },
  "/projects/outlook-crm-integration": {
    index: "02",
    year: "2026",
    order: 2,
  },
  "/projects/omnia-by-ferro": {
    index: "03",
    year: "2026",
    order: 3,
  },
};

const TIMELINE_TEXT: Record<
  Locale,
  {
    viewProject: string;
    moreProjects: string;
  }
> = {
  en: {
    viewProject: "View project",
    moreProjects:
      "More projects will extend the timeline",
  },
  de: {
    viewProject: "Projekt ansehen",
    moreProjects:
      "Weitere Projekte erweitern die Zeitleiste",
  },
  bg: {
    viewProject: "Разгледай проекта",
    moreProjects:
      "Новите проекти ще продължат времевата линия",
  },
};

function DesktopProjectMarker({
  project,
  index,
  year,
  position,
  revealed,
  viewProjectLabel,
}: {
  project: ProjectTimelineItem;
  index: string;
  year: string;
  position: number;
  revealed: boolean;
  viewProjectLabel: string;
}) {
  const markerDelay =
    360 + position * 240;

  const connectorDelay =
    520 + position * 240;

  const pointDelay =
    700 + position * 240;

  return (
    <div className="group flex min-h-[300px] flex-col items-center justify-end">
      <Link
        href={project.href ?? "#projects"}
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
            {index}
          </span>

          <span className="text-[9px] uppercase tracking-[0.26em] text-zinc-600 transition duration-300 group-hover:text-zinc-400">
            {project.category}
          </span>

          <span className="font-mono text-[10px] text-zinc-700">
            {year}
          </span>
        </div>

        <h3 className="mt-7 text-3xl font-medium tracking-[-0.045em] text-zinc-200 transition duration-300 group-hover:-translate-y-1 group-hover:text-white xl:text-4xl">
          {project.title}
        </h3>

        <div className="mt-5 h-px w-16 origin-center scale-x-0 bg-white/40 transition-transform duration-500 group-hover:scale-x-100" />

        <div className="mt-5 flex translate-y-2 items-center gap-3 text-[9px] uppercase tracking-[0.24em] text-zinc-600 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:text-zinc-300 group-hover:opacity-100">
          <span>{viewProjectLabel}</span>
          <span aria-hidden="true">→</span>
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
  year,
  position,
  revealed,
  viewProjectLabel,
}: {
  project: ProjectTimelineItem;
  index: string;
  year: string;
  position: number;
  revealed: boolean;
  viewProjectLabel: string;
}) {
  const delay =
    350 + position * 220;

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
        href={project.href ?? "#projects"}
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
            {index}
          </span>

          <span className="text-[9px] uppercase tracking-[0.24em] text-zinc-600">
            {project.category}
          </span>

          <span className="font-mono text-[10px] text-zinc-700">
            {year}
          </span>
        </div>

        <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-zinc-200 transition group-hover:text-white">
          {project.title}
        </h3>

        <div className="mt-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-zinc-600 transition group-hover:text-white">
          <span>{viewProjectLabel}</span>
          <span aria-hidden="true">→</span>
        </div>
      </Link>
    </div>
  );
}

export default function ProjectsTimeline({
  label,
  title,
  items,
  locale,
}: ProjectsTimelineProps) {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const [revealed, setRevealed] =
    useState(false);

  const timelineItems = useMemo(() => {
    return items
      .map((project, originalIndex) => {
        const metadata =
          PROJECT_METADATA[
            project.href ?? ""
          ];

        return {
          project,
          index:
            metadata?.index ??
            String(originalIndex + 1).padStart(
              2,
              "0",
            ),
          year: metadata?.year ?? "",
          order:
            metadata?.order ??
            100 + originalIndex,
        };
      })
      .sort((first, second) => {
        return first.order - second.order;
      });
  }, [items]);

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
      const frameId =
        window.requestAnimationFrame(() => {
          setRevealed(true);
        });

      return () => {
        window.cancelAnimationFrame(
          frameId,
        );
      };
    }

    const observer =
      new IntersectionObserver(
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

  const timelineText =
    TIMELINE_TEXT[locale];

  return (
    <section
      id="projects"
      ref={sectionRef}
        className="mx-auto max-w-6xl px-6 py-24 sm:py-32"    >
      <header className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600">
          {label}
        </p>

        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
        </h2>
      </header>

      <div className="mt-20 lg:mt-28">
        {/* Desktop timeline */}
        <div className="relative hidden lg:block">
          <div className="absolute bottom-[7px] left-0 right-0 h-px bg-white/10" />

          <div
            className={`absolute bottom-[7px] left-0 right-0 h-px origin-left bg-gradient-to-r from-transparent via-zinc-200 to-zinc-600 transition-transform duration-[1800ms] ease-out ${
              revealed
                ? "scale-x-100"
                : "scale-x-0"
            }`}
          />

          <div
            className="grid gap-10"
            style={{
              gridTemplateColumns: `repeat(${timelineItems.length}, minmax(0, 1fr))`,
            }}
          >
            {timelineItems.map(
              (
                {
                  project,
                  index,
                  year,
                },
                position,
              ) => (
                <DesktopProjectMarker
                  key={
                    project.href ??
                    project.title
                  }
                  project={project}
                  index={index}
                  year={year}
                  position={position}
                  revealed={revealed}
                  viewProjectLabel={
                    timelineText.viewProject
                  }
                />
              ),
            )}
          </div>
        </div>

        {/* Mobile timeline */}
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
            {timelineItems.map(
              (
                {
                  project,
                  index,
                  year,
                },
                position,
              ) => (
                <MobileProjectMarker
                  key={
                    project.href ??
                    project.title
                  }
                  project={project}
                  index={index}
                  year={year}
                  position={position}
                  revealed={revealed}
                  viewProjectLabel={
                    timelineText.viewProject
                  }
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
            {timelineText.moreProjects}
          </p>

          <span className="h-px w-10 bg-white/10" />
        </div>
      </div>
    </section>
  );
}