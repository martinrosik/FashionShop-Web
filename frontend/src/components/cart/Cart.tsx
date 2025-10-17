import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();

  // Sample cart data (could come from context or API)
  const [cartItems, setCartItems] = useState([
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

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toLowerCase() === "elegance10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal - subtotal * discount;

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light mb-12 text-center">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600 font-sans">
                Your cart is empty.
              </p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 shadow-sm flex items-center justify-between"
                >
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-28 object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-light mb-2">{item.name}</h3>
                      <p className="text-gray-600 font-sans">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <button
                          onClick={() => handleQuantityChange(item.id, -1)}
                          className="border border-gray-300 w-8 h-8 flex items-center justify-center hover:border-black transition-colors"
                        >
                          −
                        </button>
                        <span className="text-gray-800 font-sans">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, 1)}
                          className="border border-gray-300 w-8 h-8 flex items-center justify-center hover:border-black transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-sans mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-sm text-gray-500 hover:text-black transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 shadow-sm sticky top-24">
              <h2 className="text-2xl font-light mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 font-sans">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Discount</span>
                    <span>-{(discount * 100).toFixed(0)}%</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-black text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                disabled={cartItems.length === 0}
                className={`w-full py-4 tracking-widest text-sm transition-colors mb-4 ${
                  cartItems.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                PROCEED TO CHECKOUT
              </button>

              <button
                onClick={() => navigate("/")}
                className="w-full border border-gray-300 py-4 tracking-widest text-sm hover:border-black transition-colors"
              >
                CONTINUE SHOPPING
              </button>

              <div className="mt-8 pt-8 border-t">
                <h3 className="text-sm tracking-wide mb-4">PROMO CODE</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans text-sm"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-6 py-3 bg-gray-100 hover:bg-gray-200 transition-colors text-sm tracking-wide"
                  >
                    APPLY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
