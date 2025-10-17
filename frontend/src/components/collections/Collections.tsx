import { useState } from "react";
import CollectionCard from "../collectionCard/CollectionCard";

export default function Collections({ collections }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCollections =
    activeCategory === "all"
      ? collections
      : collections.filter((item) => item.category === activeCategory);

  const categories = ["all", "dresses", "evening", "coats"];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif mb-6">Our Collections</h2>
          <div className="flex justify-center space-x-8 text-sm tracking-wide mt-8 font-sans">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 transition-all ${
                  activeCategory === cat
                    ? "border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
