"use client";

import { useCartStore } from "@/stores/cartStore";
import { CartItem } from "@/types";
import { currencyFormatter } from "@/utils/currencyFormatter";

interface CartItemProp {
  item: CartItem;
}

export default function CartItemHandler({ item }: CartItemProp) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 p-4 sm:p-6  bg-indigo-50 border border-indigo-100 ">
      <div className="flex flex-1 flex-col gap-1 min-w-0">
        <p className="text-sm font-body font-bold text-indigo-900 truncate">
          {item.title}
        </p>
        <p className="text-sm font-body text-indigo-900 font-bold">
           {currencyFormatter(item.discountedPrice * item.quantity)}
        </p>
        {item.discountedPrice < item.price && (
          <p className="text-xs text-indigo-300 font-light line-through">
            {currencyFormatter(item.price * item.quantity)}
          </p>
        )}
      </div>

      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold h-8 w-8  hover:bg-indigo-100 hover:border-indigo-300 transition-transform  flex items-center justify-center"
        >
          −
        </button>
        <span className="w-8 text-center text-sm font-semibold text-indigo-900">
          {item.quantity}
        </span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold h-8 w-8  hover:bg-indigo-100 hover:border-indigo-300 transition-transform  flex items-center justify-center"
        >
          +
        </button>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        {/* <p className="text-sm text-indigo-900 font-bold w-20 text-right">
          {(item.discountedPrice * item.quantity).toFixed(2)} kr
        </p> */}
        <button
          onClick={() => removeItem(item.id)}
          className="text-indigo-400 hover:text-indigo-900 text-xs underline  transition-transform "
        >
          Remove
        </button>
      </div>
    </div>
  );
}
