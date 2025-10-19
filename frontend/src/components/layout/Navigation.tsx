import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, Heart, User } from "lucide-react";
import SearchResults from "../ui/SearchResults";
import { useUIStore } from "../../stores/uiStore";
import { useCartStore } from "../../stores/cartStore";
import { allProducts } from "../../data/products";
import type { Product } from "../../types";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const {
    scrolled,
    isMenuOpen,
    setIsMenuOpen,
    showSearch,
    setShowSearch,
    searchQuery,
    setSearchQuery,
  } = useUIStore();
  const { cartItems } = useCartStore();

  const filteredProducts: Product[] = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navbarSolid = scrolled || !isHome;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        navbarSolid
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            <span
              className={`transition-colors duration-300 ${
                navbarSolid ? "text-gray-900" : "text-white"
              }`}
            >
              LUXE
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Collection", path: "/collection" },
              { name: "Contact", path: "/contact" },
              { name: "FAQ", path: "/faq" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 font-medium ${
                  navbarSolid
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Search
              className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${
                navbarSolid ? "text-gray-700" : "text-white"
              }`}
              onClick={() => setShowSearch(!showSearch)}
            />
            <Heart
              className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${
                navbarSolid ? "text-gray-700" : "text-white"
              }`}
              onClick={() => navigate("/favorites")}
            />
            <User
              className={`w-5 h-5 cursor-pointer transition-colors duration-300 ${
                navbarSolid ? "text-gray-700" : "text-white"
              }`}
              onClick={() => navigate("/profile")}
            />
            <div
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBag
                className={`w-5 h-5 transition-colors duration-300 ${
                  navbarSolid ? "text-gray-700" : "text-white"
                }`}
              />
              <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    navbarSolid ? "text-gray-700" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    navbarSolid ? "text-gray-700" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {showSearch && (
          <SearchResults
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredProducts={filteredProducts}
            setShowSearch={setShowSearch}
          />
        )}
      </div>
    </nav>
  );
}
