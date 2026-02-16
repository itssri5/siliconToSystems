import { useState } from "react";
import { Clock, BookOpen, ChevronDown } from "lucide-react";
import darkGradientBg from "@/assets/dark-gradient-bg.jpg";

const weeks = [
  {
    week: 1,
    title: "Foundations of Hardware Product Management",
    description: "Understand the semiconductor product lifecycle, key industry players, and the PM's role from concept to tape-out. Learn to read datasheets, understand process nodes, and navigate the silicon ecosystem.",
    lessons: 12,
    duration: "5 hr 31 min",
  },
  {
    week: 2,
    title: "Market Analysis & Product Strategy",
    description: "Define product requirements for hardware. Learn TAM/SAM/SOM for silicon products, competitive teardowns, customer segmentation for OEMs and ODMs, and building compelling product roadmaps.",
    lessons: 12,
    duration: "8 hr 23 min",
  },
  {
    week: 3,
    title: "Silicon Architecture & Design Trade-offs",
    description: "Understand SoC architecture, IP blocks, power/performance/area (PPA) trade-offs, and how PMs influence design decisions. Work with engineering teams on spec reviews and feature prioritization.",
    lessons: 11,
    duration: "7 hr 13 min",
  },
  {
    week: 4,
    title: "Cross-Functional Execution & Tape-Out",
    description: "Master the tape-out process, milestone reviews, risk management, and cross-functional coordination between design, verification, DFT, and packaging teams. Learn to drive decisions under uncertainty.",
    lessons: 12,
    duration: "6 hr 42 min",
  },
  {
    week: 5,
    title: "Manufacturing, Yield & Supply Chain",
    description: "Understand wafer fabrication, yield management, packaging options, and supply chain dynamics. Learn to work with foundries, OSATs, and manage BOM costs for profitable silicon products.",
    lessons: 10,
    duration: "7 hr 25 min",
  },
  {
    week: 6,
    title: "Go-to-Market & Product Launch",
    description: "Plan and execute silicon product launches. Develop pricing strategies, manage customer engagements, create reference designs, and build the ecosystem around your hardware product.",
    lessons: 8,
    duration: "5 hr 10 min",
  },
];

const CurriculumSection = () => {
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <section id="roadmap" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top - Heading & description */}
        <div className="max-w-2xl space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            Your 6-week roadmap to building{" "}
            <em className="font-serif not-italic text-gradient">production-ready silicon products</em>
          </h2>
          <p className="text-text-secondary leading-relaxed">
            This is where we download everything we know about silicon PM into your brain. The exact process we use to go from product brief to shipped silicon. Every framework, every trade-off analysis, every launch playbook that took us years to figure out.
          </p>
          <p className="text-text-secondary leading-relaxed">
            By week 6, you'll be a very capable hardware product manager. Ready to lead product at your company. Ready to take on consulting projects. Ready to build products. Whatever path you choose, you'll have the complete toolkit to execute your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Sticky dynamic preview */}
          <div className="lg:sticky lg:top-32 space-y-8">
            {/* Dynamic preview card for selected week */}
            {openWeek !== null && (
              <div className="rounded-2xl overflow-hidden border border-border shadow-glow">
                <div className="relative">
                  <img
                    src={darkGradientBg}
                    alt="Course preview"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Week {weeks[openWeek].week}
                    </p>
                    <p className="text-lg font-bold text-text-primary mt-1">
                      {weeks[openWeek].title}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-text-muted mt-2">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        {weeks[openWeek].lessons} lessons
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {weeks[openWeek].duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right - Week cards (clickable) */}
          <div className="space-y-6">
            {weeks.map((week, i) => (
              <div
                key={i}
                onClick={() => setOpenWeek(openWeek === i ? null : i)}
                className={`rounded-2xl border p-8 space-y-4 cursor-pointer transition-all ${
                  openWeek === i
                    ? "border-primary/50 bg-card shadow-glow"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Week {week.week}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary">{week.title}</h3>
                <p className="text-text-secondary leading-relaxed">{week.description}</p>
                <div className="flex items-center gap-6 text-sm text-text-muted pt-2">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    {week.lessons} lessons
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {week.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
