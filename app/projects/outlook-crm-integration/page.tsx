import Link from "next/link";

export default function OutlookCrmIntegrationPage() {
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
            Case Study · CRM Integration
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tighter text-white sm:text-7xl">
            Outlook & Microsoft Graph Integration for CRM
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl">
            An extension for an existing PHP CRM that brings
            Outlook email and calendar functionality directly into
            the system through Microsoft Graph.
          </p>

          <div className="mt-12 flex flex-wrap gap-3 text-xs text-zinc-400">
            {[
              "PHP",
              "Microsoft Graph",
              "OAuth 2.0",
              "Outlook",
              "CRM",
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
                CRM extension
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Role
              </p>
              <p className="mt-3 text-zinc-300">
                Full-stack development
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Period
              </p>
              <p className="mt-3 text-zinc-300">
                March 2026
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
          Employees had to switch constantly between the internal
          CRM, Outlook and the calendar. Emails, appointments and
          customer activity were stored in separate systems, creating
          unnecessary interruptions and incomplete documentation.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          The goal
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          The goal was to connect Outlook with the existing PHP CRM
          through Microsoft Graph, allowing users to read and send
          emails, document communication and view relevant calendar
          appointments without leaving the CRM.
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
        One connected workflow inside the CRM
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The existing CRM was extended with a secure connection to
        Microsoft 365. Microsoft Graph was used to access Outlook
        emails and calendar data, while OAuth 2.0 handled user
        authentication and authorization.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Secure authentication",
            description:
              "OAuth 2.0 Authorization Code flow with server-side token handling and automatic token renewal.",
          },
          {
            title: "Email integration",
            description:
              "Users can read and send Outlook emails directly from the CRM interface.",
          },
          {
            title: "CRM documentation",
            description:
              "Relevant email activity can be stored and linked to the corresponding company record.",
          },
          {
            title: "Calendar overview",
            description:
              "Relevant Outlook appointments are displayed inside the CRM without implementing a full calendar sync.",
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
        How It Works
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        A secure connection between CRM and Microsoft 365
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The CRM communicates with Microsoft Graph through authenticated
        server-side requests. Access and refresh tokens are stored securely
        and used to retrieve Outlook data for the authenticated user.
      </p>

      <div className="mt-12 grid gap-4 lg:grid-cols-4">
        {[
          {
            step: "01",
            title: "User",
            description:
              "The user opens email or calendar functionality inside the CRM.",
          },
          {
            step: "02",
            title: "CRM",
            description:
              "The PHP application prepares the request and verifies the stored credentials.",
          },
          {
            step: "03",
            title: "Microsoft Graph",
            description:
              "Graph processes the authenticated request and communicates with Microsoft 365.",
          },
          {
            step: "04",
            title: "Outlook",
            description:
              "Emails and calendar data are returned and displayed inside the CRM.",
          },
        ].map((item) => (
          <article
            key={item.step}
            className="relative rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6"
          >
            <p className="text-xs tracking-[0.25em] text-zinc-600">
              {item.step}
            </p>

            <h3 className="mt-6 text-lg font-medium text-white">
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
        Server-side integration and structured data storage
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The integration was implemented within the existing PHP MVC
        architecture. Authentication tokens and documented communication
        were stored separately to keep account access and CRM activity
        clearly structured.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            Authentication data
          </p>

          <h3 className="mt-5 font-mono text-lg text-white">
            o365_tokens_new
          </h3>

          <div className="mt-6 space-y-3 text-sm text-zinc-400">
            {[
              "user_id",
              "access_token",
              "refresh_token",
              "expires_utc",
            ].map((field) => (
              <div
                key={field}
                className="border-t border-zinc-900 pt-3 font-mono"
              >
                {field}
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-zinc-800 bg-zinc-950/60 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            CRM communication log
          </p>

          <h3 className="mt-5 font-mono text-lg text-white">
            fd_contact_logs
          </h3>

          <div className="mt-6 space-y-3 text-sm text-zinc-400">
            {[
              "company_id",
              "channel",
              "direction",
              "target_address",
              "subject",
            ].map((field) => (
              <div
                key={field}
                className="border-t border-zinc-900 pt-3 font-mono"
              >
                {field}
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-950/40 p-6">
        <p className="text-sm leading-7 text-zinc-400">
          Access remained connected to the existing CRM user and role
          system. Microsoft tokens were handled only on the server and
          were never exposed directly to the browser.
        </p>
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
        A working Microsoft 365 integration inside the CRM
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The project delivered the planned connection between the CRM,
        Microsoft Graph and Outlook. Core email and calendar information
        became available directly within the existing application.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {[
          "Microsoft Graph connection implemented",
          "OAuth 2.0 authentication completed",
          "Outlook emails can be read and sent",
          "Email activity can be documented in the CRM",
          "Relevant calendar appointments are displayed",
          "Token expiration and renewal are handled server-side",
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
          Scope boundary
        </p>

        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
          The project intentionally did not implement a complete
          bidirectional calendar synchronization. The calendar feature
          focuses on displaying relevant Outlook appointments inside
          the CRM.
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
        Focused choices for a secure and realistic solution
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        The implementation was shaped by the existing CRM architecture,
        the available project time and the need to keep Microsoft 365
        access secure and maintainable.
      </p>

      <div className="mt-12 space-y-4">
        {[
          {
            number: "01",
            title: "Extend the existing CRM",
            description:
              "The integration was added to the established PHP MVC application instead of creating a separate system. This kept the workflow familiar for users and reduced unnecessary duplication.",
          },
          {
            number: "02",
            title: "Keep tokens on the server",
            description:
              "Access and refresh tokens were handled server-side to prevent sensitive Microsoft credentials from being exposed in the browser.",
          },
          {
            number: "03",
            title: "Limit the calendar scope",
            description:
              "The project displayed relevant Outlook appointments without attempting a full bidirectional calendar synchronization, keeping the solution realistic within the available timeframe.",
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
        Building around real systems, limits and responsibilities
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
        This project strengthened my understanding of external API
        integration, authentication flows and extending an existing
        application without disrupting its established structure.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          {
            title: "API integration",
            description:
              "I learned how to structure communication between an existing application and Microsoft Graph.",
          },
          {
            title: "Security thinking",
            description:
              "I developed a clearer understanding of OAuth 2.0, token lifecycles and server-side credential handling.",
          },
          {
            title: "Scope management",
            description:
              "I learned to distinguish essential functionality from features that would exceed the available project time.",
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