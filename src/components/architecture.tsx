function Box({
  label,
  items,
  className,
}: {
  label: string;
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-border bg-card/50 p-4 ${className ?? ""}`}
    >
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
    <div className="rounded-lg border border-accent/20 bg-accent/5 px-5 py-3 text-center">
      <div className="text-sm font-semibold text-foreground">{title}</div>
      <div className="text-xs text-muted">{subtitle}</div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-1">
      <svg width="12" height="20" viewBox="0 0 12 20" className="text-accent/40">
        <path d="M6 0 L6 14 M2 10 L6 18 L10 10" stroke="currentColor" fill="none" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function HArrow() {
  return (
    <div className="flex items-center px-1">
      <svg width="24" height="12" viewBox="0 0 24 12" className="text-accent/40">
        <path d="M0 6 L18 6 M14 2 L22 6 L14 10" stroke="currentColor" fill="none" strokeWidth="1.5" />
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
          {/* Title */}
          <div className="mb-6 text-center text-lg font-bold text-foreground/80">
            reefagent
          </div>

          {/* Main 3-column layout */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
            {/* Left column — Channels + Integrations */}
            <div className="space-y-4">
              <Box
                label="Channels"
                items={[
                  "Telegram",
                  "Slack",
                  "WhatsApp",
                  "Discord",
                  "Matrix",
                  "Signal",
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

            {/* Arrow left → center */}
            <div className="hidden items-center md:flex">
              <HArrow />
            </div>

            {/* Center column — Core pipeline */}
            <div className="flex flex-col items-stretch justify-center space-y-1">
              <CoreBox
                title="Model Router"
                subtitle="multi-provider"
              />
              <Arrow />
              <CoreBox
                title="Agent Runner"
                subtitle="+ Tool Sandbox"
              />
              <Arrow />
              <CoreBox
                title="Think Loop"
                subtitle="autonomous"
              />
              <Arrow />
              <CoreBox
                title="Soul & Identity"
                subtitle="self-evolving"
              />
            </div>

            {/* Arrow center → right */}
            <div className="hidden items-center md:flex">
              <HArrow />
            </div>

            {/* Right column — Storage + Safety */}
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
              <Box
                label="Goals"
                items={["Goal Engine", "Hierarchical"]}
              />
              <Box
                label="Safety"
                items={["Safety Tiers", "Circuit Breakers"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
