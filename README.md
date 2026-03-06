# Musical Interpretation Exploration

## What this project is
Musical Interpretation Exploration is a combined proposal-and-prototype web project about developing computational methods and interfaces for comparative listening in classical piano performance.

The repository presents two tightly connected pieces:
- a full research proposal page that lays out the problem, methodology, literature context, timeline, and ethics of the proposed work
- an interactive prototype that demonstrates how a future platform could guide listeners through meaningful differences between performances

## What the proposal is arguing for
The proposal centers on a core claim: musical interpretation contains rich artistic variance, but listeners are limited by time, memory, attention, and scale when trying to compare many recordings manually.

The proposal page frames the project around:
- comparative listening as a central but difficult musical practice
- machine learning methods for detecting and characterizing interpretive differences such as timing, dynamics, phrasing, and articulation
- an exploration interface that makes those differences visible and audible
- evaluation through model validation, user studies, and pedagogical case studies
- broader goals in music engagement, pedagogy, cultural appreciation, and music information retrieval

It also includes literature review context, research-fit sections, phased milestones, ethical considerations, and references.

## What the prototype currently demonstrates
The interactive demo is not yet the real analysis system proposed in the research plan. It is a high-fidelity prototype that simulates how processed musical interpretation data could be explored.

Based on the current codebase, the prototype includes:
- a focused case study around Rachmaninoff's Piano Sonata No. 2, 2nd movement
- two highlighted sections of interest, with curated audio clips for Section A and Section B
- twelve total curated recording excerpts, six per section
- an interactive timeline with snapping behavior around highlighted moments
- concept-visual variance graphs linked to specific recordings
- synchronized playback behavior and line highlighting
- recording cards with hover and sticky selection states
- album-art inspection with enlarged front/back views and a magnifier interaction

The prototype page is explicit about its caveats: the recordings and excerpt choices are real and intentionally curated, but the variance graph is demonstrative rather than the output of a finished ML pipeline.

## Why this repo exists in this form
This repository is the canonical home for the project because the proposal and the prototype now belong to the same overall research artifact. The “exploration” framing is broader than the UI tool alone and better matches the proposed methodology, not just the current interface.

The older standalone `phd-proposal` repo is deprecated. It is preserved inside this repo only as historical source material in case specific legacy assets or presentation details need to be revisited later.

## Tech stack
- React 18
- TypeScript
- Vite
- Express
- Wouter
- Tailwind plus page-specific CSS

## Project structure
- `client/src/pages` contains the landing page, the proposal page, and the standalone prototype page.
- `client/src/components` contains the core interactive prototype pieces such as the timeline and recordings UI.
- `client/src/data/recordingClips.ts` defines the curated recording metadata and asset wiring used by the prototype.
- `client/public/assets` contains the live audio and image assets used by the current demo.
- `archive/related_sources/phd-proposal` preserves the deprecated standalone proposal repo snapshot.

## How to run
1. Run `npm ci`.
2. Run `npm run dev` for local development, or `npm run build` for the production build.
3. Run `npm run start` to serve the built app locally.

GitHub Pages deployment uses the repository base path `/musical-interpretation-exploration/`.

## Current status
The proposal content and the interactive prototype are both active parts of the same canonical repo. The proposal page is substantive and self-descriptive, so this README is intentionally narrower: it explains repository purpose, project framing, and implementation scope rather than repeating the full proposal narrative.

## Next improvements
- Consolidate naming, content, and architecture further so the proposal and prototype feel like one coherent platform rather than adjacent pages.
- Replace demonstrative visual variance data with real processed outputs from an actual analysis pipeline.
- Revisit other related folders later and reconcile them only after this canonical project remains stable.
