import { Product } from "@/schemas/productSchema";
import Image from "next/image";
import ReviewSection from "@/components/product/Reviews";
import TagsSection from "@/components/product/Tags";
import RatingSection from "@/components/product/Rating";
import { CartButton } from "@/components/CartButton";

export default function ProductDetailsCard({ product }: { product: Product }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-body">
      <div className="bg-indigo-50 border border-indigo-100 grid md:grid-cols-2 gap-8 md:p-12 sm:p-6">
        <div className="overflow-hidden">
          <CardHeader product={product} />
        </div>
        <div className="flex flex-col space-y-6">
          <CardMain product={product} />
          <div className="">
            <CardFooter product={product} />
          </div>
          <div className="pt-2">
            <CartButton product={product} />
          </div>
        </div>

      </div>
        <div className="mt-12">
          <ReviewSection reviews={product.reviews} />
        </div>
    </div>
  );
}

export function CardHeader({ product }: { product: Product }) {
  const hasDiscount = product.discountedPrice < product.price;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100,
      )
    : 0;
  return (
    <div className="relative">
      <Image
        className="w-full"
        src={product.image.url}
        alt={product.image.alt}
        width={700}
        height={700}
        
      />
      {hasDiscount && (
        <div className="absolute top-0 left-0 bg-indigo-100 text-indigo-800 px-2 py-1 m-2 rounded-md text-sm font-medium">
          -{discountPercent}%
        </div>
      )}
    </div>
  );
}

export function CardMain({ product }: { product: Product }) {
  return (
    <div className="space-y-6">
      <h2 className="font-heading font-bold text-indigo-950 text-3xl">{product.title}</h2>
      <RatingSection rating={product.rating} />
      <p className="font-body text-indigo-900">{product.description}</p>
      <TagsSection tags={product.tags} />
    </div>
  );
}

export function CardFooter({ product }: { product: Product }) {
  const hasDiscount = product.discountedPrice < product.price;

  return (
    <div className="flex items-baseline gap-3 font-heading">
      {hasDiscount && (
        <div className="line-through text-indigo-300 font-light">
          {" "}
          {product.price.toFixed(2)}
        </div>
      )}
      <div className="text-2xl font-bold text-indigo-900">{product.discountedPrice.toFixed(2)}</div>
    </div>
  );
}

// export function AddToCartButton({ product }: { product: Product }) {
//   return (
//     <button
//       aria-label={`Add ${product.title} to cart`}
//       className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-none w-full"
//     >
//       Add to Cart
//     </button>
//   );
// }
