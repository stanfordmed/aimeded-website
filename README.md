# AI in Medical Education — Stanford Medicine

The public-facing site for Stanford Medicine's AI in Medical Education initiative, which integrates foundational AI knowledge, clinical applications, and ethical reasoning into medical education.

**Live site:** https://stanfordmed.github.io/aimeded-website/

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [Bun](https://bun.sh/) as the package manager and runtime in CI

## Local development

Requires [Bun](https://bun.sh/) (or Node + npm if you prefer — `package.json` works either way).

```sh
bun install
bun run dev      # start dev server on http://localhost:8080
bun run build    # production build
bun run preview  # preview the production build locally
bun test         # run the vitest suite
```

## Project structure

```
public/images/        Local team photos served as static assets
src/
  pages/              Route-level components (Index, Overview, Learn, GetInvolved)
  components/         Page sections and shared UI
  components/ui/      shadcn/ui primitives
  assets/             Bundled images (hero, logos, etc.)
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site with Bun and publishes the `dist/` folder to GitHub Pages. The workflow also copies `index.html` to `404.html` so client-side routes resolve on direct navigation.

The site is served from a sub-path (`/aimeded-website/`), so:

- `vite.config.ts` sets `base: "/aimeded-website/"`
- `BrowserRouter` is configured with the matching `basename`
- References to files in `public/` must be prefixed with `import.meta.env.BASE_URL` (e.g. `` `${import.meta.env.BASE_URL}images/foo.jpg` ``), not a leading `/`, or they will 404 in production.
