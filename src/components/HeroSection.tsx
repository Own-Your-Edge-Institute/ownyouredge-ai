import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import certificateBadge from "@/assets/certificate-badge.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const mouseX = useMotionValue(0.5);
  const mouseY2 = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY2, { stiffness: 30, damping: 20 });
  const badgeX = useTransform(springX, [0, 1], [-15, 15]);
  const badgeY = useTransform(springY, [0, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY2.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] flex items-end overflow-hidden"
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />

      {/* Floating badge */}
      <motion.div
        style={{ x: badgeX, y: badgeY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="absolute top-1/2 right-[10%] -translate-y-1/2 pointer-events-none hidden lg:block"
      >
        <div className="relative">
          <div className="absolute -inset-16 rounded-full bg-primary/5 blur-[80px]" />
          <img src={certificateBadge} alt="AI Certification" width={300} height={300} className="relative drop-shadow-xl" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 px-6 lg:px-12 pb-16 lg:pb-24 w-full">
        <div className="max-w-[1400px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-primary">
              Own Your Edge™ Institute
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.7, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,8vw,7rem)] font-serif leading-[0.95] tracking-[-0.02em] max-w-4xl text-foreground"
            >
              The AI certification
              <br />
              that stays with you
              <br />
              <span className="italic text-primary text-glow">for life.</span>
              <sup className="text-lg align-super ml-1">™</sup>
            </motion.h1>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 border-t border-foreground/10 pt-8"
          >
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              Professional AI fluency certification for individuals and organizations
              who refuse to be left behind.
            </p>
            <div className="flex gap-4">
              <a href="#certify" className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-medium overflow-hidden hover:shadow-[0_0_30px_hsl(263_45%_55%_/_0.3)] transition-shadow duration-500">
                Begin Certification
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-500 px-4 py-3">
                Learn more ↓
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
