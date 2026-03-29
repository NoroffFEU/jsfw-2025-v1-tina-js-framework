"use client";

import { useToastStore } from "@/stores/toastStore";
import { useCartStore } from "@/stores/cartStore";
import { Product } from "@/schemas/productSchema";

export function CartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const showToast = useToastStore((state) => state.showToast);

  return (
    <button
      onClick={() => {
        addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          discountedPrice: product.discountedPrice,
          quantity: 1,
        });
        showToast(`${product.title} added to cart`);
      }}
      aria-label={`Add ${product.title} to cart`}
      className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3 px-4 rounded-none w-full"
    >
      Add to Cart
    </button>
  );
}
