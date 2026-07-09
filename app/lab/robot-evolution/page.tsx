"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type RobotStage =
  | "sketch"
  | "structure"
  | "prototype"
  | "perfected";

const STAGES: {
  id: RobotStage;
  label: string;
  image: string;
  description: string;
}[] = [
  {
    id: "sketch",
    label: "Sketch",
    image: "/robots/evolution/robot-sketch.png",
    description:
      "An idea begins as a rough visual direction.",
  },
  {
    id: "structure",
    label: "Structure",
    image: "/robots/evolution/robot-structure.png",
    description:
      "The concept gains logic, systems and internal structure.",
  },
  {
    id: "prototype",
    label: "Prototype",
    image: "/robots/evolution/robot-prototype.png",
    description:
      "The structure becomes a functional and testable form.",
  },
  {
    id: "perfected",
    label: "Perfected",
    image: "/robots/evolution/robot-perfected.png",
    description:
      "The final result emerges through refinement and iteration.",
  },
];

export default function RobotEvolutionPage() {
  const [activeStage, setActiveStage] =
    useState<RobotStage>("sketch");

  const [previousStage, setPreviousStage] =
    useState<RobotStage | null>(null);

  const [isMorphing, setIsMorphing] =
    useState(false);

  const activeIndex = STAGES.findIndex(
    (stage) => stage.id === activeStage,
  );

  const active = STAGES[activeIndex];

  const previous = useMemo(
    () =>
      STAGES.find(
        (stage) => stage.id === previousStage,
      ) ?? null,
    [previousStage],
  );

  const stageCount = STAGES.length;

  const lineStart =
    100 / (stageCount * 2);

  const lineWidth =
    100 - lineStart * 2;

  const progressWidth =
    stageCount > 1
      ? (activeIndex / (stageCount - 1)) *
        lineWidth
      : 0;

  const textOnLeft = activeIndex < 2;

  useEffect(() => {
    if (!isMorphing) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setPreviousStage(null);
      setIsMorphing(false);
    }, 900);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [isMorphing]);

  function changeStage(nextStage: RobotStage) {
    if (
      nextStage === activeStage ||
      isMorphing
    ) {
      return;
    }

    setPreviousStage(activeStage);
    setActiveStage(nextStage);
    setIsMorphing(true);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-10">
        <Link
          href="/"
          className="w-fit text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to Omnia
        </Link>

        <div className="mt-16 max-w-3xl">
          <p className="mb-4 w-fit rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-zinc-500">
            Lab prototype
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Robot evolution
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A metaphor for how ideas evolve through
            structure, experimentation and refinement.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-950/40 p-4 sm:p-6">
          <div className="relative flex h-[520px] items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-black sm:h-[620px]">
            {previous && (
              <Image
                src={previous.image}
                alt={`${previous.label} robot stage`}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 1152px"
                className="pointer-events-none object-contain p-4 opacity-0 blur-md transition-all duration-900 ease-in-out sm:p-10"
                style={{
                  transform:
                    "scale(1.035) translateY(-4px)",
                }}
              />
            )}

            <Image
              key={active.id}
              src={active.image}
              alt={`${active.label} robot stage`}
              fill
              unoptimized
              priority={active.id === "sketch"}
              sizes="(max-width: 640px) 100vw, 1152px"
              className="object-contain p-4 transition-all duration-900 ease-in-out sm:p-10"
              style={{
                animation: isMorphing
                  ? "robotMorphIn 900ms cubic-bezier(0.22, 1, 0.36, 1)"
                  : undefined,
              }}
            />

            <div className="pointer-events-none absolute left-4 top-4 text-[10px] uppercase tracking-[0.28em] text-zinc-500 sm:left-5 sm:top-5">
              {String(activeIndex + 1).padStart(
                2,
                "0",
              )}{" "}
              / 04
            </div>

            <div
              className={`pointer-events-none absolute bottom-5 left-5 right-5 z-20 text-center sm:bottom-auto sm:top-1/2 sm:w-56 sm:-translate-y-1/2 sm:text-left ${
                textOnLeft
                  ? "sm:left-8 sm:right-auto"
                  : "sm:left-auto sm:right-8"
              }`}
            >
              <div
                key={`stage-copy-${active.id}`}
                className={
                  textOnLeft
                    ? "stage-copy-enter-left"
                    : "stage-copy-enter-right"
                }
              >
                <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                  {String(
                    activeIndex + 1,
                  ).padStart(2, "0")}{" "}
                  — {active.label}
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {active.description}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div
                className="absolute h-px bg-zinc-800"
                style={{
                  left: `${lineStart}%`,
                  width: `${lineWidth}%`,
                  top: "7px",
                }}
              />

              <div
                className="absolute h-px bg-white transition-[width] duration-700 ease-out"
                style={{
                  left: `${lineStart}%`,
                  width: `${progressWidth}%`,
                  top: "7px",
                }}
              />

              <div className="relative grid grid-cols-4">
                {STAGES.map((stage, index) => {
                  const isActive =
                    stage.id === activeStage;

                  const isCompleted =
                    index <= activeIndex;

                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() =>
                        changeStage(stage.id)
                      }
                      aria-pressed={isActive}
                      disabled={isMorphing}
                      className="group flex flex-col items-center text-center disabled:cursor-wait"
                    >
                      <span
                        className={`relative z-10 h-4 w-4 rounded-full border transition ${
                          isActive
                            ? "border-white bg-white"
                            : isCompleted
                              ? "border-zinc-300 bg-black"
                              : "border-zinc-700 bg-black"
                        }`}
                      />

                      <span
                        className={`mt-4 text-[11px] uppercase tracking-[0.22em] transition sm:text-xs ${
                          isActive
                            ? "text-white"
                            : "text-zinc-600 group-hover:text-zinc-300"
                        }`}
                      >
                        {stage.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes robotMorphIn {
          0% {
            opacity: 0;
            filter: blur(16px);
            transform: scale(0.965)
              translateY(10px)
              scaleX(0.96);
          }

          45% {
            opacity: 0.78;
            filter: blur(6px);
            transform: scale(1.015)
              translateY(-2px)
              scaleX(1.02);
          }

          100% {
            opacity: 1;
            filter: blur(0);
            transform: scale(1)
              translateY(0)
              scaleX(1);
          }
        }

        .stage-copy-enter-left {
          animation: stageCopyFromLeft 700ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .stage-copy-enter-right {
          animation: stageCopyFromRight 700ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes stageCopyFromLeft {
          0% {
            opacity: 0;
            filter: blur(4px);
            transform: translateX(-12px);
          }

          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(0);
          }
        }

        @keyframes stageCopyFromRight {
          0% {
            opacity: 0;
            filter: blur(4px);
            transform: translateX(12px);
          }

          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stage-copy-enter-left,
          .stage-copy-enter-right {
            animation: none;
          }

          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}