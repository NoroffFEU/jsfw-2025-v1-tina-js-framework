
import { getProduct } from "@/services/api";
import ProductDetailsCard from "@/components/ui/card/ProductDetailsCard"

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const {id} = await params;
    const product = await getProduct(id)
console.log ("hello this is ", {product})
  return (
    <div className="">
      <h1 className="text-2xl font-bold">SINGLE PRODUCT LISTING</h1>
       <ProductDetailsCard product={product} />
    </div>
  );
}
