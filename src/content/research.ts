export interface ResearchTheme {
  title: string;
  summary: string;
  keywords: string[];
}

export const researchThemes: ResearchTheme[] = [
  {
    title: "AI Alignment & Safety",
    summary:
      "Formalizing what it means for a deployed system to remain aligned with a declared value specification, and designing evaluations that expose failure before users do.",
    keywords: ["specification", "evaluation", "robustness"],
  },
  {
    title: "Moral Alignment in Autonomous Agents",
    summary:
      "Operationalizing moral constraints as measurable properties of agent behavior, and tracking how those properties drift under deployment and adaptation.",
    keywords: ["values", "drift", "autonomy"],
  },
  {
    title: "Multi-Agent Systems",
    summary:
      "Studying how multiple learning agents interact, cooperate, and compete — and how alignment guarantees compose (or fail to compose) across agents.",
    keywords: ["cooperation", "emergence", "equilibria"],
  },
  {
    title: "Game Theory for Security",
    summary:
      "Modeling adversarial settings — IoT security, hardware Trojans, supply-chain attacks — using both classical and behavioral game theory to design robust defenses.",
    keywords: ["adversarial", "behavioral GT", "defense"],
  },
  {
    title: "Auditable AI & Blockchain for Governance",
    summary:
      "Designing governance layers that make AI behavior independently verifiable: cryptographic commitments, tamper-evident audit trails, and policy-update accountability.",
    keywords: ["audit", "governance", "verifiability"],
  },
  {
    title: "Reward Manipulation & Grader Reliability",
    summary:
      "Auditing the evaluators that train and certify AI systems, and characterizing how policies can manipulate reward signals in realistic pipelines.",
    keywords: ["RLHF", "evaluation", "auditing"],
  },
];

export const currentDirections = [
  "Stability metrics for alignment: moving from point-in-time evaluation to longitudinal guarantees.",
  "Composable alignment in multi-agent systems where individual guarantees do not automatically lift to the system.",
  "Auditing infrastructure that external parties — not only the operator — can trust.",
  "Empirical benchmarks for grader reliability under adversarial and distributional pressure.",
];
