import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onLogoutClick: () => void;
}

export default function SidebarComponent({
  currentPage,
  setCurrentPage,
  onLogoutClick,
}: SidebarProps) {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, page: "dashboard" },
    { name: "Products", icon: Package, page: "products" },
    { name: "Orders", icon: ShoppingBag, page: "orders" },
    { name: "Customers", icon: Users, page: "customers" },
    { name: "Messages", icon: MessageSquare, page: "messages" },
    { name: "Settings", icon: Settings, page: "settings" },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2">LUXE</h1>
        <p className="text-gray-400 text-sm">Admin Panel</p>
      </div>
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setCurrentPage(item.page)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              currentPage === item.page
                ? "bg-white text-gray-900"
                : "hover:bg-gray-800"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </button>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button
          onClick={onLogoutClick}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
