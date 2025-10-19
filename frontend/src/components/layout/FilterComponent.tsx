import { useState, useEffect } from "react";
import { Filter, X } from "lucide-react";
import type { Product } from "../../types/types.ts";

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

// Predefined filter options based on your product data structure
const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $400", min: 200, max: 400 },
  { label: "Over $400", min: 400, max: Infinity },
];

// Extract unique categories, sizes, and tags from products
const getUniqueValues = (products: Product[], key: keyof Product): string[] => {
  const values = products
    .map((product) => product[key])
    .filter((value): value is string => value !== undefined && value !== "");

  return Array.from(new Set(values)).sort();
};

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

  const [sortBy, setSortBy] = useState<string>("featured");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get unique values from products for filter options
  const categories = ["All", ...getUniqueValues(products, "category")];
  const sizes = getUniqueValues(products, "size");
  const tags = getUniqueValues(products, "tag");

  // Apply filters whenever filters or sortBy changes
  useEffect(() => {
    const filteredProducts = applyFilters(products, filters);
    const sortedProducts = sortProducts(filteredProducts, sortBy);
    onFilterChange(sortedProducts);
  }, [filters, sortBy, products, onFilterChange]);

  const applyFilters = (
    productsToFilter: Product[],
    currentFilters: FilterState
  ): Product[] => {
    return productsToFilter.filter((product) => {
      // Category filter
      if (
        currentFilters.categories.length > 0 &&
        !currentFilters.categories.includes("All")
      ) {
        if (
          !product.category ||
          !currentFilters.categories.includes(product.category)
        ) {
          return false;
        }
      }

      // Price range filter
      if (currentFilters.priceRanges.length > 0) {
        const matchesPriceRange = currentFilters.priceRanges.some(
          (rangeLabel) => {
            const range = priceRanges.find((r) => r.label === rangeLabel);
            if (!range) return false;
            return product.price >= range.min && product.price <= range.max;
          }
        );
        if (!matchesPriceRange) return false;
      }

      // Size filter
      if (currentFilters.sizes.length > 0) {
        if (!product.size || !currentFilters.sizes.includes(product.size)) {
          return false;
        }
      }

      // Tag filter
      if (currentFilters.tags.length > 0) {
        if (!product.tag || !currentFilters.tags.includes(product.tag)) {
          return false;
        }
      }

      return true;
    });
  };

  const sortProducts = (
    productsToSort: Product[],
    sortMethod: string
  ): Product[] => {
    const sorted = [...productsToSort];
    switch (sortMethod) {
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
      case "featured":
      default:
        return sorted;
    }
  };

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => {
      if (category === "All") {
        return {
          ...prev,
          categories: prev.categories.includes("All") ? [] : ["All"],
        };
      }

      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories.filter((c) => c !== "All"), category];

      return { ...prev, categories: newCategories };
    });
  };

  const handlePriceRangeChange = (priceRange: string) => {
    setFilters((prev) => ({
      ...prev,
      priceRanges: prev.priceRanges.includes(priceRange)
        ? prev.priceRanges.filter((p) => p !== priceRange)
        : [...prev.priceRanges, priceRange],
    }));
  };

  const handleSizeChange = (size: string) => {
    setFilters((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleTagChange = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      priceRanges: [],
      sizes: [],
      tags: [],
    });
    setSortBy("featured");
  };

  const getActiveFilterCount = () => {
    return (
      filters.categories.length +
      filters.priceRanges.length +
      filters.sizes.length +
      filters.tags.length
    );
  };

  const FilterSection = ({
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

  const FilterCheckbox = ({
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
          className="w-4 h-4 rounded border-2 border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2"
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

  const FilterButton = ({
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
      className={`px-4 py-2 rounded-lg border-2 transition-all font-medium text-sm relative ${
        selected
          ? "border-gray-900 bg-gray-900 text-white"
          : "border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900"
      }`}
      type="button"
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

  // Count products for each filter option
  const getCategoryCount = (category: string) => {
    if (category === "All") return products.length;
    return products.filter((product) => product.category === category).length;
  };

  const getSizeCount = (size: string) => {
    return products.filter((product) => product.size === size).length;
  };

  const getTagCount = (tag: string) => {
    return products.filter((product) => product.tag === tag).length;
  };

  const desktopFilters = (
    <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-xl">Filters</h3>
        <Filter className="w-5 h-5" />
      </div>

      {/* Active Filters & Clear */}
      {getActiveFilterCount() > 0 && (
        <div className="mb-6 p-3 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">
              Active Filters ({getActiveFilterCount()})
            </span>
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Clear all
            </button>
          </div>
        </div>
      )}

      {/* Category Filter */}
      {categories.length > 0 && (
        <FilterSection title="Category">
          <div className="space-y-1">
            {categories.map((category) => (
              <FilterCheckbox
                key={category}
                label={category}
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                count={getCategoryCount(category)}
              />
            ))}
          </div>
        </FilterSection>
      )}

      {/* Price Filter */}
      <FilterSection title="Price Range">
        <div className="space-y-1">
          {priceRanges.map((range) => (
            <FilterCheckbox
              key={range.label}
              label={range.label}
              checked={filters.priceRanges.includes(range.label)}
              onChange={() => handlePriceRangeChange(range.label)}
            />
          ))}
        </div>
      </FilterSection>

      {/* Size Filter */}
      {sizes.length > 0 && (
        <FilterSection title="Size">
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <FilterButton
                key={size}
                label={size}
                selected={filters.sizes.includes(size)}
                onClick={() => handleSizeChange(size)}
                count={getSizeCount(size)}
              />
            ))}
          </div>
        </FilterSection>
      )}

      {/* Tag Filter */}
      {tags.length > 0 && (
        <FilterSection title="Tags">
          <div className="space-y-1">
            {tags.map((tag) => (
              <FilterCheckbox
                key={tag}
                label={tag}
                checked={filters.tags.includes(tag)}
                onChange={() => handleTagChange(tag)}
                count={getTagCount(tag)}
              />
            ))}
          </div>
        </FilterSection>
      )}
    </div>
  );

  const mobileFilters = (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={() => setIsMobileFiltersOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-all"
      >
        <Filter className="w-4 h-4" />
        Filters
        {getActiveFilterCount() > 0 && (
          <span className="bg-gray-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {getActiveFilterCount()}
          </span>
        )}
      </button>

      {/* Mobile Filter Overlay */}
      {isMobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-end">
          <div className="bg-white h-full w-80 max-w-full overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">Filters</h3>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4">
              {desktopFilters}

              {/* Apply Filters Button for Mobile */}
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold mt-4"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <>
      {mobileFilters}

      {/* Desktop Filters */}
      <div className="hidden lg:block md:w-64 flex-shrink-0">
        {desktopFilters}
      </div>
    </>
  );
}
