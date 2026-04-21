import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ title, eyebrow, children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-12 md:py-16 ${className}`}>
      <div className="container-wide">
        {eyebrow && (
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-ink-500">
            {eyebrow}
          </p>
        )}
        {title && <h2 className="mb-6">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
