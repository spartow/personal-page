export function Avatar({ initials = "SP" }: { initials?: string }) {
  return (
    <div
      aria-hidden
      className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-ink-200 bg-white font-serif text-3xl tracking-wide text-ink-700 shadow-sm"
    >
      {initials}
    </div>
  );
}
