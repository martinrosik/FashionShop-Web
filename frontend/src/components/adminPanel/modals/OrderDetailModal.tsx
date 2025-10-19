import { X } from "lucide-react";
import type { Order } from "../../../pages/AdminPage";

interface OrderDetailModalProps {
  order: Order;
  setShowOrderDetail: (show: boolean) => void;
}

export default function OrderDetailModal({
  order,
  setShowOrderDetail,
}: OrderDetailModalProps) {
  const orderItems = [
    { name: "Silk Minimal Dress", size: "M", qty: 1, price: 289 },
    { name: "Leather Jacket", size: "L", qty: 1, price: 459 },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={() => setShowOrderDetail(false)} // Clicking outside closes modal
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
          <h2 className="text-2xl font-bold">Order Details</h2>
          <button
            onClick={() => setShowOrderDetail(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Customer Information</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium ml-2">{order.customer}</span>
                </p>
                <p>
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium ml-2">{order.email}</span>
                </p>
                <p>
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium ml-2">+1 (555) 987-6543</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Order Information</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-medium ml-2">{order.id}</span>
                </p>
                <p>
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium ml-2">{order.date}</span>
                </p>
                <p>
                  <span className="text-gray-600">Status:</span>
                  <span
                    className={`ml-2 px-2 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-3">Shipping Address</h3>
            <p className="text-sm text-gray-600">
              123 Fashion Avenue
              <br />
              New York, NY 10001
              <br />
              United States
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Order Items</h3>
            <div className="space-y-3">
              {orderItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-20 bg-gray-200 rounded"></div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Size: {item.size} • Qty: {item.qty}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">${item.price}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${order.total}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-2">
                <span>Total</span>
                <span>${order.total}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-all font-semibold">
                Print Invoice
              </button>
              <button className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold">
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
