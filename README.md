# Vritika Herbotech — final five-page website

React 19 + TypeScript, TanStack Start/Router, Vite 7 and Tailwind CSS v4.
This export retains the existing architecture, pages, content and approved design.
No shop, forms, checkout, account system or message-delivery service is included.

## Windows setup

Install Node.js 22 LTS (22.14 or newer) with npm. Extract the ZIP to a normal writable folder. Open PowerShell in the folder containing package.json.

```powershell
npm ci
npm run dev
```

Open the localhost URL printed by Vite (normally http://localhost:5173).
Stop the server with Ctrl+C. `npm install` is also supported when deliberately updating dependencies; `npm ci` reproduces the included lockfile.
Do not run npm start: development uses npm run dev.

## Checks and build

```powershell
npm run lint
npm run typecheck
npm run build
npm run preview
```

The production build uses Nitro's Netlify preset and creates `dist/` plus Netlify server-function output under `.netlify/`. The five pages use server rendering: this is not a standalone static SPA, and uploading only dist to an arbitrary static host is insufficient.

## Deploy on Netlify

Push this extracted source project to your own Git repository and import it into Netlify.
Use Node 22, build command `npm run build`, publish directory `dist`; the included netlify.toml supplies these settings. Netlify deploys the generated server functions alongside public files.
For command-line deployment after installing Netlify CLI and signing in, run `npx netlify deploy --build` for a draft, then `npx netlify deploy --build --prod` when ready.
Do not add a blanket SPA rewrite: TanStack Start/Nitro handles page requests.
Check all five direct URLs and refresh each after deployment.

## Pages

- `/` — Home
- `/about` — About Vritika
- `/products` — Our Products; category selection is stored in the URL query
- `/approach` — Our Approach
- `/contact` — Contact Us; telephone, email, Facebook and a location map

## Content and images

`src/lib/site-data.ts` contains company details, product summaries and categories.
`src/lib/site-images.ts` references all active images. All product and AI-generated editorial/category images are included as local files under `src/assets`.
Named packaging uses supplied photos; campaign/category scenes are illustrative. Replace photos centrally without rewriting pages. No generated studio packaging with fabricated labels is used.
Product/category facts and company credentials should be approved by Vritika before public launch. Certifications and partner names are reproduced from company materials, not independently verified.

## External services and configuration

No environment variables, API keys or credentials are required, so no .env.example is needed.
Google Fonts and the embedded Google Maps panel require an internet connection; all website image files are local. Email and phone links open the visitor's own mail/phone application.
No Lovable badge, watermark, preview plugin or reporting dependency is included in this standalone export. Badges injected by the Lovable hosted preview are outside the exported source.

## Included / excluded

Includes source, reusable components, CSS, Vite and routing configuration, local assets, npm lockfile and deployment configuration.
Excludes node_modules, build output, caches, Git metadata, editor metadata and credentials.
