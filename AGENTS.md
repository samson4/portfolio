# Repository Guidelines

## Project Structure & Module Organization
This repository is a Nuxt 3 portfolio site. The app entry is [`app.vue`](/home/orbit/Downloads/portfolio/app.vue), which composes the main landing-page sections from [`components/`](/home/orbit/Downloads/portfolio/components). Keep reusable UI in `components/` using PascalCase filenames such as `Header.vue` or `WorkExperienceTimeline.vue`. Static assets, resume files, and images live in [`public/`](/home/orbit/Downloads/portfolio/public). App-level configuration is in [`nuxt.config.ts`](/home/orbit/Downloads/portfolio/nuxt.config.ts) and TypeScript settings are in [`tsconfig.json`](/home/orbit/Downloads/portfolio/tsconfig.json). The `server/` directory is reserved for Nitro server code if backend endpoints are added later.

## Build, Test, and Development Commands
Install dependencies with `yarn install` to match the committed `yarn.lock`.

- `yarn dev`: start the Nuxt dev server at `http://localhost:3000`.
- `yarn build`: create the production build.
- `yarn preview`: serve the built app locally for a final smoke test.
- `yarn generate`: produce a static site build when needed for static hosting.

## Coding Style & Naming Conventions
Follow the existing Vue single-file component style: `<script setup>`, 2-space indentation, and Tailwind utility classes in templates. Use PascalCase for component filenames, camelCase for variables and refs, and descriptive section IDs like `#about` or `#contact`. Prefer double quotes in script blocks, matching the current codebase. Keep components focused on one section or behavior and place assets in `public/` with clear names like `portfolioBackground.jpg`.

## Testing Guidelines
There is no automated test suite configured yet. Before opening a PR, run `yarn build` and `yarn preview`, then manually verify navigation, responsive layout, animations, and asset loading. When tests are added, place them near the feature or under a dedicated `tests/` directory and use `*.spec.ts` naming.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries such as `Add live demo button to project cards in Services.vue` and `Portfolio animation bug fix`. Keep commit messages concise, specific, and scoped to one change. PRs should include a brief description, note any visual or content changes, link related issues when available, and attach screenshots or a short screen recording for UI updates.

## Security & Configuration Tips
Store secrets in `.env` and never commit real credentials. Review external media URLs and downloaded resume files before publishing, since this project serves them directly from `public/`.
