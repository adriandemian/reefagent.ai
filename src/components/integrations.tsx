const providers = [
  "OpenAI",
  "Anthropic",
  "Google Gemini",
  "Groq",
  "Together AI",
  "DeepSeek",
  "Ollama (local)",
];

const channels = [
  "Telegram",
  "Slack",
  "WhatsApp",
  "Discord",
  "Matrix",
  "Signal",
  "REST API",
  "WebSocket",
  "MCP",
  "CLI",
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-muted">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-muted">
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
        <div className="mb-7 flex flex-wrap justify-center gap-3">
          {providers.map((p) => (
            <Tag key={p}>{p}</Tag>
          ))}
        </div>

        <SectionLabel>Channels</SectionLabel>
        <div className="flex flex-wrap justify-center gap-3">
          {channels.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
