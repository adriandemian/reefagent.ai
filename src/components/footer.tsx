export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-6 text-center text-[13px] text-dim">
      <div className="bg-reef-footer" aria-hidden="true" />
      <span className="relative z-[1]">
        ReefAgent is open source software. AGPL v3. Built with Bun, TypeScript,
        and SQLite.{" "}
        <a
          href="https://github.com/aigentive/reefagent"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-foreground"
        >
          GitHub
        </a>
      </span>
    </footer>
  );
}
