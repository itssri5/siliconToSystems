import { Cpu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="w-6 h-6 text-primary" />
          <span className="text-lg font-bold text-text-primary">SiliconToSystems</span>
        </div>
        <a
          href="#pricing"
          className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Enroll Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
