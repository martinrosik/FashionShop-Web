import { useState } from "react";

export default function Collections() {
  const [filter, setFilter] = useState("All");

  const products = [
    {
      id: 1,
      name: "Silk Midi Dress",
      category: "Women",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1520975922131-2a31f8a9b3eb?w=600&h=700&fit=crop",
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      category: "Men",
      price: 140,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=700&fit=crop",
    },
    {
      id: 3,
      name: "Leather Handbag",
      category: "Accessories",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1589927986089-35812386e10e?w=600&h=700&fit=crop",
    },
    {
      id: 4,
      name: "Linen Shirt",
      category: "Men",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1593032465171-8b6624a8a233?w=600&h=700&fit=crop",
    },
    {
      id: 5,
      name: "Wool Coat",
      category: "Women",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=700&fit=crop",
    },
    {
      id: 6,
      name: "Minimal Watch",
      category: "Accessories",
      price: 210,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=700&fit=crop",
    },
  ];

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light mb-12 text-center">Collections</h1>

        {/* Filter Bar */}
        <div className="flex justify-center mb-12 space-x-8 text-sm tracking-widest font-sans">
          {["All", "Women", "Men", "Accessories"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`uppercase pb-1 border-b-2 transition-colors ${
                filter === category
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-gray-800 text-lg font-light mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">${product.price}</p>
                <button className="w-full bg-black text-white py-3 text-xs tracking-widest hover:bg-gray-800 transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-24 font-sans">
            No items found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
