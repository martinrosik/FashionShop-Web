import { Routes, Route } from "react-router-dom";
import HomePage from "./home/_layout/HomePage";
import LoginPage from "./account/login/Login";
import RegisterPage from "./account/register/Register";
import CartPage from "./cart/_layout/CartPage";
import ContactPage from "./contact/_layout/ContactPage";
import AboutPage from "./about/_layout/AboutPage";
import CheckoutPage from "./checkout/_layout/CheckoutPage";
import CollectionPage from "./collection/_layout/CollectionPage";
import NewPage from "./new/_layout/NewPage";
import FaqPage from "./faq/_layout/FaqPage";
import FavoritesPage from "./favorites/_layout/FavoritesPage";
import AppointmentPage from "./appointment/_layout/AppointmenPage";
import NotFoundPage from "./notfound/_layout/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/collections" element={<CollectionPage />} />
      <Route path="/new" element={<NewPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/book-appointment" element={<AppointmentPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
