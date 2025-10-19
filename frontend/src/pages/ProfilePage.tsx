import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditProfileModal from "../components/profilePanel/modals/EditProfileModal";
import AddressesModal from "../components/profilePanel/modals/AddressesModal";
import PaymentMethodsModal from "../components/profilePanel/modals/PaymentMethodsModal";
import SettingsModal from "../components/profilePanel/modals/SettingsModal";
import OrderDetailsModal from "../components/profilePanel/modals/OrderDetailsModal";
import LogoutModal from "../components/profilePanel/modals/LogoutModal";
import type {
  UserData,
  Address,
  PaymentMethod,
  Settings,
  Order,
} from "../types/index.ts";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("Profile");
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] =
    useState<boolean>(false);
  const [isAddressesModalOpen, setIsAddressesModalOpen] =
    useState<boolean>(false);
  const [isPaymentMethodsModalOpen, setIsPaymentMethodsModalOpen] =
    useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] =
    useState<boolean>(false);
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] =
    useState<boolean>(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const [userData, setUserData] = useState<UserData>({
    firstName: "John",
    lastName: "Doe",
    email: "john@email.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-01-01",
  });

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      name: "Home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      isDefault: true,
    },
    {
      id: 2,
      name: "Work",
      street: "456 Office Blvd",
      city: "New York",
      state: "NY",
      zipCode: "10002",
      country: "United States",
      isDefault: false,
    },
  ]);

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: 1,
      name: "John Doe",
      cardNumber: "4111111111111111",
      expiryDate: "12/25",
      isDefault: true,
    },
    {
      id: 2,
      name: "John Doe",
      cardNumber: "5555555555554444",
      expiryDate: "06/24",
      isDefault: false,
    },
  ]);

  const [settings, setSettings] = useState<Settings>({
    emailNotifications: true,
    smsNotifications: false,
    promotionalEmails: true,
    profileVisibility: "public",
    dataSharing: false,
    twoFactorAuth: "disabled",
    loginNotifications: "unknown",
    language: "en",
    timezone: "est",
    currency: "usd",
  });

  const orders: Order[] = [
    {
      id: "#12345",
      date: "Oct 15, 2025",
      status: "Delivered",
      total: 748,
    },
    {
      id: "#12344",
      date: "Oct 10, 2025",
      status: "In Transit",
      total: 289,
    },
    {
      id: "#12343",
      date: "Oct 5, 2025",
      status: "Delivered",
      total: 459,
    },
  ];

  const handleSaveProfile = (updatedData: UserData): void => {
    setUserData(updatedData);
    console.log("Profile updated:", updatedData);
  };

  const handleSaveAddress = (
    addressData: Omit<Address, "id">,
    addressId?: number
  ): void => {
    if (addressId) {
      setAddresses(
        addresses.map((addr) =>
          addr.id === addressId ? { ...addressData, id: addressId } : addr
        )
      );
    } else {
      const newAddress: Address = {
        ...addressData,
        id: Date.now(),
      };
      setAddresses([...addresses, newAddress]);
    }
  };

  const handleDeleteAddress = (addressId: number): void => {
    setAddresses(addresses.filter((addr) => addr.id !== addressId));
  };

  const handleSavePayment = (
    paymentData: Omit<PaymentMethod, "id">,
    paymentId?: number
  ): void => {
    if (paymentId) {
      setPaymentMethods(
        paymentMethods.map((payment) =>
          payment.id === paymentId ? { ...paymentData, id: paymentId } : payment
        )
      );
    } else {
      const newPayment: PaymentMethod = {
        ...paymentData,
        id: Date.now(),
      };
      setPaymentMethods([...paymentMethods, newPayment]);
    }
  };

  const handleDeletePayment = (paymentId: number): void => {
    setPaymentMethods(
      paymentMethods.filter((payment) => payment.id !== paymentId)
    );
  };

  const handleSetDefaultPayment = (paymentId: number): void => {
    setPaymentMethods(
      paymentMethods.map((payment) => ({
        ...payment,
        isDefault: payment.id === paymentId,
      }))
    );
  };

  const handleSaveSettings = (updatedSettings: Settings): void => {
    setSettings(updatedSettings);
    console.log("Settings updated:", updatedSettings);
  };

  const handleViewOrderDetails = (order: Order): void => {
    setSelectedOrder(order);
    setIsOrderDetailsModalOpen(true);
  };

  const handleLogout = (): void => {
    setIsLogoutModalOpen(false);
    navigate("/login");
  };

  interface NavItem {
    name: string;
    active: boolean;
  }

  const navItems: NavItem[] = [
    { name: "Profile", active: activeSection === "Profile" },
    { name: "Orders", active: activeSection === "Orders" },
    { name: "Addresses", active: activeSection === "Addresses" },
    { name: "Payment Methods", active: activeSection === "Payment Methods" },
    { name: "Settings", active: activeSection === "Settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">My Account</h1>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gray-900 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {userData.firstName[0]}
                  {userData.lastName[0]}
                </div>
                <h3 className="font-bold text-lg">
                  {userData.firstName} {userData.lastName}
                </h3>
                <p className="text-gray-600 text-sm">{userData.email}</p>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveSection(item.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      item.active
                        ? "bg-gray-900 text-white"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => setIsLogoutModalOpen(true)}
                  className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all"
                >
                  Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-8">
            {/* Profile Information */}
            {activeSection === "Profile" && (
              <div className="bg-white rounded-lg p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Profile Information</h2>
                  <button
                    onClick={() => setIsEditProfileModalOpen(true)}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
                  >
                    Edit Profile
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold mb-2">
                        First Name
                      </label>
                      <p className="px-4 py-3 rounded-lg bg-gray-50">
                        {userData.firstName}
                      </p>
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">
                        Last Name
                      </label>
                      <p className="px-4 py-3 rounded-lg bg-gray-50">
                        {userData.lastName}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Email</label>
                    <p className="px-4 py-3 rounded-lg bg-gray-50">
                      {userData.email}
                    </p>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Phone</label>
                    <p className="px-4 py-3 rounded-lg bg-gray-50">
                      {userData.phone}
                    </p>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">
                      Date of Birth
                    </label>
                    <p className="px-4 py-3 rounded-lg bg-gray-50">
                      {new Date(userData.dateOfBirth).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Orders */}
            {activeSection === "Orders" && (
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-8">Recent Orders</h2>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      onClick={() => handleViewOrderDetails(order)}
                      className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-lg hover:border-gray-200 transition-all cursor-pointer hover:shadow-md"
                    >
                      <div>
                        <p className="font-semibold">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p
                          className={`text-sm font-semibold ${
                            order.status === "Delivered"
                              ? "text-green-600"
                              : "text-blue-600"
                          }`}
                        >
                          {order.status}
                        </p>
                        <p className="font-bold">${order.total}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Section */}
            {activeSection === "Addresses" && (
              <div className="bg-white rounded-lg p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Saved Addresses</h2>
                  <button
                    onClick={() => setIsAddressesModalOpen(true)}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
                  >
                    Manage Addresses
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      className="border-2 border-gray-100 rounded-lg p-6"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="font-semibold text-lg">
                          {address.name}
                        </h3>
                        {address.isDefault && (
                          <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">{address.street}</p>
                      <p className="text-gray-600">
                        {address.city}, {address.state} {address.zipCode}
                      </p>
                      <p className="text-gray-600">{address.country}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Payment Methods Section */}
            {activeSection === "Payment Methods" && (
              <div className="bg-white rounded-lg p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Payment Methods</h2>
                  <button
                    onClick={() => setIsPaymentMethodsModalOpen(true)}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
                  >
                    Manage Payment Methods
                  </button>
                </div>

                <div className="space-y-4">
                  {paymentMethods.map((payment) => (
                    <div
                      key={payment.id}
                      className="border-2 border-gray-100 rounded-lg p-6"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="font-semibold text-lg">
                          {payment.name}
                        </h3>
                        {payment.isDefault && (
                          <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600">
                        **** **** **** {payment.cardNumber.slice(-4)}
                      </p>
                      <p className="text-gray-600">
                        Expires {payment.expiryDate}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Section */}
            {activeSection === "Settings" && (
              <div className="bg-white rounded-lg p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Account Settings</h2>
                  <button
                    onClick={() => setIsSettingsModalOpen(true)}
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold"
                  >
                    Edit Settings
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Notification Preferences
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        Email Notifications:{" "}
                        {settings.emailNotifications ? "Enabled" : "Disabled"}
                      </p>
                      <p className="text-gray-600">
                        SMS Notifications:{" "}
                        {settings.smsNotifications ? "Enabled" : "Disabled"}
                      </p>
                      <p className="text-gray-600">
                        Promotional Emails:{" "}
                        {settings.promotionalEmails ? "Enabled" : "Disabled"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Privacy & Security
                    </h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        Profile Visibility: {settings.profileVisibility}
                      </p>
                      <p className="text-gray-600">
                        Two-Factor Authentication: {settings.twoFactorAuth}
                      </p>
                      <p className="text-gray-600">
                        Login Notifications: {settings.loginNotifications}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Preferences</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        Language: {settings.language}
                      </p>
                      <p className="text-gray-600">
                        Timezone: {settings.timezone}
                      </p>
                      <p className="text-gray-600">
                        Currency: {settings.currency}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        userData={userData}
        onSave={handleSaveProfile}
      />

      <AddressesModal
        isOpen={isAddressesModalOpen}
        onClose={() => setIsAddressesModalOpen(false)}
        addresses={addresses}
        onSaveAddress={handleSaveAddress}
        onDeleteAddress={handleDeleteAddress}
      />

      <PaymentMethodsModal
        isOpen={isPaymentMethodsModalOpen}
        onClose={() => setIsPaymentMethodsModalOpen(false)}
        paymentMethods={paymentMethods}
        onSavePayment={handleSavePayment}
        onDeletePayment={handleDeletePayment}
        onSetDefault={handleSetDefaultPayment}
      />

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        settings={settings}
        onSaveSettings={handleSaveSettings}
      />

      <OrderDetailsModal
        isOpen={isOrderDetailsModalOpen}
        onClose={() => setIsOrderDetailsModalOpen(false)}
        order={selectedOrder}
      />

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}
