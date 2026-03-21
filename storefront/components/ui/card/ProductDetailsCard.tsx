import { Product } from "@/schemas/productSchema";
import Image from "next/image";
// card for product details should contain:

// image
// title
// description
// price
// price discount
// rating
// reviews

export default function ProductDetailsCard({ product }: { product: Product }) {
  return (
    <div className="">
      <div className="">
        {/* image */}
        <div className="">
          <Image
            src={product.image.url}
            alt={product.image.alt}
            height={100}
            width={100}
           
          />
        </div>
        <h3 className="text-lg font-medium mb-2">{product.title}</h3>
        <div>{product.rating}</div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div>{product.tags}</div>
        <div>
          {product.price}
          {product.discountedPrice}
        </div>
        <div>
          <button
            aria-label={`Add ${product.title} to cart`}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
