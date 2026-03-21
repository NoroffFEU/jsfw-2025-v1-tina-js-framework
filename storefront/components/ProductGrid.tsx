
import { Products } from "@/types";
import { Card } from "./ui/card/Card";

type ProductsGrid = {
  products: Products[];
};

export default function ProductsGrid ({ products }: ProductsGrid) {
      if (products.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="text-lg">No products found.</p>
      </div>
    );
  }

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} />
      ))}
    </div>
  );
}