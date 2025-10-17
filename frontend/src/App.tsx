import { Routes, Route } from "react-router-dom";
import HomePage from "./home/_layout/HomePage";
import LoginPage from "./account/login/Login";
import RegisterPage from "./account/register/Register";
import CartPage from "./cart/_layout/CartPage";
import ContactPage from "./contact/_layout/ContactPage";
import AboutPage from "./about/_layout/AboutPage";
import CheckoutPage from "./checkout/_layout/CheckoutPage";

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
    </Routes>
  );
}

export default App;
