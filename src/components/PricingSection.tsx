import { Check, Star } from "lucide-react";

const features = [
  "65 in-depth lessons and labs",
  "Real-world silicon PM case studies",
  "Lifetime access to course materials",
  "Self-paced learning to fit your schedule",
  "Masterclasses from industry veterans",
  "Private community of hardware PMs",
  "Access to the Silicon PM Launchpad",
  "Course certificate upon completion",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Start today. Get instant lifetime access
        </h2>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="rounded-2xl border border-glow bg-card p-8 shadow-glow space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-text-primary">Hardware PM Accelerator</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-text-primary">$1,697</span>
            </div>
            <p className="text-sm text-text-secondary">
              Master the complete hardware product management stack — from silicon to systems.
            </p>
          </div>

          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm text-text-muted">
              <span>Trusted by 350+ engineers</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          <button className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm">
            Proceed to Checkout
          </button>
        </div>

        <div className="mt-8 text-center space-y-2">
          <h4 className="text-lg font-semibold text-text-primary">Try it, risk-free</h4>
          <p className="text-sm text-text-secondary">
            I'm confident that you'll love this course. But if it's not the right fit, no worries! Get a refund within 30 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
