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
    q: "What license is this under?",
    a: "AGPL v3 with a commercial license exception. You can self-host, modify, and use it freely. If you distribute a modified version, AGPL requires you to share your changes. Skills and plugins you build are NOT subject to AGPL. Commercial licenses available for teams that need different terms.",
  },
  {
    q: "Is it secure?",
    a: "Security is a core architectural guarantee, not an afterthought. Ed25519 package signing, AST scanning with semgrep, cgroups v2 + seccomp sandboxing, anomaly detection, and circuit breakers. Every marketplace artifact is signed and sandboxed before execution.",
  },
  {
    q: "Can I self-host this?",
    a: "That\u2019s the entire point. Clone, configure, deploy. Your machine, your data, your models. No vendor lock-in, no platform dependencies. Runs on a \u20AC8/month Hetzner box.",
  },
  {
    q: "What channels does it support?",
    a: "Telegram, Slack, Discord, WhatsApp, Matrix, Signal, CLI, REST API, WebSocket, and MCP. Same agent, same memory, any channel. One config file.",
  },
  {
    q: "What\u2019s the difference between reefagent.ai and reefagent.me?",
    a: "This site (reefagent.ai) is the open-source framework. reefagent.me is the live hosted agent \u2014 a running instance with its own revenue dashboard, playbook store, and managed agent services. reefmarket.ai is the upcoming secure marketplace for agent packages.",
  },
  {
    q: "Can I use this commercially?",
    a: "Yes. Self-host it for internal use freely under AGPL. For distribution without AGPL obligations, commercial licenses start at \u20AC99/month. Skills and plugins you build are yours regardless.",
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
            <details key={faq.q} className="faq-item group border-b border-border">
              <summary className="flex cursor-pointer items-center justify-between py-5 text-[15px] font-semibold text-foreground transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <svg
                  className="ml-4 h-4 w-4 shrink-0 text-dim transition-transform duration-200 group-open:rotate-45"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </summary>
              <div className="faq-answer pb-5">
                <p className="text-sm leading-relaxed text-muted">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
