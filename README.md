# Signal UI

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Components](https://img.shields.io/badge/Components-60+-blue.svg)](https://signalui.dev/components)
[![AI Product Kit](https://img.shields.io/badge/AI%20Product%20Kit-12-emerald.svg)](https://signalui.dev/components?category=ai)
[![Marketing Blocks](https://img.shields.io/badge/Marketing%20Blocks-7-indigo.svg)](https://signalui.dev/blocks)

**Signal UI** is an open-core, motion-native, AI-product-ready UI component library designed for Next.js and Tailwind CSS. It is built to help developers ship gorgeous, responsive, and highly interactive software products in minutes.

Visit the live documentation and showcase at [https://signalui.dev](https://signalui.dev).

---

## Features

- **Motion-native:** Every component feels alive with shared, physics-based transition easing and durations.
- **AI Product Kit:** Flagship components tailored for LLM applications—including `ChatThread`, `StreamingText`, `VoiceWaveform`, `DiffViewer`, `CitationPanel`, and `MultiAgentBoard`.
- **Marketing Blocks:** Premium, full-width, drop-in landing page sections like Pricing Bentos, Heros, Testimonials, and Logo Tickers.
- **shadcn CLI Compatible:** Easily add components directly to your codebase without cluttering configuration: `npx shadcn add <url>`.

---

## Getting Started

### 1. Initialize shadcn/ui

Set up shadcn UI in your Next.js project:

```bash
npx shadcn@latest init
```

### 2. Install Peer Dependencies

Signal UI components rely on utility and animation packages. Install them using your package manager:

```bash
# pnpm
pnpm add lucide-react class-variance-authority clsx tailwind-merge

# npm
npm install lucide-react class-variance-authority clsx tailwind-merge

# yarn
yarn add lucide-react class-variance-authority clsx tailwind-merge
```

### 3. Add Components

Use the direct URL registry mapping to add any component from the CLI:

```bash
npx shadcn@latest add https://signalui.dev/r/button
```

---

## License

Signal UI is open-source software licensed under the [MIT License](LICENSE).
