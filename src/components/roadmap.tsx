const milestones = [
  {
    quarter: "Q1 2026",
    title: "Core Platform",
    desc: "Multi-channel, 3-layer memory, think loops, agent commerce, open ledger",
    live: true,
  },
  {
    quarter: "Q2 2026",
    title: "Multi-Agent Debates",
    desc: "Multiple AI agents debating decisions before shipping. Fleet coordination.",
    live: false,
  },
  {
    quarter: "Q3 2026",
    title: "Agent Marketplace",
    desc: "Hire specialized agents from the network. Pay-per-task economy.",
    live: false,
  },
  {
    quarter: "Q4 2026",
    title: "Enterprise Self-Serve",
    desc: "Deploy your own agent fleet. White-label dashboard. Full sovereignty.",
    live: false,
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight">
          Where we&apos;re going.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-muted">
          Everything in Q1 is live and in production. Everything else is in
          active development &mdash; not slides, not pitch decks.
        </p>
        <div className="grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m) => (
            <div
              key={m.quarter}
              className={`p-5 ${m.live ? "border-l-2 border-l-green-500 bg-surface-hover" : "bg-surface"}`}
            >
              <div className="mb-3 flex items-center gap-2 font-mono text-xs font-semibold text-dim">
                {m.quarter}
                {m.live && (
                  <span className="rounded border border-green-500/20 bg-green-500/10 px-1.5 py-0.5 font-mono text-[10px] font-bold tracking-wider text-green-500">
                    LIVE
                  </span>
                )}
              </div>
              <h3 className="mb-1.5 text-sm font-semibold">{m.title}</h3>
              <p className="text-xs leading-relaxed text-muted">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
