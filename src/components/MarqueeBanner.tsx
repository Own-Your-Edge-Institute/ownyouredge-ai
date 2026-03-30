const words = [
  "AI Fluency", "·", "Professional Certification", "·",
  "Leadership", "·", "Workforce Transformation", "·",
  "Own Your Edge™", "·", "Certified Professionals", "·",
  "AI Fluency", "·", "Professional Certification", "·",
  "Leadership", "·", "Workforce Transformation", "·",
  "Own Your Edge™", "·", "Certified Professionals", "·",
];

const MarqueeBanner = () => (
  <section className="border-y border-border py-5 overflow-hidden">
    <div className="animate-marquee whitespace-nowrap flex items-center">
      {words.map((w, i) => (
        <span
          key={i}
          className={`mx-4 text-sm tracking-widest uppercase ${
            w === "·" ? "text-primary" : "text-foreground/25 font-light"
          }`}
        >
          {w}
        </span>
      ))}
    </div>
  </section>
);

export default MarqueeBanner;
