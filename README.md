# Warmdaz Family

A community and culture website for Warmdaz / Ouarmdaz, Morocco.

## Stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS v4
- MDX for editorial content
- Vercel deployment

## Local development

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Writing a blog post

1. Add an MDX file in `content/posts/`.
2. Import it in `lib/posts.ts`.
3. Add its title, excerpt, category, date, reading time and image to the `posts` array.

The post slug is the filename without `.mdx`. The blog index and article routes are generated from this list.

## Deploy to Vercel

Import this GitHub repository into Vercel. Vercel detects Next.js and selects the build settings automatically. No environment variables are required for the current site.

## Before launch

- Replace the sample editorial copy with approved stories from the community.
- Confirm the organization's preferred name, spelling and description.
- Replace sample photography with images the organization has permission to publish.
- Add official contact and social links.
- Set the production domain in `app/layout.tsx` metadata once confirmed.
