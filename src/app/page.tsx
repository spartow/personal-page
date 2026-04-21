import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { SocialLinks } from "@/components/SocialLinks";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { researchThemes } from "@/content/research";
import { publications } from "@/content/publications";
import { StatusBadge } from "@/components/StatusBadge";

export default function HomePage() {
  const featured = publications.filter((p) => p.status === "accepted").slice(0, 3);

  return (
    <>
      <section className="pt-16 md:pt-24">
        <div className="container-wide grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="reveal">
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-ink-500">
              {site.role}
            </p>
            <h1 className="mb-4">{site.name}</h1>
            <p className="max-w-prose text-lg leading-relaxed text-ink-700">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-prose text-ink-600 leading-relaxed">
              My research focuses on <strong>AI alignment and safety</strong>,{" "}
              <strong>multi-agent systems</strong>, game theory for security,
              and <strong>auditable AI</strong>. I approach these problems with
              a decade of experience designing and operating large-scale
              production systems, and I am drawn to questions where theoretical
              rigor must meet deployment reality.
            </p>

            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div className="reveal reveal-2 md:justify-self-end">
            <Avatar />
          </div>
        </div>
      </section>

      <Section title="Featured research" eyebrow="Highlights">
        <ul className="grid gap-5 md:grid-cols-3">
          {featured.map((p, i) => (
            <li
              key={i}
              className="rounded-lg border border-ink-200 bg-white p-5"
            >
              <StatusBadge status={p.status} />
              <h3 className="mt-3 font-serif text-lg leading-snug text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm italic text-ink-500">
                {p.venue}, {p.year}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/publications" className="text-accent no-underline hover:underline text-sm">
            View all publications →
          </Link>
        </div>
      </Section>

      <Section title="Research themes" eyebrow="Focus">
        <ul className="grid gap-5 md:grid-cols-2">
          {researchThemes.slice(0, 4).map((t) => (
            <li key={t.title} className="border-t border-ink-200 pt-4">
              <h3 className="font-serif text-lg text-ink-900">{t.title}</h3>
              <p className="mt-1 text-sm text-ink-600 leading-relaxed">
                {t.summary}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/research" className="text-accent no-underline hover:underline text-sm">
            See all research directions →
          </Link>
        </div>
      </Section>
    </>
  );
}
