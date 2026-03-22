import { Product } from "@/schemas/productSchema";
import Image from "next/image";
import ReviewSection from "@/components/product/Reviews";
import TagsSection from "@/components/product/Tags";
import RatingSection from "@/components/product/Rating";
// card for product details should contain:

// price
// price discount
// rating
//tags need to be mapped out

export default function ProductDetailsCard({ product }: { product: Product }) {
      const hasDiscount = product.discountedPrice < product.price;
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      )
    : 0;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="relative">
          <Image
            className="w-full"
            src={product.image.url}
            alt={product.image.alt}
            width={700}
            height={700}
          />  {hasDiscount && (
          <div className="absolute top-0 left-0 bg-amber-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            -{discountPercent}%
          </div>
        )}
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{product.title}</h2>
          <RatingSection rating={product.rating} />
          <p className="text-gray-700 text-base">{product.description}</p>
          <TagsSection tags={product.tags} />

          <div className="flex">
           
            <div className="flex-1">{product.discountedPrice.toFixed(2)}</div> 
            {hasDiscount && (
            <div className="flex-4 line-through"> {product.price.toFixed(2)}</div>
          )}</div>
        </div>
        <div>
          <button
            aria-label={`Add ${product.title} to cart`}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-none w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <ReviewSection reviews={product.reviews} />
    </div>
  );
}
