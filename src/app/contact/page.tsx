import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} for research collaboration, PhD inquiries, or academic networking.`,
};

export default function ContactPage() {
  const rows = [
    { icon: Mail, label: "Email", href: site.social.email, text: site.email },
    { icon: GraduationCap, label: "Google Scholar", href: site.social.scholar, text: "scholar.google.com" },
    { icon: Github, label: "GitHub", href: site.social.github, text: "github.com/sorayapartow" },
    { icon: Linkedin, label: "LinkedIn", href: site.social.linkedin, text: "linkedin.com/in/sorayapartow" },
  ];

  return (
    <Section title="Contact" eyebrow="Get in touch">
      <p className="max-w-prose text-ink-700 leading-relaxed mb-8">
        I welcome inquiries about research collaboration, PhD opportunities,
        reading groups, and thoughtful technical conversations on alignment,
        multi-agent systems, and auditable AI. Email is the most reliable way
        to reach me.
      </p>

      <ul className="max-w-prose divide-y divide-ink-200 border-y border-ink-200">
        {rows.map(({ icon: Icon, label, href, text }) => (
          <li key={label} className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-700">
                <Icon size={15} />
              </span>
              <div>
                <p className="text-sm font-medium text-ink-900">{label}</p>
                <p className="text-sm text-ink-500">{text}</p>
              </div>
            </div>
            <Link
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              className="text-sm text-accent no-underline hover:underline"
            >
              Open →
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
