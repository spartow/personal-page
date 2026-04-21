import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-200 py-10 text-sm text-ink-500">
      <div className="container-wide flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="link-quiet" href={site.social.email}>Email</Link>
          <Link className="link-quiet" href={site.social.scholar} target="_blank">Scholar</Link>
          <Link className="link-quiet" href={site.social.github} target="_blank">GitHub</Link>
          <Link className="link-quiet" href={site.social.linkedin} target="_blank">LinkedIn</Link>
          <Link className="link-quiet" href={site.social.cv}>CV</Link>
        </div>
      </div>
    </footer>
  );
}
