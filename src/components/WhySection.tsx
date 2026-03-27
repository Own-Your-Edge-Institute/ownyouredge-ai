import { motion } from "framer-motion";
import { Brain, TrendingUp, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Fluency, Not Just Literacy",
    desc: "Go beyond awareness. Build the confidence to apply AI strategically in your role, team, and industry.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Advantage",
    desc: "Certified professionals stand out. Demonstrate verified AI competency to employers and clients.",
  },
  {
    icon: Shield,
    title: "Credibility & Authority",
    desc: "Backed by the Own Your Edge™ Institute — a trusted name in AI leadership certification.",
  },
  {
    icon: Users,
    title: "For Individuals & Teams",
    desc: "Whether you're a solo professional or leading a workforce transformation, we meet you where you are.",
  },
];

const WhySection = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">Why Get Certified</p>
        <h2 className="text-3xl lg:text-5xl font-display font-bold tracking-tight">
          The AI edge that<br /><span className="italic">sets you apart</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-8 group hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
              <f.icon size={24} className="text-gold" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
