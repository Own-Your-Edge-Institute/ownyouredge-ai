import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Professionals Certified" },
  { value: "250+", label: "Organizations Served" },
  { value: "94%", label: "Completion Rate" },
  { value: "4.9", label: "Average Rating" },
];

const StatsBar = () => (
  <section className="relative border-y border-border/50">
    <div className="container py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="text-3xl lg:text-4xl font-display font-bold text-gradient-accent">{s.value}</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
