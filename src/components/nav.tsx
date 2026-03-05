import { GithubIcon } from "./icons";

const REPO_URL = "https://github.com/adriandemian/reefbot.ai";

export function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-lg font-bold">
          <span className="text-accent">reef</span>agent
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
          >
            Features
          </a>
          <a
            href="#install"
            className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
          >
            Install
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent-dim"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
