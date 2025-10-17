import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Heart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "NEW IN", path: "/new" },
    { name: "COLLECTIONS", path: "/collections" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-serif tracking-widest"
        >
          ÉLÉGANCE
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-sm tracking-wide font-sans">
          {links.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="hover:text-gray-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Search className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
          <Link to="/login">
            <User className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
          </Link>
          <Heart className="w-5 h-5 cursor-pointer hover:text-gray-600 transition-colors" />
          <div className="relative cursor-pointer hover:text-gray-600 transition-colors">
            <Link to="/cart">
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t mt-4 py-6 px-6 space-y-4 transition-all duration-300">
          {links.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="block text-sm tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
