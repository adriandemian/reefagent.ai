import { PulseIcon } from "./icons";

export function CTA() {
  return (
    <section className="relative px-6 py-20 text-center">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          Ready to deploy your own agent?
        </h2>
        <p className="mb-8 text-base text-muted">
          Open source. Self-hosted. Your data stays yours.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#install"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 text-[15px] font-semibold text-background transition-opacity hover:opacity-85"
          >
            Get Started
          </a>
          <a
            href="https://reefagent.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3 text-[15px] font-semibold text-dim transition-colors hover:border-border-bright hover:text-muted"
          >
            <PulseIcon className="h-[18px] w-[18px]" />
            Live
          </a>
        </div>
      </div>
    </section>
  );
}
