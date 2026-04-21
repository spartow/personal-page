import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae of ${site.name}.`,
};

export default function CVPage() {
  return (
    <Section title="Curriculum Vitae" eyebrow="CV">
      <p className="max-w-prose text-ink-700 leading-relaxed mb-6">
        A current version of my CV is available for download below. For the
        latest publication status, please also see the{" "}
        <Link href="/publications" className="text-accent">Publications</Link>{" "}
        page.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          href={site.social.cv}
          className="inline-flex items-center gap-2 rounded-md bg-ink-900 px-4 py-2 text-sm text-white no-underline hover:bg-ink-700"
        >
          <Download size={16} /> Download CV (PDF)
        </Link>
        <Link
          href={site.social.cv}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md border border-ink-200 bg-white px-4 py-2 text-sm text-ink-700 no-underline hover:border-ink-300"
        >
          <FileText size={16} /> View in browser
        </Link>
      </div>

      <div className="mt-10 rounded-lg border border-dashed border-ink-300 bg-white p-6 text-sm text-ink-500">
        Place your CV PDF at <code>public/cv/Soraya_Partow_CV.pdf</code>. The
        download button above links to <code>{site.social.cv}</code>.
      </div>
    </Section>
  );
}
