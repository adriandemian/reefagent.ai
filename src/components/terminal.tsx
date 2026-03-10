"use client";

import { useEffect, useRef, useState } from "react";

const lines: { comment?: string; prompt?: boolean; cmd?: string; blank?: boolean }[] = [
  { comment: "# Clone and install" },
  { prompt: true, cmd: "git clone https://github.com/aigentive/reefagent && cd reefagent" },
  { prompt: true, cmd: "bun install" },
  { blank: true },
  { comment: "# Configure your agent" },
  { prompt: true, cmd: "cp config.example.yaml ~/.reefagent/config.yaml" },
  { prompt: true, cmd: 'export OPENAI_API_KEY="sk-..."' },
  { blank: true },
  { comment: "# Launch" },
  { prompt: true, cmd: "bot gateway" },
  { comment: "  Gateway running on http://localhost:18789" },
  { comment: "  Telegram connected. Slack connected. Ready." },
];

export function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (visibleCount >= lines.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 400);

    return () => clearTimeout(timer);
  }, [started, visibleCount]);

  return (
    <div
      ref={ref}
      className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-xl border border-border bg-code text-left"
    >
      <div className="flex gap-1.5 border-b border-border bg-surface px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f5680]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e80]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f80]" />
      </div>
      <div className="p-5 font-mono text-sm leading-7">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`transition-opacity duration-300 ${
              i < visibleCount ? "opacity-100" : "opacity-0"
            }`}
          >
            {line.blank ? (
              <div className="h-4" />
            ) : line.comment ? (
              <div className="text-dim">{line.comment}</div>
            ) : line.prompt && line.cmd ? (
              <div>
                <span className="text-accent">$ </span>
                <span className="text-foreground">{line.cmd}</span>
              </div>
            ) : null}
          </div>
        ))}
        {visibleCount >= lines.length && (
          <div>
            <span className="text-accent">$ </span>
            <span className="cursor-blink inline-block w-[8px] bg-accent/70">
              &nbsp;
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
