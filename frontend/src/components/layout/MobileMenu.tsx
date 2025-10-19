import { Link } from "react-router-dom";
import { useUIStore } from "../../stores/uiStore";

export default function MobileMenu() {
  const { isMenuOpen, setIsMenuOpen } = useUIStore();
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-white md:hidden pt-20">
      <div className="flex flex-col space-y-6 p-6">
        {[
          { name: "Home", path: "/" },
          { name: "Collection", path: "/collection" },
          { name: "Contact", path: "/contact" },
          { name: "FAQ", path: "/faq" },
          { name: "Login", path: "/login" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-medium text-gray-900 hover:text-rose-600 transition-colors text-left"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
