import { useState } from "react";

export default function NewComponent() {
  const [filter, setFilter] = useState("All");

  const newArrivals = [
    {
      id: 1,
      name: "Velvet Evening Dress",
      category: "Dresses",
      price: 280,
      image:
        "https://images.unsplash.com/photo-1614314242623-5f6e2c19f4ab?w=600&h=700&fit=crop",
    },
    {
      id: 2,
      name: "Tailored Wool Blazer",
      category: "Outerwear",
      price: 310,
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=700&fit=crop",
    },
    {
      id: 3,
      name: "Cropped Silk Top",
      category: "Dresses",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1601333144109-0d1e38fd9a1e?w=600&h=700&fit=crop",
    },
    {
      id: 4,
      name: "Suede Tote Bag",
      category: "Accessories",
      price: 230,
      image:
        "https://images.unsplash.com/photo-1585386959984-a41552231693?w=600&h=700&fit=crop",
    },
    {
      id: 5,
      name: "Minimal Leather Boots",
      category: "Accessories",
      price: 260,
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5e1e1b4?w=600&h=700&fit=crop",
    },
    {
      id: 6,
      name: "Structured Trench Coat",
      category: "Outerwear",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5e1e1b4?w=600&h=700&fit=crop",
    },
  ];

  const filteredItems =
    filter === "All"
      ? newArrivals
      : newArrivals.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light mb-12 text-center tracking-tight">
          New Arrivals
        </h1>

        {/* Filter */}
        <div className="flex justify-center mb-12 space-x-8 text-sm tracking-widest font-sans">
          {["All", "Dresses", "Outerwear", "Accessories"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`uppercase pb-1 border-b-2 transition-colors ${
                filter === cat
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-gray-800 text-lg font-light mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">${item.price}</p>
                <button className="w-full bg-black text-white py-3 text-xs tracking-widest hover:bg-gray-800 transition-colors">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <p className="text-center text-gray-500 mt-24 font-sans">
            No new arrivals in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
