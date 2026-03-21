import { getProducts } from "@/services/api";
import { ProductDetailsCard} from "@/components/ui/card/ProductDetailsCard";

export default async function ProductsPage() {

    const products = await getProducts();

    return (
      <div className="">
        <h1 className="text-2xl font-bold">Products</h1>
        <ProductGrid products={products} />
      </div>
    )

  
  }