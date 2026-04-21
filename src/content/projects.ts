export interface Project {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  problem: string;
  contribution: string;
  methods: string[];
  outcomes: string[];
  links?: { label: string; href: string }[];
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "vast",
    name: "VAST — Values Alignment & Stability Tracker",
    tagline: "Monitoring moral drift in autonomous agents over time.",
    overview:
      "VAST is a framework for continuously measuring whether an autonomous agent's behavior remains consistent with a declared value specification as it is deployed, updated, and exposed to adversarial conditions.",
    problem:
      "Alignment is typically evaluated at training time. In production, agents drift: distribution shift, tool use, fine-tuning, and prompt injection silently erode value-consistency.",
    contribution:
      "A measurable, reproducible definition of alignment stability, together with telemetry, probes, and a scoring protocol that allows drift to be detected before user harm.",
    methods: [
      "Behavioral probe suites grounded in a declared value specification",
      "Longitudinal stability metrics and drift-detection tests",
      "Adversarial stress scenarios and regression harnesses",
    ],
    outcomes: [
      "Accepted at ICAD 2026",
      "Open benchmark protocol for alignment-stability evaluation",
    ],
    links: [
      { label: "Paper", href: "#" },
      { label: "Code", href: "#" },
    ],
    tags: ["AI Alignment", "Evaluation", "Autonomous Agents"],
  },
  {
    slug: "vast-blockchain",
    name: "VAST-Blockchain — Auditable Governance for AI Agents",
    tagline: "On-chain, tamper-evident audit trails for autonomous decisions.",
    overview:
      "Extends VAST with a blockchain-backed audit layer so that an agent's decisions, value updates, and policy changes can be independently verified by third parties.",
    problem:
      "Autonomous systems acting on behalf of users need governance that is transparent, non-repudiable, and resilient to post-hoc modification.",
    contribution:
      "A governance pattern that binds alignment evaluations and policy state to cryptographic commitments, enabling external auditors and regulators to verify behavior without trusting the operator.",
    methods: [
      "Commitment schemes over policy and evaluation artifacts",
      "Smart-contract-mediated policy updates",
      "Verifiable logging of high-stakes agent actions",
    ],
    outcomes: [
      "Accepted at an IEEE 2026 venue",
      "Reference architecture for auditable AI governance",
    ],
    links: [{ label: "Paper", href: "#" }],
    tags: ["Auditable AI", "Blockchain", "Governance"],
  },
  {
    slug: "grader-reliability",
    name: "Grader Reliability & Reward Manipulation Benchmark",
    tagline: "Stress-testing the evaluators that train and certify AI systems.",
    overview:
      "A benchmark for probing the reliability of graders and reward models used in RLHF-style pipelines, and for detecting reward manipulation by trained policies.",
    problem:
      "If the grader is unreliable or gameable, alignment signals are unreliable. Yet graders are rarely subjected to the same adversarial scrutiny as the policies they shape.",
    contribution:
      "A structured set of adversarial evaluation tasks, manipulation detectors, and reproducible metrics for grader reliability.",
    methods: [
      "Adversarial prompt suites designed to elicit grader failure modes",
      "Agreement and calibration metrics across graders",
      "Manipulation detectors inspired by auditing and causal analysis",
    ],
    outcomes: [
      "Paper in preparation (NeurIPS 2026 target)",
      "Public evaluation harness planned",
    ],
    links: [{ label: "Draft", href: "#" }],
    tags: ["Reward Modeling", "Evaluation", "AI Safety"],
  },
  {
    slug: "iot-bgt",
    name: "Behavioral Game Theory for IoT Security",
    tagline: "Defenders and attackers with bounded rationality.",
    overview:
      "Models IoT defense as a behavioral game where both attackers and defenders deviate from classical best-response assumptions, and derives defense strategies that remain robust under those deviations.",
    problem:
      "Classical game-theoretic security assumes rational adversaries. Empirically, attackers, operators, and users all exhibit bounded rationality, which undermines theoretical guarantees.",
    contribution:
      "A behavioral game-theoretic model of IoT defense and an analysis of equilibrium strategies and their empirical robustness.",
    methods: [
      "Behavioral equilibrium concepts (e.g., quantal response)",
      "Simulation of defender–attacker dynamics",
      "Sensitivity analysis over rationality parameters",
    ],
    outcomes: [
      "Manuscript under review at IMNS 2026",
      "Defense strategies robust to bounded-rationality deviations",
    ],
    tags: ["Game Theory", "Security", "Multi-Agent"],
  },
  {
    slug: "trojan-defense",
    name: "Hardware Trojan Defense with Multi-Level Strategies",
    tagline: "Layered, strategic defense across the hardware stack.",
    overview:
      "Develops multi-level defensive strategies against hardware Trojans, framed game-theoretically across design, fabrication, and deployment stages.",
    problem:
      "Single-layer defenses are insufficient against adversaries who can act at multiple points in the hardware supply chain.",
    contribution:
      "A strategic framework that coordinates detection and mitigation across layers, and analyzes the trade-offs between cost and coverage.",
    methods: [
      "Multi-stage game formulation",
      "Layer-wise detection and mitigation models",
      "Cost-coverage Pareto analysis",
    ],
    outcomes: [
      "Manuscript under review at IMNS 2026",
      "Design guidance for layered hardware-security programs",
    ],
    tags: ["Hardware Security", "Game Theory", "Systems"],
  },
];
