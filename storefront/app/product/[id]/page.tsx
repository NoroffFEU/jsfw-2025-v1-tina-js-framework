import { getProduct } from "@/services/api";
import ProductDetailsCard from "@/components/ui/card/ProductDetailsCard";
import Footer from "@/components/layout/Footer";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  return (

    <div className="bg-indigo-50 space-y-6">
      <ProductDetailsCard product={product} />
      
    </div>
   
  );
}
