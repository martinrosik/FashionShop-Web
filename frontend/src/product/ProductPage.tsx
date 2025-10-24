import { useState } from "react";
import { Heart, Star } from "lucide-react";
import ProductCard from "../components/ui/ProductCard";
import { allProducts } from "../data/products";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Product Main Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop"
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/4] rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-gray-900 transition-all"
                >
                  <img
                    src={`https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=200&h=300&fit=crop&q=${i}`}
                    alt={`View ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <span className="inline-block bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              New Arrival
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Silk Minimal Dress
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600">(127 reviews)</span>
            </div>

            {/* Price */}
            <p className="text-3xl font-bold mb-6">$289</p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              Crafted from premium silk, this minimal dress embodies understated
              elegance. The fluid silhouette drapes beautifully, making it
              perfect for both daytime sophistication and evening glamour.
              Features include a flattering V-neckline, adjustable straps, and a
              hidden back zipper.
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="block font-semibold mb-3">Select Size</label>
              <div className="flex gap-3">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg border-2 font-semibold transition-all ${
                      selectedSize === size
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-8">
              <label className="block font-semibold mb-3">Select Color</label>
              <div className="flex gap-3">
                {[
                  { name: "black", color: "bg-black" },
                  { name: "white", color: "bg-white border-2 border-gray-300" },
                  { name: "beige", color: "bg-amber-100" },
                  { name: "navy", color: "bg-blue-900" },
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full ${
                      color.color
                    } transition-all ${
                      selectedColor === color.name
                        ? "ring-4 ring-gray-900 ring-offset-2"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold text-lg">
                Add to Cart
              </button>
              <button className="px-6 py-4 border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-all">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-4 border-t pt-6">
              {[
                { title: "Free Shipping", desc: "On orders over $100" },
                { title: "30-Day Returns", desc: "Easy returns and exchanges" },
                { title: "Secure Payment", desc: "Your data is protected" },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold">{feature.title}</p>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
