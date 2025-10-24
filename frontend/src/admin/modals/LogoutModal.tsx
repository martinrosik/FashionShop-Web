interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({
  isOpen,
  onClose,
  onConfirm,
}: LogoutModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 z-50
                 bg-black/50 backdrop-blur-sm"
      onClick={onClose} // Click outside closes modal
    >
      <div
        className="bg-white rounded-lg max-w-sm w-full shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent inside clicks from closing
      >
        <div className="p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">!</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Logout</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to logout of your account?
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
