import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="relative z-10 text-center px-6 animate-fadeIn">
        <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
          Timeless <span className="italic">Elegance</span>
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-600 mb-12 tracking-wide">
          Discover the Spring 2025 Collection
        </p>
        <button className="group relative px-12 py-4 bg-black text-white tracking-widest text-sm overflow-hidden transition-all hover:px-16 duration-300">
          <span className="relative z-10">EXPLORE NOW</span>
          <ChevronRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
