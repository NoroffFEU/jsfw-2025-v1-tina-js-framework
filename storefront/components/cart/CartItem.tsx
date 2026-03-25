"use client";

import { useCartStore } from "@/stores/cartStore";
import { CartItem } from "@/types";

interface CartItemProp {
  item: CartItem;
}

export default function CartItemHandler({ item }: CartItemProp) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);



  return (
    <div className="flex items-center gap-4 py-4 p-8 bg-indigo-100 mb-6">
      <div className="flex flex-1 flex-col gap-1">
        <p className="text-sm">{item.quantity} x {item.title}</p>
        <p className="text-sm">
          {item.discountedPrice.toLocaleString()} kr
        </p>
        {item.discountedPrice < item.price && (
          <p className="text-xs line-through">
            {item.price.toLocaleString()} kr
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="bg-indigo-600 text-white text-md font-bold h-8 w-8 border-indigo-900 hover:bg-indigo-900 transition-colors items-center justify-center "
        >
          +
        </button>
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="bg-indigo-600 text-white text-md font-bold h-8 w-8 border border-indigo-900 hover:bg-indigo-900 transition-colors items-center justify-center "
        >
          -
        </button>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <p className="text-sm font-bold w-20 text-right">
          {(item.discountedPrice * item.quantity).toFixed(2)} kr
        </p>
        <button
          onClick={() => removeItem(item.id)}
          className="bg-indigo-600 text-white text-sm font-semibold h-8 w-8 border-indigo-900 hover:bg-indigo-900 transition-colors items-center justify-center "
        >
          x
        </button>
      </div>
    </div>
  );
}
