import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programs = [
  {
    label: "Program",
    title: "Team Program",
    desc: "Upskill entire teams with structured training and AI systems adoption. Your org gets a repeatable certification framework you can deploy to every new hire, every cohort, every quarter.",
    outcome: "After certification: your team shares a common AI framework and a deployment system they can run internally at any scale.",
  },
  {
    label: "Add-on",
    title: "Executive Layer",
    desc: "Leadership briefings and decision architecture for C-suite and senior executives. Every enterprise deployment scoped to your teams, your tools, your goals.",
    outcome: "After certification: C-suite leaders speak the same AI language and make faster, better-informed decisions.",
  },
];

const Enterprise = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />

    {/* Hero */}
    <section className="pt-40 pb-24 lg:pt-52 lg:pb-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium"
          >
            Enterprise Program
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-serif leading-[1.05] mt-4 mb-6"
          >
            Scale AI readiness across
            <br />
            <span className="italic text-primary">your entire organization.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-foreground/40 text-base lg:text-lg leading-relaxed max-w-xl"
          >
            Structured training, measurement, and leadership alignment — built around your teams, your tools, and your goals.
          </motion.p>
        </div>
      </div>
    </section>

    {/* Programs */}
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="group rounded-2xl border border-border/30 p-8 lg:p-10 hover:border-primary/20 transition-colors duration-700"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/30 font-medium">{p.label}</span>
            <h3 className="text-2xl lg:text-3xl font-serif mt-2 mb-3 group-hover:text-primary transition-colors duration-500">{p.title}</h3>
            <p className="text-foreground/40 text-sm leading-relaxed max-w-2xl">{p.desc}</p>
            <p className="text-foreground/20 text-[11px] leading-relaxed mt-4 italic max-w-2xl">{p.outcome}</p>
          </motion.div>
        ))}

        {/* Strategic Advisory — premium card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24, duration: 0.7 }}
          className="group rounded-2xl border p-8 lg:p-10 transition-colors duration-700 bg-[#7F77DD]/[0.06] border-[#7F77DD]/[0.35] hover:bg-[#7F77DD]/[0.10]"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase font-medium" style={{ color: "#7F77DD" }}>Retained Advisory</span>
          <div className="mt-2 mb-1">
            <span className="text-[10px] tracking-wide px-2.5 py-0.5 rounded-full font-medium bg-[#7F77DD]/10 text-[#A89EE0]">Priced separately</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-serif mt-2 mb-3" style={{ color: "#A89EE0" }}>Own Your Edge™ Strategic Advisory</h3>
          <p className="text-foreground/30 text-sm leading-relaxed max-w-2xl">
            Astrid works directly with your leadership team on a retained basis — quarterly or biannual sessions to keep your program current, your curriculum sharp, and your executives ahead of the curve as AI evolves. For organizations that want Astrid in the room.
          </p>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-serif mb-6"
        >
          Ready to get started?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-8 py-3 text-sm font-medium text-primary hover:bg-primary/5 transition-all duration-500"
          >
            Schedule a conversation →
          </a>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Enterprise;
