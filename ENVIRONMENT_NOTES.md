# Environment Notes

## Runtime
- Node.js 20 is the documented CI/runtime target in `.github/workflows/deploy-vite.yml`.
- npm is the expected package manager because the repo is locked with `package-lock.json`.

## Local setup
1. Run `npm ci`.
2. Run `npm run build`.
3. Optionally run `npm run check` for TypeScript validation.

## Deployment notes
- Vite base path is `/musical-interpretation-explorer/` to match the GitHub Pages repository URL.
- The production build outputs to `dist/public`.
- The included Express server is used for local development and build-serving flows.

## Archived source notes
- `archive/related_sources/phd-proposal` is a preserved snapshot of the deprecated standalone proposal repo.
- Nested git metadata was intentionally not copied into the archive folder.
