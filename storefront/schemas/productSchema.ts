import { z } from "zod";

export const ProductSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    price: z.number(),
    discountedPrice: z.number(),
    image: z.object( {
        url: z.string(),
        alt:z.string()
    }),
    rating: z.number(),
    tags: z.array(z.string()),
    // reviews: z.array(z.string()) {
    //     id: z.number(),
    //     username: z.string(),
    //     rating: z.number(),
    //     description: z.string()
    // },
})

export const ProductsResponseSchema = z.object({
  data: z.array(ProductSchema),
});

export type Product = z.infer<typeof ProductSchema>;