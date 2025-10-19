import { X } from "lucide-react";
import type { Product } from "../../../pages/AdminPage";

interface EditProductModalProps {
  product: Product;
  setShowEditProduct: (show: boolean) => void;
}

export default function EditProductModal({
  product,
  setShowEditProduct,
}: EditProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-2xl font-bold">Edit Product</h2>
          <button
            onClick={() => setShowEditProduct(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form className="p-6 space-y-6">
          <div>
            <label className="block font-semibold mb-2">Product Name</label>
            <input
              type="text"
              defaultValue={product.name}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2">Price</label>
              <input
                type="number"
                defaultValue={product.price}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Stock</label>
              <input
                type="number"
                defaultValue={product.stock}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2">Category</label>
            <select
              defaultValue={product.category}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
            >
              <option>Dresses</option>
              <option>Tops</option>
              <option>Bottoms</option>
              <option>Outerwear</option>
              <option>Knitwear</option>
              <option>Accessories</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">Status</label>
            <select
              defaultValue={product.status}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
            >
              <option>Active</option>
              <option>Draft</option>
              <option>Out of Stock</option>
            </select>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => setShowEditProduct(false)}
              className="flex-1 px-6 py-3 border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-all font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
