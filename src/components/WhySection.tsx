import { motion } from "framer-motion";
import { Brain, TrendingUp, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Beyond literacy",
    desc: "Build the confidence to apply AI strategically — in your role, your team, your industry.",
    num: "01",
  },
  {
    icon: TrendingUp,
    title: "Competitive edge",
    desc: "Certified professionals stand out. Demonstrate verified AI competency where it matters.",
    num: "02",
  },
  {
    icon: Shield,
    title: "Trusted credential",
    desc: "Backed by Own Your Edge™ Institute. A name that signals real capability, not just awareness.",
    num: "03",
  },
  {
    icon: Users,
    title: "Scale with teams",
    desc: "From solo professionals to enterprise-wide transformation. We meet you where you are.",
    num: "04",
  },
];

const WhySection = () => (
  <section className="py-24 lg:py-40 relative" id="programs">
    <div className="container">
      {/* Section header */}
      <div className="grid lg:grid-cols-12 gap-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">Why Certify</p>
          <h2 className="text-4xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight">
            AI fluency is<br />
            <span className="italic text-gradient-accent">non-negotiable.</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-5 lg:col-start-8 flex items-end"
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            The difference between leading and lagging in the AI era isn't knowledge — it's certified fluency that others can trust.
          </p>
        </motion.div>
      </div>

      {/* Feature rows */}
      <div className="space-y-0">
        {features.map((f, i) => (
          <motion.div
            key={f.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="group grid grid-cols-12 gap-4 items-center py-8 border-t border-border/50 hover:bg-card/30 transition-colors duration-500 px-4 -mx-4 rounded-xl"
          >
            <span className="col-span-1 text-sm font-body text-muted-foreground/50 font-medium">{f.num}</span>
            <div className="col-span-1 flex justify-center">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <f.icon size={18} className="text-primary" />
              </div>
            </div>
            <h3 className="col-span-4 font-display text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors">
              {f.title}
            </h3>
            <p className="col-span-6 text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
