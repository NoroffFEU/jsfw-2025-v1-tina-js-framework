// Cartitem prop
//display title price quantity
// quantity updates from cartStore
// remove items from cartStore
"use client"

import { useCartStore } from "@/stores/cartStore";
import { CartItem } from "@/types"

interface CartItemProp  {
item: CartItem;
}

export default function CartItemHandler ({item}: CartItemProp) {
    const updateQuantity = useCartStore ((state)=> state.updateQuantity);
    const removeItem = useCartStore ((state)=> state.removeItem);
    return (
        <div>
        <div>
            <p>{item.title}</p>
            <p>{item.discountedPrice}</p>
        </div>
        <div>
 <button
 onClick={()=>updateQuantity(item.id, item.quantity +1)}>+</button>
  <button
 onClick={()=>updateQuantity(item.id, item.quantity -1)}>-</button>
  <button
 onClick={()=>removeItem(item.id)}>x</button>
 <span>{item.quantity}</span>
        </div>
        </div>
    )
}