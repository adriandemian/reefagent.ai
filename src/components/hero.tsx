import { GithubIcon } from "./icons";
import { Terminal } from "./terminal";

const REPO_URL = "https://github.com/adriandemian/reefbot.ai";

export function Hero() {
  return (
    <section className="px-6 pt-24 pb-20 text-center">
      <div className="mx-auto max-w-5xl">
        <span className="mb-6 inline-block rounded-md border border-border bg-card px-4 py-1 text-[13px] font-medium text-muted">
          Open Source AI Agent Framework
        </span>

        <h1 className="mb-5 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Your AI agent,
          <br />
          <span className="text-accent">your infrastructure.</span>
        </h1>

        <p className="mx-auto mb-9 max-w-xl text-lg text-muted">
          Self-hosted AI agent framework with three-layer memory, autonomous
          thinking, multi-provider support, and 10+ communication channels. No
          vendor lock-in.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#install"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 text-[15px] font-semibold text-background transition-colors hover:bg-accent/80"
          >
            Get Started
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-7 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-surface"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
            View on GitHub
          </a>
        </div>

        <Terminal />
      </div>
    </section>
  );
}
