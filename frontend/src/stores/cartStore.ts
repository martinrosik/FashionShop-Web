// stores/cartStore.ts
import { create } from "zustand";
import type { CartItem, Product } from "../types/types";

interface CartState {
  cartItems: CartItem[];
  addToCart: (product: Product, size?: string) => void;
  updateQuantity: (id: number, size: string, change: number) => void;
  removeFromCart: (id: number, size?: string) => void;
  getCartTotal: () => number;
  clearCart: () => void;
}

const CART_STORAGE_KEY = "my_cart";

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]"),

  addToCart: (product, size = "M") =>
    set((state) => {
      const existing = state.cartItems.find(
        (item) => item.id === product.id && item.size === size
      );

      let updatedCart: CartItem[];
      if (existing) {
        updatedCart = state.cartItems.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const newItem: CartItem = {
          ...product,
          size,
          quantity: 1,
          tag: product.tag ?? "",
          category: product.category ?? "",
        };
        updatedCart = [...state.cartItems, newItem];
      }

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
      return { cartItems: updatedCart };
    }),

  updateQuantity: (id, size, change) =>
    set((state) => {
      const updatedCart = state.cartItems.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      );
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
      return { cartItems: updatedCart };
    }),

  removeFromCart: (id, size) =>
    set((state) => {
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== id || (size && item.size !== size)
      );
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
      return { cartItems: updatedCart };
    }),

  getCartTotal: () =>
    get().cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),

  clearCart: () => {
    localStorage.removeItem(CART_STORAGE_KEY);
    set({ cartItems: [] });
  },
}));
