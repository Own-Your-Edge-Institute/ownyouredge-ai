import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Explore Paths", desc: "Choose between individual certification or a team/enterprise workforce program." },
  { num: "02", title: "Learn & Apply", desc: "Complete curated AI fluency modules designed by industry leaders and practitioners." },
  { num: "03", title: "Evaluate & Earn", desc: "Pass the assessment and earn your verified Professional AI Certification credential." },
  { num: "04", title: "Amplify Impact", desc: "Use your certification to lead projects, influence strategy, and advance your career." },
];

const PathwaySection = () => (
  <section className="py-24 lg:py-32 bg-secondary/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-4">Your Pathway</p>
        <h2 className="text-3xl lg:text-5xl font-display font-bold tracking-tight">
          Four steps to<br /><span className="italic">certified confidence</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative"
          >
            <span className="text-6xl font-display font-bold text-gold/15">{s.num}</span>
            <h3 className="font-display text-xl font-semibold mt-2 mb-3">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 -right-4 w-8 border-t border-dashed border-border" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PathwaySection;
