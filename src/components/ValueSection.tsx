import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const individualFeatures = [
  { label: "Core curriculum", desc: "Practical AI usage & proof of capability" },
  { label: "Executive Track", desc: "Decision-making frameworks, strategic application to your business, private sessions & advanced workflows", upgrade: true },
];

const enterpriseFeatures = [
  { label: "Team Program", desc: "Training, adoption systems & measurable readiness" },
  { label: "Executive Layer", desc: "Leadership briefings, decision architecture & company-wide AI strategy", upgrade: true },
];

const ValueSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-32 lg:py-48 px-6 lg:px-12" id="programs">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
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
              Two paths.
              <br />
              <span className="italic text-primary">One standard of excellence.</span>
            </motion.h2>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px mb-24">
          <motion.div style={{ width: lineWidth }} className="absolute top-0 left-0 h-px bg-gradient-to-r from-primary via-primary/40 to-transparent" />
        </div>

        {/* Two lanes */}
        <div className="grid lg:grid-cols-2 gap-px">
          {/* Individual Certification */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group lg:p-12 lg:border-r border-border"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">Lane 01</span>
            <h3 className="text-3xl lg:text-4xl font-serif mt-3 mb-3 text-foreground">Individual Certification</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
              Built for high-performing professionals. Prove AI capability, apply it to real work, and become AI-fluent in a way that actually matters.
            </p>

            <div className="space-y-6">
              {individualFeatures.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className={`relative pl-6 border-l-2 ${f.upgrade ? "border-primary" : "border-border"}`}
                >
                  {f.upgrade && (
                    <span className="absolute -left-px top-0 text-[9px] tracking-[0.25em] uppercase text-primary font-medium -translate-y-full pb-1">
                      Upgrade
                    </span>
                  )}
                  <h4 className={`text-lg font-medium mb-1 ${f.upgrade ? "text-primary" : "text-foreground"}`}>{f.label}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground/60 mt-10 leading-relaxed max-w-sm italic">
              With an Executive Track for those leading teams, making decisions, and shaping strategy.
            </p>
          </motion.div>

          {/* Enterprise Program */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="group lg:p-12 mt-16 lg:mt-0"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">Lane 02</span>
            <h3 className="text-3xl lg:text-4xl font-serif mt-3 mb-3 text-foreground">Enterprise Program</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
              For companies who want teams upgraded, measurable readiness, and internal AI capability that scales.
            </p>

            <div className="space-y-6">
              {enterpriseFeatures.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className={`relative pl-6 border-l-2 ${f.upgrade ? "border-primary" : "border-border"}`}
                >
                  {f.upgrade && (
                    <span className="absolute -left-px top-0 text-[9px] tracking-[0.25em] uppercase text-primary font-medium -translate-y-full pb-1">
                      Executive Layer
                    </span>
                  )}
                  <h4 className={`text-lg font-medium mb-1 ${f.upgrade ? "text-primary" : "text-foreground"}`}>{f.label}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground/60 mt-10 leading-relaxed max-w-sm italic">
              "How do we run this company with AI?" — answered with structure, not hype.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
