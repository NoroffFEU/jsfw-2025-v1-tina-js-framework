"use client";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "next/navigation";

export default function CartSummary() {
  const total = useCartStore((state) => state.total());
  const itemCount = useCartStore((state) => state.itemCount());
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter();

  function handleCheckout() {
    router.push("/cart/checkout/success");
    clearCart();
  }

  return (
    <div className="mt-6 bg-indigo-50 border border-indigo-100 p-6 sm:p-8">
      <h2 className="font-heading font-bold text-indigo-950 text-xl mb-6">
        Order summary
      </h2>
      <div className="flex flex-col gap-2">
        <div className="text-sm text-indigo-800 flex justify-between">
          <span>Items</span>
          <span>{itemCount}</span>
        </div>

        <div className="flex justify-between pt-6 border-t border-indigo-100">
          <span className="font-bold text-indigo-900">Total</span>

          <span className="font-bold text-lg text-indigo-900">
            {currencyFormatter(total)}
          </span>
        </div>
      </div>
      <div className="pt-3">
        <button
          onClick={handleCheckout}
          className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-3 px-4 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
