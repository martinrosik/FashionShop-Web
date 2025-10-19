import { ChevronDown } from "lucide-react";
import type { FaqItem as FaqType } from "../../types";

interface FaqItemProps {
  faq: FaqType;
  index: number;
  openFaq: number | null;
  setOpenFaq: (index: number | null) => void;
}

export default function FaqItem({
  faq,
  index,
  openFaq,
  setOpenFaq,
}: FaqItemProps) {
  const isOpen = openFaq === index;

  return (
    <div
      className={`rounded-lg overflow-hidden border transition-all ${
        isOpen ? "bg-gray-50 border-gray-200" : "border-transparent"
      }`}
    >
      <button
        onClick={() => setOpenFaq(isOpen ? null : index)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-lg pr-8">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
        </div>
      </div>
    </div>
  );
}
