import Link from "next/link";

export default function SsiAppPage() {
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
            Case Study · Learning Project
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tighter text-white sm:text-7xl">
            SSI App
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">
            An educational Angular application for children with
            interactive sections, playful content, quizzes and a
            space-inspired visual direction.
          </p>

          <div className="mt-12 flex flex-wrap gap-3 text-xs text-zinc-400">
            {[
              "Angular",
              "TypeScript",
              "Responsive Design",
              "Educational UI",
              "Standalone Components",
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
                Educational web application
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Role
              </p>

              <p className="mt-3 text-zinc-300">
                Frontend development
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Duration
              </p>

              <p className="mt-3 text-zinc-300">
                80 hours
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
          The project required the creation of an educational web
          application that introduces children to the Solar System
          through clear information, interactive sections and playful
          activities.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          The goal
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          The goal was to build a responsive Angular application that
          combines learning content, planet exploration, quizzes,
          videos and entertaining elements in one accessible digital
          experience.
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
        A playful learning experience built with Angular
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The application was structured as a responsive single-page
        experience with dedicated sections for exploring planets,
        watching educational content, solving quizzes and discovering
        playful facts about the Solar System.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Planet exploration",
            description:
              "Children can discover the planets through clear information, visual hierarchy and accessible navigation.",
          },
          {
            title: "Interactive quizzes",
            description:
              "Quiz sections reinforce the learning content through simple questions and immediate interaction.",
          },
          {
            title: "Educational videos",
            description:
              "Video content supports the written information and provides another way to explore the Solar System.",
          },
          {
            title: "Playful content",
            description:
              "Fun facts and child-friendly elements make the learning experience feel lighter and more engaging.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6"
          >
            <h3 className="text-lg font-medium text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-zinc-400">
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
        A modular Angular application with standalone components
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The project was developed as a modern Angular single-page
        application. Standalone components were used to keep the
        structure modular, readable and easier to maintain.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Angular",
            description:
              "The application structure, navigation and interactive sections were built with Angular.",
          },
          {
            title: "TypeScript",
            description:
              "Typed component logic helped keep the code clearer and more predictable.",
          },
          {
            title: "Standalone components",
            description:
              "The main sections were separated into reusable and independently organized components.",
          },
          {
            title: "Responsive layout",
            description:
              "The interface was designed to remain usable and readable across desktop and mobile screens.",
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
          "Angular 19",
          "TypeScript 5.7",
          "Node.js 22",
          "Responsive UI",
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
        A complete educational experience about the Solar System
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The finished application combined educational content,
        interactive sections and responsive design in one consistent
        Angular experience for children.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          "Responsive Angular application completed",
          "Planet exploration section implemented",
          "Interactive quiz functionality added",
          "Educational video section included",
          "Playful content and fun facts integrated",
          "Standalone component structure completed",
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
          Project focus
        </p>

        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
          The project focused on frontend structure, interaction and
          educational presentation. It was created as a learning project
          rather than a production platform with user accounts or a
          content management system.
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
        Simple choices for a clear and child-friendly experience
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The project decisions focused on keeping the application easy
        to understand, visually engaging and realistic within the
        available development time.
      </p>

      <div className="mt-12 space-y-4">
        {[
          {
            number: "01",
            title: "Separate content into focused sections",
            description:
              "Planets, quizzes, videos and playful content were divided into clear areas so children could move through the application without unnecessary complexity.",
          },
          {
            number: "02",
            title: "Use standalone Angular components",
            description:
              "Each main section was organized as an independent component, making the project structure easier to understand, develop and maintain.",
          },
          {
            number: "03",
            title: "Prioritize interaction over complex features",
            description:
              "The project focused on educational content, responsive presentation and simple interaction instead of accounts, databases or administrative functionality.",
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
        Turning learning goals into a complete frontend project
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The project helped me strengthen my understanding of Angular,
        component-based architecture, responsive design and presenting
        educational content through a clear user interface.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "Angular structure",
            description:
              "I learned how to divide a larger application into clear standalone components with focused responsibilities.",
          },
          {
            title: "Responsive design",
            description:
              "I gained practical experience adapting layouts and content for different screen sizes.",
          },
          {
            title: "User-focused thinking",
            description:
              "I learned to simplify navigation and content presentation for a younger target audience.",
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
          Explore the rest of my work
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
          Return to the main portfolio to discover more projects,
          experiments and ideas developed under Omnia by Ferro.
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