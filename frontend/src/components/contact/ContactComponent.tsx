export default function ContactComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light mb-4">Get In Touch</h1>
          <p className="text-gray-600 font-sans text-lg">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-10 shadow-lg">
            <h2 className="text-2xl font-light mb-8">Send us a Message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm tracking-wide mb-2 text-gray-700">
                    FIRST NAME *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans"
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
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans"
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
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm tracking-wide mb-2 text-gray-700">
                  PHONE
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm tracking-wide mb-2 text-gray-700">
                  SUBJECT *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans bg-white"
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
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-sans resize-none"
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
                We'll respond within 24-48 hours
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-10 shadow-lg">
              <h2 className="text-2xl font-light mb-8">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm tracking-wide mb-2 text-gray-700">
                    ADDRESS
                  </h3>
                  <p className="text-gray-600 font-sans">
                    123 Fashion Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="text-sm tracking-wide mb-2 text-gray-700">
                    PHONE
                  </h3>
                  <p className="text-gray-600 font-sans">+1 (555) 123-4567</p>
                </div>

                <div>
                  <h3 className="text-sm tracking-wide mb-2 text-gray-700">
                    EMAIL
                  </h3>
                  <p className="text-gray-600 font-sans">info@elegance.com</p>
                </div>

                <div>
                  <h3 className="text-sm tracking-wide mb-2 text-gray-700">
                    HOURS
                  </h3>
                  <p className="text-gray-600 font-sans">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 5:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-10">
              <h2 className="text-2xl font-light mb-6">Visit Our Showroom</h2>
              <p className="text-gray-400 font-sans mb-6">
                Experience our collections in person. Book an appointment for a
                personalized styling session.
              </p>
              <button className="w-full border border-white py-3 tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                BOOK APPOINTMENT
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-10">
              <h2 className="text-2xl font-light mb-4">Follow Us</h2>
              <p className="text-gray-600 font-sans mb-6">
                Stay connected for the latest collections and exclusive offers
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                >
                  IG
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                >
                  FB
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                >
                  TW
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all"
                >
                  PI
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
