import { create } from "zustand";
import type { CartItem } from "../types/types";

interface CartState {
  cartItems: CartItem[];
  updateQuantity: (id: number, change: number) => void;
  removeFromCart: (id: number) => void;
  getCartTotal: () => number;
  clearCart: () => void; // Add this line
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [
    {
      id: 1,
      name: "Silk Minimal Dress",
      price: 289,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=300&fit=crop",
      quantity: 1,
      size: "M",
      tag: "",
      category: "",
    },
    {
      id: 2,
      name: "Leather Jacket",
      price: 459,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&h=300&fit=crop",
      quantity: 1,
      size: "L",
      tag: "",
      category: "",
    },
  ],
  updateQuantity: (id, change) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      ),
    })),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  getCartTotal: () =>
    get().cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
  clearCart: () => set({ cartItems: [] }), // This method exists but wasn't in the interface
}));
