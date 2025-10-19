import { create } from "zustand";

interface UIState {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (open) => set({ isMenuOpen: open }),
  scrolled: false,
  setScrolled: (scrolled) => set({ scrolled }),
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  showSearch: false,
  setShowSearch: (show) => set({ showSearch: show }),
}));
