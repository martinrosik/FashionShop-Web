import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type { Address } from "../../../_shared/types/types";

interface AddressesModalProps {
  isOpen: boolean;
  onClose: () => void;
  addresses: Address[];
  onSaveAddress: (addressData: Omit<Address, "id">, addressId?: number) => void;
  onDeleteAddress: (addressId: number) => void;
}

type AddressFormData = Omit<Address, "id">;

export default function AddressesModal({
  isOpen,
  onClose,
  addresses,
  onSaveAddress,
  onDeleteAddress,
}: AddressesModalProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [formData, setFormData] = useState<AddressFormData>({
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    isDefault: false,
  });

  if (!isOpen) return null;

  const handleAddNew = (): void => {
    setEditingAddress(null);
    setFormData({
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States",
      isDefault: addresses.length === 0,
    });
    setIsEditing(true);
  };

  const handleEdit = (address: Address): void => {
    setEditingAddress(address);
    setFormData(address);
    setIsEditing(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSaveAddress(formData, editingAddress?.id);
    setIsEditing(false);
    setEditingAddress(null);
  };

  const handleCancel = (): void => {
    setIsEditing(false);
    setEditingAddress(null);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose} // Clicking outside closes the modal
    >
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Manage Addresses</h2>
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
                <h3 className="text-lg font-semibold">Saved Addresses</h3>
                <button
                  onClick={handleAddNew}
                  className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all font-semibold"
                >
                  Add New Address
                </button>
              </div>

              <div className="space-y-4">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className="border-2 border-gray-100 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold">{address.name}</h4>
                          {address.isDefault && (
                            <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">{address.street}</p>
                        <p className="text-gray-600">
                          {address.city}, {address.state} {address.zipCode}
                        </p>
                        <p className="text-gray-600">{address.country}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(address)}
                          className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                          Edit
                        </button>
                        {!address.isDefault && (
                          <button
                            onClick={() => onDeleteAddress(address.id)}
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
                {editingAddress ? "Edit Address" : "Add New Address"}
              </h3>

              <div>
                <label className="block font-semibold mb-2">Address Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Home, Work, etc."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleChange}
                  className="w-4 h-4"
                  id="defaultAddress"
                />
                <label htmlFor="defaultAddress" className="font-semibold">
                  Set as default address
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
                  {editingAddress ? "Update Address" : "Add Address"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
