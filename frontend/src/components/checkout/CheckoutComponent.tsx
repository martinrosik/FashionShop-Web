import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutComponent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "card",
  });

  const [cartItems] = useState([
    {
      id: 1,
      name: "Silk Midi Dress",
      price: 180,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1520975922131-2a31f8a9b3eb?w=600&h=700&fit=crop",
    },
    {
      id: 2,
      name: "Leather Handbag",
      price: 250,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1589927986089-35812386e10e?w=600&h=700&fit=crop",
    },
  ]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/thank-you");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light mb-12 text-center">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white p-8 shadow-sm space-y-10"
          >
            {/* Billing Details */}
            <div>
              <h2 className="text-2xl font-light mb-6">Billing Details</h2>
              <div className="grid md:grid-cols-2 gap-6 font-sans">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="md:col-span-2 w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Shipping Details */}
            <div>
              <h2 className="text-2xl font-light mb-6">Shipping Details</h2>
              <div className="grid md:grid-cols-2 gap-6 font-sans">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className="md:col-span-2 w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={form.postalCode}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={form.country}
                  onChange={handleChange}
                  required
                  className="md:col-span-2 w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-2xl font-light mb-6">Payment Method</h2>
              <div className="space-y-4 font-sans">
                <label className="flex items-center gap-3 text-gray-700">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={form.paymentMethod === "card"}
                    onChange={handleChange}
                  />
                  Credit / Debit Card
                </label>
                <label className="flex items-center gap-3 text-gray-700">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={form.paymentMethod === "paypal"}
                    onChange={handleChange}
                  />
                  PayPal
                </label>
                <label className="flex items-center gap-3 text-gray-700">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={form.paymentMethod === "cod"}
                    onChange={handleChange}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                className="flex-1 bg-black text-white py-4 tracking-widest text-sm hover:bg-gray-800 transition-colors"
              >
                PLACE ORDER
              </button>
              <button
                type="button"
                onClick={() => navigate("/cart")}
                className="flex-1 border border-gray-300 py-4 tracking-widest text-sm hover:border-black transition-colors"
              >
                BACK TO CART
              </button>
            </div>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 shadow-sm sticky top-24">
              <h2 className="text-2xl font-light mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 font-sans">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 object-cover"
                      />
                      <div>
                        <p className="text-gray-800 text-sm">{item.name}</p>
                        <p className="text-gray-600 text-xs">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}

                <div className="border-t pt-4 mt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                  </div>
                  <div className="flex justify-between text-black text-lg pt-4 border-t">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-sm font-sans text-center">
                Secure checkout powered by Élégance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
