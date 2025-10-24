import {
  X,
  Bell,
  ShoppingBag,
  Users,
  MessageSquare,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface Notification {
  id: number;
  type: "order" | "customer" | "message" | "system" | "success";
  title: string;
  description: string;
  time: string;
  unread: boolean;
  link?: string;
}

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
  onMarkAsRead: (id: number) => void;
  onMarkAllAsRead: () => void;
}

export default function NotificationsModal({
  isOpen,
  onClose,
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
}: NotificationsModalProps) {
  if (!isOpen) return null;

  const getNotificationIcon = (type: Notification["type"]) => {
    switch (type) {
      case "order":
        return <ShoppingBag className="w-5 h-5 text-blue-500" />;
      case "customer":
        return <Users className="w-5 h-5 text-green-500" />;
      case "message":
        return <MessageSquare className="w-5 h-5 text-purple-500" />;
      case "system":
        return <AlertCircle className="w-5 h-5 text-orange-500" />;
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getNotificationColor = (type: Notification["type"]) => {
    switch (type) {
      case "order":
        return "bg-blue-50 border-blue-200";
      case "customer":
        return "bg-green-50 border-green-200";
      case "message":
        return "bg-purple-50 border-purple-200";
      case "system":
        return "bg-orange-50 border-orange-200";
      case "success":
        return "bg-green-50 border-green-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-black/20" />
      <div
        className="absolute top-16 right-8 w-96 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
          <div>
            <h3 className="font-semibold text-lg">Notifications</h3>
            <p className="text-sm text-gray-500">
              {unreadCount} unread {unreadCount === 1 ? "message" : "messages"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <button
                onClick={onMarkAllAsRead}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Mark all read
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p>No notifications</p>
              <p className="text-sm">You're all caught up!</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                  notification.unread ? "bg-blue-50/50" : ""
                } ${getNotificationColor(notification.type)}`}
                onClick={() => onMarkAsRead(notification.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-sm text-gray-900 leading-tight">
                        {notification.title}
                      </p>
                      {notification.unread && (
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {notification.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 font-medium py-2 rounded-lg hover:bg-blue-50 transition-colors">
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
