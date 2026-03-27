import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-24 lg:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-5xl font-display font-bold tracking-tight text-primary-foreground mb-6">
            Ready to own<br /><span className="italic text-gradient-gold">your edge?</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-md mx-auto mb-10 text-lg font-light">
            Join thousands of professionals and organizations building AI fluency that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold text-accent-foreground hover:bg-gold/90 rounded-full px-8 h-12 text-base font-semibold gap-2">
              Start Certification <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="rounded-full px-8 h-12 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Contact for Teams
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
