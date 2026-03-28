import { getProducts } from "@/services/api";
import { ProductGrid } from "@/components/ProductGrid";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="">
      <h1 className="text-2xl font-heading text-indigo-950 font-bold">Products</h1>
      <ProductGrid products={products} />
    </div>
  );
}
