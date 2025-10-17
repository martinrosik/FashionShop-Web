export default function Newsletter() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-4xl font-serif mb-6">Join Our Circle</h2>
        <p className="text-gray-400 mb-8 font-sans">
          Subscribe to receive exclusive access to new collections, special
          offers, and style inspiration.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors flex-1 max-w-md rounded-md"
          />
          <button className="px-12 py-4 bg-white text-black tracking-widest text-sm hover:bg-gray-100 transition-colors rounded-md shadow-md">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
}
