import { Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-primary" />
          <span className="font-bold text-text-primary">SiliconToSystems</span>
        </div>
        <p className="text-sm text-text-muted">
          © 2025 SiliconToSystems. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
