import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useFavoritesStore } from "../stores/favoritesStore";
import ProductCard from "../components/ui/ProductCard";

export default function FavoritesPage() {
  const navigate = useNavigate();
  const { favorites, removeFromFavorites } = useFavoritesStore();

  const handleRemoveFavorite = (id: number) => {
    removeFromFavorites(id);
  };

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
              <ProductCard
                key={product.id}
                product={product}
                showHeart={true}
                onClick={() => handleRemoveFavorite(product.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
