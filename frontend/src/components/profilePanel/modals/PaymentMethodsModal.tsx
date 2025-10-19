import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { PaymentMethod } from "../../../types";

interface PaymentMethodsModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentMethods: PaymentMethod[];
  onSavePayment: (
    paymentData: Omit<PaymentMethod, "id">,
    paymentId?: number
  ) => void;
  onDeletePayment: (paymentId: number) => void;
  onSetDefault: (paymentId: number) => void;
}

type PaymentFormData = Omit<PaymentMethod, "id">;

export default function PaymentMethodsModal({
  isOpen,
  onClose,
  paymentMethods,
  onSavePayment,
  onDeletePayment,
  onSetDefault,
}: PaymentMethodsModalProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingPayment, setEditingPayment] = useState<PaymentMethod | null>(
    null
  );
  const [formData, setFormData] = useState<PaymentFormData>({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    isDefault: false,
  });

  if (!isOpen) return null;

  const handleAddNew = (): void => {
    setEditingPayment(null);
    setFormData({
      name: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      isDefault: paymentMethods.length === 0,
    });
    setIsEditing(true);
  };

  const handleEdit = (payment: PaymentMethod): void => {
    setEditingPayment(payment);
    setFormData({
      ...payment,
      cvv: "", // Don't show actual CVV for security
    });
    setIsEditing(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSavePayment(formData, editingPayment?.id);
    setIsEditing(false);
    setEditingPayment(null);
  };

  const handleCancel = (): void => {
    setIsEditing(false);
    setEditingPayment(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const formatCardNumber = (number: string): string => {
    return number.replace(/(\d{4})/g, "$1 ").trim();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Payment Methods</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {!isEditing ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Saved Payment Methods</h3>
                <button
                  onClick={handleAddNew}
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all font-semibold"
                >
                  Add New Card
                </button>
              </div>

              <div className="space-y-4">
                {paymentMethods.map((payment) => (
                  <div
                    key={payment.id}
                    className="border-2 border-gray-100 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{payment.name}</h4>
                          {payment.isDefault && (
                            <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">
                          {formatCardNumber(payment.cardNumber)}
                        </p>
                        <p className="text-gray-600">
                          Expires {payment.expiryDate}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {!payment.isDefault && (
                          <button
                            onClick={() => onSetDefault(payment.id)}
                            className="text-blue-600 hover:text-blue-800 font-semibold"
                          >
                            Set Default
                          </button>
                        )}
                        <button
                          onClick={() => handleEdit(payment)}
                          className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Edit
                        </button>
                        {!payment.isDefault && (
                          <button
                            onClick={() => onDeletePayment(payment.id)}
                            className="text-red-600 hover:text-red-800 font-semibold"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={onClose}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">
                {editingPayment
                  ? "Edit Payment Method"
                  : "Add New Payment Method"}
              </h3>

              <div>
                <label className="block font-semibold mb-2">Name on Card</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleChange}
                  className="w-4 h-4"
                  id="defaultPayment"
                />
                <label htmlFor="defaultPayment" className="font-semibold">
                  Set as default payment method
                </label>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
                >
                  {editingPayment ? "Update Card" : "Add Card"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
