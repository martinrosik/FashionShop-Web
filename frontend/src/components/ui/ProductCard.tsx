import { Heart } from "lucide-react";
import type { Product } from "../../types";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  showHeart?: boolean;
}

export default function ProductCard({
  product,
  onClick,
  showHeart = false,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
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
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
            aria-label="Add to favorites"
          >
            <Heart className="w-5 h-5" />
          </button>
        )}
      </div>
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600 font-medium">${product.price}</p>
    </div>
  );
}
