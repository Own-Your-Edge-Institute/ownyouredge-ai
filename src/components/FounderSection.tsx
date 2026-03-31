import { motion } from "framer-motion";

const FounderSection = () => (
  <section className="py-32 lg:py-48 px-6 lg:px-12 bg-background">
    <div className="max-w-[720px] mx-auto text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium"
      >
        Why Astrid Pilla Built Own Your Edge™
      </motion.span>

      {/* Triple chevron divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center justify-center gap-1 my-8 text-primary/60"
      >
        <span className="text-sm">‹</span>
        <span className="text-sm">‹</span>
        <span className="text-sm">‹</span>
      </motion.div>

      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl lg:text-3xl font-serif italic leading-[1.3] text-foreground/90 mb-12"
      >
        "Every company is adopting AI. Most are figuring it out as they go."
      </motion.blockquote>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.8 }}
        className="space-y-6 text-sm text-foreground/40 leading-relaxed text-left"
      >
        <p>
          She's been a founder, a CMO, a technologist, and an analyst. She's never seen a skills gap move this fast — or cause this much quiet damage.
        </p>
        <p>
          After 7 companies, decades at the intersection of tech and business, and a front-row seat to how organizations actually deploy AI, she saw the same pattern everywhere: half-built programs, undertrained teams, and customer-facing systems that embarrassed the brands running them.
        </p>
        <p>
          Most AI training produces confident incompetence. <span className="text-primary font-medium">Own Your Edge™</span> exists because fluency without rigor isn't fluency. It's liability.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FounderSection;
