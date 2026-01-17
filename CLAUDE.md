# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 portfolio website using the App Router with React 19, TypeScript, and Tailwind CSS 4.

**Routing**: Each page is a `page.tsx` inside `app/[route]/`. The root layout (`app/layout.tsx`) includes the `Navigation` component and wraps all page content.

**Path alias**: `@/*` maps to the project root (e.g., `@/components/Navigation`).

**Styling**: Tailwind CSS via PostCSS. Global styles in `app/globals.css`. Uses Geist font family loaded via `next/font`.
