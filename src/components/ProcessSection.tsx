import { motion } from "framer-motion";

const steps = [
  { title: "Choose your path", desc: "Individual or team. Standard track or Executive. You pick the level; we build from there." },
  { title: "Learn from a fellow CEO", desc: "Every module reflects real deployment experience across real companies, departments, and solutions." },
  { title: "Earn your credential", desc: "Pass the assessment. Receive your verified certification, ready to display on LinkedIn and share with hiring teams." },
  { title: "Empower your team", desc: "Your certification signals strategic capability before you say a word." },
];

const ProcessSection = () => (
  <section className="py-32 lg:py-48 px-6 lg:px-12 relative overflow-hidden">
    {/* Giant background text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap">
      <span className="text-[20vw] font-serif italic text-foreground/[0.015] leading-none">Process</span>
    </div>

    <div className="max-w-[1400px] mx-auto relative z-10">
      <div className="grid lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-2">
          <span className="text-8xl lg:text-[10rem] font-serif italic text-primary/20 leading-none">02</span>
        </div>
        <div className="lg:col-span-6 lg:col-start-4 flex flex-col justify-end">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-5xl font-serif leading-[1.1]"
          >
            Four steps.
            <br />
            <span className="italic text-primary">No ambiguity.</span>
          </motion.h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.8 }}
            className="group relative"
          >
            {/* Step number */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-xs text-primary font-medium group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {i + 1}
              </div>
              <div className="h-px flex-1 bg-border/30 group-hover:bg-primary/30 transition-colors duration-700" />
            </div>
            <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors duration-500">{s.title}</h3>
            <p className="text-sm text-foreground/50 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex justify-center mt-12"
      >
        <a
          href="#certify"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.3)] transition-all duration-500"
        >
          Explore Certification →
        </a>
      </motion.div>
    </div>
  </section>
);

export default ProcessSection;
