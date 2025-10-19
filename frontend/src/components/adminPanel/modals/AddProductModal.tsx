import { X, Upload } from "lucide-react";

interface AddProductModalProps {
  setShowAddProduct: (show: boolean) => void;
}

export default function AddProductModal({
  setShowAddProduct,
}: AddProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-2xl font-bold">Add New Product</h2>
          <button
            onClick={() => setShowAddProduct(false)}
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
              placeholder="Enter product name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-2">Price</label>
              <input
                type="number"
                placeholder="$0.00"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Stock</label>
              <input
                type="number"
                placeholder="0"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2">Category</label>
            <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none">
              <option>Select category</option>
              <option>Dresses</option>
              <option>Tops</option>
              <option>Bottoms</option>
              <option>Outerwear</option>
              <option>Knitwear</option>
              <option>Accessories</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">Description</label>
            <textarea
              rows={4}
              placeholder="Product description..."
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-2">Product Images</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-600 mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2">Available Sizes</label>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <label
                  key={size}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-900 transition-all"
                >
                  <input type="checkbox" className="rounded" />
                  <span className="font-medium">{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => setShowAddProduct(false)}
              className="flex-1 px-6 py-3 border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-all font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
