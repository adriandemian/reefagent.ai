const steps = [
  {
    title: "Clone the repository",
    code: "git clone https://github.com/adriandemian/reefbot.ai.git\ncd reefbot.ai",
  },
  {
    title: "Install dependencies",
    code: "bun install",
    note: (
      <>
        Don&apos;t have Bun?{" "}
        <a
          href="https://bun.sh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Install it here
        </a>{" "}
        &mdash; one command.
      </>
    ),
  },
  {
    title: "Configure your agent",
    code: 'cp config.example.yaml ~/.reefbot/config.yaml\nexport OPENAI_API_KEY="sk-..."',
    note: "Works with any supported provider. Set the matching API key and model prefix.",
  },
  {
    title: "Launch",
    code: 'bot gateway    # reactive \u2014 responds to messages\nbot think      # autonomous \u2014 thinks continuously\nbot chat       # interactive CLI session',
  },
  {
    title: "Or use Docker",
    code: "docker-compose up -d",
    note: "Pre-built image with persistent volumes for sessions and data.",
  },
];

export function Install() {
  return (
    <section id="install" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight">
          Up and running in 2 minutes.
        </h2>
        <p className="mb-10 text-center text-base text-muted">
          Requires Bun runtime and at least one LLM API key.
        </p>

        <div className="mx-auto max-w-2xl space-y-7">
          {steps.map((s, i) => (
            <div key={s.title} className="flex gap-5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent-glow bg-accent-dim text-sm font-bold text-accent">
                {i + 1}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-2 text-base font-semibold">{s.title}</h3>
                <pre className="overflow-x-auto rounded-lg border border-border bg-code p-3 font-mono text-[13px] leading-6 text-accent">
                  {s.code}
                </pre>
                {s.note && (
                  <p className="mt-2 text-sm text-muted">{s.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
