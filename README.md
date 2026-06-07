# Portfolio

![Framework](https://img.shields.io/badge/framework-Svelte%205-orange)
![Language](https://img.shields.io/badge/language-TypeScript-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Personal portfolio site built with **Svelte 5** and **Tailwind CSS**.

## Why Svelte?

Svelte is a **compiler**, not a runtime framework. It converts components into optimized vanilla JavaScript at build time, which means no Virtual DOM overhead and smaller bundle sizes compared to React or Vue.

Svelte 5's `$state` and `$derived` runes also allow fine-grained reactivity, the browser only updates exactly what changed, nothing more.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Svelte 5 |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Contact Form | Web3Forms (serverless) |
| Images | WebP (optimized) |

## Project Structure

```
src/
├── components/
│   ├── Nav.svelte          # Navigation & language switcher
│   ├── Hero.svelte         # Landing section
│   ├── RepoCard.svelte     # GitHub project cards
│   ├── About.svelte        # Bio section
│   └── ContactForm.svelte  # Contact form
├── data/
│   ├── translations.ts     # EN/TR content
│   └── types.ts            # TypeScript interfaces
├── App.svelte              # Root layout
└── main.ts                 # Entry point
```

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/dincertekin/portfolio.git
   ```

2. Add your Web3Forms key to a `.env` file:
   ```env
   VITE_WEB3FORMS_KEY=your_key_here
   ```

3. Install and run:
   ```bash
   npm install
   npm run dev
   ```

## License

[MIT License](./LICENSE)
