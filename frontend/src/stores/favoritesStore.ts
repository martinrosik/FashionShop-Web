import { create } from "zustand";
import type { Product } from "../types/types";

interface FavoritesState {
  favorites: Product[];
  removeFromFavorites: (id: number) => void;
}

export const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: [
    {
      id: 3,
      name: "Cashmere Sweater",
      price: 189,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop",
      tag: "Sale",
      category: "",
    },
    {
      id: 4,
      name: "Wide Leg Trousers",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      tag: "New",
      category: "",
    },
  ],
  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),
}));
