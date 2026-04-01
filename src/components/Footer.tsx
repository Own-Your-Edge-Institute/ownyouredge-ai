import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border/30 px-6 lg:px-12">
    <div className="max-w-[1400px] mx-auto py-16">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <img src={logo} alt="Own Your Edge™ Institute" className="h-9 mb-5 opacity-90" />
          <p className="text-xs text-foreground/60 leading-relaxed max-w-xs">
            Professional AI certification for individuals and organizations leading the future.
          </p>
        </div>
        <div className="lg:col-span-2 lg:col-start-8">
          <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/50 mb-4">Navigate</p>
          {[
            { label: "Individual", href: "/certification" },
            { label: "Enterprise", href: "/enterprise" },
            { label: "About", href: "#about" },
            { label: "FAQ", href: "/faq" },
            { label: "Contact", href: "/enterprise#contact" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="block text-sm text-foreground/60 hover:text-foreground/90 transition-colors mb-2">{l.label}</a>
          ))}
        </div>
        <div className="lg:col-span-2">
          <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/50 mb-4">Legal</p>
          {["Privacy Policy", "Terms of Service"].map((l) => (
            <a key={l} href="#" className="block text-sm text-foreground/60 hover:text-foreground/90 transition-colors mb-2">{l}</a>
          ))}
        </div>
      </div>
      <div className="border-t border-border/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-[10px] text-foreground/40 tracking-widest uppercase">© {new Date().getFullYear()} Own Your Edge™ Institute</p>
        <p className="text-[10px] text-foreground/40 tracking-widest uppercase">Built for the AI-fluent future</p>
      </div>
    </div>
  </footer>
);

export default Footer;
