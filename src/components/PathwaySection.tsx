import { motion } from "framer-motion";

const steps = [
  { title: "Choose your path", desc: "Individual certification or enterprise workforce program — built for how you learn." },
  { title: "Learn from leaders", desc: "Curated AI fluency modules designed by practitioners who've done it, not just taught it." },
  { title: "Earn your credential", desc: "Pass the assessment. Receive your verified Professional AI Certification." },
  { title: "Lead with proof", desc: "Use your certification to land roles, win clients, and drive organizational change." },
];

const PathwaySection = () => (
  <section className="py-24 lg:py-40 relative overflow-hidden">
    {/* Large background text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
      <span className="text-[15vw] font-display font-bold text-foreground/[0.02] whitespace-nowrap">
        CERTIFY
      </span>
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mb-20"
      >
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">The Process</p>
        <h2 className="text-4xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight">
          Four steps.<br />
          <span className="italic text-gradient-accent">Zero ambiguity.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30 rounded-2xl overflow-hidden">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-500 relative"
          >
            <span className="text-7xl font-display font-bold text-foreground/[0.04] absolute top-4 right-4">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-primary mb-8 group-hover:scale-150 transition-transform" />
              <h3 className="font-display text-xl font-semibold mb-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PathwaySection;
