import { create } from "zustand";
import type { CartItem, Product } from "../types/types";

interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Product, size?: string) => void;
  updateQuantity: (id: number, change: number) => void;
  removeFromCart: (id: number) => void;
  getCartTotal: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],

  addToCart: (product, size = "M") =>
    set((state) => {
      const existing = state.cartItems.find(
        (item) => item.id === product.id && item.size === size
      );

      if (existing) {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      const newItem: CartItem = {
        ...product,
        size,
        quantity: 1,
        tag: product.tag ?? "",
        category: product.category ?? "",
      };

      return { cartItems: [...state.cartItems, newItem] };
    }),

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

  clearCart: () => set({ cartItems: [] }),
}));
