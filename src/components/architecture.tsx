function Box({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
        {label}
      </div>
      <div className="space-y-1">
        {items.map((item) => (
          <div key={item} className="text-sm text-muted">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function CoreBox({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface-hover px-5 py-3 text-center transition-colors duration-150 hover:border-accent/30">
      <div className="text-sm font-semibold text-foreground">{title}</div>
      <div className="text-xs text-dim">{subtitle}</div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-1">
      <svg width="12" height="18" viewBox="0 0 12 18" className="text-accent/40">
        <path
          d="M6 0 L6 12 M2 9 L6 16 L10 9"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function HArrow() {
  return (
    <div className="flex items-center px-1">
      <svg width="24" height="12" viewBox="0 0 24 12" className="text-accent/40">
        <path
          d="M0 6 L18 6 M14 2 L22 6 L14 10"
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export function Architecture() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
          Architecture
        </h2>

        <div className="overflow-hidden rounded-xl border border-border bg-code p-6 sm:p-8">
          <div className="mb-6 text-center text-base font-bold text-dim">
            reefagent
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
            <div className="space-y-4">
              <Box
                label="Channels"
                items={[
                  "Telegram",
                  "CLI",
                  "REST API",
                  "WebSocket",
                  "MCP",
                ]}
              />
              <Box
                label="Integrations"
                items={["Plugins", "Webhooks", "Cron"]}
              />
            </div>

            <div className="hidden items-center md:flex">
              <HArrow />
            </div>

            <div className="flex flex-col items-stretch justify-center space-y-1">
              <CoreBox title="Model Router" subtitle="7 providers" />
              <Arrow />
              <CoreBox title="Agent Runner" subtitle="+ Tool Sandbox" />
              <Arrow />
              <CoreBox title="Think Loop" subtitle="autonomous" />
              <Arrow />
              <CoreBox title="Soul & Identity" subtitle="self-evolving" />
            </div>

            <div className="hidden items-center md:flex">
              <HArrow />
            </div>

            <div className="space-y-4">
              <Box
                label="Storage"
                items={[
                  "SQLite + WAL",
                  "Episodic",
                  "Semantic",
                  "Procedural",
                  "FTS5 + Vec",
                  "Hybrid Search",
                ]}
              />
              <Box label="Goals" items={["Goal Engine", "Hierarchical"]} />
              <Box label="Safety" items={["Safety Tiers", "Circuit Breakers"]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
