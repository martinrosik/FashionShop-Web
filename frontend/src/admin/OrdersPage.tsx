import { Eye } from "lucide-react";
import type { Order } from "./AdminPage";

interface OrdersPageProps {
  orders: Order[];
  updateOrderStatus: (orderId: string, newStatus: string) => void;
  setSelectedOrder: (order: Order) => void;
  setShowOrderDetail: (show: boolean) => void;
}

export default function OrdersPage({
  orders,
  updateOrderStatus,
  setSelectedOrder,
  setShowOrderDetail,
}: OrdersPageProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Orders</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Order ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Customer
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Items
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Total
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-semibold">{order.id}</td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{order.customer}</p>
                    <p className="text-sm text-gray-500">{order.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{order.date}</td>
                <td className="px-6 py-4 text-gray-600">{order.items}</td>
                <td className="px-6 py-4 font-semibold">${order.total}</td>
                <td className="px-6 py-4">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateOrderStatus(order.id, e.target.value)
                    }
                    className={`px-3 py-1 rounded-full text-xs font-semibold border-0 cursor-pointer ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setShowOrderDetail(true);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
