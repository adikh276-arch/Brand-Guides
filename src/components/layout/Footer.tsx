const logo = "https://res.cloudinary.com/dh02ythrk/image/upload/v1781582205/mantracare-brand-guides/mantracare-logo.png";

export function Footer() {
  return (
    <footer className="py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground border-t border-border/60 mt-12">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" className="h-6 opacity-90" />
        <span>© 2026 MantraCare. All rights reserved.</span>
      </div>
      <div>Brand Guidelines · v3.0 · Crafted with care.</div>
    </footer>
  );
}
