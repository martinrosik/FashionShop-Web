import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FaqItem from "../components/ui/FaqItem";
import { faqData } from "../data/products";

export default function FaqPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about shopping with LUXE
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <FaqItem
              key={idx}
              faq={faq}
              index={idx}
              openFaq={openFaq}
              setOpenFaq={setOpenFaq}
            />
          ))}
        </div>

        {/* Contact Prompt */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-300 mb-6">
            Our customer service team is here to help
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
