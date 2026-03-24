"use client";
import { useCartStore } from "@/stores/cartStore";
import { Product } from "@/schemas/productSchema";

export function CartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state)=> state.items);
  console.log("items added to cart:", items)
  
  return (
    <button
      onClick={() => addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        discountedPrice: product.discountedPrice,
        quantity: 1,
      })}
      aria-label={`Add ${product.title} to cart`}
      className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-none w-full"
    >
      Add to Cart
    </button>
  );
}