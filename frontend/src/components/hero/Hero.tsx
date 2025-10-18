import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient with subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white">
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 animate-fadeIn">
        <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight leading-tight md:leading-[1.1] text-gray-900">
          Timeless <span className="italic">Elegance</span>
        </h1>
        <p className="text-lg md:text-2xl font-light text-gray-600 mb-12 tracking-wide max-w-2xl mx-auto">
          Discover the Spring 2025 Collection — where luxury meets modern
          sophistication.
        </p>

        {/* CTA Button */}
        <button className="group relative px-12 py-4 bg-black text-white tracking-widest text-sm overflow-hidden transition-all duration-300 rounded-md">
          <Link
            to={"/collections"}
            className="relative z-10 flex items-center gap-2"
          >
            EXPLORE NOW
            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
          <span className="absolute inset-0 border-b-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
