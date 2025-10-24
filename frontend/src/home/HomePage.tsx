import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import CategoryCard from "../components/ui/CategoryCard";
import ProductCard from "../components/ui/ProductCard";
import { heroSlides, allProducts } from "../data/products";
import type { Category } from "../_shared/types/types";

export default function HomePage() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`w-full h-full bg-gradient-to-br ${slide.bg} flex items-center justify-center`}
            >
              <div className="text-center text-white px-6">
                <h2 className="text-6xl md:text-8xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide">
                  {slide.subtitle}
                </p>
                <button
                  onClick={() => navigate("/collection")}
                  className="bg-white text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto gap-2"
                >
                  Shop Now <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Dresses",
                img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
              },
              {
                name: "Outerwear",
                img: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
              },
              {
                name: "Accessories",
                img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=800&fit=crop",
              },
            ].map((cat: Category, idx: number) => (
              <CategoryCard
                key={idx}
                category={cat}
                onClick={() => navigate("/collection")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => navigate("/product")}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
