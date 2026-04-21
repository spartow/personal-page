import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-wide py-24 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-ink-500">404</p>
      <h1 className="mt-3">Page not found</h1>
      <p className="mt-3 text-ink-600">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-block text-accent">← Back to home</Link>
    </div>
  );
}
