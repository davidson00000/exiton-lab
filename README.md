# EXITON Lab Research Website

Official research website for [EXITON Lab](https://exiton.lab), built with SvelteKit and Tailwind CSS.
The site is designed with a minimal, cyberpunk, research-oriented aesthetic.

## Features

- **Data-Driven**: All content is generated from `exiton_lab_site_content.md` in the root directory.
- **Cyberpunk Aesthetic**: Dark mode (#0A0A0A), Neon Teal (#23F3DB) accents, Inter font.
- **Static/Hybrid**: Built with SvelteKit, deployable to Vercel, Netlify, or Static Hosting.
- **Responsive**: Mobile-first design.

## Structure

```
src/
├── lib/
│   ├── components/       # UI Components (Navbar, Footer, Section, etc.)
│   └── utils/
│       └── markdown.ts   # Content parser
├── routes/
│   ├── +layout.svelte    # Global layout
│   ├── +page.svelte      # Home / Hero
│   ├── [section]/        # (about, research, projects...)
│   └── +layout.server.ts # Loads markdown content
└── app.css               # Global Tailwind Theme
```

## Setup & Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Locally**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173).

3. **Build for Production**
   ```bash
   npm run build
   ```
   To preview the build:
   ```bash
   npm run preview
   ```

## Content Management

The site content is managed via a single Markdown file: `exiton_lab_site_content.md`.

- **Do NOT** change the H2 headings (e.g. `## 1. What is EXITON Lab?`), as the parser maps them to specific routes.
- **Editing**: simply edit the text in the markdown file. The site will update on rebuild (or refresh in dev).
- **Images**: If adding images, place them in `static/` and reference them in markdown as `/image.png`.
- **Privacy**: Ensure NO unpublished research details are added to the markdown file.

## Deployment

The project is configured with `@sveltejs/adapter-auto`.
- **Vercel/Netlify**: Just push to the repository; it should auto-detect SvelteKit.
- **Static (GitHub Pages)**: Install `@sveltejs/adapter-static`, change adapter in `svelte.config.js`, and set `prerender: true`.

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS v4
- **Content**: Markdown (parsed via `marked` + `gray-matter`)
