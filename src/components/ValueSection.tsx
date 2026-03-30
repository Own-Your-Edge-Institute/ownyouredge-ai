import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ValueSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-32 lg:py-48 px-6 lg:px-12" id="programs">
      <div className="max-w-[1400px] mx-auto">
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
              className="text-3xl lg:text-5xl font-serif leading-[1.1] text-foreground"
            >
              AI literacy is table stakes.
              <br />
              <span className="italic text-primary">AI fluency is the edge.</span>
            </motion.h2>
          </div>
        </div>

        <div className="relative h-px mb-24">
          <motion.div style={{ width: lineWidth }} className="absolute top-0 left-0 h-px bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        </div>

        <div className="space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-px">
          {[
            { title: "For Professionals", desc: "Prove you can do more than talk about AI. Earn a credential that signals strategic capability — not just awareness.", detail: "Individual Certification" },
            { title: "For Organizations", desc: "Upskill entire teams with a structured program. Measure readiness. Build an AI-fluent workforce from the inside out.", detail: "Enterprise Program" },
            { title: "For Leaders", desc: "Set the standard for your industry. Lead with confidence, backed by a certification that commands respect.", detail: "Executive Track" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="group lg:p-10 lg:border-l lg:first:border-l-0 border-border hover:bg-secondary/50 transition-colors duration-700"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">{item.detail}</span>
              <h3 className="text-2xl font-serif mt-3 mb-4 text-foreground group-hover:text-primary transition-colors duration-500">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              <a href="#certify" className="inline-block mt-6 text-xs tracking-widest uppercase text-muted-foreground/50 group-hover:text-primary transition-colors duration-500">
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
