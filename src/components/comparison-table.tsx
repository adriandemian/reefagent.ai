const rows = [
  {
    label: "Who owns the code?",
    reef: "You",
    platform: "Platform",
    cloud: "Platform",
  },
  {
    label: "Where does it run?",
    reef: "Your infra",
    platform: "Their editor",
    cloud: "Their cloud",
  },
  {
    label: "Security model",
    reef: "Ed25519 signing, AST scanning, sandboxing",
    platform: "Platform-managed",
    cloud: "Platform-managed",
  },
  {
    label: "Revenue transparency",
    reef: "Stripe-verified transactions",
    platform: "None",
    cloud: "None",
  },
  {
    label: "Vendor lock-in",
    reef: "None \u2014 full source, AGPL v3",
    platform: "Editor-dependent",
    cloud: "GPU-dependent",
  },
  {
    label: "Agent autonomy",
    reef: "Think loops, self-directed",
    platform: "Prompt-response only",
    cloud: "API-bound",
  },
  {
    label: "Multi-channel",
    reef: "10+ channels, same memory",
    platform: "Editor only",
    cloud: "API only",
  },
];

export function ComparisonTable() {
  return (
    <section id="compare" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight">
          Agents owned by you vs. managed by platforms.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-muted">
          The AI agent space is consolidating around platforms that control your
          data, your infra, and your revenue. We built the alternative.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th
                  scope="col"
                  aria-label="Feature"
                  className="w-[28%] p-4 text-left text-xs font-semibold"
                />
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-semibold text-accent"
                >
                  ReefAgent
                </th>
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-semibold"
                >
                  Platform Agents
                  <span className="mt-0.5 block text-[11px] font-normal text-dim">
                    Copilot, Cursor
                  </span>
                </th>
                <th
                  scope="col"
                  className="p-4 text-left text-xs font-semibold"
                >
                  Cloud Agents
                  <span className="mt-0.5 block text-[11px] font-normal text-dim">
                    NeMo, OpenClaw
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={
                    i < rows.length - 1 ? "border-b border-border" : ""
                  }
                >
                  <td className="p-4 text-xs font-semibold text-foreground">
                    {row.label}
                  </td>
                  <td className="p-4 font-medium text-accent">{row.reef}</td>
                  <td className="p-4 text-muted">{row.platform}</td>
                  <td className="p-4 text-muted">{row.cloud}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
