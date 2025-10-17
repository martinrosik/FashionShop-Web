import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Quote from "../../components/quote/Quote";
import Collections from "../../components/collections/Collections";
import Newsletter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";

export default function ElegantFashionShop() {
  const collections = [
    {
      id: 1,
      name: "Spring Elegance",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=1000&fit=crop",
      price: "$299",
      category: "dresses",
    },
    {
      id: 2,
      name: "Midnight Silk",
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop",
      price: "$449",
      category: "evening",
    },
    {
      id: 3,
      name: "Ivory Dreams",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop",
      price: "$359",
      category: "dresses",
    },
    {
      id: 4,
      name: "Classic Noir",
      image:
        "//images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&h=1000&fit=crop",
      price: "$389",
      category: "coats",
    },
    {
      id: 5,
      name: "Rose Petals",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=1000&fit=crop",
      price: "$279",
      category: "dresses",
    },
    {
      id: 6,
      name: "Velvet Touch",
      image:
        "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&h=1000&fit=crop",
      price: "$499",
      category: "evening",
    },
  ];

  https: return (
    <div className="min-h-screen bg-white text-gray-900 font-serif">
      <Navbar />
      <Hero />
      <Quote />
      <Collections collections={collections} />
      <Newsletter />
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out;
        }
      `}</style>
    </div>
  );
}
