import Link from "next/link";

export default function OmniaByFerroPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_28%),linear-gradient(to_bottom,black,rgb(9,9,11)_55%,black)] px-6 py-10 text-zinc-100">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>

        <section className="py-20 sm:py-28">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            Case Study · Portfolio System
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tighter text-white sm:text-7xl">
            Omnia by Ferro
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">
            A multilingual personal portfolio, creative archive and
            experimental digital space built to bring projects, ideas,
            code, visual concepts and future systems into one evolving
            platform.
          </p>

          <div className="mt-12 flex flex-wrap gap-3 text-xs text-zinc-400">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Multilingual UI",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-16 grid gap-8 border-y border-zinc-900 py-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Project type
              </p>

              <p className="mt-3 text-zinc-300">
                Personal portfolio system
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Role
              </p>

              <p className="mt-3 text-zinc-300">
                Design and development
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Status
              </p>

              <p className="mt-3 text-zinc-300">
                Ongoing
              </p>
            </div>
          </div>
        </section>
        <section className="border-t border-zinc-900 py-20 sm:py-28">
  <div className="grid gap-12 md:grid-cols-[0.8fr_1.6fr]">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
        Project Overview
      </p>
    </div>

    <div className="space-y-16">
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          The challenge
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          I needed a personal platform that could present completed
          projects professionally while also leaving space for
          experiments, unfinished ideas, AI concepts and future digital
          systems.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          The goal
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          The goal was to build a multilingual and expandable digital
          space that works as a portfolio, creative archive and personal
          identity system under the name Omnia by Ferro.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="border-t border-zinc-900 py-20 sm:py-28">
  <div className="grid gap-12 md:grid-cols-[0.8fr_1.6fr]">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
        The Solution
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        One flexible system for projects, ideas and experiments
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        Omnia was designed as a modular portfolio system rather than a
        static presentation page. The structure combines project case
        studies, experimental content, multilingual navigation and a
        visual identity that can grow with future work.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Project case studies",
            description:
              "Completed work is presented through dedicated pages with context, technical decisions, outcomes and lessons learned.",
          },
          {
            title: "Multilingual content",
            description:
              "The main interface supports English, German and Bulgarian with persistent language selection.",
          },
          {
            title: "Experimental space",
            description:
              "The Lab provides room for unfinished ideas, AI concepts, interface tests and future prototypes.",
          },
          {
            title: "Expandable structure",
            description:
              "The project architecture allows new pages, sections and future administration features to be added without rebuilding the entire site.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6"
          >
            <h3 className="text-lg font-medium text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>
<section className="border-t border-zinc-900 py-20 sm:py-28">
  <div className="grid gap-12 md:grid-cols-[0.8fr_1.6fr]">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
        System Structure
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        A clear path from introduction to detailed project stories
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The platform is organized into focused sections that introduce
        the identity, present completed work, collect experiments and
        provide deeper context through individual case study pages.
      </p>

      <div className="mt-12 grid gap-4 lg:grid-cols-4">
        {[
          {
            step: "01",
            title: "Home",
            description:
              "Introduces Omnia, the visual identity and the main direction of the portfolio.",
          },
          {
            step: "02",
            title: "Projects",
            description:
              "Presents selected work and connects each completed project to a detailed case study.",
          },
          {
            step: "03",
            title: "Lab",
            description:
              "Collects experimental ideas, interface tests, AI concepts and unfinished prototypes.",
          },
          {
            step: "04",
            title: "Case Studies",
            description:
              "Document the challenge, solution, technical foundation, decisions and results of each project.",
          },
        ].map((item) => (
          <article
            key={item.step}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6"
          >
            <p className="text-xs tracking-[0.25em] text-zinc-600">
              {item.step}
            </p>

            <h3 className="mt-6 text-lg font-medium text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>
<section className="border-t border-zinc-900 py-20 sm:py-28">
  <div className="grid gap-12 md:grid-cols-[0.8fr_1.6fr]">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
        Technical Foundation
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        A modern frontend foundation built for growth
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        Omnia is built with a modern React and Next.js architecture.
        The project uses reusable components, typed content structures
        and responsive styling to keep the platform maintainable as new
        projects and features are added.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Next.js App Router",
            description:
              "The site uses file-based routing and static rendering for the homepage and individual project pages.",
          },
          {
            title: "React and TypeScript",
            description:
              "Interactive behavior and content structures are implemented with typed React components.",
          },
          {
            title: "Tailwind CSS",
            description:
              "The visual system is built with responsive utility classes and a controlled monochrome design language.",
          },
          {
            title: "Structured content",
            description:
              "Multilingual homepage content is separated from the interface logic, making it easier to maintain and expand.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6"
          >
            <h3 className="text-lg font-medium text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-xs text-zinc-500">
        {[
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS v4",
          "Vercel",
        ].map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-zinc-800 bg-zinc-950/40 px-4 py-2 font-mono"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>
<section className="border-t border-zinc-900 py-20 sm:py-28">
  <div className="grid gap-12 md:grid-cols-[0.8fr_1.6fr]">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
        Outcome
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        A working portfolio system with room to evolve
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        Omnia has moved from an initial idea to a functional and
        deployed platform. It now presents projects, supports multiple
        languages and provides a foundation for future experiments,
        content and administration features.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          "Responsive portfolio homepage completed",
          "English, German and Bulgarian content implemented",
          "Persistent language selection added",
          "Dedicated project case study pages created",
          "Responsive desktop and mobile navigation completed",
          "Project deployed and connected to GitHub and Vercel",
        ].map((result) => (
          <div
            key={result}
            className="flex gap-4 rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6"
          >
            <span
              aria-hidden="true"
              className="mt-1 text-sm text-zinc-500"
            >
              ✓
            </span>

            <p className="text-sm leading-6 text-zinc-300">
              {result}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 border-l border-zinc-700 pl-6">
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
          Current status
        </p>

        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
          Omnia is an active project. The current version provides the
          public portfolio foundation, while future stages may include
          richer project media, interactive 3D elements and an
          administration system for managing content.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="border-t border-zinc-900 py-20 sm:py-28">
  <div className="grid gap-12 md:grid-cols-[0.8fr_1.6fr]">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
        Key Decisions
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Clear choices for identity, usability and future growth
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The project decisions were guided by the need to create a
        distinctive personal identity without sacrificing clarity,
        performance or the ability to expand the platform over time.
      </p>

      <div className="mt-12 space-y-4">
        {[
          {
            number: "01",
            title: "Keep the visual identity monochrome",
            description:
              "The interface uses black, white and controlled shades of grey so typography, structure and project content remain the main focus.",
          },
          {
            number: "02",
            title: "Separate content from interface logic",
            description:
              "Multilingual text is stored in structured content files, making translations easier to maintain without mixing them into the page layout.",
          },
          {
            number: "03",
            title: "Build project pages as case studies",
            description:
              "Projects are presented through complete stories with context, technical choices and outcomes instead of simple screenshots or short descriptions.",
          },
          {
            number: "04",
            title: "Add effects only when they serve the identity",
            description:
              "Motion and color are used sparingly, such as the temporary watercolor animation in the Hero, while the overall experience remains calm and focused.",
          },
        ].map((decision) => (
          <article
            key={decision.number}
            className="grid gap-5 rounded-3xl border border-zinc-800 bg-zinc-950/50 p-6 sm:grid-cols-[auto_1fr] sm:p-8"
          >
            <p className="text-xs tracking-[0.25em] text-zinc-600">
              {decision.number}
            </p>

            <div>
              <h3 className="text-xl font-medium text-white">
                {decision.title}
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
                {decision.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>
<section className="border-t border-zinc-900 py-20 sm:py-28">
  <div className="grid gap-12 md:grid-cols-[0.8fr_1.6fr]">
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
        What I Learned
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Building a real product through steady iteration
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        Omnia has helped me improve not only my frontend development
        skills, but also the way I plan, evaluate and refine a digital
        product over time.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "Product thinking",
            description:
              "I learned to make decisions based on the purpose of the platform instead of adding features only because they are visually interesting.",
          },
          {
            title: "Design consistency",
            description:
              "I developed a clearer understanding of typography, spacing, hierarchy and maintaining one visual language across different pages.",
          },
          {
            title: "Iterative development",
            description:
              "I learned to build in meaningful steps, test each block and improve the project without losing control of the overall direction.",
          },
        ].map((lesson) => (
          <article
            key={lesson.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/50 p-6"
          >
            <h3 className="text-lg font-medium text-white">
              {lesson.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {lesson.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>
<section className="border-t border-zinc-900 py-20 sm:py-28">
  <div className="rounded-4xl border border-zinc-800 bg-zinc-950/60 px-6 py-12 sm:px-10 sm:py-16">
    <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
      End of Case Study
    </p>

    <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Continue exploring Omnia
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
          Return to the main portfolio to explore the other projects,
          experiments and ideas that are part of the evolving Omnia
          system.
        </p>
      </div>

      <Link
        href="/#projects"
        className="inline-flex w-fit items-center gap-3 rounded-full border border-zinc-700 bg-zinc-950 px-6 py-3 text-sm font-medium text-zinc-200 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-100 hover:text-black"
      >
        View all projects
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  </div>
</section>
      </div>
    </main>
  );
}