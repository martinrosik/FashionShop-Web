import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, Heart, User } from "lucide-react";
import SearchResults from "../ui/SearchResults";
import { useUIStore } from "../../stores/uiStore";
import { useCartStore } from "../../stores/cartStore";
import { allProducts } from "../../data/products";
import type { Product } from "../../types/types";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/collection" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

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

  const [isSearchDisabled, setIsSearchDisabled] = useState(false);

  const filteredProducts: Product[] = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navbarSolid = scrolled || !isHome;
  const iconColor = navbarSolid ? "text-gray-700" : "text-white";
  const linkColor = navbarSolid
    ? "text-gray-700 hover:text-gray-900"
    : "text-white/90 hover:text-white";

  const toggleSearch = () => {
    if (isSearchDisabled) return;
    setShowSearch(!showSearch);
    setIsSearchDisabled(true);
    setTimeout(() => setIsSearchDisabled(false), 300); // debounce
  };

  // Close search when navigating
  useEffect(() => {
    setShowSearch(false);
  }, [location.pathname, setShowSearch]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        navbarSolid
          ? "bg-white/95 backdrop-blur-none shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight z-50">
          <span
            className={`transition-colors duration-300 ${
              navbarSolid ? "text-gray-900" : "text-white"
            }`}
          >
            LUXE
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition-colors duration-200 font-medium ${linkColor}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 z-50">
          {/* Search */}
          <div className="relative">
            <Search
              className={`w-5 h-5 cursor-pointer transition-transform duration-200 ${iconColor} hover:scale-110`}
              onClick={toggleSearch}
            />
            {showSearch && (
              <div className="absolute right-0 mt-2 w-screen max-w-md md:max-w-lg bg-white rounded-xl shadow-2xl p-4 animate-slide-down z-50 border border-gray-100">
                <SearchResults
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  filteredProducts={filteredProducts}
                  setShowSearch={setShowSearch}
                />
              </div>
            )}
          </div>

          {/* Favorites */}
          <Heart
            className={`w-5 h-5 cursor-pointer transition-transform duration-200 ${iconColor} hover:scale-110`}
            onClick={() => navigate("/favorites")}
          />
          {/* User */}
          <User
            className={`w-5 h-5 cursor-pointer transition-transform duration-200 ${iconColor} hover:scale-110`}
            onClick={() => navigate("/profile")}
          />
          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <ShoppingBag
              className={`w-5 h-5 transition-transform duration-200 ${iconColor} hover:scale-110`}
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${iconColor}`} />
            ) : (
              <Menu className={`w-6 h-6 ${iconColor}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden animate-slide-down">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-6 py-4 text-gray-700 font-medium border-b border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
