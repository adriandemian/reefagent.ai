export function SectionDivider() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-border) 30%, var(--color-border) 70%, transparent 100%)",
        }}
      />
    </div>
  );
}
