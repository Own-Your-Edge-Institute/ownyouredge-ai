import { motion } from "framer-motion";
import certificateBadge from "@/assets/certificate-badge.png";

const CTASection = () => (
  <section className="py-32 lg:py-48 px-6 lg:px-12 relative" id="certify">
    <div className="max-w-[1400px] mx-auto">
      <div className="relative rounded-[2rem] overflow-hidden border border-border/30 border-glow">
        {/* Inner glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 p-10 lg:p-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium"
            >
              Begin Your Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-serif leading-[1.05] mt-4 mb-6"
            >
              Ready to own
              <br />
              <span className="italic text-primary text-glow">your edge?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-foreground/40 text-base leading-relaxed mb-10 max-w-md"
            >
              Join the professionals and organizations building AI fluency that translates into real-world leadership.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-3"
            >
              <a href="#" className="group flex items-center justify-between bg-primary text-primary-foreground px-8 py-4 rounded-2xl hover:shadow-[0_0_40px_hsl(262_50%_58%_/_0.3)] transition-all duration-500">
                <div>
                  <p className="font-medium">Individual Certification</p>
                  <p className="text-xs opacity-60 mt-0.5">Standard + Executive Track</p>
                </div>
                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#" className="group flex items-center justify-between border border-border/50 px-8 py-4 rounded-2xl hover:border-primary/30 hover:bg-card/50 transition-all duration-500">
                <div>
                  <p className="font-medium">Enterprise Program</p>
                  <p className="text-xs text-foreground/40 mt-0.5">Team Program + Executive Layer</p>
                </div>
                <span className="text-xl text-foreground/30 group-hover:text-foreground group-hover:translate-x-1 transition-all">→</span>
              </a>
            </motion.div>
          </div>

          {/* Certificate display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-20 rounded-full bg-primary/8 blur-[80px]" />
              <img
                src={certificateBadge}
                alt="Professional AI Certification"
                width={320}
                height={240}
                loading="lazy"
                className="relative drop-shadow-[0_0_40px_hsl(262_50%_58%_/_0.2)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
