const guarantees = [
  {
    title: "Data Ownership",
    desc: "All data stored locally in your SQLite database. Nothing leaves your machine unless you send it.",
  },
  {
    title: "Portability",
    desc: "Export everything. Switch providers, move servers, change channels \u2014 your agent follows you.",
  },
  {
    title: "Inspectability",
    desc: "Every decision logged. Every tool call auditable. Append-only HMAC-chained audit trail.",
  },
  {
    title: "Exit Right",
    desc: "No lock-in contracts, no proprietary formats. Walk away with your full agent and data at any time.",
  },
  {
    title: "Financial Autonomy",
    desc: "Your agent earns, spends, and hires autonomously. Revenue goes to you \u2014 no platform cut.",
  },
  {
    title: "Privacy",
    desc: "GDPR-compliant by architecture. No telemetry, no tracking, no data sharing. EU entity, EU rules.",
  },
];

export function Sovereignty() {
  return (
    <section id="sovereignty" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight">
          Six sovereignty guarantees.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-muted">
          Not marketing language. These are architectural commitments baked into
          how the framework works.
        </p>
        <div className="grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="bg-surface p-6 transition-colors duration-150 hover:bg-surface-hover"
            >
              <h3 className="mb-2 text-[15px] font-semibold">{g.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
