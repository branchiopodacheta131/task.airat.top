# AGENTS.md

## Purpose
Public local-first task manager with AI-assisted features (`task.airat.top`).

## Repository Role
- Category: `*.airat.top` (public static tool).
- Deployment platform: Cloudflare Pages.
- Stack: React + TypeScript + Vite.

## Content and Structure
- App shell: `index.html`.
- Source code: `src/`.
- Static assets: `public/`.
- Build output: `dist/`.

## Site Conventions
- Keep UI style aligned with AiratTop ecosystem.
- Keep SEO metadata and social tags in `index.html`.
- Keep required counters/verification tags (Google Analytics + Yandex verification).
- For this Vite project, deploy `dist/` to Cloudflare Pages (not `public_html`).

## AI Working Notes
- Keep app local-first (`localStorage`) and preserve offline-friendly behavior.
- Keep Gemini integration and env expectations stable (`GEMINI_API_KEY`).
