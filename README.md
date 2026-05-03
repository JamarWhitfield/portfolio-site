# Jamar Whitfield Portfolio

A Next.js + Tailwind portfolio with an interactive graph-theory inspired background.

## GitHub Pages Deployment

This project is configured to deploy to GitHub Pages for the repository path `/portfolio-site/`.

### One-time GitHub setup

1. Push this repository to GitHub.
2. In the repository, open Settings > Pages.
3. Under Build and deployment, set Source to GitHub Actions.
4. Make sure the default branch is `main`.

After that, every push to `main` will build and deploy the site automatically.

The published URL will be:

```text
https://jamarwhitfield.github.io/portfolio-site/
```

## Important: Git Configuration

⚠️ **Before contributing**, make sure your git is configured with a GitHub-verified email address, or your commits won't appear in your contribution history!

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed setup instructions.

**Quick setup:**
```bash
git config user.name "Your Name"
git config user.email "your-github-email@example.com"
```

## Getting Started

1. Install dependencies.
2. Run the development server.
3. Open the local URL shown in the terminal.
4. Run `npm run build` to verify the production build before pushing.
5. Run `npm start` only after `npm run build` if you want to preview the production server locally.

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production locally, or generate the static export in GitHub Actions
- `npm run start` — run the local production server after building
- `npm run lint` — run lint checks

## Customize Content

Update the text in the homepage and swap in real project details.
- Hero, About, Projects, Skills, Contact sections live in src/app/page.tsx.
- Graph background behavior is in src/components/GraphBackground.tsx.

Replace placeholder project entries and skills with real items.
