import { create } from "zustand";

interface ToastStore {
  message: string;
  showToast: (message: string) => void;
  clearToast: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  message: "",
  showToast: (message) => {
    set({ message });
    setTimeout(() => set({ message: "" }), 5000);
  },
  clearToast: () => set({ message: "" }),
}));
