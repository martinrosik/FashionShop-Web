import { useState } from "react";
import { Search, Bell } from "lucide-react";
import NotificationsModal from "./modals/NotificationsModal";

const mockNotifications = [
  {
    id: 1,
    type: "order" as const,
    title: "New Order Received",
    description: "Order #12346 from Sarah Johnson for $289.00",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "message" as const,
    title: "New Customer Message",
    description: "Michael Lee sent a message about product sizing",
    time: "15 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "customer" as const,
    title: "New Customer Registration",
    description: "Emily Chen just created an account",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 4,
    type: "system" as const,
    title: "Low Stock Alert",
    description: "Wide Leg Trousers is running low on stock",
    time: "3 hours ago",
    unread: false,
  },
  {
    id: 5,
    type: "success" as const,
    title: "Order Shipped",
    description: "Order #12345 has been shipped successfully",
    time: "5 hours ago",
    unread: false,
  },
];

export default function TopBarComponent() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleMarkAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, unread: false }))
    );
  };

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      <div className="fixed top-0 left-64 right-0 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between z-40">
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 outline-none text-gray-700"
          />
        </div>
        <div className="flex items-center gap-6">
          <button className="relative" onClick={handleBellClick}>
            <Bell className="w-6 h-6 text-gray-600 hover:text-gray-700 transition-colors" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <p className="font-semibold text-sm">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>

      <NotificationsModal
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
        notifications={notifications}
        onMarkAsRead={handleMarkAsRead}
        onMarkAllAsRead={handleMarkAllAsRead}
      />
    </>
  );
}
