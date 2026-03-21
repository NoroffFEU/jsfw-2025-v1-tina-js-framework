import ProductsGrid from "@/components/ProductGrid";
import { getProducts } from "@/services/api";

export default async function Shop() {
  const products = await getProducts();
  return (

    <ProductsGrid products={products} />
    
  );
}
