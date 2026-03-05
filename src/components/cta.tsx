import { GithubIcon } from "./icons";

const REPO_URL = "https://github.com/adriandemian/reefbot.ai";

export function CTA() {
  return (
    <section className="border-t border-border px-6 py-20 text-center">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          Ready to deploy your own agent?
        </h2>
        <p className="mb-8 text-base text-muted">
          Open source. Self-hosted. Your data stays yours.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3 text-[15px] font-semibold text-background transition-colors hover:bg-accent/80"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
            Star on GitHub
          </a>
          <a
            href={`${REPO_URL}/tree/main/docs`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-7 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-surface"
          >
            Read the Docs
          </a>
        </div>
      </div>
    </section>
  );
}
