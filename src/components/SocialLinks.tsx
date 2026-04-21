import Link from "next/link";
import { Mail, Github, Linkedin, FileText, GraduationCap } from "lucide-react";
import { site } from "@/content/site";

const linkClass =
  "inline-flex items-center gap-2 rounded-md border border-ink-200 bg-white px-3 py-1.5 text-sm text-ink-700 no-underline transition-colors hover:border-ink-300 hover:text-ink-900";

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href={site.social.cv} className={linkClass}>
        <FileText size={14} /> CV
      </Link>
      <Link href="/publications" className={linkClass}>
        <FileText size={14} /> Publications
      </Link>
      <Link href={site.social.scholar} target="_blank" className={linkClass}>
        <GraduationCap size={14} /> Google Scholar
      </Link>
      <Link href={site.social.github} target="_blank" className={linkClass}>
        <Github size={14} /> GitHub
      </Link>
      <Link href={site.social.linkedin} target="_blank" className={linkClass}>
        <Linkedin size={14} /> LinkedIn
      </Link>
      <Link href={site.social.email} className={linkClass}>
        <Mail size={14} /> Email
      </Link>
    </div>
  );
}
