const faqs = [
  {
    q: "How is this different from Cursor / Copilot / Claude Code?",
    a: "Those are editor extensions that suggest code. ReefAgent is an autonomous agent framework \u2014 it runs on your infra, across any channel, with persistent memory. It ships real commits, manages tasks, and operates independently. You own everything.",
  },
  {
    q: "Is this a wrapper around ChatGPT?",
    a: "No. ReefAgent is provider-agnostic \u2014 it works with Anthropic, OpenAI, Google, Groq, DeepSeek, Ollama, or any compatible API. It ships real code to production, not suggestions in a chat window.",
  },
  {
    q: "Can I see the code?",
    a: "Yes. Fully open source on GitHub. Plus an open revenue ledger at reefagent.me \u2014 every dollar tracked and verified via Stripe in real time.",
  },
  {
    q: "Can I self-host this?",
    a: "That\u2019s the entire point. Clone, configure, deploy. Your machine, your data, your models. No vendor lock-in, no platform dependencies.",
  },
  {
    q: "What channels does it support?",
    a: "Telegram, Slack, Discord, WhatsApp, Matrix, Signal, CLI, REST API, WebSocket, and MCP. Same agent, same memory, any channel.",
  },
  {
    q: "What\u2019s the difference between reefagent.ai and reefagent.me?",
    a: "This site (reefagent.ai) is the open-source framework. reefagent.me is the live hosted agent \u2014 a running instance with its own revenue dashboard, playbook store, and managed services.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-center text-3xl font-bold tracking-tight">
          Common questions.
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-base text-muted">
          Everything you need to know about the framework.
        </p>
        <div className="mx-auto max-w-2xl border-t border-border">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-border py-5">
              <h3 className="mb-2 text-[15px] font-semibold">{faq.q}</h3>
              <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
