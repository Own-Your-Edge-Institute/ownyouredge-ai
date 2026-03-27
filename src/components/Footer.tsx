import logo from "@/assets/logo.png";

const links = [
  { label: "Programs", href: "#programs" },
  { label: "For Business", href: "#for-business" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#" },
];

const Footer = () => (
  <footer className="border-t border-border/30">
    <div className="container py-16">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <img src={logo} alt="Own Your Edge™ Institute" className="h-10 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Professional AI certification for individuals and organizations leading the future.
          </p>
        </div>

        <div className="lg:col-span-3 lg:col-start-7">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Navigate</p>
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">Legal</p>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">© 2026 Own Your Edge™ Institute. All rights reserved.</p>
        <p className="text-xs text-muted-foreground">Designed for the AI-fluent future.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
