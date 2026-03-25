# task.airat.top

[![task.airat.top](https://repository-images.githubusercontent.com/1192079686/dd1f0633-9a18-46a5-aa6c-65964e3d57fa)](https://task.airat.top/)

Smart, local-first task manager with AI-assisted tagging and task decomposition.

- Live site: https://task.airat.top
- Status page: https://status.airat.top

## Features

- Local task storage in the browser (`localStorage`).
- Fast add/complete/delete flow with progress stats.
- Filters: all, active, completed.
- Search by task title and generated tags.
- AI auto-tagging for new tasks (Gemini).
- AI decomposition into actionable subtasks (Gemini).
- Theme switcher (light/dark/system).

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Gemini API (`@google/genai`)

## Project Structure

- `src/` - application code.
- `public/` - static assets (`favicon`, `robots.txt`, `site.webmanifest`, `llms.txt`).
- `index.html` - app shell and meta tags.
- `vite.config.ts` - Vite config.

## Local Development

Prerequisites: Node.js 20+ and npm.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create local env file and set Gemini key:
   ```bash
   cp .env.example .env.local
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run preview
```

## Cloudflare Pages

Use these settings for deployment:

- Project root: `/` (repository root)
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `GEMINI_API_KEY`
- Production URL: `https://task.airat.top`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**AiratTop**

- Website: [airat.top](https://airat.top)
- GitHub: [@AiratTop](https://github.com/AiratTop)
- Email: [mail@airat.top](mailto:mail@airat.top)
- Repository: [task.airat.top](https://github.com/AiratTop/task.airat.top)
