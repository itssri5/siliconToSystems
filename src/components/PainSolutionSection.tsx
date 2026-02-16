import { X, CheckCircle } from "lucide-react";

const PainSolutionSection = () => {
  const painPoints = [
    "Waste time on generic PM courses that don't cover silicon",
    "Struggle with overwhelm as chip architectures grow more complex",
    "Miss out on the most exciting hardware career shift of our era",
  ];

  const solutions = [
    "Learn how to drive silicon products from architecture to market launch",
    "Master cross-functional alignment across design, fab, and systems teams",
    "Join a community of hardware PMs solving real product challenges together",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-border bg-card p-10 md:p-14">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Pain */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-text-primary">You don't have to</h3>
              <p className="text-text-secondary">
                Do it all alone and burn out chasing every new silicon trend
              </p>
              <ul className="space-y-5">
                {painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-md bg-muted flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-text-muted" />
                    </div>
                    <span className="text-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Solution */}
            <div className="rounded-2xl border border-primary/30 bg-surface p-8 space-y-6">
              <h3 className="text-2xl font-bold text-text-primary">Instead you could</h3>
              <p className="text-text-secondary">
                Get everything you need in one place with SiliconToSystems
              </p>
              <ul className="space-y-5">
                {solutions.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSolutionSection;
