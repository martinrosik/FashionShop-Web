import type { Category } from "../../_shared/types/types";

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <div
      className="relative group overflow-hidden rounded-lg cursor-pointer h-96"
      onClick={onClick}
    >
      <img
        src={category.img}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-end p-6">
        <h3 className="text-white text-3xl font-bold">{category.name}</h3>
      </div>
    </div>
  );
}
