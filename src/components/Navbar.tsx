import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="px-6 lg:px-12 py-6 flex items-center justify-between">
        <a href="/" className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground">
          Own Your Edge™
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Programs", "Business", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] font-medium tracking-[0.25em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-500"
            >
              {item}
            </a>
          ))}
          <a
            href="#certify"
            className="text-[11px] font-medium tracking-[0.25em] uppercase text-primary-foreground bg-primary px-5 py-2 rounded-full hover:opacity-90 transition-all duration-500"
          >
            Get Certified
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {["Programs", "Business", "About"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-foreground/60">{item}</a>
              ))}
              <a href="#certify" className="text-sm font-medium text-primary">Get Certified →</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
