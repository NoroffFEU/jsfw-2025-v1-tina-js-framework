import Image from "next/image";
import { getProducts } from "@/services/api";

export async function Card() {
  const products = await getProducts();
  const product = products[0];

  const hasDiscount = product.discountedPrice < product.price;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100,
      )
    : 0;

  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-sm hover:shadow-md">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          className="object-cover"
          src={product.image.url}
          alt={product.image.alt}
          fill
        />
        {/* calculate discount */}
        {hasDiscount && (
          <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            -{discountPercent}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex gap-5">
          <span className="font-bold text-lg line-through">{product.price}</span>
          <span className="font-bold text-lg">{product.discountedPrice}</span>
          </div>
          <div>
          <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
          </div>
        
      </div>
    </div>
  );
}
