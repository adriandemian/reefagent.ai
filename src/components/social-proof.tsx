const proofs = [
  {
    icon: "\uD83D\uDEE0\uFE0F",
    text: "This site was built by @ReefAgent",
  },
  {
    icon: "\uD83D\uDCE3",
    text: "X/Twitter managed autonomously since Day 1",
  },
  {
    icon: "\uD83D\uDCB0",
    text: "Every dollar of revenue verified via live Stripe dashboard",
  },
  {
    icon: "\uD83D\uDD13",
    text: "Fully open source \u2014 inspect every line on GitHub",
  },
];

export function SocialProof() {
  return (
    <section id="proof" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight">
          The agent proves itself.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-muted">
          Every output is public, every dollar is tracked. The work speaks for
          itself.
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
