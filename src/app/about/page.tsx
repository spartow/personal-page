import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — academic and professional biography.`,
};

export default function AboutPage() {
  return (
    <Section title="About" eyebrow="Biography">
      <div className="prose max-w-prose text-ink-700 leading-relaxed space-y-5">
        <p>
          I am <strong>Soraya Partow</strong>, a Principal Software Engineer
          and an M.S. Computer Science student at {site.affiliation}. My work
          sits at the intersection of AI alignment, multi-agent systems, and
          the engineering practices required to deploy autonomous systems
          responsibly at scale.
        </p>
        <p>
          Over the past decade I have led engineering efforts at{" "}
          <strong>Expedia Group</strong>, <strong>Dell EMC</strong>, and{" "}
          <strong>Microsoft</strong>, spanning large-scale distributed systems,
          cloud infrastructure, and ML-supported platforms. That experience
          shapes how I approach research: I am interested in alignment,
          evaluation, and governance questions that must survive contact with
          production — distribution shift, adversarial pressure, organizational
          constraints, and imperfect human oversight.
        </p>
        <p>
          My current graduate research develops <strong>VAST (Values
          Alignment &amp; Stability Tracker)</strong>, a framework for
          monitoring moral drift in autonomous agents, and a blockchain-backed
          extension that makes AI governance independently auditable. In
          parallel, I study <strong>grader reliability</strong> and{" "}
          <strong>reward manipulation</strong> in RLHF-style pipelines, and
          behavioral game-theoretic defenses for IoT and hardware security.
        </p>
        <p>
          I am preparing to pursue a Ph.D. in computer science focused on
          trustworthy autonomous systems. I am particularly drawn to problems
          where formal guarantees, empirical evaluation, and real deployment
          conditions must be reconciled — and where research contributions can
          translate into safer systems for people who never see the code.
        </p>

        <h3 className="font-serif text-ink-900 pt-2">At a glance</h3>
        <ul className="list-disc list-inside space-y-1 text-ink-700">
          <li>M.S. Computer Science, {site.affiliation} (in progress).</li>
          <li>Principal Software Engineer with a decade of industry experience.</li>
          <li>Research in AI alignment, multi-agent systems, game theory, and auditable AI.</li>
          <li>Accepted venues: ICAD 2026, IEEE 2026; additional manuscripts under review.</li>
        </ul>
      </div>
    </Section>
  );
}
