"use client";

import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "next/navigation";

export default function CartSummary() {
  const total = useCartStore((state) => state.total());
  const itemCount = useCartStore((state) => state.itemCount());
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter();

  function handleCheckout() {
    router.push("/cart/checkout/success");
    console.log("items, total", itemCount, total);
    clearCart();
    console.log("cart clearing");
  }

  return (
    <div className="flex flex-col gap-2 border border-indigo-200 p-8 bg-indigo-100">
      <h2 className="text-xl">Order summary</h2>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span className="text-md">Items</span>
          <span className="text-md">{itemCount}</span>
        </div>

        <div className="flex justify-between pt-2 border-b">
          <span className="font-semibold">Total</span>
          
          <span className="font-bold text-lg">{total.toLocaleString()} kr</span>
        </div>
      </div>
<div className="pt-8">
       <button
        onClick={handleCheckout}
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-none w-full "
      >
        Checkout
      </button>
    
      </div>
    </div>
  );
}
