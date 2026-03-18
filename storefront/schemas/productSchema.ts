import { z } from "zod";

const ReviewSchema = z.object({
  id: z.string(),
  username: z.string(),
  rating: z.number(),
  description: z.string(),
});

export const ProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discountedPrice: z.number(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  rating: z.number(),
  tags: z.array(z.string()),
  reviews: z.array(ReviewSchema),
});

export const ProductsResponseSchema = z.object({
  data: z.array(ProductSchema),
});

export const SingleProductResponseSchema = z.object({
  data: ProductSchema,
});

export type Review = z.infer<typeof ReviewSchema>;
export type Product = z.infer<typeof ProductSchema>;
