
import { Product } from "@/schemas/productSchema";
// card for product details should contain:

// image
// title
// description
// price
// price discount
// rating
// reviews

export default function ProductDetailsCard({ product }: { product: Product }){
      
    return (
        <div>
         <h3 className="text-lg font-medium mb-2">{product.title}</h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
                </div>
    )
}