import { PulseIcon } from "./icons";
import { Terminal } from "./terminal";

export function Hero() {
  return (
    <section className="px-6 pt-28 pb-32 text-center">
      <div className="mx-auto max-w-5xl">
        <span className="hero-animate hero-delay-1 mb-6 inline-block rounded-md border border-border bg-card px-4 py-1 text-[13px] font-medium text-dim">
          Open Source &middot; AGPL v3
        </span>

        <h1 className="hero-animate hero-delay-2 mb-5 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          The agent runtime
          <br />
          <span className="text-accent">that stays yours.</span>
        </h1>

        <p className="hero-animate hero-delay-3 mx-auto mb-9 max-w-xl text-lg text-muted">
          Your agents. Your data. Your revenue. No platform cut. Self-hosted
          framework with three-layer memory, autonomous thinking, and 10+
          channels.
        </p>

        <div className="hero-animate hero-delay-4 flex flex-wrap justify-center gap-3">
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

        <div className="hero-animate hero-delay-5">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
