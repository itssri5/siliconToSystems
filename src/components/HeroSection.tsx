import { Star, Cpu } from "lucide-react";
import instructorsHero from "@/assets/instructors-hero.png";

const HeroSection = () => {
  const avatars = [
    "https://i.pravatar.cc/80?img=1",
    "https://i.pravatar.cc/80?img=2",
    "https://i.pravatar.cc/80?img=3",
    "https://i.pravatar.cc/80?img=4",
    "https://i.pravatar.cc/80?img=5",
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-40" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <Cpu className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">Hardware PM Accelerator</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
              The 6-week track that transforms engineers into{" "}
              <em className="font-serif not-italic text-gradient">hardware product managers</em>
            </h1>

            <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
              Finally bridge the gap between silicon engineering and product strategy. Master the complete hardware PM stack — from chip architecture to system-level product decisions.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-secondary font-medium">Trusted by 350+ engineers</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#pricing"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Enroll Now
              </a>
              <a
                href="#roadmap"
                className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
              >
                Curriculum
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-glow border border-border">
              <img
                src={instructorsHero}
                alt="Abhay and Sriram — Hardware PM instructors"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
