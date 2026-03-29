This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


# JSFW 2025 - JavaScript Frameworks Assignment

A Next.js e-commerce storefront.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
