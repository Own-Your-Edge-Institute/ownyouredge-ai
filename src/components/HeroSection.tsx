import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import heroTexture from "@/assets/hero-texture.jpg";
import certificateBadge from "@/assets/certificate-badge.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Badge mouse reveal
  const mouseX = useMotionValue(0.5);
  const mouseY2 = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY2, { stiffness: 30, damping: 20 });
  const badgeOpacity = useTransform(springX, [0.3, 0.65], [0, 1]);
  const badgeX = useTransform(springX, [0, 1], [-30, 30]);
  const badgeY = useTransform(springY, [0, 1], [-20, 20]);
  const [interacted, setInteracted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY2.set((e.clientY - rect.top) / rect.height);
    if (!interacted) setInteracted(true);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0.2); mouseY2.set(0.5); }}
      className="relative h-[100vh] flex items-end overflow-hidden cursor-none"
    >
      {/* Background image */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-20">
        <img src={heroTexture} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </motion.div>

      {/* Floating badge - mouse reveal */}
      <motion.div
        style={{ opacity: badgeOpacity, x: badgeX, y: badgeY }}
        className="absolute top-1/2 right-[10%] -translate-y-1/2 pointer-events-none hidden lg:block"
      >
        <div className="relative">
          <div className="absolute -inset-12 rounded-full bg-primary/10 blur-[60px]" />
          <img src={certificateBadge} alt="AI Certification" width={280} height={210} className="relative drop-shadow-2xl" />
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
              className="text-[clamp(2.5rem,8vw,7rem)] font-serif leading-[0.95] tracking-[-0.02em] max-w-4xl"
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
            <p className="text-foreground/40 max-w-md text-sm leading-relaxed">
              Professional AI fluency certification for individuals and organizations
              who refuse to be left behind.
            </p>
            <div className="flex gap-4">
              <a href="#certify" className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-medium overflow-hidden hover:shadow-[0_0_30px_hsl(262_50%_58%_/_0.4)] transition-shadow duration-500">
                Begin Certification
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors duration-500 px-4 py-3">
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
        <div className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
