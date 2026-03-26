import Image from "next/image";
import { Product } from "@/schemas/productSchema";
import Link from "next/link";

export function Card({ product }: { product: Product }) {
  const hasDiscount = product.discountedPrice < product.price;

  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100,
      )
    : 0;

  return (
    <div className="bg-white-100 overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            className="object-cover"
            src={product.image?.url || "/placeholder.jpg"}
            alt={product.image?.alt || product.title}
            fill
            sizes="(max-width:250px)"
            loading="eager"
          />

          {hasDiscount && (
            <div className="absolute top-0 left-0 bg-indigo-100 text-indigo-800 px-2 py-1 m-2 text-sm font-medium font-heading">
              -{discountPercent}%
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-heading text-lg font-medium mb-1 text-indigo-950">
            {product.title}
          </h3>

          <p className="font-body text-gray-500 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex gap-3 items-center font-heading">
            {hasDiscount ? (
              <>
                <span className="font-light text-sm line-through text-indigo-300">
                  {product.price}
                </span>
                <span className="font-bold text-lg text-indigo-800">
                  {product.discountedPrice}
                </span>
              </>
            ) : (
              <span className="font-bold text-lg text-indigo-800">
                {product.price}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
