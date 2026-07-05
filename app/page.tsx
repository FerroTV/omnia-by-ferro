export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-500">
          by Ferro
        </p>

        <h1 className="text-6xl font-semibold tracking-tight text-white sm:text-8xl">
          OMNIA
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-400">
          A personal digital space for projects, ideas, code, art and
          experiments.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-300 hover:bg-zinc-100 hover:text-black"
          >
            Explore Projects
          </a>

          <a
            href="#lab"
            className="rounded-full px-6 py-3 text-sm font-medium text-zinc-400 transition hover:text-zinc-100"
          >
            Enter the Lab
          </a>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-600">
          Projects
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Built work, learning paths and digital systems.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm text-zinc-500">Software Project</p>
            <h3 className="mt-4 text-xl font-medium text-white">
              CRM Integration
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Outlook and calendar integration concept for a PHP-based CRM
              system.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm text-zinc-500">Learning Project</p>
            <h3 className="mt-4 text-xl font-medium text-white">SSI App</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Educational Angular application with interactive sections for
              children.
            </p>
          </article>

          <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-sm text-zinc-500">Portfolio System</p>
            <h3 className="mt-4 text-xl font-medium text-white">
              Omnia by Ferro
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              A personal website and digital archive for code, ideas and
              creative experiments.
            </p>
          </article>
        </div>
      </section>

      <section
        id="lab"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-24"
      >
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-600">
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
      </section>
    </main>
  );
}