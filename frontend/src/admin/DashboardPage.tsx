import { DollarSign, ShoppingBag, Package, Users } from "lucide-react";
import type { Product, Order } from "./AdminPage";

interface DashboardPageProps {
  products: Product[];
  orders: Order[];
}

export default function DashboardPage({
  products,
  orders,
}: DashboardPageProps) {
  const stats = [
    {
      title: "Total Revenue",
      value: "$48,574",
      change: "+12.5%",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "+8.2%",
      icon: ShoppingBag,
      color: "bg-blue-500",
    },
    {
      title: "Total Products",
      value: "156",
      change: "+3.1%",
      icon: Package,
      color: "bg-purple-500",
    },
    {
      title: "Total Customers",
      value: "892",
      change: "+15.3%",
      icon: Users,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-green-600 text-sm font-semibold">
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
          <div className="space-y-4">
            {orders.slice(0, 5).map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-gray-600">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${order.total}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6">Top Selling Products</h2>
          <div className="space-y-4">
            {products
              .sort((a, b) => b.sales - a.sales)
              .slice(0, 5)
              .map((product) => (
                <div key={product.id} className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-600">
                      {product.sales} sales
                    </p>
                  </div>
                  <p className="font-bold">${product.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
