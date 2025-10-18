import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <div className="animate-fadeIn">
        <h1 className="text-[8rem] md:text-[10rem] font-light tracking-tight text-gray-900 mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-500 font-sans text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          We couldn’t find the page you were looking for. It might have been
          moved, renamed, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-12 py-4 bg-black text-white tracking-widest text-sm hover:bg-gray-800 transition-colors"
          >
            RETURN HOME
          </Link>
          <Link
            to="/collections"
            className="px-12 py-4 border-2 border-black text-black tracking-widest text-sm hover:bg-black hover:text-white transition-colors"
          >
            VIEW COLLECTIONS
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 text-gray-400 text-xs tracking-widest">
        © {new Date().getFullYear()} ÉLÉGANCE — All Rights Reserved
      </div>
    </div>
  );
}
