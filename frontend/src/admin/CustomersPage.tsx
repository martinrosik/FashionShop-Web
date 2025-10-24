import { Eye, MessageSquare } from "lucide-react";
import type { Customer } from "./AdminPage";

interface CustomersPageProps {
  customers: Customer[];
}

export default function CustomersPage({ customers }: CustomersPageProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Customers</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Customer
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Orders
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Total Spent
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Joined
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
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-sm text-gray-500">{customer.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{customer.orders}</td>
                <td className="px-6 py-4 font-semibold">${customer.spent}</td>
                <td className="px-6 py-4 text-gray-600">{customer.joined}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      customer.status === "VIP"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MessageSquare className="w-4 h-4 text-blue-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
