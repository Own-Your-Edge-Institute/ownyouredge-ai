import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import certificateBadge from "@/assets/certificate-badge.png";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [hasInteracted, setHasInteracted] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  // Badge reveals as mouse enters the right half
  const badgeOpacity = useTransform(springX, [0.3, 0.6], [0, 1]);
  const badgeScale = useTransform(springX, [0.3, 0.7], [0.85, 1]);
  const badgeRotateY = useTransform(springX, [0, 1], [-8, 8]);
  const badgeRotateX = useTransform(springY, [0, 1], [8, -8]);

  // Orb follows mouse
  const orbX = useTransform(springX, [0, 1], ["-20%", "80%"]);
  const orbY = useTransform(springY, [0, 1], ["-20%", "80%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
    if (!hasInteracted) setHasInteracted(true);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Stagger text lines
  const lines = [
    { text: "Lead with", className: "text-foreground" },
    { text: "AI fluency.", className: "text-gradient-accent italic" },
    { text: "Own your edge.", className: "text-foreground" },
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-end pb-20 lg:pb-32 overflow-hidden cursor-crosshair"
    >
      {/* Animated background orb */}
      <motion.div
        style={{ left: orbX, top: orbY }}
        className="absolute w-[600px] h-[600px] rounded-full glow-orb pointer-events-none animate-pulse-glow"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(hsl(240 10% 95%) 1px, transparent 1px), linear-gradient(90deg, hsl(240 10% 95%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top decorative line */}
      <div className="absolute top-[35%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-8"
            >
              Professional AI Certification
            </motion.p>

            <div className="space-y-0">
              {lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: 120 }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 1 + i * 0.15,
                      duration: 1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.95] tracking-[-0.02em] ${line.className}`}
                  >
                    {line.text}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-start gap-6"
            >
              <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
                The certified AI fluency program for professionals and organizations ready to lead — not follow.
              </p>
              <div className="flex gap-3">
                <a
                  href="#get-certified"
                  className="group flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-primary/80 transition-all"
                >
                  Start Now
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#programs"
                  className="flex items-center px-7 py-3.5 rounded-full text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                >
                  Explore
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Certificate reveal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end" style={{ perspective: "1200px" }}>
            <motion.div
              style={{
                opacity: badgeOpacity,
                scale: badgeScale,
                rotateY: badgeRotateY,
                rotateX: badgeRotateX,
              }}
              className="relative"
            >
              {/* Glow behind badge */}
              <div className="absolute -inset-16 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
              <img
                src={certificateBadge}
                alt="Professional AI Certification Achieved"
                width={380}
                height={284}
                className="relative drop-shadow-[0_0_60px_hsl(255_55%_62%_/_0.3)]"
              />
            </motion.div>
            {/* Hint text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: hasInteracted ? 0 : 0.4 }}
              transition={{ delay: 3 }}
              className="absolute bottom-4 right-8 text-xs text-muted-foreground hidden lg:block"
            >
              ← move cursor to reveal
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
