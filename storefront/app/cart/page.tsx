"use client";
import CartItemHandler from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  return (
    <div className="">
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-6 py-18  text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            className="size-20 text-indigo-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <h2 className="text-2xl"> Cart is currently empty!</h2>
          <p className="text-sm">
            Please check out the product page to add items to your cart.
          </p>
          <div className="py-6">
            <Link href="shop/" className="underline hover:text-indigo-600 ">
              Back to Store
            </Link>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <h1 className="text-2xl text-black font-bold mb-6 ">My Cart</h1>
          {items.map((item) => (
            <CartItemHandler key={item.id} item={item} />
          ))}
          <CartSummary />
        </>
      )}
    </div>
  );
}
