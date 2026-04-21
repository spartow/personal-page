export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  themes: string[];
}

export const experience: Experience[] = [
  {
    company: "Expedia Group",
    role: "Principal Software Engineer",
    period: "Recent",
    summary:
      "Technical leadership on large-scale distributed systems and ML-supported platforms, with emphasis on reliability, responsible deployment, and cross-team architecture.",
    highlights: [
      "Led architecture and reliability efforts for high-traffic, data-intensive services.",
      "Drove MLOps and governance practices for safe, auditable model deployment.",
      "Mentored senior engineers; set technical direction across multiple teams.",
    ],
    themes: ["MLOps", "Reliability", "Responsible AI", "Architecture"],
  },
  {
    company: "Dell EMC",
    role: "Senior Software Engineer",
    period: "Prior",
    summary:
      "Built cloud and storage platforms at enterprise scale, focusing on resilience, data integrity, and operational safety.",
    highlights: [
      "Designed and shipped components of cloud and storage infrastructure used by enterprise customers.",
      "Worked on reliability, fault-tolerance, and observability for mission-critical services.",
    ],
    themes: ["Cloud", "Distributed Systems", "Reliability"],
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    period: "Prior",
    summary:
      "Contributed to production systems spanning platform services and developer tooling, with an emphasis on quality, testing, and safe release practices.",
    highlights: [
      "Developed production features across platform and tooling services.",
      "Built testing and release safeguards that reduced regressions in customer-facing flows.",
    ],
    themes: ["Platform", "Developer Tools", "Quality"],
  },
];
