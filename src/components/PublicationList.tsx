import Link from "next/link";
import type { Publication } from "@/content/publications";
import { StatusBadge } from "./StatusBadge";

export function PublicationList({ items }: { items: Publication[] }) {
  return (
    <ul className="divide-y divide-ink-200">
      {items.map((p, idx) => (
        <li key={idx} className="py-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-lg md:text-xl text-ink-900 leading-snug">
              {p.title}
            </h3>
            <StatusBadge status={p.status} />
          </div>
          <p className="mt-1 text-sm text-ink-600">
            {p.authors.join(", ")}
          </p>
          <p className="mt-0.5 text-sm italic text-ink-500">
            {p.venue}, {p.year}
          </p>
          {p.note && (
            <p className="mt-1 text-xs text-ink-500">{p.note}</p>
          )}
          {p.links && p.links.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {p.links.map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  className="text-accent no-underline hover:underline"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
