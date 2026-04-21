import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="rounded-lg border border-ink-200 bg-white p-6 transition-colors hover:border-ink-300">
      <header className="mb-3">
        <h3 className="font-serif text-xl text-ink-900">{p.name}</h3>
        <p className="mt-1 text-sm text-ink-600">{p.tagline}</p>
      </header>

      <p className="text-sm text-ink-700 leading-relaxed">{p.overview}</p>

      <dl className="mt-4 space-y-2 text-sm">
        <div>
          <dt className="font-medium text-ink-900">Problem.</dt>
          <dd className="text-ink-700 inline ml-1">{p.problem}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink-900">Contribution.</dt>
          <dd className="text-ink-700 inline ml-1">{p.contribution}</dd>
        </div>
      </dl>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="text-xs uppercase tracking-wider text-ink-500 mb-1">Methods</h4>
          <ul className="list-disc list-inside text-sm text-ink-700 space-y-0.5">
            {p.methods.map((m, i) => <li key={i}>{m}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-wider text-ink-500 mb-1">Outcomes</h4>
          <ul className="list-disc list-inside text-sm text-ink-700 space-y-0.5">
            {p.outcomes.map((o, i) => <li key={i}>{o}</li>)}
          </ul>
        </div>
      </div>

      <footer className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>
        {p.links && p.links.length > 0 && (
          <div className="flex gap-4 text-sm">
            {p.links.map((l, i) => (
              <Link key={i} href={l.href} className="text-accent no-underline hover:underline">
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </footer>
    </article>
  );
}
