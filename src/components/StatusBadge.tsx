import type { PubStatus } from "@/content/publications";

const STYLES: Record<PubStatus, { label: string; className: string }> = {
  accepted: {
    label: "Accepted",
    className: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  "under-review": {
    label: "Under review",
    className: "bg-amber-50 text-amber-800 border-amber-200",
  },
  "in-preparation": {
    label: "In preparation",
    className: "bg-ink-100 text-ink-700 border-ink-200",
  },
};

export function StatusBadge({ status }: { status: PubStatus }) {
  const s = STYLES[status];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${s.className}`}
    >
      {s.label}
    </span>
  );
}
