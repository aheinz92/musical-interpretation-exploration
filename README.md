# Musical Interpretation Explorer

## What this project is
Musical Interpretation Explorer is a portfolio-ready web project for presenting a research proposal alongside an interactive prototype for comparative listening and musical interpretation analysis.

## Why it exists
The project packages the proposal and the playable exploration demo into one canonical experience. It exists to show the research vision, the interaction design, and the musical comparison workflow in a single place.

## Tech stack
- React 18
- TypeScript
- Vite
- Express
- Wouter
- Tailwind and custom CSS

## Project structure
- `client/src/pages` contains the home page, proposal page, and standalone explorer page.
- `client/src/components` contains the explorer UI and supporting components.
- `client/public/assets` contains the live audio and image assets used by the explorer.
- `archive/related_sources/phd-proposal` preserves the deprecated standalone proposal repo for historical reference.

## How to run
1. Run `npm ci`.
2. Run `npm run build` for the production build.
3. Run `npm run start` to serve the built app locally, or `npm run dev` for local development.

GitHub Pages deployment uses the repository base path `/musical-interpretation-explorer/`.

## Current status
This repository is the canonical project home. The earlier `phd-proposal` repo is deprecated and preserved only as an archived related source inside this repo.

## Next improvements
- Refine the proposal presentation and explorer UX together under one content model.
- Evaluate whether additional historical folders should be reconciled into this project.
- Trim leftover scaffolding and unused dependencies from the original demo app baseline.
