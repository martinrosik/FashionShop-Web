import { useEffect } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useUIStore } from "./stores/uiStore";
import Navigation from "./components/layout/Navigation";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FaqPage from "./pages/FaqPage";
import ProductPage from "./pages/ProductPage";
import CollectionPage from "./pages/CollectionPage";
import ContactPage from "./pages/ContactPage";
import FavoritesPage from "./pages/FavoritesPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import CheckoutPage from "./pages/CheckoutPage";

function MainLayout() {
  const location = useLocation();
  const { setScrolled } = useUIStore();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  return (
    <>
      <Navigation />
      <MobileMenu />
      <Outlet />
      {isHome && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/*" element={<div>404 Page not Found</div>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
