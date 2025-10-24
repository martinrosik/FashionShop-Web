import { useEffect } from "react";
import {
  Routes,
  Route,
  Outlet,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useUIStore } from "./_shared/stores/uiStore.ts";
import Navigation from "./components/layout/Navigation";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";
import HomePage from "./home/HomePage";
import CartPage from "./cart/CartPage";
import LoginPage from "./account/login/LoginPage.tsx";
import RegisterPage from "./account/register/RegisterPage.tsx";
import FaqPage from "./faq/FaqPage";
import ProductPage from "./product/ProductPage";
import CollectionPage from "./collection/CollectionPage";
import ContactPage from "./contact/ContactPage";
import FavoritesPage from "./favorites/FavoritesPage";
import ProfilePage from "./account/profile/ProfilePage";
import AdminPage from "./admin/AdminPage";
import CheckoutPage from "./checkout/CheckoutPage";

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
      <Route path="/*" element={<Navigate to="/" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
