import { Product } from "@/schemas/productSchema";
import Image from "next/image";
import ReviewSection from "@/components/product/Reviews";
import TagsSection from "@/components/product/Tags";
import RatingSection from "@/components/product/Rating";
import { CartButton } from "@/components/CartButton";
import { currencyFormatter } from "@/utils/currencyFormatter";

export default function ProductDetailsCard({ product }: { product: Product }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-body">
      <div className="bg-indigo-50 border border-indigo-100 grid md:grid-cols-2 gap-8 p-4 sm:p-6 md:p-12">
        <div className="overflow-hidden relative w-full aspect-square">
          <CardHeader product={product} />
        </div>
        <div className="flex flex-col space-y-6">
          <CardMain product={product} />
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
    <div className="relative w-full h-full">
      <Image
        className="w-full object-cover h-full"
        src={product.image.url}
        alt={product.image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
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
      <div className="space-y-2">
        <h2 className="font-heading font-bold text-indigo-950 text-2xl md:text-3xl">
          {product.title}
        </h2>
        <RatingSection rating={product.rating} />
      </div>

      <CardPrice product={product} />
      <CartButton product={product} />

      <hr className="border-indigo-100" />

      <p className="font-body text-base  text-indigo-900 ">
        {product.description}
      </p>
      <TagsSection tags={product.tags} />
    </div>
  );
}

export function CardPrice({ product }: { product: Product }) {
  const hasDiscount = product.discountedPrice < product.price;

  return (
   <div className="flex items-baseline gap-3 font-heading">
  <p className="text-2xl font-bold text-indigo-900">
                 {currencyFormatter(product.discountedPrice)}
  </p>
  {hasDiscount && (
    <p className="line-through text-indigo-300 font-light">
               {currencyFormatter(product.price)}
    </p>
  )}
</div>
  );
}
