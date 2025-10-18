import { Link } from "react-router-dom";

export default function Footer() {
  const sections = [
    {
      title: "SHOP",
      links: [
        { name: "New Arrivals", path: "/new" },
        { name: "Dresses", path: "/collections" },
        { name: "Accessories", path: "/collections" },
        { name: "Sale", path: "/collections" },
      ],
    },
    {
      title: "HELP",
      links: [
        { name: "Contact Us", path: "/contact" },
        { name: "Shipping", path: "/faq" },
        { name: "Returns", path: "/faq" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    {
      title: "FOLLOW US",
      links: [
        { name: "Instagram", path: "#" },
        { name: "Facebook", path: "#" },
        { name: "Twitter", path: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl font-serif mb-4">ÉLÉGANCE</h3>
          <p className="text-gray-600 text-sm font-sans">
            Timeless fashion for the modern woman.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="font-serif mb-4 tracking-wide">{section.title}</h4>
            <ul className="space-y-2 text-sm text-gray-600 font-sans">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500 font-sans">
        <p>© 2025 Élégance. All rights reserved.</p>
      </div>
    </footer>
  );
}
