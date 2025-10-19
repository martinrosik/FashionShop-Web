import { useState } from "react";
import type { Message } from "../../pages/AdminPage";
import MessageDetailModal from "../adminPanel/modals/MessageDetailModal";

interface MessagesPageProps {
  messages: Message[];
}

export default function MessagesPage({ messages }: MessagesPageProps) {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [showMessageDetail, setShowMessageDetail] = useState(false);
  const [messagesState, setMessagesState] = useState<Message[]>(messages);

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    setShowMessageDetail(true);
  };

  const handleUpdateStatus = (messageId: number, newStatus: string) => {
    setMessagesState((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, status: newStatus } : msg
      )
    );
  };

  const handleReply = (messageId: number, reply: string) => {
    // Here you would typically send the reply via API
    console.log(`Replying to message ${messageId}:`, reply);
    // Update the message status to "Replied"
    handleUpdateStatus(messageId, "Replied");
  };

  const handleCloseModal = () => {
    setShowMessageDetail(false);
    setSelectedMessage(null);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Messages</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {messagesState.map((message, idx) => (
          <div
            key={message.id}
            onClick={() => handleMessageClick(message)}
            className={`p-6 ${
              idx !== messagesState.length - 1 ? "border-b border-gray-200" : ""
            } hover:bg-gray-50 transition-colors cursor-pointer`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                  {message.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{message.name}</p>
                  <p className="text-sm text-gray-500">{message.email}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">{message.date}</p>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
            </div>
            <h3 className="font-semibold mb-2">{message.subject}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {message.message}
            </p>
          </div>
        ))}
      </div>

      {showMessageDetail && selectedMessage && (
        <MessageDetailModal
          message={selectedMessage}
          onClose={handleCloseModal}
          onUpdateStatus={handleUpdateStatus}
          onReply={handleReply}
        />
      )}
    </div>
  );
}
