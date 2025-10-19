import { useState } from "react";
import { X, Reply, Check, Archive } from "lucide-react";
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

  const handleReply = () => {
    if (replyText.trim() && onReply) {
      onReply(message.id, replyText);
      setReplyText("");
      setIsReplying(false);
      if (onUpdateStatus) {
        onUpdateStatus(message.id, "Replied");
      }
    }
  };

  const handleUpdateStatus = (newStatus: string) => {
    if (onUpdateStatus) {
      onUpdateStatus(message.id, newStatus);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
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

        <div className="p-6 space-y-6">
          {/* Message Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {message.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{message.name}</h3>
                <p className="text-gray-600">{message.email}</p>
                <p className="text-sm text-gray-500 mt-1">{message.date}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    message.status === "Unread"
                      ? "bg-blue-100 text-blue-700"
                      : message.status === "Replied"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {message.status}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdateStatus("Replied")}
                  className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  <Check className="w-4 h-4" />
                  Mark Replied
                </button>
                <button
                  onClick={() => handleUpdateStatus("Archived")}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                >
                  <Archive className="w-4 h-4" />
                  Archive
                </button>
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-semibold mb-4 text-lg">Message:</h4>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {message.message}
            </p>
          </div>

          {/* Reply Section */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Reply</h3>
              {!isReplying && (
                <button
                  onClick={() => setIsReplying(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Reply className="w-4 h-4" />
                  Reply to Message
                </button>
              )}
            </div>

            {isReplying && (
              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-2 text-sm">
                    Your Reply
                  </label>
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    rows={6}
                    placeholder="Type your reply here..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none resize-none"
                  />
                </div>
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

            {/* Previous Replies */}
            {message.status === "Replied" && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 text-green-700 mb-2">
                  <Check className="w-4 h-4" />
                  <span className="font-semibold">Replied</span>
                </div>
                <p className="text-green-600 text-sm">
                  You have already replied to this message.
                </p>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="border-t pt-6">
            <h4 className="font-semibold mb-4">Quick Actions</h4>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => handleUpdateStatus("Unread")}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm font-medium"
              >
                Mark as Unread
              </button>
              <button
                onClick={() => handleUpdateStatus("Read")}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Mark as Read
              </button>
              <button
                onClick={() => handleUpdateStatus("Replied")}
                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium"
              >
                Mark as Replied
              </button>
              <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium">
                Delete Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
