# JSFW 2025 - JavaScript Frameworks Assignment

A Next.js e-commerce storefront.

Hosted by Vercel: https://jsfw-2025-v1-tina-js-framework.vercel.app/

## Project Structure

The Next.js application is located in the `/storefront` folder.

## Tech Stack

- Next.js 16 
- TypeScript
- Tailwind CSS
- Zustand 
- Zod 
- React Hook Form

## Getting Started

1. Navigate to the storefront folder:
   ```bash
   cd storefront

2. Install dependencies:
npm install

3. Create a .env.local file:
NOROFF_API_KEY=https://v2.api.noroff.dev

> Note: despite the name, this variable holds the **base API URL**, not a secret key.

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features
- **Home page** — hero section with sale products and live search
- **Shop page** — full product grid
- **Product page** — image, price with discount badge, rating, reviews, tags, add to cart
- **Search** — client-side, debounced, dropdown with links to product pages
- **Cart** — add, remove, update quantity, persistent across page refreshes via localStorage
- **Checkout** — clears cart and redirects to confirmation page
- **Contact form** — validated with Zod + React Hook Form, redirects to success page on submit

##API
Base URL is set via `NOROFF_API_KEY` in `.env.local`.

 ##API Endpoints
`GET /online-shop` - Fetch all products
`GET /online-shop/<id>` - Fetch single product

## Limitations

- The contact form does **not** send data to backend or email service. On submit it validates the input and redirects to a success page.
- The checkout flow is simulated, no payment processing.

