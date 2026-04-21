import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { researchThemes, currentDirections } from "@/content/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research themes spanning AI alignment and safety, multi-agent systems, game theory for security, and auditable AI.",
};

export default function ResearchPage() {
  return (
    <>
      <Section title="Research" eyebrow="Themes">
        <p className="max-w-prose text-ink-700 leading-relaxed mb-8">
          My research asks how autonomous systems can remain aligned,
          trustworthy, and auditable as they are deployed, adapted, and
          subjected to adversarial pressure. The themes below cut across
          alignment theory, multi-agent systems, security, and governance.
        </p>

        <ul className="grid gap-6 md:grid-cols-2">
          {researchThemes.map((t) => (
            <li
              key={t.title}
              className="rounded-lg border border-ink-200 bg-white p-5"
            >
              <h3 className="font-serif text-lg text-ink-900">{t.title}</h3>
              <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                {t.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {t.keywords.map((k) => (
                  <span key={k} className="pill">{k}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Current directions" eyebrow="In progress">
        <ul className="max-w-prose space-y-3 text-ink-700 leading-relaxed">
          {currentDirections.map((d, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
