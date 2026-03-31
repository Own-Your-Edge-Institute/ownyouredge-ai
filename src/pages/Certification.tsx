import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tracks = [
  {
    label: "Track",
    title: "Standard",
    desc: "Core AI fluency certification for professionals ready to lead with confidence.",
    outcome: "After certification: confidently lead AI initiatives, evaluate tools, and prompt with precision.",
  },
  {
    label: "Upgrade",
    title: "Executive Track",
    desc: "Leadership-level application and strategic decision-making for senior professionals.",
    outcome: "After certification: apply AI to strategic decisions, build team adoption plans, and brief your board.",
  },
];

const Certification = () => (
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
            Individual Certification
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-serif leading-[1.05] mt-4 mb-6"
          >
            Prove you can do more than
            <br />
            <span className="italic text-primary">talk about AI.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-foreground/40 text-base lg:text-lg leading-relaxed max-w-xl"
          >
            Earn a credential that signals strategic capability — not just awareness. Choose the track that fits your level.
          </motion.p>
        </div>
      </div>
    </section>

    {/* Tracks */}
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-6">
        {tracks.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            className="group rounded-2xl border border-border/30 p-8 lg:p-10 hover:border-primary/20 transition-colors duration-700"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase text-foreground/30 font-medium">{t.label}</span>
            <h3 className="text-2xl lg:text-3xl font-serif mt-2 mb-3 group-hover:text-primary transition-colors duration-500">{t.title}</h3>
            <p className="text-foreground/40 text-sm leading-relaxed max-w-2xl">{t.desc}</p>
            <p className="text-foreground/20 text-[11px] leading-relaxed mt-4 italic max-w-2xl">{t.outcome}</p>
          </motion.div>
        ))}
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
          Ready to get certified?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-medium hover:shadow-[0_0_40px_hsl(var(--primary)_/_0.3)] transition-all duration-500"
          >
            Explore Certification →
          </a>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Certification;
