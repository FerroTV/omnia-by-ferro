"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const OmniaScene = dynamic(
  () => import("@/components/three/OmniaScene"),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-black" />
    ),
  },
);

export default function OmniaScenePreviewPage() {
  return (
    <main className="relative h-screen overflow-hidden bg-black text-zinc-100">
      {/* Full-screen 3D background */}
      <div className="absolute inset-0 z-0">
        <OmniaScene />
      </div>

      {/* Readability gradients */}
      <div className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(90deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.9)_30%,rgba(0,0,0,0.48)_52%,rgba(0,0,0,0.08)_76%,rgba(0,0,0,0.22)_100%)]" />

      <div className="pointer-events-none absolute inset-0 z-2 bg-[radial-gradient(circle_at_65%_45%,transparent_0%,rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.55)_100%)]" />

      {/* Content above the liquid */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="pointer-events-auto w-fit text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to Omnia
        </Link>

        <section className="flex flex-1 items-center">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              3D Prototype
            </p>

            <h1 className="mt-6 text-6xl font-semibold tracking-tighter text-white sm:text-8xl lg:text-9xl">
              Omnia
              <br />
              Scene
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl">
              An experimental liquid-metal environment for the
              future Omnia Hero. The scene now moves behind the
              interface instead of living inside a separate frame.
            </p>

            <div className="mt-10 flex gap-4">
              <button
                type="button"
                className="pointer-events-auto rounded-full border border-white/25 px-6 py-3 text-sm text-white transition hover:border-white"
              >
                Explore projects
              </button>

              <button
                type="button"
                className="pointer-events-auto px-6 py-3 text-sm text-zinc-400 transition hover:text-white"
              >
                About Ferro
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}