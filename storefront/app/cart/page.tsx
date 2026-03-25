"use client"
import CartItemHandler from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useCartStore } from "@/stores/cartStore";


export default function CartPage() {

    
const items = useCartStore((state) => state.items);
    return (
      <div className="m-12">
        <h1 className="text-2xl text-black-800 font-bold mb-6 ">My Cart</h1>
         {items.map((item)=>
        <CartItemHandler key={item.id} item={item} />)}
        <CartSummary /> 
        
      </div>
    )}
