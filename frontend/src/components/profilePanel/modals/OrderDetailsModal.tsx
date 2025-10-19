import type { Order, OrderItem } from "../../../types";

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
}

export default function OrderDetailsModal({
  isOpen,
  onClose,
  order,
}: OrderDetailsModalProps) {
  if (!isOpen || !order) return null;

  const orderItems: OrderItem[] = [
    { name: "Product 1", price: 249, quantity: 2 },
    { name: "Product 2", price: 125, quantity: 1 },
    { name: "Product 3", price: 99, quantity: 1 },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Order Details - {order.id}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">Order Date</p>
                <p className="text-gray-600">{order.date}</p>
              </div>
              <div>
                <p className="font-semibold">Status</p>
                <p
                  className={`font-semibold ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}
                >
                  {order.status}
                </p>
              </div>
              <div>
                <p className="font-semibold">Total Amount</p>
                <p className="text-lg font-bold">${order.total}</p>
              </div>
              <div>
                <p className="font-semibold">Shipping Address</p>
                <p className="text-gray-600">123 Main St, City, State 12345</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Order Items</h3>
              <div className="space-y-3">
                {orderItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={onClose}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
