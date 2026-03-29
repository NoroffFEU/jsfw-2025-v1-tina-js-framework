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

## Technology Choices and Reasoning

At the beginning of the project, I considered continuing with Vite and React Router, as this aligned more closely with what we had covered in the curriculum. But I chose to work with Next.js. A factor in this decision was deployment with Vercel, which requires little to no configuration for Next.js projects. I had previously experienced challenges with Netlify and wanted to explore something else. Next.js is also widely used in the industry and frequently appears in job listings, so I thought it would be beneficial to learn, despite a possible steeper learning curve.

For state management, I chose Zustand over Redux Toolkit. Redux is powerful, but it introduces a significant amount of boilerplate. Zustand felt more intuitive and closer to React's built-in state management.

I used Zod together with TypeScript. The assignment required strict typing, and Zod provided a way to define schemas that work both as runtime validators and as a source of TypeScript types. A key insight during development was understanding the difference between Zod schemas and TypeScript types, and how to use `z.infer<typeof Schema>` to keep them in sync.

For styling, I chose Tailwind CSS even though I was aware that it might slow me down compared to using Bootstrap. I have experience with Bootstrap, but feel that it can look generic. Tailwind challenged me to improve my CSS skills, though it made the process more demanding and time consuming.

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

