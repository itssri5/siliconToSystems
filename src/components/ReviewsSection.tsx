import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Panashe Jerry Mundondo",
    role: "Product Manager",
    text: "In a world full of generic PM courses, SiliconToSystems managed to stand out head and shoulders above the rest. They took me from pieced-together information to a confident hardware product manager.",
    avatar: "https://i.pravatar.cc/80?img=14",
  },
  {
    name: "Norman Holz",
    role: "Head of Engineering",
    text: "It gave me the knowledge and confidence to provide my customers with products they can trust, products that meet their performance requirements and work predictably in production environments.",
    avatar: "https://i.pravatar.cc/80?img=15",
  },
  {
    name: "Nagadeep CS",
    role: "Staff Engineer",
    text: "Even with 18 years in semiconductor engineering, I found immense value. You learn the why behind every product decision, not just the how.",
    avatar: "https://i.pravatar.cc/80?img=16",
  },
  {
    name: "Rok Popov Ledinski",
    role: "Silicon PM",
    text: "Very few courses cover the complete end-to-end hardware PM lifecycle, and this is definitely one of them. It's built around proven principles and practices, with a focus on designing products that scale.",
    avatar: "https://i.pravatar.cc/80?img=17",
  },
  {
    name: "Richard Odoom",
    role: "Freelance Consultant",
    text: "The detailed level of instruction has given me the confidence to begin designing and implementing product strategies for a variety of semiconductor use cases.",
    avatar: "https://i.pravatar.cc/80?img=18",
  },
  {
    name: "Marcus Swift",
    role: "Founder & CEO",
    text: "Prior to this course, managing hardware products was scatter shot. I went from 'Pretty sure we can do that' to 'I know how to do that'. If you're on the fence, dive in — the value is vast!",
    avatar: "https://i.pravatar.cc/80?img=19",
  },
  {
    name: "Andrés Espinosa Sanfiel",
    role: "Hardware PM Lead",
    text: "To anyone considering this program: it's more than an investment, it's a gift. We're getting tremendous value for the money.",
    avatar: "https://i.pravatar.cc/80?img=20",
  },
  {
    name: "Sarah Chen",
    role: "SoC Product Manager",
    text: "The curriculum is incredibly well-structured. Each week builds on the last and by week 6, I had a complete go-to-market plan for our next-gen SoC. The PPA trade-off frameworks alone were worth the price.",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "James Rodriguez",
    role: "Semiconductor PM",
    text: "This accelerator transformed my career. I went from basic engineering to confidently managing cross-functional teams through tape-out. The community of hardware PMs is a huge bonus.",
    avatar: "https://i.pravatar.cc/80?img=13",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            You could be our next success story
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="break-inside-avoid rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-text-primary">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
