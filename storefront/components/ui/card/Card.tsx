
//link to product id
import Image from "next/image";
import { Product, SingleProductResponseSchema } from "@/schemas/productSchema";
import Link from "next/link";

export function Card({ product }: { product: Product }) {
  const hasDiscount = product.discountedPrice < product.price;

  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      )
    : 0;

  return (
    <div className="bg-indigo-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          className="object-cover"
          src={product.image?.url || "/placeholder.jpg"}
          alt={product.image?.alt || product.title}
          fill
        />

        {hasDiscount && (
          <div className="absolute top-0 left-0 bg-amber-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            -{discountPercent}%
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium mb-2">{product.title}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex gap-3 items-center">
          {hasDiscount ? (
            <>
              <span className="font-bold text-lg line-through text-gray-500">
                {(product.price)}
              </span>
              <span className="font-bold text-lg text-red-500">
                {(product.discountedPrice)}
              </span>
            </>
          ) : (
            <span className="font-bold text-lg">
              {(product.price)}
            </span>
          )}
        </div>

        <div className="mt-4">
          <Link href={`/`}>
          <button
            aria-label={`View ${product.title} in details page`}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full"
          > 
            View Product
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}