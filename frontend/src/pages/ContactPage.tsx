import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, title: "Email", value: "support@luxe.com" },
  { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Fashion Avenue\nNew York, NY 10001",
  },
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "11:00 AM - 5:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you</p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-lg">
            {[
              {
                id: "fullName",
                label: "Full Name",
                type: "text",
                placeholder: "John Doe",
              },
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "your@email.com",
              },
              {
                id: "subject",
                label: "Subject",
                type: "text",
                placeholder: "How can we help?",
              },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block font-semibold mb-2">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition"
                  required
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell us more..."
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none resize-none transition"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition-all font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info & Business Hours */}
          <div className="space-y-8">
            {/* Contact Info */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, title, value }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{title}</p>
                      <p className="text-gray-300 whitespace-pre-line">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Business Hours */}
            <section className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-3 text-gray-600">
                {businessHours.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span>{day}</span>
                    <span className="font-semibold text-gray-900">{hours}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
