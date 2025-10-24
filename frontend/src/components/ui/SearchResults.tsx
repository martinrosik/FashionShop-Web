import { useEffect, useRef } from "react";
import type { Product } from "../../_shared/types/types";

interface SearchResultsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: Product[];
  setCurrentPage: (page: string) => void;
  setShowSearch: (show: boolean) => void;
}

export default function SearchResults({
  searchQuery,
  setSearchQuery,
  filteredProducts,
  setCurrentPage,
  setShowSearch,
}: SearchResultsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowSearch]);

  return (
    <div ref={containerRef} className="relative mt-4 w-full max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-gray-900 focus:outline-none text-gray-900 transition-all duration-200"
        autoFocus
      />

      {searchQuery && (
        <div className="mt-2 bg-white rounded-lg shadow-lg animate-fade-in-up">
          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map((product) => (
                <li
                  key={product.id}
                  role="button"
                  tabIndex={0}
                  className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => {
                    setCurrentPage("product");
                    setShowSearch(false);
                    setSearchQuery("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setCurrentPage("product");
                      setShowSearch(false);
                      setSearchQuery("");
                    }
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-18 object-cover rounded-md"
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium">
                      {product.name}
                    </span>
                    <span className="text-gray-500 text-sm">
                      ${product.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-6 text-center text-gray-500 italic">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
