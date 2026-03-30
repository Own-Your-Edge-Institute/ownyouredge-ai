const Footer = () => (
  <footer className="border-t border-border px-6 lg:px-12">
    <div className="max-w-[1400px] mx-auto py-16">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground mb-5">Own Your Edge™</p>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
            Professional AI certification for individuals and organizations leading the future.
          </p>
        </div>
        <div className="lg:col-span-2 lg:col-start-8">
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60 mb-4">Navigate</p>
          {["Programs", "Business", "About", "Contact"].map((l) => (
            <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">{l}</a>
          ))}
        </div>
        <div className="lg:col-span-2">
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60 mb-4">Legal</p>
          {["Privacy Policy", "Terms of Service"].map((l) => (
            <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors mb-2">{l}</a>
          ))}
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">© 2026 Own Your Edge™ Institute</p>
        <p className="text-[10px] text-muted-foreground/50 tracking-widest uppercase">Built for the AI-fluent future</p>
      </div>
    </div>
  </footer>
);

export default Footer;
