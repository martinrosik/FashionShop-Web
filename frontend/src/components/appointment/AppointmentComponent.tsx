import { useState } from "react";

export default function AppointmentComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Appointment booked:", formData);
  };

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
            Book an Appointment
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            Personalized Fashion Consultations
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-sm p-10">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-3xl font-light mb-4">Thank You!</h2>
              <p className="text-gray-600 font-sans">
                Your appointment request has been submitted successfully. <br />
                Our team will contact you soon to confirm the details.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-light text-center mb-12">
                Schedule Your Visit
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 tracking-wide text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 tracking-wide text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 tracking-wide text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 tracking-wide text-gray-700">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2 tracking-wide text-gray-700">
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 tracking-wide text-gray-700">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for..."
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none text-sm resize-none"
                  ></textarea>
                </div>

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="px-12 py-4 bg-black text-white tracking-widest text-sm hover:bg-gray-800 transition-colors"
                  >
                    BOOK APPOINTMENT
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
