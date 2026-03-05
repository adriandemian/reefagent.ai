const features = [
  {
    icon: "\u{1F9E0}",
    title: "Three-Layer Memory",
    desc: "Episodic conversations, semantic embeddings with sqlite-vec, and procedural learned skills. Persistent across sessions with hybrid FTS5 + vector search.",
  },
  {
    icon: "\u{1F504}",
    title: "Autonomous Think Loop",
    desc: "Continuous think-plan-act cycle. Set goals, let it run. Pause with a file, redirect with live feedback, audit every cycle.",
  },
  {
    icon: "\u{1F50C}",
    title: "Multi-Provider",
    desc: "OpenAI, Anthropic, Google, Groq, Together, DeepSeek, Ollama. Auto-detected by model prefix. Swap providers without code changes.",
  },
  {
    icon: "\u{1F4AC}",
    title: "10+ Channels",
    desc: "Telegram, Slack, WhatsApp, Discord, Matrix, Signal, CLI, REST API, WebSocket, MCP. One config, all channels.",
  },
  {
    icon: "\u{1F916}",
    title: "Multi-Agent Teams",
    desc: "Run multiple agents concurrently with shared memory coordination. CPO shapes, Builder implements. Shared SQLite knowledge store.",
  },
  {
    icon: "\u{1F6E1}\u{FE0F}",
    title: "Safety & Sandboxing",
    desc: "Exec command allowlists, workspace restrictions, SSRF protection, circuit breakers, token budgets. Safety tiers from permissive to locked down.",
  },
  {
    icon: "\u{1F9E9}",
    title: "Plugin SDK",
    desc: "Extend with custom tools, channels, hooks, and cron jobs. Drop a manifest.json in the plugins directory and go.",
  },
  {
    icon: "\u{1F5F3}\u{FE0F}",
    title: "AI Debate System",
    desc: "Structured multi-agent debates with specialized bot panels, 10 phases, weighted voting, and decision export. Run in Telegram groups.",
  },
  {
    icon: "\u{1F4E6}",
    title: "Zero Build Step",
    desc: "Bun-native runtime. Execute TypeScript directly. SQLite with WAL mode. No transpilation, no bundling. Just run.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
          Built for autonomy, designed for control.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:bg-surface"
            >
              <span className="mb-3 block text-[24px] grayscale-[40%]">{f.icon}</span>
              <h3 className="mb-2 text-[15px] font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
