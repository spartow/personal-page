export type PubStatus = "accepted" | "under-review" | "in-preparation";

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: PubStatus;
  links?: { label: string; href: string }[];
  note?: string;
}

// NOTE: Statuses are presented exactly as provided. Do not promote a
// manuscript or in-preparation paper to "accepted" without a real acceptance.
export const publications: Publication[] = [
  {
    title:
      "Values Alignment and Stability Tracking in Autonomous Agents (VAST): A Framework for Monitoring Moral Drift",
    authors: ["Soraya Partow", "et al."],
    venue: "ICAD 2026 — International Conference on Autonomous Decision-Making",
    year: 2026,
    status: "accepted",
    links: [
      { label: "Preprint", href: "#" },
      { label: "BibTeX", href: "#" },
    ],
  },
  {
    title:
      "Auditable On-Chain Governance for Autonomous AI Agents: A VAST-Blockchain Approach",
    authors: ["Soraya Partow", "et al."],
    venue: "IEEE Conference Proceedings, 2026",
    year: 2026,
    status: "accepted",
    links: [{ label: "Preprint", href: "#" }],
  },
  {
    title:
      "Behavioral Game-Theoretic Defense Strategies for IoT Security under Bounded Rationality",
    authors: ["Soraya Partow", "et al."],
    venue: "IMNS 2026 — International Conference on Microelectronics and Nanoscale Systems",
    year: 2026,
    status: "under-review",
    note: "Manuscript submitted.",
  },
  {
    title:
      "Multi-Level Strategic Defense against Hardware Trojans: A Game-Theoretic Perspective",
    authors: ["Soraya Partow", "et al."],
    venue: "IMNS 2026 — International Conference on Microelectronics and Nanoscale Systems",
    year: 2026,
    status: "under-review",
    note: "Manuscript submitted.",
  },
  {
    title:
      "Grader Reliability and Reward Manipulation: An Auditing Benchmark for RLHF-Style Pipelines",
    authors: ["Soraya Partow", "et al."],
    venue: "NeurIPS 2026 (target)",
    year: 2026,
    status: "in-preparation",
    note: "Paper in preparation; target venue only.",
  },
];
