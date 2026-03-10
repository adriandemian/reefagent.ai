const providers = [
  "Anthropic",
];

const channels = [
  "Telegram",
  "REST API",
  "WebSocket",
  "MCP",
  "CLI",
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors duration-150 hover:border-border-bright hover:text-foreground">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-dim">
      {children}
    </p>
  );
}

export function Integrations() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight">
          Works with everything.
        </h2>
        <p className="mb-10 text-center text-base text-muted">
          Connect any provider, deploy to any channel.
        </p>

        <SectionLabel>Providers</SectionLabel>
        <div className="mb-7 flex flex-wrap justify-center gap-2">
          {providers.map((p) => (
            <Tag key={p}>{p}</Tag>
          ))}
        </div>

        <SectionLabel>Channels</SectionLabel>
        <div className="flex flex-wrap justify-center gap-2">
          {channels.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
