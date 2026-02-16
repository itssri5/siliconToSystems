import { Cpu, Code, Users } from "lucide-react";
import instructorSriram from "@/assets/instructor-sriram.jpg";
import instructorAbhay from "@/assets/instructor-abhay.jpg";

const instructors = [
  {
    name: "Abhay",
    image: instructorAbhay,
    bio: [
      "Hi, I'm Abhay, a product leader with deep international experience in end-to-end silicon supply chain delivery. I've worked across global hubs including Taiwan, building expertise in chip manufacturing, logistics, and cross-border operations.",
      "Currently driving silicon business delivery at Google, I bring a proven track record from leadership roles at NVIDIA, Cisco, and other industry giants. At SiliconToSystems, I'll teach you the real-world playbook for managing hardware products across complex global supply chains — from fab to customer.",
    ],
    stats: [
      { icon: Cpu, value: "12+", label: "Years in silicon delivery" },
      { icon: Code, value: "20+", label: "Products shipped globally" },
      { icon: Users, value: "50k+", label: "Community members" },
    ],
  },
  {
    name: "Sriram",
    image: instructorSriram,
    bio: [
      "Hi, I'm Sriram, a product manager with 8+ years of experience spanning vehicle hardware, real-time vehicle data telemetry, autonomous vehicles, and EVs. I've led cross-functional teams to ship products that power the future of mobility.",
      "At SiliconToSystems, I lead the product strategy curriculum — teaching you the real frameworks for driving hardware products from concept to production. Having transitioned from engineering to PM leadership in the automotive and hardware space, I know exactly where you'll get stuck.",
    ],
    stats: [
      { icon: Cpu, value: "8+", label: "Years in product management" },
      { icon: Code, value: "30k+", label: "Global PM community" },
      { icon: Users, value: "100k+", label: "Engineers mentored" },
    ],
  },
];

const InstructorSection = () => {
  return (
    <section className="py-24 px-6 space-y-16">
      {instructors.map((instructor, idx) => (
        <div key={idx} className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-10 md:p-14">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:[direction:rtl] md:[&>*]:direction-ltr" : ""}`}>
              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-border shadow-glow">
                  <img
                    src={instructor.image}
                    alt={`${instructor.name} - Hardware PM Instructor`}
                    className="w-full h-auto object-cover object-top aspect-[3/4]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6" style={{ direction: "ltr" }}>
                <h2 className="text-3xl font-bold text-text-primary">Meet your instructor</h2>
                {instructor.bio.map((paragraph, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {instructor.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col items-start gap-1">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                          <stat.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-2xl font-bold text-text-primary">{stat.value}</span>
                      </div>
                      <span className="text-xs text-text-muted">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InstructorSection;
