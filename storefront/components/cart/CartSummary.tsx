//useCartStore

// export default function CartSummary() {
//   const total = useCartStore((state) => state.total());
//   const itemCount = useCartStore((state) => state.itemCount());
  
  // function to handleCheckout() 


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

      <button onClick={handleCheckout} className="w-full">
        Checkout
      </button>
    </div>
  );

