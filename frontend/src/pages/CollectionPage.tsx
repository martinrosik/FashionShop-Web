import { useNavigate } from "react-router-dom";
import { Filter } from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import { allProducts } from "../data/products";

export default function CollectionPage() {
  const navigate = useNavigate();

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

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <Filter className="w-5 h-5" />
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Category</h4>
                <div className="space-y-2">
                  {[
                    "All",
                    "Dresses",
                    "Tops",
                    "Bottoms",
                    "Outerwear",
                    "Knitwear",
                  ].map((cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price Range</h4>
                <div className="space-y-2">
                  {[
                    "Under $100",
                    "$100 - $200",
                    "$200 - $400",
                    "Over $400",
                  ].map((price) => (
                    <label
                      key={price}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input type="checkbox" className="rounded" />
                      <span className="text-gray-700">{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h4 className="font-semibold mb-3">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-all"
                      type="button"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-600">{allProducts.length} products</p>
              <select
                className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-gray-900 focus:outline-none"
                aria-label="Sort products"
              >
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => navigate("/product")}
                  showHeart={true}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
