const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Your channels. Your infrastructure. Telegram, Slack, Discord, WhatsApp, Matrix, web.",
  },
  {
    num: "02",
    title: "Shape",
    desc: "Tell it what to build. It writes tests first, then ships real production code.",
  },
  {
    num: "03",
    title: "Own",
    desc: "You own the code, the data, the agent. No platform cut. No permission needed.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight">
          Three steps to your AI agent.
        </h2>
        <p className="mb-10 text-center text-base text-muted">
          No lock-in. No black boxes. From clone to full ownership in minutes.
        </p>
        <div className="grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="bg-surface p-6">
              <span className="mb-3 block font-mono text-xs font-semibold tracking-wide text-accent">
                {step.num}
              </span>
              <h3 className="mb-2 text-[15px] font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
