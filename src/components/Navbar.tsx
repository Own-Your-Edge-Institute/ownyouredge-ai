import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = ["Courses", "For Business", "AI Leaders", "About"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container flex items-center justify-between h-16">
        <a href="/">
          <img src={logo} alt="Own Your Edge™ Institute" className="h-10" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Get Certified
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="text-sm font-medium text-muted-foreground">
                  {item}
                </a>
              ))}
              <Button size="sm" className="bg-primary text-primary-foreground rounded-full w-fit px-6">
                Get Certified
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
