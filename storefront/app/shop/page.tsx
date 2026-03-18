import { ProductsResponseSchema } from "@/schemas/productSchema";
import { z } from "zod";

const API_URL = process.env.NOROFF_API_KEY;
if (!API_URL) {
  throw new Error("API not foundt in .env");
}

export async function getProducts() {
  const response = await fetch(`${API_URL}/online-shop`, {
    next: { revalidate: 240 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  const data = await response.json();

  const parsed = ProductsResponseSchema.safeParse(data);

  if (!parsed.success) {
    const formattedError = z.treeifyError(parsed.error);
    console.error(formattedError);
    throw new Error("Invalid API response");
  }

  return parsed.data.data;
}
export default async function Shop() {
  const products = await getProducts();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <h3>{product.price}</h3>
        </div>
      ))}
    </div>
  );
}
