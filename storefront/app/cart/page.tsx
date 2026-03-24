"use client"
import CartItemHandler from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useCartStore } from "@/stores/cartStore";


export default function CartPage() {

    
const items = useCartStore((state) => state.items);
    return (
      <div className="">
        <h1 className="text-2xl font-bold">CART CHECK OUT</h1>
        <CartSummary /> 
        {items.map((item)=>
        <CartItemHandler key={item.id} item={item} />)}
      </div>
    )}
