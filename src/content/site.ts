// Central site configuration. Edit this file to update global info.
export const site = {
  name: "Soraya Partow",
  shortName: "Soraya Partow",
  title: "Soraya Partow — AI Safety, Alignment, and Autonomous Systems",
  description:
    "Academic homepage of Soraya Partow — Principal Software Engineer and M.S. Computer Science student researching AI alignment, multi-agent systems, and trustworthy autonomous systems.",
  url: "https://sorayapartow.com",
  email: "soraya.partow@example.com",
  location: "United States",
  affiliation: "Georgia Southwestern State University",
  role: "Principal Software Engineer · M.S. Computer Science",
  tagline:
    "Researching AI alignment, multi-agent systems, and trustworthy autonomous systems — bridging principled research and production-scale engineering.",
  social: {
    github: "https://github.com/sorayapartow",
    scholar: "https://scholar.google.com/citations?user=REPLACE_ME",
    linkedin: "https://www.linkedin.com/in/sorayapartow/",
    orcid: "https://orcid.org/0000-0000-0000-0000",
    cv: "/cv/Soraya_Partow_CV.pdf",
    email: "mailto:soraya.partow@example.com",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/publications", label: "Publications" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ],
};

export type SiteConfig = typeof site;
