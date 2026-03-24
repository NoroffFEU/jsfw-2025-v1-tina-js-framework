import { create } from "zustand";

// import { persist } from "zustand/middleware"
import { CartItem } from "@/types";

// create the zustand store
interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
  itemCount: () => number;
}

export const useCartStore = create<CartStore>()((set, get) => ({ 
  items: [],
  
 addItem: (item) => {
  set((state) => {
    const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
    
    if (existingItem) {
      return {
        items: state.items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      };
    }
    
    return {
      items: [...state.items, { ...item, quantity: 1 }]
    };
  });
},

  removeItem: (id) => {
    set ({
        items: get().items.filter((item) => item.id !==id),
    });
   
  },
  
  updateQuantity: (id, quantity) => {
    
  },
  
  clearCart: () => {
    
  },
  
  total: () => {
   
    return 0;
  },
  
  itemCount: () => {
   
    return 0;
  },
}));



//   total:

//       addItem:
//   removeItem:
// //

//   useCartStore
//   set state

// export const useCartStore
