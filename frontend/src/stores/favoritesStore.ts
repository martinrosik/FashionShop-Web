// stores/favoritesStore.ts
import { create } from "zustand";
import type { Product } from "../types/types";

interface FavoritesState {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],

  addToFavorites: (product) =>
    set((state) => {
      // Avoid duplicates
      if (state.favorites.some((item) => item.id === product.id)) return state;
      return { favorites: [...state.favorites, product] };
    }),

  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),

  isFavorite: (id) => get().favorites.some((item) => item.id === id),
}));
