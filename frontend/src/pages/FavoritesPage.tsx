import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useFavoritesStore } from "../stores/favoritesStore";

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { favorites, removeFromFavorites } = useFavoritesStore();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Your Favorites</h1>

        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-24 h-24 mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-semibold mb-4">No favorites yet</h2>
            <p className="text-gray-600 mb-8">Start adding items you love</p>
            <button
              onClick={() => navigate("/collection")}
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all"
            >
              Browse Collection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {favorites.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {product.tag && (
                    <span className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 text-sm font-semibold">
                      {product.tag}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => removeFromFavorites(product.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-all"
                    aria-label={`Remove ${product.name} from favorites`}
                  >
                    <Heart className="w-5 h-5 fill-red-500 text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 font-medium mb-4">
                    ${product.price}
                  </p>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold">
                    Add to Cart
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
