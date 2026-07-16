# MAW3AW — Pet Lifestyle Goods

A responsive premium e-commerce concept for a curated dog and cat accessories brand in Lebanon. Built with Next.js App Router, TypeScript, Tailwind CSS, reusable React components, local mock product data, and a persistent browser cart.

## Publish on GitHub Pages

1. Create a new empty repository on GitHub.
2. Upload all files from this project, keeping the folder structure unchanged.
3. Commit the files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **GitHub Actions** as the source.
6. Open the repository's **Actions** tab and wait for “Deploy MAW3AW to GitHub Pages” to finish.

Your public link will use this format:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

Every future push to `main` updates the website automatically.

## Run locally

```bash
pnpm install
pnpm dev
```

Create the GitHub Pages version locally with:

```bash
pnpm build:github
```

## Editing the store

- Change the brand name, contact details, and WhatsApp number in `lib/config.ts`.
- Edit products, prices, colors, descriptions, and images in `lib/products.ts`.
- Product pages are generated automatically from product slugs.
- The cart persists in the visitor's browser using `localStorage`.
- Forms show local success states; no customer data is sent anywhere.
