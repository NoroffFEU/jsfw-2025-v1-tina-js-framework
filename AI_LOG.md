# AI Usage Report
**Course:** JavaScript Frameworks 

## Introduction

The goal of this project was to build a functional e-commerce storefront, and learn about modern frameworks, state management and validation. I used AI as a supportive tool rather than a code generator. My focus was on trying to learn and understand and that influenced how I used AI and the decisions I made during development.

## How AI Was Used

The AI tools I worked with were Claude Sonnet and v0 by Vercel. I tried to avoid using them to generate complete solutions. Instead, I asked for explanations, architectural guidance, feedback and reviews on my own implementations.

One of the main uses of AI was to understand technical concepts and errors. When I hit issues that were difficult to interpret, AI helped break down error messages and explain what was happening. After completing features, I shared my code to check if it followed best practices.

AI also assisted with project structure and planning. I generated an initial folder structure, but found it too advanced for my current level. I then simplified it to better fit my assignment. AI also helped outline user flows and testing scenarios. Additionally it suggested ideas for cart layout which I refined by looking at real-world examples from online stores.

## AI Usage

When I was working with API data validation using Zod. I initially misunderstood the structure of the parsed data and attempted to access `parsed.data` as if it were the final dataset, when the actual data was nested inside `parsed.data.data`. AI helped me identify where the error was and clarified how validated data is structured.

Another usage was about hydration errors in Next.js when using Zustand's persist middleware. The issue occurred because the server renders default state, while the client loads persisted state from localStorage, causing a mismatch. With guidance from AI, I implemented a hydration-safe pattern using a mounted state flag. This ensured that client-specific data was only rendered after hydration, resolving the issue and improving my understanding of server-side rendering.

AI was helpful in identifying inconsistencies in import paths and explaining the difference between using relative paths and the `@/` alias in Next.js. Additionally, it clarified warnings related to Tailwind CSS and development environment limitations.

AI provided help for the star rating system by pointing out that linearGradient could be used in the half star

When working on search functionality, AI helped explain how to use `useEffect` together with debouncing to improve performance. Since the product list is fetched once and filtered client-side, the debounce delays filtering on each keystroke, avoiding unnecessary re-renders.

For forms, I used React Hook Form in combination with Zod. AI helped me understand how validation works through the resolver and how to maintain type safety across the form, allowing me to implement the solution independently.

AI was used for reading thru my notes, reflections and comments that where written through out the project. I was used to check for spelling errors and to give the written submissions a better structure.

## Reflection on AI Usage

A valuable aspect of using AI in this project was its ability to explain why certain issues existed, rather than simply providing a solution. It also helped identify version-specific issues and gave a better understanding of the overall flow of things.

I know the risk of relying too much on AI and using generated code without fully understanding it. I tried to avoid this by focusing on explanations, reviewing suggestions and implementing features myself. AI functioned as a teacher, reviewer, and guide in the project. I feel it supported my learning process and allowed me to develop a more practical understanding of the technologies involved.