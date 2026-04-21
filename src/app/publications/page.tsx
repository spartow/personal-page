import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { PublicationList } from "@/components/PublicationList";
import { publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications by Soraya Partow — accepted papers, manuscripts under review, and work in preparation.",
};

export default function PublicationsPage() {
  const accepted = publications.filter((p) => p.status === "accepted");
  const review = publications.filter((p) => p.status === "under-review");
  const prep = publications.filter((p) => p.status === "in-preparation");

  return (
    <Section title="Publications" eyebrow="Research output">
      <p className="max-w-prose text-ink-700 leading-relaxed mb-10">
        Publications are listed with their current status. Manuscripts under
        review and work in preparation are labeled honestly and not presented
        as accepted. For BibTeX, preprints, or further details, please get in
        touch.
      </p>

      <div className="space-y-12">
        <div>
          <h3 className="mb-4 font-serif text-xl text-ink-900">Accepted</h3>
          {accepted.length ? (
            <PublicationList items={accepted} />
          ) : (
            <p className="text-sm text-ink-500">No entries yet.</p>
          )}
        </div>

        <div>
          <h3 className="mb-4 font-serif text-xl text-ink-900">Under review</h3>
          {review.length ? (
            <PublicationList items={review} />
          ) : (
            <p className="text-sm text-ink-500">No entries yet.</p>
          )}
        </div>

        <div>
          <h3 className="mb-4 font-serif text-xl text-ink-900">In preparation</h3>
          {prep.length ? (
            <PublicationList items={prep} />
          ) : (
            <p className="text-sm text-ink-500">No entries yet.</p>
          )}
        </div>
      </div>
    </Section>
  );
}
