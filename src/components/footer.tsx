export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-6 text-center text-[13px] text-dim">
      <div className="bg-reef-footer" aria-hidden="true" />
      <span className="relative z-[1]">
        ReefAgent is open source software. Built with Bun, TypeScript, and
        SQLite.
      </span>
    </footer>
  );
}
