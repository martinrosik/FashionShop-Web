import { useState } from "react";
import { X } from "lucide-react";

export default function FavoritesComponent() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Silk Midi Dress",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1520975922131-2a31f8a9b3eb?w=600&h=700&fit=crop",
    },
    {
      id: 2,
      name: "Leather Handbag",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1589927986089-35812386e10e?w=600&h=700&fit=crop",
    },
    {
      id: 3,
      name: "Minimal Watch",
      price: 210,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=700&fit=crop",
    },
  ]);

  const handleRemove = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light mb-12 text-center">
          Your Favorites
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-500 font-sans">
            You haven't added any items to your favorites yet.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-gray-800 text-lg font-light mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">${item.price}</p>
                  <button className="w-full bg-black text-white py-3 text-xs tracking-widest hover:bg-gray-800 transition-colors mb-2">
                    ADD TO CART
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
