import { Product } from "@/schemas/productSchema";
import { Card } from "@/components/ui/card/Card";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid gap-3 md:gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-8">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
