import { useState } from "react";

export default function FaqComponent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return and exchange policy?",
      answer:
        "We accept returns and exchanges within 14 days of delivery. Items must be unworn, unwashed, and in their original condition with all tags attached. To initiate a return, please contact our support team.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Delivery times may vary depending on your location. You can view estimated shipping times during checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has shipped, you'll receive an email with a tracking number and link to follow your shipment in real time.",
    },
    {
      question: "Are your materials sustainably sourced?",
      answer:
        "Absolutely. Sustainability is one of our core values. We partner with ethical suppliers and use eco-conscious materials whenever possible.",
    },
    {
      question: "Can I modify or cancel my order after placing it?",
      answer:
        "You may modify or cancel your order within 2 hours of placing it by contacting our support team. After that, we begin processing immediately to ensure timely delivery.",
    },
    {
      question: "Do you offer gift packaging?",
      answer:
        "Yes, we offer elegant gift wrapping for an additional fee at checkout. Each item is packaged in our signature box and tissue paper.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600&h=900&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl font-light mb-4 tracking-tight">FAQs</h1>
          <p className="text-lg font-light tracking-wide">
            Find answers to your most common questions
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center">Need Help?</h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-sm border border-gray-100 p-6 transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-light text-gray-800">
                    {faq.question}
                  </span>
                  <span className="text-gray-500 text-2xl font-light">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed font-sans text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white text-center">
        <h3 className="text-3xl font-light mb-6">Still have questions?</h3>
        <p className="text-gray-600 font-sans mb-10 text-lg">
          Our team is here to help you. Reach out to us anytime.
        </p>
        <button className="px-12 py-4 bg-black text-white tracking-widest text-sm hover:bg-gray-800 transition-colors">
          CONTACT US
        </button>
      </section>
    </div>
  );
}
