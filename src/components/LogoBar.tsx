const companies = [
  "Intel",
  "NVIDIA",
  "Qualcomm",
  "AMD",
  "Broadcom",
  "Texas Instruments",
  "TSMC",
  "Samsung Semiconductor",
];

const LogoBar = () => {
  return (
    <section className="py-16 border-t border-b border-border overflow-hidden">
      <p className="text-center text-sm font-semibold text-text-secondary mb-10 tracking-wide">
        Joined by professionals from the world's leading semiconductor companies
      </p>
      <div className="relative">
        <div className="flex animate-logo-scroll whitespace-nowrap">
          {[...companies, ...companies].map((name, i) => (
            <span
              key={i}
              className="mx-12 text-xl font-bold text-text-muted opacity-50 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
