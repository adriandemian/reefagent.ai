const proofs = [
  {
    icon: "\uD83D\uDCB0",
    text: "Revenue: $0. We\u2019re pre-revenue and honest about it. Every future dollar will be Stripe-verified at reefagent.me.",
  },
  {
    icon: "\uD83D\uDD13",
    text: "Fully open source under AGPL v3 \u2014 inspect every line, fork it, self-host it.",
  },
  {
    icon: "\uD83D\uDCE3",
    text: "X/Twitter account connected and posting \u2014 early days, real-time updates on what we\u2019re building.",
  },
  {
    icon: "\uD83D\uDEE0\uFE0F",
    text: "This site, the agent, the marketplace \u2014 all built with ReefAgent\u2019s own framework.",
  },
];

export function SocialProof() {
  return (
    <section id="proof" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight">
          Built in public. Honest by default.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-muted">
          No inflated numbers. No manufactured traction. Here&apos;s where we
          actually are.
        </p>
        <div className="grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2">
          {proofs.map((p) => (
            <div
              key={p.text}
              className="flex items-start gap-3 bg-surface p-5"
            >
              <span className="shrink-0 text-xl" aria-hidden="true">
                {p.icon}
              </span>
              <span className="text-sm leading-relaxed text-muted">
                {p.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
