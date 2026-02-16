import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who is this course for?",
    a: "This course is designed for engineers and aspiring PMs who want to break into or excel at hardware product management in the semiconductor industry. Whether you're a chip designer, verification engineer, or software PM looking to transition into silicon.",
  },
  {
    q: "What prerequisites do I need?",
    a: "A basic understanding of digital electronics or semiconductor concepts is helpful but not required. We cover everything from foundational chip concepts to advanced product strategy. Familiarity with product management basics is a plus.",
  },
  {
    q: "How long do I have access to the course?",
    a: "You get lifetime access. Once you enroll, you can go through the material at your own pace, revisit lessons, and access all future updates to the curriculum.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes! We offer a 30-day money-back guarantee. If the course isn't the right fit for you, simply reach out within 30 days for a full refund.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes, upon completing all 6 weeks and the capstone project, you'll receive a course completion certificate that you can share on LinkedIn and your portfolio.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-text-primary">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground transition-transform shrink-0 ml-4 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
