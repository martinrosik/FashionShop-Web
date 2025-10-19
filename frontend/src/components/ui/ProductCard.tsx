import { Heart, ShoppingCart } from "lucide-react";
import { useCartStore } from "../../stores/cartStore";
import { useFavoritesStore } from "../../stores/favoritesStore";
import type { Product } from "../../types/types";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  showHeart?: boolean;
}

export default function ProductCard({
  product,
  onClick,
  showHeart = true,
}: ProductCardProps) {
  const { addToCart } = useCartStore();
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useFavoritesStore();

  const favorite = isFavorite(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    favorite ? removeFromFavorites(product.id) : addToFavorites(product);
  };

  return (
    <div className="group cursor-pointer relative" onClick={onClick}>
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
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

        {showHeart && (
          <button
            type="button"
            onClick={handleToggleFavorite}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition-all"
            aria-label="Toggle favorite"
          >
            <Heart
              className={`w-5 h-5 transition-all ${
                favorite ? "fill-red-500 text-red-500" : "text-gray-800"
              }`}
            />
          </button>
        )}
      </div>

      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600 font-medium mb-2">${product.price}</p>

      <button
        onClick={handleAddToCart}
        className="bg-gray-900 text-white w-full py-2 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
      >
        <ShoppingCart className="w-4 h-4" /> Add to Cart
      </button>
    </div>
  );
}
