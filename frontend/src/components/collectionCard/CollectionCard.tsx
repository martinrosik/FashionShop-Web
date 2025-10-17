export default function CollectionCard({ item }) {
  return (
    <div className="group cursor-pointer overflow-hidden shadow-lg rounded-xl">
      <div className="relative overflow-hidden mb-4 aspect-[3/4]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-xl"></div>
        <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white px-8 py-3 text-sm tracking-widest rounded-full shadow-md">
          QUICK VIEW
        </button>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-serif mb-2">{item.name}</h3>
        <p className="text-gray-600 font-sans">{item.price}</p>
      </div>
    </div>
  );
}
