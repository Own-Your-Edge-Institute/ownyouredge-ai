import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ValueSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-32 lg:py-48 px-6 lg:px-12" id="programs">
      <div className="max-w-[1400px] mx-auto">
        {/* Section intro with oversized number */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-2">
            <span className="text-8xl lg:text-[10rem] font-serif italic text-primary/10 leading-none">01</span>
          </div>
          <div className="lg:col-span-6 lg:col-start-4 flex flex-col justify-end">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl lg:text-5xl font-serif leading-[1.1]"
            >
              AI literacy is table stakes.
              <br />
              <span className="italic text-primary">AI fluency is the edge.</span>
            </motion.h2>
          </div>
        </div>

        {/* Animated divider */}
        <div className="relative h-px mb-24">
          <motion.div style={{ width: lineWidth }} className="absolute top-0 left-0 h-px bg-gradient-to-r from-primary via-primary/50 to-transparent" />
        </div>

        {/* Two-lane program structure */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Lane 1: Individual Certification */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[1.5rem] border border-border/30 p-8 lg:p-10 hover:border-primary/20 transition-colors duration-700"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">Lane 01</span>
            <h3 className="text-2xl lg:text-3xl font-serif mt-3 mb-2">Individual Certification</h3>
            <p className="text-foreground/40 text-sm leading-relaxed mb-8">
              Prove you can do more than talk about AI. Earn a credential that signals strategic capability — not just awareness.
            </p>

            <div className="space-y-4">
              <div className="group rounded-xl border border-border/20 p-6 hover:bg-card/50 transition-colors duration-500">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/30 font-medium">Track</span>
                    <h4 className="text-lg font-serif mt-1 group-hover:text-primary transition-colors duration-500">Standard</h4>
                  </div>
                  <a href="#certify" className="text-foreground/20 group-hover:text-primary transition-colors duration-500 text-lg">→</a>
                </div>
                <p className="text-foreground/30 text-xs leading-relaxed mt-2">
                  Core AI fluency certification for professionals ready to lead with confidence.
                </p>
              </div>

              <div className="group rounded-xl border border-border/20 p-6 hover:bg-card/50 transition-colors duration-500">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/30 font-medium">Upgrade</span>
                    <h4 className="text-lg font-serif mt-1 group-hover:text-primary transition-colors duration-500">Executive Track</h4>
                  </div>
                  <a href="#certify" className="text-foreground/20 group-hover:text-primary transition-colors duration-500 text-lg">→</a>
                </div>
                <p className="text-foreground/30 text-xs leading-relaxed mt-2">
                  Leadership-level application and strategic decision-making for senior professionals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Lane 2: Enterprise Program */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="rounded-[1.5rem] border border-border/30 p-8 lg:p-10 hover:border-primary/20 transition-colors duration-700"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">Lane 02</span>
            <h3 className="text-2xl lg:text-3xl font-serif mt-3 mb-2">Enterprise Program</h3>
            <p className="text-foreground/40 text-sm leading-relaxed mb-8">
              Scale AI readiness across your organization with structured training, measurement, and leadership alignment.
            </p>

            <div className="space-y-4">
              <div className="group rounded-xl border border-border/20 p-6 hover:bg-card/50 transition-colors duration-500">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/30 font-medium">Program</span>
                    <h4 className="text-lg font-serif mt-1 group-hover:text-primary transition-colors duration-500">Team Program</h4>
                  </div>
                  <a href="#certify" className="text-foreground/20 group-hover:text-primary transition-colors duration-500 text-lg">→</a>
                </div>
                <p className="text-foreground/30 text-xs leading-relaxed mt-2">
                  Upskill entire teams with structured training and AI systems adoption.
                </p>
              </div>

              <div className="group rounded-xl border border-border/20 p-6 hover:bg-card/50 transition-colors duration-500">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/30 font-medium">Add-on</span>
                    <h4 className="text-lg font-serif mt-1 group-hover:text-primary transition-colors duration-500">Executive Layer</h4>
                  </div>
                  <a href="#certify" className="text-foreground/20 group-hover:text-primary transition-colors duration-500 text-lg">→</a>
                </div>
                <p className="text-foreground/30 text-xs leading-relaxed mt-2">
                  Leadership briefings and decision architecture for C-suite and senior executives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
