"use client";

import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "next/navigation";

export default function CartSummary() {
  const total = useCartStore((state) => state.total());
  const itemCount = useCartStore((state) => state.itemCount());
  const clearCart = useCartStore((state) => state.clearCart); 
  const router = useRouter();

  function handleCheckout() {
    router.push("/cart/checkout/success")
    console.log ("items, total", itemCount, total)
    clearCart();
    console.log("cart clearing")
  }

return (
  <div>
    <div>
      <h2>Order summary</h2>

      <div className="">
        <span>Items</span>
        <span>{itemCount}</span>
      </div>

      <div className="">
        <span>Total</span>
        <span>{total.toFixed(2)} kr</span>
      </div>
    </div>

    <button onClick={handleCheckout}  className="w-full">
      Checkout
    </button>
  </div>
);
}