# Zadanie rekrutacyjne dla Senuto. 

Wszystkie zmiany dokonane względem initial repo znajdują się w CHANGES.md.

## Tech stack
- React 18 + TypeScript
- Vite 5
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Virtualization: `@tanstack/react-virtual`
- Class helpers: `clsx` + `tailwind-merge`

## Requirements
- Node.js 18+ (recommended)
- npm (or compatible package manager)

## Getting started

Install dependencies:
```bash
npm install
```

Run locally
```bash
vite
```

Build
```bash
vite build
```

## Project notes

- Data is generated locally (mock generator) and can reach ~10k rows.
- Search uses debouncing to avoid filtering on every keystroke.
- Table body uses virtualization to avoid rendering thousands of DOM nodes at once.
