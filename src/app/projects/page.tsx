import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research projects on alignment, auditable governance, grader reliability, and game-theoretic security.",
};

export default function ProjectsPage() {
  return (
    <Section title="Projects" eyebrow="Selected work">
      <p className="max-w-prose text-ink-700 leading-relaxed mb-8">
        Each project below pairs a research question with a concrete artifact —
        a framework, benchmark, or defense strategy — that can be evaluated
        and extended.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </Section>
  );
}
