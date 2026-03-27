import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = ["Programs", "For Business", "About"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mt-4 rounded-2xl glass-panel px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="/">
            <img src={logo} alt="Own Your Edge™ Institute" className="h-8" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#get-certified"
              className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/80 transition-colors"
            >
              Get Certified <ArrowUpRight size={14} />
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 flex flex-col gap-4 border-t border-border/30 mt-3">
                {navItems.map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="text-sm text-muted-foreground">
                    {item}
                  </a>
                ))}
                <a href="#get-certified" className="text-sm font-semibold text-primary">
                  Get Certified →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
