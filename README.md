# MTN Investments

Responsive Next.js frontend for MTN Investments, a global digital asset infrastructure company website.

## Overview

The site presents MTN Investments as a holding company for digital asset infrastructure, including tokenization, wallet-based settlement, exchange operations, and EVM-powered rails.

Current pages:

- `/` - landing page with hero, ecosystem, solutions, market access, portfolio preview, and CTA
- `/projects` - project portfolio page
- `/contact` - simple themed contact page for demos, partnerships, and institutional inquiries

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:3000
```

## Environment Variables

Create `.env.local` for local development:

```bash
WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

For Vercel, add the same key in:

```text
Project Settings > Environment Variables
```

The contact form submits to `/api/contact`, and the server route forwards messages to Web3Forms. The access key is never committed to GitHub.

To change the receiving email later, create or use the Web3Forms access key for the new email account, replace `WEB3FORMS_ACCESS_KEY` in Vercel, and redeploy. No code change is required.

## Scripts

```bash
npm run dev
```

Starts the Next.js development server with Webpack.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run typecheck
```

Runs TypeScript checks without emitting files.

## Project Structure

```text
app/
  api/
    contact/
      route.ts          Secure contact form endpoint
  components/
    site.tsx          Shared header, footer, CTA, layout helpers
  contact/
    contact-form.tsx  Client contact form
    page.tsx          Contact page
  projects/
    page.tsx          Projects page
  data.ts             Shared navigation and content data
  globals.css         Tailwind and global CSS
  layout.tsx          Root layout and metadata
  page.tsx            Landing page
public/
  cta-rails.png       CTA/background visual asset
  mtn-logo.png        MTN logo asset
  mtn-logo-card.png   MTN logo card asset
```

## Deployment

This project is ready to deploy on platforms that support Next.js, such as Vercel, Netlify, or a Node.js host.

Typical production flow:

```bash
npm install
npm run build
npm run start
```

## Notes

The build script uses `next build --webpack` because the local Windows environment loaded the WebAssembly SWC binding instead of the native binding, and Next.js requires Webpack mode in that case.
