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
    </main>
  );
}
