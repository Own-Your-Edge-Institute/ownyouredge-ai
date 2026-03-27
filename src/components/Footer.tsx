const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-display text-lg font-bold">
        Own Your Edge<span className="text-gold">™</span> <span className="text-sm font-body font-normal text-muted-foreground ml-2">Institute</span>
      </div>
      <div className="flex gap-8 text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
        <a href="#" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <p className="text-xs text-muted-foreground">© 2026 Own Your Edge™ Institute. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
