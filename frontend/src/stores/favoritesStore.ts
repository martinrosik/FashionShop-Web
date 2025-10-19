import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/types";

interface FavoritesState {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addToFavorites: (product) =>
        set((state) => {
          if (state.favorites.some((item) => item.id === product.id))
            return state;
          return { favorites: [...state.favorites, product] };
        }),

      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== id),
        })),

      isFavorite: (id) => get().favorites.some((item) => item.id === id),

      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "favorites-storage",
      getStorage: () => localStorage,
    }
  )
);
