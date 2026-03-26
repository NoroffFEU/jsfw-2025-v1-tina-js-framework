
import { getProducts } from "@/services/api";
import { ProductGrid } from "@/components/ProductGrid";
import { useSelectedLayoutSegments } from "next/navigation";

export default async function ProductsPage() {
const segments = useSelectedLayoutSegments
    const products = await getProducts();

    return (
     
      <div className="">
          <ul>
      {segments.map((segment, index) => (
        <li key={index}>{segment}</li>
      ))}
    </ul>
  
        <h1 className="text-2xl font-bold">Products</h1>
        <ProductGrid products={products} />
      </div>
    )

  
  }