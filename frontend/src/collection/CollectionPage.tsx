import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import ProductCard from "../components/ui/ProductCard";
import FilterComponent from "../components/layout/FilterComponent";
import { allProducts } from "../data/products";
import type { Product } from "../_shared/types/types.ts";
import { Search } from "lucide-react";

export default function CollectionPage() {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);
  const [displayedProducts, setDisplayedProducts] =
    useState<Product[]>(allProducts);
  const [sortBy, setSortBy] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");

  const sortProducts = (data: Product[], method: string): Product[] => {
    const sorted = [...data];
    switch (method) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "name-asc":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case "newest":
        return sorted.sort((a, b) => b.id - a.id);
      default:
        return sorted;
    }
  };

  // Apply search and sorting whenever relevant state changes
  useEffect(() => {
    const filtered = filteredProducts.filter((product) => {
      if (!searchTerm.trim()) return true;
      const term = searchTerm.toLowerCase();
      return (
        product.name.toLowerCase().includes(term) ||
        product.category?.toLowerCase().includes(term) ||
        product.tag?.toLowerCase().includes(term)
      );
    });

    setDisplayedProducts(sortProducts(filtered, sortBy));
  }, [filteredProducts, sortBy, searchTerm]);

  // Memoize product count text
  const productCountText = useMemo(() => {
    const count = displayedProducts.length;
    return `${count} ${count === 1 ? "product" : "products"}`;
  }, [displayedProducts]);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            All Collection
          </h1>
          <p className="text-xl text-gray-600">Discover our latest pieces</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <FilterComponent
            products={allProducts}
            onFilterChange={setFilteredProducts}
          />

          <main className="flex-1">
            {/* Top Bar: Count, Search, and Sort */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              {/* Product Count */}
              <p className="text-gray-600">{productCountText}</p>

              {/* Search + Sort Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                {/* Search Bar */}
                <div className="relative flex items-center w-full sm:w-64">
                  <Search className="absolute left-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none placeholder-gray-400"
                    aria-label="Search products"
                  />
                </div>

                {/* Sort Dropdown */}
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

            {/* Product Grid */}
            {displayedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600 mb-4">
                  No products match your filters or search
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    window.location.reload();
                  }}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProducts.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onClick={() => navigate(`/product/${p.id}`)}
                    showHeart
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
