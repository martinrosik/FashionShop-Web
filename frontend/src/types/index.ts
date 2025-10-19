export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  tag?: string;
  category?: string;
  quantity?: number;
  size?: string;
}

export interface CartItem extends Product {
  quantity: number;
  size: string;
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  bg: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Category {
  name: string;
  img: string;
}

export interface AppState {
  currentPage: string;
  isMenuOpen: boolean;
  scrolled: boolean;
  currentSlide: number;
  searchQuery: string;
  showSearch: boolean;
  selectedSize: string;
  selectedColor: string;
  openFaq: number | null;
}

export interface AppActions {
  setCurrentPage: (page: string) => void;
  setIsMenuOpen: (open: boolean) => void;
  setCurrentSlide: (slide: number) => void;
  setSearchQuery: (query: string) => void;
  setShowSearch: (show: boolean) => void;
  setSelectedSize: (size: string) => void;
  setSelectedColor: (color: string) => void;
  setOpenFaq: (faq: number | null) => void;
}

export type AppProps = AppState &
  AppActions & {
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
    favorites: Product[];
    setFavorites: React.Dispatch<React.SetStateAction<Product[]>>;
    updateQuantity: (id: number, change: number) => void;
    removeFromCart: (id: number) => void;
    removeFromFavorites: (id: number) => void;
    cartTotal: number;
  };

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

export interface Address {
  id: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface PaymentMethod {
  id: number;
  name: string;
  cardNumber: string;
  expiryDate: string;
  cvv?: string;
  isDefault: boolean;
}

export interface Settings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  promotionalEmails: boolean;
  profileVisibility: "public" | "private" | "friends";
  dataSharing: boolean;
  twoFactorAuth: "disabled" | "email" | "sms" | "app";
  loginNotifications: "all" | "unknown" | "none";
  language: string;
  timezone: string;
  currency: string;
}

export interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
}

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  tag: string;
  category: string;
}
