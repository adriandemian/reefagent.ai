export function Terminal() {
  return (
    <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-lg border border-border bg-code text-left">
      <div className="flex gap-1.5 border-b border-border bg-card px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#5a5a65]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#4a4a55]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#3e3e48]" />
      </div>
      <div className="p-5 font-mono text-sm leading-7">
        <Line comment="# Clone and install" />
        <Line prompt cmd="git clone https://github.com/adriandemian/reefbot.ai && cd reefbot.ai" />
        <Line prompt cmd="bun install" />
        <Line />
        <Line comment="# Configure your agent" />
        <Line prompt cmd="cp config.example.yaml ~/.reefbot/config.yaml" />
        <Line prompt cmd='export OPENAI_API_KEY="sk-..."' />
        <Line />
        <Line comment="# Launch" />
        <Line prompt cmd="bot gateway" />
        <Line comment="  Gateway running on http://localhost:18789" />
        <Line comment="  Telegram connected. Slack connected. Ready." />
      </div>
    </div>
  );
}

function Line({
  prompt,
  cmd,
  comment,
}: {
  prompt?: boolean;
  cmd?: string;
  comment?: string;
} = {}) {
  if (comment) {
    return <div className="text-muted">{comment}</div>;
  }
  if (prompt && cmd) {
    return (
      <div>
        <span className="text-accent">$ </span>
        <span className="text-foreground">{cmd}</span>
      </div>
    );
  }
  return <div className="h-4" />;
}
