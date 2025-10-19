import type { Product } from "../../types";

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
  return (
    <div className="mt-4 animate-fade-in">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none text-gray-900"
        autoFocus
      />

      {searchQuery && (
        <div className="mt-2 bg-white rounded-lg shadow-xl max-h-96 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                role="button"
                tabIndex={0}
                className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
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
                  className="w-16 h-20 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {product.name}
                  </h4>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              No products found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
