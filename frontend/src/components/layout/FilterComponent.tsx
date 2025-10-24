import { useState, useEffect, useMemo } from "react";
import { Filter, X } from "lucide-react";
import type { Product } from "../../_shared/types/types.ts";

interface FilterState {
  categories: string[];
  priceRanges: string[];
  sizes: string[];
  tags: string[];
}

interface FilterComponentProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
}

const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $400", min: 200, max: 400 },
  { label: "Over $400", min: 400, max: Infinity },
];

const getUniqueValues = (products: Product[], key: keyof Product): string[] =>
  Array.from(
    new Set(
      products
        .map((p) => p[key])
        .filter(
          (val): val is string => typeof val === "string" && val.trim() !== ""
        )
    )
  ).sort();

export default function FilterComponent({
  products,
  onFilterChange,
}: FilterComponentProps) {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRanges: [],
    sizes: [],
    tags: [],
  });

  const [sortBy, setSortBy] = useState("featured");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const categories = useMemo(
    () => ["All", ...getUniqueValues(products, "category")],
    [products]
  );
  const sizes = useMemo(() => getUniqueValues(products, "size"), [products]);
  const tags = useMemo(() => getUniqueValues(products, "tag"), [products]);

  useEffect(() => {
    const filtered = applyFilters(products, filters);
    const sorted = sortProducts(filtered, sortBy);
    onFilterChange(sorted);
  }, [filters, sortBy, products, onFilterChange]);

  const applyFilters = (data: Product[], active: FilterState): Product[] =>
    data.filter((p) => {
      if (
        active.categories.length &&
        !active.categories.includes("All") &&
        !active.categories.includes(p.category ?? "")
      )
        return false;
      if (active.priceRanges.length) {
        const inRange = active.priceRanges.some((label) => {
          const r = priceRanges.find((x) => x.label === label);
          return r && p.price >= r.min && p.price <= r.max;
        });
        if (!inRange) return false;
      }
      if (active.sizes.length && !active.sizes.includes(p.size ?? ""))
        return false;
      if (active.tags.length && !active.tags.includes(p.tag ?? ""))
        return false;
      return true;
    });

  const sortProducts = (data: Product[], method: string): Product[] => {
    const sorted = [...data];
    switch (method) {
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "name-asc":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case "newest":
        return sorted.sort((a, b) => b.id - a.id);
      default:
        return sorted;
    }
  };

  const toggleFilter = (key: keyof FilterState, value: string) =>
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));

  const handleCategoryChange = (cat: string) =>
    setFilters((prev) => {
      if (cat === "All")
        return {
          ...prev,
          categories: prev.categories.includes("All") ? [] : ["All"],
        };
      return {
        ...prev,
        categories: prev.categories.includes(cat)
          ? prev.categories.filter((c) => c !== cat)
          : [...prev.categories.filter((c) => c !== "All"), cat],
      };
    });

  const clearAll = () => {
    setFilters({ categories: [], priceRanges: [], sizes: [], tags: [] });
    setSortBy("featured");
  };

  const countActive = Object.values(filters).reduce(
    (acc, v) => acc + v.length,
    0
  );

  const getCount = (key: keyof Product, value: string) =>
    products.filter((p) => p[key] === value).length;

  const Section = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="mb-8">
      <h4 className="font-semibold mb-4 text-lg">{title}</h4>
      {children}
    </div>
  );

  const Checkbox = ({
    label,
    checked,
    onChange,
    count,
  }: {
    label: string;
    checked: boolean;
    onChange: () => void;
    count?: number;
  }) => (
    <label className="flex items-center justify-between gap-3 cursor-pointer group py-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 rounded border-2 border-gray-300 text-gray-900 focus:ring-gray-900"
        />
        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
          {label}
        </span>
      </div>
      {count !== undefined && (
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {count}
        </span>
      )}
    </label>
  );

  const Button = ({
    label,
    selected,
    onClick,
    count,
  }: {
    label: string;
    selected: boolean;
    onClick: () => void;
    count?: number;
  }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border-2 font-medium text-sm relative transition-all ${
        selected
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900"
      }`}
    >
      {label}
      {count !== undefined && (
        <span
          className={`absolute -top-1 -right-1 text-xs rounded-full w-4 h-4 flex items-center justify-center ${
            selected ? "bg-white text-gray-900" : "bg-gray-900 text-white"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );

  const desktopFilters = (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-xl">Filters</h3>
        <Filter className="w-5 h-5" />
      </div>

      {countActive > 0 && (
        <div className="mb-6 p-3 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Active Filters ({countActive})
            </span>
            <button
              onClick={clearAll}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Clear all
            </button>
          </div>
        </div>
      )}

      {categories.length > 0 && (
        <Section title="Category">
          {categories.map((cat) => (
            <Checkbox
              key={cat}
              label={cat}
              checked={filters.categories.includes(cat)}
              onChange={() => handleCategoryChange(cat)}
              count={getCount("category", cat)}
            />
          ))}
        </Section>
      )}

      <Section title="Price Range">
        {priceRanges.map((r) => (
          <Checkbox
            key={r.label}
            label={r.label}
            checked={filters.priceRanges.includes(r.label)}
            onChange={() => toggleFilter("priceRanges", r.label)}
          />
        ))}
      </Section>

      {sizes.length > 0 && (
        <Section title="Size">
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <Button
                key={s}
                label={s}
                selected={filters.sizes.includes(s)}
                onClick={() => toggleFilter("sizes", s)}
                count={getCount("size", s)}
              />
            ))}
          </div>
        </Section>
      )}

      {tags.length > 0 && (
        <Section title="Tags">
          {tags.map((tag) => (
            <Checkbox
              key={tag}
              label={tag}
              checked={filters.tags.includes(tag)}
              onChange={() => toggleFilter("tags", tag)}
              count={getCount("tag", tag)}
            />
          ))}
        </Section>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Filters */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-all"
      >
        <Filter className="w-4 h-4" />
        Filters
        {countActive > 0 && (
          <span className="bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {countActive}
          </span>
        )}
      </button>

      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white h-full w-80 overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-lg">Filters</h3>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              {desktopFilters}
              <button
                onClick={() => setIsMobileOpen(false)}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold mt-4"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="hidden lg:block md:w-64 flex-shrink-0">
        {desktopFilters}
      </div>
    </>
  );
}
