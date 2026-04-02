import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="px-6 lg:px-12 py-5 flex items-center justify-between bg-white/90 backdrop-blur-xl">
        <a href="/">
          <img src={logo} alt="Own Your Edge™ Institute" className="h-20" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "Individual", href: "/certification" },
            { label: "Enterprise", href: "/enterprise" },
            { label: "About", href: "/#about" },
            { label: "FAQ", href: "/faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium tracking-[0.25em] uppercase text-foreground/60 hover:text-primary transition-colors duration-500"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#certify"
            className="text-[11px] font-medium tracking-[0.25em] uppercase text-white bg-[#3C3489] border border-[#3C3489] px-5 py-2 rounded-full hover:bg-[#7F77DD] hover:border-[#7F77DD] transition-all duration-500"
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
              {[
                { label: "Individual", href: "/certification" },
                { label: "Enterprise", href: "/enterprise" },
                { label: "About", href: "/#about" },
                { label: "FAQ", href: "/faq" },
              ].map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-sm text-foreground/70">{item.label}</a>
              ))}
              <a href="#certify" onClick={() => setOpen(false)} className="inline-flex items-center justify-center bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full">
                Get Certified →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
