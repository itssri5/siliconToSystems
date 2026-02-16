import { Star } from "lucide-react";

const FeaturedReview = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-border bg-card p-10 space-y-6 text-center">
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg text-text-secondary leading-relaxed italic">
            "I joined this program based on the outstanding content and reputation. And I can only say that my expectations were exceeded many times over. This here deserves my utmost respect."
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <img
              src="https://i.pravatar.cc/80?img=11"
              alt="Michael Immink"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <div className="font-semibold text-text-primary">Michael Immink</div>
              <div className="text-sm text-text-muted">Senior Hardware PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReview;
