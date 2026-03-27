import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import certificateBadge from "@/assets/certificate-badge.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const badgeOpacity = useTransform(springY, [0.8, 0.3], [0, 1]);
  const badgeScale = useTransform(springY, [0.8, 0.3], [0.8, 1]);
  const badgeRotateY = useTransform(springX, [0, 1], [-15, 15]);
  const badgeRotateX = useTransform(springY, [0, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.8);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium tracking-[0.2em] uppercase text-gold mb-6"
          >
            Own Your Edge™ Institute
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
          >
            <span className="text-primary-foreground">Lead with</span>
            <br />
            <span className="text-gradient-gold italic">AI fluency.</span>
            <br />
            <span className="text-primary-foreground">Own your edge.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-lg text-primary-foreground/60 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed"
          >
            The certified AI fluency program for professionals and organizations ready to lead the future — not follow it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button className="bg-gold text-accent-foreground hover:bg-gold/90 rounded-full px-8 h-12 text-base font-semibold gap-2">
              Get Certified <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="rounded-full px-8 h-12 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              For Business
            </Button>
          </motion.div>
        </div>

        {/* Certificate reveal */}
        <div className="flex-1 flex items-center justify-center perspective-[1000px]">
          <motion.div
            style={{
              opacity: badgeOpacity,
              scale: badgeScale,
              rotateY: badgeRotateY,
              rotateX: badgeRotateX,
            }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-gold/10 rounded-full blur-3xl" />
            <img
              src={certificateBadge}
              alt="Professional AI Certification Badge"
              width={400}
              height={300}
              className="relative drop-shadow-2xl"
            />
            <motion.p
              style={{ opacity: badgeOpacity }}
              className="text-center mt-6 text-primary-foreground/50 text-sm font-medium tracking-wide"
            >
              Move your cursor to reveal
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
