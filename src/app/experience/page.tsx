import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { experience } from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Selected industry experience at Expedia Group, Dell EMC, and Microsoft — MLOps, reliability, responsible AI, and cloud architecture.",
};

export default function ExperiencePage() {
  return (
    <Section title="Experience" eyebrow="Industry">
      <p className="max-w-prose text-ink-700 leading-relaxed mb-10">
        Selected roles that inform my research perspective on deployment,
        reliability, and the organizational conditions under which AI systems
        must behave safely.
      </p>

      <ol className="relative border-l border-ink-200 pl-6 space-y-10">
        {experience.map((e, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-xl text-ink-900">
                {e.role} · {e.company}
              </h3>
              <span className="text-sm text-ink-500">{e.period}</span>
            </div>
            <p className="mt-2 text-ink-700 leading-relaxed">{e.summary}</p>
            <ul className="mt-3 list-disc list-inside text-sm text-ink-700 space-y-1">
              {e.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {e.themes.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
