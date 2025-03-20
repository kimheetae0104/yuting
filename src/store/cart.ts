import { create } from "zustand";

interface CartState {
  cart: { id: number; name: string; price: number }[];
  addToCart: (item: { id: number; name: string; price: number }) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({ cart: [...state.cart, item] })),
}));
