import { Product } from "@/schemas/productSchema";
import Image from "next/image";
import ReviewSection from "@/components/reviews/Reviews";
// card for product details should contain:

// image
// title
// description
// price
// price discount
// rating
//tags need to be mapped out
// reviews

export default function ProductDetailsCard({ product }: { product: Product }) {
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
        
          />
       </div>
       <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <div>{product.rating}</div>
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
        <div className="">
            <span
            className="inline-block bg-amber-100  px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.tags}</span></div>
        <div className="">
          {product.price}
          {product.discountedPrice}
        </div>
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
      <ReviewSection reviews={product.reviews}/>
    </div>
  );
}
