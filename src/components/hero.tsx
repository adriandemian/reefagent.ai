import { GithubIcon } from "./icons";
import { Terminal } from "./terminal";

const REPO_URL = "https://github.com/adriandemian/reefbot.ai";

export function Hero() {
  return (
    <section className="px-6 pt-24 pb-20 text-center">
      <div className="mx-auto max-w-5xl">
        <span className="mb-6 inline-block rounded-full border border-accent-glow bg-accent-dim px-4 py-1 text-[13px] font-medium text-accent">
          Open Source AI Agent Framework
        </span>

        <h1 className="mb-5 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Your AI agent,
          <br />
          <span className="bg-gradient-to-r from-accent to-[#00a4ff] bg-clip-text text-transparent">
            your infrastructure.
          </span>
        </h1>

        <p className="mx-auto mb-9 max-w-xl text-lg text-muted">
          Self-hosted AI agent framework with three-layer memory, autonomous
          thinking, multi-provider support, and 10+ communication channels. No
          vendor lock-in.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#install"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3 text-[15px] font-semibold text-black transition-opacity hover:opacity-90"
          >
            Get Started
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-7 py-3 text-[15px] font-semibold text-foreground transition-colors hover:border-accent"
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
