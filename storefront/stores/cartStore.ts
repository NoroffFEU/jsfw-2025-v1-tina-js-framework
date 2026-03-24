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
    const existingItem = get().items.find(
      (cartItem) => cartItem.id === item.id,
    );
    if (existingItem) {
      set({
        items: get().items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      });
    } else {
      set({
        items: [...get().items, { ...item, quantity: 1 }],
      });
    }
  },

  removeItem: (id) => {
    set({
      items: get().items.filter((item) => item.id !== id),
    });
  },

  updateQuantity: (id, quantity) => {
    if (quantity < 1) {
      get().removeItem(id);
    } else {
      set({
        items: get().items.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        ),
      });
    }
  },

  clearCart: () => set({ items: [] }),

  total: () =>
    get().items.reduce(
      (sum, item) => sum + item.discountedPrice * item.quantity,
      0,
    ),

  itemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
}));

//   total:

//       addItem:
//   removeItem:
// //

//   useCartStore
//   set state

// export const useCartStore
