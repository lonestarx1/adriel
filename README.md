# Adriel Niyodusaba · Portfolio (React)

**React + Vite** site that runs with **Yarn** and ships in two languages:

- `/` English (`index.html`)
- `/ko/` Korean (`ko/index.html`)

Both pages render the same `src/App.jsx`; all copy lives in `src/content/en.js` and `src/content/ko.js`, which share the same shape.

## Run locally

```bash
yarn
yarn dev
```

Then open `http://localhost:5173` (English) or `http://localhost:5173/ko/` (Korean).

## Deploy

`yarn deploy` builds and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves at engineeradriel.com.

## Documents

PDFs are in `public/docs/` and are linked from both pages.
