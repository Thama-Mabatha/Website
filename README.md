# Thama Mabatha — Software Portfolio

A responsive React portfolio presenting verified software projects, technical capabilities, background and the supplied CV.

## Technical audit

- React 17 application created with Create React App and React Router 6.
- The original codebase was derived from the Soumyajit portfolio template; template attribution, metadata, social URLs, particle effects and repeated Bootstrap card layouts have been removed from the live experience.
- Existing project screenshots and the original two-page CV are preserved.
- Project content is centralized in `src/data/projects.js`; owner and capability content lives in `src/data/profile.js`.
- Existing routes remain compatible: `/project` redirects to `/projects`.
- No new runtime dependency was added.

## Routes

- `/` — Home
- `/projects` — Project collection
- `/projects/:slug` — Project case studies
- `/about` — Professional and personal background
- `/expertise` — Capability groups, tools and GitHub calendar
- `/resume` — Responsive CV viewer and download
- `/contact` — Verified public professional links

## Local development

```bash
npm install
npm start
```

## Validation

```bash
npm test -- --watchAll=false
npm run build
```

## Content notes

- The supplied CV was created in August 2025 and contains time-sensitive wording such as “final year” and a role marked “Current”. The website avoids presenting those statements as current in 2026 until they are confirmed.
- The previous weather-app repository URL returns unavailable and is intentionally not shown; the recorded demo link remains in the project data.
- The Universal Admin and QuickKart repositories are maintained under collaborators’ accounts. Their presentation explicitly identifies the collaborative/team context.
