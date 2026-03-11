"use client";

import { useEffect, useState } from "react";
import { GithubIcon, PulseIcon } from "./icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 border-b transition-all duration-200 ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-lg font-bold">
          <span className="text-accent">reef</span>
          <span className="text-foreground">agent</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
          >
            Features
          </a>
          <a
            href="#install"
            className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
          >
            Install
          </a>
          <a
            href="https://github.com/aigentive/reefagent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://reefagent.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground sm:inline-flex"
          >
            <PulseIcon className="h-[14px] w-[14px]" />
            Live
          </a>
        </div>
      </div>
    </nav>
  );
}
