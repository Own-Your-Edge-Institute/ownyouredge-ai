import { motion } from "framer-motion";

const FounderSection = () => (
  <section id="about" className="py-32 lg:py-48 px-6 lg:px-12 bg-background">
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
        className="space-y-6 text-sm text-foreground/70 leading-relaxed text-left"
      >
        <p>
          Astrid has spent her career building, advising, and mentoring companies across industries as varied as sports and media, automotive, fashion, healthcare, and beyond. For 17 years she co-founded and operated a multi-million dollar orthodontic practice in the competitive Washington DC market, building every function across PR, operations, marketing, consumer loyalty, philanthropy, professional development, and more.
        </p>
        <p>
          As an AI Strategist and Analyst, she built <span className="text-primary font-medium">Own Your Edge™</span> Institute to bring that hard-won operational knowledge to as many businesses as possible. After decades at the intersection of tech and business, she's had a front-row seat to how organizations actually deploy AI and she kept seeing the same pattern: half-built programs, undertrained teams failing to maximize opportunity, and customer-facing systems that embarrassed the brands running them.
        </p>
        <p>
          Most AI training produces confident incompetence. <span className="text-primary font-medium">Own Your Edge™</span> exists because fluency without rigor is a liability you cannot afford.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FounderSection;
