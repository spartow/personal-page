import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "about", "research", "publications", "projects", "experience", "cv", "contact"];
  return paths.map((p) => ({
    url: `${site.url}/${p}`.replace(/\/$/, "") || site.url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
