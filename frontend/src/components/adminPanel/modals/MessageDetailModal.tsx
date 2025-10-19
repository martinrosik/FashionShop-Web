import { useState, useEffect } from "react";
import { X, Reply, Check, Archive, Trash2 } from "lucide-react";
import type { Message } from "../../../pages/AdminPage";

interface MessageDetailModalProps {
  message: Message;
  onClose: () => void;
  onUpdateStatus?: (messageId: number, newStatus: string) => void;
  onReply?: (messageId: number, reply: string) => void;
}

export default function MessageDetailModal({
  message,
  onClose,
  onUpdateStatus,
  onReply,
}: MessageDetailModalProps) {
  const [replyText, setReplyText] = useState("");
  const [isReplying, setIsReplying] = useState(false);
  const [localStatus, setLocalStatus] = useState(message.status);

  // Sync localStatus if message prop changes
  useEffect(() => {
    setLocalStatus(message.status);
  }, [message.status]);

  const handleReply = () => {
    if (replyText.trim() && onReply) {
      onReply(message.id, replyText);
      setReplyText("");
      setIsReplying(false);
      setLocalStatus("Replied");
      if (onUpdateStatus) {
        onUpdateStatus(message.id, "Replied");
      }
    }
  };

  const handleUpdateStatus = (newStatus: string) => {
    setLocalStatus(newStatus);
    if (onUpdateStatus) {
      onUpdateStatus(message.id, newStatus);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-2xl font-bold">{message.subject}</h2>
            <p className="text-gray-500 text-sm mt-1">From: {message.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Sender Info */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {message.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{message.name}</h3>
              <p className="text-gray-600">{message.email}</p>
              <p className="text-sm text-gray-500 mt-1">{message.date}</p>
            </div>
            <span
              className={`ml-auto px-3 py-1 rounded-full text-sm font-semibold ${
                localStatus === "Unread"
                  ? "bg-blue-100 text-blue-700"
                  : localStatus === "Replied"
                  ? "bg-green-100 text-green-700"
                  : localStatus === "Archived"
                  ? "bg-gray-100 text-gray-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {localStatus}
            </span>
          </div>

          {/* Message Content */}
          <div className="bg-gray-50 rounded-xl p-6 text-gray-700 leading-relaxed whitespace-pre-wrap">
            {message.message}
          </div>

          {/* Reply Section */}
          <div className="space-y-4">
            {!isReplying ? (
              <button
                onClick={() => setIsReplying(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all font-semibold"
              >
                <Reply className="w-4 h-4" />
                Reply to Message
              </button>
            ) : (
              <div className="space-y-4">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={5}
                  placeholder="Type your reply..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
                />
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setIsReplying(false);
                      setReplyText("");
                    }}
                    className="flex-1 px-6 py-3 border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-all font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleReply}
                    disabled={!replyText.trim()}
                    className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Send Reply
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="pt-4 border-t border-gray-200">
            <h4 className="font-semibold mb-3">Quick Actions</h4>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleUpdateStatus("Unread")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  localStatus === "Unread"
                    ? "bg-blue-200 text-blue-800"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                }`}
              >
                <Check className="w-4 h-4" />
                Mark as Unread
              </button>
              <button
                onClick={() => handleUpdateStatus("Read")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  localStatus === "Read"
                    ? "bg-gray-300 text-gray-900"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Check className="w-4 h-4" />
                Mark as Read
              </button>
              <button
                onClick={() => handleUpdateStatus("Replied")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  localStatus === "Replied"
                    ? "bg-green-200 text-green-800"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                <Check className="w-4 h-4" />
                Mark as Replied
              </button>
              <button
                onClick={() => handleUpdateStatus("Archived")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  localStatus === "Archived"
                    ? "bg-gray-300 text-gray-900"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                <Archive className="w-4 h-4" />
                Archive
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium">
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
