import type { Product, HeroSlide, FaqItem } from "../_shared/types/types";

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Silk Minimal Dress",
    price: 289,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
    tag: "New",
    category: "Dresses",
  },
  {
    id: 2,
    name: "Leather Jacket",
    price: 459,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop",
    tag: "Trending",
    category: "Outerwear",
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop",
    tag: "Sale",
    category: "Knitwear",
  },
  {
    id: 4,
    name: "Wide Leg Trousers",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    tag: "New",
    category: "Bottoms",
  },
  {
    id: 5,
    name: "Blazer Set",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=600&fit=crop",
    tag: "Trending",
    category: "Outerwear",
  },
  {
    id: 6,
    name: "Evening Gown",
    price: 589,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=600&fit=crop",
    tag: "New",
    category: "Dresses",
  },
  {
    id: 7,
    name: "Wool Coat",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop",
    tag: "Sale",
    category: "Outerwear",
  },
  {
    id: 8,
    name: "Satin Blouse",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=600&fit=crop",
    tag: "New",
    category: "Tops",
  },
];

export const heroSlides: HeroSlide[] = [
  {
    title: "Spring Collection 2025",
    subtitle: "Elegance Redefined",
    bg: "from-rose-600 to-pink-700",
  },
  {
    title: "Minimalist Luxury",
    subtitle: "Less is More",
    bg: "from-slate-800 to-slate-900",
  },
  {
    title: "Bold & Beautiful",
    subtitle: "Make a Statement",
    bg: "from-amber-600 to-orange-700",
  },
];

export const faqData: FaqItem[] = [
  {
    q: "What is your return policy?",
    a: "We offer a 30-day return policy on all items. Items must be unworn, unwashed, and in original condition with tags attached. Free returns on all orders.",
  },
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available at checkout. International shipping times vary by location.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes! We ship to over 100 countries worldwide. Shipping costs and delivery times vary by destination.",
  },
  {
    q: "How do I track my order?",
    a: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in the "My Orders" section of your account.',
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and Shop Pay.",
  },
  {
    q: "How do I know what size to order?",
    a: "Each product page includes a detailed size guide. You can also contact our customer service team for personalized sizing advice.",
  },
];
