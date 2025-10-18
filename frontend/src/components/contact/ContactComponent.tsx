import { Link } from "react-router-dom";

export default function ContactComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600353068865-4c3dfe84f4d5?w=1600&h=1000&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            We’d love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-10 shadow-sm">
            <h2 className="text-3xl font-light mb-10 text-center">
              Send Us a Message
            </h2>

            <form className="space-y-6 font-sans">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm tracking-wide mb-2 text-gray-700">
                    FIRST NAME *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-sm tracking-wide mb-2 text-gray-700">
                    LAST NAME *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm tracking-wide mb-2 text-gray-700">
                  EMAIL *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm tracking-wide mb-2 text-gray-700">
                  PHONE
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm tracking-wide mb-2 text-gray-700">
                  SUBJECT *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm transition-colors bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="shipping">Shipping & Returns</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm tracking-wide mb-2 text-gray-700">
                  MESSAGE *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 tracking-widest text-sm hover:bg-gray-800 transition-colors"
              >
                SEND MESSAGE
              </button>

              <p className="text-sm text-gray-500 font-sans text-center">
                We’ll respond within 24–48 hours
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div className="bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-light mb-8 text-center">
                Contact Information
              </h2>

              <div className="space-y-6 text-gray-600 font-sans">
                <div>
                  <h3 className="text-sm tracking-wide mb-2 text-gray-700">
                    ADDRESS
                  </h3>
                  <p>
                    123 Fashion Avenue <br />
                    New York, NY 10001 <br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-sm tracking-wide mb-2 text-gray-700">
                    PHONE
                  </h3>
                  <p>+1 (555) 123-4567</p>
                </div>

                <div>
                  <h3 className="text-sm tracking-wide mb-2 text-gray-700">
                    EMAIL
                  </h3>
                  <p>info@elegance.com</p>
                </div>

                <div>
                  <h3 className="text-sm tracking-wide mb-2 text-gray-700">
                    HOURS
                  </h3>
                  <p>
                    Monday – Friday: 9:00 AM – 6:00 PM <br />
                    Saturday: 10:00 AM – 5:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-10 text-center">
              <h2 className="text-3xl font-light mb-6">Visit Our Showroom</h2>
              <p className="text-gray-400 font-sans mb-6">
                Experience our collections in person. Book an appointment for a
                personalized styling session.
              </p>
              <Link to="/book-appointment">
                <button className="w-full border border-white py-3 tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                  BOOK APPOINTMENT
                </button>
              </Link>
            </div>

            <div className="bg-gray-100 p-10 text-center">
              <h2 className="text-3xl font-light mb-4">Follow Us</h2>
              <p className="text-gray-600 font-sans mb-8">
                Stay connected for the latest collections and exclusive offers.
              </p>
              <div className="flex justify-center gap-4">
                {["IG", "FB", "TW", "PI"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
