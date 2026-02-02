# rocketdeploy.dev — company website

This repository contains the source code of the **rocketdeploy** company website  
https://rocketdeploy.dev

The site is built with **Astro** and serves as:
- a public presentation of how we work,
- a collection of case studies and architecture write-ups,
- a lightweight, fast, and production-oriented website.

---

## Why this repository is public

This repository is intentionally **public**.

We believe that:
- the way a system is built matters,
- clarity, structure, and delivery mindset are part of the product,
- showing *how* we build is as important as *what* we build.

Making the website source public allows others to:
- see how the site is structured,
- understand how we approach content, routing, and performance,
- verify that what we describe in case studies reflects real work.

This repository is **not** intended as a reusable website template or a starter kit.
It reflects our internal decisions and trade-offs.

---

## Tech stack

- **Astro** — static site generation
- **MD / MDX** — content and case studies
- **GitHub Pages** — hosting
- Minimal JavaScript, performance-first approach

The site is designed to be:
- fast,
- readable,
- easy to maintain,
- focused on content rather than framework complexity.

---

## Project structure (simplified)

```text
/
├── public/          # static assets
├── src/
│   ├── components/  # reusable UI components
│   ├── content/     # case studies, content collections (MD/MDX)
│   ├── layouts/     # page layouts
│   ├── pages/       # routes
│   └── styles/      # global styles
├── astro.config.mjs
└── package.json
```

Astro exposes routes based on files in `src/pages`.  
Long-form content (case studies, articles) lives in content collections.

---

## Content & case studies

Case studies published on the website are:
- based on real production systems,
- anonymized where necessary,
- focused on architecture, delivery, and decision-making,
- sometimes linked to deeper architecture showcases on GitHub.

Example:
- https://rocketdeploy.dev/en/case-studies/ops-layer-for-woocommerce

---

## Development

```sh
npm install
npm run dev
```

Build:
```sh
npm run build
```

Preview:
```sh
npm run preview
```

---

## License

This repository is public for transparency and reference purposes.

Unless stated otherwise:
- content and branding are **not** licensed for reuse,
- code is provided as-is, without guarantees.

If you are interested in collaboration or similar work:
👉 https://rocketdeploy.dev/en/contact
