import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReefAgent — Self-hosted AI Agent Framework",
  description:
    "Open-source AI agent framework with three-layer memory, autonomous thinking, multi-provider support, and 10+ communication channels. No vendor lock-in.",
  keywords: [
    "AI agent",
    "self-hosted",
    "open source",
    "autonomous AI",
    "memory",
    "multi-provider",
    "Telegram bot",
    "Slack bot",
    "AI framework",
  ],
  openGraph: {
    title: "ReefAgent — Self-hosted AI Agent Framework",
    description:
      "Open-source AI agent framework with three-layer memory, autonomous thinking, and multi-channel routing.",
    url: "https://reefagent.ai",
    siteName: "ReefAgent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReefAgent — Self-hosted AI Agent Framework",
    description:
      "Open-source AI agent framework with three-layer memory, autonomous thinking, and multi-channel routing.",
  },
  metadataBase: new URL("https://reefagent.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
