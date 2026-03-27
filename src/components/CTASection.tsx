import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => (
  <section className="py-24 lg:py-40 relative" id="get-certified">
    <div className="container">
      <div className="relative rounded-3xl overflow-hidden glass-panel p-12 lg:p-20">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full glow-orb animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full glow-orb animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight mb-6">
              Ready to own<br />
              <span className="italic text-gradient-accent">your edge?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Join thousands of professionals building AI fluency that translates to real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <a
              href="#"
              className="group flex items-center justify-between bg-primary text-primary-foreground px-8 py-5 rounded-2xl hover:bg-primary/80 transition-all"
            >
              <div>
                <p className="font-semibold text-lg">Individual Certification</p>
                <p className="text-sm opacity-70 mt-1">Start your AI fluency journey</p>
              </div>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="#"
              className="group flex items-center justify-between border border-border px-8 py-5 rounded-2xl hover:bg-card hover:border-primary/30 transition-all"
            >
              <div>
                <p className="font-semibold text-lg">Enterprise & Teams</p>
                <p className="text-sm text-muted-foreground mt-1">Scale AI readiness across your org</p>
              </div>
              <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
