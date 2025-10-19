import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import FilterComponent from "../components/layout/FilterComponent";
import { allProducts } from "../data/products";
import type { Product } from "../types/types.ts";

export default function CollectionPage() {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);
  const [sortBy, setSortBy] = useState<string>("featured");

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            All Collection
          </h1>
          <p className="text-xl text-gray-600">Discover our latest pieces</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Component */}
          <FilterComponent
            products={allProducts}
            onFilterChange={setFilteredProducts}
          />

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <p className="text-gray-600">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
                  aria-label="Sort products"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600 mb-4">
                  No products match your filters
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => navigate(`/product/${product.id}`)}
                    showHeart={true}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
