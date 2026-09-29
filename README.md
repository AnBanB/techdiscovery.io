# Discovery Technologies — Angular website

A responsive five-page Angular implementation of the supplied Discovery Technologies mockups. SVG assets are included locally, with no external icon service required.

## Run on your Mac

Install Node.js 24 LTS, then open this folder in VS Code and run:

```bash
npm ci
npm start
```

Open http://localhost:4200. Stop with Ctrl+C.

## Pages

- `/` — Home
- `/capabilities` — white layout from page2.png
- `/solutions` — Solutions, including expandable solution descriptions
- `/entity-resolution` — U1 explainer with an interactive matching example and business infographics
- `/about` — About, values, industries and presence

The alternative Capabilities screenshot informed the shared icon set; it is not a separate page.

## Edit the site

- `src/app/home.html`, `capabilities.html`, `solutions.html`, `about.html`: page layouts and copy.
- `src/app/pages.ts`: solution, process, values, approach and industry content.
- `src/app/shared.ts`: shared capability/benefit content and icon, client-name and CTA components.
- `src/app/app.component.html`: navigation, company wordmark, footer and contact links.
- `src/styles.css`: colour tokens, typography, desktop and mobile layouts.
- `public/assets/icons/`: all editable SVG icons supplied in this conversation, named consistently without numbered prefixes.
- `public/assets/graphics/`: hero and map illustrations.
- `ASSET-MAP.json`: bundled SVG asset inventory.

Use the reusable icon component in any component importing `IconComponent`:

```html
<app-icon name="identify-fingerprint" [size]="88" alt="Identify" />
```

`name` matches the SVG filename without `.svg`. Decorative icons should leave `alt` empty. Angular copies public assets into the build output. Manrope fonts are bundled locally through npm.

## Production build

```bash
npm run build
```

Upload the contents of `dist/discovery/browser/` to your web host. Configure the host to serve `index.html` for non-file routes so refreshing `/about`, `/solutions` and `/capabilities` works. `nginx.conf.example` is included. This project targets a domain root; update the base href and the two `/assets/` CSS URLs for deployment under a subfolder.

## Contact behaviour and artwork

“Talk to Discovery” opens the visitor's email application addressed to support@techdiscovery.io. The footer telephone link uses 876-322-2016. No backend, email delivery service or contact database is implied.

The page artwork uses the vector recreations produced earlier. Company and client wordmarks are styled text, not official logo files; replace these with your approved originals in `app.component.html` and `ClientsComponent` when available. The regional map is decorative rather than a precise geographic map. No Insights, Careers, privacy or terms pages were supplied, so dead links to those pages have not been added.

## Framework

Angular 21, standalone components, Angular Router, strict template checking, TypeScript 5.9 and locally bundled Manrope. Exact installed dependency versions are recorded in package-lock.json. Node requirements: https://angular.dev/reference/versions.
